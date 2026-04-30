import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Tabs } from "readyui-react";

const basicTabs = [
  { key: "overview", label: "Overview", content: "This is the overview panel. It contains a high-level summary of the feature." },
  { key: "features", label: "Features", content: "ReadyUI ships with 50+ components, dark mode, accessibility, and Tailwind CSS integration." },
  { key: "pricing", label: "Pricing", content: "ReadyUI is completely free and open source — no premium tier, no paywalls." },
];

const iconTabs = [
  { key: "profile", label: "Profile", icon: "👤", content: "Manage your profile information, avatar, and display name." },
  { key: "settings", label: "Settings", icon: "⚙️", content: "Configure notifications, theme preferences, and privacy options." },
  { key: "billing", label: "Billing", icon: "💳", badge: "3", content: "View invoices, manage payment methods, and update your subscription plan." },
  { key: "disabled", label: "Archived", icon: "📦", disabled: true, content: "This tab is disabled." },
];

const props = [
  { name: "tabs", type: "Array<{ key, label, icon?, badge?, disabled?, content }>", default: "[]", required: true, description: "Array of tab definitions. Each tab must have a unique key string and a label. Optionally include an icon (ReactNode), a badge (string or number), a disabled flag, and content (ReactNode) rendered when that tab is active." },
  { name: "activeKey", type: "string", default: "—", description: "The key of the currently active tab for controlled usage. When provided, you must also supply onChange to update this value. If omitted, the component manages its own state internally." },
  { name: "onChange", type: "(key: string) => void", default: "—", description: "Callback fired when a different tab is selected. Receives the key of the newly active tab. Required for controlled usage." },
  { name: "defaultKey", type: "string", default: "—", description: "The key of the tab that should be active on initial render for uncontrolled usage. If neither defaultKey nor activeKey is provided, the first non-disabled tab is selected automatically." },
  { name: "variant", type: '"underline" | "pills" | "boxed"', default: '"underline"', description: 'Controls the visual style of the tab bar. "underline" shows a bottom border indicator, "pills" renders rounded pill-shaped backgrounds, and "boxed" displays tabs inside a bordered container.' },
  { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: 'Layout direction of the tab bar. "horizontal" places tabs in a row above the content panel; "vertical" stacks them in a left-side column with content to the right.' },
  { name: "lazy", type: "boolean", default: "false", description: "When true, tab content is only mounted when the tab is first activated, and unmounted when deactivated. Useful for expensive content like data fetches or heavy components." },
  { name: "animated", type: "boolean", default: "true", description: "Whether panel transitions are animated. Set to false for instant content switches with no transition effects." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the outermost tabs wrapper element." },
  { name: "tabsClassName", type: "string", default: '""', description: "Additional CSS classes applied to the tab bar (the row or column of tab buttons)." },
  { name: "panelClassName", type: "string", default: '""', description: "Additional CSS classes applied to the content panel area below or beside the tab bar." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: 'Controls the font size and padding of the tab buttons. Use "sm" for compact layouts, "md" for standard forms, and "lg" for prominent navigation.' },
  { name: "fullWidth", type: "boolean", default: "false", description: "When true, tab buttons stretch to fill the entire available width equally. Useful for mobile layouts or bottom navigation bars." },
  { name: "tabWidth", type: "string", default: '"auto"', description: 'Sets an explicit width for each tab button. Accepts any CSS width value like "120px" or "8rem". Overrides the default auto-sizing behavior.' },
  { name: "fontSize", type: "string", default: "—", description: 'Overrides the font size of tab labels. Accepts any CSS font-size value like "14px" or "0.875rem". Takes precedence over the size prop font sizing.' },
];

export default function TabsPage() {
  const [activeKey, setActiveKey] = useState("overview");

  return (
    <ComponentPage
      name="Tabs"
      description="A flexible tabbed interface component with multiple visual variants, vertical orientation, icons, badges, and animated panel transitions. Perfect for organizing content into switchable sections."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the Tabs component from readyui-react:
        </p>
        <CodeBlock code={`import { Tabs } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">tabs</code> array where each item has a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">key</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">label</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">content</code>. The component works both controlled (with activeKey + onChange) and uncontrolled (with defaultKey).
        </p>
        <Preview
          code={`const tabs = [
  { key: "overview", label: "Overview", content: "Overview panel content." },
  { key: "features", label: "Features", content: "Features panel content." },
  { key: "pricing", label: "Pricing", content: "Pricing panel content." },
];

<Tabs tabs={tabs} defaultKey="overview" />`}
        >
          <Tabs tabs={basicTabs} defaultKey="overview" />
        </Preview>
      </Section>

      {/* Variants */}
      <Section title="Variants">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">variant</code> prop switches between three visual styles:{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">underline</code> (default),{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">pills</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">boxed</code>.
        </p>

        <Preview
          code={`<Tabs tabs={tabs} variant="underline" />`}
        >
          <Tabs tabs={basicTabs} defaultKey="overview" variant="underline" />
        </Preview>

        <Preview
          code={`<Tabs tabs={tabs} variant="pills" />`}
        >
          <Tabs tabs={basicTabs} defaultKey="overview" variant="pills" />
        </Preview>

        <Preview
          code={`<Tabs tabs={tabs} variant="boxed" />`}
        >
          <Tabs tabs={basicTabs} defaultKey="overview" variant="boxed" />
        </Preview>
      </Section>

      {/* Vertical Orientation */}
      <Section title="Vertical Orientation">
        <p className="text-gray-600 dark:text-gray-400">
          Set <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">orientation</code> to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">vertical</code> to stack tab buttons in a left-side column with the content panel to the right. Works well for settings pages and dashboards.
        </p>
        <Preview
          code={`<Tabs
  tabs={tabs}
  orientation="vertical"
  variant="pills"
  defaultKey="profile"
/>`}
        >
          <Tabs
            tabs={iconTabs}
            orientation="vertical"
            variant="pills"
            defaultKey="profile"
          />
        </Preview>
      </Section>

      {/* Full Width */}
      <Section title="Full Width">
        <p className="text-gray-600 dark:text-gray-400">
          Enable <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">fullWidth</code> to stretch tab buttons equally across the available width. Ideal for mobile layouts or bottom navigation patterns.
        </p>
        <Preview
          code={`<Tabs tabs={tabs} fullWidth variant="boxed" />`}
        >
          <Tabs tabs={basicTabs} defaultKey="overview" fullWidth variant="boxed" />
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">size</code> prop controls the padding and font size of the tab buttons.
        </p>
        <Preview
          code={`<Tabs tabs={tabs} size="sm" />
<Tabs tabs={tabs} size="md" />
<Tabs tabs={tabs} size="lg" />`}
        >
          <div className="space-y-8">
            <div>
              <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Small</p>
              <Tabs tabs={basicTabs} defaultKey="overview" size="sm" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Medium (default)</p>
              <Tabs tabs={basicTabs} defaultKey="overview" size="md" />
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Large</p>
              <Tabs tabs={basicTabs} defaultKey="overview" size="lg" />
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
