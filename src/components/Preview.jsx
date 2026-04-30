import { useState } from "react";
import { Eye, Code2, Copy, Check } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";

export default function Preview({ children, code, title, className = "" }) {
  const [tab, setTab] = useState("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`rounded-xl border border-gray-200 dark:border-zinc-700 ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-200/80 dark:bg-zinc-800 border-b border-gray-300 dark:border-zinc-700 rounded-t-xl">
        <div className="flex items-center gap-1">
          {title && (
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 mr-3">{title}</span>
          )}
          <button
            onClick={() => setTab("preview")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              tab === "preview"
                ? "bg-white dark:bg-zinc-600 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Preview
          </button>
          {code && (
            <button
              onClick={() => setTab("code")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                tab === "code"
                  ? "bg-white dark:bg-zinc-600 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Code
            </button>
          )}
        </div>
        {code && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-2 py-1 rounded text-xs text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>

      {/* Content */}
      {tab === "preview" ? (
        <div
          className="p-6 sm:p-8 bg-white dark:bg-zinc-900/50 min-h-[120px] flex items-start rounded-b-xl"
        >
          <div className="w-full">{children}</div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-b-xl">
          <pre className="!m-0 !rounded-none text-sm">
            <code
              className="language-jsx"
              dangerouslySetInnerHTML={{
                __html: Prism.highlight(code, Prism.languages.jsx, "jsx"),
              }}
            />
          </pre>
        </div>
      )}
    </div>
  );
}

// Simple inline preview without tabs (for small examples)
export function InlinePreview({ children, className = "" }) {
  return (
    <div className={`p-6 rounded-xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900/50 ${className}`}>
      {children}
    </div>
  );
}
