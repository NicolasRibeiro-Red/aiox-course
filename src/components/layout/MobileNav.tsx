"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Module } from "@/types/course";

export function MobileNav({ modules }: { modules: Module[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-hover text-background w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors"
        aria-label="Menu de navegacao"
      >
        {open ? (
          <span className="text-lg">&times;</span>
        ) : (
          <span className="text-sm">&#9776;</span>
        )}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed inset-y-0 left-0 w-72 bg-card border-r border-border z-50 overflow-y-auto py-4 px-3">
            <div className="flex items-center gap-2 px-3 mb-6">
              <span className="text-xl">👑</span>
              <span className="font-bold text-sm">AIOX Course</span>
            </div>

            {modules.map((mod) => (
              <div key={mod.id} className="mb-3">
                <Link
                  href={`/course/${mod.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === `/course/${mod.id}`
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:text-foreground hover:bg-zinc-800"
                  }`}
                >
                  <span>{mod.icon}</span>
                  <span className="truncate">
                    {mod.number}. {mod.title}
                  </span>
                </Link>

                <div className="ml-4 mt-1 space-y-0.5">
                  {mod.lessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={`/course/${mod.id}/${lesson.id}`}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-1.5 rounded text-xs transition-colors ${
                        pathname === `/course/${mod.id}/${lesson.id}`
                          ? "bg-accent/10 text-accent"
                          : "text-zinc-500 hover:text-zinc-300"
                      }`}
                    >
                      {mod.number}.{lesson.number} {lesson.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
