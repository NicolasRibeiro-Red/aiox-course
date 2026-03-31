"use client";

import { useState, useMemo } from "react";

interface GlossaryEntry {
  term: string;
  definition: string;
  category: string;
}

const glossary: GlossaryEntry[] = [
  { term: "Agent", definition: "Uma persona de IA especializada com expertise, comandos e workflows proprios. Cada agente tem um archetype, zodiac e identidade unica.", category: "Core" },
  { term: "AIOX", definition: "AI-Orchestrated Experience — meta-framework para desenvolvimento full-stack orquestrado por agentes de IA.", category: "Core" },
  { term: "AIOX Master", definition: "O agente orchestrador (Orion) que coordena todos os outros agentes e executa tarefas de qualquer agente.", category: "Agents" },
  { term: "Archetype", definition: "Arquetipo jungiano atribuido a cada agente que define sua personalidade e abordagem (ex: Orchestrator, Builder, Guardian).", category: "Core" },
  { term: "Brownfield", definition: "Workflow para projetos existentes — inclui discovery, analysis e enhancement de codebases ja existentes.", category: "Workflows" },
  { term: "Checklist", definition: "Lista de verificacao usada como quality gate em diferentes etapas do processo de desenvolvimento.", category: "Core" },
  { term: "CLI First", definition: "Principio fundamental do AIOX: o terminal e a interface primaria. CLI > Observability > UI.", category: "Principles" },
  { term: "CodeRabbit", definition: "Ferramenta de review automatizado de codigo integrada ao AIOX para quality gates pre-commit e pre-PR.", category: "Tools" },
  { term: "Elicitation", definition: "Processo interativo onde um agente coleta informacoes do usuario para completar uma tarefa. Marcado com elicit=true nos tasks.", category: "Core" },
  { term: "Epic", definition: "Um bloco grande de trabalho criado pelo @pm que e quebrado em stories menores pelo @sm.", category: "Workflows" },
  { term: "Gate Decision", definition: "Decisao de qualidade tomada pelo @qa: PASS, CONCERNS, FAIL ou WAIVED.", category: "Quality" },
  { term: "Greenfield", definition: "Workflow para projetos novos do zero — fullstack, service ou UI.", category: "Workflows" },
  { term: "Greeting", definition: "Mensagem de boas-vindas exibida quando um agente e ativado. Gerada pelo greeting-builder.js.", category: "Core" },
  { term: "Interactive Mode", definition: "Modo padrao de execucao onde o agente pede confirmacao antes de acoes importantes.", category: "Modes" },
  { term: "KB Mode", definition: "Knowledge Base Mode — quando ativado (*kb), o agente carrega todo o conhecimento do AIOX Method.", category: "Core" },
  { term: "LLM Routing", definition: "Estrategia de usar diferentes modelos de IA para diferentes tarefas baseado em custo, velocidade e qualidade.", category: "Advanced" },
  { term: "MCP", definition: "Model Context Protocol — protocolo para conectar ferramentas externas aos agentes (EXA, Context7, Apify).", category: "Tools" },
  { term: "Manifest", definition: "Arquivo JSON que define a configuracao de um squad — agents, tasks, workflows e metadata.", category: "Squads" },
  { term: "Persona", definition: "A identidade completa de um agente: nome, role, archetype, zodiac, tone, vocabulary e greeting.", category: "Core" },
  { term: "Pre-Flight Mode", definition: "Modo de execucao onde o agente planeja tudo antes de executar, sem autonomia.", category: "Modes" },
  { term: "PRD", definition: "Product Requirements Document — documento de requisitos criado pelo @pm.", category: "Workflows" },
  { term: "Quality Gate", definition: "Ponto de verificacao obrigatorio onde o trabalho deve atender criterios antes de avancar.", category: "Quality" },
  { term: "Self-Healing", definition: "Capacidade do @qa de auto-corrigir issues CRITICAL encontrados pelo CodeRabbit (max 3 iteracoes).", category: "Quality" },
  { term: "Squad", definition: "Time modular e reutilizavel de agentes configurado para um dominio especifico (ex: frontend, data pipeline).", category: "Squads" },
  { term: "Story", definition: "Unidade de trabalho com acceptance criteria, criada pelo @sm a partir de um epic do @pm.", category: "Workflows" },
  { term: "Story-Driven Development", definition: "Metodologia onde todo trabalho comeca com uma story que contem criterios de aceitacao claros.", category: "Principles" },
  { term: "Task", definition: "Workflow executavel definido em arquivo .md que um agente segue passo a passo.", category: "Core" },
  { term: "Template", definition: "Arquivo YAML que define a estrutura de documentos gerados (PRD, architecture, stories).", category: "Core" },
  { term: "Workflow", definition: "Processo multi-step que envolve multiplos agentes em sequencia (ex: greenfield-fullstack).", category: "Core" },
  { term: "Worktree", definition: "Git worktree isolado usado para desenvolvimento paralelo sem conflitos de branch.", category: "Tools" },
  { term: "YOLO Mode", definition: "Modo de execucao com autonomia maxima — o agente executa sem pedir confirmacao.", category: "Modes" },
];

const categories = [...new Set(glossary.map((g) => g.category))].sort();

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return glossary
      .filter((g) => {
        const matchesSearch =
          !search ||
          g.term.toLowerCase().includes(search.toLowerCase()) ||
          g.definition.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = !activeCategory || g.category === activeCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [search, activeCategory]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Glossario AIOX</h1>
      <p className="text-muted mb-8">
        {glossary.length} termos e conceitos do framework.
      </p>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar termo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-zinc-600 outline-none focus:border-accent transition-colors"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              !activeCategory
                ? "bg-accent/10 border-accent/30 text-accent"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(activeCategory === cat ? null : cat)
              }
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-accent/10 border-accent/30 text-accent"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Entries */}
      <div className="space-y-3">
        {filtered.map((entry) => (
          <div
            key={entry.term}
            className="bg-card border border-border rounded-lg p-4"
          >
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-semibold">{entry.term}</h3>
              <span className="text-xs text-muted bg-zinc-800 px-2 py-0.5 rounded">
                {entry.category}
              </span>
            </div>
            <p className="text-sm text-zinc-400">{entry.definition}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted py-8">
            Nenhum termo encontrado.
          </p>
        )}
      </div>
    </div>
  );
}
