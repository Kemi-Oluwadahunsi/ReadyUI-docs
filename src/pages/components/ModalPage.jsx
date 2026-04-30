import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Modal } from "readyui-react";

const props = [
  { name: "open", type: "boolean", default: "false", required: true, description: "Controls whether the modal is currently visible. When true the modal renders on screen with its backdrop; when false it is removed from the DOM entirely." },
  { name: "onClose", type: "() => void", default: "—", required: true, description: "Callback fired whenever the modal requests to close — triggered by the close button, Escape key press (if enabled), or overlay click (if enabled). You must update your open state inside this handler to actually dismiss the modal." },
  { name: "title", type: "string", default: '""', description: "Text displayed in the modal header area. When provided, the modal renders a top bar with this title and an optional close button beside it." },
  { name: "children", type: "ReactNode", default: "—", description: "The main body content rendered inside the modal panel. This can be any valid React element — text, forms, images, or other components." },
  { name: "footer", type: "ReactNode", default: "—", description: "Content rendered in a sticky footer region at the bottom of the modal. Typically used for action buttons such as Confirm, Cancel, Save, or Delete." },
  { name: "size", type: '"sm" | "md" | "lg" | "xl" | "full"', default: '"md"', description: 'Controls the maximum width of the modal panel. "sm" is compact for confirmations, "md" is the balanced default, "lg" and "xl" are wider for forms or data-heavy content, and "full" stretches edge-to-edge.' },
  { name: "closeOnOverlay", type: "boolean", default: "true", description: "Whether clicking the backdrop overlay behind the modal dismisses it. Set to false for critical flows where accidental dismissal could lose user progress." },
  { name: "closeOnEsc", type: "boolean", default: "true", description: "Whether pressing the Escape key triggers the onClose callback. Disable for important multi-step forms or wizards." },
  { name: "showCloseButton", type: "boolean", default: "true", description: "Whether to render the built-in × close button in the top-right corner of the modal header." },
  { name: "animation", type: '"scale" | "slide-up" | "slide-down" | "fade" | "none"', default: '"scale"', description: 'The entrance and exit animation style. "scale" zooms in from the center, "slide-up" and "slide-down" translate vertically, "fade" cross-fades, and "none" disables all animation.' },
  { name: "centered", type: "boolean", default: "true", description: "Whether the modal is vertically centered in the viewport. When false, the modal appears near the top of the screen." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the modal panel container for custom styling overrides." },
  { name: "overlayClassName", type: "string", default: '""', description: "Additional CSS classes applied to the backdrop overlay element. Useful for custom blur effects or tinted backgrounds." },
  { name: "overlayOpacity", type: "number", default: "0.5", description: "Opacity level of the backdrop overlay ranging from 0 (fully transparent) to 1 (fully opaque)." },
  { name: "overlayColor", type: "string", default: '"black"', description: "Background color of the backdrop overlay. Accepts any valid CSS color value such as a hex code, rgb(), or named color." },
];

export default function ModalPage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [smOpen, setSmOpen] = useState(false);
  const [mdOpen, setMdOpen] = useState(false);
  const [lgOpen, setLgOpen] = useState(false);
  const [scaleOpen, setScaleOpen] = useState(false);
  const [slideUpOpen, setSlideUpOpen] = useState(false);
  const [fadeOpen, setFadeOpen] = useState(false);
  const [footerOpen, setFooterOpen] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);

  return (
    <ComponentPage
      name="Modal"
      description="A fully controlled, accessible modal dialog with backdrop overlay, keyboard dismiss, customizable animations, and optional header/footer regions. Ideal for confirmations, forms, alerts, and focused content overlays."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the Modal component from readyui-react:
        </p>
        <CodeBlock code={`import { Modal } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          At minimum, pass{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">open</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onClose</code>, and children content.
          Use a <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">useState</code> hook to toggle the modal open and closed via a button.
        </p>
        <Preview
          code={`const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>
  Open Modal
</button>

<Modal open={open} onClose={() => setOpen(false)} title="Welcome">
  <p>This is a basic modal dialog.</p>
</Modal>`}
        >
          <div>
            <button
              onClick={() => setBasicOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Modal
            </button>
            <Modal open={basicOpen} onClose={() => setBasicOpen(false)} title="Welcome">
              <p className="text-gray-600 dark:text-gray-400">This is a basic modal dialog. Click the × button, press Escape, or click the overlay to close it.</p>
            </Modal>
          </div>
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">size</code> prop controls the modal's maximum width. Choose from{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">sm</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">md</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">lg</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">xl</code>, or{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">full</code>.
        </p>

        <Preview
          code={`<Modal open={open} onClose={onClose} title="Small Modal" size="sm">
  <p>Compact modal for quick confirmations.</p>
</Modal>`}
        >
          <div>
            <button
              onClick={() => setSmOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Small
            </button>
            <Modal open={smOpen} onClose={() => setSmOpen(false)} title="Small Modal" size="sm">
              <p className="text-gray-600 dark:text-gray-400">Compact modal ideal for quick confirmations or short messages.</p>
            </Modal>
          </div>
        </Preview>

        <Preview
          code={`<Modal open={open} onClose={onClose} title="Medium Modal" size="md">
  <p>The default balanced size.</p>
</Modal>`}
        >
          <div>
            <button
              onClick={() => setMdOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Medium (default)
            </button>
            <Modal open={mdOpen} onClose={() => setMdOpen(false)} title="Medium Modal" size="md">
              <p className="text-gray-600 dark:text-gray-400">The default balanced size suitable for most use cases.</p>
            </Modal>
          </div>
        </Preview>

        <Preview
          code={`<Modal open={open} onClose={onClose} title="Large Modal" size="lg">
  <p>Wider modal for forms or detailed content.</p>
</Modal>`}
        >
          <div>
            <button
              onClick={() => setLgOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Large
            </button>
            <Modal open={lgOpen} onClose={() => setLgOpen(false)} title="Large Modal" size="lg">
              <p className="text-gray-600 dark:text-gray-400">Wider modal perfect for forms, data tables, or detailed content layouts.</p>
            </Modal>
          </div>
        </Preview>
      </Section>

      {/* Animation Types */}
      <Section title="Animation Types">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">animation</code> prop controls how the modal enters and exits the screen.
        </p>

        <Preview
          code={`<Modal open={open} onClose={onClose} title="Scale" animation="scale">
  <p>Zooms in from the center (default).</p>
</Modal>`}
        >
          <div>
            <button
              onClick={() => setScaleOpen(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Scale (default)
            </button>
            <Modal open={scaleOpen} onClose={() => setScaleOpen(false)} title="Scale Animation" animation="scale">
              <p className="text-gray-600 dark:text-gray-400">This modal zooms in from the center using the default scale animation.</p>
            </Modal>
          </div>
        </Preview>

        <Preview
          code={`<Modal open={open} onClose={onClose} title="Slide Up" animation="slide-up">
  <p>Slides up from the bottom.</p>
</Modal>`}
        >
          <div>
            <button
              onClick={() => setSlideUpOpen(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Slide Up
            </button>
            <Modal open={slideUpOpen} onClose={() => setSlideUpOpen(false)} title="Slide Up Animation" animation="slide-up">
              <p className="text-gray-600 dark:text-gray-400">This modal slides up from the bottom of the viewport.</p>
            </Modal>
          </div>
        </Preview>

        <Preview
          code={`<Modal open={open} onClose={onClose} title="Fade" animation="fade">
  <p>Cross-fades into view.</p>
</Modal>`}
        >
          <div>
            <button
              onClick={() => setFadeOpen(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Fade
            </button>
            <Modal open={fadeOpen} onClose={() => setFadeOpen(false)} title="Fade Animation" animation="fade">
              <p className="text-gray-600 dark:text-gray-400">This modal gently cross-fades into view.</p>
            </Modal>
          </div>
        </Preview>
      </Section>

      {/* With Footer */}
      <Section title="With Footer">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">footer</code> prop with action buttons to create confirmation dialogs or form submit modals.
        </p>
        <Preview
          code={`const [open, setOpen] = useState(false);

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  footer={
    <div className="flex justify-end gap-3">
      <button onClick={() => setOpen(false)}>Cancel</button>
      <button onClick={() => setOpen(false)}>Confirm</button>
    </div>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>`}
        >
          <div>
            <button
              onClick={() => setFooterOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open with Footer
            </button>
            <Modal
              open={footerOpen}
              onClose={() => setFooterOpen(false)}
              title="Confirm Action"
              footer={
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setFooterOpen(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setFooterOpen(false)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Confirm
                  </button>
                </div>
              }
            >
              <p className="text-gray-600 dark:text-gray-400">Are you sure you want to proceed with this action? This cannot be undone.</p>
            </Modal>
          </div>
        </Preview>
      </Section>

      {/* Custom Overlay */}
      <Section title="Custom Overlay">
        <p className="text-gray-600 dark:text-gray-400">
          Customize the backdrop using{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">overlayOpacity</code> and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">overlayColor</code> to match your design system or create dramatic visual effects.
        </p>
        <Preview
          code={`<Modal
  open={open}
  onClose={onClose}
  title="Custom Overlay"
  overlayOpacity={0.7}
  overlayColor="#1e3a5f"
>
  <p>Deep blue tinted overlay at 70% opacity.</p>
</Modal>`}
        >
          <div>
            <button
              onClick={() => setOverlayOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Custom Overlay
            </button>
            <Modal
              open={overlayOpen}
              onClose={() => setOverlayOpen(false)}
              title="Custom Overlay"
              overlayOpacity={0.7}
              overlayColor="#1e3a5f"
            >
              <p className="text-gray-600 dark:text-gray-400">This modal uses a deep blue tinted overlay at 70% opacity for a dramatic backdrop effect.</p>
            </Modal>
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
