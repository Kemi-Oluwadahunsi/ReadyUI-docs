import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { CodeBlock as RuiCodeBlock } from "readyui-react";

const props = [
  { name: "code", type: "string", default: "sample code", description: "The code string to display in the block." },
  { name: "language", type: "string", default: '"tsx"', description: "Language label shown in the header (e.g. tsx, jsx, bash, css)." },
  { name: "title", type: "string", default: '"Dashboard.tsx"', description: "File name displayed in the header bar." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes for the wrapper." },
];

export default function CodeBlockPage() {
  return (
    <ComponentPage
      name="CodeBlock"
      description="A styled code display block with a file header bar, language badge, and one-click copy button. Great for documentation and tutorials."
    >
      <Section title="Import">
        <CodeBlock code={`import { CodeBlock } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <Preview
          code={`<CodeBlock
  code={\`import { Button } from "readyui-react";

export default function App() {
  return <Button>Click me</Button>;
}\`}
  language="tsx"
  title="App.tsx"
/>`}
        >
          <div className="max-w-lg mx-auto">
            <RuiCodeBlock
              code={`import { Button } from "readyui-react";

export default function App() {
  return <Button>Click me</Button>;
}`}
              language="tsx"
              title="App.tsx"
            />
          </div>
        </Preview>
      </Section>

      <Section title="Terminal Command">
        <Preview
          code={`<CodeBlock code="npm install readyui-react" language="bash" title="Terminal" />`}
        >
          <div className="max-w-lg mx-auto">
            <RuiCodeBlock code="npm install readyui-react" language="bash" title="Terminal" />
          </div>
        </Preview>
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
