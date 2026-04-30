import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { ToastProvider, useToast } from "readyui-react";

/* ── Small inner components used for live previews ── */

function BasicToastDemo() {
  const { addToast } = useToast();
  return (
    <button
      onClick={() => addToast({ type: "success", message: "Action completed!" })}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Show Toast
    </button>
  );
}

function TypesDemo() {
  const { addToast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => addToast({ type: "success", message: "Changes saved successfully." })}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Success
      </button>
      <button
        onClick={() => addToast({ type: "error", message: "Something went wrong." })}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        Error
      </button>
      <button
        onClick={() => addToast({ type: "warning", message: "Disk space is running low." })}
        className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
      >
        Warning
      </button>
      <button
        onClick={() => addToast({ type: "info", message: "A new version is available." })}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Info
      </button>
    </div>
  );
}

function DurationDemo() {
  const { addToast } = useToast();
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => addToast({ type: "info", message: "Disappears in 1 second.", duration: 1000 })}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        1s Duration
      </button>
      <button
        onClick={() => addToast({ type: "info", message: "Stays for 8 seconds.", duration: 8000 })}
        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        8s Duration
      </button>
    </div>
  );
}

const providerProps = [
  { name: "children", type: "ReactNode", default: "—", required: true, description: "Your application tree. Any component inside this provider can call the useToast hook to trigger toast notifications." },
  { name: "variant", type: '"minimal" | "modern" | "alert"', default: '"minimal"', description: 'Controls the visual appearance of all toasts rendered by this provider. "minimal" is clean and subtle, "modern" has richer styling with icons, and "alert" is bold and attention-grabbing.' },
  { name: "position", type: "string", default: '"top-right"', description: 'Screen corner where toasts appear. Common values include "top-right", "top-left", "bottom-right", "bottom-left", "top-center", and "bottom-center".' },
  { name: "maxToasts", type: "number", default: "5", description: "Maximum number of toasts visible at once. When the limit is reached, the oldest toast is automatically dismissed before a new one appears." },
  { name: "defaultDuration", type: "number", default: "4000", description: "Default time in milliseconds before a toast auto-dismisses. Individual toasts can override this with their own duration property." },
  { name: "backdrop", type: "boolean", default: "false", description: "When true, renders a semi-transparent backdrop behind the toast stack that dims the rest of the page." },
];

const addToastProps = [
  { name: "type", type: '"success" | "error" | "warning" | "info"', default: "—", required: true, description: 'The semantic type of the toast which determines its color scheme and icon. "success" is green, "error" is red, "warning" is yellow/amber, and "info" is blue.' },
  { name: "message", type: "string", default: "—", required: true, description: "The text content displayed inside the toast notification." },
  { name: "duration", type: "number", default: "—", description: "Optional override for how long this specific toast stays visible (in milliseconds). Falls back to the provider's defaultDuration if not specified." },
];

export default function ToastPage() {
  return (
    <ComponentPage
      name="Toast"
      description="A toast notification system built with a provider/hook pattern. Wrap your app in ToastProvider, then call useToast() from any component to trigger success, error, warning, and info notifications with three visual variants."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the provider and hook from readyui-react:
        </p>
        <CodeBlock code={`import { ToastProvider, useToast } from "readyui-react";`} />
      </Section>

      {/* Setup */}
      <Section title="Setup">
        <p className="text-gray-600 dark:text-gray-400">
          Wrap your application (or a section of it) with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">ToastProvider</code>. This creates the toast context and renders the toast container. Any component inside the provider can then call{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">useToast()</code> to access the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">addToast</code> function.
        </p>
        <CodeBlock
          code={`// App.jsx or layout component
import { ToastProvider } from "readyui-react";

function App() {
  return (
    <ToastProvider variant="modern" position="top-right">
      <YourApp />
    </ToastProvider>
  );
}`}
        />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Inside any component wrapped by the provider, call{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">addToast</code> with a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">type</code> and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">message</code> to trigger a notification. Click the button below to see it in action.
        </p>
        <Preview
          code={`function MyComponent() {
  const { addToast } = useToast();

  return (
    <button onClick={() => addToast({ type: "success", message: "Action completed!" })}>
      Show Toast
    </button>
  );
}`}
        >
          <ToastProvider variant="modern" position="top-right">
            <BasicToastDemo />
          </ToastProvider>
        </Preview>
      </Section>

      {/* All 3 Variants */}
      <Section title="Variants">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">variant</code> prop on{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">ToastProvider</code> controls the look of all toasts. Choose from{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">minimal</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">modern</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">alert</code>.
        </p>

        <Preview
          code={`<ToastProvider variant="minimal">
  <MyComponent />
</ToastProvider>`}
        >
          <ToastProvider variant="minimal" position="top-right">
            <MinimalDemo />
          </ToastProvider>
        </Preview>

        <Preview
          code={`<ToastProvider variant="modern">
  <MyComponent />
</ToastProvider>`}
        >
          <ToastProvider variant="modern" position="top-right">
            <ModernDemo />
          </ToastProvider>
        </Preview>

        <Preview
          code={`<ToastProvider variant="alert">
  <MyComponent />
</ToastProvider>`}
        >
          <ToastProvider variant="alert" position="top-right">
            <AlertDemo />
          </ToastProvider>
        </Preview>
      </Section>

      {/* Toast Types */}
      <Section title="Toast Types">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">type</code> property in the addToast call determines the toast's color and icon. There are four types:{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">success</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">error</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">warning</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">info</code>.
        </p>
        <Preview
          code={`const { addToast } = useToast();

<button onClick={() => addToast({ type: "success", message: "Saved!" })}>Success</button>
<button onClick={() => addToast({ type: "error", message: "Failed!" })}>Error</button>
<button onClick={() => addToast({ type: "warning", message: "Caution!" })}>Warning</button>
<button onClick={() => addToast({ type: "info", message: "FYI" })}>Info</button>`}
        >
          <ToastProvider variant="modern" position="top-right">
            <TypesDemo />
          </ToastProvider>
        </Preview>
      </Section>

      {/* Custom Duration */}
      <Section title="Custom Duration">
        <p className="text-gray-600 dark:text-gray-400">
          Override the default auto-dismiss timing by passing a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">duration</code> in milliseconds to individual addToast calls.
        </p>
        <Preview
          code={`addToast({ type: "info", message: "Gone in 1 second.", duration: 1000 });
addToast({ type: "info", message: "Stays for 8 seconds.", duration: 8000 });`}
        >
          <ToastProvider variant="modern" position="top-right">
            <DurationDemo />
          </ToastProvider>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="ToastProvider Props">
        <PropsTable props={providerProps} />
      </Section>

      <Section title="addToast Options">
        <PropsTable props={addToastProps} />
      </Section>
    </ComponentPage>
  );
}

/* ── Variant demo buttons ── */

function MinimalDemo() {
  const { addToast } = useToast();
  return (
    <button
      onClick={() => addToast({ type: "success", message: "Minimal style toast." })}
      className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm font-medium"
    >
      Trigger Minimal
    </button>
  );
}

function ModernDemo() {
  const { addToast } = useToast();
  return (
    <button
      onClick={() => addToast({ type: "info", message: "Modern style toast." })}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
    >
      Trigger Modern
    </button>
  );
}

function AlertDemo() {
  const { addToast } = useToast();
  return (
    <button
      onClick={() => addToast({ type: "warning", message: "Alert style toast." })}
      className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium"
    >
      Trigger Alert
    </button>
  );
}
