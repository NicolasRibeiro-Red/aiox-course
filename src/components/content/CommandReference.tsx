interface Command {
  name: string;
  args?: string;
  description: string;
}

interface CommandReferenceProps {
  agent: string;
  agentIcon: string;
  commands: Command[];
}

export function CommandReference({
  agent,
  agentIcon,
  commands,
}: CommandReferenceProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden my-6 not-prose">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-zinc-900/50">
        <span>{agentIcon}</span>
        <span className="font-mono text-sm font-semibold">@{agent}</span>
        <span className="text-xs text-muted">
          &middot; {commands.length} comandos
        </span>
      </div>
      <div className="divide-y divide-border">
        {commands.map((cmd) => (
          <div key={cmd.name} className="flex items-start gap-3 px-4 py-3">
            <code className="text-sm font-mono text-accent whitespace-nowrap flex-shrink-0">
              *{cmd.name}
              {cmd.args && (
                <span className="text-zinc-500"> {cmd.args}</span>
              )}
            </code>
            <span className="text-sm text-zinc-400">{cmd.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
