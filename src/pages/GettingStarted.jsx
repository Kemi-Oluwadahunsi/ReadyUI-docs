import CodeBlock from "../components/CodeBlock";

export default function GettingStarted() {
  return (
    <article className="space-y-10">
      <header>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Getting Started</h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Install ReadyUI React and start building beautiful interfaces in minutes.
        </p>
      </header>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Install the package from npm:
        </p>
        <CodeBlock language="bash" code={`npm install readyui-react`} />
        <p className="text-gray-600 dark:text-gray-400">or with yarn:</p>
        <CodeBlock language="bash" code={`yarn add readyui-react`} />
      </section>

      {/* Peer Dependencies */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Peer Dependencies</h2>
        <p className="text-gray-600 dark:text-gray-400">
          ReadyUI React requires the following peer dependencies:
        </p>
        <CodeBlock
          language="bash"
          code={`npm install react react-dom lucide-react`}
        />
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-zinc-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-zinc-800/50 border-b border-gray-200 dark:border-zinc-700">
                <th className="text-left px-4 py-2.5 font-semibold">Package</th>
                <th className="text-left px-4 py-2.5 font-semibold">Version</th>
                <th className="text-left px-4 py-2.5 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
              <tr><td className="px-4 py-2.5">react</td><td className="px-4 py-2.5">≥ 18</td><td className="px-4 py-2.5">Required</td></tr>
              <tr><td className="px-4 py-2.5">react-dom</td><td className="px-4 py-2.5">≥ 18</td><td className="px-4 py-2.5">Required</td></tr>
              <tr><td className="px-4 py-2.5">lucide-react</td><td className="px-4 py-2.5">≥ 0.400</td><td className="px-4 py-2.5">Required</td></tr>
              <tr><td className="px-4 py-2.5">tailwindcss</td><td className="px-4 py-2.5">≥ 4.0</td><td className="px-4 py-2.5">Optional — only if you skip the pre-built CSS</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Import Styles */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Import Styles</h2>
        <p className="text-gray-600 dark:text-gray-400">
          ReadyUI ships a pre-built CSS bundle with all the Tailwind classes and custom keyframes needed by the components.
          Import it once in your app entry point (e.g.{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">main.jsx</code> or{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">App.jsx</code>):
        </p>
        <CodeBlock code={`import "readyui-react/styles.css";`} />
        <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/50">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Already using Tailwind CSS v4?</strong> You can skip the pre-built CSS and instead add a{" "}
            <code className="text-xs bg-blue-100 dark:bg-blue-900/50 px-1 py-0.5 rounded">@source</code>{" "}
            directive in your CSS to let Tailwind scan the library's classes:
          </p>
          <CodeBlock code={`/* In your main CSS file */\n@source "../node_modules/readyui-react/dist/*.js";`} />
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Quick Start</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Import any component and start using it right away:
        </p>
        <CodeBlock
          code={`import { Accordion, Badge, Modal, Select } from "readyui-react";

function App() {
  return (
    <div>
      <Badge content={5} color="red">
        <button>Notifications</button>
      </Badge>

      <Accordion
        items={[
          { id: "1", title: "Section 1", content: "Content here..." },
          { id: "2", title: "Section 2", content: "More content..." },
        ]}
      />
    </div>
  );
}`}
        />
      </section>

      {/* Dark Mode */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Dark Mode</h2>
        <p className="text-gray-600 dark:text-gray-400">
          All components support dark mode via Tailwind's <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">.dark</code> class on the HTML element.
          You can use the built-in <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">DarkModeProvider</code> for automatic theme management:
        </p>
        <CodeBlock
          code={`import { DarkModeProvider, DarkModeToggle } from "readyui-react";

function App() {
  return (
    <DarkModeProvider>
      <DarkModeToggle />
      {/* Your app content */}
    </DarkModeProvider>
  );
}`}
        />
      </section>

      {/* Customization */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Customization</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Every component accepts a <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">className</code> prop for adding custom Tailwind classes.
          Many components also offer variant, size, and color props for built-in customization options.
        </p>
        <CodeBlock
          code={`<Accordion
  variant="separated"
  size="lg"
  maxWidth="xl"
  className="my-custom-class"
  items={items}
/>`}
        />
      </section>

      {/* Toast Setup */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Toast Notifications Setup</h2>
        <p className="text-gray-600 dark:text-gray-400">
          The toast system requires wrapping your app with <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">ToastProvider</code>:
        </p>
        <CodeBlock
          code={`import { ToastProvider, useToast } from "readyui-react";

// Wrap your app
function App() {
  return (
    <ToastProvider variant="modern" position="top-right">
      <MyContent />
    </ToastProvider>
  );
}

// Use anywhere inside the provider
function MyContent() {
  const { addToast } = useToast();

  return (
    <button onClick={() => addToast({ type: "success", message: "Saved!" })}>
      Show Toast
    </button>
  );
}`}
        />
      </section>

      {/* Links */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://github.com/Kemi-Oluwadahunsi/ReadyToUse-React-Components"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-800 transition-colors"
          >
            <p className="font-medium">GitHub Repository</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Source code and contributing guide</p>
          </a>
          <a
            href="https://www.npmjs.com/package/readyui-react"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-800 transition-colors"
          >
            <p className="font-medium">npm Package</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">readyui-react on npm</p>
          </a>
          <a
            href="https://kemi-oluwadahunsi.github.io/ReadyToUse-React-Components/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-800 transition-colors"
          >
            <p className="font-medium">Storybook</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Interactive component playground</p>
          </a>
        </div>
      </section>
    </article>
  );
}
