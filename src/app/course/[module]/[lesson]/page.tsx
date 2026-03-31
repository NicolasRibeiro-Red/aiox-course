import { notFound } from "next/navigation";
import Link from "next/link";
import { modules } from "@/content/modules";
import { LessonContent } from "@/components/course/LessonContent";

export function generateStaticParams() {
  return modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({
      module: mod.id,
      lesson: lesson.id,
    }))
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ module: string; lesson: string }>;
}) {
  const { module: moduleId, lesson: lessonId } = await params;
  const mod = modules.find((m) => m.id === moduleId);
  if (!mod) notFound();

  const lessonIndex = mod.lessons.findIndex((l) => l.id === lessonId);
  if (lessonIndex === -1) notFound();

  const lesson = mod.lessons[lessonIndex];
  const prevLesson = lessonIndex > 0 ? mod.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < mod.lessons.length - 1
      ? mod.lessons[lessonIndex + 1]
      : null;

  // Find next module's first lesson if this is the last lesson
  const nextModuleFirstLesson = !nextLesson
    ? (() => {
        const nextMod = modules.find((m) => m.number === mod.number + 1);
        return nextMod?.lessons[0]
          ? { lesson: nextMod.lessons[0], moduleId: nextMod.id }
          : null;
      })()
    : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link
          href="/course"
          className="hover:text-foreground transition-colors"
        >
          Curso
        </Link>
        <span>/</span>
        <Link
          href={`/course/${mod.id}`}
          className="hover:text-foreground transition-colors"
        >
          {mod.title}
        </Link>
        <span>/</span>
        <span className="text-foreground">{lesson.title}</span>
      </div>

      {/* Lesson Header */}
      <div className="mb-10">
        <span className="text-xs font-mono text-muted">
          Licao {mod.number}.{lesson.number}
        </span>
        <h1 className="text-3xl font-bold mt-1 mb-3">{lesson.title}</h1>
        <p className="text-muted">{lesson.description}</p>
        <div className="flex items-center gap-4 mt-4 text-xs text-muted">
          <span>{lesson.estimatedMinutes} min de leitura</span>
          <span>&middot;</span>
          <span>{lesson.sourceDocs.length} fonte(s)</span>
        </div>
      </div>

      {/* Lesson Content */}
      <LessonContent lessonId={lesson.id} moduleId={mod.id} />

      {/* Navigation */}
      <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
        {prevLesson ? (
          <Link
            href={`/course/${mod.id}/${prevLesson.id}`}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            &larr; {prevLesson.title}
          </Link>
        ) : (
          <div />
        )}
        {nextLesson ? (
          <Link
            href={`/course/${mod.id}/${nextLesson.id}`}
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            {nextLesson.title} &rarr;
          </Link>
        ) : nextModuleFirstLesson ? (
          <Link
            href={`/course/${nextModuleFirstLesson.moduleId}/${nextModuleFirstLesson.lesson.id}`}
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            Proximo modulo: {nextModuleFirstLesson.lesson.title} &rarr;
          </Link>
        ) : (
          <span className="text-sm text-muted">Fim do curso!</span>
        )}
      </div>
    </div>
  );
}
