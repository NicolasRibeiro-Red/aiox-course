interface ComparisonTableProps {
  headers: [string, string];
  rows: [string, string][];
  title?: string;
}

export function ComparisonTable({
  headers,
  rows,
  title,
}: ComparisonTableProps) {
  return (
    <div className="my-6 not-prose">
      {title && (
        <h4 className="text-sm font-semibold text-foreground mb-3">
          {title}
        </h4>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="border border-border bg-error/10 px-4 py-2 text-left font-semibold text-error/80">
                {headers[0]}
              </th>
              <th className="border border-border bg-accent/10 px-4 py-2 text-left font-semibold text-accent">
                {headers[1]}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([before, after], i) => (
              <tr key={i}>
                <td className="border border-border px-4 py-2 text-zinc-400">
                  {before}
                </td>
                <td className="border border-border px-4 py-2 text-zinc-300">
                  {after}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
