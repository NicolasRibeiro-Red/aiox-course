"""
AIOX Course — Batch TTS Generator
Converte todas as licoes MDX em audio MP3 usando edge-tts.
Baseado no anomia-to-audio.py. Custo: $0.

Uso:
  python scripts/generate-lesson-audio.py                    # Gera todos
  python scripts/generate-lesson-audio.py --module 0         # So modulo 0
  python scripts/generate-lesson-audio.py --lesson 01        # So licao 01 de cada modulo
  python scripts/generate-lesson-audio.py --dry-run          # Mostra o que faria
  python scripts/generate-lesson-audio.py --force            # Regera mesmo se MP3 ja existe
"""

import asyncio
import re
import sys
import argparse
import time
from pathlib import Path

import edge_tts

DEFAULT_VOICE = "pt-BR-AntonioNeural"
DEFAULT_RATE = "-5%"

# Project paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_DIR = SCRIPT_DIR.parent
CONTENT_DIR = PROJECT_DIR / "src" / "content"
OUTPUT_DIR = PROJECT_DIR / "public" / "audio"


def clean_mdx_for_tts(text: str) -> str:
    """Strip MDX/markdown formatting for clean TTS output."""

    # Remove YAML frontmatter
    text = re.sub(r"^---\n.*?---\n", "", text, flags=re.DOTALL)

    # Remove import statements
    text = re.sub(r"^import\s+.*$", "", text, flags=re.MULTILINE)

    # Remove export statements
    text = re.sub(r"^export\s+.*$", "", text, flags=re.MULTILINE)

    # Remove JSX self-closing tags: <Component prop="value" />
    text = re.sub(r"<\w+[^>]*/\s*>", "", text)

    # Remove JSX opening/closing tags but KEEP inner text content
    # e.g., <Callout type="info">text</Callout> -> text
    text = re.sub(r"<(\w+)[^>]*>", "", text)
    text = re.sub(r"</\w+>", "", text)

    # Remove code blocks (triple backticks)
    text = re.sub(r"```[\w-]*\n.*?```", "", text, flags=re.DOTALL)

    # Remove inline code
    text = re.sub(r"`([^`]+)`", r"\1", text)

    # Handle markdown tables — convert to spoken list
    lines = text.split("\n")
    cleaned = []
    in_table = False
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("|") and stripped.endswith("|"):
            if "---" in stripped:
                continue  # separator row
            if not in_table:
                in_table = True
            cells = [c.strip() for c in stripped.strip("|").split("|")]
            cells = [c for c in cells if c]
            if cells:
                cleaned.append(". ".join(cells) + ".")
        else:
            in_table = False
            cleaned.append(line)
    text = "\n".join(cleaned)

    # Remove markdown formatting
    text = re.sub(r"#{1,6}\s+", "", text)  # headers
    text = re.sub(r"\*\*(.+?)\*\*", r"\1", text)  # bold
    text = re.sub(r"\*(.+?)\*", r"\1", text)  # italic
    text = re.sub(r">\s*", "", text)  # blockquotes
    text = re.sub(r"^- ", "", text, flags=re.MULTILINE)  # unordered list
    text = re.sub(r"^\d+\.\s+", "", text, flags=re.MULTILINE)  # ordered list
    text = re.sub(r"\[(.+?)\]\(.+?\)", r"\1", text)  # links
    text = re.sub(r"!\[.*?\]\(.*?\)", "", text)  # images

    # Remove horizontal rules
    text = re.sub(r"^---+$", "", text, flags=re.MULTILINE)

    # Remove box-drawing and special unicode
    text = re.sub(r"[─═╔╗╚╝╠╣║┌┐└┘├┤│▲▼►◄▸▹●○■□█▒░┬┴┼╬╦╩╨╧╤╥]", "", text)

    # Remove emoji (keep text context)
    text = re.sub(
        r"[\U0001F300-\U0001F9FF\U0001FA00-\U0001FA6F\U0001FA70-\U0001FAFF"
        r"\U00002702-\U000027B0\U000024C2-\U0001F251]",
        "", text
    )

    # Clean up multiple newlines
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = text.strip()

    # Natural pauses and symbol replacements
    text = text.replace("—", " — ")
    text = text.replace("→", " para ")
    text = text.replace("←", " de ")
    text = text.replace("↑", " aumenta")
    text = text.replace("↓", " diminui")
    text = text.replace("≠", " nao e igual a ")
    text = text.replace(">=", " maior ou igual a ")
    text = text.replace("<=", " menor ou igual a ")
    text = text.replace("!=", " diferente de ")
    text = text.replace("&&", " e ")
    text = text.replace("||", " ou ")
    text = text.replace("@", " arroba ")
    text = text.replace("*", "")
    text = text.replace("&middot;", ". ")

    return text


