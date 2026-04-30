import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { allComponents } from "../data/components";

export default function ComponentPage({ name, description, children }) {
  // Find prev/next component
  const idx = allComponents.findIndex((c) => c.name === name);
  const prev = idx > 0 ? allComponents[idx - 1] : null;
  const next = idx < allComponents.length - 1 ? allComponents[idx + 1] : null;

  return (
    <article className="space-y-10">
      {/* Header */}
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
        <div className="mt-4 flex gap-2">
          <span className="px-2.5 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
            Component
          </span>
        </div>
      </header>

      {/* Content sections */}
      {children}

      {/* Prev/Next navigation */}
      <nav className="flex justify-between pt-8 border-t border-gray-200 dark:border-zinc-800">
        {prev ? (
          <Link
            to={prev.path}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <ChevronLeft className="w-4 h-4" />
            {prev.name}
          </Link>
        ) : <div />}
        {next ? (
          <Link
            to={next.path}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            {next.name}
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : <div />}
      </nav>
    </article>
  );
}

// Reusable section wrapper
export function Section({ title, children }) {
  const id = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <section id={id} className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}
