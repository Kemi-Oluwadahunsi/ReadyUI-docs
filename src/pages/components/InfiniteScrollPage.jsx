import { useState, useCallback } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { InfiniteScroll } from "readyui-react";

const props = [
  {
    name: "items",
    type: "Array",
    default: "[]",
    description:
      "The array of data items to render inside the scrollable container. Each item is passed to the renderItem function for custom rendering.",
  },
  {
    name: "renderItem",
    type: "Function",
    default: "—",
    description:
      "A render function called for each item in the array. Receives the item and its index as arguments and should return a React element.",
    required: true,
  },
  {
    name: "loadMore",
    type: "Function",
    default: "—",
    description:
      "Callback function triggered when the user scrolls near the bottom of the container and more data should be fetched. This is the core function that drives infinite loading behavior.",
    required: true,
  },
  {
    name: "hasMore",
    type: "boolean",
    default: "true",
    description:
      "Indicates whether additional data is available to load. When set to false, the loadMore callback will no longer fire and the end message is displayed.",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description:
      "Controls the visibility of the loading indicator at the bottom of the list. Set this to true while a fetch is in progress to show the loader.",
  },
  {
    name: "threshold",
    type: "number",
    default: "200",
    description:
      "The distance in pixels from the bottom of the scrollable area at which the loadMore callback is triggered. Increase this value to start loading earlier.",
  },
  {
    name: "loader",
    type: "ReactNode",
    default: "—",
    description:
      "Custom React element to display as the loading indicator while new data is being fetched. Defaults to a built-in spinner if not provided.",
  },
  {
    name: "endMessage",
    type: "ReactNode",
    default: "—",
    description:
      "Content displayed at the bottom of the list when hasMore is false, indicating that all available data has been loaded.",
  },
  {
    name: "errorMessage",
    type: "ReactNode",
    default: "—",
    description:
      "Content displayed when an error occurs during data fetching. Useful for showing retry buttons or error descriptions.",
  },
  {
    name: "showScrollTop",
    type: "boolean",
    default: "true",
    description:
      "When enabled, a floating scroll-to-top button appears after the user scrolls past a certain point, allowing them to quickly return to the top.",
  },
  {
    name: "scrollTopAt",
    type: "number",
    default: "400",
    description:
      "The scroll distance in pixels after which the scroll-to-top button becomes visible. Only applies when showScrollTop is true.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the outermost scroll container for custom styling.",
  },
  {
    name: "itemClassName",
    type: "string",
    default: '""',
    description:
      "CSS class names applied to each individual item wrapper element inside the list.",
  },
  {
    name: "height",
    type: "number",
    default: "—",
    description:
      "Sets a fixed height in pixels for the scroll container, turning it into a scrollable box instead of using the window scroll.",
  },
  {
    name: "width",
    type: "number",
    default: "—",
    description:
      "Sets a fixed width in pixels for the scroll container. Useful when constraining the list to a specific layout region.",
  },
  {
    name: "style",
    type: "Object",
    default: "—",
    description:
      "Inline style object applied directly to the scroll container for quick style overrides without needing a class name.",
  },
  {
    name: "skeletonCount",
    type: "number",
    default: "3",
    description:
      "The number of skeleton placeholder elements to show while the initial data is loading. Works with the renderSkeleton prop.",
  },
  {
    name: "renderSkeleton",
    type: "Function",
    default: "—",
    description:
      "A render function that returns a custom skeleton placeholder element. Called skeletonCount times during initial loading state.",
  },
  {
    name: "itemKey",
    type: "Function",
    default: "—",
    description:
      "A function that returns a unique key for each item, receiving the item and index as arguments. Helps React efficiently update the list.",
  },
];

function BasicDemo() {
  const [items, setItems] = useState(
    Array.from({ length: 15 }, (_, i) => ({ id: i + 1, title: `Item ${i + 1}` }))
  );
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setItems((prev) => {
        const next = Array.from({ length: 10 }, (_, i) => ({
          id: prev.length + i + 1,
          title: `Item ${prev.length + i + 1}`,
        }));
        const updated = [...prev, ...next];
        if (updated.length >= 50) setHasMore(false);
        return updated;
      });
      setLoading(false);
    }, 800);
  }, []);

  return (
    <InfiniteScroll
      items={items}
      renderItem={(item) => (
        <div className="p-4 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800">
          <p className="text-gray-800 dark:text-gray-200 font-medium">{item.title}</p>
        </div>
      )}
      loadMore={loadMore}
      hasMore={hasMore}
      loading={loading}
      height={400}
      itemKey={(item) => item.id}
      endMessage={
        <p className="text-center text-gray-500 dark:text-gray-400 py-4">You have reached the end!</p>
      }
    />
  );
}

