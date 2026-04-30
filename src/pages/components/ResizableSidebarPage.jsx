import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { ResizableSidebar } from "readyui-react";
import { Home, Settings, Users, Mail, FileText, BarChart3 } from "lucide-react";

const props = [
  {
    name: "items",
    type: "Array<{ icon, label, href?, active?, badge?, onClick? }>",
    default: "[]",
    required: true,
    description:
      "An array of sidebar navigation items. Each item should have a label string and an icon component. Optionally include href for link navigation, active to mark the current page, badge for notification counts, or onClick for custom click handling.",
  },
  {
    name: "header",
    type: "string",
    default: '"Menu"',
    description:
      "The text displayed at the top of the sidebar as the navigation header. This collapses to an icon when the sidebar is in its collapsed state.",
  },
  {
    name: "defaultWidth",
    type: "number",
    default: "260",
    description:
      "The initial width of the sidebar in pixels when it first renders in its expanded state.",
  },
  {
    name: "minWidth",
    type: "number",
    default: "200",
    description:
      "The minimum width in pixels to which the sidebar can be resized. Prevents the sidebar from becoming too narrow to read.",
  },
  {
    name: "maxWidth",
    type: "number",
    default: "400",
    description:
      "The maximum width in pixels to which the sidebar can be resized. Prevents the sidebar from consuming too much horizontal space.",
  },
  {
    name: "defaultCollapsed",
    type: "boolean",
    default: "false",
    description:
      "When set to true, the sidebar renders in its collapsed (icon-only) state on initial mount. Users can still expand it by clicking the toggle button.",
  },
  {
    name: "showSearch",
    type: "boolean",
    default: "true",
    description:
      "Controls whether a search input field is displayed at the top of the sidebar. The search filters navigation items by label in real time.",
  },
  {
    name: "resizable",
    type: "boolean",
    default: "true",
    description:
      "Enables or disables the drag handle on the right edge of the sidebar. When false, the sidebar width is fixed and cannot be adjusted by the user.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the outermost sidebar container for custom styling or layout overrides.",
  },
  {
    name: "onCollapse",
    type: "Function",
    default: "—",
    description:
      "Callback fired whenever the sidebar toggles between collapsed and expanded states. Receives a boolean indicating whether the sidebar is now collapsed.",
  },
  {
    name: "onResize",
    type: "Function",
    default: "—",
    description:
      "Callback fired continuously as the user drags the resize handle. Receives the new width in pixels, useful for persisting layout preferences.",
  },
  {
    name: "footer",
    type: "ReactNode",
    default: "—",
    description:
      "A React node rendered at the bottom of the sidebar, below the navigation items. Ideal for user profiles, logout buttons, or version info.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "Custom content rendered inside the sidebar body, below the search field and above the footer. Use this for fully custom sidebar layouts.",
  },
];

const menuItems = [
  { icon: <Home size={18} />, label: "Dashboard", href: "#", active: true },
  { icon: <Users size={18} />, label: "Users", href: "#", badge: "12" },
  { icon: <Mail size={18} />, label: "Messages", href: "#", badge: "3" },
  { icon: <FileText size={18} />, label: "Documents", href: "#" },
  { icon: <BarChart3 size={18} />, label: "Analytics", href: "#" },
  { icon: <Settings size={18} />, label: "Settings", href: "#" },
];

