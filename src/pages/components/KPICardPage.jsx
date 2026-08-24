import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { SavingsTargetCard, MilestoneGoalCard, DividendIncomeCard } from "readyui-react";

const savingsProps = [
  { name: "title", type: "string", default: '"Savings Targets"', description: "Card heading text." },
  { name: "subtitle", type: "string", default: "—", description: "Descriptive text below the heading." },
  { name: "targets", type: '{ name, current, total, pct }[]', default: "2 sample targets", description: "Array of target objects with name, current value, total value, and percentage." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes." },
];

const milestoneProps = [
  { name: "className", type: "string", default: '""', description: "Additional CSS classes." },
];

const dividendProps = [
  { name: "className", type: "string", default: '""', description: "Additional CSS classes." },
];

export default function KPICardPage() {
  return (
    <ComponentPage
      name="KPICard"
      description="A set of financial dashboard cards — savings targets with progress bars, milestone goals with completion tracking, and dividend income summaries with sparkline charts."
    >
      <Section title="Import">
        <CodeBlock code={`import { SavingsTargetCard, MilestoneGoalCard, DividendIncomeCard } from "readyui-react";`} />
      </Section>

      <Section title="Savings Target">
        <p className="text-gray-600 dark:text-gray-400">
          Displays financial targets with progress bars and percentage completion.
        </p>
        <Preview code={`<SavingsTargetCard />`}>
          <div className="max-w-sm mx-auto">
            <SavingsTargetCard />
          </div>
        </Preview>
      </Section>

      <Section title="Custom Targets">
        <Preview
          code={`<SavingsTargetCard
  title="Investment Goals"
  targets={[
    { name: "EDUCATION", current: "$12,000", total: "$50,000", pct: 24 },
    { name: "VACATION", current: "$3,500", total: "$5,000", pct: 70 },
  ]}
/>`}
        >
          <div className="max-w-sm mx-auto">
            <SavingsTargetCard
              title="Investment Goals"
              targets={[
                { name: "EDUCATION", current: "$12,000", total: "$50,000", pct: 24 },
                { name: "VACATION", current: "$3,500", total: "$5,000", pct: 70 },
              ]}
            />
          </div>
        </Preview>
      </Section>

      <Section title="Milestone Goal">
        <Preview code={`<MilestoneGoalCard />`}>
          <div className="max-w-sm mx-auto">
            <MilestoneGoalCard />
          </div>
        </Preview>
      </Section>

      <Section title="Dividend Income">
        <Preview code={`<DividendIncomeCard />`}>
          <div className="max-w-sm mx-auto">
            <DividendIncomeCard />
          </div>
        </Preview>
      </Section>

      <Section title="SavingsTargetCard Props">
        <PropsTable props={savingsProps} />
      </Section>

      <Section title="MilestoneGoalCard Props">
        <PropsTable props={milestoneProps} />
      </Section>

      <Section title="DividendIncomeCard Props">
        <PropsTable props={dividendProps} />
      </Section>
    </ComponentPage>
  );
}
