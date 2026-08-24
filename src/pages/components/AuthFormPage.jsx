import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { AuthForm } from "readyui-react";

const props = [
  { name: "className", type: "string", default: '""', description: "Additional CSS classes for the form wrapper." },
];

export default function AuthFormPage() {
  return (
    <ComponentPage
      name="AuthForm"
      description="A pre-built authentication form with email and password fields, show/hide toggle, social login buttons, and a loading/success state animation."
    >
      <Section title="Import">
        <CodeBlock code={`import { AuthForm } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Drop in a complete authentication form with built-in validation states and social login options. Click the submit button to see the loading and success animation.
        </p>
        <Preview code={`<AuthForm />`}>
          <div className="max-w-sm mx-auto">
            <AuthForm />
          </div>
        </Preview>
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