export default function ResizableSidebarPage() {
  const [collapseLog, setCollapseLog] = useState("");
  const [resizeLog, setResizeLog] = useState("");

  return (
    <ComponentPage
      name="ResizableSidebar"
      description="A collapsible, resizable sidebar navigation component with built-in search, badges, and drag-to-resize support. Perfect for admin dashboards and application shells."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { ResizableSidebar } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            items
          </code>{" "}
          array with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            icon
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            label
          </code>{" "}
          for each entry. The sidebar renders with search, resize handle, and collapse toggle by default.
        </p>
        <Preview
          code={`import { Home, Settings, Users, Mail, FileText, BarChart3 } from "lucide-react";

const menuItems = [
  { icon: <Home size={18} />, label: "Dashboard", href: "#", active: true },
  { icon: <Users size={18} />, label: "Users", href: "#", badge: "12" },
  { icon: <Mail size={18} />, label: "Messages", href: "#", badge: "3" },
  { icon: <FileText size={18} />, label: "Documents", href: "#" },
  { icon: <BarChart3 size={18} />, label: "Analytics", href: "#" },
  { icon: <Settings size={18} />, label: "Settings", href: "#" },
];

<ResizableSidebar items={menuItems} header="My App" />`}
        >
          <div className="h-80 border rounded-lg overflow-hidden">
            <ResizableSidebar items={menuItems} header="My App" />
          </div>
        </Preview>
      </Section>

      {/* Initially Collapsed */}
      <Section title="Initially Collapsed">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            defaultCollapsed
          </code>{" "}
          to render the sidebar in its icon-only state on mount. Users can expand it by clicking the toggle.
        </p>
        <Preview
          code={`<ResizableSidebar
  items={menuItems}
  header="My App"
  defaultCollapsed
/>`}
        >
          <div className="h-80 border rounded-lg overflow-hidden">
            <ResizableSidebar items={menuItems} header="My App" defaultCollapsed />
          </div>
        </Preview>
      </Section>

      {/* Without Search */}
      <Section title="Without Search">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showSearch
          </code>{" "}
          to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            false
          </code>{" "}
          to hide the search input when your navigation list is short enough that filtering is unnecessary.
        </p>
        <Preview
          code={`<ResizableSidebar
  items={menuItems}
  header="My App"
  showSearch={false}
/>`}
        >
          <div className="h-80 border rounded-lg overflow-hidden">
            <ResizableSidebar items={menuItems} header="My App" showSearch={false} />
          </div>
        </Preview>
      </Section>

      {/* Non-Resizable */}
      <Section title="Non-Resizable">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            resizable
          </code>{" "}
          to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            false
          </code>{" "}
          to lock the sidebar at its default width and remove the drag handle.
        </p>
        <Preview
          code={`<ResizableSidebar
  items={menuItems}
  header="My App"
  resizable={false}
/>`}
        >
          <div className="h-80 border rounded-lg overflow-hidden">
            <ResizableSidebar items={menuItems} header="My App" resizable={false} />
          </div>
        </Preview>
      </Section>

      {/* With Footer */}
      <Section title="With Footer">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            footer
          </code>{" "}
          prop to render content at the bottom of the sidebar, such as user info or a logout action.
        </p>
        <Preview
          code={`<ResizableSidebar
  items={menuItems}
  header="My App"
  footer={
    <div style={{ padding: "12px 16px", borderTop: "1px solid #e5e7eb", fontSize: 13 }}>
      <p style={{ fontWeight: 600 }}>John Doe</p>
      <p style={{ color: "#9ca3af" }}>john@example.com</p>
    </div>
  }
/>`}
        >
          <div className="h-80 border rounded-lg overflow-hidden">
            <ResizableSidebar
              items={menuItems}
              header="My App"
              footer={
                <div style={{ padding: "12px 16px", borderTop: "1px solid #e5e7eb", fontSize: 13 }}>
                  <p style={{ fontWeight: 600 }}>John Doe</p>
                  <p style={{ color: "#9ca3af" }}>john@example.com</p>
                </div>
              }
            />
          </div>
        </Preview>
      </Section>

      {/* Callbacks */}
      <Section title="Callbacks">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onCollapse
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onResize
          </code>{" "}
          to respond to layout changes. Great for persisting user preferences or adjusting adjacent content.
        </p>
        <Preview
          code={`const [collapseLog, setCollapseLog] = useState("");
const [resizeLog, setResizeLog] = useState("");

<ResizableSidebar
  items={menuItems}
  header="My App"
  onCollapse={(collapsed) =>
    setCollapseLog(\`Sidebar \${collapsed ? "collapsed" : "expanded"}\`)
  }
  onResize={(width) => setResizeLog(\`Width: \${width}px\`)}
/>
<p>Collapse: {collapseLog}</p>
<p>Resize: {resizeLog}</p>`}
        >
          <div className="h-80 border rounded-lg overflow-hidden">
            <ResizableSidebar
              items={menuItems}
              header="My App"
              onCollapse={(collapsed) =>
                setCollapseLog(`Sidebar ${collapsed ? "collapsed" : "expanded"}`)
              }
              onResize={(width) => setResizeLog(`Width: ${width}px`)}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Collapse: {collapseLog || "—"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Resize: {resizeLog || "—"}
          </p>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