function CustomEndDemo() {
  const [items] = useState(
    Array.from({ length: 10 }, (_, i) => ({ id: i + 1, title: `Record ${i + 1}` }))
  );

  return (
    <InfiniteScroll
      items={items}
      renderItem={(item) => (
        <div className="p-3 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800">
          <p className="text-gray-800 dark:text-gray-200">{item.title}</p>
        </div>
      )}
      loadMore={() => {}}
      hasMore={false}
      height={300}
      itemKey={(item) => item.id}
      endMessage={
        <div className="text-center py-6">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">🎉 All caught up!</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">No more items to load.</p>
        </div>
      }
    />
  );
}

export default function InfiniteScrollPage() {
  return (
    <ComponentPage
      name="InfiniteScroll"
      description="Automatically loads more content as the user scrolls, with configurable loading states, skeleton placeholders, scroll-to-top, and fixed height containers."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { InfiniteScroll } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Provide an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            items
          </code>{" "}
          array,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            renderItem
          </code>{" "}
          function, and a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            loadMore
          </code>{" "}
          callback. The component triggers loading when the user scrolls near the
          bottom of the container.
        </p>
        <Preview
          code={`const [items, setItems] = useState(
  Array.from({ length: 15 }, (_, i) => ({ id: i + 1, title: \`Item \${i + 1}\` }))
);
const [hasMore, setHasMore] = useState(true);
const [loading, setLoading] = useState(false);

const loadMore = useCallback(() => {
  setLoading(true);
  setTimeout(() => {
    setItems((prev) => {
      const next = Array.from({ length: 10 }, (_, i) => ({
        id: prev.length + i + 1,
        title: \`Item \${prev.length + i + 1}\`,
      }));
      const updated = [...prev, ...next];
      if (updated.length >= 50) setHasMore(false);
      return updated;
    });
    setLoading(false);
  }, 800);
}, []);

<InfiniteScroll
  items={items}
  renderItem={(item) => (
    <div className="p-4 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800">
      <p className="text-gray-800 dark:text-gray-200 font-medium">{item.title}</p>
    </div>
  )}
  loadMore={loadMore}
  hasMore={hasMore}
  loading={loading}
  height={400}
  itemKey={(item) => item.id}
  endMessage={
    <p className="text-center text-gray-500 py-4">You have reached the end!</p>
  }
/>`}
        >
          <BasicDemo />
        </Preview>
      </Section>

      {/* Custom End Message */}
      <Section title="Custom End Message">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            endMessage
          </code>{" "}
          prop to display a custom message when all data has been loaded. This appears
          at the bottom of the list when{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            hasMore
          </code>{" "}
          is false.
        </p>
        <Preview
          code={`<InfiniteScroll
  items={items}
  renderItem={(item) => (
    <div className="p-3 border border-gray-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800">
      <p className="text-gray-800 dark:text-gray-200">{item.title}</p>
    </div>
  )}
  loadMore={() => {}}
  hasMore={false}
  height={300}
  itemKey={(item) => item.id}
  endMessage={
    <div className="text-center py-6">
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">🎉 All caught up!</p>
      <p className="text-sm text-gray-500 mt-1">No more items to load.</p>
    </div>
  }
/>`}
        >
          <CustomEndDemo />
        </Preview>
      </Section>

      {/* Fixed Height Container */}
      <Section title="Fixed Height Container">
        <p className="text-gray-600 dark:text-gray-400">
          Set a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            height
          </code>{" "}
          prop to constrain the scroll area to a fixed box. Without it, the component
          uses the window scroll by default.
        </p>
        <Preview
          code={`<InfiniteScroll
  items={items}
  renderItem={(item) => (
    <div className="p-4 border rounded-lg">{item.title}</div>
  )}
  loadMore={loadMore}
  hasMore={hasMore}
  loading={loading}
  height={350}
  itemKey={(item) => item.id}
/>`}
        >
          <BasicDemo />
        </Preview>
      </Section>

      {/* Scroll To Top */}
      <Section title="Scroll To Top">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showScrollTop
          </code>{" "}
          prop enables a floating button that appears after scrolling past{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            scrollTopAt
          </code>{" "}
          pixels, allowing users to quickly jump back to the top of the list.
        </p>
        <Preview
          code={`<InfiniteScroll
  items={items}
  renderItem={(item) => (
    <div className="p-4 border rounded-lg">{item.title}</div>
  )}
  loadMore={loadMore}
  hasMore={hasMore}
  loading={loading}
  height={400}
  showScrollTop={true}
  scrollTopAt={200}
  itemKey={(item) => item.id}
/>`}
        >
          <BasicDemo />
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
