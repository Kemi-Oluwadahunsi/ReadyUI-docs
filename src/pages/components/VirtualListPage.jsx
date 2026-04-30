import { useState, useCallback } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { VirtualList } from "readyui-react";

const props = [
  {
    name: "items",
    type: "Array",
    default: "[]",
    required: true,
    description:
      "The full array of data items to virtualize. Only the visible subset is rendered in the DOM at any time, regardless of the total array length.",
  },
  {
    name: "itemHeight",
    type: "number",
    default: "60",
    description:
      "The fixed height of each item row in pixels. The component uses this value to calculate scroll positions and determine which items are currently visible.",
  },
  {
    name: "height",
    type: "number",
    default: "500",
    description:
      "The height of the scrollable viewport container in pixels. This defines how many items are visible at once based on the itemHeight.",
  },
  {
    name: "overscan",
    type: "number",
    default: "5",
    description:
      "The number of extra items rendered above and below the visible area. Higher values reduce flicker during fast scrolling but render more DOM nodes.",
  },
  {
    name: "renderItem",
    type: "Function",
    default: "—",
    required: true,
    description:
      "A render function called for each visible item. Receives the item object and its index as arguments. Must return a ReactNode representing the row content.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the outer scrollable container for custom styling or layout overrides.",
  },
  {
    name: "onEndReached",
    type: "Function",
    default: "—",
    description:
      "Callback fired when the user scrolls near the bottom of the list, within the endReachedThreshold distance. Use this for infinite scroll patterns to load more data.",
  },
  {
    name: "endReachedThreshold",
    type: "number",
    default: "200",
    description:
      "The distance in pixels from the bottom of the list at which the onEndReached callback fires. A larger value triggers loading earlier.",
  },
  {
    name: "showScrollbar",
    type: "boolean",
    default: "true",
    description:
      "Controls whether the native scrollbar is visible. Set to false for a cleaner look when custom scroll indicators are used.",
  },
];

