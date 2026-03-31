import Link from "next/link";
import { notFound } from "next/navigation";
import { modules } from "@/content/modules";

export function generateStaticParams() {
  return modules.map((mod) => ({ module: mod.id }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ module: string }>;
}) {
  const { module: moduleId } = await params;
  const mod = modules.find((m) => m.id === moduleId);

  if (!mod) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{mod.icon}</span>
          <div>
            <span className="text-xs font-mono text-muted block">
              Modulo {mod.number}
            </span>
            <h1 className="text-3xl font-bold">{mod.title}</h1>
          </div>
        </div>
        <p className="text-muted text-lg">{mod.description}</p>
      </div>

      <div className="space-y-3">
        {mod.lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/course/${mod.id}/${lesson.id}`}
            className="flex items-center gap-4 bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-colors group"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-mono text-muted group-hover:bg-accent/10 group-hover:text-accent transition-colors">
              {mod.number}.{lesson.number}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold group-hover:text-accent transition-colors">
                {lesson.title}
              </h3>
              <p className="text-sm text-muted truncate">
                {lesson.description}
              </p>
            </div>
            <div className="flex-shrink-0 text-xs text-muted">
              {lesson.estimatedMinutes} min
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
