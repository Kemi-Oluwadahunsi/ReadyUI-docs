import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { MultiSelectTagInput } from "readyui-react";

const props = [
  { name: "options", type: "string[]", default: "[]", description: "The complete list of predefined options that the user can search through and select. These are displayed in a dropdown as the user types, filtered by the current input value." },
  { name: "value", type: "string[]", default: "—", description: "The controlled array of currently selected tags. When provided, the component operates in controlled mode and you must update this value through the onChange handler." },
  { name: "defaultValue", type: "string[]", default: "[]", description: "An array of tags that should be pre-selected when the component first mounts. Only used in uncontrolled mode — ignored when the value prop is provided." },
  { name: "onChange", type: "(tags: string[]) => void", default: "—", description: "Callback fired whenever the selected tags change, whether by adding or removing a tag. Receives the updated array of selected tag strings." },
  { name: "placeholder", type: "string", default: '"Type to search..."', description: "Placeholder text displayed in the input field when no text has been typed." },
  { name: "allowCustom", type: "boolean", default: "false", description: "Whether the user can create tags that are not in the predefined options list. When true, pressing Enter or comma with custom text adds it as a new tag." },
  { name: "maxItems", type: "number", default: "—", description: "The maximum number of tags that can be selected. Once this limit is reached, the input becomes disabled and no additional tags can be added until one is removed." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the outermost wrapper element of the tag input." },
  { name: "disabled", type: "boolean", default: "false", description: "When true, the entire component is disabled. The input cannot be focused, tags cannot be added or removed, and the visual appearance indicates the disabled state." },
  { name: "tagColor", type: "string", default: "—", description: "Custom Tailwind CSS classes applied to each tag chip for color customization. For example, pass \"bg-green-100 text-green-800\" to create green tags." },
];

const frameworkOptions = [
  "React",
  "Vue",
  "Angular",
  "Svelte",
  "Next.js",
  "Nuxt",
  "Remix",
  "Astro",
  "SolidJS",
  "Qwik",
];

export default function MultiSelectTagInputPage() {
  const [basicTags, setBasicTags] = useState([]);
  const [customTags, setCustomTags] = useState([]);
  const [limitedTags, setLimitedTags] = useState([]);
  const [colorTags, setColorTags] = useState([]);

  return (
    <ComponentPage
      name="MultiSelectTagInput"
      description="A searchable, multi-select tag input that lets users pick from predefined options or create custom tags. Supports controlled values, maximum selection limits, custom tag colors, and disabled state."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the MultiSelectTagInput component from readyui-react:
        </p>
        <CodeBlock code={`import { MultiSelectTagInput } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Provide an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">options</code>{" "}
          array and an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onChange</code>{" "}
          handler. Type to filter the options and click or press Enter to select.
        </p>
        <Preview
          code={`const options = [
  "React", "Vue", "Angular", "Svelte",
  "Next.js", "Nuxt", "Remix", "Astro",
  "SolidJS", "Qwik",
];
const [tags, setTags] = useState([]);

<MultiSelectTagInput
  options={options}
  value={tags}
  onChange={setTags}
  placeholder="Search frameworks..."
/>`}
        >
          <MultiSelectTagInput
            options={frameworkOptions}
            value={basicTags}
            onChange={setBasicTags}
            placeholder="Search frameworks..."
          />
        </Preview>
      </Section>

      {/* Allow Custom Tags */}
      <Section title="Allow Custom Tags">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">allowCustom</code>{" "}
          to <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">true</code>{" "}
          to let users type and add tags that are not in the predefined options list. Press Enter or comma to create a custom tag.
        </p>
        <Preview
          code={`const [tags, setTags] = useState([]);

<MultiSelectTagInput
  options={["React", "Vue", "Angular", "Svelte"]}
  value={tags}
  onChange={setTags}
  allowCustom
  placeholder="Type anything and press Enter..."
/>`}
        >
          <MultiSelectTagInput
            options={frameworkOptions}
            value={customTags}
            onChange={setCustomTags}
            allowCustom
            placeholder="Type anything and press Enter..."
          />
        </Preview>
      </Section>

      {/* Max Items Limit */}
      <Section title="Max Items Limit">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">maxItems</code>{" "}
          prop to cap the number of selections. Once the limit is reached, additional selections are blocked until a tag is removed.
        </p>
        <Preview
          code={`const [tags, setTags] = useState([]);

<MultiSelectTagInput
  options={["React", "Vue", "Angular", "Svelte", "Next.js"]}
  value={tags}
  onChange={setTags}
  maxItems={3}
  placeholder="Select up to 3..."
/>`}
        >
          <MultiSelectTagInput
            options={frameworkOptions}
            value={limitedTags}
            onChange={setLimitedTags}
            maxItems={3}
            placeholder="Select up to 3..."
          />
        </Preview>
      </Section>

      {/* Custom Tag Color */}
      <Section title="Custom Tag Color">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">tagColor</code>{" "}
          prop to apply custom Tailwind classes to each tag chip. This lets you match your brand colors or categorize tags visually.
        </p>
        <Preview
          code={`const [tags, setTags] = useState([]);

<MultiSelectTagInput
  options={["React", "Vue", "Angular", "Svelte"]}
  value={tags}
  onChange={setTags}
  tagColor="bg-green-100 text-green-800"
  placeholder="Green tags..."
/>`}
        >
          <MultiSelectTagInput
            options={frameworkOptions}
            value={colorTags}
            onChange={setColorTags}
            tagColor="bg-green-100 text-green-800"
            placeholder="Green tags..."
          />
        </Preview>
      </Section>

      {/* Disabled State */}
      <Section title="Disabled State">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">disabled</code>{" "}
          to <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">true</code>{" "}
          to prevent all interaction. The input cannot be focused and existing tags cannot be removed.
        </p>
        <Preview
          code={`<MultiSelectTagInput
  options={["React", "Vue", "Angular"]}
  defaultValue={["React", "Vue"]}
  disabled
  placeholder="Disabled..."
/>`}
        >
          <MultiSelectTagInput
            options={frameworkOptions}
            defaultValue={["React", "Vue"]}
            disabled
            placeholder="Disabled..."
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
