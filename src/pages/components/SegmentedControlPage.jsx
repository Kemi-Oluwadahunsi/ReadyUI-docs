import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";

const props = [
  { name: "options", type: "Array<{ value, label, icon?, disabled? }>", default: "[]", description: "Array of segment options to render." },
  { name: "value", type: "string", default: "—", description: "The currently selected segment value (controlled)." },
  { name: "onChange", type: "Function", default: "—", description: "Callback fired with the new value when a segment is selected." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size variant of the control." },
  { name: "fullWidth", type: "boolean", default: "false", description: "When true, the control stretches to fill its container." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the entire control when true." },
  { name: "color", type: "string", default: '"blue"', description: "Accent color for the active segment indicator." },
  { name: "className", type: "string", default: "—", description: "Additional CSS class names for the root element." },
];

export default function SegmentedControlPage() {
  return (
    <ComponentPage
      name="SegmentedControl"
      description="iOS-style segmented toggle control for switching between related views or options."
    >
      <Section title="Import">
        <CodeBlock code={`import { SegmentedControl } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock
          code={`const [view, setView] = useState("list");

<SegmentedControl
  options={[
    { value: "list", label: "List" },
    { value: "grid", label: "Grid" },
    { value: "table", label: "Table" },
  ]}
  value={view}
  onChange={setView}
/>`}
        />
      </Section>

      <Section title="With Icons">
        <CodeBlock
          code={`const [tab, setTab] = useState("inbox");

<SegmentedControl
  options={[
    { value: "inbox", label: "Inbox", icon: <InboxIcon /> },
    { value: "sent", label: "Sent", icon: <SendIcon /> },
    { value: "drafts", label: "Drafts", icon: <DraftIcon /> },
    { value: "trash", label: "Trash", icon: <TrashIcon />, disabled: true },
  ]}
  value={tab}
  onChange={setTab}
  color="indigo"
/>`}
        />
      </Section>

      <Section title="Full Width">
        <CodeBlock
          code={`<SegmentedControl
  options={[
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ]}
  value={billing}
  onChange={setBilling}
  fullWidth
  size="lg"
/>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
