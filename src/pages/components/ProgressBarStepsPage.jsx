import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { ProgressBarSteps } from "readyui-react";

const basicSteps = [
  { id: "details", label: "Details", description: "Enter your information" },
  { id: "address", label: "Address", description: "Shipping address" },
  { id: "payment", label: "Payment", description: "Payment method" },
  { id: "review", label: "Review", description: "Confirm your order" },
];

const simpleSteps = [
  { id: "start", label: "Start" },
  { id: "progress", label: "In Progress" },
  { id: "review", label: "Review" },
  { id: "complete", label: "Complete" },
];

const props = [
  { name: "steps", type: "Array<{ id, label, description? }>", default: "[]", required: true, description: "Array of step objects defining each stage. Each step requires a unique id and a label string displayed as the step name. Optionally include a description for additional context shown below the label." },
  { name: "currentStep", type: "number", default: "1", description: "The one-based index of the currently active step. Step 1 is the first step. Steps before this number are shown as completed, the step at this number is active, and subsequent steps are pending." },
  { name: "onStepChange", type: "(stepNumber: number) => void", default: "—", description: "Callback fired when the user clicks a step indicator (if clickable is true) or uses the navigation buttons. Receives the new one-based step number to update your state." },
  { name: "clickable", type: "boolean", default: "true", description: "When true, step indicators are interactive and users can click any step to navigate directly to it. Set to false to disable click navigation and require users to use the nav buttons for linear progression." },
  { name: "activeColor", type: "string", default: '"bg-blue-600 border-blue-600"', description: "Tailwind CSS classes applied to the active and completed step indicators and the progress bar fill. Customize this to match your brand, for example \"bg-emerald-600 border-emerald-600\" or \"bg-violet-600 border-violet-600\"." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the root container element for custom width, spacing, or layout overrides." },
  { name: "showProgress", type: "boolean", default: "true", description: "Whether to render the horizontal progress bar that visually connects the step indicators. Set to false for a cleaner look when you only want the numbered step circles." },
  { name: "showNavButtons", type: "boolean", default: "true", description: "Whether to render the built-in Previous and Next navigation buttons below the steps. Disable this when providing your own custom navigation controls or when step clicking is sufficient." },
];

export default function ProgressBarStepsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [nonClickableStep, setNonClickableStep] = useState(1);
  const [noProgressStep, setNoProgressStep] = useState(1);
  const [colorStep, setColorStep] = useState(1);

  return (
    <ComponentPage
      name="ProgressBarSteps"
      description="A numbered step progress indicator with a connecting progress bar, click navigation, and built-in Previous/Next buttons. Uses 1-based step numbering for intuitive control. Ideal for multi-step forms, checkout flows, and onboarding wizards."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the ProgressBarSteps component from readyui-react:
        </p>
        <CodeBlock code={`import { ProgressBarSteps } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Define an array of steps and use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">useState</code> to track the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">currentStep</code> (1-based).
          The component renders numbered circles connected by a progress bar, plus Previous and Next buttons for navigation.
        </p>
        <Preview
          code={`const [currentStep, setCurrentStep] = useState(1);

const steps = [
  { id: "details", label: "Details", description: "Enter your information" },
  { id: "address", label: "Address", description: "Shipping address" },
  { id: "payment", label: "Payment", description: "Payment method" },
  { id: "review", label: "Review", description: "Confirm your order" },
];

<ProgressBarSteps
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
/>`}
        >
          <ProgressBarSteps
            steps={basicSteps}
            currentStep={currentStep}
            onStepChange={setCurrentStep}
          />
        </Preview>
      </Section>

      {/* Non-Clickable Steps */}
      <Section title="Non-Clickable Steps">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">clickable</code> to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">false</code> to disable
          direct step navigation by clicking on step indicators. Users must use the Previous and Next buttons, enforcing
          a strict linear progression through the workflow.
        </p>
        <Preview
          code={`<ProgressBarSteps
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  clickable={false}
/>`}
        >
          <ProgressBarSteps
            steps={basicSteps}
            currentStep={nonClickableStep}
            onStepChange={setNonClickableStep}
            clickable={false}
          />
        </Preview>
      </Section>

      {/* Hidden Progress Bar */}
      <Section title="Hidden Progress Bar">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showProgress</code> to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">false</code> to hide
          the connecting progress bar between step indicators. This gives a cleaner, more minimal appearance while still
          showing the numbered step circles and their labels.
        </p>
        <Preview
          code={`<ProgressBarSteps
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  showProgress={false}
/>`}
        >
          <ProgressBarSteps
            steps={simpleSteps}
            currentStep={noProgressStep}
            onStepChange={setNoProgressStep}
            showProgress={false}
          />
        </Preview>
      </Section>

      {/* Custom Active Color */}
      <Section title="Custom Active Color">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">activeColor</code> prop to
          customize the color of active and completed step indicators and the progress bar fill. Provide any valid Tailwind CSS
          background and border classes.
        </p>
        <Preview
          code={`<ProgressBarSteps
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  activeColor="bg-emerald-600 border-emerald-600"
/>`}
        >
          <ProgressBarSteps
            steps={basicSteps}
            currentStep={colorStep}
            onStepChange={setColorStep}
            activeColor="bg-emerald-600 border-emerald-600"
          />
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
