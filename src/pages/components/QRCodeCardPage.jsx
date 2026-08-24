import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { QRCodeCard } from "readyui-react";

const props = [
  { name: "subtitle", type: "string", default: '"Scan to connect your mobile device"', description: "Subtitle text displayed below the heading." },
  { name: "url", type: "string", default: "—", description: "URL to display and copy. Used for the QR code visual." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes for the wrapper." },
];

export default function QRCodeCardPage() {
  return (
    <ComponentPage
      name="QRCodeCard"
      description="A card displaying a QR code visual with a copyable URL, share and download actions. Great for mobile authentication flows or link sharing."
    >
      <Section title="Import">
        <CodeBlock code={`import { QRCodeCard } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Renders a QR code card with copy-to-clipboard functionality and share/download action buttons.
        </p>
        <Preview code={`<QRCodeCard />`}>
          <div className="max-w-sm mx-auto">
            <QRCodeCard />
          </div>
        </Preview>
      </Section>

      <Section title="Custom URL">
        <Preview
          code={`<QRCodeCard
  subtitle="Scan to visit our documentation"
  url="https://readyui.dev/docs"
/>`}
        >
          <div className="max-w-sm mx-auto">
            <QRCodeCard subtitle="Scan to visit our documentation" url="https://readyui.dev/docs" />
          </div>
        </Preview>
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
