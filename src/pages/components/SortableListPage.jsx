import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { SortableList } from "readyui-react";

const props = [
  {
    name: "items",
    type: "Array",
    default: "[]",
    description:
      "An array of objects representing the sortable items. Each object should have a unique identifier that the component uses to track position changes during reordering.",
    required: true,
  },
  {
    name: "onReorder",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked after a drag-and-drop operation completes. Receives the newly ordered array as its argument, allowing you to update your state with the new order.",
    required: true,
  },
  {
    name: "renderItem",
    type: "Function",
    default: "—",
    description:
      "A render function called for each item in the list. Receives the item object and its current index, and should return the React element representing that item's content.",
    required: true,
  },
  {
    name: "showHandle",
    type: "boolean",
    default: "true",
    description:
      "When true, displays a drag handle icon on each item. Users must grab the handle to initiate a drag. When false, the entire item surface becomes draggable.",
  },
  {
    name: "direction",
    type: '"vertical" | "horizontal"',
    default: '"vertical"',
    description:
      'Controls the layout direction of the sortable list. Use "vertical" for stacked lists and "horizontal" for side-by-side arrangements like tabs or image galleries.',
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description:
      "Disables all drag-and-drop interactions when set to true. Items will still render but cannot be reordered, useful for read-only or locked states.",
  },
  {
    name: "animationDuration",
    type: "number",
    default: "200",
    description:
      "Duration in milliseconds of the transition animation when items shift positions during a drag operation. Set to 0 for instant reordering.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the outermost container of the sortable list for custom layout and styling.",
  },
  {
    name: "itemClassName",
    type: "string",
    default: '""',
    description:
      "CSS class names applied to each individual sortable item wrapper, allowing you to control item-level spacing, borders, and backgrounds.",
  },
];

const defaultTasks = [
  { id: "1", label: "Design landing page mockups" },
  { id: "2", label: "Set up CI/CD pipeline" },
  { id: "3", label: "Write API documentation" },
  { id: "4", label: "Implement user authentication" },
  { id: "5", label: "Create database schema" },
];

function BasicSortableDemo() {
  const [items, setItems] = useState(defaultTasks);
  return (
    <SortableList
      items={items}
      onReorder={setItems}
      renderItem={(item) => (
        <div className="p-3 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg">
          <p className="text-gray-800 dark:text-gray-200 font-medium">{item.label}</p>
        </div>
      )}
    />
  );
}

