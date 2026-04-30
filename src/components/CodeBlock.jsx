import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-bash";
import { Copy, Check } from "lucide-react";

export default function CodeBlock({ code, language = "jsx", title }) {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current);
  }, [code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700">
      {title && (
        <div className="px-4 py-2.5 bg-gray-200/80 dark:bg-zinc-800 border-b border-gray-300 dark:border-zinc-700 text-xs font-medium text-gray-600 dark:text-gray-400">
          {title}
        </div>
      )}
      <div className="relative">
        <pre className={`language-${language} rounded-none m-0`} style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          <code ref={ref} className={`language-${language}`}>
            {code.trim()}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-700/50 hover:bg-gray-700/80 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
}
