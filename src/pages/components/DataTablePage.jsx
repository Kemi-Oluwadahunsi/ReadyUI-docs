import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { DataTable } from "readyui-react";

const sampleData = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Martinez", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Carol Williams", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "David Chen", email: "david@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Eva Thompson", email: "eva@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Frank Garcia", email: "frank@example.com", role: "Viewer", status: "Inactive" },
  { id: 7, name: "Grace Lee", email: "grace@example.com", role: "Editor", status: "Active" },
  { id: 8, name: "Henry Wilson", email: "henry@example.com", role: "Viewer", status: "Active" },
];

const basicColumns = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email", sortable: true },
  { key: "role", label: "Role", sortable: true },
  { key: "status", label: "Status", sortable: true },
];

const props = [
  {
    name: "columns",
    type: "Array<{ key, label, sortable?, width?, render? }>",
    default: "[]",
    description:
      "An array of column definition objects. Each object requires a key (matching a data field) and a label (displayed header text). Optionally include sortable to enable column sorting, width for fixed widths, and render for custom cell rendering functions.",
  },
  {
    name: "data",
    type: "Array<object>",
    default: "[]",
    description:
      "The array of row data objects to display in the table. Each object should contain keys that correspond to the column key definitions.",
  },
  {
    name: "searchable",
    type: "boolean",
    default: "true",
    description:
      "When enabled, renders a search input above the table that filters rows across all columns in real time as the user types.",
  },
  {
    name: "paginated",
    type: "boolean",
    default: "true",
    description:
      "When enabled, the table splits data across pages and renders pagination controls below the table body.",
  },
  {
    name: "pageSize",
    type: "number",
    default: "10",
    description:
      "The number of rows displayed per page when pagination is enabled. Adjustable by the user if pageSizeOptions are provided.",
  },
  {
    name: "pageSizeOptions",
    type: "number[]",
    default: "[5, 10, 20, 50]",
    description:
      "An array of page size options shown in a dropdown, allowing the user to control how many rows are visible per page.",
  },
  {
    name: "selectable",
    type: "boolean",
    default: "false",
    description:
      "When enabled, adds a checkbox column to the table allowing users to select individual rows or all rows at once.",
  },
  {
    name: "onSelectionChange",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked when the row selection changes. Receives an array of the currently selected row objects.",
  },
  {
    name: "onRowClick",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked when a table row is clicked. Receives the clicked row data object and its index.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names to apply to the table container for custom styling overrides.",
  },
  {
    name: "emptyMessage",
    type: "string",
    default: '"No data available"',
    description:
      "The message displayed when the table has no data or when a search query returns no matching results.",
  },
  {
    name: "striped",
    type: "boolean",
    default: "true",
    description:
      "Applies alternating row background colors for improved readability when scanning large datasets.",
  },
  {
    name: "hoverable",
    type: "boolean",
    default: "true",
    description:
      "When enabled, rows highlight on mouse hover to provide visual feedback and help users track which row they are looking at.",
  },
  {
    name: "stickyHeader",
    type: "boolean",
    default: "true",
    description:
      "Keeps the table header fixed at the top while the body scrolls, ensuring column labels remain visible in long tables.",
  },
  {
    name: "rowKey",
    type: "Function",
    default: "—",
    description:
      "A function that returns a unique key for each row. Receives the row object and should return a string or number. Falls back to the row index if not provided.",
  },
];

const dataString = `const data = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Martinez", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Carol Williams", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "David Chen", email: "david@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Eva Thompson", email: "eva@example.com", role: "Admin", status: "Active" },
  { id: 6, name: "Frank Garcia", email: "frank@example.com", role: "Viewer", status: "Inactive" },
  { id: 7, name: "Grace Lee", email: "grace@example.com", role: "Editor", status: "Active" },
  { id: 8, name: "Henry Wilson", email: "henry@example.com", role: "Viewer", status: "Active" },
];`;

