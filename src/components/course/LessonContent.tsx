"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import { useProgressStore } from "@/stores/progress";

interface LessonContentProps {
  lessonId: string;
  moduleId: string;
}

// Dynamic MDX imports mapped by lesson ID
const lessonComponents: Record<
  string,
  () => Promise<{ default: ComponentType }>
> = {
  // Module 0: Welcome
  "welcome-what-is-aiox": () => import("@/content/module-0/01-what-is-aiox.mdx"),
  "welcome-the-difference": () => import("@/content/module-0/02-the-aiox-difference.mdx"),
  "welcome-roadmap": () => import("@/content/module-0/03-course-roadmap.mdx"),

  // Module 1: Getting Started
  "gs-prerequisites": () => import("@/content/module-1/01-prerequisites.mdx"),
  "gs-installation": () => import("@/content/module-1/02-installation.mdx"),
  "gs-platform-setup": () => import("@/content/module-1/03-platform-setup.mdx"),
  "gs-first-value": () => import("@/content/module-1/04-first-value.mdx"),
  "gs-project-structure": () => import("@/content/module-1/05-project-structure.mdx"),

  // Module 2: Core Architecture
  "arch-cli-first": () => import("@/content/module-2/01-cli-first.mdx"),
  "arch-two-innovations": () => import("@/content/module-2/02-two-innovations.mdx"),
  "arch-core-components": () => import("@/content/module-2/03-core-components.mdx"),
  "arch-template-system": () => import("@/content/module-2/04-template-system.mdx"),
  "arch-glossary": () => import("@/content/module-2/05-glossary-tech-stack.mdx"),

  // Module 3: Agent System
  "agents-architecture": () => import("@/content/module-3/01-agent-architecture.mdx"),
  "agents-master": () => import("@/content/module-3/02-aiox-master.mdx"),
  "agents-planning": () => import("@/content/module-3/03-planning-agents.mdx"),
  "agents-development": () => import("@/content/module-3/04-development-agents.mdx"),
  "agents-process": () => import("@/content/module-3/05-process-agents.mdx"),
  "agents-operations": () => import("@/content/module-3/06-operations-agents.mdx"),
  "agents-commands": () => import("@/content/module-3/07-commands-reference.mdx"),

  // Module 4: Workflows
  "wf-planning": () => import("@/content/module-4/01-planning-workflow.mdx"),
  "wf-greenfield": () => import("@/content/module-4/02-greenfield-workflows.mdx"),
  "wf-brownfield": () => import("@/content/module-4/03-brownfield-workflows.mdx"),
  "wf-story-cycle": () => import("@/content/module-4/04-story-development-cycle.mdx"),
  "wf-quality-loops": () => import("@/content/module-4/05-qa-design-system.mdx"),
  "wf-git": () => import("@/content/module-4/06-git-workflow.mdx"),

  // Module 5: Quality, Security & Memory
  "qsm-quality-gates": () => import("@/content/module-5/01-quality-gates.mdx"),
  "qsm-coderabbit": () => import("@/content/module-5/02-coderabbit.mdx"),
  "qsm-security": () => import("@/content/module-5/03-security-hardening.mdx"),
  "qsm-memory": () => import("@/content/module-5/04-memory-system.mdx"),
  "qsm-performance": () => import("@/content/module-5/05-performance.mdx"),
  "qsm-failure-cases": () => import("@/content/module-5/06-when-things-fail.mdx"),

  // Module 6: IDE Integration
  "ide-claude-code": () => import("@/content/module-6/01-claude-code.mdx"),
  "ide-gemini-codex": () => import("@/content/module-6/02-gemini-codex.mdx"),
  "ide-cursor-copilot": () => import("@/content/module-6/03-cursor-copilot.mdx"),
  "ide-hook-matrix": () => import("@/content/module-6/04-hook-matrix.mdx"),

  // Module 7: Squads
  "squads-overview": () => import("@/content/module-7/01-squads-overview.mdx"),
  "squads-structure": () => import("@/content/module-7/02-squad-structure.mdx"),
  "squads-first": () => import("@/content/module-7/03-first-squad.mdx"),
  "squads-case-study": () => import("@/content/module-7/04-case-study.mdx"),
  "squads-api-migration": () => import("@/content/module-7/05-squad-api-migration.mdx"),

  // Module 8: Advanced
  "adv-e2e-project": () => import("@/content/module-8/01-e2e-project.mdx"),
  "adv-execution-profiles": () => import("@/content/module-8/02-execution-profiles.mdx"),
  "adv-llm-routing": () => import("@/content/module-8/03-llm-routing.mdx"),
  "adv-contributing": () => import("@/content/module-8/04-contributing.mdx"),
  "adv-roadmap": () => import("@/content/module-8/05-roadmap-community.mdx"),
};

