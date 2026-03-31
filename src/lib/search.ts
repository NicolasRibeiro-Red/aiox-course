import Fuse from "fuse.js";
import { modules } from "@/content/modules";
import type { Lesson } from "@/types/course";

interface SearchItem {
  lessonId: string;
  moduleId: string;
  moduleName: string;
  moduleIcon: string;
  lessonTitle: string;
  lessonDescription: string;
  moduleNumber: number;
  lessonNumber: number;
}

const searchItems: SearchItem[] = modules.flatMap((mod) =>
  mod.lessons.map((lesson) => ({
    lessonId: lesson.id,
    moduleId: mod.id,
    moduleName: mod.title,
    moduleIcon: mod.icon,
    lessonTitle: lesson.title,
    lessonDescription: lesson.description,
    moduleNumber: mod.number,
    lessonNumber: lesson.number,
  }))
);

const fuse = new Fuse(searchItems, {
  keys: [
    { name: "lessonTitle", weight: 0.4 },
    { name: "lessonDescription", weight: 0.3 },
    { name: "moduleName", weight: 0.2 },
    { name: "lessonId", weight: 0.1 },
  ],
  threshold: 0.4,
  includeScore: true,
});

export function searchLessons(query: string): SearchItem[] {
  if (!query.trim()) return [];
  return fuse.search(query, { limit: 10 }).map((r) => r.item);
}

export type { SearchItem };