export default function DataTablePage() {
  const [selected, setSelected] = useState([]);

  return (
    <ComponentPage
      name="DataTable"
      description="A feature-rich data table with built-in search, sorting, pagination, row selection, and custom cell rendering. Ideal for displaying structured datasets with interactive controls."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { DataTable } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Provide{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            columns
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            data
          </code>{" "}
          to render a fully functional table with search and pagination enabled
          by default.
        </p>
        <Preview
          code={`${dataString}

const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email", sortable: true },
  { key: "role", label: "Role", sortable: true },
  { key: "status", label: "Status", sortable: true },
];

<DataTable columns={columns} data={data} />`}
        >
          <DataTable columns={basicColumns} data={sampleData} />
        </Preview>
      </Section>

      {/* Sorting */}
      <Section title="Sorting">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            sortable: true
          </code>{" "}
          on column definitions to allow users to sort by clicking the column
          header. Click again to toggle between ascending and descending order.
        </p>
        <Preview
          code={`const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email", sortable: true },
  { key: "role", label: "Role", sortable: true },
  { key: "status", label: "Status" },
];

<DataTable columns={columns} data={data} searchable={false} paginated={false} />`}
        >
          <DataTable
            columns={[
              { key: "name", label: "Name", sortable: true },
              { key: "email", label: "Email", sortable: true },
              { key: "role", label: "Role", sortable: true },
              { key: "status", label: "Status" },
            ]}
            data={sampleData}
            searchable={false}
            paginated={false}
          />
        </Preview>
      </Section>

      {/* Search */}
      <Section title="Search">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            searchable
          </code>{" "}
          prop (enabled by default) renders a search input that filters rows
          across all columns in real time. Try typing a name, email, or role.
        </p>
        <Preview
          code={`<DataTable
  columns={columns}
  data={data}
  searchable
  paginated={false}
/>`}
        >
          <DataTable
            columns={basicColumns}
            data={sampleData}
            searchable
            paginated={false}
          />
        </Preview>
      </Section>

      {/* Pagination */}
      <Section title="Pagination">
        <p className="text-gray-600 dark:text-gray-400">
          Control how many rows are shown per page with the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            pageSize
          </code>{" "}
          prop. The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            pageSizeOptions
          </code>{" "}
          array lets users switch between different page sizes.
        </p>
        <Preview
          code={`<DataTable
  columns={columns}
  data={data}
  paginated
  pageSize={3}
  pageSizeOptions={[3, 5, 10]}
  searchable={false}
/>`}
        >
          <DataTable
            columns={basicColumns}
            data={sampleData}
            paginated
            pageSize={3}
            pageSizeOptions={[3, 5, 10]}
            searchable={false}
          />
        </Preview>
      </Section>

      {/* Row Selection */}
      <Section title="Row Selection">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            selectable
          </code>{" "}
          to add checkboxes for row selection. Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onSelectionChange
          </code>{" "}
          to track which rows are currently selected.
        </p>
        <Preview
          code={`const [selected, setSelected] = useState([]);

<div className="space-y-3">
  <DataTable
    columns={columns}
    data={data}
    selectable
    onSelectionChange={setSelected}
    paginated={false}
    searchable={false}
  />
  <p className="text-sm text-gray-500">
    Selected: {selected.length} row(s)
  </p>
</div>`}
        >
          <div className="space-y-3">
            <DataTable
              columns={basicColumns}
              data={sampleData}
              selectable
              onSelectionChange={setSelected}
              paginated={false}
              searchable={false}
            />
            <p className="text-sm text-gray-500">
              Selected: {selected.length} row(s)
            </p>
          </div>
        </Preview>
      </Section>

      {/* Custom Cell Render */}
      <Section title="Custom Cell Render">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            render
          </code>{" "}
          function in a column definition to customize how cell content is
          displayed. This is useful for rendering badges, buttons, or formatted
          content.
        </p>
        <Preview
          code={`const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  {
    key: "status",
    label: "Status",
    render: (value) => (
      <span
        className={\`px-2 py-1 rounded-full text-xs font-medium \${
          value === "Active"
            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
            : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
        }\`}
      >
        {value}
      </span>
    ),
  },
];

<DataTable columns={columns} data={data} paginated={false} searchable={false} />`}
        >
          <DataTable
            columns={[
              { key: "name", label: "Name", sortable: true },
              { key: "email", label: "Email" },
              { key: "role", label: "Role" },
              {
                key: "status",
                label: "Status",
                render: (value) => (
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      value === "Active"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {value}
                  </span>
                ),
              },
            ]}
            data={sampleData}
            paginated={false}
            searchable={false}
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
