"use client";

import Link from "next/link";
import { modules, getTotalLessons } from "@/content/modules";
import { useProgressStore } from "@/stores/progress";

export default function CourseDashboard() {
  const { completedLessons, getModuleProgress } = useProgressStore();
  const totalLessons = getTotalLessons();
  const overallProgress = totalLessons > 0
    ? Math.round((completedLessons.length / totalLessons) * 100)
    : 0;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">AIOX Framework Course</h1>
        <p className="text-muted">
          9 modulos &middot; {totalLessons} licoes &middot; Do basico ao
          avancado
        </p>

        {/* Overall Progress */}
        <div className="mt-6 bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Progresso Geral</span>
            <span className="text-sm text-muted">
              {completedLessons.length}/{totalLessons} licoes
            </span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-2">
            <div
              className="bg-accent rounded-full h-2 transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <div className="text-right mt-1 text-xs text-muted">
            {overallProgress}%
          </div>
        </div>
      </div>

      {/* Module Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod) => {
          const progress = getModuleProgress(mod.id);
          return (
            <Link
              key={mod.id}
              href={`/course/${mod.id}`}
              className="bg-card border border-border rounded-lg p-5 hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{mod.icon}</span>
                <span className="text-xs font-mono text-muted">
                  M{mod.number}
                </span>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                {mod.title}
              </h3>
              <p className="text-xs text-muted line-clamp-2 mb-4">
                {mod.description}
              </p>

              {/* Module Progress */}
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-zinc-800 rounded-full h-1.5">
                  <div
                    className="bg-accent rounded-full h-1.5 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-xs text-muted whitespace-nowrap">
                  {mod.lessonCount} licoes
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
