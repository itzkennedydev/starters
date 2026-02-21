"use client";

import { usePathname } from "next/navigation";

const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "Dashboard";
const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL ?? "/logo.svg";

const navItems = [
  { label: "Dashboard", href: "/", icon: "📊" },
  { label: "Users", href: "/users", icon: "👤" },
  { label: "Settings", href: "/settings", icon: "⚙️" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col bg-sidebar text-sidebar-text">
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
        <img src={logoUrl} alt={appName} className="h-8 w-8" />
        <span className="text-lg font-bold text-white">{appName}</span>
      </div>

      <nav className="mt-4 flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-sidebar-active text-white"
                  : "text-sidebar-text hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <p className="text-xs text-sidebar-text/60">
          &copy; {new Date().getFullYear()} {appName}
        </p>
      </div>
    </aside>
  );
}
