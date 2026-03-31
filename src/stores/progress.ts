"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProgressState } from "@/types/course";
import { modules } from "@/content/modules";

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedLessons: [],
      currentLesson: null,

      toggleLesson: (lessonId: string) => {
        set((state) => {
          const completed = state.completedLessons.includes(lessonId);
          return {
            completedLessons: completed
              ? state.completedLessons.filter((id) => id !== lessonId)
              : [...state.completedLessons, lessonId],
          };
        });
      },

      setCurrentLesson: (lessonId: string | null) => {
        set({ currentLesson: lessonId });
      },

      getModuleProgress: (moduleId: string) => {
        const mod = modules.find((m) => m.id === moduleId);
        if (!mod) return 0;
        const completed = get().completedLessons.filter((id) =>
          mod.lessons.some((l) => l.id === id)
        ).length;
        return Math.round((completed / mod.lessonCount) * 100);
      },

      isLessonCompleted: (lessonId: string) => {
        return get().completedLessons.includes(lessonId);
      },
    }),
    {
      name: "aiox-course-progress",
    }
  )
);
