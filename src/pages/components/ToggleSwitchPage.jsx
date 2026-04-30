import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { ToggleSwitch } from "readyui-react";

const props = [
  {
    name: "checked",
    type: "boolean",
    default: "—",
    description:
      "Controls the toggle state when used as a controlled component. When provided, you must also supply an onChange handler to update this value.",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    default: "false",
    description:
      "Sets the initial state for uncontrolled usage. The component manages its own state internally when this prop is used instead of checked.",
  },
  {
    name: "onChange",
    type: "Function",
    default: "—",
    description:
      "Callback fired when the toggle state changes. Receives the new boolean value as an argument.",
  },
  {
    name: "label",
    type: "string",
    default: '""',
    description:
      "A text label rendered alongside the toggle. Clicking the label also toggles the switch for better accessibility.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description:
      "When true, the toggle is visually dimmed and does not respond to user interaction.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      'Controls the physical size of the toggle. "sm" is compact for dense layouts, "md" is the standard size, and "lg" is larger for touch-friendly interfaces.',
  },
  {
    name: "variant",
    type: '"default" | "ios" | "material" | "pill" | "icon" | "labeled" | "outline" | "slim"',
    default: '"default"',
    description:
      "Selects the visual style of the toggle. Each variant matches a different design language — ios for Apple-style, material for Google-style, pill for rounded capsule, etc.",
  },
  {
    name: "onColor",
    type: "string",
    default: "—",
    description:
      "A custom CSS color applied to the track background when the toggle is in the on state. Overrides the default theme color.",
  },
  {
    name: "offColor",
    type: "string",
    default: "—",
    description:
      "A custom CSS color applied to the track background when the toggle is in the off state.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the root toggle wrapper for custom styling.",
  },
  {
    name: "labelPosition",
    type: '"left" | "right"',
    default: '"right"',
    description:
      "Determines whether the label text appears to the left or right of the toggle switch.",
  },
  {
    name: "onLabel",
    type: "string",
    default: "—",
    description:
      'Text displayed inside the toggle track when it is on. Only visible with variants that support embedded labels (e.g., "labeled").',
  },
  {
    name: "offLabel",
    type: "string",
    default: "—",
    description:
      "Text displayed inside the toggle track when it is off.",
  },
  {
    name: "onIcon",
    type: "ReactNode",
    default: "—",
    description:
      'An icon rendered inside the toggle thumb when it is on. Works with the "icon" variant.',
  },
  {
    name: "offIcon",
    type: "ReactNode",
    default: "—",
    description:
      "An icon rendered inside the toggle thumb when it is off.",
  },
  {
    name: "description",
    type: "string",
    default: "—",
    description:
      "A secondary line of helper text rendered below the label, useful for explaining what the toggle controls.",
  },
];

