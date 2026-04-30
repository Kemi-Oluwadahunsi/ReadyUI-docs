import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { DarkModeProvider, DarkModeToggle, useDarkMode } from "readyui-react";

// Bridge component that connects DarkModeToggle to the DarkModeProvider context
function ConnectedToggle(props) {
  const { mode, setMode } = useDarkMode();
  return <DarkModeToggle mode={mode} onChange={setMode} {...props} />;
}

const providerProps = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    required: true,
    description:
      "The application content that will receive the dark mode context. Wrap your entire app or a subtree to give all descendants access to the theme state.",
  },
  {
    name: "defaultMode",
    type: '"light" | "dark" | "system"',
    default: '"system"',
    description:
      'The initial theme mode when no persisted preference exists. "system" follows the user\'s operating system preference, while "light" or "dark" force a specific theme.',
  },
  {
    name: "storageKey",
    type: "string",
    default: '"readyui-theme"',
    description:
      "The localStorage key used to persist the user's theme selection across sessions. Change this if you need to avoid conflicts with other libraries.",
  },
];

const toggleProps = [
  {
    name: "mode",
    type: '"light" | "dark" | "system"',
    default: "—",
    description:
      "The currently active theme mode. When provided, the toggle operates as a controlled component reflecting this value.",
  },
  {
    name: "onChange",
    type: "Function",
    default: "—",
    description:
      'Callback fired when the user selects a new mode. Receives the new mode string ("light", "dark", or "system") as its argument.',
  },
  {
    name: "variant",
    type: '"icon" | "switch" | "segmented"',
    default: '"segmented"',
    description:
      'The visual style of the toggle control. "icon" renders a single clickable sun/moon icon. "switch" renders a sliding toggle. "segmented" renders a three-option segmented control for light, dark, and system.',
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      "Controls the overall dimensions of the toggle element. Choose a size that fits your toolbar or header layout.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the toggle container for custom styling or spacing overrides.",
  },
  {
    name: "showSystem",
    type: "boolean",
    default: "true",
    description:
      'When set to false, hides the "system" option from the segmented variant, offering only light and dark choices.',
  },
];

const hookReturn = [
  {
    name: "mode",
    type: '"light" | "dark" | "system"',
    default: "—",
    description:
      "The currently selected theme mode string, reflecting the user's explicit choice.",
  },
  {
    name: "setMode",
    type: "Function",
    default: "—",
    description:
      'Setter function to programmatically update the theme. Accepts "light", "dark", or "system".',
  },
  {
    name: "isDark",
    type: "boolean",
    default: "—",
    description:
      "A resolved boolean indicating whether the current effective theme is dark. Takes system preference into account when mode is set to \"system\".",
  },
  {
    name: "toggleDarkMode",
    type: "Function",
    default: "—",
    description:
      "A convenience function that toggles between light and dark modes. Ignores the system option.",
  },
];

