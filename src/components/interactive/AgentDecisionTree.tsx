"use client";

import { useState } from "react";

interface TreeNode {
  question: string;
  options: {
    label: string;
    next?: TreeNode;
    result?: { agent: string; icon: string; id: string; reason: string };
  }[];
}

const tree: TreeNode = {
  question: "O que voce precisa fazer?",
  options: [
    {
      label: "Pesquisar, analisar ou gerar ideias",
      result: {
        agent: "Atlas",
        icon: "🔍",
        id: "analyst",
        reason:
          "Market research, analise competitiva, brainstorming estruturado, project briefs.",
      },
    },
    {
      label: "Definir requisitos de produto ou criar PRD",
      result: {
        agent: "Morgan",
        icon: "📋",
        id: "pm",
        reason:
          "Product Requirements Documents, epics, priorizacao de features, estrategia de produto.",
      },
    },
    {
      label: "Projetar arquitetura de sistema",
      result: {
        agent: "Aria",
        icon: "🏛️",
        id: "architect",
        reason:
          "Arquitetura fullstack/backend/frontend, stack selection, API design, complexity assessment.",
      },
    },
    {
      label: "Modelar banco de dados ou criar migrations",
      result: {
        agent: "Dara",
        icon: "📊",
        id: "data-engineer",
        reason:
          "Schema design, RLS policies, migrations seguras, query optimization, Supabase/PostgreSQL.",
      },
    },
    {
      label: "Criar user stories a partir de PRD/epic",
      result: {
        agent: "River",
        icon: "🌊",
        id: "sm",
        reason:
          "Stories com acceptance criteria, sprint planning, validacao de stories, handoff para dev.",
      },
    },
    {
      label: "Implementar codigo / desenvolver features",
      result: {
        agent: "Dex",
        icon: "💻",
        id: "dev",
        reason:
          "Implementacao de stories, testes, refactoring, debugging. 3 modos: YOLO, Interactive, Pre-Flight.",
      },
    },
    {
      label: "Revisar codigo ou rodar quality gates",
      result: {
        agent: "Quinn",
        icon: "✅",
        id: "qa",
        reason:
          "Code review, gate decisions (PASS/FAIL), test design, risk profiling, CodeRabbit self-healing.",
      },
    },
    {
      label: "Push, deploy ou criar Pull Request",
      result: {
        agent: "Gage",
        icon: "⚡",
        id: "devops",
        reason:
          "UNICO agente autorizado para git push, PRs, releases, CI/CD, MCP management.",
      },
    },
    {
      label: "Design de UI/UX ou design system",
      result: {
        agent: "Uma",
        icon: "🎨",
        id: "ux-design-expert",
        reason:
          "User research, wireframes, design tokens, atomic components, WCAG audit.",
      },
    },
    {
      label: "Criar um squad de agentes para novo dominio",
      result: {
        agent: "Craft",
        icon: "🏗️",
        id: "squad-creator",
        reason:
          "Design e criacao de squads modulares, FORMA framework, validacao, publicacao.",
      },
    },
    {
      label: "Coordenar multiplos agentes ou criar componentes do framework",
      result: {
        agent: "Orion",
        icon: "👑",
        id: "aiox-master",
        reason:
          "Orquestracao geral, criacao de agents/tasks/workflows, Knowledge Base, framework development.",
      },
    },
  ],
};

export function AgentDecisionTree() {
  const [result, setResult] = useState<{
    agent: string;
    icon: string;
    id: string;
    reason: string;
  } | null>(null);

  const reset = () => setResult(null);

  if (result) {
    return (
      <div className="bg-card border border-accent/30 rounded-lg p-6 my-6 not-prose">
        <div className="text-center mb-4">
          <span className="text-5xl mb-3 block">{result.icon}</span>
          <h4 className="text-xl font-bold">
            {result.agent}{" "}
            <span className="text-sm font-mono text-muted">@{result.id}</span>
          </h4>
        </div>
        <p className="text-sm text-zinc-300 text-center mb-4">
          {result.reason}
        </p>
        <div className="text-center space-y-2">
          <div className="bg-zinc-800 rounded-lg px-4 py-2 inline-block">
            <code className="text-accent text-sm font-mono">
              @{result.id} *help
            </code>
          </div>
          <div>
            <button
              onClick={reset}
              className="text-xs text-muted hover:text-foreground transition-colors mt-3"
            >
              Tentar novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 my-6 not-prose">
      <h4 className="text-lg font-semibold mb-4 text-center">
        {tree.question}
      </h4>
      <div className="space-y-2">
        {tree.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => {
              if (opt.result) setResult(opt.result);
            }}
            className="w-full text-left px-4 py-3 rounded-lg border border-border hover:border-accent/50 text-sm transition-colors group"
          >
            <span className="text-zinc-300 group-hover:text-foreground">
              {opt.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
