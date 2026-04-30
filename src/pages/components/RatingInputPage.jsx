import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { RatingInput } from "readyui-react";

const props = [
  {
    name: "value",
    type: "number",
    default: "—",
    description:
      "The current controlled rating value. Use this with onChange to create a fully controlled rating input.",
  },
  {
    name: "onChange",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked when the user selects a new rating. Receives the new numeric rating value as its argument.",
  },
  {
    name: "max",
    type: "number",
    default: "5",
    description:
      "The maximum number of stars (or icons) to display. Increase this for finer-grained ratings such as a 10-star scale.",
  },
  {
    name: "allowHalf",
    type: "boolean",
    default: "false",
    description:
      "When enabled, allows the user to select half-star increments (e.g., 3.5). Useful for more precise rating inputs.",
  },
  {
    name: "readOnly",
    type: "boolean",
    default: "false",
    description:
      "When true, the rating is displayed in a non-interactive state. Users can see the rating but cannot change it. Ideal for displaying average scores.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      'Controls the size of the star icons. "sm" is compact for inline use, "md" is the standard size, and "lg" is larger for prominent displays.',
  },
  {
    name: "color",
    type: "string",
    default: '"#f59e0b"',
    description:
      "The fill color for active (selected) stars. Accepts any valid CSS color string such as hex codes, named colors, or HSL values.",
  },
  {
    name: "emptyColor",
    type: "string",
    default: '"#d1d5db"',
    description:
      "The fill color for inactive (unselected) stars. Adjust this to ensure proper contrast against your background.",
  },
  {
    name: "showValue",
    type: "boolean",
    default: "false",
    description:
      "Displays the numeric value of the current rating next to the stars, giving users a precise readout of their selection.",
  },
  {
    name: "labels",
    type: "string[]",
    default: "—",
    description:
      'An array of label strings corresponding to each rating level. For example, ["Poor", "Fair", "Good", "Very Good", "Excellent"] for a 5-star rating.',
  },
  {
    name: "renderIcon",
    type: "Function",
    default: "—",
    description:
      "A custom render function for the rating icons. Receives the index and active state, allowing you to replace default stars with hearts, thumbs, or any custom icon.",
  },
  {
    name: "allowClear",
    type: "boolean",
    default: "true",
    description:
      "When true, clicking the currently selected rating again resets it to zero. Set to false to prevent users from clearing their selection.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names to apply to the rating container for custom styling overrides.",
  },
  {
    name: "defaultValue",
    type: "number",
    default: "0",
    description:
      "The initial rating value for uncontrolled usage. This value is used on first render when no value prop is provided.",
  },
];

export default function RatingInputPage() {
  const [rating, setRating] = useState(3);
  const [halfRating, setHalfRating] = useState(3.5);
  const [valueRating, setValueRating] = useState(4);
  const [labelRating, setLabelRating] = useState(3);

  return (
    <ComponentPage
      name="RatingInput"
      description="An interactive star-rating component with support for half-star precision, read-only display, custom colors, labels, and multiple sizes."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { RatingInput } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Provide a controlled{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            value
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onChange
          </code>{" "}
          handler to create an interactive rating input. Click a star to set the
          rating.
        </p>
        <Preview
          code={`const [rating, setRating] = useState(3);

<RatingInput value={rating} onChange={setRating} />`}
        >
          <RatingInput value={rating} onChange={setRating} />
        </Preview>
      </Section>

      {/* Half-Star Rating */}
      <Section title="Half-Star Rating">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            allowHalf
          </code>{" "}
          to let users select half-star increments for more granular feedback,
          such as 3.5 or 4.5 stars.
        </p>
        <Preview
          code={`const [rating, setRating] = useState(3.5);

<RatingInput
  value={rating}
  onChange={setRating}
  allowHalf
/>`}
        >
          <RatingInput
            value={halfRating}
            onChange={setHalfRating}
            allowHalf
          />
        </Preview>
      </Section>

      {/* Read-Only Display */}
      <Section title="Read-Only Display">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            readOnly
          </code>{" "}
          to show a rating without allowing interaction. Perfect for displaying
          average ratings on product cards or review summaries.
        </p>
        <Preview
          code={`<div className="space-y-3">
  <RatingInput value={4.5} allowHalf readOnly />
  <RatingInput value={3} readOnly />
  <RatingInput value={2} readOnly />
</div>`}
        >
          <div className="space-y-3">
            <RatingInput value={4.5} allowHalf readOnly />
            <RatingInput value={3} readOnly />
            <RatingInput value={2} readOnly />
          </div>
        </Preview>
      </Section>

      {/* Show Value */}
      <Section title="Show Value">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showValue
          </code>{" "}
          to display the numeric rating alongside the stars, giving users a
          precise readout of their selection.
        </p>
        <Preview
          code={`const [rating, setRating] = useState(4);

<RatingInput
  value={rating}
  onChange={setRating}
  showValue
/>`}
        >
          <RatingInput
            value={valueRating}
            onChange={setValueRating}
            showValue
          />
        </Preview>
      </Section>

      {/* With Labels */}
      <Section title="With Labels">
        <p className="text-gray-600 dark:text-gray-400">
          Provide a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            labels
          </code>{" "}
          array to display contextual text for each rating level. The label
          updates dynamically as the user hovers or selects a value.
        </p>
        <Preview
          code={`const [rating, setRating] = useState(3);

<RatingInput
  value={rating}
  onChange={setRating}
  labels={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
/>`}
        >
          <RatingInput
            value={labelRating}
            onChange={setLabelRating}
            labels={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
          />
        </Preview>
      </Section>

      {/* Custom Colors */}
      <Section title="Custom Colors">
        <p className="text-gray-600 dark:text-gray-400">
          Customize the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            color
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            emptyColor
          </code>{" "}
          props to match your brand or design system.
        </p>
        <Preview
          code={`<div className="space-y-3">
  <RatingInput value={4} readOnly color="#ef4444" emptyColor="#fecaca" />
  <RatingInput value={4} readOnly color="#3b82f6" emptyColor="#bfdbfe" />
  <RatingInput value={4} readOnly color="#10b981" emptyColor="#a7f3d0" />
</div>`}
        >
          <div className="space-y-3">
            <RatingInput value={4} readOnly color="#ef4444" emptyColor="#fecaca" />
            <RatingInput value={4} readOnly color="#3b82f6" emptyColor="#bfdbfe" />
            <RatingInput value={4} readOnly color="#10b981" emptyColor="#a7f3d0" />
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
          prop adjusts the star icon dimensions. Use smaller sizes for compact
          inline displays and larger sizes for prominent rating inputs.
        </p>
        <Preview
          code={`<div className="space-y-3">
  <RatingInput value={4} readOnly size="sm" />
  <RatingInput value={4} readOnly size="md" />
  <RatingInput value={4} readOnly size="lg" />
</div>`}
        >
          <div className="space-y-3">
            <RatingInput value={4} readOnly size="sm" />
            <RatingInput value={4} readOnly size="md" />
            <RatingInput value={4} readOnly size="lg" />
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