export function LessonContent({ lessonId, moduleId }: LessonContentProps) {
  const [Content, setContent] = useState<ComponentType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { isLessonCompleted, toggleLesson } = useProgressStore();
  const completed = isLessonCompleted(lessonId);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setContent(null);

    const loader = lessonComponents[lessonId];
    if (loader) {
      loader()
        .then((mod) => {
          setContent(() => mod.default);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [lessonId]);

  return (
    <div>
      {/* Lesson Body */}
      <article className="max-w-none [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:tracking-tight [&>h1]:text-foreground [&>h1]:mb-6 [&>h1]:mt-10 [&>h1:first-child]:mt-0 [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-foreground [&>h2]:mb-4 [&>h2]:mt-8 [&>h2]:border-b [&>h2]:border-border [&>h2]:pb-2 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mb-3 [&>h3]:mt-6 [&>p]:text-base [&>p]:leading-7 [&>p]:text-zinc-300 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:list-inside [&>ul]:space-y-2 [&>ul]:text-zinc-300 [&>ul]:mb-4 [&>ul]:ml-4 [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:space-y-2 [&>ol]:text-zinc-300 [&>ol]:mb-4 [&>ol]:ml-4 [&>pre]:bg-card [&>pre]:border [&>pre]:border-border [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-x-auto [&>pre]:mb-4 [&>pre]:text-sm [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted [&>blockquote]:mb-4 [&>hr]:border-border [&>hr]:my-8 [&>table]:w-full [&>table]:text-sm [&>table]:border-collapse [&>table]:mb-4 [&_th]:border [&_th]:border-border [&_th]:bg-card [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_td]:border [&_td]:border-border [&_td]:px-4 [&_td]:py-2 [&_td]:text-zinc-300 [&_code]:bg-card [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_code]:text-accent [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold [&_strong]:text-foreground">
        {loading ? (
          <div className="space-y-4">
            <div className="h-4 bg-card rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-card rounded w-full animate-pulse" />
            <div className="h-4 bg-card rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-card rounded w-2/3 animate-pulse" />
            <div className="h-4 bg-card rounded w-full animate-pulse" />
          </div>
        ) : Content ? (
          <Content />
        ) : (
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-muted text-lg mb-2">
              {error ? "Erro ao carregar conteudo" : "Conteudo em desenvolvimento"}
            </p>
            <p className="text-sm text-zinc-500">
              {error
                ? "Tente recarregar a pagina."
                : "Esta licao sera preenchida com conteudo da documentacao oficial do AIOX."}
            </p>
          </div>
        )}
      </article>

      {/* Completion Toggle */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => toggleLesson(lessonId)}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
            completed
              ? "bg-accent/10 text-accent border border-accent/30"
              : "bg-card border border-border hover:border-accent/50 text-muted hover:text-foreground"
          }`}
        >
          {completed ? (
            <>
              <span>&#10003;</span> Licao Concluida
            </>
          ) : (
            "Marcar como Concluida"
          )}
        </button>
      </div>
    </div>
  );
}
