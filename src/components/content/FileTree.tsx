"use client";

import { useState } from "react";

interface FileNode {
  name: string;
  type: "file" | "folder";
  description?: string;
  children?: FileNode[];
}

interface FileTreeProps {
  tree: FileNode[];
  title?: string;
}

function TreeNode({ node, depth = 0 }: { node: FileNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 2);
  const isFolder = node.type === "folder";
  const hasChildren = isFolder && node.children && node.children.length > 0;

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-1 px-2 rounded text-sm hover:bg-zinc-800/50 transition-colors ${
          isFolder ? "cursor-pointer" : ""
        }`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        onClick={() => hasChildren && setOpen(!open)}
      >
        <span className="text-xs flex-shrink-0 w-4 text-center">
          {isFolder ? (open ? "&#9660;" : "&#9654;") : "&#9679;"}
        </span>
        <span
          className={`font-mono text-xs ${
            isFolder ? "text-accent font-semibold" : "text-zinc-300"
          }`}
        >
          {node.name}
          {isFolder && "/"}
        </span>
        {node.description && (
          <span className="text-xs text-zinc-500 ml-2 truncate">
            {node.description}
          </span>
        )}
      </div>
      {open && hasChildren && (
        <div>
          {node.children!.map((child, i) => (
            <TreeNode key={`${child.name}-${i}`} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function FileTree({ tree, title }: FileTreeProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden my-6 not-prose">
      {title && (
        <div className="px-4 py-2 border-b border-border text-xs font-mono text-muted">
          {title}
        </div>
      )}
      <div className="py-2 max-h-96 overflow-y-auto">
        {tree.map((node, i) => (
          <TreeNode key={`${node.name}-${i}`} node={node} />
        ))}
      </div>
    </div>
  );
}
