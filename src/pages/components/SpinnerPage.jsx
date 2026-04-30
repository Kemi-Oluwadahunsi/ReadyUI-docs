import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Spinner } from "readyui-react";

const allVariants = [
  "ring", "dots", "bars", "orbit", "pulse", "dual-ring", "ripple",
  "square-spin", "gradient", "chase", "bounce", "wave", "fold",
];

const props = [
  { name: "variant", type: '"ring" | "dots" | "bars" | "orbit" | "pulse" | "dual-ring" | "ripple" | "square-spin" | "gradient" | "chase" | "bounce" | "wave" | "fold"', default: '"ring"', description: "Selects which spinner animation style to render. There are 13 built-in variants ranging from simple rings and dots to more elaborate orbital, ripple, and wave effects." },
  { name: "size", type: "number | string", default: "32", description: 'Controls the width and height of the spinner in pixels. Accepts a number (treated as px) or a CSS string like "2rem". Increase for hero-level loading states and decrease for inline button spinners.' },
  { name: "color", type: "string", default: '"currentColor"', description: "Sets the primary color of the spinner. Accepts any valid CSS color value — hex codes, rgb(), hsl(), Tailwind color vars, or named colors. Defaults to the current text color." },
  { name: "speed", type: "number", default: "1", description: "Animation duration multiplier in seconds. Lower values spin faster (e.g. 0.5 = twice as fast) and higher values spin slower (e.g. 2 = half speed). Fine-tune to match your UI energy." },
  { name: "label", type: "string", default: '"Loading"', description: 'Accessible label read by screen readers via aria-label. Always provide a meaningful label like "Saving changes" or "Loading results" for better accessibility.' },
  { name: "overlay", type: "boolean", default: "false", description: "When true, renders the spinner centered inside a full-screen semi-transparent overlay that blocks interaction with the page beneath. Perfect for page-level loading states." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the spinner's root element for custom positioning or styling." },
];

export default function SpinnerPage() {
  return (
    <ComponentPage
      name="Spinner"
      description="A versatile loading indicator with 13 animated variants, customizable size, color, and speed. Includes an optional full-page overlay mode for blocking loading states."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the Spinner component from readyui-react:
        </p>
        <CodeBlock code={`import { Spinner } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Render a spinner with no props for the default ring animation at 32px using the current text color.
        </p>
        <Preview
          code={`<Spinner />`}
        >
          <Spinner />
        </Preview>
      </Section>

      {/* All Variants */}
      <Section title="All Variants">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">variant</code> prop selects from 13 unique animation styles. Below is every variant rendered in a grid for easy comparison.
        </p>
        <Preview
          code={`const variants = [
  "ring", "dots", "bars", "orbit", "pulse", "dual-ring", "ripple",
  "square-spin", "gradient", "chase", "bounce", "wave", "fold",
];

<div className="grid grid-cols-4 gap-6">
  {variants.map((v) => (
    <div key={v} className="flex flex-col items-center gap-2">
      <Spinner variant={v} size={36} color="#3b82f6" />
      <span className="text-xs">{v}</span>
    </div>
  ))}
</div>`}
        >
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6">
            {allVariants.map((v) => (
              <div key={v} className="flex flex-col items-center gap-2">
                <Spinner variant={v} size={36} color="#3b82f6" />
                <span className="text-xs text-gray-500 dark:text-gray-400">{v}</span>
              </div>
            ))}
          </div>
        </Preview>
      </Section>

      {/* Custom Size & Color */}
      <Section title="Custom Size & Color">
        <p className="text-gray-600 dark:text-gray-400">
          Use the <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">size</code> and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">color</code> props to match your design system. Size accepts a number (px) or CSS string.
        </p>
        <Preview
          code={`<Spinner variant="ring" size={20} color="#10b981" />
<Spinner variant="dots" size={48} color="#8b5cf6" />
<Spinner variant="orbit" size={64} color="#f59e0b" />`}
        >
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="ring" size={20} color="#10b981" />
              <span className="text-xs text-gray-500 dark:text-gray-400">20px green</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="dots" size={48} color="#8b5cf6" />
              <span className="text-xs text-gray-500 dark:text-gray-400">48px purple</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="orbit" size={64} color="#f59e0b" />
              <span className="text-xs text-gray-500 dark:text-gray-400">64px amber</span>
            </div>
          </div>
        </Preview>
      </Section>

      {/* Speed Control */}
      <Section title="Speed Control">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">speed</code> prop is a duration multiplier in seconds. Lower values animate faster and higher values animate slower.
        </p>
        <Preview
          code={`<Spinner variant="ring" speed={0.5} />  {/* Fast */}
<Spinner variant="ring" speed={1} />    {/* Normal */}
<Spinner variant="ring" speed={2.5} />  {/* Slow */}`}
        >
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="ring" size={36} speed={0.5} color="#3b82f6" />
              <span className="text-xs text-gray-500 dark:text-gray-400">0.5s (fast)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="ring" size={36} speed={1} color="#3b82f6" />
              <span className="text-xs text-gray-500 dark:text-gray-400">1s (normal)</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner variant="ring" size={36} speed={2.5} color="#3b82f6" />
              <span className="text-xs text-gray-500 dark:text-gray-400">2.5s (slow)</span>
            </div>
          </div>
        </Preview>
      </Section>

      {/* Overlay Mode */}
      <Section title="Overlay Mode">
        <p className="text-gray-600 dark:text-gray-400">
          Set <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">overlay</code> to true to render the spinner centered inside a full-screen semi-transparent backdrop. This blocks all interaction with the page beneath — ideal for page-level loading states. The example below is shown in code only to avoid blocking this documentation page.
        </p>
        <Preview
          code={`{isLoading && (
  <Spinner
    variant="dual-ring"
    size={48}
    color="#3b82f6"
    overlay
    label="Loading page…"
  />
)}`}
        >
          <div className="relative bg-gray-50 dark:bg-zinc-800 rounded-lg p-8 h-40 flex items-center justify-center overflow-hidden">
            <p className="text-gray-400 dark:text-gray-500 text-sm">Content behind overlay</p>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
              <Spinner variant="dual-ring" size={48} color="#3b82f6" />
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
