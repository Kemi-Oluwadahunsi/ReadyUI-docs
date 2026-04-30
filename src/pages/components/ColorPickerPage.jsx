import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { ColorPicker } from "readyui-react";

const props = [
  {
    name: "value",
    type: "string",
    default: "—",
    description:
      "The current color value in hex format for controlled usage. When provided, the component reflects this value and requires onChange to update it.",
  },
  {
    name: "onChange",
    type: "(color: string) => void",
    default: "—",
    description:
      "Callback function invoked whenever the selected color changes. Receives the new color string in hex format.",
  },
  {
    name: "defaultValue",
    type: "string",
    default: '"#3b82f6"',
    description:
      "The initial color value used when the component is uncontrolled. Defaults to a blue shade if not provided.",
  },
  {
    name: "presets",
    type: "string[]",
    default: "—",
    description:
      "An array of hex color strings displayed as quick-select preset swatches. When provided, these replace the default preset palette.",
  },
  {
    name: "showInput",
    type: "boolean",
    default: "true",
    description:
      "When true, displays a text input field below the color area that shows the current hex value and allows direct text entry.",
  },
  {
    name: "showPresets",
    type: "boolean",
    default: "true",
    description:
      "When true, renders the preset color swatches below the picker. Set to false for a more compact picker without preset options.",
  },
  {
    name: "showAlpha",
    type: "boolean",
    default: "false",
    description:
      "When true, adds an alpha/opacity slider to the picker and outputs colors in hex8 or rgba format.",
  },
  {
    name: "triggerClassName",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the color trigger button that opens the picker popover.",
  },
  {
    name: "popoverClassName",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the floating popover container that holds the picker.",
  },
  {
    name: "inline",
    type: "boolean",
    default: "false",
    description:
      "When true, the color picker is rendered inline without a trigger button or popover. The full picker is always visible.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the root container element for custom styling overrides.",
  },
];

export default function ColorPickerPage() {
  const [color, setColor] = useState("#3b82f6");
  const [inlineColor, setInlineColor] = useState("#10b981");
  const [alphaColor, setAlphaColor] = useState("#8b5cf6");

  return (
    <ComponentPage
      name="ColorPicker"
      description="An interactive color selection component with a visual picker area, hex input, preset swatches, and optional alpha channel. Supports both popover and inline modes."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { ColorPicker } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">value</code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onChange</code>{" "}
          for controlled color selection. Click the trigger swatch to open the picker popover.
        </p>
        <Preview
          code={`const [color, setColor] = useState("#3b82f6");

<ColorPicker value={color} onChange={setColor} />
<p className="mt-2 text-sm">Selected: {color}</p>`}
        >
          <div>
            <ColorPicker value={color} onChange={setColor} />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Selected: <strong>{color}</strong>
            </p>
          </div>
        </Preview>
      </Section>

      {/* Inline Mode */}
      <Section title="Inline Mode">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">inline</code>{" "}
          to render the full picker directly in the page without a popover trigger.
          Ideal for settings panels or dedicated color configuration sections.
        </p>
        <Preview
          code={`const [color, setColor] = useState("#10b981");

<ColorPicker value={color} onChange={setColor} inline />`}
        >
          <div>
            <ColorPicker value={inlineColor} onChange={setInlineColor} inline />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Selected: <strong>{inlineColor}</strong>
            </p>
          </div>
        </Preview>
      </Section>

      {/* With Alpha Channel */}
      <Section title="With Alpha Channel">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showAlpha</code>{" "}
          to add an opacity slider to the picker. The output value will include alpha information.
        </p>
        <Preview
          code={`<ColorPicker value={color} onChange={setColor} showAlpha />`}
        >
          <div>
            <ColorPicker value={alphaColor} onChange={setAlphaColor} showAlpha />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Selected: <strong>{alphaColor}</strong>
            </p>
          </div>
        </Preview>
      </Section>

      {/* Custom Presets */}
      <Section title="Custom Presets">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a custom array of hex colors to the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">presets</code>{" "}
          prop to replace the default palette with your brand colors or design tokens.
        </p>
        <Preview
          code={`<ColorPicker
  value={color}
  onChange={setColor}
  presets={["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"]}
/>`}
        >
          <ColorPicker
            value={color}
            onChange={setColor}
            presets={["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"]}
          />
        </Preview>
      </Section>

      {/* Without Input Field */}
      <Section title="Without Input Field">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showInput={"{false}"}</code>{" "}
          to hide the hex text input for a more compact picker.
        </p>
        <Preview
          code={`<ColorPicker value={color} onChange={setColor} showInput={false} />`}
        >
          <ColorPicker value={color} onChange={setColor} showInput={false} />
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
