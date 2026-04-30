import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Pagination } from "readyui-react";

const props = [
  {
    name: "currentPage",
    type: "number",
    default: "1",
    description:
      "The currently active page number. Use this with onPageChange to create a fully controlled pagination component.",
  },
  {
    name: "totalPages",
    type: "number",
    default: "1",
    description:
      "The total number of pages available. Determines the range of page numbers displayed and whether navigation controls are enabled.",
  },
  {
    name: "onPageChange",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked when the user navigates to a different page. Receives the new page number as its argument.",
  },
  {
    name: "siblingCount",
    type: "number",
    default: "1",
    description:
      "Controls how many page numbers are shown on each side of the current page. Increase this to display more page buttons around the active page.",
  },
  {
    name: "showFirstLast",
    type: "boolean",
    default: "true",
    description:
      "When enabled, renders buttons to jump directly to the first and last pages, allowing quick navigation in datasets with many pages.",
  },
  {
    name: "showPrevNext",
    type: "boolean",
    default: "true",
    description:
      "When enabled, renders previous and next navigation buttons alongside the page numbers for sequential page traversal.",
  },
  {
    name: "showPageSize",
    type: "boolean",
    default: "false",
    description:
      "When enabled, displays a dropdown selector that lets users choose how many items to show per page from the pageSizeOptions list.",
  },
  {
    name: "pageSizeOptions",
    type: "number[]",
    default: "[10, 20, 50, 100]",
    description:
      "An array of available page size values shown in the page size dropdown. Only visible when showPageSize is enabled.",
  },
  {
    name: "pageSize",
    type: "number",
    default: "—",
    description:
      "The currently selected number of items per page. Used with onPageSizeChange for controlled page size management.",
  },
  {
    name: "onPageSizeChange",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked when the user selects a different page size from the dropdown. Receives the new page size number.",
  },
  {
    name: "showJumpTo",
    type: "boolean",
    default: "false",
    description:
      "When enabled, renders an input field that allows users to jump directly to a specific page number by typing it in.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      'Controls the size of the pagination buttons and text. "sm" is compact for dense UIs, "md" is the standard size, and "lg" is larger for prominent navigation.',
  },
  {
    name: "variant",
    type: '"default" | "outlined" | "minimal"',
    default: '"default"',
    description:
      "Controls the visual style of the pagination buttons. Choose a variant that matches your application's design language.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description:
      "Disables all pagination controls, preventing any user interaction. The component appears visually muted to indicate its inactive state.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names to apply to the pagination container for custom styling overrides.",
  },
];

export default function PaginationPage() {
  const [page, setPage] = useState(1);
  const [pageSizePage, setPageSizePage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [jumpPage, setJumpPage] = useState(1);

  return (
    <ComponentPage
      name="Pagination"
      description="A flexible pagination component for navigating through paged content. Supports first/last buttons, page size selection, jump-to-page input, and multiple sizes and variants."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { Pagination } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Provide{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            currentPage
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            totalPages
          </code>
          , and an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onPageChange
          </code>{" "}
          handler to render a basic pagination control with previous/next
          buttons and page numbers.
        </p>
        <Preview
          code={`const [page, setPage] = useState(1);

<Pagination
  currentPage={page}
  totalPages={20}
  onPageChange={setPage}
/>`}
        >
          <Pagination
            currentPage={page}
            totalPages={20}
            onPageChange={setPage}
          />
        </Preview>
      </Section>

      {/* With Page Size Selector */}
      <Section title="With Page Size Selector">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showPageSize
          </code>{" "}
          to let users choose how many items to display per page. Combine with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            pageSize
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onPageSizeChange
          </code>{" "}
          for controlled behavior.
        </p>
        <Preview
          code={`const [page, setPage] = useState(1);
const [pageSize, setPageSize] = useState(10);

<Pagination
  currentPage={page}
  totalPages={50}
  onPageChange={setPage}
  showPageSize
  pageSize={pageSize}
  onPageSizeChange={setPageSize}
  pageSizeOptions={[10, 25, 50, 100]}
/>`}
        >
          <Pagination
            currentPage={pageSizePage}
            totalPages={50}
            onPageChange={setPageSizePage}
            showPageSize
            pageSize={pageSize}
            onPageSizeChange={setPageSize}
            pageSizeOptions={[10, 25, 50, 100]}
          />
        </Preview>
      </Section>

      {/* Jump To Page */}
      <Section title="Jump To Page">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showJumpTo
          </code>{" "}
          to render an input field that allows users to type a specific page
          number and jump directly to it, which is especially helpful for
          navigating large datasets.
        </p>
        <Preview
          code={`const [page, setPage] = useState(1);

<Pagination
  currentPage={page}
  totalPages={100}
  onPageChange={setPage}
  showJumpTo
/>`}
        >
          <Pagination
            currentPage={jumpPage}
            totalPages={100}
            onPageChange={setJumpPage}
            showJumpTo
          />
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            size
          </code>{" "}
          prop controls the button dimensions and text size. Choose a size that
          fits your layout density.
        </p>
        <Preview
          code={`<div className="space-y-4">
  <Pagination currentPage={5} totalPages={20} size="sm" />
  <Pagination currentPage={5} totalPages={20} size="md" />
  <Pagination currentPage={5} totalPages={20} size="lg" />
</div>`}
        >
          <div className="space-y-4">
            <Pagination currentPage={5} totalPages={20} size="sm" />
            <Pagination currentPage={5} totalPages={20} size="md" />
            <Pagination currentPage={5} totalPages={20} size="lg" />
          </div>
        </Preview>
      </Section>

      {/* Disabled State */}
      <Section title="Disabled State">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            disabled
          </code>{" "}
          to prevent all interaction. The pagination buttons appear visually
          muted to indicate the inactive state.
        </p>
        <Preview
          code={`<Pagination
  currentPage={3}
  totalPages={10}
  disabled
/>`}
        >
          <Pagination
            currentPage={3}
            totalPages={10}
            disabled
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
