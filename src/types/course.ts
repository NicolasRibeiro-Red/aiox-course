export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  lessonCount: number;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  number: number;
  title: string;
  description: string;
  sourceDocs: string[];
  estimatedMinutes: number;
}

export interface Agent {
  id: string;
  name: string;
  icon: string;
  title: string;
  archetype: string;
  zodiac: string;
  description: string;
  commands: string[];
  whenToUse: string;
}

export interface ProgressState {
  completedLessons: string[];
  currentLesson: string | null;
  toggleLesson: (lessonId: string) => void;
  setCurrentLesson: (lessonId: string | null) => void;
  getModuleProgress: (moduleId: string) => number;
  isLessonCompleted: (lessonId: string) => boolean;
}
