import { NavLink, Link } from "react-router-dom";
import { categories } from "../data/components";
import { BookOpen, Rocket } from "lucide-react";

export default function Sidebar({ open, onClose }) {
  const linkClass = ({ isActive }) =>
    `block px-3 py-1.5 rounded-lg text-[13px] transition-colors truncate ${
      isActive
        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium"
        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800/50 hover:text-gray-900 dark:hover:text-gray-200"
    }`;

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed lg:sticky top-14 z-30 h-[calc(100vh-3.5rem)] w-64 flex-shrink-0 overflow-y-auto border-r border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4 space-y-6">
          {/* Getting Started */}
          <div className="space-y-1">
            <NavLink to="/" end className={linkClass}>
              <span className="flex items-center gap-2"><BookOpen className="w-3.5 h-3.5" /> Introduction</span>
            </NavLink>
            <NavLink to="/getting-started" className={linkClass}>
              <span className="flex items-center gap-2"><Rocket className="w-3.5 h-3.5" /> Getting Started</span>
            </NavLink>
          </div>

          {/* Component categories */}
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="px-3 mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {cat.name}
              </h3>
              <div className="space-y-0.5">
                {cat.components.map((comp) => (
                  <NavLink key={comp.path} to={comp.path} className={linkClass}>
                    {comp.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