async def generate_audio(text: str, voice: str, rate: str, output: Path):
    """Generate MP3 from text using edge-tts."""
    communicate = edge_tts.Communicate(text, voice, rate=rate)
    await communicate.save(str(output))


def discover_lessons(module_filter: str = None, lesson_filter: str = None) -> list[dict]:
    """Discover all MDX lesson files, optionally filtered."""
    lessons = []

    for module_dir in sorted(CONTENT_DIR.iterdir()):
        if not module_dir.is_dir() or not module_dir.name.startswith("module-"):
            continue

        module_num = module_dir.name.replace("module-", "")

        if module_filter is not None and module_num != module_filter:
            continue

        for mdx_file in sorted(module_dir.glob("*.mdx")):
            lesson_num = mdx_file.stem.split("-")[0]  # "01" from "01-what-is-aiox"

            if lesson_filter is not None and lesson_num != lesson_filter:
                continue

            # Output path: public/audio/module-0/01-what-is-aiox.mp3
            out_dir = OUTPUT_DIR / module_dir.name
            out_file = out_dir / mdx_file.with_suffix(".mp3").name

            lessons.append({
                "module": module_num,
                "lesson": lesson_num,
                "slug": mdx_file.stem,
                "input": mdx_file,
                "output": out_file,
            })

    return lessons


def main():
    parser = argparse.ArgumentParser(description="Generate podcast audio for AIOX Course lessons")
    parser.add_argument("--module", default=None, help="Filter by module number (e.g., 0, 1, 2)")
    parser.add_argument("--lesson", default=None, help="Filter by lesson number (e.g., 01, 02)")
    parser.add_argument("--voice", default=DEFAULT_VOICE, help=f"TTS voice (default: {DEFAULT_VOICE})")
    parser.add_argument("--rate", default=DEFAULT_RATE, help=f"Speech rate (default: {DEFAULT_RATE})")
    parser.add_argument("--dry-run", action="store_true", help="Show what would be generated")
    parser.add_argument("--force", action="store_true", help="Regenerate even if MP3 exists")
    args = parser.parse_args()

    lessons = discover_lessons(args.module, args.lesson)

    if not lessons:
        print("No lessons found matching filters.")
        sys.exit(1)

    print(f"{'[DRY RUN] ' if args.dry_run else ''}Found {len(lessons)} lessons to process\n")

    total_words = 0
    total_generated = 0
    total_skipped = 0
    start_time = time.time()

    for i, lesson in enumerate(lessons, 1):
        tag = f"[module-{lesson['module']}/{lesson['slug']}]"

        # Skip if already exists (unless --force)
        if lesson["output"].exists() and not args.force:
            print(f"  SKIP {tag} — MP3 already exists")
            total_skipped += 1
            continue

        if args.dry_run:
            text = lesson["input"].read_text(encoding="utf-8")
            clean = clean_mdx_for_tts(text)
            wc = len(clean.split())
            total_words += wc
            print(f"  WOULD {tag} — {wc} words (~{wc/150:.1f} min)")
            continue

        # Ensure output directory
        lesson["output"].parent.mkdir(parents=True, exist_ok=True)

        # Read and clean
        text = lesson["input"].read_text(encoding="utf-8")
        clean_text = clean_mdx_for_tts(text)
        word_count = len(clean_text.split())
        total_words += word_count

        print(f"  [{i}/{len(lessons)}] {tag} — {word_count} words (~{word_count/150:.1f} min)")

        # Generate
        try:
            asyncio.run(generate_audio(clean_text, args.voice, args.rate, lesson["output"]))
            size_mb = lesson["output"].stat().st_size / (1024 * 1024)
            print(f"           -> {lesson['output'].name} ({size_mb:.1f} MB)")
            total_generated += 1
        except Exception as e:
            print(f"           -> ERROR: {e}")

    elapsed = time.time() - start_time

    print(f"\n{'[DRY RUN] ' if args.dry_run else ''}Summary:")
    print(f"  Total lessons: {len(lessons)}")
    print(f"  Generated: {total_generated}")
    print(f"  Skipped: {total_skipped}")
    print(f"  Total words: {total_words:,}")
    print(f"  Est. audio duration: {total_words/150:.0f} min")
    print(f"  Elapsed: {elapsed:.1f}s")
    print(f"  Cost: $0.00")


if __name__ == "__main__":
    main()
