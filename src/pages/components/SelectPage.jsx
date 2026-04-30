import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Select } from "readyui-react";

const basicOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "SolidJS" },
];

const groupedOptions = [
  { value: "react", label: "React", group: "JavaScript" },
  { value: "vue", label: "Vue", group: "JavaScript" },
  { value: "angular", label: "Angular", group: "JavaScript" },
  { value: "django", label: "Django", group: "Python" },
  { value: "flask", label: "Flask", group: "Python" },
  { value: "rails", label: "Rails", group: "Ruby" },
  { value: "laravel", label: "Laravel", group: "PHP", disabled: true },
];

const props = [
  { name: "options", type: "Array<{ value, label, group?, disabled? }>", default: "[]", required: true, description: "Array of selectable options. Each option must have a unique value and a display label. Optionally include a group string for grouped rendering and a disabled boolean to prevent selection of individual items." },
  { name: "value", type: "*", default: "—", description: "The currently selected value (or array of values when multiple is true). This makes the component controlled — you must update this via onChange." },
  { name: "onChange", type: "(value) => void", default: "—", required: true, description: "Callback fired when the selection changes. Receives the new selected value (single value or array for multi-select). Use this to update your state." },
  { name: "multiple", type: "boolean", default: "false", description: "When true, enables multi-select mode allowing the user to choose more than one option. Selected items appear as removable tags inside the input." },
  { name: "searchable", type: "boolean", default: "true", description: "When true, renders a text input that filters the dropdown options as the user types. Disable for short option lists where search adds unnecessary complexity." },
  { name: "clearable", type: "boolean", default: "true", description: "When true, shows a clear button (×) that resets the selection to null or an empty array. Disable if a selection is always required." },
  { name: "disabled", type: "boolean", default: "false", description: "When true, the entire select component is non-interactive — it cannot be opened, searched, or changed. Visually appears dimmed." },
  { name: "placeholder", type: "string", default: '"Select…"', description: "Placeholder text shown inside the input when no option is selected. Provide a helpful hint like 'Choose a framework' to guide users." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: 'Controls the height, padding, and font size of the select trigger. Use "sm" for compact toolbars, "md" for standard forms, and "lg" for prominent standalone fields.' },
  { name: "grouped", type: "boolean", default: "false", description: "When true, options are visually grouped by their group property. Each group renders a non-selectable header label above its options." },
  { name: "maxSelected", type: "number", default: "Infinity", description: "Maximum number of items that can be selected in multi-select mode. Once the limit is reached, additional options become unselectable until one is removed." },
  { name: "renderOption", type: "(option) => ReactNode", default: "—", description: "Custom render function for each option in the dropdown. Receives the full option object and returns a ReactNode. Use this for icons, badges, or rich option layouts." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the outermost select wrapper for custom styling." },
];

export default function SelectPage() {
  const [basic, setBasic] = useState("");
  const [multi, setMulti] = useState([]);
  const [grouped, setGrouped] = useState("");
  const [smVal, setSmVal] = useState("");
  const [mdVal, setMdVal] = useState("");
  const [lgVal, setLgVal] = useState("");
  const [noSearch, setNoSearch] = useState("");

  return (
    <ComponentPage
      name="Select"
      description="A feature-rich dropdown select component with search, multi-select, grouped options, and customizable rendering. A complete replacement for the native <select> element with a polished, accessible experience."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the Select component from readyui-react:
        </p>
        <CodeBlock code={`import { Select } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass an <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">options</code> array, a controlled{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">value</code>, and an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onChange</code> handler. The dropdown is searchable and clearable by default.
        </p>
        <Preview
          code={`const [value, setValue] = useState("");

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "SolidJS" },
];

<Select
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Choose a framework"
/>`}
        >
          <div className="max-w-sm">
            <Select
              options={basicOptions}
              value={basic}
              onChange={setBasic}
              placeholder="Choose a framework"
            />
          </div>
        </Preview>
      </Section>

      {/* Multi-Select */}
      <Section title="Multi-Select">
        <p className="text-gray-600 dark:text-gray-400">
          Enable <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">multiple</code> to allow selecting more than one option. Selected items appear as removable tags. You can cap selections with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">maxSelected</code>.
        </p>
        <Preview
          code={`const [selected, setSelected] = useState([]);

<Select
  options={options}
  value={selected}
  onChange={setSelected}
  multiple
  maxSelected={3}
  placeholder="Pick up to 3"
/>`}
        >
          <div className="max-w-sm">
            <Select
              options={basicOptions}
              value={multi}
              onChange={setMulti}
              multiple
              maxSelected={3}
              placeholder="Pick up to 3"
            />
          </div>
        </Preview>
      </Section>

      {/* Grouped Options */}
      <Section title="Grouped Options">
        <p className="text-gray-600 dark:text-gray-400">
          When <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">grouped</code> is true, options with a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">group</code> property are visually organized under non-selectable group headers. Individual options can also be disabled.
        </p>
        <Preview
          code={`const groupedOptions = [
  { value: "react", label: "React", group: "JavaScript" },
  { value: "vue", label: "Vue", group: "JavaScript" },
  { value: "django", label: "Django", group: "Python" },
  { value: "flask", label: "Flask", group: "Python" },
  { value: "laravel", label: "Laravel", group: "PHP", disabled: true },
];

<Select
  options={groupedOptions}
  value={value}
  onChange={setValue}
  grouped
  placeholder="Choose a framework"
/>`}
        >
          <div className="max-w-sm">
            <Select
              options={groupedOptions}
              value={grouped}
              onChange={setGrouped}
              grouped
              placeholder="Choose a framework"
            />
          </div>
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          The <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">size</code> prop adjusts the trigger height, padding, and font size to fit different layout contexts.
        </p>
        <Preview
          code={`<Select options={options} value={value} onChange={setValue} size="sm" placeholder="Small" />
<Select options={options} value={value} onChange={setValue} size="md" placeholder="Medium" />
<Select options={options} value={value} onChange={setValue} size="lg" placeholder="Large" />`}
        >
          <div className="max-w-sm space-y-4">
            <Select options={basicOptions} value={smVal} onChange={setSmVal} size="sm" placeholder="Small" />
            <Select options={basicOptions} value={mdVal} onChange={setMdVal} size="md" placeholder="Medium (default)" />
            <Select options={basicOptions} value={lgVal} onChange={setLgVal} size="lg" placeholder="Large" />
          </div>
        </Preview>
      </Section>

      {/* Searchable vs Non-Searchable */}
      <Section title="Searchable vs Non-Searchable">
        <p className="text-gray-600 dark:text-gray-400">
          By default the dropdown is searchable. Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">searchable</code> to false to disable the filter input — useful for short lists where search adds unnecessary complexity.
        </p>
        <Preview
          code={`<Select
  options={options}
  value={value}
  onChange={setValue}
  searchable={false}
  placeholder="No search"
/>`}
        >
          <div className="max-w-sm">
            <Select
              options={basicOptions}
              value={noSearch}
              onChange={setNoSearch}
              searchable={false}
              placeholder="No search"
            />
          </div>
        </Preview>
      </Section>

      {/* Disabled */}
      <Section title="Disabled">
        <p className="text-gray-600 dark:text-gray-400">
          Set <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">disabled</code> to true to render the select in a non-interactive, dimmed state. It cannot be opened, searched, or changed.
        </p>
        <Preview
          code={`<Select
  options={options}
  value="react"
  onChange={() => {}}
  disabled
  placeholder="Disabled"
/>`}
        >
          <div className="max-w-sm">
            <Select
              options={basicOptions}
              value="react"
              onChange={() => {}}
              disabled
              placeholder="Disabled"
            />
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
