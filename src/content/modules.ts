import type { Module, Lesson } from "@/types/course";

export const modules: Module[] = [
  {
    id: "welcome",
    number: 0,
    title: "Welcome & Overview",
    description:
      "Entenda o que é o AIOX, seu diferencial e o que você vai aprender neste curso.",
    icon: "👋",
    lessonCount: 3,
    lessons: [
      {
        id: "welcome-what-is-aiox",
        moduleId: "welcome",
        number: 1,
        title: "O que é AIOX?",
        description:
          "O meta-framework para desenvolvimento full-stack orquestrado por agentes IA.",
        sourceDocs: ["README.en.md", "docs/core-architecture.md"],
        estimatedMinutes: 8,
      },
      {
        id: "welcome-the-difference",
        moduleId: "welcome",
        number: 2,
        title: "O Diferencial AIOX: CLI First + Agentic Planning",
        description:
          "Por que CLI primeiro, planejamento agêntico e desenvolvimento contextualizado mudam tudo.",
        sourceDocs: [
          "docs/GUIDING-PRINCIPLES.md",
          "docs/guides/user-guide.md",
        ],
        estimatedMinutes: 10,
      },
      {
        id: "welcome-roadmap",
        moduleId: "welcome",
        number: 3,
        title: "Roadmap do Curso",
        description:
          "O que você vai aprender em cada módulo e como aproveitar ao máximo.",
        sourceDocs: ["docs/roadmap.md"],
        estimatedMinutes: 5,
      },
    ],
  },
  {
    id: "getting-started",
    number: 1,
    title: "Getting Started",
    description:
      "Instale, configure e rode seu primeiro agente AIOX em menos de 10 minutos.",
    icon: "🚀",
    lessonCount: 5,
    lessons: [
      {
        id: "gs-prerequisites",
        moduleId: "getting-started",
        number: 1,
        title: "Pré-requisitos",
        description: "Node.js, npm, Git e IDE — tudo que você precisa.",
        sourceDocs: ["docs/getting-started.md"],
        estimatedMinutes: 5,
      },
      {
        id: "gs-installation",
        moduleId: "getting-started",
        number: 2,
        title: "Instalação: npx aiox-core init",
        description: "O wizard moderno que configura tudo pra você.",
        sourceDocs: ["docs/npx-install.md", "docs/installation/README.md"],
        estimatedMinutes: 10,
      },
      {
        id: "gs-platform-setup",
        moduleId: "getting-started",
        number: 3,
        title: "Setup por Plataforma",
        description: "Configurações específicas para Windows, macOS e Linux.",
        sourceDocs: [
          "docs/installation/windows.md",
          "docs/installation/macos.md",
          "docs/installation/linux.md",
        ],
        estimatedMinutes: 8,
      },
      {
        id: "gs-first-value",
        moduleId: "getting-started",
        number: 4,
        title: "Primeiro Valor em 10 Minutos",
        description: "Ative seu primeiro agente e veja o AIOX em ação.",
        sourceDocs: ["docs/getting-started.md"],
        estimatedMinutes: 10,
      },
      {
        id: "gs-project-structure",
        moduleId: "getting-started",
        number: 5,
        title: "Estrutura do Projeto .aiox-core/",
        description: "Entenda como o framework organiza agents, tasks e workflows.",
        sourceDocs: ["docs/framework/source-tree.md"],
        estimatedMinutes: 12,
      },
    ],
  },
  {
    id: "core-architecture",
    number: 2,
    title: "Arquitetura Core",
    description:
      "Os fundamentos: CLI First, Agentic Planning e os blocos que formam o AIOX.",
    icon: "🏗️",
    lessonCount: 5,
    lessons: [
      {
        id: "arch-cli-first",
        moduleId: "core-architecture",
        number: 1,
        title: "CLI First Architecture",
        description: "CLI > Observability > UI — a hierarquia que define o AIOX.",
        sourceDocs: ["docs/core-architecture.md"],
        estimatedMinutes: 10,
      },
      {
        id: "arch-two-innovations",
        moduleId: "core-architecture",
        number: 2,
        title: "Agentic Planning + Engineering-Contextualized Dev",
        description: "As duas inovações que separam o AIOX de outros frameworks.",
        sourceDocs: ["docs/core-architecture.md"],
        estimatedMinutes: 12,
      },
      {
        id: "arch-core-components",
        moduleId: "core-architecture",
        number: 3,
        title: "Componentes: Agents, Tasks, Templates, Workflows",
        description: "Os 4 blocos fundamentais e como se conectam.",
        sourceDocs: ["docs/core-architecture.md"],
        estimatedMinutes: 15,
      },
      {
        id: "arch-template-system",
        moduleId: "core-architecture",
        number: 4,
        title: "Template Processing System",
        description: "Como templates YAML viram documentos completos.",
        sourceDocs: ["docs/guides/template-engine-v2.md"],
        estimatedMinutes: 10,
      },
      {
        id: "arch-glossary",
        moduleId: "core-architecture",
        number: 5,
        title: "Glossário e Stack Técnica",
        description: "Terminologia oficial e tecnologias usadas.",
        sourceDocs: ["docs/glossary.md", "docs/framework/tech-stack.md"],
        estimatedMinutes: 8,
      },
    ],
  },
  {
    id: "agent-system",
    number: 3,
    title: "Sistema de Agentes",
    description:
      "Os 12 agentes do AIOX: personas, comandos, colaboração e quando usar cada um.",
    icon: "🤖",
    lessonCount: 7,
    lessons: [
      {
        id: "agents-architecture",
        moduleId: "agent-system",
        number: 1,
        title: "Arquitetura: Personas, Archetypes, Dependencies",
        description: "Como agentes são construídos e se relacionam.",
        sourceDocs: [
          "docs/aiox-agent-flows/README.md",
          "docs/guides/agent-selection-guide.md",
        ],
        estimatedMinutes: 15,
      },
      {
        id: "agents-master",
        moduleId: "agent-system",
        number: 2,
        title: "@aiox-master (Orion) — O Orchestrador",
        description: "O agente que comanda todos os outros.",
        sourceDocs: ["docs/aiox-agent-flows/aiox-master-system.md"],
        estimatedMinutes: 12,
      },
      {
        id: "agents-planning",
        moduleId: "agent-system",
        number: 3,
        title: "Planning: @analyst + @pm + @architect",
        description: "Os agentes que planejam antes de construir.",
        sourceDocs: [
          "docs/aiox-agent-flows/analyst-system.md",
          "docs/aiox-agent-flows/pm-system.md",
          "docs/aiox-agent-flows/architect-system.md",
        ],
        estimatedMinutes: 20,
      },
      {
        id: "agents-development",
        moduleId: "agent-system",
        number: 4,
        title: "Dev: @dev + @data-engineer + @ux-design-expert",
        description: "Os agentes que constroem.",
        sourceDocs: [
          "docs/aiox-agent-flows/dev-system.md",
          "docs/aiox-agent-flows/data-engineer-system.md",
          "docs/aiox-agent-flows/ux-design-expert-system.md",
        ],
        estimatedMinutes: 20,
      },
      {
        id: "agents-process",
        moduleId: "agent-system",
        number: 5,
        title: "Process: @sm + @po + @qa",
        description: "Os agentes que garantem qualidade e processo.",
        sourceDocs: [
          "docs/aiox-agent-flows/sm-system.md",
          "docs/aiox-agent-flows/qa-system.md",
        ],
        estimatedMinutes: 15,
      },
      {
        id: "agents-operations",
        moduleId: "agent-system",
        number: 6,
        title: "Operations: @devops + @squad-creator",
        description: "Os agentes que entregam e escalam.",
        sourceDocs: [
          "docs/aiox-agent-flows/devops-system.md",
          "docs/aiox-agent-flows/squad-creator-system.md",
        ],
        estimatedMinutes: 15,
      },
      {
        id: "agents-commands",
        moduleId: "agent-system",
        number: 7,
        title: "Referência Completa de Comandos",
        description: "Todos os comandos * de todos os agentes.",
        sourceDocs: ["docs/meta-agent-commands.md"],
        estimatedMinutes: 10,
      },
    ],
  },
  {
    id: "workflows",
    number: 4,
    title: "Workflows",
    description:
      "Da ideia à produção: greenfield, brownfield, story cycle e git workflow.",
    icon: "🔄",
    lessonCount: 6,
    lessons: [
      {
        id: "wf-planning",
        moduleId: "workflows",
        number: 1,
        title: "Planning Workflow (Spec Pipeline)",
        description: "O pipeline que transforma ideias em especificações.",
        sourceDocs: ["docs/aiox-workflows/spec-pipeline-workflow.md"],
        estimatedMinutes: 15,
      },
      {
        id: "wf-greenfield",
        moduleId: "workflows",
        number: 2,
        title: "Greenfield: Fullstack, Service, UI",
        description: "Criando projetos do zero com orquestração de agentes.",
        sourceDocs: [
          "docs/aiox-workflows/greenfield-fullstack-workflow.md",
          "docs/aiox-workflows/greenfield-service-workflow.md",
          "docs/aiox-workflows/greenfield-ui-workflow.md",
        ],
        estimatedMinutes: 20,
      },
      {
        id: "wf-brownfield",
        moduleId: "workflows",
        number: 3,
        title: "Brownfield: Discovery, Fullstack, Service, UI",
        description: "Evoluindo codebases existentes com agentes.",
        sourceDocs: [
          "docs/aiox-workflows/brownfield-discovery-workflow.md",
          "docs/aiox-workflows/brownfield-fullstack-workflow.md",
        ],
        estimatedMinutes: 20,
      },
      {
        id: "wf-story-cycle",
        moduleId: "workflows",
        number: 4,
        title: "Story Development Cycle",
        description: "O ciclo core: draft → dev → QA → deploy.",
        sourceDocs: [
          "docs/aiox-workflows/story-development-cycle-workflow.md",
        ],
        estimatedMinutes: 15,
      },
      {
        id: "wf-quality-loops",
        moduleId: "workflows",
        number: 5,
        title: "QA Loop + Design System Workflow",
        description: "Loops de qualidade e construção de design systems.",
        sourceDocs: [
          "docs/aiox-workflows/qa-loop-workflow.md",
          "docs/aiox-workflows/design-system-build-quality-workflow.md",
        ],
        estimatedMinutes: 15,
      },
      {
        id: "wf-git",
        moduleId: "workflows",
        number: 6,
        title: "Auto Worktree + Git Workflow",
        description: "Gerenciamento automático de branches e worktrees.",
        sourceDocs: [
          "docs/aiox-workflows/auto-worktree-workflow.md",
          "docs/git-workflow-guide.md",
        ],
        estimatedMinutes: 12,
      },
    ],
  },
  {
    id: "quality-security-memory",
    number: 5,
    title: "Quality, Security & Memory",
    description:
      "Quality gates, CodeRabbit, security hardening e o sistema de memória.",
    icon: "🛡️",
    lessonCount: 6,
    lessons: [
      {
        id: "qsm-quality-gates",
        moduleId: "quality-security-memory",
        number: 1,
        title: "Quality Gates (3 Camadas)",
        description: "Pre-commit, pre-PR e post-merge gates.",
        sourceDocs: ["docs/guides/quality-gates.md"],
        estimatedMinutes: 12,
      },
      {
        id: "qsm-coderabbit",
        moduleId: "quality-security-memory",
        number: 2,
        title: "CodeRabbit Integration",
        description: "Review automatizado e self-healing loops.",
        sourceDocs: ["docs/guides/coderabbit/README.md"],
        estimatedMinutes: 10,
      },
      {
        id: "qsm-security",
        moduleId: "quality-security-memory",
        number: 3,
        title: "Security Hardening",
        description: "Protegendo seu projeto e dados sensíveis.",
        sourceDocs: ["docs/guides/security-hardening.md"],
        estimatedMinutes: 15,
      },
      {
        id: "qsm-memory",
        moduleId: "quality-security-memory",
        number: 4,
        title: "Memory System Architecture",
        description: "Como agentes lembram e aprendem entre sessões.",
        sourceDocs: [
          "docs/guides/MEMORY-SYSTEM.md",
          "docs/guides/MEMORY-INTELLIGENCE-SYSTEM.md",
        ],
        estimatedMinutes: 20,
      },
      {
        id: "qsm-performance",
        moduleId: "quality-security-memory",
        number: 5,
        title: "Performance Tuning",
        description: "Otimizando velocidade e uso de recursos.",
        sourceDocs: ["docs/framework/performance-tips.md"],
        estimatedMinutes: 8,
      },
      {
        id: "qsm-failure-cases",
        moduleId: "quality-security-memory",
        number: 6,
        title: "Quando dá Errado",
        description:
          "Failure cases, gate violations, QA rejection loops e course corrections.",
        sourceDocs: ["docs/aiox-workflows/qa-loop-workflow.md"],
        estimatedMinutes: 12,
      },
    ],
  },
  {
    id: "ide-integration",
    number: 6,
    title: "IDE Integration",
    description:
      "Claude Code, Gemini, Codex, Cursor e mais — AIOX em qualquer IDE.",
    icon: "💻",
    lessonCount: 4,
    lessons: [
      {
        id: "ide-claude-code",
        moduleId: "ide-integration",
        number: 1,
        title: "Claude Code (Integração Completa)",
        description: "A melhor experiência AIOX: hooks, memory e agents nativos.",
        sourceDocs: ["docs/ide-integration.md"],
        estimatedMinutes: 15,
      },
      {
        id: "ide-gemini-codex",
        moduleId: "ide-integration",
        number: 2,
        title: "Gemini CLI + Codex CLI",
        description: "AIOX em Gemini e Codex com adaptações.",
        sourceDocs: [
          "docs/platforms/gemini-cli.md",
          "docs/codex-integration-process.md",
        ],
        estimatedMinutes: 12,
      },
      {
        id: "ide-cursor-copilot",
        moduleId: "ide-integration",
        number: 3,
        title: "Cursor + GitHub Copilot + AntiGravity",
        description: "Integração com IDEs visuais.",
        sourceDocs: ["docs/platforms/cursor.md"],
        estimatedMinutes: 10,
      },
      {
        id: "ide-hook-matrix",
        moduleId: "ide-integration",
        number: 4,
        title: "Hook Compatibility Matrix",
        description: "O que funciona onde — tabela de paridade entre IDEs.",
        sourceDocs: ["docs/ide-integration.md"],
        estimatedMinutes: 8,
      },
    ],
  },
  {
    id: "squads",
    number: 7,
    title: "Squads",
    description:
      "Times modulares de agentes: criação, configuração e casos reais.",
    icon: "👥",
    lessonCount: 5,
    lessons: [
      {
        id: "squads-overview",
        moduleId: "squads",
        number: 1,
        title: "O que são Squads?",
        description: "Times de agentes modulares e reutilizáveis.",
        sourceDocs: ["docs/guides/squads-overview.md"],
        estimatedMinutes: 10,
      },
      {
        id: "squads-structure",
        moduleId: "squads",
        number: 2,
        title: "Estrutura: Manifest, Agents, Tasks",
        description: "A anatomia de um squad AIOX.",
        sourceDocs: ["docs/guides/squads-guide.md"],
        estimatedMinutes: 15,
      },
      {
        id: "squads-first",
        moduleId: "squads",
        number: 3,
        title: "Criando seu Primeiro Squad",
        description: "Passo a passo com exemplos reais.",
        sourceDocs: ["docs/examples/squads/"],
        estimatedMinutes: 20,
      },
      {
        id: "squads-case-study",
        moduleId: "squads",
        number: 4,
        title: "Case Study: Claude Code Mastery Squad",
        description: "Um squad real em produção.",
        sourceDocs: ["squads/claude-code-mastery/"],
        estimatedMinutes: 15,
      },
      {
        id: "squads-api-migration",
        moduleId: "squads",
        number: 5,
        title: "Squad API e Migration",
        description: "Versionamento e migração entre versões.",
        sourceDocs: ["docs/guides/squad-migration.md"],
        estimatedMinutes: 10,
      },
    ],
  },
  {
    id: "advanced",
    number: 8,
    title: "Tópicos Avançados",
    description:
      "Projeto E2E, execution profiles, LLM routing e contribuição open source.",
    icon: "🧪",
    lessonCount: 5,
    lessons: [
      {
        id: "adv-e2e-project",
        moduleId: "advanced",
        number: 1,
        title: "Projeto Real E2E com AIOX",
        description: "Construindo uma aplicação completa do zero ao deploy.",
        sourceDocs: [
          "docs/aiox-workflows/greenfield-fullstack-workflow.md",
        ],
        estimatedMinutes: 30,
      },
      {
        id: "adv-execution-profiles",
        moduleId: "advanced",
        number: 2,
        title: "Execution Profiles: YOLO, Interactive, Pre-Flight",
        description: "Controle total sobre o nível de autonomia.",
        sourceDocs: ["docs/guides/permission-modes.md"],
        estimatedMinutes: 12,
      },
      {
        id: "adv-llm-routing",
        moduleId: "advanced",
        number: 3,
        title: "LLM Routing Multi-Model",
        description: "Estratégias para usar múltiplos modelos de IA.",
        sourceDocs: ["docs/guides/llm-routing.md"],
        estimatedMinutes: 15,
      },
      {
        id: "adv-contributing",
        moduleId: "advanced",
        number: 4,
        title: "Contribuindo pro AIOX",
        description: "Como contribuir com o framework open source.",
        sourceDocs: ["CONTRIBUTING.md", "docs/FEATURE_PROCESS.md"],
        estimatedMinutes: 10,
      },
      {
        id: "adv-roadmap",
        moduleId: "advanced",
        number: 5,
        title: "Roadmap e Comunidade",
        description: "O futuro do AIOX e como participar.",
        sourceDocs: ["docs/roadmap.md", "docs/community.md"],
        estimatedMinutes: 8,
      },
    ],
  },
];

export function getModule(moduleId: string): Module | undefined {
  return modules.find((m) => m.id === moduleId);
}

export function getLesson(lessonId: string): Lesson | undefined {
  for (const module of modules) {
    const lesson = module.lessons.find((l) => l.id === lessonId);
    if (lesson) return lesson;
  }
  return undefined;
}

export function getModuleByNumber(num: number): Module | undefined {
  return modules.find((m) => m.number === num);
}

export function getTotalLessons(): number {
  return modules.reduce((acc, m) => acc + m.lessonCount, 0);
}

export function getAllLessonIds(): string[] {
  return modules.flatMap((m) => m.lessons.map((l) => l.id));
}
