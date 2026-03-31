"use client";

interface Message {
  role: "user" | "agent" | "system" | "artifact";
  agent?: string;
  agentIcon?: string;
  content: string;
  label?: string;
}

interface InteractionTranscriptProps {
  title: string;
  messages: Message[];
}

export function InteractionTranscript({
  title,
  messages,
}: InteractionTranscriptProps) {
  return (
    <div className="bg-zinc-950 border border-border rounded-lg overflow-hidden my-6 not-prose">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-zinc-900">
        <div className="w-3 h-3 rounded-full bg-error/60" />
        <div className="w-3 h-3 rounded-full bg-warning/60" />
        <div className="w-3 h-3 rounded-full bg-accent/60" />
        <span className="text-xs text-muted ml-2 font-mono">{title}</span>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
        {messages.map((msg, i) => {
          if (msg.role === "user") {
            return (
              <div key={i}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-zinc-500">voce</span>
                </div>
                <div className="bg-zinc-800/50 rounded-lg px-3 py-2 text-sm font-mono text-accent border-l-2 border-accent/50">
                  {msg.content}
                </div>
              </div>
            );
          }

          if (msg.role === "agent") {
            return (
              <div key={i}>
                <div className="flex items-center gap-2 mb-1">
                  {msg.agentIcon && (
                    <span className="text-sm">{msg.agentIcon}</span>
                  )}
                  <span className="text-xs font-mono text-zinc-400">
                    {msg.agent || "agent"}
                  </span>
                </div>
                <div className="bg-zinc-900/80 rounded-lg px-3 py-2 text-sm text-zinc-300 border-l-2 border-zinc-600">
                  <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                    {msg.content}
                  </pre>
                </div>
              </div>
            );
          }

          if (msg.role === "system") {
            return (
              <div
                key={i}
                className="text-xs text-zinc-600 font-mono text-center py-1"
              >
                --- {msg.content} ---
              </div>
            );
          }

          if (msg.role === "artifact") {
            return (
              <div key={i}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-warning">
                    {msg.label || "artefato gerado"}
                  </span>
                </div>
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs font-mono text-zinc-400 overflow-x-auto">
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    {msg.content}
                  </pre>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
