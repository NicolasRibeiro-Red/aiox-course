"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { searchLessons, type SearchItem } from "@/lib/search";
import { modules } from "@/content/modules";

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setQuery("");
      setResults([]);
    }
  }, [open]);

  useEffect(() => {
    setResults(searchLessons(query));
  }, [query]);

  const navigate = (item: SearchItem) => {
    router.push(`/course/${item.moduleId}/${item.lessonId}`);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 z-[100]"
        onClick={() => setOpen(false)}
      />
      <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-[101]">
        <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden mx-4">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
            <span className="text-muted text-sm">&#128269;</span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar licoes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-zinc-600 outline-none"
            />
            <kbd className="text-xs text-zinc-600 bg-zinc-800 px-1.5 py-0.5 rounded">
              ESC
            </kbd>
          </div>

          {results.length > 0 && (
            <div className="max-h-80 overflow-y-auto py-2">
              {results.map((item) => (
                <button
                  key={item.lessonId}
                  onClick={() => navigate(item)}
                  className="w-full text-left px-4 py-2.5 hover:bg-zinc-800 transition-colors flex items-center gap-3"
                >
                  <span className="text-base">{item.moduleIcon}</span>
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">
                      {item.lessonTitle}
                    </div>
                    <div className="text-xs text-muted truncate">
                      Modulo {item.moduleNumber} &middot; Licao{" "}
                      {item.lessonNumber}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {query && results.length === 0 && (
            <div className="py-8 text-center text-sm text-muted">
              Nenhum resultado para &quot;{query}&quot;
            </div>
          )}

          {!query && (
            <div className="py-6 text-center text-sm text-zinc-600">
              Digite para buscar entre {modules.length} modulos e suas licoes
            </div>
          )}
        </div>
      </div>
    </>
  );
}
