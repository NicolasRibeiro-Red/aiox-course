"use client";

import { useState } from "react";

interface AgentData {
  id: string;
  name: string;
  icon: string;
  title: string;
  greeting: string;
  commands: { cmd: string; response: string }[];
}

const agentsData: AgentData[] = [
  {
    id: "aiox-master",
    name: "Orion",
    icon: "👑",
    title: "Master Orchestrator",
    greeting: "👑 Orion (Orchestrator) ready. Let's orchestrate!",
    commands: [
      { cmd: "*help", response: "Comandos disponiveis:\n*help — Mostrar todos os comandos\n*kb — Toggle Knowledge Base\n*status — Contexto atual\n*create — Criar componente AIOX\n*workflow — Iniciar workflow\n*plan — Planejamento de workflow\n*task — Executar tarefa" },
      { cmd: "*status", response: "📊 Status atual:\n• Agente: @aiox-master (Orion)\n• Modo: Interactive\n• Projeto: Nenhum projeto ativo\n• Stories: 0 pendentes\n• KB Mode: OFF" },
      { cmd: "*kb", response: "📚 Knowledge Base: ON\nAIOX Method carregado. Voce agora tem acesso ao conhecimento completo do framework." },
    ],
  },
  {
    id: "dev",
    name: "Dex",
    icon: "💻",
    title: "Senior Software Engineer",
    greeting: "💻 Dex (Builder) ready to implement!",
    commands: [
      { cmd: "*help", response: "Comandos disponiveis:\n*develop {story-id} — Implementar story\n*develop-yolo — Modo autonomo\n*develop-interactive — Modo interativo\n*run-tests — Executar testes\n*apply-qa-fixes — Aplicar fixes do QA" },
      { cmd: "*run-tests", response: "🧪 Executando testes...\n✅ npm run lint — PASS\n✅ npm run typecheck — PASS\n✅ npm test — 47/47 tests passing\n\nTodos os testes passaram." },
    ],
  },
  {
    id: "architect",
    name: "Aria",
    icon: "🏛️",
    title: "System Architect",
    greeting: "🏛️ Aria (Visionary) ready to design!",
    commands: [
      { cmd: "*help", response: "Comandos disponiveis:\n*create-full-stack-architecture — Arquitetura completa\n*create-backend-architecture — Backend\n*create-front-end-architecture — Frontend\n*analyze-project-structure — Analisar projeto\n*document-project — Gerar documentacao" },
    ],
  },
  {
    id: "qa",
    name: "Quinn",
    icon: "✅",
    title: "Test Architect",
    greeting: "✅ Quinn (Guardian) ready to protect quality!",
    commands: [
      { cmd: "*help", response: "Comandos disponiveis:\n*code-review {scope} — Review de codigo\n*review {story} — Review completo de story\n*gate {story} — Decisao de quality gate\n*test-design — Design de testes\n*nfr-assess — Avaliar requisitos nao-funcionais" },
      { cmd: "*gate STORY-1", response: "🔍 Quality Gate — STORY-1\n\n✅ Lint: PASS\n✅ Typecheck: PASS\n✅ Tests: 47/47 PASS\n✅ CodeRabbit: 0 CRITICAL, 1 LOW\n\n📋 Gate Decision: PASS\nRationale: All quality criteria met." },
    ],
  },
  {
    id: "devops",
    name: "Gage",
    icon: "⚡",
    title: "DevOps Engineer",
    greeting: "⚡ Gage (Operator) ready to deploy!",
    commands: [
      { cmd: "*help", response: "Comandos disponiveis:\n*pre-push — Validar antes de push\n*push — Push com quality gates\n*create-pr — Criar Pull Request\n*release — Gerenciar release\n*version-check — Verificar versao" },
      { cmd: "*pre-push", response: "🔍 Pre-push checks...\n✅ Lint: PASS\n✅ Tests: PASS\n✅ Typecheck: PASS\n✅ Build: PASS\n✅ CodeRabbit: No CRITICAL issues\n\n✅ Todas as verificacoes passaram. Pronto para push." },
    ],
  },
  {
    id: "pm",
    name: "Morgan",
    icon: "📋",
    title: "Product Manager",
    greeting: "📋 Morgan (Strategist) ready to plan!",
    commands: [
      { cmd: "*help", response: "Comandos disponiveis:\n*create-prd — Criar PRD\n*create-brownfield-prd — PRD para projeto existente\n*create-epic — Criar epic\n*research {topic} — Pesquisa profunda" },
    ],
  },
];

export function AgentSimulator() {
  const [selectedAgent, setSelectedAgent] = useState<AgentData | null>(null);
  const [history, setHistory] = useState<{ type: "cmd" | "res"; text: string }[]>([]);
  const [input, setInput] = useState("");

  const selectAgent = (agent: AgentData) => {
    setSelectedAgent(agent);
    setHistory([{ type: "res", text: agent.greeting }]);
    setInput("");
  };

  const runCommand = () => {
    if (!input.trim() || !selectedAgent) return;
    const cmd = input.trim();
    setHistory((h) => [...h, { type: "cmd", text: cmd }]);

    const match = selectedAgent.commands.find(
      (c) => c.cmd === cmd || cmd.startsWith(c.cmd.split(" ")[0])
    );
    const response = match
      ? match.response
      : `Comando nao reconhecido: ${cmd}\nDigite *help para ver comandos disponiveis.`;
    setHistory((h) => [...h, { type: "res", text: response }]);
    setInput("");
  };

  return (
    <div className="not-prose">
      {/* Agent Selector */}
      {!selectedAgent ? (
        <div>
          <h3 className="text-lg font-semibold mb-4">Selecione um Agente</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {agentsData.map((agent) => (
              <button
                key={agent.id}
                onClick={() => selectAgent(agent)}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-accent/50 transition-colors group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {agent.icon}
                </div>
                <div className="font-semibold text-sm">{agent.name}</div>
                <div className="text-xs text-muted">@{agent.id}</div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {/* Agent Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{selectedAgent.icon}</span>
              <div>
                <span className="font-bold">{selectedAgent.name}</span>
                <span className="text-xs text-muted ml-2">
                  @{selectedAgent.id}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedAgent(null);
                setHistory([]);
              }}
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Trocar Agente
            </button>
          </div>

          {/* Terminal */}
          <div className="bg-zinc-950 border border-border rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-zinc-900">
              <div className="w-3 h-3 rounded-full bg-error/60" />
              <div className="w-3 h-3 rounded-full bg-warning/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <span className="text-xs text-muted ml-2 font-mono">
                aiox-simulator
              </span>
            </div>

            <div className="p-4 h-80 overflow-y-auto font-mono text-sm space-y-2">
              {history.map((entry, i) => (
                <div key={i}>
                  {entry.type === "cmd" ? (
                    <div className="text-accent">
                      <span className="text-zinc-500">$ </span>
                      {entry.text}
                    </div>
                  ) : (
                    <pre className="text-zinc-300 whitespace-pre-wrap">
                      {entry.text}
                    </pre>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center border-t border-border px-4 py-2 bg-zinc-900/50">
              <span className="text-accent font-mono text-sm mr-2">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && runCommand()}
                placeholder="Digite um comando (ex: *help)"
                className="flex-1 bg-transparent text-sm font-mono text-foreground placeholder:text-zinc-600 outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
