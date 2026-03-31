import Link from "next/link";
import { modules } from "@/content/modules";

const agents = [
  { icon: "👑", name: "Orion", role: "Master" },
  { icon: "🔍", name: "Atlas", role: "Analyst" },
  { icon: "🏛️", name: "Aria", role: "Architect" },
  { icon: "💻", name: "Dex", role: "Developer" },
  { icon: "📊", name: "Dara", role: "Data Engineer" },
  { icon: "📋", name: "Morgan", role: "PM" },
  { icon: "✅", name: "Quinn", role: "QA" },
  { icon: "🌊", name: "River", role: "Scrum Master" },
  { icon: "⚡", name: "Gage", role: "DevOps" },
  { icon: "🎨", name: "Uma", role: "UX Expert" },
  { icon: "🎯", name: "Pax", role: "Product Owner" },
  { icon: "🏗️", name: "Craft", role: "Squad Creator" },
];

const stats = [
  { value: "12", label: "Agentes Especializados" },
  { value: "13", label: "Workflows" },
  { value: "6+", label: "IDEs Suportadas" },
  { value: "45", label: "Licoes" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">👑</span>
            <span className="font-bold text-lg tracking-tight">
              AIOX Course
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted">
            <Link
              href="/course"
              className="hover:text-foreground transition-colors"
            >
              Curso
            </Link>
            <Link
              href="/playground"
              className="hover:text-foreground transition-colors"
            >
              Playground
            </Link>
            <Link
              href="/glossary"
              className="hover:text-foreground transition-colors"
            >
              Glossario
            </Link>
          </nav>
          <Link
            href="/course"
            className="bg-accent hover:bg-accent-hover text-background font-medium text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Comecar
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-sm text-muted mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Open Source Framework
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            Domine o{" "}
            <span className="text-accent">AIOX</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted max-w-2xl mx-auto mb-4">
            O meta-framework para desenvolvimento full-stack
            orquestrado por agentes IA.
          </p>

          <p className="text-base text-zinc-500 max-w-xl mx-auto mb-12">
            9 modulos &middot; 45 licoes &middot; 12 agentes &middot; Do basico
            ao avancado
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/course"
              className="bg-accent hover:bg-accent-hover text-background font-semibold text-lg px-8 py-3 rounded-lg transition-colors w-full sm:w-auto"
            >
              Iniciar o Curso
            </Link>
            <a
              href="https://github.com/SynkraAI/aiox-core"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border hover:border-zinc-600 text-foreground font-medium text-lg px-8 py-3 rounded-lg transition-colors w-full sm:w-auto"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            12 Agentes Especializados
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Cada agente tem uma persona unica, comandos especificos e area de
            expertise. Juntos, orquestram o desenvolvimento completo.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-accent/50 transition-colors group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {agent.icon}
                </div>
                <div className="font-semibold text-sm">{agent.name}</div>
                <div className="text-xs text-muted">{agent.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            9 Modulos, 45 Licoes
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Do conceito a producao. Cada modulo mapeia diretamente para a
            documentacao oficial do framework.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod) => (
              <Link
                key={mod.id}
                href={`/course/${mod.id}`}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{mod.icon}</span>
                  <span className="text-xs font-mono text-muted">
                    Modulo {mod.number}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {mod.title}
                </h3>
                <p className="text-sm text-muted line-clamp-2">
                  {mod.description}
                </p>
                <div className="mt-4 text-xs text-muted">
                  {mod.lessonCount} licoes
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto pra comecar?</h2>
          <p className="text-muted mb-8">
            O AIOX e open source e o curso e gratuito. Comece agora e domine o
            desenvolvimento orquestrado por IA.
          </p>
          <Link
            href="/course"
            className="inline-block bg-accent hover:bg-accent-hover text-background font-semibold text-lg px-8 py-3 rounded-lg transition-colors"
          >
            Iniciar o Curso
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div className="flex items-center gap-2">
            <span>👑</span>
            <span>AIOX Course by SynkraAI</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/SynkraAI/aiox-core"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/SynkraAI/aiox-core/blob/main/docs/community.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Comunidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
