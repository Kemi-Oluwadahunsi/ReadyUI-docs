import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Badge } from "readyui-react";

const props = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "The element the badge is attached to, such as a button or icon. The badge is positioned relative to this child element.",
  },
  {
    name: "content",
    type: "number | string",
    default: "—",
    description:
      'The content displayed inside the badge, typically a count. Omit this prop to render a small dot indicator instead of a numbered badge.',
  },
  {
    name: "variant",
    type: '"default" | "dot" | "outline"',
    default: '"default"',
    description:
      'Controls the visual style of the badge. "default" renders a filled badge, "dot" renders a small indicator dot, and "outline" renders a badge with a border and transparent background.',
  },
  {
    name: "color",
    type: '"red" | "blue" | "green" | "yellow" | "gray" | "purple"',
    default: '"red"',
    description:
      "Sets the background color of the badge. Use semantic colors to convey meaning — red for errors or alerts, blue for informational, green for success, etc.",
  },
  {
    name: "max",
    type: "number",
    default: "99",
    description:
      'The maximum number to display. When the content exceeds this value, the badge shows the max followed by a "+" (e.g., "99+").',
  },
  {
    name: "pulse",
    type: "boolean",
    default: "false",
    description:
      "When true, applies a pulsing animation to the badge to draw attention, useful for new notifications or alerts that need immediate visibility.",
  },
  {
    name: "position",
    type: '"top-right" | "top-left" | "bottom-right" | "bottom-left"',
    default: '"top-right"',
    description:
      "Determines which corner of the child element the badge is anchored to. Useful for adapting badge placement to different UI layouts.",
  },
  {
    name: "show",
    type: "boolean",
    default: "true",
    description:
      "Controls the visibility of the badge. Set to false to hide the badge without unmounting it, enabling smooth show/hide transitions.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      'Sets the size of the badge. "sm" is compact for dense UIs, "md" is the standard size, and "lg" is larger for high-emphasis indicators.',
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names to apply to the badge element for custom styling overrides.",
  },
  {
    name: "onClick",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked when the badge itself is clicked. Useful for dismissing notifications or navigating to a detail view.",
  },
];

