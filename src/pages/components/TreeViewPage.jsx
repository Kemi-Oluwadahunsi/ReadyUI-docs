import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { TreeView } from "readyui-react";

const fileTree = [
  {
    id: "src",
    label: "src",
    children: [
      {
        id: "components",
        label: "components",
        children: [
          { id: "button", label: "Button.jsx" },
          { id: "modal", label: "Modal.jsx" },
          { id: "sidebar", label: "Sidebar.jsx" },
        ],
      },
      {
        id: "pages",
        label: "pages",
        children: [
          { id: "home", label: "Home.jsx" },
          { id: "about", label: "About.jsx" },
          { id: "contact", label: "Contact.jsx" },
        ],
      },
      {
        id: "utils",
        label: "utils",
        children: [
          { id: "helpers", label: "helpers.js" },
          { id: "constants", label: "constants.js" },
        ],
      },
      { id: "app", label: "App.jsx" },
      { id: "index", label: "index.js" },
    ],
  },
];

const treeDataString = `const fileTree = [
  {
    id: "src",
    label: "src",
    children: [
      {
        id: "components",
        label: "components",
        children: [
          { id: "button", label: "Button.jsx" },
          { id: "modal", label: "Modal.jsx" },
          { id: "sidebar", label: "Sidebar.jsx" },
        ],
      },
      {
        id: "pages",
        label: "pages",
        children: [
          { id: "home", label: "Home.jsx" },
          { id: "about", label: "About.jsx" },
          { id: "contact", label: "Contact.jsx" },
        ],
      },
      {
        id: "utils",
        label: "utils",
        children: [
          { id: "helpers", label: "helpers.js" },
          { id: "constants", label: "constants.js" },
        ],
      },
      { id: "app", label: "App.jsx" },
      { id: "index", label: "index.js" },
    ],
  },
];`;

const props = [
  {
    name: "data",
    type: "Array<{ id, label, children?, icon? }>",
    default: "[]",
    description:
      "The hierarchical data structure to render. Each node requires a unique id and a label. Nest nodes using the children array to create tree levels. Optionally provide an icon for each node.",
  },
  {
    name: "onSelect",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked when a tree node is selected. Receives the selected node object (or array of nodes in multi-select mode).",
  },
  {
    name: "multiSelect",
    type: "boolean",
    default: "false",
    description:
      "When enabled, allows the user to select multiple nodes simultaneously. Selection state is toggled independently for each node.",
  },
  {
    name: "showCheckboxes",
    type: "boolean",
    default: "false",
    description:
      "Renders a checkbox next to each tree node, providing a clear visual indicator of selection state. Works especially well with multi-select mode.",
  },
  {
    name: "defaultExpanded",
    type: "string[]",
    default: "[]",
    description:
      "An array of node IDs that should be expanded on initial render. Use this to show specific branches of the tree opened by default.",
  },
  {
    name: "defaultSelected",
    type: "string[]",
    default: "[]",
    description:
      "An array of node IDs that should be selected on initial render. Useful for restoring a previous selection state.",
  },
  {
    name: "expandOnSelect",
    type: "boolean",
    default: "true",
    description:
      "When true, clicking a parent node both selects it and toggles its expanded/collapsed state. Set to false to require clicking the expand icon separately.",
  },
  {
    name: "renderLabel",
    type: "Function",
    default: "—",
    description:
      "A custom render function for node labels. Receives the node object and allows you to render custom content, such as icons, badges, or formatted text alongside the label.",
  },
  {
    name: "showIcons",
    type: "boolean",
    default: "true",
    description:
      "When enabled, displays default folder and file icons next to tree nodes. Parent nodes show folder icons and leaf nodes show file icons.",
  },
  {
    name: "showLines",
    type: "boolean",
    default: "true",
    description:
      "Renders visual guide lines between parent and child nodes to make the tree hierarchy easier to follow, especially for deeply nested structures.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      'Controls the overall size of the tree nodes including text, icons, and spacing. "sm" is compact, "md" is standard, and "lg" provides generous spacing for touch targets.',
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names to apply to the tree container for custom styling overrides.",
  },
];

export default function TreeViewPage() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [multiSelected, setMultiSelected] = useState([]);

  return (
    <ComponentPage
      name="TreeView"
      description="A hierarchical tree component for displaying nested data structures like file systems, navigation menus, or organizational charts. Supports expand/collapse, single and multi-select, checkboxes, and custom icons."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { TreeView } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a nested{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            data
          </code>{" "}
          array to render the tree structure. Each node with a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            children
          </code>{" "}
          array becomes an expandable parent node. Click nodes to expand or
          collapse branches.
        </p>
        <Preview
          code={`${treeDataString}

<TreeView
  data={fileTree}
  onSelect={(node) => console.log("Selected:", node)}
/>`}
        >
          <TreeView
            data={fileTree}
            onSelect={(node) => setSelectedNode(node)}
          />
        </Preview>
      </Section>

      {/* Multi-Select with Checkboxes */}
      <Section title="Multi-Select with Checkboxes">
        <p className="text-gray-600 dark:text-gray-400">
          Combine{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            multiSelect
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showCheckboxes
          </code>{" "}
          to allow users to select multiple nodes with clear visual indicators.
        </p>
        <Preview
          code={`const [selected, setSelected] = useState([]);

<div className="space-y-3">
  <TreeView
    data={fileTree}
    multiSelect
    showCheckboxes
    onSelect={(nodes) => setSelected(nodes)}
  />
  <p className="text-sm text-gray-500">
    Selected: {selected.length} node(s)
  </p>
</div>`}
        >
          <div className="space-y-3">
            <TreeView
              data={fileTree}
              multiSelect
              showCheckboxes
              onSelect={(nodes) => setMultiSelected(nodes)}
            />
            <p className="text-sm text-gray-500">
              Selected: {multiSelected.length} node(s)
            </p>
          </div>
        </Preview>
      </Section>

      {/* Default Expanded */}
      <Section title="Default Expanded">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            defaultExpanded
          </code>{" "}
          to specify which branches should be open on initial render. Pass an
          array of node IDs to expand specific parts of the tree.
        </p>
        <Preview
          code={`<TreeView
  data={fileTree}
  defaultExpanded={["src", "components", "pages"]}
/>`}
        >
          <TreeView
            data={fileTree}
            defaultExpanded={["src", "components", "pages"]}
          />
        </Preview>
      </Section>

      {/* Custom Icons */}
      <Section title="Custom Icons">
        <p className="text-gray-600 dark:text-gray-400">
          Pass an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            icon
          </code>{" "}
          property on individual nodes to customize their icons, or use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showIcons
          </code>{" "}
          to toggle default folder/file icons on or off.
        </p>
        <Preview
          code={`<div className="space-y-4">
  <div>
    <p className="text-sm text-gray-500 mb-2">With icons (default)</p>
    <TreeView data={fileTree} showIcons defaultExpanded={["src"]} />
  </div>
  <div>
    <p className="text-sm text-gray-500 mb-2">Without icons</p>
    <TreeView data={fileTree} showIcons={false} defaultExpanded={["src"]} />
  </div>
</div>`}
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">With icons (default)</p>
              <TreeView data={fileTree} showIcons defaultExpanded={["src"]} />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Without icons</p>
              <TreeView data={fileTree} showIcons={false} defaultExpanded={["src"]} />
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
