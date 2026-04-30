import { Info } from "lucide-react";

export default function PropsTable({ props }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-zinc-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-zinc-800 border-b border-gray-200 dark:border-zinc-700">
            <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 w-[160px]">Prop</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Type</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 w-[100px]">Default</th>
            <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
          {props.map((p) => (
            <tr key={p.name} className="hover:bg-gray-50/50 dark:hover:bg-zinc-800/30">
              <td className="px-4 py-3.5 align-top">
                <div className="flex items-center gap-1.5">
                  <code className="text-xs font-mono font-bold bg-gray-800 dark:bg-zinc-200 text-white dark:text-zinc-900 px-2.5 py-1 rounded-md">
                    {p.name}
                  </code>
                  {p.required && (
                    <span className="text-[10px] font-bold text-red-500 dark:text-red-400">
                      Required
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3.5 align-top">
                <code className="text-xs font-mono bg-gray-100 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-md">
                  {p.type}
                </code>
              </td>
              <td className="px-4 py-3.5 align-top">
                <code className="text-xs font-mono bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
                  {p.default ?? "—"}
                </code>
              </td>
              <td className="px-4 py-3.5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {p.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Individual prop detail card for important/complex props
export function PropDetail({ name, type, defaultValue, required, children }) {
  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-zinc-700 space-y-2">
      <div className="flex items-center gap-2 flex-wrap">
        <code className="text-sm font-mono font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">
          {name}
        </code>
        <code className="text-xs font-mono text-purple-600 dark:text-purple-400">{type}</code>
        {defaultValue && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Default: <code className="font-mono">{defaultValue}</code>
          </span>
        )}
        {required && (
          <span className="text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded">
            Required
          </span>
        )}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
