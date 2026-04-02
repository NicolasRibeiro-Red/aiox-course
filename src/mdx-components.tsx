import type { MDXComponents } from "mdx/types";
import { AgentCard } from "@/components/content/AgentCard";
import { Callout } from "@/components/content/Callout";
import { CommandReference } from "@/components/content/CommandReference";
import { FileTree } from "@/components/content/FileTree";
import { ComparisonTable } from "@/components/content/ComparisonTable";
import { WorkflowVisualizer } from "@/components/content/WorkflowVisualizer";
import { QuizBlock } from "@/components/content/QuizBlock";
import { InteractionTranscript } from "@/components/content/InteractionTranscript";
import { AgentDecisionTree } from "@/components/interactive/AgentDecisionTree";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    AgentCard,
    AgentDecisionTree,
    Callout,
    CommandReference,
    FileTree,
    "FileTree.File": FileTree.File,
    "FileTree.Folder": FileTree.Folder,
    InteractionTranscript,
    ComparisonTable,
    WorkflowVisualizer,
    QuizBlock,
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 mt-10 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4 mt-8 border-b border-border pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-7 text-zinc-300 mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-4 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 text-zinc-300 mb-4 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    code: ({ children }) => (
      <code className="bg-card px-1.5 py-0.5 rounded text-sm font-mono text-accent">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto mb-4 text-sm">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent pl-4 italic text-muted mb-4">
        {children}
      </blockquote>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-border bg-card px-4 py-2 text-left font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2 text-zinc-300">
        {children}
      </td>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    hr: () => <hr className="border-border my-8" />,
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    ...components,
  };
}
