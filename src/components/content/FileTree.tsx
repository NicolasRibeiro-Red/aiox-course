"use client";

import { useState, type ReactNode } from "react";

/* ── Compound Components (used by MDX) ── */

interface FileProps {
  name: string;
}

function File({ name }: FileProps) {
  return (
    <div className="flex items-center gap-2 py-0.5 px-2 text-sm">
      <span className="text-xs text-zinc-500 w-4 text-center">&#9679;</span>
      <span className="font-mono text-xs text-zinc-300">{name}</span>
    </div>
  );
}

interface FolderProps {
  name: string;
  defaultOpen?: boolean;
  children?: ReactNode;
}

function Folder({ name, defaultOpen = false, children }: FolderProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <div
        className="flex items-center gap-2 py-0.5 px-2 text-sm cursor-pointer hover:bg-zinc-800/50 rounded transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="text-xs w-4 text-center">
          {open ? "\u25BC" : "\u25B6"}
        </span>
        <span className="font-mono text-xs text-accent font-semibold">
          {name}/
        </span>
      </div>
      {open && <div className="pl-4">{children}</div>}
    </div>
  );
}

/* ── Main FileTree (compound wrapper for MDX) ── */

interface FileTreeCompoundProps {
  children?: ReactNode;
  title?: string;
}

function FileTreeCompound({ children, title }: FileTreeCompoundProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden my-6">
      {title && (
        <div className="px-4 py-2 border-b border-border text-xs font-mono text-muted">
          {title}
        </div>
      )}
      <div className="py-2 max-h-[500px] overflow-y-auto">{children}</div>
    </div>
  );
}

/* ── Attach sub-components ── */

FileTreeCompound.File = File;
FileTreeCompound.Folder = Folder;

export { FileTreeCompound as FileTree };
