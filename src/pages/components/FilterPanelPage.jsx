import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { FilterPanel } from "readyui-react";

const basicFilters = {
  category: {
    label: "Category",
    type: "select",
    options: [
      { label: "Electronics", value: "electronics" },
      { label: "Clothing", value: "clothing" },
      { label: "Books", value: "books" },
      { label: "Home & Garden", value: "home" },
    ],
  },
  rating: {
    label: "Rating",
    type: "single",
    variant: "chips",
    options: [
      { label: "⭐ 4+", value: "4" },
      { label: "⭐ 3+", value: "3" },
      { label: "⭐ 2+", value: "2" },
    ],
  },
  inStock: {
    label: "In Stock Only",
    type: "toggle",
  },
};

const typeFilters = {
  size: {
    label: "Size",
    type: "select",
    options: [
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
      { label: "X-Large", value: "xl" },
    ],
  },
  brand: {
    label: "Brand",
    type: "single",
    variant: "radio",
    options: [
      { label: "Nike", value: "nike" },
      { label: "Adidas", value: "adidas" },
      { label: "Puma", value: "puma" },
    ],
  },
  features: {
    label: "Features",
    type: "multiple",
    variant: "checkbox",
    options: [
      { label: "Waterproof", value: "waterproof" },
      { label: "Breathable", value: "breathable" },
      { label: "Lightweight", value: "lightweight" },
      { label: "Recycled Materials", value: "recycled" },
    ],
  },
  onSale: {
    label: "On Sale",
    type: "toggle",
  },
};

const segmentedFilters = {
  view: {
    label: "View Mode",
    type: "single",
    variant: "segmented",
    options: [
      { label: "Grid", value: "grid" },
      { label: "List", value: "list" },
      { label: "Table", value: "table" },
    ],
  },
  sort: {
    label: "Sort By",
    type: "select",
    options: [
      { label: "Newest", value: "newest" },
      { label: "Price: Low to High", value: "price-asc" },
      { label: "Price: High to Low", value: "price-desc" },
      { label: "Most Popular", value: "popular" },
    ],
  },
};