const demoItems = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  title: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`,
}));

export default function VirtualListPage() {
  const [items, setItems] = useState(
    Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      title: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`,
    }))
  );
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(() => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setItems((prev) => {
        const start = prev.length;
        const newItems = Array.from({ length: 200 }, (_, i) => ({
          id: start + i,
          title: `Item ${start + i + 1}`,
          description: `Description for item ${start + i + 1}`,
        }));
        return [...prev, ...newItems];
      });
      setLoading(false);
    }, 500);
  }, [loading]);

  return (
    <ComponentPage
      name="VirtualList"
      description="A high-performance virtualized list that renders only the items currently visible in the viewport. Handles tens of thousands of items with smooth scrolling and minimal memory usage."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { VirtualList } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Generate a large dataset and pass it to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            items
          </code>
          . Provide a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            renderItem
          </code>{" "}
          function to define the row layout. Only visible rows are mounted in the DOM.
        </p>
        <Preview
          code={`const items = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  title: \`Item \${i + 1}\`,
  description: \`Description for item \${i + 1}\`,
}));

<VirtualList
  items={items}
  height={300}
  itemHeight={60}
  renderItem={(item, index) => (
    <div style={{
      padding: "10px 16px",
      borderBottom: "1px solid #e5e7eb",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <div>
        <div style={{ fontWeight: 500 }}>{item.title}</div>
        <div style={{ fontSize: 13, color: "#9ca3af" }}>{item.description}</div>
      </div>
      <span style={{ fontSize: 12, color: "#9ca3af" }}>#{index + 1}</span>
    </div>
  )}
/>`}
        >
          <VirtualList
            items={demoItems}
            height={300}
            itemHeight={60}
            renderItem={(item, index) => (
              <div
                style={{
                  padding: "10px 16px",
                  borderBottom: "1px solid #e5e7eb",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontWeight: 500 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#9ca3af" }}>
                    {item.description}
                  </div>
                </div>
                <span style={{ fontSize: 12, color: "#9ca3af" }}>
                  #{index + 1}
                </span>
              </div>
            )}
          />
        </Preview>
      </Section>

      {/* Custom Item Height */}
      <Section title="Custom Item Height">
        <p className="text-gray-600 dark:text-gray-400">
          Adjust{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            itemHeight
          </code>{" "}
          to match your row design. The component recalculates visible items and scroll positioning based on this value.
        </p>
        <Preview
          code={`<VirtualList
  items={items}
  height={300}
  itemHeight={80}
  renderItem={(item) => (
    <div style={{
      padding: "16px",
      borderBottom: "1px solid #e5e7eb",
    }}>
      <div style={{ fontWeight: 600, fontSize: 16 }}>{item.title}</div>
      <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 4 }}>
        {item.description}
      </div>
    </div>
  )}
/>`}
        >
          <VirtualList
            items={demoItems.slice(0, 5000)}
            height={300}
            itemHeight={80}
            renderItem={(item) => (
              <div
                style={{
                  padding: "16px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <div style={{ fontWeight: 600, fontSize: 16 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 4 }}>
                  {item.description}
                </div>
              </div>
            )}
          />
        </Preview>
      </Section>

      {/* Infinite Scroll */}
      <Section title="Infinite Scroll">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onEndReached
          </code>{" "}
          to load more data as the user scrolls near the bottom. The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            endReachedThreshold
          </code>{" "}
          controls how far from the bottom (in pixels) the callback fires.
        </p>
        <Preview
          code={`const [items, setItems] = useState(initialItems);
const [loading, setLoading] = useState(false);

const loadMore = () => {
  if (loading) return;
  setLoading(true);
  setTimeout(() => {
    setItems((prev) => [
      ...prev,
      ...Array.from({ length: 200 }, (_, i) => ({
        id: prev.length + i,
        title: \`Item \${prev.length + i + 1}\`,
        description: \`Description for item \${prev.length + i + 1}\`,
      })),
    ]);
    setLoading(false);
  }, 500);
};

<VirtualList
  items={items}
  height={300}
  itemHeight={60}
  onEndReached={loadMore}
  endReachedThreshold={300}
  renderItem={(item) => (
    <div style={{ padding: "10px 16px", borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ fontWeight: 500 }}>{item.title}</div>
      <div style={{ fontSize: 13, color: "#9ca3af" }}>{item.description}</div>
    </div>
  )}
/>`}
        >
          <div>
            <VirtualList
              items={items}
              height={300}
              itemHeight={60}
              onEndReached={loadMore}
              endReachedThreshold={300}
              renderItem={(item) => (
                <div
                  style={{
                    padding: "10px 16px",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <div style={{ fontWeight: 500 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#9ca3af" }}>
                    {item.description}
                  </div>
                </div>
              )}
            />
            <p className="text-xs text-gray-500 mt-2">
              {items.length} items loaded{loading ? " — loading more..." : ""}
            </p>
          </div>
        </Preview>
      </Section>

      {/* Hide Scrollbar */}
      <Section title="Hide Scrollbar">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showScrollbar
          </code>{" "}
          to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            false
          </code>{" "}
          for a cleaner look. The list remains scrollable via mouse wheel and touch gestures.
        </p>
        <Preview
          code={`<VirtualList
  items={items}
  height={300}
  itemHeight={60}
  showScrollbar={false}
  renderItem={(item) => (
    <div style={{ padding: "10px 16px", borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ fontWeight: 500 }}>{item.title}</div>
      <div style={{ fontSize: 13, color: "#9ca3af" }}>{item.description}</div>
    </div>
  )}
/>`}
        >
          <VirtualList
            items={demoItems.slice(0, 5000)}
            height={300}
            itemHeight={60}
            showScrollbar={false}
            renderItem={(item) => (
              <div
                style={{
                  padding: "10px 16px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <div style={{ fontWeight: 500 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#9ca3af" }}>
                  {item.description}
                </div>
              </div>
            )}
          />
        </Preview>
      </Section>

      {/* Performance Notes */}
      <Section title="Performance Notes">
        <p className="text-gray-600 dark:text-gray-400">
          VirtualList renders only the items visible in the viewport plus a small{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            overscan
          </code>{" "}
          buffer above and below. This means a list of 10,000 items might only mount 15–20 DOM nodes at any given time.
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
          <li>
            <strong>Fixed item height</strong> — Each row must have the same height specified via{" "}
            <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
              itemHeight
            </code>
            . Variable heights are not supported.
          </li>
          <li>
            <strong>Overscan tuning</strong> — Increase{" "}
            <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
              overscan
            </code>{" "}
            if you see blank rows during fast scrolling. A value of 5–10 works well for most use cases.
          </li>
          <li>
            <strong>Avoid inline objects</strong> — Define{" "}
            <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
              renderItem
            </code>{" "}
            outside the render cycle or memoize it with{" "}
            <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
              useCallback
            </code>{" "}
            to prevent unnecessary re-renders.
          </li>
          <li>
            <strong>Infinite loading</strong> — Combine{" "}
            <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
              onEndReached
            </code>{" "}
            with a loading guard to avoid duplicate fetch requests.
          </li>
        </ul>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
