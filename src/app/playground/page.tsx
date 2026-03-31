import { AgentSimulator } from "@/components/interactive/AgentSimulator";

export const metadata = {
  title: "Agent Playground",
};

export default function PlaygroundPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Agent Playground</h1>
      <p className="text-muted mb-8">
        Simule interacoes com os agentes AIOX. Selecione um agente, veja seu
        greeting e rode comandos.
      </p>
      <AgentSimulator />
    </div>
  );
}
