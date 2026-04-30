import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";

const props = [
  { name: "value", type: "string", default: '""', description: "The HTML content of the editor." },
  { name: "onChange", type: "Function", default: "—", description: "Callback fired with the updated HTML string when content changes." },
  { name: "placeholder", type: "string", default: '"Start typing…"', description: "Placeholder text shown when the editor is empty." },
  { name: "toolbar", type: "string[]", default: '["bold","italic","underline","strikethrough","heading","bulletList","orderedList","blockquote","code","link","image","undo","redo"]', description: "Array of toolbar button identifiers to display." },
  { name: "readOnly", type: "boolean", default: "false", description: "When true, the editor content cannot be modified." },
  { name: "minHeight", type: "string | number", default: '"200px"', description: "Minimum height of the editor area." },
  { name: "maxHeight", type: "string | number", default: "—", description: "Maximum height of the editor area before scrolling." },
  { name: "className", type: "string", default: "—", description: "Additional CSS class names for the root wrapper." },
  { name: "editorClassName", type: "string", default: "—", description: "Additional CSS class names for the editable content area." },
];

export default function RichTextEditorPage() {
  return (
    <ComponentPage
      name="RichTextEditor"
      description="Toolbar-based WYSIWYG rich text editor with customizable formatting options."
    >
      <Section title="Import">
        <CodeBlock code={`import { RichTextEditor } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock
          code={`const [content, setContent] = useState("");

<RichTextEditor
  value={content}
  onChange={setContent}
  placeholder="Write something amazing…"
/>`}
        />
      </Section>

      <Section title="Custom Toolbar">
        <CodeBlock
          code={`<RichTextEditor
  value={content}
  onChange={setContent}
  toolbar={["bold", "italic", "underline", "link", "bulletList", "orderedList"]}
  minHeight="150px"
  maxHeight="400px"
/>`}
        />
      </Section>

      <Section title="Read-Only">
        <CodeBlock
          code={`<RichTextEditor
  value="<h2>Preview Mode</h2><p>This content is <strong>read-only</strong> and cannot be edited.</p>"
  readOnly={true}
  minHeight="100px"
/>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
