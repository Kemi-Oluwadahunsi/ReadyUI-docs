import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { CopyToClipboard } from "readyui-react";

const props = [
  {
    name: "text",
    type: "string",
    default: "—",
    description:
      "The text content that will be copied to the clipboard when the user triggers the copy action. This is the primary required prop.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "Optional child elements to render as the copy trigger. When provided, the children are wrapped in a clickable container that triggers the copy action.",
  },
  {
    name: "onCopy",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked after the text is successfully copied to the clipboard. Receives the copied text string as its argument.",
  },
  {
    name: "resetDelay",
    type: "number",
    default: "2000",
    description:
      "Duration in milliseconds before the button resets from the success state back to its default state. Increase this for slower feedback or decrease for snappier interactions.",
  },
  {
    name: "label",
    type: "string",
    default: '"Copy"',
    description:
      "The text displayed on the button in its default (not yet copied) state. Customize this to provide context-specific copy labels like \"Copy URL\" or \"Copy Code\".",
  },
  {
    name: "successLabel",
    type: "string",
    default: '"Copied!"',
    description:
      "The text displayed on the button after the text has been successfully copied. Provides visual confirmation of the copy action.",
  },
  {
    name: "variant",
    type: '"button" | "icon" | "inline"',
    default: '"button"',
    description:
      "Controls the visual style of the copy trigger. Use \"button\" for a standard button appearance, \"icon\" for a minimal icon-only trigger, or \"inline\" for embedding within text content.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      'Sets the size of the copy trigger. "sm" is compact for dense layouts, "md" is the standard size, and "lg" is larger for prominent placement.',
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names to apply to the outer container for custom styling overrides.",
  },
  {
    name: "showTooltip",
    type: "boolean",
    default: "true",
    description:
      "When enabled, shows a tooltip on hover indicating the copy action. Provides additional affordance especially for icon-only variants.",
  },
];

export default function CopyToClipboardPage() {
  const [lastCopied, setLastCopied] = useState("");

  return (
    <ComponentPage
      name="CopyToClipboard"
      description="A one-click copy button that copies text to the clipboard with visual feedback. Supports button, icon, and inline variants with customizable labels and sizes."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { CopyToClipboard } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            text
          </code>{" "}
          prop with the content you want to copy. The button automatically
          switches to a success state after the user clicks it.
        </p>
        <Preview
          code={`<CopyToClipboard text="npm install readyui-react" />`}
        >
          <CopyToClipboard text="npm install readyui-react" />
        </Preview>
      </Section>

      {/* With Custom Labels */}
      <Section title="With Custom Labels">
        <p className="text-gray-600 dark:text-gray-400">
          Customize the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            label
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            successLabel
          </code>{" "}
          props to provide context-specific copy labels that better describe
          what is being copied.
        </p>
        <Preview
          code={`<div className="space-y-3">
  <CopyToClipboard
    text="https://readyui.dev/docs"
    label="Copy URL"
    successLabel="URL Copied!"
  />
  <CopyToClipboard
    text="const x = 42;"
    label="Copy Code"
    successLabel="Code Copied!"
  />
</div>`}
        >
          <div className="space-y-3">
            <CopyToClipboard
              text="https://readyui.dev/docs"
              label="Copy URL"
              successLabel="URL Copied!"
            />
            <CopyToClipboard
              text="const x = 42;"
              label="Copy Code"
              successLabel="Code Copied!"
            />
          </div>
        </Preview>
      </Section>

      {/* Different Sizes */}
      <Section title="Different Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            size
          </code>{" "}
          prop controls the button dimensions. Choose a size that fits your
          layout density.
        </p>
        <Preview
          code={`<div className="flex flex-wrap items-center gap-4">
  <CopyToClipboard text="Small" size="sm" label="Small" />
  <CopyToClipboard text="Medium" size="md" label="Medium" />
  <CopyToClipboard text="Large" size="lg" label="Large" />
</div>`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <CopyToClipboard text="Small" size="sm" label="Small" />
            <CopyToClipboard text="Medium" size="md" label="Medium" />
            <CopyToClipboard text="Large" size="lg" label="Large" />
          </div>
        </Preview>
      </Section>

      {/* Callback Handling */}
      <Section title="Callback Handling">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onCopy
          </code>{" "}
          callback to perform additional actions after copying, such as showing
          a toast notification or logging the event.
        </p>
        <Preview
          code={`const [lastCopied, setLastCopied] = useState("");

<div className="space-y-3">
  <CopyToClipboard
    text="SK-xxxx-yyyy-zzzz"
    label="Copy API Key"
    onCopy={(text) => setLastCopied(text)}
  />
  {lastCopied && (
    <p className="text-sm text-green-600">
      Last copied: {lastCopied}
    </p>
  )}
</div>`}
        >
          <div className="space-y-3">
            <CopyToClipboard
              text="SK-xxxx-yyyy-zzzz"
              label="Copy API Key"
              onCopy={(text) => setLastCopied(text)}
            />
            {lastCopied && (
              <p className="text-sm text-green-600">
                Last copied: {lastCopied}
              </p>
            )}
          </div>
        </Preview>
      </Section>

      {/* With Children */}
      <Section title="With Children">
        <p className="text-gray-600 dark:text-gray-400">
          Wrap arbitrary content with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            CopyToClipboard
          </code>{" "}
          by passing{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            children
          </code>
          . The entire child block becomes a clickable copy trigger.
        </p>
        <Preview
          code={`<CopyToClipboard text="git clone https://github.com/readyui/react.git">
  <code className="block px-4 py-3 bg-gray-100 dark:bg-zinc-800 rounded-lg text-sm font-mono">
    git clone https://github.com/readyui/react.git
  </code>
</CopyToClipboard>`}
        >
          <CopyToClipboard text="git clone https://github.com/readyui/react.git">
            <code className="block px-4 py-3 bg-gray-100 dark:bg-zinc-800 rounded-lg text-sm font-mono">
              git clone https://github.com/readyui/react.git
            </code>
          </CopyToClipboard>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
