"use client";

import { useState } from "react";

interface AgentCardProps {
  icon: string;
  name: string;
  id: string;
  title: string;
  archetype: string;
  zodiac: string;
  description: string;
  commands?: string[];
  whenToUse?: string;
  collaboratesWith?: string[];
  restrictions?: string[];
}

export function AgentCard({
  icon,
  name,
  id,
  title,
  archetype,
  zodiac,
  description,
  commands = [],
  whenToUse,
  collaboratesWith = [],
  restrictions = [],
}: AgentCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden my-6 not-prose">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 p-5 hover:bg-card-hover transition-colors text-left"
      >
        <span className="text-4xl flex-shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-lg">{name}</span>
            <span className="text-xs font-mono text-muted bg-zinc-800 px-2 py-0.5 rounded">
              @{id}
            </span>
          </div>
          <div className="text-sm text-muted">{title}</div>
          <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
            <span>{archetype}</span>
            <span>&middot;</span>
            <span>{zodiac}</span>
          </div>
        </div>
        <span
          className={`text-muted transition-transform ${expanded ? "rotate-180" : ""}`}
        >
          &#9662;
        </span>
      </button>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-border p-5 space-y-4">
          <p className="text-sm text-zinc-300 leading-relaxed">{description}</p>

          {whenToUse && (
            <div>
              <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                Quando Usar
              </h4>
              <p className="text-sm text-zinc-400">{whenToUse}</p>
            </div>
          )}

          {commands.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                Comandos Principais
              </h4>
              <div className="flex flex-wrap gap-2">
                {commands.map((cmd) => (
                  <code
                    key={cmd}
                    className="text-xs bg-zinc-800 text-accent px-2 py-1 rounded font-mono"
                  >
                    *{cmd}
                  </code>
                ))}
              </div>
            </div>
          )}

          {collaboratesWith.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                Colabora Com
              </h4>
              <div className="flex flex-wrap gap-2">
                {collaboratesWith.map((agent) => (
                  <span
                    key={agent}
                    className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded"
                  >
                    @{agent}
                  </span>
                ))}
              </div>
            </div>
          )}

          {restrictions.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                Restricoes
              </h4>
              <ul className="text-sm text-zinc-400 space-y-1">
                {restrictions.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-error mt-0.5">&#10005;</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
