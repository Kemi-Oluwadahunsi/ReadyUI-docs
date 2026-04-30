import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Popover } from "readyui-react";

const props = [
  {
    name: "trigger",
    type: "ReactNode",
    default: "—",
    description:
      "The element that activates the popover. This is typically a button or icon that the user clicks or hovers over to reveal the popover content.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "The content rendered inside the floating popover panel. Can be any valid React element including text, forms, lists, or other components.",
  },
  {
    name: "triggerMode",
    type: '"click" | "hover"',
    default: '"click"',
    description:
      "Determines how the popover is activated. \"click\" requires a click to toggle the popover, while \"hover\" opens it when the mouse enters the trigger and closes when it leaves.",
  },
  {
    name: "hoverDelay",
    type: "number",
    default: "150",
    description:
      "The delay in milliseconds before the popover appears when using hover trigger mode. Helps prevent accidental triggers during casual mouse movement.",
  },
  {
    name: "hoverCloseDelay",
    type: "number",
    default: "300",
    description:
      "The delay in milliseconds before the popover closes after the mouse leaves the trigger or content area. Gives users time to move their cursor into the popover.",
  },
  {
    name: "placement",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"bottom"',
    description:
      "The preferred position of the popover relative to the trigger element. The popover may automatically adjust if there is not enough viewport space in the chosen direction.",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    default: '"center"',
    description:
      "Controls the alignment of the popover along the cross-axis of its placement. \"start\" aligns to the beginning, \"center\" centers the popover, and \"end\" aligns to the far edge.",
  },
  {
    name: "showArrow",
    type: "boolean",
    default: "true",
    description:
      "When true, renders a small triangular arrow on the popover pointing toward the trigger element. Set to false for a cleaner floating panel look.",
  },
  {
    name: "closeOnClickOutside",
    type: "boolean",
    default: "true",
    description:
      "When true, the popover automatically closes when the user clicks anywhere outside of the popover or its trigger element.",
  },
  {
    name: "closeOnEsc",
    type: "boolean",
    default: "true",
    description:
      "When true, pressing the Escape key will close the popover. Provides a standard keyboard dismissal pattern for accessibility.",
  },
  {
    name: "offset",
    type: "number",
    default: "8",
    description:
      "The distance in pixels between the popover and its trigger element. Increase this value to add more visual breathing room between the two.",
  },
  {
    name: "open",
    type: "boolean",
    default: "—",
    description:
      "Controls the popover's open state externally for fully controlled usage. When provided, the component no longer manages its own visibility — you must toggle it via onOpenChange.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    default: "—",
    description:
      "Callback fired whenever the popover's open state changes. Receives the new boolean state and is required when using the controlled open prop.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the popover content container for custom styling overrides.",
  },
];

