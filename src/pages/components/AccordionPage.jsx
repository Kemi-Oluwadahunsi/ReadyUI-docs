import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Accordion } from "readyui-react";

const demoItems = [
  { id: "1", title: "What is ReadyUI React?", content: "ReadyUI React is a collection of 50+ production-ready, accessible React components built with Tailwind CSS. Every component supports dark mode, responsive design, and keyboard navigation out of the box." },
  { id: "2", title: "How do I install it?", content: "Simply run npm install readyui-react in your project. Make sure you have React 18+, Tailwind CSS 4+, and lucide-react as peer dependencies." },
  { id: "3", title: "Is it open source?", content: "Yes! ReadyUI React is completely open source and free to use in personal and commercial projects." },
];

const props = [
  { name: "items", type: "Array<{ id, title, content }>", default: "[]", required: true, description: "Array of accordion items. Each item must have a unique id (string), a title (string or ReactNode) displayed in the header, and content (string or ReactNode) shown when expanded." },
  { name: "allowMultiple", type: "boolean", default: "false", description: "When true, multiple panels can be open at the same time. By default, opening one panel closes any other open panel." },
  { name: "variant", type: '"default" | "bordered" | "separated"', default: '"default"', description: 'Controls the visual style. "default" is minimal with subtle dividers, "bordered" adds visible borders around each panel, and "separated" renders each panel as an independent card with spacing between them.' },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Controls padding, font size, and overall spacing of the accordion panels. Use sm for compact layouts and lg for spacious, prominent sections." },
  { name: "onToggle", type: "(id: string, isOpen: boolean) => void", default: "—", description: "Callback fired when a panel is toggled. Receives the item id and the new open state. Use this for analytics or controlled behavior." },
  { name: "defaultOpen", type: "string[]", default: "[]", description: "Array of item IDs that should be open when the accordion first renders. Does not apply after initial mount." },
  { name: "iconPosition", type: '"left" | "right"', default: '"right"', description: "Places the expand/collapse chevron icon on the left or right side of the panel header." },
  { name: "maxWidth", type: '"sm" | "md" | "lg" | "xl" | "full" | CSS value', default: '"full"', description: 'Sets the max-width of the accordion. Use preset sizes or a custom CSS value like "600px".' },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the accordion wrapper element for custom styling." },
];

