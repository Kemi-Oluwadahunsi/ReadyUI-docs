import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { RangeSlider } from "readyui-react";

const props = [
  {
    name: "min",
    type: "number",
    default: "0",
    description:
      "The minimum value of the slider range. The slider thumb cannot be dragged below this value.",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description:
      "The maximum value of the slider range. The slider thumb cannot be dragged above this value.",
  },
  {
    name: "step",
    type: "number",
    default: "1",
    description:
      "The step increment between selectable values. For example, a step of 5 means the slider snaps to 0, 5, 10, 15, etc.",
  },
  {
    name: "value",
    type: "number | [number, number]",
    default: "0",
    description:
      "The current controlled value of the slider. Pass a single number for standard mode, or a two-element array for range mode with dual handles.",
  },
  {
    name: "onChange",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked whenever the slider value changes. Receives the new value (number) or a [min, max] tuple in range mode.",
  },
  {
    name: "range",
    type: "boolean",
    default: "false",
    description:
      "When set to true, the slider renders two handles allowing the user to select a range between a minimum and maximum value.",
  },
  {
    name: "showTooltip",
    type: "boolean",
    default: "true",
    description:
      "Displays a floating tooltip above the thumb showing the current value while the user drags or hovers over the handle.",
  },
  {
    name: "showLabels",
    type: "boolean",
    default: "false",
    description:
      "When enabled, displays the minimum and maximum values as labels at either end of the slider track.",
  },
  {
    name: "showValue",
    type: "boolean",
    default: "false",
    description:
      "Shows the current numeric value next to the slider, providing a persistent readout of the selected value.",
  },
  {
    name: "minGap",
    type: "number",
    default: "—",
    description:
      "In range mode, enforces a minimum gap between the two handles. Prevents the user from selecting a range narrower than this value.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description:
      "Disables the slider, preventing any user interaction. The slider appears visually muted to indicate its inactive state.",
  },
  {
    name: "color",
    type: '"blue" | "red" | "green" | "purple" | "orange"',
    default: '"blue"',
    description:
      "Sets the accent color for the filled portion of the track and the slider thumb. Choose a color that aligns with your application's design system.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      'Controls the overall size of the slider track and thumb. "sm" is compact for dense layouts, "md" is standard, and "lg" is larger for touch-friendly interfaces.',
  },
  {
    name: "formatValue",
    type: "Function",
    default: "(v) => v",
    description:
      "A formatting function applied to the displayed value. Useful for adding units like currency symbols, percentages, or custom suffixes.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names to apply to the slider container for custom styling overrides.",
  },
];