export default function BadgePage() {
  const [showBadge, setShowBadge] = useState(true);

  return (
    <ComponentPage
      name="Badge"
      description="A small status indicator that attaches to UI elements like buttons or icons. Use badges to display notification counts, draw attention with dots, or highlight status changes."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { Badge } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Wrap any element with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            Badge
          </code>{" "}
          and pass a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            content
          </code>{" "}
          prop to display a count. The badge automatically positions itself in the
          top-right corner of the child element.
        </p>
        <Preview
          code={`<Badge content={5}>
  <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
    Notifications
  </button>
</Badge>`}
        >
          <Badge content={5}>
            <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
              Notifications
            </button>
          </Badge>
        </Preview>
      </Section>

      {/* Dot Variant */}
      <Section title="Dot Variant">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            variant="dot"
          </code>{" "}
          or simply omit the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            content
          </code>{" "}
          prop to render a small dot. This is useful for indicating new or unread
          status without showing a specific count.
        </p>
        <Preview
          code={`<Badge variant="dot">
  <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
    Messages
  </button>
</Badge>`}
        >
          <Badge variant="dot">
            <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
              Messages
            </button>
          </Badge>
        </Preview>
      </Section>

      {/* Colors */}
      <Section title="Colors">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            color
          </code>{" "}
          prop accepts semantic color names. Choose colors that convey the right
          meaning — red for alerts, green for success, blue for informational
          updates.
        </p>
        <Preview
          code={`<div className="flex flex-wrap gap-6">
  <Badge content={3} color="red">
    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700" />
  </Badge>
  <Badge content={7} color="blue">
    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700" />
  </Badge>
  <Badge content={2} color="green">
    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700" />
  </Badge>
  <Badge content={9} color="purple">
    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700" />
  </Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-6">
            <Badge content={3} color="red">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700" />
            </Badge>
            <Badge content={7} color="blue">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700" />
            </Badge>
            <Badge content={2} color="green">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700" />
            </Badge>
            <Badge content={9} color="purple">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700" />
            </Badge>
          </div>
        </Preview>
      </Section>

      {/* Max Count */}
      <Section title="Max Count">
        <p className="text-gray-600 dark:text-gray-400">
          When the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            content
          </code>{" "}
          exceeds the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            max
          </code>{" "}
          value (default 99), the badge displays the max followed by a "+"
          character. This prevents the badge from becoming too wide with large
          numbers.
        </p>
        <Preview
          code={`<div className="flex flex-wrap gap-6">
  <Badge content={120}>
    <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
      Default max (99+)
    </button>
  </Badge>
  <Badge content={120} max={999}>
    <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
      Custom max (999)
    </button>
  </Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-6">
            <Badge content={120}>
              <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
                Default max (99+)
              </button>
            </Badge>
            <Badge content={120} max={999}>
              <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
                Custom max (999)
              </button>
            </Badge>
          </div>
        </Preview>
      </Section>

      {/* Pulse Animation */}
      <Section title="Pulse Animation">
        <p className="text-gray-600 dark:text-gray-400">
          Enable the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            pulse
          </code>{" "}
          prop to add a subtle pulsing animation that draws the user's eye
          toward the badge. Ideal for urgent notifications or real-time alerts.
        </p>
        <Preview
          code={`<Badge content={3} pulse>
  <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
    Live Alerts
  </button>
</Badge>`}
        >
          <Badge content={3} pulse>
            <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
              Live Alerts
            </button>
          </Badge>
        </Preview>
      </Section>

      {/* Positions */}
      <Section title="Positions">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            position
          </code>{" "}
          prop to place the badge at any corner of the child element. All four
          positions are shown below.
        </p>
        <Preview
          code={`<div className="flex flex-wrap gap-8">
  <Badge content={1} position="top-right">
    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">TR</div>
  </Badge>
  <Badge content={2} position="top-left">
    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">TL</div>
  </Badge>
  <Badge content={3} position="bottom-right">
    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">BR</div>
  </Badge>
  <Badge content={4} position="bottom-left">
    <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">BL</div>
  </Badge>
</div>`}
        >
          <div className="flex flex-wrap gap-8">
            <Badge content={1} position="top-right">
              <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                TR
              </div>
            </Badge>
            <Badge content={2} position="top-left">
              <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                TL
              </div>
            </Badge>
            <Badge content={3} position="bottom-right">
              <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                BR
              </div>
            </Badge>
            <Badge content={4} position="bottom-left">
              <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                BL
              </div>
            </Badge>
          </div>
        </Preview>
      </Section>

      {/* Show / Hide */}
      <Section title="Show / Hide">
        <p className="text-gray-600 dark:text-gray-400">
          Toggle the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            show
          </code>{" "}
          prop to dynamically hide or reveal the badge. The example below uses
          React state to control visibility.
        </p>
        <Preview
          code={`const [showBadge, setShowBadge] = useState(true);

<div className="flex items-center gap-4">
  <Badge content={8} show={showBadge}>
    <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
      Inbox
    </button>
  </Badge>
  <button
    onClick={() => setShowBadge(!showBadge)}
    className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  >
    {showBadge ? "Hide" : "Show"} Badge
  </button>
</div>`}
        >
          <div className="flex items-center gap-4">
            <Badge content={8} show={showBadge}>
              <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg">
                Inbox
              </button>
            </Badge>
            <button
              onClick={() => setShowBadge(!showBadge)}
              className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {showBadge ? "Hide" : "Show"} Badge
            </button>
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
          prop scales the badge to fit different UI densities. Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            "sm"
          </code>{" "}
          for toolbars,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            "md"
          </code>{" "}
          for standard contexts, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            "lg"
          </code>{" "}
          for prominent placement.
        </p>
        <Preview
          code={`<div className="flex flex-wrap items-end gap-8">
  <Badge content={3} size="sm">
    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">SM</div>
  </Badge>
  <Badge content={3} size="md">
    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">MD</div>
  </Badge>
  <Badge content={3} size="lg">
    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">LG</div>
  </Badge>
</div>`}
        >
          <div className="flex flex-wrap items-end gap-8">
            <Badge content={3} size="sm">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                SM
              </div>
            </Badge>
            <Badge content={3} size="md">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                MD
              </div>
            </Badge>
            <Badge content={3} size="lg">
              <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500 dark:text-gray-400">
                LG
              </div>
            </Badge>
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