function CustomRenderDemo() {
  const [items, setItems] = useState([
    { id: "a", label: "Research", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" },
    { id: "b", label: "Design", color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300" },
    { id: "c", label: "Develop", color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" },
    { id: "d", label: "Test", color: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300" },
    { id: "e", label: "Deploy", color: "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300" },
  ]);
  return (
    <SortableList
      items={items}
      onReorder={setItems}
      renderItem={(item, index) => (
        <div className={`p-4 rounded-lg flex items-center gap-3 ${item.color}`}>
          <span className="w-7 h-7 rounded-full bg-white/50 dark:bg-black/20 flex items-center justify-center text-sm font-bold">
            {index + 1}
          </span>
          <span className="font-semibold">{item.label}</span>
        </div>
      )}
    />
  );
}

function NoHandleDemo() {
  const [items, setItems] = useState(defaultTasks.slice(0, 4));
  return (
    <SortableList
      items={items}
      onReorder={setItems}
      showHandle={false}
      renderItem={(item) => (
        <div className="p-3 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg cursor-grab active:cursor-grabbing">
          <p className="text-gray-800 dark:text-gray-200">{item.label}</p>
        </div>
      )}
    />
  );
}

function HorizontalDemo() {
  const [items, setItems] = useState([
    { id: "1", label: "Mon" },
    { id: "2", label: "Tue" },
    { id: "3", label: "Wed" },
    { id: "4", label: "Thu" },
    { id: "5", label: "Fri" },
  ]);
  return (
    <SortableList
      items={items}
      onReorder={setItems}
      direction="horizontal"
      renderItem={(item) => (
        <div className="px-5 py-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg text-blue-700 dark:text-blue-300 font-medium text-center min-w-[70px]">
          {item.label}
        </div>
      )}
    />
  );
}

function DisabledDemo() {
  const [items, setItems] = useState(defaultTasks.slice(0, 3));
  return (
    <SortableList
      items={items}
      onReorder={setItems}
      disabled
      renderItem={(item) => (
        <div className="p-3 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-lg opacity-60">
          <p className="text-gray-500 dark:text-gray-400">{item.label}</p>
        </div>
      )}
    />
  );
}

export default function SortableListPage() {
  return (
    <ComponentPage
      name="SortableList"
      description="A drag-and-drop reorderable list with smooth animations, optional handles, and support for both vertical and horizontal layouts."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { SortableList } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            items
          </code>{" "}
          array and an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onReorder
          </code>{" "}
          callback to enable drag-and-drop sorting. Each item needs a unique{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            id
          </code>{" "}
          property.
        </p>
        <Preview
          code={`const [items, setItems] = useState([
  { id: "1", label: "Design landing page mockups" },
  { id: "2", label: "Set up CI/CD pipeline" },
  { id: "3", label: "Write API documentation" },
  { id: "4", label: "Implement user authentication" },
  { id: "5", label: "Create database schema" },
]);

<SortableList
  items={items}
  onReorder={setItems}
  renderItem={(item) => (
    <div className="p-3 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg">
      <p className="text-gray-800 dark:text-gray-200 font-medium">{item.label}</p>
    </div>
  )}
/>`}
        >
          <BasicSortableDemo />
        </Preview>
      </Section>

      {/* Custom Render Item */}
      <Section title="Custom Render Item">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            renderItem
          </code>{" "}
          function receives the item and its current index, letting you build rich,
          styled list items with numbers, icons, or colored backgrounds.
        </p>
        <Preview
          code={`const [items, setItems] = useState([
  { id: "a", label: "Research", color: "bg-blue-100 text-blue-700" },
  { id: "b", label: "Design", color: "bg-purple-100 text-purple-700" },
  { id: "c", label: "Develop", color: "bg-green-100 text-green-700" },
  { id: "d", label: "Test", color: "bg-amber-100 text-amber-700" },
  { id: "e", label: "Deploy", color: "bg-rose-100 text-rose-700" },
]);

<SortableList
  items={items}
  onReorder={setItems}
  renderItem={(item, index) => (
    <div className={\`p-4 rounded-lg flex items-center gap-3 \${item.color}\`}>
      <span className="w-7 h-7 rounded-full bg-white/50 flex items-center justify-center text-sm font-bold">
        {index + 1}
      </span>
      <span className="font-semibold">{item.label}</span>
    </div>
  )}
/>`}
        >
          <CustomRenderDemo />
        </Preview>
      </Section>

      {/* Without Handle */}
      <Section title="Without Handle">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showHandle
          </code>{" "}
          to false to make the entire item draggable. This is useful for simple lists
          where a dedicated grip icon is not needed.
        </p>
        <Preview
          code={`<SortableList
  items={items}
  onReorder={setItems}
  showHandle={false}
  renderItem={(item) => (
    <div className="p-3 bg-white dark:bg-zinc-800 border rounded-lg cursor-grab active:cursor-grabbing">
      <p className="text-gray-800 dark:text-gray-200">{item.label}</p>
    </div>
  )}
/>`}
        >
          <NoHandleDemo />
        </Preview>
      </Section>

      {/* Horizontal Direction */}
      <Section title="Horizontal Direction">
        <p className="text-gray-600 dark:text-gray-400">
          Switch to a horizontal layout by setting{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            direction
          </code>{" "}
          to &quot;horizontal&quot;. Great for tab ordering, image galleries, or priority lanes.
        </p>
        <Preview
          code={`<SortableList
  items={days}
  onReorder={setDays}
  direction="horizontal"
  renderItem={(item) => (
    <div className="px-5 py-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 font-medium text-center min-w-[70px]">
      {item.label}
    </div>
  )}
/>`}
        >
          <HorizontalDemo />
        </Preview>
      </Section>

      {/* Disabled */}
      <Section title="Disabled">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            disabled
          </code>{" "}
          to true to prevent any reordering interactions. Items are still rendered
          normally but cannot be dragged.
        </p>
        <Preview
          code={`<SortableList
  items={items}
  onReorder={setItems}
  disabled
  renderItem={(item) => (
    <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg opacity-60">
      <p className="text-gray-500">{item.label}</p>
    </div>
  )}
/>`}
        >
          <DisabledDemo />
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