export default function RangeSliderPage() {
  const [basicValue, setBasicValue] = useState(40);
  const [rangeValue, setRangeValue] = useState([20, 75]);
  const [labelValue, setLabelValue] = useState(60);
  const [displayValue, setDisplayValue] = useState(50);
  const [currencyValue, setCurrencyValue] = useState(250);
  const [percentValue, setPercentValue] = useState(65);

  return (
    <ComponentPage
      name="RangeSlider"
      description="A flexible slider component supporting single and dual-handle range selection with tooltips, labels, custom formatting, and multiple sizes and colors."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { RangeSlider } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a controlled{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            value
          </code>{" "}
          and an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onChange
          </code>{" "}
          handler to create a basic single-thumb slider.
        </p>
        <Preview
          code={`const [value, setValue] = useState(40);

<RangeSlider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
/>`}
        >
          <RangeSlider
            value={basicValue}
            onChange={setBasicValue}
            min={0}
            max={100}
          />
        </Preview>
      </Section>

      {/* Range Mode */}
      <Section title="Range Mode">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            range
          </code>{" "}
          mode to render two handles. Pass a tuple as the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            value
          </code>{" "}
          to control both the minimum and maximum selection.
        </p>
        <Preview
          code={`const [range, setRange] = useState([20, 75]);

<RangeSlider
  value={range}
  onChange={setRange}
  range
  min={0}
  max={100}
  color="purple"
/>`}
        >
          <RangeSlider
            value={rangeValue}
            onChange={setRangeValue}
            range
            min={0}
            max={100}
            color="purple"
          />
        </Preview>
      </Section>

      {/* With Labels */}
      <Section title="With Labels">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showLabels
          </code>{" "}
          to display the min and max values at either end of the track, helping
          users understand the full range at a glance.
        </p>
        <Preview
          code={`const [value, setValue] = useState(60);

<RangeSlider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  showLabels
  color="green"
/>`}
        >
          <RangeSlider
            value={labelValue}
            onChange={setLabelValue}
            min={0}
            max={100}
            showLabels
            color="green"
          />
        </Preview>
      </Section>

      {/* Show Value Display */}
      <Section title="Show Value Display">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showValue
          </code>{" "}
          to persistently display the current value alongside the slider,
          providing a clear numeric readout without requiring hover.
        </p>
        <Preview
          code={`const [value, setValue] = useState(50);

<RangeSlider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  showValue
/>`}
        >
          <RangeSlider
            value={displayValue}
            onChange={setDisplayValue}
            min={0}
            max={100}
            showValue
          />
        </Preview>
      </Section>

      {/* Custom Format */}
      <Section title="Custom Format">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            formatValue
          </code>{" "}
          prop to transform displayed values — for example, adding a currency
          symbol or percentage sign.
        </p>
        <Preview
          code={`const [price, setPrice] = useState(250);
const [percent, setPercent] = useState(65);

<RangeSlider
  value={price}
  onChange={setPrice}
  min={0}
  max={1000}
  step={10}
  showValue
  formatValue={(v) => \`$\${v}\`}
  color="green"
/>

<RangeSlider
  value={percent}
  onChange={setPercent}
  min={0}
  max={100}
  showValue
  formatValue={(v) => \`\${v}%\`}
  color="orange"
/>`}
        >
          <div className="space-y-6">
            <RangeSlider
              value={currencyValue}
              onChange={setCurrencyValue}
              min={0}
              max={1000}
              step={10}
              showValue
              formatValue={(v) => `$${v}`}
              color="green"
            />
            <RangeSlider
              value={percentValue}
              onChange={setPercentValue}
              min={0}
              max={100}
              showValue
              formatValue={(v) => `${v}%`}
              color="orange"
            />
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
          prop controls the track height and thumb diameter. Choose a size that
          fits your layout density.
        </p>
        <Preview
          code={`<div className="space-y-6">
  <RangeSlider value={30} min={0} max={100} size="sm" />
  <RangeSlider value={50} min={0} max={100} size="md" />
  <RangeSlider value={70} min={0} max={100} size="lg" />
</div>`}
        >
          <div className="space-y-6">
            <RangeSlider value={30} min={0} max={100} size="sm" />
            <RangeSlider value={50} min={0} max={100} size="md" />
            <RangeSlider value={70} min={0} max={100} size="lg" />
          </div>
        </Preview>
      </Section>

      {/* Colors */}
      <Section title="Colors">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            color
          </code>{" "}
          prop to match the slider accent to your design system.
        </p>
        <Preview
          code={`<div className="space-y-6">
  <RangeSlider value={40} min={0} max={100} color="blue" />
  <RangeSlider value={55} min={0} max={100} color="red" />
  <RangeSlider value={65} min={0} max={100} color="green" />
  <RangeSlider value={75} min={0} max={100} color="purple" />
</div>`}
        >
          <div className="space-y-6">
            <RangeSlider value={40} min={0} max={100} color="blue" />
            <RangeSlider value={55} min={0} max={100} color="red" />
            <RangeSlider value={65} min={0} max={100} color="green" />
            <RangeSlider value={75} min={0} max={100} color="purple" />
          </div>
        </Preview>
      </Section>

      {/* Disabled */}
      <Section title="Disabled">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            disabled
          </code>{" "}
          to prevent interaction. The slider appears visually muted.
        </p>
        <Preview
          code={`<RangeSlider value={50} min={0} max={100} disabled />`}
        >
          <RangeSlider value={50} min={0} max={100} disabled />
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