export default function DarkModeTogglePage() {
  return (
    <ComponentPage
      name="DarkModeToggle"
      description="A complete dark mode solution including a context provider, toggle controls in multiple variants, and a hook for programmatic theme management."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock
          code={`import { DarkModeProvider, DarkModeToggle, useDarkMode } from "readyui-react";`}
        />
      </Section>

      {/* Setup Provider */}
      <Section title="Setup Provider">
        <p className="text-gray-600 dark:text-gray-400">
          Wrap your application (or a subtree) with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            DarkModeProvider
          </code>{" "}
          to enable theme context. All{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            DarkModeToggle
          </code>{" "}
          components and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            useDarkMode
          </code>{" "}
          hooks inside the provider share the same theme state.
        </p>
        <CodeBlock
          code={`import { DarkModeProvider, DarkModeToggle } from "readyui-react";

function App() {
  return (
    <DarkModeProvider defaultMode="system" storageKey="my-app-theme">
      <header style={{ display: "flex", justifyContent: "space-between", padding: 16 }}>
        <h1>My App</h1>
        <DarkModeToggle />
      </header>
      <main>
        <p>Content automatically adapts to the selected theme.</p>
      </main>
    </DarkModeProvider>
  );
}`}
        />
      </Section>

      {/* Toggle Variants */}
      <Section title="Toggle Variants">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            variant
          </code>{" "}
          prop changes the visual style of the toggle. Choose between a compact icon button, a sliding switch, or a full segmented control.
        </p>
        <Preview
          code={`<DarkModeProvider>
  <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
    <div>
      <p style={{ fontSize: 12, marginBottom: 8 }}>Icon</p>
      <DarkModeToggle variant="icon" />
    </div>
    <div>
      <p style={{ fontSize: 12, marginBottom: 8 }}>Switch</p>
      <DarkModeToggle variant="switch" />
    </div>
    <div>
      <p style={{ fontSize: 12, marginBottom: 8 }}>Segmented</p>
      <DarkModeToggle variant="segmented" />
    </div>
  </div>
</DarkModeProvider>`}
        >
          <DarkModeProvider>
            <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
              <div>
                <p className="text-xs text-gray-500 mb-2">Icon</p>
                <ConnectedToggle variant="icon" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">Switch</p>
                <ConnectedToggle variant="switch" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">Segmented</p>
                <ConnectedToggle variant="segmented" />
              </div>
            </div>
          </DarkModeProvider>
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            size
          </code>{" "}
          prop adjusts the dimensions of any variant. Available sizes are{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            sm
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            md
          </code>
          , and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            lg
          </code>
          .
        </p>
        <Preview
          code={`<DarkModeProvider>
  <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
    <DarkModeToggle variant="icon" size="sm" />
    <DarkModeToggle variant="icon" size="md" />
    <DarkModeToggle variant="icon" size="lg" />
  </div>
</DarkModeProvider>`}
        >
          <DarkModeProvider>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">sm</p>
                <ConnectedToggle variant="icon" size="sm" />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">md</p>
                <ConnectedToggle variant="icon" size="md" />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-2">lg</p>
                <ConnectedToggle variant="icon" size="lg" />
              </div>
            </div>
          </DarkModeProvider>
        </Preview>
      </Section>

      {/* Using the Hook */}
      <Section title="Using the Hook">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            useDarkMode
          </code>{" "}
          hook gives you full programmatic control over the theme. Use it to build custom toggle UIs, conditionally render content, or sync theme state with external systems.
        </p>
        <CodeBlock
          code={`import { useDarkMode } from "readyui-react";

function ThemeStatus() {
  const { mode, setMode, isDark, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <p>Current mode: {mode}</p>
      <p>Is dark: {isDark ? "Yes" : "No"}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setMode("light")}>Light</button>
        <button onClick={() => setMode("dark")}>Dark</button>
        <button onClick={() => setMode("system")}>System</button>
        <button onClick={toggleDarkMode}>Toggle</button>
      </div>
    </div>
  );
}`}
        />
      </Section>

      {/* Without System Option */}
      <Section title="Without System Option">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showSystem
          </code>{" "}
          to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            false
          </code>{" "}
          to offer only light and dark options, hiding the system-preference choice.
        </p>
        <Preview
          code={`<DarkModeProvider>
  <DarkModeToggle variant="segmented" showSystem={false} />
</DarkModeProvider>`}
        >
          <DarkModeProvider>
            <ConnectedToggle variant="segmented" showSystem={false} />
          </DarkModeProvider>
        </Preview>
      </Section>

      {/* Provider Props */}
      <Section title="Provider Props">
        <p className="text-gray-600 dark:text-gray-400">
          Props for the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            DarkModeProvider
          </code>{" "}
          wrapper component.
        </p>
        <PropsTable props={providerProps} />
      </Section>

      {/* Toggle Props */}
      <Section title="Toggle Props">
        <p className="text-gray-600 dark:text-gray-400">
          Props for the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            DarkModeToggle
          </code>{" "}
          component.
        </p>
        <PropsTable props={toggleProps} />
      </Section>

      {/* Hook Return Values */}
      <Section title="useDarkMode Hook">
        <p className="text-gray-600 dark:text-gray-400">
          Values returned by the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            useDarkMode
          </code>{" "}
          hook.
        </p>
        <PropsTable props={hookReturn} />
      </Section>
    </ComponentPage>
  );
}
