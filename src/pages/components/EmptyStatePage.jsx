import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";

const props = [
  { name: "title", type: "string", default: '"No data"', description: "Heading text displayed in the empty state." },
  { name: "description", type: "string", default: "—", description: "Supportive text shown below the title." },
  { name: "icon", type: "ReactNode", default: "—", description: "Custom icon element rendered above the title." },
  { name: "image", type: "string", default: "—", description: "URL of an illustration image to display." },
  { name: "action", type: "ReactNode", default: "—", description: "Action element (e.g. button) rendered below the description." },
  { name: "variant", type: '"default" | "minimal" | "card"', default: '"default"', description: "Visual style variant of the empty state container." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Controls the overall size and spacing of the component." },
  { name: "className", type: "string", default: "—", description: "Additional CSS class names for the root element." },
];

export default function EmptyStatePage() {
  return (
    <ComponentPage
      name="EmptyState"
      description="Illustrated empty-state placeholder with an optional action button, perfect for zero-data screens."
    >
      <Section title="Import">
        <CodeBlock code={`import { EmptyState } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock
          code={`<EmptyState
  title="No results found"
  description="Try adjusting your search or filters to find what you're looking for."
/>`}
        />
      </Section>

      <Section title="With Action">
        <CodeBlock
          code={`<EmptyState
  title="No projects yet"
  description="Create your first project to get started."
  icon={<FolderIcon size={48} />}
  action={<button onClick={handleCreate}>Create Project</button>}
/>`}
        />
      </Section>

      <Section title="Minimal Variant">
        <CodeBlock
          code={`<EmptyState
  variant="minimal"
  title="Nothing here"
  description="This section is empty."
  size="sm"
/>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
