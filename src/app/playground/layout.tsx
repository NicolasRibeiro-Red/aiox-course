import Link from "next/link";

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl">👑</span>
            <span className="font-bold text-sm tracking-tight">
              AIOX Course
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-muted">
            <Link
              href="/course"
              className="hover:text-foreground transition-colors"
            >
              Curso
            </Link>
            <Link
              href="/playground"
              className="text-foreground"
            >
              Playground
            </Link>
            <Link
              href="/glossary"
              className="hover:text-foreground transition-colors"
            >
              Glossario
            </Link>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
