import Link from "next/link";
import { modules } from "@/content/modules";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { MobileNav } from "@/components/layout/MobileNav";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-xl">👑</span>
            <span className="font-bold text-sm tracking-tight">
              AIOX Course
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-muted">
            <Link
              href="/course"
              className="hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/glossary"
              className="hover:text-foreground transition-colors"
            >
              Glossario
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 border-r border-border bg-card/30 overflow-y-auto sticky top-14 h-[calc(100vh-3.5rem)]">
          <SidebarNav modules={modules} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>

      {/* Mobile Navigation */}
      <MobileNav modules={modules} />
    </div>
  );
}
