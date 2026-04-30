import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";

const props = [
  { name: "children", type: "ReactNode", default: "—", description: "The content displayed inside the tag." },
  { name: "color", type: '"blue" | "red" | "green" | "yellow" | "purple" | "gray"', default: '"blue"', description: "Color theme of the tag." },
  { name: "variant", type: '"solid" | "outline" | "subtle"', default: '"solid"', description: "Visual style variant of the tag." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the tag." },
  { name: "removable", type: "boolean", default: "false", description: "When true, a close button is shown to remove the tag." },
  { name: "onRemove", type: "Function", default: "—", description: "Callback fired when the remove button is clicked." },
  { name: "icon", type: "ReactNode", default: "—", description: "Optional icon rendered before the tag text." },
  { name: "onClick", type: "Function", default: "—", description: "Click handler for the tag. Makes the tag interactive." },
  { name: "className", type: "string", default: "—", description: "Additional CSS class names for the root element." },
];

export default function TagPage() {
  return (
    <ComponentPage
      name="Tag"
      description="Removable colored label/tag chip for categorization, filtering, and selection."
    >
      <Section title="Import">
        <CodeBlock code={`import { Tag } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock
          code={`<Tag>Default</Tag>
<Tag color="green">Success</Tag>
<Tag color="red">Error</Tag>
<Tag color="yellow">Warning</Tag>`}
        />
      </Section>

      <Section title="Variants">
        <CodeBlock
          code={`<Tag variant="solid" color="blue">Solid</Tag>
<Tag variant="outline" color="blue">Outline</Tag>
<Tag variant="subtle" color="blue">Subtle</Tag>`}
        />
      </Section>

      <Section title="Colors">
        <CodeBlock
          code={`{["blue", "red", "green", "yellow", "purple", "gray"].map((color) => (
  <Tag key={color} color={color} variant="solid">
    {color}
  </Tag>
))}`}
        />
      </Section>

      <Section title="Removable">
        <CodeBlock
          code={`const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Vite"]);

<div className="flex gap-2 flex-wrap">
  {tags.map((tag) => (
    <Tag
      key={tag}
      color="purple"
      variant="subtle"
      removable
      onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}
    >
      {tag}
    </Tag>
  ))}
</div>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
