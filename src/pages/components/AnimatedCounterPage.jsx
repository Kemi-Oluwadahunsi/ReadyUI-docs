import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { AnimatedCounter } from "readyui-react";

const props = [
  {
    name: "end",
    type: "number",
    default: "—",
    required: true,
    description:
      "The target number the counter animates towards. This is the final value displayed once the animation completes.",
  },
  {
    name: "start",
    type: "number",
    default: "0",
    description:
      "The number the counter begins counting from. Defaults to zero but can be set to any value for partial-range animations.",
  },
  {
    name: "duration",
    type: "number",
    default: "2000",
    description:
      "Total animation duration in milliseconds. Shorter durations feel snappier while longer durations build anticipation for large numbers.",
  },
  {
    name: "prefix",
    type: "string",
    default: '""',
    description:
      "Text prepended to the displayed number — commonly used for currency symbols like \"$\" or \"€\".",
  },
  {
    name: "suffix",
    type: "string",
    default: '""',
    description:
      "Text appended to the displayed number — useful for units such as \"%\", \"+\", \"k\", or \"/7\".",
  },
  {
    name: "decimals",
    type: "number",
    default: "0",
    description:
      "The number of decimal places to display. Set to 1 or 2 for currency or percentage values that require fractional precision.",
  },
  {
    name: "easing",
    type: '"easeOut" | "easeIn" | "linear"',
    default: '"easeOut"',
    description:
      "The easing function applied to the counting animation. \"easeOut\" decelerates towards the end for a natural feel, \"easeIn\" accelerates from the start, and \"linear\" maintains constant speed throughout.",
  },
  {
    name: "trigger",
    type: '"mount" | "visible"',
    default: '"mount"',
    description:
      "When the animation starts. \"mount\" begins immediately when the component renders. \"visible\" waits until the element scrolls into the viewport, which is ideal for stats sections further down a page.",
  },
  {
    name: "separator",
    type: "string",
    default: '","',
    description:
      "The character inserted as a thousands separator. Use \".\" for European-style formatting or an empty string to disable grouping entirely.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description:
      "A predefined font-size tier for the counter display. \"sm\" is compact for inline use, \"md\" is the default, and \"lg\"/\"xl\" are designed for hero sections and dashboards.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS classes applied to the counter element for custom font, colour, or spacing overrides.",
  },
];

export default function AnimatedCounterPage() {
  return (
    <ComponentPage
      name="AnimatedCounter"
      description="A smooth, configurable number counter that animates from a start value to an end value with easing, formatting, thousands separators, and optional scroll-triggered activation."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the AnimatedCounter component from readyui-react:
        </p>
        <CodeBlock code={`import { AnimatedCounter } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          At minimum, pass an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">end</code>{" "}
          value. The counter animates from 0 to the target number on mount with an ease-out curve.
        </p>
        <Preview
          code={`<AnimatedCounter end={1000} />`}
        >
          <AnimatedCounter end={1000} />
        </Preview>
      </Section>

      {/* With Prefix & Suffix */}
      <Section title="With Prefix & Suffix">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">prefix</code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">suffix</code>{" "}
          to add currency symbols, units, or indicators around the number.
        </p>
        <Preview
          code={`<div className="flex items-center gap-12">
  <AnimatedCounter end={2450} prefix="$" />
  <AnimatedCounter end={99} suffix="%" />
  <AnimatedCounter end={8500} suffix="+" />
</div>`}
        >
          <div className="flex items-center gap-12">
            <AnimatedCounter end={2450} prefix="$" />
            <AnimatedCounter end={99} suffix="%" />
            <AnimatedCounter end={8500} suffix="+" />
          </div>
        </Preview>
      </Section>

      {/* Decimals */}
      <Section title="Decimals">
        <p className="text-gray-600 dark:text-gray-400">
          Set the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">decimals</code>{" "}
          prop to display fractional values. This is especially useful for currency amounts or precise percentages.
        </p>
        <Preview
          code={`<div className="flex items-center gap-12">
  <AnimatedCounter end={49.99} prefix="$" decimals={2} />
  <AnimatedCounter end={99.9} suffix="%" decimals={1} />
</div>`}
        >
          <div className="flex items-center gap-12">
            <AnimatedCounter end={49.99} prefix="$" decimals={2} />
            <AnimatedCounter end={99.9} suffix="%" decimals={1} />
          </div>
        </Preview>
      </Section>

      {/* Visible Trigger */}
      <Section title="Visible Trigger">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">trigger</code>{" "}
          to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"visible"</code>{" "}
          so the counter only starts animating when it scrolls into the viewport. This is ideal for statistics sections that sit further down the page.
        </p>
        <Preview
          code={`<div className="flex items-center gap-12">
  <AnimatedCounter end={500} suffix="+" trigger="visible" />
  <AnimatedCounter end={98} suffix="%" trigger="visible" decimals={1} />
  <AnimatedCounter end={24} suffix="/7" trigger="visible" />
</div>`}
        >
          <div className="flex items-center gap-12">
            <AnimatedCounter end={500} suffix="+" trigger="visible" />
            <AnimatedCounter end={98} suffix="%" trigger="visible" decimals={1} />
            <AnimatedCounter end={24} suffix="/7" trigger="visible" />
          </div>
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          Choose from four predefined sizes via the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">size</code>{" "}
          prop:{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"sm"</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"md"</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"lg"</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"xl"</code>.
        </p>
        <Preview
          code={`<div className="flex items-baseline gap-8">
  <AnimatedCounter end={42} size="sm" />
  <AnimatedCounter end={42} size="md" />
  <AnimatedCounter end={42} size="lg" />
  <AnimatedCounter end={42} size="xl" />
</div>`}
        >
          <div className="flex items-baseline gap-8">
            <AnimatedCounter end={42} size="sm" />
            <AnimatedCounter end={42} size="md" />
            <AnimatedCounter end={42} size="lg" />
            <AnimatedCounter end={42} size="xl" />
          </div>
        </Preview>
      </Section>

      {/* Custom Duration & Easing */}
      <Section title="Custom Duration & Easing">
        <p className="text-gray-600 dark:text-gray-400">
          Fine-tune the animation feel with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">duration</code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">easing</code>.
          A longer duration with linear easing gives a steady mechanical count, while a short duration with easeOut feels punchy.
        </p>
        <Preview
          code={`<div className="flex items-center gap-12">
  <div className="text-center">
    <AnimatedCounter end={5000} duration={4000} easing="linear" />
    <p className="text-xs text-gray-500 mt-1">4s linear</p>
  </div>
  <div className="text-center">
    <AnimatedCounter end={5000} duration={1000} easing="easeOut" />
    <p className="text-xs text-gray-500 mt-1">1s easeOut</p>
  </div>
  <div className="text-center">
    <AnimatedCounter end={5000} duration={3000} easing="easeIn" />
    <p className="text-xs text-gray-500 mt-1">3s easeIn</p>
  </div>
</div>`}
        >
          <div className="flex items-center gap-12">
            <div className="text-center">
              <AnimatedCounter end={5000} duration={4000} easing="linear" />
              <p className="text-xs text-gray-500 mt-1">4s linear</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={5000} duration={1000} easing="easeOut" />
              <p className="text-xs text-gray-500 mt-1">1s easeOut</p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={5000} duration={3000} easing="easeIn" />
              <p className="text-xs text-gray-500 mt-1">3s easeIn</p>
            </div>
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
