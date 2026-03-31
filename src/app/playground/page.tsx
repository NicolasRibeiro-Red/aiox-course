import { AgentSimulator } from "@/components/interactive/AgentSimulator";
import { AgentDecisionTree } from "@/components/interactive/AgentDecisionTree";

export const metadata = {
  title: "Agent Playground",
};

export default function PlaygroundPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Agent Playground</h1>
      <p className="text-muted mb-8">
        Simule interacoes com os agentes AIOX e descubra qual agente usar para
        cada tarefa.
      </p>

      {/* Decision Tree */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          Qual Agente Usar?
        </h2>
        <p className="text-sm text-muted mb-4">
          Responda a pergunta abaixo e descubra o agente ideal para sua tarefa.
        </p>
        <AgentDecisionTree />
      </section>

      {/* Agent Simulator */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Simulador de Agentes
        </h2>
        <p className="text-sm text-muted mb-4">
          Selecione um agente, veja seu greeting e rode comandos simulados.
        </p>
        <AgentSimulator />
      </section>
    </div>
  );
}