export default function AccordionPage() {
  const [toggleLog, setToggleLog] = useState("");

  return (
    <ComponentPage
      name="Accordion"
      description="A configurable, accessible accordion/collapsible panel component with multiple visual variants, sizes, and animation support. Perfect for FAQs, settings panels, and any content that benefits from show/hide behavior."
    >
      {/* Installation */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the Accordion component from readyui-react:
        </p>
        <CodeBlock code={`import { Accordion } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass an array of items with <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">id</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">title</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">content</code>.
          Only one panel can be open at a time by default. Click a panel header to toggle it.
        </p>
        <Preview
          code={`const items = [
  {
    id: "1",
    title: "What is ReadyUI React?",
    content: "A collection of 50+ production-ready React components."
  },
  {
    id: "2",
    title: "How do I install it?",
    content: "Run: npm install readyui-react"
  },
  {
    id: "3",
    title: "Is it open source?",
    content: "Yes, completely free and open source."
  },
];

<Accordion items={items} />`}
        >
          <Accordion items={demoItems} />
        </Preview>
      </Section>

      {/* Variants */}
      <Section title="Variants">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">variant</code> prop changes the accordion's visual style. There are three built-in variants:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Default — Clean, minimal dividers</h3>
            <Preview code={`<Accordion items={items} variant="default" />`}>
              <Accordion items={demoItems} variant="default" />
            </Preview>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Bordered — Visible border around each panel</h3>
            <Preview code={`<Accordion items={items} variant="bordered" />`}>
              <Accordion items={demoItems} variant="bordered" />
            </Preview>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Separated — Each panel as an independent card</h3>
            <Preview code={`<Accordion items={items} variant="separated" />`}>
              <Accordion items={demoItems} variant="separated" />
            </Preview>
          </div>
        </div>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          Use the <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">size</code> prop to adjust the accordion's padding and font size. Available sizes are <strong>sm</strong>, <strong>md</strong> (default), and <strong>lg</strong>.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Small</h3>
            <Preview code={`<Accordion items={items} size="sm" variant="separated" />`}>
              <Accordion items={demoItems} size="sm" variant="separated" />
            </Preview>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Medium (default)</h3>
            <Preview code={`<Accordion items={items} size="md" variant="separated" />`}>
              <Accordion items={demoItems} size="md" variant="separated" />
            </Preview>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Large</h3>
            <Preview code={`<Accordion items={items} size="lg" variant="separated" />`}>
              <Accordion items={demoItems} size="lg" variant="separated" />
            </Preview>
          </div>
        </div>
      </Section>

      {/* Allow Multiple */}
      <Section title="Multiple Open Panels">
        <p className="text-gray-600 dark:text-gray-400">
          By default, only one panel is open at a time. Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">allowMultiple</code> to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">true</code> to let users expand multiple panels simultaneously.
          You can also pre-open specific panels using <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">defaultOpen</code>.
        </p>
        <Preview
          code={`<Accordion
  items={items}
  allowMultiple
  defaultOpen={["1", "3"]}
  variant="bordered"
/>`}
        >
          <Accordion items={demoItems} allowMultiple defaultOpen={["1", "3"]} variant="bordered" />
        </Preview>
      </Section>

      {/* Icon Position */}
      <Section title="Icon Position">
        <p className="text-gray-600 dark:text-gray-400">
          Move the expand/collapse chevron to the left side of the header using{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">iconPosition="left"</code>.
          This is useful for left-aligned visual hierarchy.
        </p>
        <Preview code={`<Accordion items={items} iconPosition="left" variant="separated" />`}>
          <Accordion items={demoItems} iconPosition="left" variant="separated" />
        </Preview>
      </Section>

      {/* Max Width */}
      <Section title="Max Width">
        <p className="text-gray-600 dark:text-gray-400">
          Control the maximum width of the accordion using the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">maxWidth</code> prop.
          Use preset values like <strong>"sm"</strong>, <strong>"md"</strong>, <strong>"lg"</strong>, <strong>"xl"</strong>, <strong>"full"</strong> or pass a custom CSS value.
        </p>
        <Preview code={`<Accordion items={items} maxWidth="md" variant="separated" />`}>
          <Accordion items={demoItems} maxWidth="md" variant="separated" />
        </Preview>
      </Section>

      {/* onToggle Callback */}
      <Section title="onToggle Callback">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onToggle</code> callback fires whenever a panel is opened or closed.
          It receives the item <strong>id</strong> and the new <strong>isOpen</strong> state. Useful for analytics tracking or controlled accordion behavior.
        </p>
        <Preview
          code={`const [log, setLog] = useState("");

<Accordion
  items={items}
  variant="separated"
  onToggle={(id, isOpen) =>
    setLog(\`Panel \${id} \${isOpen ? "opened" : "closed"}\`)
  }
/>
<p>Last action: {log}</p>`}
        >
          <div className="space-y-4">
            <Accordion
              items={demoItems}
              variant="separated"
              onToggle={(id, isOpen) =>
                setToggleLog(`Panel ${id} ${isOpen ? "opened" : "closed"}`)
              }
            />
            {toggleLog && (
              <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-zinc-800 px-4 py-2 rounded-lg">
                Last action: <strong>{toggleLog}</strong>
              </div>
            )}
          </div>
        </Preview>
      </Section>

      {/* JSX Content */}
      <Section title="Rich Content">
        <p className="text-gray-600 dark:text-gray-400">
          Both <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">title</code> and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">content</code> accept ReactNode, so you can pass JSX for rich layouts like badges, icons, or nested components.
        </p>
        <Preview
          code={`const richItems = [
  {
    id: "1",
    title: (
      <span className="flex items-center gap-2">
        🚀 Getting Started
        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
          New
        </span>
      </span>
    ),
    content: (
      <div className="space-y-2">
        <p>Follow these steps to get up and running:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Install the package</li>
          <li>Import your components</li>
          <li>Start building!</li>
        </ol>
      </div>
    ),
  },
];

<Accordion items={richItems} variant="bordered" />`}
        >
          <Accordion
            items={[
              {
                id: "1",
                title: (
                  <span className="flex items-center gap-2">
                    🚀 Getting Started
                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">New</span>
                  </span>
                ),
                content: (
                  <div className="space-y-2">
                    <p>Follow these steps to get up and running:</p>
                    <ol className="list-decimal list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Install the package</li>
                      <li>Import your components</li>
                      <li>Start building!</li>
                    </ol>
                  </div>
                ),
              },
              {
                id: "2",
                title: "⚙️ Configuration",
                content: "Customize components via props — no config files needed.",
              },
            ]}
            variant="bordered"
          />
        </Preview>
      </Section>

      {/* Props Reference */}
      <Section title="Props">
        <p className="text-gray-600 dark:text-gray-400">
          Complete list of all props accepted by the Accordion component:
        </p>
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
