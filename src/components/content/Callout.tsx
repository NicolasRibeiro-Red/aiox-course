interface CalloutProps {
  type?: "info" | "warning" | "tip" | "danger" | "error";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: {
    border: "border-accent/30",
    bg: "bg-accent/5",
    icon: "&#8505;",
    iconColor: "text-accent",
    defaultTitle: "Info",
  },
  warning: {
    border: "border-warning/30",
    bg: "bg-warning/5",
    icon: "&#9888;",
    iconColor: "text-warning",
    defaultTitle: "Atencao",
  },
  tip: {
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/5",
    icon: "&#9733;",
    iconColor: "text-emerald-400",
    defaultTitle: "Dica",
  },
  danger: {
    border: "border-error/30",
    bg: "bg-error/5",
    icon: "&#9888;",
    iconColor: "text-error",
    defaultTitle: "Perigo",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const s = styles[type === "error" ? "danger" : type];
  return (
    <div
      className={`${s.border} ${s.bg} border rounded-lg p-4 my-6 not-prose`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`${s.iconColor} text-lg`} dangerouslySetInnerHTML={{ __html: s.icon }} />
        <span className="font-semibold text-sm">
          {title || s.defaultTitle}
        </span>
      </div>
      <div className="text-sm text-zinc-300 leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
