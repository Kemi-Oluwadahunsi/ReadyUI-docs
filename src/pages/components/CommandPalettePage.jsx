import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { CommandPalette } from "readyui-react";
import { Search, Settings, User, FileText, Moon } from "lucide-react";

const demoItems = [
  { id: "search", label: "Search Files", icon: <Search className="w-4 h-4" />, group: "General", shortcut: "⌘F" },
  { id: "settings", label: "Open Settings", icon: <Settings className="w-4 h-4" />, group: "General", shortcut: "⌘," },
  { id: "profile", label: "View Profile", icon: <User className="w-4 h-4" />, group: "Account" },
  { id: "docs", label: "Documentation", icon: <FileText className="w-4 h-4" />, group: "Help" },
  { id: "theme", label: "Toggle Dark Mode", icon: <Moon className="w-4 h-4" />, group: "Appearance", shortcut: "⌘D" },
];

const recentDemoItems = [
  { id: "settings", label: "Open Settings", icon: <Settings className="w-4 h-4" />, shortcut: "⌘," },
  { id: "docs", label: "Documentation", icon: <FileText className="w-4 h-4" /> },
];

const props = [
  {
    name: "isOpen",
    type: "boolean",
    default: "false",
    description:
      "Controls the visibility of the command palette. Set to true to open the modal overlay and false to close it.",
  },
  {
    name: "onClose",
    type: "() => void",
    default: "—",
    description:
      "Callback function invoked when the palette is dismissed, whether by pressing Escape, clicking outside, or selecting an item.",
  },
  {
    name: "items",
    type: "Array<{ id, label, icon?, group?, shortcut?, action? }>",
    default: "[]",
    description:
      "An array of command objects to display. Each item must have a unique id and label. Optional fields include an icon element, a group name for categorization, a shortcut hint string, and an action callback.",
  },
  {
    name: "onSelect",
    type: "(item) => void",
    default: "—",
    description:
      "Callback function invoked when a command item is selected. Receives the full item object so you can execute its action or navigate accordingly.",
  },
  {
    name: "placeholder",
    type: "string",
    default: '"Type a command or search..."',
    description:
      "The placeholder text displayed inside the search input field when it is empty.",
  },
  {
    name: "recentItems",
    type: "Array<{ id, label, icon?, shortcut? }>",
    default: "—",
    description:
      "An array of recently used items displayed when the search query is empty. Provides quick access to frequently used commands.",
  },
  {
    name: "maxResults",
    type: "number",
    default: "8",
    description:
      "The maximum number of search results to display in the list. Helps keep the palette visually compact for large item sets.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the command palette container for custom styling overrides.",
  },
  {
    name: "enableHotkey",
    type: "boolean",
    default: "true",
    description:
      "When true, the palette can be toggled using the ⌘K (Mac) or Ctrl+K (Windows/Linux) keyboard shortcut globally.",
  },
  {
    name: "onQueryChange",
    type: "(query: string) => void",
    default: "—",
    description:
      "Callback function invoked whenever the search input value changes. Useful for implementing custom filtering or analytics tracking.",
  },
];

