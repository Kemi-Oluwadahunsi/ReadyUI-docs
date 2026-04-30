import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Drawer } from "readyui-react";

const props = [
  { name: "isOpen", type: "boolean", default: "false", required: true, description: "Controls the visibility of the drawer panel. When true the drawer slides into view from the specified position; when false it animates out and is removed from the layout." },
  { name: "onClose", type: "() => void", default: "—", required: true, description: "Callback invoked whenever the drawer requests to close — triggered by the close button click, Escape key press, or overlay click depending on your configuration. You must update your isOpen state inside this handler to dismiss the drawer." },
  { name: "position", type: '"left" | "right" | "top" | "bottom"', default: '"right"', description: 'Determines which edge of the viewport the drawer slides in from. "left" and "right" create vertical panels while "top" and "bottom" create horizontal ones spanning the full width.' },
  { name: "size", type: "string | number", default: '"380px"', description: "Sets the width (for left/right drawers) or height (for top/bottom drawers). Accepts any valid CSS value such as \"400px\", \"50%\", or a raw number which is treated as pixels." },
  { name: "showOverlay", type: "boolean", default: "true", description: "Whether to render a semi-transparent backdrop behind the drawer. Disabling the overlay allows users to interact with the page content underneath while the drawer is open." },
  { name: "closeOnOverlay", type: "boolean", default: "true", description: "Whether clicking the backdrop overlay dismisses the drawer by calling onClose. Set to false if the drawer should only be closed via the close button or programmatically." },
  { name: "closeOnEsc", type: "boolean", default: "true", description: "Whether pressing the Escape key triggers the onClose callback. Disable this for critical forms where accidental dismissal could lose user progress." },
  { name: "showCloseButton", type: "boolean", default: "true", description: "Whether to display the built-in × close button in the top-right corner of the drawer panel." },
  { name: "children", type: "ReactNode", default: "—", description: "The main body content rendered inside the drawer. This can be any valid React element — navigation menus, forms, detail panels, or other components." },
  { name: "header", type: "ReactNode", default: "—", description: "Content rendered in a sticky header region at the top of the drawer, above the main body. Typically used for titles, search bars, or navigation context." },
  { name: "footer", type: "ReactNode", default: "—", description: "Content rendered in a sticky footer region at the bottom of the drawer. Commonly used for action buttons such as Save, Cancel, or Apply." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the drawer panel container for custom styling overrides." },
  { name: "overlayClassName", type: "string", default: '""', description: "Additional CSS classes applied to the backdrop overlay element. Useful for custom blur effects or tinted backgrounds." },
  { name: "style", type: "Object", default: "{}", description: "Inline style object applied directly to the drawer panel container. Useful for one-off overrides that don't warrant a dedicated class." },
];

export default function DrawerPage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);
  const [headerFooterOpen, setHeaderFooterOpen] = useState(false);
  const [customSizeOpen, setCustomSizeOpen] = useState(false);
  const [noOverlayOpen, setNoOverlayOpen] = useState(false);

  return (
    <ComponentPage
      name="Drawer"
      description="A slide-in panel component that emerges from any edge of the viewport. Supports overlay backdrops, keyboard dismiss, custom headers and footers, and configurable sizing. Ideal for navigation menus, settings panels, detail views, and form sidebars."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the Drawer component from readyui-react:
        </p>
        <CodeBlock code={`import { Drawer } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          At minimum, pass{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">isOpen</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onClose</code>, and children content.
          Use a <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">useState</code> hook to toggle the drawer open and closed via a button.
        </p>
        <Preview
          code={`const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>
  Open Drawer
</button>

<Drawer isOpen={open} onClose={() => setOpen(false)}>
  <p>This is a basic drawer panel.</p>
</Drawer>`}
        >
          <div>
            <button
              onClick={() => setBasicOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Drawer
            </button>
            <Drawer isOpen={basicOpen} onClose={() => setBasicOpen(false)}>
              <p className="text-gray-600 dark:text-gray-400">This is a basic drawer panel. Click the × button, press Escape, or click the overlay to close it.</p>
            </Drawer>
          </div>
        </Preview>
      </Section>

      {/* Positions */}
      <Section title="Positions">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">position</code>{" "}
          prop to control which edge the drawer slides in from. Each position below has its own trigger button and state.
        </p>
        <Preview
          code={`const [leftOpen, setLeftOpen] = useState(false);
const [rightOpen, setRightOpen] = useState(false);
const [topOpen, setTopOpen] = useState(false);
const [bottomOpen, setBottomOpen] = useState(false);

<button onClick={() => setLeftOpen(true)}>Left</button>
<button onClick={() => setRightOpen(true)}>Right</button>
<button onClick={() => setTopOpen(true)}>Top</button>
<button onClick={() => setBottomOpen(true)}>Bottom</button>

<Drawer isOpen={leftOpen} onClose={() => setLeftOpen(false)} position="left">
  <p>Left drawer content</p>
</Drawer>

<Drawer isOpen={rightOpen} onClose={() => setRightOpen(false)} position="right">
  <p>Right drawer content</p>
</Drawer>

<Drawer isOpen={topOpen} onClose={() => setTopOpen(false)} position="top">
  <p>Top drawer content</p>
</Drawer>

<Drawer isOpen={bottomOpen} onClose={() => setBottomOpen(false)} position="bottom">
  <p>Bottom drawer content</p>
</Drawer>`}
        >
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setLeftOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Left
            </button>
            <button
              onClick={() => setRightOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Right
            </button>
            <button
              onClick={() => setTopOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Top
            </button>
            <button
              onClick={() => setBottomOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Bottom
            </button>

            <Drawer isOpen={leftOpen} onClose={() => setLeftOpen(false)} position="left">
              <p className="text-gray-600 dark:text-gray-400">This drawer slides in from the left edge.</p>
            </Drawer>
            <Drawer isOpen={rightOpen} onClose={() => setRightOpen(false)} position="right">
              <p className="text-gray-600 dark:text-gray-400">This drawer slides in from the right edge.</p>
            </Drawer>
            <Drawer isOpen={topOpen} onClose={() => setTopOpen(false)} position="top">
              <p className="text-gray-600 dark:text-gray-400">This drawer slides down from the top edge.</p>
            </Drawer>
            <Drawer isOpen={bottomOpen} onClose={() => setBottomOpen(false)} position="bottom">
              <p className="text-gray-600 dark:text-gray-400">This drawer slides up from the bottom edge.</p>
            </Drawer>
          </div>
        </Preview>
      </Section>

      {/* With Header & Footer */}
      <Section title="With Header & Footer">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">header</code> and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">footer</code>{" "}
          props to render sticky regions above and below the scrollable body content. These are ideal for titles and action buttons.
        </p>
        <Preview
          code={`const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>
  Open Drawer with Header & Footer
</button>

<Drawer
  isOpen={open}
  onClose={() => setOpen(false)}
  header={<h3 className="text-lg font-semibold">Settings</h3>}
  footer={
    <div className="flex gap-2 justify-end">
      <button onClick={() => setOpen(false)}>Cancel</button>
      <button>Save</button>
    </div>
  }
>
  <p>Drawer body content goes here.</p>
</Drawer>`}
        >
          <div>
            <button
              onClick={() => setHeaderFooterOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Drawer with Header & Footer
            </button>
            <Drawer
              isOpen={headerFooterOpen}
              onClose={() => setHeaderFooterOpen(false)}
              header={<h3 className="text-lg font-semibold">Settings</h3>}
              footer={
                <div className="flex gap-2 justify-end">
                  <button
                    onClick={() => setHeaderFooterOpen(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-600 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Save
                  </button>
                </div>
              }
            >
              <p className="text-gray-600 dark:text-gray-400">
                This is the main drawer body content. It scrolls independently while the header and footer remain fixed in place.
              </p>
            </Drawer>
          </div>
        </Preview>
      </Section>

      {/* Custom Size */}
      <Section title="Custom Size">
        <p className="text-gray-600 dark:text-gray-400">
          Override the default width (or height for top/bottom drawers) using the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">size</code>{" "}
          prop. It accepts any CSS value such as <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"500px"</code> or{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"50%"</code>.
        </p>
        <Preview
          code={`const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>
  Open Wide Drawer (500px)
</button>

<Drawer isOpen={open} onClose={() => setOpen(false)} size="500px">
  <p>This drawer is 500px wide.</p>
</Drawer>`}
        >
          <div>
            <button
              onClick={() => setCustomSizeOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Wide Drawer (500px)
            </button>
            <Drawer isOpen={customSizeOpen} onClose={() => setCustomSizeOpen(false)} size="500px">
              <p className="text-gray-600 dark:text-gray-400">This drawer is 500px wide instead of the default 380px.</p>
            </Drawer>
          </div>
        </Preview>
      </Section>

      {/* Without Overlay */}
      <Section title="Without Overlay">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showOverlay</code>{" "}
          to <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">false</code> to remove the backdrop. This allows users to interact with the page content underneath while the drawer remains open.
        </p>
        <Preview
          code={`const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>
  Open Without Overlay
</button>

<Drawer isOpen={open} onClose={() => setOpen(false)} showOverlay={false}>
  <p>No backdrop behind this drawer.</p>
</Drawer>`}
        >
          <div>
            <button
              onClick={() => setNoOverlayOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Without Overlay
            </button>
            <Drawer isOpen={noOverlayOpen} onClose={() => setNoOverlayOpen(false)} showOverlay={false}>
              <p className="text-gray-600 dark:text-gray-400">No backdrop behind this drawer. You can still interact with the page content underneath.</p>
            </Drawer>
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
