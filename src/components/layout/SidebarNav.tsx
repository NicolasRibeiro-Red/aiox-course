"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Module } from "@/types/course";

export function SidebarNav({ modules }: { modules: Module[] }) {
  const pathname = usePathname();

  return (
    <nav className="py-4 px-3">
      {modules.map((mod) => (
        <div key={mod.id} className="mb-4">
          <Link
            href={`/course/${mod.id}`}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              pathname === `/course/${mod.id}`
                ? "bg-accent/10 text-accent"
                : "text-muted hover:text-foreground hover:bg-card"
            }`}
          >
            <span className="text-base">{mod.icon}</span>
            <span className="truncate">
              {mod.number}. {mod.title}
            </span>
          </Link>

          <div className="ml-4 mt-1 space-y-0.5">
            {mod.lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/course/${mod.id}/${lesson.id}`}
                className={`block px-3 py-1.5 rounded text-xs transition-colors ${
                  pathname === `/course/${mod.id}/${lesson.id}`
                    ? "bg-accent/10 text-accent"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-card"
                }`}
              >
                <span className="truncate">
                  {mod.number}.{lesson.number} {lesson.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