export default function CommandPalettePage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [groupedOpen, setGroupedOpen] = useState(false);
  const [recentOpen, setRecentOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <ComponentPage
      name="CommandPalette"
      description="A searchable command menu overlay for quick navigation and action execution. Supports grouped commands, keyboard shortcuts, recent items, and a global hotkey toggle."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock
          code={`import { CommandPalette } from "readyui-react";
import { Search, Settings, User, FileText, Moon } from "lucide-react";`}
        />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Control the palette with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">isOpen</code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onClose</code>.
          Pass an array of command{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">items</code>{" "}
          with icons and use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onSelect</code>{" "}
          to handle selection.
        </p>
        <Preview
          code={`const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState(null);

const items = [
  { id: "search", label: "Search Files", icon: <Search className="w-4 h-4" />, shortcut: "⌘F" },
  { id: "settings", label: "Open Settings", icon: <Settings className="w-4 h-4" />, shortcut: "⌘," },
  { id: "profile", label: "View Profile", icon: <User className="w-4 h-4" /> },
  { id: "docs", label: "Documentation", icon: <FileText className="w-4 h-4" /> },
  { id: "theme", label: "Toggle Dark Mode", icon: <Moon className="w-4 h-4" />, shortcut: "⌘D" },
];

<button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
  Open Command Palette
</button>

<CommandPalette
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  items={items}
  onSelect={(item) => {
    setSelected(item.label);
    setIsOpen(false);
  }}
/>`}
        >
          <div>
            <button
              onClick={() => setBasicOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
            >
              Open Command Palette
            </button>
            {selected && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Selected: <strong>{selected}</strong>
              </p>
            )}
            <CommandPalette
              isOpen={basicOpen}
              onClose={() => setBasicOpen(false)}
              items={demoItems}
              onSelect={(item) => {
                setSelected(item.label);
                setBasicOpen(false);
              }}
            />
          </div>
        </Preview>
      </Section>

      {/* Grouped Commands */}
      <Section title="Grouped Commands">
        <p className="text-gray-600 dark:text-gray-400">
          Add a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">group</code>{" "}
          property to each item to organize commands into labeled categories. Items with the same group
          value are clustered together with a section header.
        </p>
        <Preview
          code={`const items = [
  { id: "search", label: "Search Files", icon: <Search />, group: "General", shortcut: "⌘F" },
  { id: "settings", label: "Open Settings", icon: <Settings />, group: "General", shortcut: "⌘," },
  { id: "profile", label: "View Profile", icon: <User />, group: "Account" },
  { id: "docs", label: "Documentation", icon: <FileText />, group: "Help" },
  { id: "theme", label: "Toggle Dark Mode", icon: <Moon />, group: "Appearance", shortcut: "⌘D" },
];

<CommandPalette isOpen={isOpen} onClose={() => setIsOpen(false)} items={items} />`}
        >
          <div>
            <button
              onClick={() => setGroupedOpen(true)}
              className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm"
            >
              Grouped Commands
            </button>
            <CommandPalette
              isOpen={groupedOpen}
              onClose={() => setGroupedOpen(false)}
              items={demoItems}
              onSelect={() => setGroupedOpen(false)}
            />
          </div>
        </Preview>
      </Section>

      {/* Recent Items */}
      <Section title="Recent Items">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">recentItems</code>{" "}
          array to show recently used commands when the search input is empty. This helps users quickly
          re-execute frequent actions without typing.
        </p>
        <Preview
          code={`const recentItems = [
  { id: "settings", label: "Open Settings", icon: <Settings />, shortcut: "⌘," },
  { id: "docs", label: "Documentation", icon: <FileText /> },
];

<CommandPalette
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  items={items}
  recentItems={recentItems}
/>`}
        >
          <div>
            <button
              onClick={() => setRecentOpen(true)}
              className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm"
            >
              With Recent Items
            </button>
            <CommandPalette
              isOpen={recentOpen}
              onClose={() => setRecentOpen(false)}
              items={demoItems}
              recentItems={recentDemoItems}
              onSelect={() => setRecentOpen(false)}
            />
          </div>
        </Preview>
      </Section>

      {/* Custom Placeholder */}
      <Section title="Custom Placeholder">
        <p className="text-gray-600 dark:text-gray-400">
          Override the default search input text with the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">placeholder</code>{" "}
          prop to match your application's terminology or guide users to specific actions.
        </p>
        <Preview
          code={`<CommandPalette
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  items={items}
  placeholder="What do you need help with?"
/>`}
        >
          <div>
            <button
              onClick={() => setCustomOpen(true)}
              className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm"
            >
              Custom Placeholder
            </button>
            <CommandPalette
              isOpen={customOpen}
              onClose={() => setCustomOpen(false)}
              items={demoItems}
              placeholder="What do you need help with?"
              onSelect={() => setCustomOpen(false)}
            />
          </div>
        </Preview>
      </Section>

      {/* Keyboard Shortcut */}
      <Section title="Keyboard Shortcut">
        <p className="text-gray-600 dark:text-gray-400">
          When{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">enableHotkey</code>{" "}
          is true (the default), users can press{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">⌘K</code>{" "}
          on Mac or{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">Ctrl+K</code>{" "}
          on Windows/Linux to toggle the command palette from anywhere in the application. Set to false to disable this global shortcut.
        </p>
        <Preview
          code={`// The ⌘K / Ctrl+K shortcut is enabled by default
<CommandPalette
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  items={items}
  enableHotkey={true}
/>

// Disable the global shortcut
<CommandPalette enableHotkey={false} ... />`}
        >
          <div className="flex items-center gap-3">
            <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded border border-gray-300 dark:border-zinc-600">
              ⌘K
            </kbd>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Press this shortcut anywhere to toggle the command palette.
            </span>
          </div>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
