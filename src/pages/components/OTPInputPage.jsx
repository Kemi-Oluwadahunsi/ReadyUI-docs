import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { OTPInput } from "readyui-react";

const props = [
  {
    name: "length",
    type: "number",
    default: "6",
    description:
      "The number of input boxes to render. Common values are 4 for short PINs and 6 for standard OTP codes.",
  },
  {
    name: "onComplete",
    type: "Function",
    default: "—",
    description:
      "Callback fired when all boxes are filled. Receives the complete OTP string, making it the ideal place to trigger verification logic.",
  },
  {
    name: "onChange",
    type: "Function",
    default: "—",
    description:
      "Callback fired on every character change. Receives the current partial or complete value string.",
  },
  {
    name: "value",
    type: "string",
    default: '""',
    description:
      "The current OTP value for controlled usage. Each character maps to one input box from left to right.",
  },
  {
    name: "autoFocus",
    type: "boolean",
    default: "true",
    description:
      "When true, the first input box is automatically focused on mount, letting users start typing immediately.",
  },
  {
    name: "masked",
    type: "boolean",
    default: "false",
    description:
      "When true, entered digits are masked with dots for privacy, similar to a password field. Useful for sensitive PIN entries.",
  },
  {
    name: "type",
    type: '"number" | "text"',
    default: '"number"',
    description:
      'Restricts input to numeric digits when set to "number". Use "text" to allow alphanumeric codes.',
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description:
      "When true, all input boxes are non-interactive and visually dimmed.",
  },
  {
    name: "error",
    type: "boolean",
    default: "false",
    description:
      "When true, applies error styling (typically a red border) to all input boxes, indicating an invalid or expired code.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the outer wrapper for layout adjustments.",
  },
  {
    name: "inputClassName",
    type: "string",
    default: '""',
    description:
      "CSS class names applied to each individual input box for fine-grained styling control.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      "Controls the size of each input box. Larger sizes improve touch targets on mobile devices.",
  },
  {
    name: "placeholder",
    type: "string",
    default: '"○"',
    description:
      "The placeholder character displayed in empty input boxes. A single character works best visually.",
  },
  {
    name: "wrapAfter",
    type: "number",
    default: "0",
    description:
      "When set to a number greater than 0, inserts a visual gap after every N boxes (e.g., wrapAfter={3} creates a 3-3 grouping for a 6-digit code).",
  },
];

export default function OTPInputPage() {
  const [completedCode, setCompletedCode] = useState("");

  return (
    <ComponentPage
      name="OTPInput"
      description="A one-time password input with individual character boxes, auto-advance, paste support, and keyboard navigation. Ideal for verification flows, two-factor authentication, and PIN entry."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { OTPInput } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          The default configuration renders 6 input boxes. Pass an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onComplete
          </code>{" "}
          callback to be notified when the user has entered all digits. The
          cursor automatically advances to the next box after each keystroke.
        </p>
        <Preview
          code={`const [completedCode, setCompletedCode] = useState("");

<div className="space-y-3">
  <OTPInput
    onComplete={(code) => setCompletedCode(code)}
    autoFocus={false}
  />
  {completedCode && (
    <p className="text-sm text-green-600 dark:text-green-400">
      Code entered: {completedCode}
    </p>
  )}
</div>`}
        >
          <div className="space-y-3">
            <OTPInput
              onComplete={(code) => setCompletedCode(code)}
              autoFocus={false}
            />
            {completedCode && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Code entered: {completedCode}
              </p>
            )}
          </div>
        </Preview>
      </Section>

      {/* Masked Input */}
      <Section title="Masked Input">
        <p className="text-gray-600 dark:text-gray-400">
          Enable the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            masked
          </code>{" "}
          prop to hide entered characters behind dots. This is ideal for
          sensitive PIN codes where shoulder-surfing is a concern.
        </p>
        <Preview
          code={`<OTPInput masked autoFocus={false} />`}
        >
          <OTPInput masked autoFocus={false} />
        </Preview>
      </Section>

      {/* Error State */}
      <Section title="Error State">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            error
          </code>{" "}
          to true to highlight all boxes with error styling. Combine this with
          an error message to tell users their code was invalid or expired.
        </p>
        <Preview
          code={`<div className="space-y-2">
  <OTPInput error autoFocus={false} />
  <p className="text-sm text-red-500">Invalid code. Please try again.</p>
</div>`}
        >
          <div className="space-y-2">
            <OTPInput error autoFocus={false} />
            <p className="text-sm text-red-500">
              Invalid code. Please try again.
            </p>
          </div>
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            size
          </code>{" "}
          prop to control the dimensions of each input box. Larger sizes provide
          better touch targets for mobile users.
        </p>
        <Preview
          code={`<div className="space-y-6">
  <div>
    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Small</h3>
    <OTPInput size="sm" length={4} autoFocus={false} />
  </div>
  <div>
    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Medium (default)</h3>
    <OTPInput size="md" length={4} autoFocus={false} />
  </div>
  <div>
    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Large</h3>
    <OTPInput size="lg" length={4} autoFocus={false} />
  </div>
</div>`}
        >
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Small
              </h3>
              <OTPInput size="sm" length={4} autoFocus={false} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Medium (default)
              </h3>
              <OTPInput size="md" length={4} autoFocus={false} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Large
              </h3>
              <OTPInput size="lg" length={4} autoFocus={false} />
            </div>
          </div>
        </Preview>
      </Section>

      {/* Custom Length */}
      <Section title="Custom Length (4-Digit)">
        <p className="text-gray-600 dark:text-gray-400">
          Set the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            length
          </code>{" "}
          prop to change how many input boxes are rendered. A 4-digit code is
          common for short verification PINs.
        </p>
        <Preview
          code={`<OTPInput length={4} autoFocus={false} />`}
        >
          <OTPInput length={4} autoFocus={false} />
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
