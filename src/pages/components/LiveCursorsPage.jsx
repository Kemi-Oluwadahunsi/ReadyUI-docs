import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { LiveCursors } from "readyui-react";

const props = [
  { name: "className", type: "string", default: '""', description: "Additional CSS classes for the wrapper." },
];

export default function LiveCursorsPage() {
  return (
    <ComponentPage
      name="LiveCursors"
      description="A real-time collaborative presence display showing animated floating cursors with user names and connection status. Perfect for showcasing multiplayer or collaborative features."
    >
      <Section title="Import">
        <CodeBlock code={`import { LiveCursors } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          The cursors animate with subtle floating motion to simulate live collaborative editing. Each cursor shows the user name and role.
        </p>
        <Preview code={`<LiveCursors />`}>
          <div className="max-w-md mx-auto">
            <LiveCursors />
          </div>
        </Preview>
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