export default function ToggleSwitchPage() {
  const [checked, setChecked] = useState(false);

  return (
    <ComponentPage
      name="ToggleSwitch"
      description="A versatile toggle switch component with eight visual variants, multiple sizes, and full control over labels, colors, and icons. Perfect for settings panels and preference toggles."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { ToggleSwitch } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            checked
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onChange
          </code>{" "}
          to make the toggle a controlled component. This is the recommended
          pattern for forms and settings.
        </p>
        <Preview
          code={`const [checked, setChecked] = useState(false);

<ToggleSwitch
  checked={checked}
  onChange={setChecked}
  label="Enable notifications"
/>`}
        >
          <ToggleSwitch
            checked={checked}
            onChange={setChecked}
            label="Enable notifications"
          />
        </Preview>
      </Section>

      {/* All 8 Variants */}
      <Section title="Variants">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            variant
          </code>{" "}
          prop lets you choose from eight distinct visual styles. Each variant
          is designed to match a specific design system or aesthetic.
        </p>
        <Preview
          code={`<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
  <ToggleSwitch variant="default" label="Default" defaultChecked />
  <ToggleSwitch variant="ios" label="iOS" defaultChecked />
  <ToggleSwitch variant="material" label="Material" defaultChecked />
  <ToggleSwitch variant="pill" label="Pill" defaultChecked />
  <ToggleSwitch variant="icon" label="Icon" defaultChecked />
  <ToggleSwitch variant="labeled" label="Labeled" defaultChecked onLabel="ON" offLabel="OFF" />
  <ToggleSwitch variant="outline" label="Outline" defaultChecked />
  <ToggleSwitch variant="slim" label="Slim" defaultChecked />
</div>`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <ToggleSwitch variant="default" label="Default" defaultChecked />
            <ToggleSwitch variant="ios" label="iOS" defaultChecked />
            <ToggleSwitch variant="material" label="Material" defaultChecked />
            <ToggleSwitch variant="pill" label="Pill" defaultChecked />
            <ToggleSwitch variant="icon" label="Icon" defaultChecked />
            <ToggleSwitch
              variant="labeled"
              label="Labeled"
              defaultChecked
              onLabel="ON"
              offLabel="OFF"
            />
            <ToggleSwitch variant="outline" label="Outline" defaultChecked />
            <ToggleSwitch variant="slim" label="Slim" defaultChecked />
          </div>
        </Preview>
      </Section>

      {/* With Label & Description */}
      <Section title="With Label & Description">
        <p className="text-gray-600 dark:text-gray-400">
          Combine the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            label
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            description
          </code>{" "}
          props to provide context about what the toggle controls. The
          description renders as secondary text below the label.
        </p>
        <Preview
          code={`<ToggleSwitch
  defaultChecked
  label="Dark Mode"
  description="Switch between light and dark themes"
/>`}
        >
          <ToggleSwitch
            defaultChecked
            label="Dark Mode"
            description="Switch between light and dark themes"
          />
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          Three sizes are available to fit different UI densities. Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            "sm"
          </code>{" "}
          for compact toolbars,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            "md"
          </code>{" "}
          for standard forms, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            "lg"
          </code>{" "}
          for touch-friendly mobile interfaces.
        </p>
        <Preview
          code={`<div className="flex flex-wrap items-center gap-8">
  <ToggleSwitch size="sm" label="Small" defaultChecked />
  <ToggleSwitch size="md" label="Medium" defaultChecked />
  <ToggleSwitch size="lg" label="Large" defaultChecked />
</div>`}
        >
          <div className="flex flex-wrap items-center gap-8">
            <ToggleSwitch size="sm" label="Small" defaultChecked />
            <ToggleSwitch size="md" label="Medium" defaultChecked />
            <ToggleSwitch size="lg" label="Large" defaultChecked />
          </div>
        </Preview>
      </Section>

      {/* Custom Colors */}
      <Section title="Custom Colors">
        <p className="text-gray-600 dark:text-gray-400">
          Override the default on/off track colors with the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onColor
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            offColor
          </code>{" "}
          props. Pass any valid CSS color value.
        </p>
        <Preview
          code={`<div className="flex flex-wrap items-center gap-8">
  <ToggleSwitch
    defaultChecked
    label="Success"
    onColor="#22c55e"
    offColor="#ef4444"
  />
  <ToggleSwitch
    defaultChecked
    label="Brand"
    onColor="#8b5cf6"
    offColor="#94a3b8"
  />
</div>`}
        >
          <div className="flex flex-wrap items-center gap-8">
            <ToggleSwitch
              defaultChecked
              label="Success"
              onColor="#22c55e"
              offColor="#ef4444"
            />
            <ToggleSwitch
              defaultChecked
              label="Brand"
              onColor="#8b5cf6"
              offColor="#94a3b8"
            />
          </div>
        </Preview>
      </Section>

      {/* Disabled State */}
      <Section title="Disabled State">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            disabled
          </code>{" "}
          to prevent user interaction. The toggle appears dimmed and does not
          respond to clicks.
        </p>
        <Preview
          code={`<div className="flex flex-wrap items-center gap-8">
  <ToggleSwitch disabled label="Off & disabled" />
  <ToggleSwitch disabled defaultChecked label="On & disabled" />
</div>`}
        >
          <div className="flex flex-wrap items-center gap-8">
            <ToggleSwitch disabled label="Off & disabled" />
            <ToggleSwitch disabled defaultChecked label="On & disabled" />
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
