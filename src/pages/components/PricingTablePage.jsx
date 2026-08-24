import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { PricingTable } from "readyui-react";

const props = [
  { name: "className", type: "string", default: '""', description: "Additional CSS classes for the wrapper." },
];

export default function PricingTablePage() {
  return (
    <ComponentPage
      name="PricingTable"
      description="A responsive pricing table with monthly/annual toggle, a featured plan highlight, and feature lists. Includes Starter, Pro, and Enterprise tiers."
    >
      <Section title="Import">
        <CodeBlock code={`import { PricingTable } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Includes a billing toggle between monthly and annual pricing, with automatic discount display. The most popular plan is highlighted with an accent border.
        </p>
        <Preview code={`<PricingTable />`}>
          <PricingTable />
        </Preview>
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
