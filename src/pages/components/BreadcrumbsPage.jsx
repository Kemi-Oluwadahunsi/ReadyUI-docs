import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Breadcrumbs } from "readyui-react";

const props = [
  {
    name: "items",
    type: "Array<{ label, href?, icon?, onClick? }>",
    default: "[]",
    required: true,
    description:
      "An array of breadcrumb items. Each item must have a label string and can optionally include an href for navigation, an icon component, or an onClick handler for custom routing.",
  },
  {
    name: "maxVisible",
    type: "number",
    default: "4",
    description:
      'The maximum number of breadcrumb items to display before collapsing the middle items into an ellipsis ("…"). This keeps long trails manageable in constrained layouts.',
  },
  {
    name: "separator",
    type: "ReactNode",
    default: "ChevronRight",
    description:
      "A custom element rendered between each breadcrumb item. Defaults to a chevron-right icon. You can pass a string like \"/\" or any React component.",
  },
  {
    name: "showHomeIcon",
    type: "boolean",
    default: "true",
    description:
      "When true, prepends a home icon to the first breadcrumb item, providing a visual anchor for the navigation root.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the outer breadcrumb container for layout or spacing overrides.",
  },
  {
    name: "itemClassName",
    type: "string",
    default: '""',
    description:
      "CSS class names applied to each individual breadcrumb item, useful for overriding link styles or typography.",
  },
  {
    name: "activeClassName",
    type: "string",
    default: '""',
    description:
      "CSS class names applied to the last (active) breadcrumb item, typically used to visually distinguish the current page.",
  },
  {
    name: "renderItem",
    type: "Function",
    default: "—",
    description:
      "A custom render function for each breadcrumb item. Receives the item object and its index, returning a ReactNode. Useful for integrating with client-side routers.",
  },
];

const basicItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Electronics", href: "/products/electronics" },
  { label: "Headphones" },
];

const longItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Electronics", href: "/shop/electronics" },
  { label: "Audio", href: "/shop/electronics/audio" },
  { label: "Headphones", href: "/shop/electronics/audio/headphones" },
  { label: "Wireless" },
];

export default function BreadcrumbsPage() {
  return (
    <ComponentPage
      name="Breadcrumbs"
      description="A navigational aid that shows the user's current location within a site hierarchy. Breadcrumbs improve wayfinding and provide quick access to parent pages."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { Breadcrumbs } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            items
          </code>{" "}
          array where each entry has a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            label
          </code>{" "}
          and an optional{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            href
          </code>
          . The last item is rendered as plain text to indicate the current page.
        </p>
        <Preview
          code={`const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Electronics", href: "/products/electronics" },
  { label: "Headphones" },
];

<Breadcrumbs items={items} />`}
        >
          <Breadcrumbs items={basicItems} />
        </Preview>
      </Section>

      {/* Auto-Collapsing */}
      <Section title="Auto-Collapsing">
        <p className="text-gray-600 dark:text-gray-400">
          When the number of items exceeds{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            maxVisible
          </code>
          , middle items are automatically collapsed behind an ellipsis. Users
          can click the ellipsis to expand the full trail. This keeps deeply
          nested paths from overwhelming the UI.
        </p>
        <Preview
          code={`const items = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Electronics", href: "/shop/electronics" },
  { label: "Audio", href: "/shop/electronics/audio" },
  { label: "Headphones", href: "/shop/electronics/audio/headphones" },
  { label: "Wireless" },
];

<Breadcrumbs items={items} maxVisible={3} />`}
        >
          <Breadcrumbs items={longItems} maxVisible={3} />
        </Preview>
      </Section>

      {/* Custom Separator */}
      <Section title="Custom Separator">
        <p className="text-gray-600 dark:text-gray-400">
          Override the default chevron separator with any string or React
          element using the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            separator
          </code>{" "}
          prop.
        </p>
        <Preview
          code={`<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Shoes" },
  ]}
  separator="/"
/>`}
        >
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Shoes" },
            ]}
            separator="/"
          />
        </Preview>
      </Section>

      {/* Without Home Icon */}
      <Section title="Without Home Icon">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showHomeIcon={"{false}"}
          </code>{" "}
          to remove the home icon from the first breadcrumb item. This is useful
          when your first item is not a traditional "Home" link.
        </p>
        <Preview
          code={`<Breadcrumbs
  items={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Settings", href: "/settings" },
    { label: "Profile" },
  ]}
  showHomeIcon={false}
/>`}
        >
          <Breadcrumbs
            items={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Settings", href: "/settings" },
              { label: "Profile" },
            ]}
            showHomeIcon={false}
          />
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
