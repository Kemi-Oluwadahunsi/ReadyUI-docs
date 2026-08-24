import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { ContributionBarChart, MiniSparkline } from "readyui-react";

const barChartProps = [
  { name: "title", type: "string", default: '"Contribution History"', description: "Chart heading text." },
  { name: "subtitle", type: "string", default: '"Last 6 months of activity"', description: "Subheading text below the title." },
  { name: "data", type: "{ label: string, value: number }[]", default: "6 months sample data", description: "Array of data points with labels and numeric values." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes for the wrapper." },
];

const sparklineProps = [
  { name: "name", type: "string", default: '"Vanguard"', description: "Display name for the sparkline row." },
  { name: "shares", type: "string", default: '"450 Shares"', description: "Secondary text displayed below the name." },
  { name: "data", type: "number[]", default: "[30, 40, 35, 50, 70, 85]", description: "Array of numeric values rendered as mini bars." },
];

export default function ChartsPage() {
  return (
    <ComponentPage
      name="Charts"
      description="Lightweight chart components for dashboards — a contribution bar chart with interactive hover states and a compact sparkline row for at-a-glance metrics."
    >
      <Section title="Import">
        <CodeBlock code={`import { ContributionBarChart, MiniSparkline } from "readyui-react";`} />
      </Section>

      <Section title="Contribution Bar Chart">
        <p className="text-gray-600 dark:text-gray-400">
          An interactive bar chart with hover highlights, percentage change indicator, and period selector badge.
        </p>
        <Preview code={`<ContributionBarChart />`}>
          <div className="max-w-md mx-auto">
            <ContributionBarChart />
          </div>
        </Preview>
      </Section>

      <Section title="Custom Data">
        <Preview
          code={`<ContributionBarChart
  title="Revenue"
  subtitle="Quarterly breakdown"
  data={[
    { label: "Q1", value: 45 },
    { label: "Q2", value: 72 },
    { label: "Q3", value: 63 },
    { label: "Q4", value: 90 },
  ]}
/>`}
        >
          <div className="max-w-md mx-auto">
            <ContributionBarChart
              title="Revenue"
              subtitle="Quarterly breakdown"
              data={[
                { label: "Q1", value: 45 },
                { label: "Q2", value: 72 },
                { label: "Q3", value: 63 },
                { label: "Q4", value: 90 },
              ]}
            />
          </div>
        </Preview>
      </Section>

      <Section title="Mini Sparkline">
        <p className="text-gray-600 dark:text-gray-400">
          A compact row with a name, subtitle, and a mini bar sparkline — perfect for portfolio or metric lists.
        </p>
        <Preview
          code={`<MiniSparkline name="Vanguard" shares="450 Shares" data={[30, 40, 35, 50, 70, 85]} />
<MiniSparkline name="S&P 500" shares="120 Shares" data={[60, 55, 70, 65, 80, 75]} />`}
        >
          <div className="max-w-sm mx-auto space-y-3">
            <MiniSparkline name="Vanguard" shares="450 Shares" data={[30, 40, 35, 50, 70, 85]} />
            <MiniSparkline name="S&P 500" shares="120 Shares" data={[60, 55, 70, 65, 80, 75]} />
          </div>
        </Preview>
      </Section>

      <Section title="ContributionBarChart Props">
        <PropsTable props={barChartProps} />
      </Section>

      <Section title="MiniSparkline Props">
        <PropsTable props={sparklineProps} />
      </Section>
    </ComponentPage>
  );
}
