import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Stepper } from "readyui-react";
import { User, CreditCard, Package, CheckCircle } from "lucide-react";

const basicSteps = [
  { id: "account", title: "Account", description: "Create your account" },
  { id: "profile", title: "Profile", description: "Set up your profile" },
  { id: "payment", title: "Payment", description: "Add payment method" },
  { id: "confirm", title: "Confirmation", description: "Review and confirm" },
];

const iconSteps = [
  { id: "account", title: "Account", description: "Create your account", icon: User },
  { id: "payment", title: "Payment", description: "Add payment info", icon: CreditCard },
  { id: "shipping", title: "Shipping", description: "Select delivery option", icon: Package },
  { id: "done", title: "Done", description: "Order complete", icon: CheckCircle },
];

const props = [
  { name: "steps", type: "Array<{ id, title, description?, icon? }>", default: "[]", required: true, description: "Array of step objects defining each stage of the process. Each step needs a unique id and title string. Optionally include a description for subtitle text and an icon (Lucide component) displayed inside the step indicator circle." },
  { name: "currentStep", type: "number", default: "0", description: "The zero-based index of the currently active step. Steps before this index are marked as completed, the step at this index is active, and steps after are upcoming. Control this with useState to drive navigation." },
  { name: "onStepChange", type: "(stepIndex: number) => void", default: "—", description: "Callback fired when the user navigates to a different step, either via click navigation or the built-in Previous/Next buttons. Receives the new step index." },
  { name: "allowClickNavigation", type: "boolean", default: "true", description: "When true, users can click on any step indicator to jump directly to that step. Set to false to enforce linear progression where users must use the navigation buttons." },
  { name: "showNavButtons", type: "boolean", default: "true", description: "Whether to render the built-in Previous and Next navigation buttons below the step content area. Disable this if you want to provide your own custom navigation controls." },
  { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Controls the layout direction of the step indicators. \"horizontal\" displays steps in a row with a connecting progress line, while \"vertical\" stacks them in a column — ideal for sidebar layouts or narrow containers." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the stepper's root container element for custom width, spacing, or style overrides." },
  { name: "completedColor", type: "string", default: '""', description: "Custom Tailwind CSS color classes applied to completed step indicators and their connecting lines. For example, \"bg-emerald-600 border-emerald-600\" to override the default completed color." },
  { name: "activeColor", type: "string", default: '""', description: "Custom Tailwind CSS color classes applied to the currently active step indicator. Allows you to brand the active step differently from the default theme color." },
  { name: "renderStepContent", type: "(step: object, index: number) => ReactNode", default: "—", description: "A render function called for each step to display custom content in the step body area when that step is active. Receives the step object and its index. Use this to render forms, summaries, or any step-specific UI." },
];

export default function StepperPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [verticalStep, setVerticalStep] = useState(0);
  const [contentStep, setContentStep] = useState(0);
  const [linearStep, setLinearStep] = useState(0);

  return (
    <ComponentPage
      name="Stepper"
      description="An interactive multi-step progress indicator with horizontal and vertical orientations, click navigation, custom icons, and step content rendering. Perfect for onboarding flows, checkout processes, form wizards, and multi-stage workflows."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the Stepper component from readyui-react. Optionally import Lucide icons for custom step icons:
        </p>
        <CodeBlock code={`import { Stepper } from "readyui-react";
import { User, CreditCard, Package, CheckCircle } from "lucide-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Define an array of steps and use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">useState</code> to track the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">currentStep</code> index (0-based).
          The component renders navigation buttons and allows clicking on step indicators to jump between steps.
        </p>
        <Preview
          code={`const [currentStep, setCurrentStep] = useState(0);

const steps = [
  { id: "account", title: "Account", description: "Create your account" },
  { id: "profile", title: "Profile", description: "Set up your profile" },
  { id: "payment", title: "Payment", description: "Add payment method" },
  { id: "confirm", title: "Confirmation", description: "Review and confirm" },
];

<Stepper
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
/>`}
        >
          <Stepper
            steps={basicSteps}
            currentStep={currentStep}
            onStepChange={setCurrentStep}
          />
        </Preview>
      </Section>

      {/* Vertical Orientation */}
      <Section title="Vertical Orientation">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">orientation</code> to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"vertical"</code> to stack
          the step indicators in a column. This is ideal for sidebar navigation, narrow containers, or when you have many steps
          that would overflow horizontally.
        </p>
        <Preview
          code={`<Stepper
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  orientation="vertical"
/>`}
        >
          <Stepper
            steps={iconSteps}
            currentStep={verticalStep}
            onStepChange={setVerticalStep}
            orientation="vertical"
          />
        </Preview>
      </Section>

      {/* Custom Step Content */}
      <Section title="Custom Step Content">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">renderStepContent</code> prop
          to display custom content for the active step. This function receives the step object and its index, allowing you to
          render forms, summaries, or any React element specific to each stage.
        </p>
        <Preview
          code={`<Stepper
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  renderStepContent={(step, index) => (
    <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">
        Content for step {index + 1}: {step.description}
      </p>
    </div>
  )}
/>`}
        >
          <Stepper
            steps={basicSteps}
            currentStep={contentStep}
            onStepChange={setContentStep}
            renderStepContent={(step, index) => (
              <div className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Content for step {index + 1}: {step.description}
                </p>
              </div>
            )}
          />
        </Preview>
      </Section>

      {/* Click Navigation Disabled */}
      <Section title="Click Navigation Disabled">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">allowClickNavigation</code> to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">false</code> to enforce
          linear step progression. Users must use the Previous and Next buttons instead of clicking on step indicators directly.
          This is useful for flows where each step must be completed before proceeding.
        </p>
        <Preview
          code={`<Stepper
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
  allowClickNavigation={false}
/>`}
        >
          <Stepper
            steps={basicSteps}
            currentStep={linearStep}
            onStepChange={setLinearStep}
            allowClickNavigation={false}
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