export default function PopoverPage() {
  const [controlled, setControlled] = useState(false);

  return (
    <ComponentPage
      name="Popover"
      description="A floating content panel that appears relative to a trigger element. Supports click and hover activation, configurable placement, arrow indicators, and fully controlled mode."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { Popover } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Provide a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">trigger</code>{" "}
          element and place your content as{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">children</code>.
          Clicking the trigger toggles the popover.
        </p>
        <Preview
          code={`<Popover
  trigger={
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
      Open Popover
    </button>
  }
>
  <div className="p-3">
    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Popover Title</p>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
      This is the popover content. You can put anything here.
    </p>
  </div>
</Popover>`}
        >
          <Popover
            trigger={
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                Open Popover
              </button>
            }
          >
            <div className="p-3">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Popover Title</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                This is the popover content. You can put anything here.
              </p>
            </div>
          </Popover>
        </Preview>
      </Section>

      {/* Hover Trigger */}
      <Section title="Hover Trigger">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">triggerMode="hover"</code>{" "}
          to open the popover on mouse enter. The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">hoverDelay</code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">hoverCloseDelay</code>{" "}
          props control the timing to prevent accidental triggers.
        </p>
        <Preview
          code={`<Popover
  trigger={
    <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm">
      Hover Me
    </button>
  }
  triggerMode="hover"
>
  <div className="p-3">
    <p className="text-sm text-gray-600 dark:text-gray-300">
      This popover appears on hover and closes when you move away.
    </p>
  </div>
</Popover>`}
        >
          <Popover
            trigger={
              <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm">
                Hover Me
              </button>
            }
            triggerMode="hover"
          >
            <div className="p-3">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                This popover appears on hover and closes when you move away.
              </p>
            </div>
          </Popover>
        </Preview>
      </Section>

      {/* Placements */}
      <Section title="Placements">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">placement</code>{" "}
          prop positions the popover relative to the trigger. Choose from{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">top</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">bottom</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">left</code>, or{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">right</code>.
        </p>
        <Preview
          code={`<div className="flex flex-wrap gap-4">
  <Popover placement="top" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm">Top</button>}>
    <div className="p-2 text-sm">Top placement</div>
  </Popover>
  <Popover placement="bottom" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm">Bottom</button>}>
    <div className="p-2 text-sm">Bottom placement</div>
  </Popover>
  <Popover placement="left" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm">Left</button>}>
    <div className="p-2 text-sm">Left placement</div>
  </Popover>
  <Popover placement="right" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm">Right</button>}>
    <div className="p-2 text-sm">Right placement</div>
  </Popover>
</div>`}
        >
          <div className="flex flex-wrap gap-4 justify-center py-8">
            <Popover placement="top" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm">Top</button>}>
              <div className="p-2 text-sm text-gray-700 dark:text-gray-300">Top placement</div>
            </Popover>
            <Popover placement="bottom" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm">Bottom</button>}>
              <div className="p-2 text-sm text-gray-700 dark:text-gray-300">Bottom placement</div>
            </Popover>
            <Popover placement="left" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm">Left</button>}>
              <div className="p-2 text-sm text-gray-700 dark:text-gray-300">Left placement</div>
            </Popover>
            <Popover placement="right" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm">Right</button>}>
              <div className="p-2 text-sm text-gray-700 dark:text-gray-300">Right placement</div>
            </Popover>
          </div>
        </Preview>
      </Section>

      {/* Alignment Options */}
      <Section title="Alignment Options">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">align</code>{" "}
          prop controls how the popover aligns along the cross-axis. For example, with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">placement="bottom"</code>,{" "}
          align shifts the popover horizontally.
        </p>
        <Preview
          code={`<div className="flex flex-wrap gap-4">
  <Popover placement="bottom" align="start" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm">Start</button>}>
    <div className="p-2 text-sm">Aligned to start</div>
  </Popover>
  <Popover placement="bottom" align="center" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm">Center</button>}>
    <div className="p-2 text-sm">Aligned to center</div>
  </Popover>
  <Popover placement="bottom" align="end" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm">End</button>}>
    <div className="p-2 text-sm">Aligned to end</div>
  </Popover>
</div>`}
        >
          <div className="flex flex-wrap gap-4">
            <Popover placement="bottom" align="start" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm">Start</button>}>
              <div className="p-2 text-sm text-gray-700 dark:text-gray-300">Aligned to start</div>
            </Popover>
            <Popover placement="bottom" align="center" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm">Center</button>}>
              <div className="p-2 text-sm text-gray-700 dark:text-gray-300">Aligned to center</div>
            </Popover>
            <Popover placement="bottom" align="end" trigger={<button className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm">End</button>}>
              <div className="p-2 text-sm text-gray-700 dark:text-gray-300">Aligned to end</div>
            </Popover>
          </div>
        </Preview>
      </Section>

      {/* Without Arrow */}
      <Section title="Without Arrow">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showArrow={"{false}"}</code>{" "}
          to remove the triangular arrow and render a clean floating panel.
        </p>
        <Preview
          code={`<Popover
  trigger={
    <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm">
      No Arrow
    </button>
  }
  showArrow={false}
>
  <div className="p-3">
    <p className="text-sm text-gray-600 dark:text-gray-300">
      This popover has no arrow indicator.
    </p>
  </div>
</Popover>`}
        >
          <Popover
            trigger={
              <button className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm">
                No Arrow
              </button>
            }
            showArrow={false}
          >
            <div className="p-3">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                This popover has no arrow indicator.
              </p>
            </div>
          </Popover>
        </Preview>
      </Section>

      {/* Controlled Mode */}
      <Section title="Controlled Mode">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">open</code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onOpenChange</code>{" "}
          props together to fully control the popover's visibility from external state.
        </p>
        <Preview
          code={`const [controlled, setControlled] = useState(false);

<div className="flex items-center gap-4">
  <button
    onClick={() => setControlled(!controlled)}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
  >
    {controlled ? "Close" : "Open"} Popover
  </button>
  <Popover
    open={controlled}
    onOpenChange={setControlled}
    trigger={
      <span className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 rounded-lg text-sm">
        Controlled Trigger
      </span>
    }
  >
    <div className="p-3">
      <p className="text-sm text-gray-600 dark:text-gray-300">
        This popover is controlled externally.
      </p>
    </div>
  </Popover>
</div>`}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => setControlled(!controlled)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
            >
              {controlled ? "Close" : "Open"} Popover
            </button>
            <Popover
              open={controlled}
              onOpenChange={setControlled}
              trigger={
                <span className="px-3 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm cursor-pointer">
                  Controlled Trigger
                </span>
              }
            >
              <div className="p-3">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This popover is controlled externally.
                </p>
              </div>
            </Popover>
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
