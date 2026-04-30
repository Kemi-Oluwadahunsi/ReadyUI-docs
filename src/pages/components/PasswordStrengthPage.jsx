import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { PasswordStrength } from "readyui-react";

const props = [
  {
    name: "value",
    type: "string",
    default: '""',
    description:
      "The current password string. Use this with onChange for controlled input behavior.",
  },
  {
    name: "onChange",
    type: "Function",
    default: "—",
    description:
      "Callback fired on every keystroke. Receives the new password string, allowing you to store it in state.",
  },
  {
    name: "placeholder",
    type: "string",
    default: '"Enter password"',
    description:
      "Placeholder text displayed inside the password input when it is empty.",
  },
  {
    name: "showRules",
    type: "boolean",
    default: "true",
    description:
      "When true, a checklist of password rules (length, uppercase, number, special character) is displayed below the input so users know exactly what is required.",
  },
  {
    name: "showMeter",
    type: "boolean",
    default: "true",
    description:
      "When true, a color-coded strength meter bar is rendered below the input, giving users immediate visual feedback as they type.",
  },
  {
    name: "showToggle",
    type: "boolean",
    default: "true",
    description:
      "When true, a visibility toggle icon is shown inside the input, letting users reveal or hide their password.",
  },
  {
    name: "minLength",
    type: "number",
    default: "8",
    description:
      "The minimum number of characters required for the password to be considered valid. Adjusts the corresponding rule check.",
  },
  {
    name: "customRules",
    type: "Array",
    default: "—",
    description:
      "An array of custom rule objects, each with a label and a validator function. Use this to add domain-specific rules beyond the built-in checks.",
  },
  {
    name: "onStrengthChange",
    type: "Function",
    default: "—",
    description:
      'Callback fired whenever the computed strength level changes. Receives the strength level string (e.g., "weak", "medium", "strong") so you can react to it in your UI.',
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      "Controls the size of the input and its associated meter and rule text to match different form densities.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description:
      "When true, the input is non-interactive and visually dimmed.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the root wrapper for custom spacing or styling.",
  },
];

export default function PasswordStrengthPage() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [strength, setStrength] = useState("");
  const [password3, setPassword3] = useState("");
  const [password4, setPassword4] = useState("");

  return (
    <ComponentPage
      name="PasswordStrength"
      description="A password input with a built-in strength meter, rule checklist, and visibility toggle. Guides users toward creating strong passwords with real-time feedback."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { PasswordStrength } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            value
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onChange
          </code>{" "}
          to control the input. The strength meter and rule checklist update
          automatically as the user types.
        </p>
        <Preview
          code={`const [password, setPassword] = useState("");

<PasswordStrength
  value={password}
  onChange={setPassword}
/>`}
        >
          <div className="max-w-sm">
            <PasswordStrength value={password} onChange={setPassword} />
          </div>
        </Preview>
      </Section>

      {/* Strength Callback */}
      <Section title="Strength Callback">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onStrengthChange
          </code>{" "}
          callback fires whenever the computed strength level changes. Use it to
          enable or disable a submit button, show additional guidance, or log
          analytics.
        </p>
        <Preview
          code={`const [password, setPassword] = useState("");
const [strength, setStrength] = useState("");

<div className="space-y-2">
  <PasswordStrength
    value={password}
    onChange={setPassword}
    onStrengthChange={setStrength}
  />
  {strength && (
    <p className="text-sm text-gray-600 dark:text-gray-400">
      Current strength: <strong>{strength}</strong>
    </p>
  )}
</div>`}
        >
          <div className="max-w-sm space-y-2">
            <PasswordStrength
              value={password2}
              onChange={setPassword2}
              onStrengthChange={setStrength}
            />
            {strength && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Current strength: <strong>{strength}</strong>
              </p>
            )}
          </div>
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            size
          </code>{" "}
          prop scales the entire component — input, meter, and rule text — to
          fit compact or spacious form layouts.
        </p>
        <Preview
          code={`<div className="space-y-6">
  <PasswordStrength size="sm" placeholder="Small size" />
  <PasswordStrength size="md" placeholder="Medium size (default)" />
  <PasswordStrength size="lg" placeholder="Large size" />
</div>`}
        >
          <div className="max-w-sm space-y-6">
            <PasswordStrength size="sm" placeholder="Small size" />
            <PasswordStrength size="md" placeholder="Medium size (default)" />
            <PasswordStrength size="lg" placeholder="Large size" />
          </div>
        </Preview>
      </Section>

      {/* Minimal */}
      <Section title="Minimal (Hide Rules)">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showRules={"{false}"}
          </code>{" "}
          to hide the rule checklist and show only the strength meter. This
          creates a more compact layout when space is limited or when you handle
          validation elsewhere.
        </p>
        <Preview
          code={`const [password, setPassword] = useState("");

<PasswordStrength
  value={password}
  onChange={setPassword}
  showRules={false}
/>`}
        >
          <div className="max-w-sm">
            <PasswordStrength
              value={password3}
              onChange={setPassword3}
              showRules={false}
            />
          </div>
        </Preview>
      </Section>

      {/* Custom Minimum Length */}
      <Section title="Custom Minimum Length">
        <p className="text-gray-600 dark:text-gray-400">
          Override the default minimum length of 8 characters using the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            minLength
          </code>{" "}
          prop. The rule checklist updates to reflect the new requirement.
        </p>
        <Preview
          code={`const [password, setPassword] = useState("");

<PasswordStrength
  value={password}
  onChange={setPassword}
  minLength={12}
  placeholder="Minimum 12 characters"
/>`}
        >
          <div className="max-w-sm">
            <PasswordStrength
              value={password4}
              onChange={setPassword4}
              minLength={12}
              placeholder="Minimum 12 characters"
            />
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
