import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { FloatingActionButton } from "readyui-react";
import { Plus, Edit, Share2, Trash2, MessageCircle, Heart, Download } from "lucide-react";

const basicActions = [
  { id: "edit", icon: Edit, label: "Edit", onClick: () => {} },
  { id: "share", icon: Share2, label: "Share", onClick: () => {} },
  { id: "delete", icon: Trash2, label: "Delete", color: "bg-red-500", onClick: () => {} },
];

const chatActions = [
  { id: "message", icon: MessageCircle, label: "Message", onClick: () => {} },
  { id: "like", icon: Heart, label: "Like", onClick: () => {} },
  { id: "download", icon: Download, label: "Download", onClick: () => {} },
];

const props = [
  { name: "actions", type: "Array<{ id, icon, label, color?, onClick }>", default: "[]", required: true, description: "Array of action items displayed when the FAB is expanded. Each action requires a unique id, a Lucide icon component, a label string shown as a tooltip, and an onClick handler. Optionally provide a color class to override the default action button background." },
  { name: "position", type: '"bottom-right" | "bottom-left" | "top-right" | "top-left"', default: '"bottom-right"', description: "Controls which corner of the container the FAB is anchored to. The button and its expanded action menu will appear at the specified corner with appropriate spacing." },
  { name: "mainColor", type: "string", default: '"bg-blue-600 hover:bg-blue-700"', description: "Tailwind CSS background classes applied to the main floating action button. You can provide any combination of background and hover background classes to match your application theme." },
  { name: "hideOnScroll", type: "boolean", default: "true", description: "When true, the FAB automatically hides itself as the user scrolls down and reappears when scrolling up. Prevents the button from obscuring content during active scrolling." },
  { name: "showBackdrop", type: "boolean", default: "true", description: "When true, an overlay backdrop appears behind the expanded actions menu, dimming the background to focus attention on the available actions." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the FAB wrapper element for custom positioning or style overrides." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Controls the size of both the main FAB button and its child action buttons. Use \"sm\" for compact interfaces, \"md\" for standard layouts, and \"lg\" for touch-friendly or prominent call-to-action scenarios." },
];

export default function FloatingActionButtonPage() {
  return (
    <ComponentPage
      name="FloatingActionButton"
      description="A Material Design-inspired floating action button that expands to reveal a set of contextual actions. Supports corner positioning, scroll-hide behavior, backdrop overlay, and multiple sizes. Perfect for mobile-friendly quick actions."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the FloatingActionButton component from readyui-react. You will also need Lucide icons for the action items:
        </p>
        <CodeBlock code={`import { FloatingActionButton } from "readyui-react";
import { Plus, Edit, Share2, Trash2 } from "lucide-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Define an array of{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">actions</code> with Lucide icon components.
          Each action needs a unique{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">id</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">icon</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">label</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onClick</code> handler.
          Click the main button to expand the action menu.
        </p>
        <Preview
          code={`import { Edit, Share2, Trash2 } from "lucide-react";

const actions = [
  { id: "edit", icon: Edit, label: "Edit", onClick: () => console.log("Edit") },
  { id: "share", icon: Share2, label: "Share", onClick: () => console.log("Share") },
  { id: "delete", icon: Trash2, label: "Delete", color: "bg-red-500", onClick: () => console.log("Delete") },
];

<FloatingActionButton actions={actions} />`}
        >
          <div className="relative h-64 bg-gray-50 dark:bg-zinc-900 rounded-lg">
            <FloatingActionButton actions={basicActions} />
          </div>
        </Preview>
      </Section>

      {/* Positions */}
      <Section title="Positions">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">position</code> prop to anchor
          the FAB to any corner. Available positions are{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"bottom-right"</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"bottom-left"</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"top-right"</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"top-left"</code>.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Bottom Left</h3>
            <Preview code={`<FloatingActionButton actions={actions} position="bottom-left" />`}>
              <div className="relative h-64 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <FloatingActionButton actions={chatActions} position="bottom-left" />
              </div>
            </Preview>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Top Right</h3>
            <Preview code={`<FloatingActionButton actions={actions} position="top-right" mainColor="bg-emerald-600 hover:bg-emerald-700" />`}>
              <div className="relative h-64 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <FloatingActionButton actions={chatActions} position="top-right" mainColor="bg-emerald-600 hover:bg-emerald-700" />
              </div>
            </Preview>
          </div>
        </div>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">size</code> prop controls
          the dimensions of the main button and its child action buttons. Choose from{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"sm"</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"md"</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"lg"</code>.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Small</h3>
            <Preview code={`<FloatingActionButton actions={actions} size="sm" />`}>
              <div className="relative h-64 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <FloatingActionButton actions={basicActions} size="sm" />
              </div>
            </Preview>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Large</h3>
            <Preview code={`<FloatingActionButton actions={actions} size="lg" mainColor="bg-violet-600 hover:bg-violet-700" />`}>
              <div className="relative h-64 bg-gray-50 dark:bg-zinc-900 rounded-lg">
                <FloatingActionButton actions={basicActions} size="lg" mainColor="bg-violet-600 hover:bg-violet-700" />
              </div>
            </Preview>
          </div>
        </div>
      </Section>

      {/* Without Backdrop */}
      <Section title="Without Backdrop">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showBackdrop</code> to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">false</code> to disable
          the overlay that appears behind the expanded actions. This gives a lighter, less intrusive feel
          when the action menu opens.
        </p>
        <Preview
          code={`<FloatingActionButton
  actions={actions}
  showBackdrop={false}
  mainColor="bg-rose-600 hover:bg-rose-700"
/>`}
        >
          <div className="relative h-64 bg-gray-50 dark:bg-zinc-900 rounded-lg">
            <FloatingActionButton
              actions={chatActions}
              showBackdrop={false}
              mainColor="bg-rose-600 hover:bg-rose-700"
            />
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
