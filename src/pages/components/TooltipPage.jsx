import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Tooltip } from "readyui-react";

const props = [
  { name: "children", type: "ReactNode", default: "—", required: true, description: "The trigger element that the tooltip attaches to. This is rendered inline and the tooltip appears relative to it on hover, click, or focus depending on the trigger prop." },
  { name: "content", type: "ReactNode", default: "—", required: true, description: "The content displayed inside the tooltip popup. Accepts plain text for simple labels or JSX for rich content like formatted text, icons, or small layouts." },
  { name: "position", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: "Which side of the trigger element the tooltip appears on. The tooltip automatically includes an arrow pointing toward the trigger." },
  { name: "delay", type: "number", default: "200", description: "Delay in milliseconds before the tooltip appears after the trigger event. Increase for tooltips that should only show on intentional hovers, decrease for instant feedback." },
  { name: "hideDelay", type: "number", default: "100", description: "Delay in milliseconds before the tooltip disappears after the trigger event ends. A small delay prevents flickering when moving the cursor between the trigger and tooltip." },
  { name: "arrow", type: "boolean", default: "true", description: "Whether to render a small triangular arrow connecting the tooltip to its trigger element. Set to false for a cleaner floating style." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the tooltip popup container for custom styling such as background color, border, or shadow overrides." },
  { name: "trigger", type: '"hover" | "click" | "focus"', default: '"hover"', description: 'The interaction that toggles the tooltip. "hover" shows on mouse enter, "click" toggles on click, and "focus" shows when the trigger element receives keyboard focus.' },
  { name: "disabled", type: "boolean", default: "false", description: "When true, the tooltip is completely suppressed and will not appear regardless of user interaction." },
  { name: "offset", type: "number", default: "8", description: "Distance in pixels between the tooltip and its trigger element. Increase for more breathing room or decrease for a tighter, more connected appearance." },
  { name: "maxWidth", type: "number", default: "240", description: "Maximum width of the tooltip in pixels. Content that exceeds this width wraps to multiple lines. Increase for tooltips with longer text or rich content." },
];

export default function TooltipPage() {
  return (
    <ComponentPage
      name="Tooltip"
      description="A lightweight, accessible tooltip that appears on hover, click, or focus. Supports all four positions, custom content, arrow indicators, and configurable delays."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the Tooltip component from readyui-react:
        </p>
        <CodeBlock code={`import { Tooltip } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Wrap any element with <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">Tooltip</code> and pass the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">content</code> prop. By default the tooltip appears above the trigger on hover.
        </p>
        <Preview
          code={`<Tooltip content="Hello! I'm a tooltip.">
  <button>Hover me</button>
</Tooltip>`}
        >
          <Tooltip content="Hello! I'm a tooltip.">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Hover me
            </button>
          </Tooltip>
        </Preview>
      </Section>

      {/* All 4 Positions */}
      <Section title="Positions">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">position</code> prop places the tooltip on any side of the trigger:{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">top</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">bottom</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">left</code>, or{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">right</code>.
        </p>
        <Preview
          code={`<Tooltip content="Top" position="top">
  <button>Top</button>
</Tooltip>
<Tooltip content="Bottom" position="bottom">
  <button>Bottom</button>
</Tooltip>
<Tooltip content="Left" position="left">
  <button>Left</button>
</Tooltip>
<Tooltip content="Right" position="right">
  <button>Right</button>
</Tooltip>`}
        >
          <div className="flex flex-wrap items-center gap-4 py-8 justify-center">
            <Tooltip content="I appear on top" position="top">
              <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm font-medium">Top</button>
            </Tooltip>
            <Tooltip content="I appear on bottom" position="bottom">
              <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm font-medium">Bottom</button>
            </Tooltip>
            <Tooltip content="I appear on the left" position="left">
              <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm font-medium">Left</button>
            </Tooltip>
            <Tooltip content="I appear on the right" position="right">
              <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm font-medium">Right</button>
            </Tooltip>
          </div>
        </Preview>
      </Section>

      {/* Click Trigger */}
      <Section title="Click Trigger">
        <p className="text-gray-600 dark:text-gray-400">
          Set <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">trigger</code> to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">click</code> to toggle the tooltip on click instead of hover. Click again or click elsewhere to dismiss.
        </p>
        <Preview
          code={`<Tooltip content="Clicked!" trigger="click">
  <button>Click me</button>
</Tooltip>`}
        >
          <Tooltip content="You clicked! Click again to dismiss." trigger="click">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Click me
            </button>
          </Tooltip>
        </Preview>
      </Section>

      {/* Rich Content */}
      <Section title="Rich Content">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">content</code> prop accepts JSX, so you can render formatted text, icons, or small layouts inside the tooltip.
        </p>
        <Preview
          code={`<Tooltip
  content={
    <div>
      <strong>Pro Tip</strong>
      <p className="text-xs mt-1 opacity-80">
        Press Ctrl+K for the command palette.
      </p>
    </div>
  }
  maxWidth={280}
>
  <button>Hover for tip</button>
</Tooltip>`}
        >
          <Tooltip
            content={
              <div>
                <strong className="text-sm">Pro Tip</strong>
                <p className="text-xs mt-1 opacity-80">
                  Press Ctrl+K to open the command palette for quick actions.
                </p>
              </div>
            }
            maxWidth={280}
          >
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Hover for tip
            </button>
          </Tooltip>
        </Preview>
      </Section>

      {/* No Arrow */}
      <Section title="No Arrow">
        <p className="text-gray-600 dark:text-gray-400">
          Set <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">arrow</code> to false to remove the triangular pointer for a cleaner floating label style.
        </p>
        <Preview
          code={`<Tooltip content="No arrow" arrow={false}>
  <button>Hover me</button>
</Tooltip>`}
        >
          <Tooltip content="Clean floating style — no arrow" arrow={false}>
            <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm font-medium">
              Hover me (no arrow)
            </button>
          </Tooltip>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