const props = [
  { name: "filters", type: "Object | Array", default: "{}", required: true, description: "Defines the filter configuration. Each key maps to a filter with label, type, options, and optional variant. Supported types are \"select\", \"single\", \"multiple\", and \"toggle\". Variants include \"dropdown\", \"chips\", \"radio\", \"checkbox\", \"segmented\", and \"inline\"." },
  { name: "value", type: "Object", default: "—", description: "The current filter values for controlled mode. Each key corresponds to a filter key and its selected value(s). When provided, the component becomes fully controlled and you must update this via onChange." },
  { name: "onChange", type: "(values: Object) => void", default: "—", description: "Callback fired whenever any filter value changes. Receives the complete updated values object containing all filter keys and their current selections." },
  { name: "initialValue", type: "Object", default: "{}", description: "Sets the initial filter values for uncontrolled mode. Only applied on first render. Use this when you want the panel to manage its own state internally." },
  { name: "layout", type: '"horizontal" | "vertical" | "inline"', default: '"horizontal"', description: "Controls the arrangement of filter controls. \"horizontal\" places filters in a row, \"vertical\" stacks them in a column, and \"inline\" renders them compactly in a single flowing line." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the outer filter panel container for custom layout or styling overrides." },
  { name: "showActiveCount", type: "boolean", default: "true", description: "When true, displays a badge showing the number of currently active filters beside the panel title. Useful for indicating how many filters are applied at a glance." },
  { name: "clearAllLabel", type: "string", default: '"Clear all"', description: "The text label for the button that resets all filters to their default empty state. Customize this for localization or UX preferences." },
  { name: "showHeader", type: "boolean", default: "true", description: "Whether to render the panel header containing the title, active count badge, and clear-all button. Set to false for a minimal, headerless filter strip." },
  { name: "showActiveTags", type: "boolean", default: "true", description: "When true, renders dismissible tag chips below the filters showing each active filter selection. Users can click a tag to remove that individual filter." },
  { name: "title", type: "string", default: '"Filters"', description: "The heading text displayed in the panel header. Change this to match your application context, such as \"Search Filters\" or \"Refine Results\"." },
  { name: "accentColor", type: '"blue" | "emerald" | "violet" | "rose" | "amber" | "cyan" | "indigo" | "pink"', default: '"blue"', description: "Sets the accent color theme used for active states, selected chips, toggle switches, and interactive highlights throughout the panel." },
];

export default function FilterPanelPage() {
  const [basicValues, setBasicValues] = useState({});
  const [typeValues, setTypeValues] = useState({});
  const [verticalValues, setVerticalValues] = useState({});
  const [inlineValues, setInlineValues] = useState({});
  const [colorValues, setColorValues] = useState({});
  const [tagValues, setTagValues] = useState({});

  return (
    <ComponentPage
      name="FilterPanel"
      description="A powerful, composable filter panel supporting select, single-choice, multi-choice, and toggle filter types with multiple layout modes, accent color themes, and active filter tag management. Ideal for e-commerce product listings, data dashboards, and search result refinement."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the FilterPanel component from readyui-react:
        </p>
        <CodeBlock code={`import { FilterPanel } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Define a filters configuration object where each key represents a filter. Each filter needs a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">label</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">type</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">options</code> (except for toggle type).
          Use <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">useState</code> to track the selected values.
        </p>
        <Preview
          code={`const [values, setValues] = useState({});

const filters = {
  category: {
    label: "Category",
    type: "select",
    options: [
      { label: "Electronics", value: "electronics" },
      { label: "Clothing", value: "clothing" },
      { label: "Books", value: "books" },
      { label: "Home & Garden", value: "home" },
    ],
  },
  rating: {
    label: "Rating",
    type: "single",
    variant: "chips",
    options: [
      { label: "⭐ 4+", value: "4" },
      { label: "⭐ 3+", value: "3" },
      { label: "⭐ 2+", value: "2" },
    ],
  },
  inStock: {
    label: "In Stock Only",
    type: "toggle",
  },
};

<FilterPanel
  filters={filters}
  value={values}
  onChange={setValues}
/>`}
        >
          <FilterPanel
            filters={basicFilters}
            value={basicValues}
            onChange={setBasicValues}
          />
        </Preview>
      </Section>

      {/* Filter Types */}
      <Section title="Filter Types">
        <p className="text-gray-600 dark:text-gray-400">
          FilterPanel supports four filter types:{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">select</code> renders a dropdown,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">single</code> allows picking one option with variants like radio or chips,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">multiple</code> allows selecting several options with checkbox or chips variants, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">toggle</code> renders a simple on/off switch.
        </p>
        <Preview
          code={`const filters = {
  size: {
    label: "Size",
    type: "select",
    options: [
      { label: "Small", value: "sm" },
      { label: "Medium", value: "md" },
      { label: "Large", value: "lg" },
      { label: "X-Large", value: "xl" },
    ],
  },
  brand: {
    label: "Brand",
    type: "single",
    variant: "radio",
    options: [
      { label: "Nike", value: "nike" },
      { label: "Adidas", value: "adidas" },
      { label: "Puma", value: "puma" },
    ],
  },
  features: {
    label: "Features",
    type: "multiple",
    variant: "checkbox",
    options: [
      { label: "Waterproof", value: "waterproof" },
      { label: "Breathable", value: "breathable" },
      { label: "Lightweight", value: "lightweight" },
      { label: "Recycled Materials", value: "recycled" },
    ],
  },
  onSale: {
    label: "On Sale",
    type: "toggle",
  },
};

<FilterPanel
  filters={filters}
  value={values}
  onChange={setValues}
/>`}
        >
          <FilterPanel
            filters={typeFilters}
            value={typeValues}
            onChange={setTypeValues}
          />
        </Preview>
      </Section>

      {/* Layout Variants */}
      <Section title="Layout Variants">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">layout</code> prop to control
          how filters are arranged. The default{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"horizontal"</code> layout places
          filters side by side,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"vertical"</code> stacks them, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"inline"</code> compresses them into a flowing line.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Vertical Layout</h3>
            <Preview code={`<FilterPanel filters={filters} value={values} onChange={setValues} layout="vertical" />`}>
              <FilterPanel
                filters={segmentedFilters}
                value={verticalValues}
                onChange={setVerticalValues}
                layout="vertical"
              />
            </Preview>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Inline Layout</h3>
            <Preview code={`<FilterPanel filters={filters} value={values} onChange={setValues} layout="inline" />`}>
              <FilterPanel
                filters={segmentedFilters}
                value={inlineValues}
                onChange={setInlineValues}
                layout="inline"
              />
            </Preview>
          </div>
        </div>
      </Section>

      {/* Accent Colors */}
      <Section title="Accent Colors">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">accentColor</code> prop
          changes the highlight color used for active filter states, selected chips, and toggle switches.
          Available colors include blue, emerald, violet, rose, amber, cyan, indigo, and pink.
        </p>
        <Preview
          code={`<FilterPanel
  filters={filters}
  value={values}
  onChange={setValues}
  accentColor="violet"
/>`}
        >
          <FilterPanel
            filters={basicFilters}
            value={colorValues}
            onChange={setColorValues}
            accentColor="violet"
          />
        </Preview>
      </Section>

      {/* Active Tags */}
      <Section title="Active Tags">
        <p className="text-gray-600 dark:text-gray-400">
          By default, FilterPanel shows dismissible tags for each active filter selection. Toggle this
          with the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showActiveTags</code> prop.
          You can also hide the header using{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showHeader</code> for a minimal appearance.
        </p>
        <Preview
          code={`<FilterPanel
  filters={filters}
  value={values}
  onChange={setValues}
  showActiveTags={false}
  showHeader={false}
/>`}
        >
          <FilterPanel
            filters={basicFilters}
            value={tagValues}
            onChange={setTagValues}
            showActiveTags={false}
            showHeader={false}
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
