import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight } from "lucide-react";
import { allComponents, categories } from "../data/components";

export default function SearchDialog({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const prevOpenRef = useRef(open);
  const prevQueryRef = useRef(query);
  const navigate = useNavigate();

  // Static pages to include in search
  const staticPages = [
    { name: "Getting Started", path: "/getting-started", description: "Installation, setup, and quick start guide" },
    { name: "Introduction", path: "/", description: "Overview of ReadyUI React component library" },
  ];

  const results = query.trim()
    ? [...staticPages, ...allComponents].filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  // Find which category a component belongs to
  const getCategory = (path) => {
    for (const cat of categories) {
      if (cat.components.some((c) => c.path === path)) return cat.name;
    }
    return "Pages";
  };

  const goTo = useCallback(
    (path) => {
      navigate(path);
      onClose();
    },
    [navigate, onClose]
  );

  // Reset state when opened
  useEffect(() => {
    if (open && !prevOpenRef.current) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
    prevOpenRef.current = open;
  }, [open]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const active = listRef.current.querySelector('[data-active="true"]');
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault();
      goTo(results[activeIndex].path);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  // Reset active index when results change
  useEffect(() => {
    if (prevQueryRef.current !== query) {
      prevQueryRef.current = query;
      setActiveIndex(0);
    }
  }, [query]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
        <div
          className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-700 overflow-hidden pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 border-b border-gray-200 dark:border-zinc-700">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search components..."
              className="flex-1 py-3.5 text-sm bg-transparent outline-none placeholder:text-gray-400 dark:text-white"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="p-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-medium text-gray-400 border border-gray-200 dark:border-zinc-700 rounded">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div ref={listRef} className="max-h-80 overflow-y-auto">
            {query.trim() && results.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                No results for &ldquo;{query}&rdquo;
              </div>
            )}

            {results.length > 0 && (
              <ul className="py-2">
                {results.map((item, i) => (
                  <li key={item.path}>
                    <button
                      data-active={i === activeIndex}
                      onClick={() => goTo(item.path)}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        i === activeIndex
                          ? "bg-blue-50 dark:bg-blue-900/20"
                          : "hover:bg-gray-50 dark:hover:bg-zinc-800/50"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${i === activeIndex ? "text-blue-700 dark:text-blue-300" : "text-gray-900 dark:text-white"}`}>
                            {item.name}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium">
                            {getCategory(item.path)}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                          {item.description}
                        </p>
                      </div>
                      {i === activeIndex && (
                        <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {!query.trim() && (
              <div className="px-4 py-6 text-center text-sm text-gray-400 dark:text-gray-500">
                Type to search components, pages, and more...
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200 dark:border-zinc-700 text-[11px] text-gray-400">
            <div className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 border border-gray-200 dark:border-zinc-700 rounded font-medium">↑↓</kbd>
              <span>Navigate</span>
              <kbd className="px-1.5 py-0.5 border border-gray-200 dark:border-zinc-700 rounded font-medium ml-1">↵</kbd>
              <span>Open</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
