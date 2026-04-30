import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { ConfirmDialog } from "readyui-react";

const props = [
  {
    name: "isOpen",
    type: "boolean",
    default: "false",
    description:
      "Controls the visibility of the confirmation dialog. Set to true to show the dialog and false to hide it.",
  },
  {
    name: "onConfirm",
    type: "() => void",
    default: "—",
    description:
      "Callback function invoked when the user clicks the confirm button. Use this to execute the confirmed action and close the dialog.",
  },
  {
    name: "onCancel",
    type: "() => void",
    default: "—",
    description:
      "Callback function invoked when the user clicks the cancel button or dismisses the dialog. Typically used to close the dialog without performing any action.",
  },
  {
    name: "title",
    type: "string",
    default: '"Are you sure?"',
    description:
      "The heading text displayed at the top of the dialog. Should clearly communicate what action the user is about to confirm.",
  },
  {
    name: "message",
    type: "string | ReactNode",
    default: "—",
    description:
      "The body text or content displayed below the title. Can be a plain string or a React element for richer formatting.",
  },
  {
    name: "confirmLabel",
    type: "string",
    default: '"Confirm"',
    description:
      "The label text for the primary confirmation button. Customize it to match the action, such as \"Delete\" or \"Proceed\".",
  },
  {
    name: "cancelLabel",
    type: "string",
    default: '"Cancel"',
    description:
      "The label text for the secondary cancel button. Defaults to \"Cancel\" but can be customized to \"Go Back\" or similar.",
  },
  {
    name: "variant",
    type: '"default" | "warning" | "danger"',
    default: '"default"',
    description:
      "Sets the visual tone of the dialog. \"default\" uses a neutral style, \"warning\" applies an amber/yellow theme for cautionary actions, and \"danger\" uses red styling for destructive operations.",
  },
  {
    name: "icon",
    type: "ReactNode",
    default: "—",
    description:
      "A custom icon element displayed alongside the title. Each variant provides a default icon, but you can override it with any React element.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the dialog panel for custom styling overrides.",
  },
  {
    name: "overlayClassName",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the backdrop overlay behind the dialog.",
  },
  {
    name: "showIcon",
    type: "boolean",
    default: "true",
    description:
      "Controls whether the icon is displayed in the dialog header. Set to false for a more minimal dialog appearance.",
  },
  {
    name: "closeOnOverlay",
    type: "boolean",
    default: "true",
    description:
      "When true, clicking the backdrop overlay will dismiss the dialog by calling onCancel.",
  },
  {
    name: "showButtons",
    type: "boolean",
    default: "true",
    description:
      "Controls whether the confirm and cancel buttons are rendered. Set to false when providing custom action buttons via children.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "Custom content rendered inside the dialog body, below the message. Use this to add forms, additional buttons, or other interactive elements.",
  },
];

export default function ConfirmDialogPage() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [dangerOpen, setDangerOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);
  const [noIconOpen, setNoIconOpen] = useState(false);

  return (
    <ComponentPage
      name="ConfirmDialog"
      description="A modal confirmation dialog for actions that require explicit user approval. Supports multiple severity variants, customizable labels, icons, and overlay behavior."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { ConfirmDialog } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Control the dialog with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">isOpen</code>{" "}
          state. Provide{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onConfirm</code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onCancel</code>{" "}
          callbacks to handle user responses.
        </p>
        <Preview
          code={`const [isOpen, setIsOpen] = useState(false);

<button
  onClick={() => setIsOpen(true)}
  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
>
  Open Dialog
</button>

<ConfirmDialog
  isOpen={isOpen}
  title="Confirm Action"
  message="Are you sure you want to proceed with this action?"
  onConfirm={() => setIsOpen(false)}
  onCancel={() => setIsOpen(false)}
/>`}
        >
          <div>
            <button
              onClick={() => setBasicOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
            >
              Open Dialog
            </button>
            <ConfirmDialog
              isOpen={basicOpen}
              title="Confirm Action"
              message="Are you sure you want to proceed with this action?"
              onConfirm={() => setBasicOpen(false)}
              onCancel={() => setBasicOpen(false)}
            />
          </div>
        </Preview>
      </Section>

      {/* Danger Variant */}
      <Section title="Danger Variant">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">variant="danger"</code>{" "}
          for destructive actions like deleting data. The confirm button adopts a red color scheme and the icon
          indicates risk.
        </p>
        <Preview
          code={`<ConfirmDialog
  isOpen={isOpen}
  variant="danger"
  title="Delete Account"
  message="This action is permanent and cannot be undone. All your data will be lost."
  confirmLabel="Delete"
  cancelLabel="Keep Account"
  onConfirm={() => setIsOpen(false)}
  onCancel={() => setIsOpen(false)}
/>`}
        >
          <div>
            <button
              onClick={() => setDangerOpen(true)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm"
            >
              Delete Account
            </button>
            <ConfirmDialog
              isOpen={dangerOpen}
              variant="danger"
              title="Delete Account"
              message="This action is permanent and cannot be undone. All your data will be lost."
              confirmLabel="Delete"
              cancelLabel="Keep Account"
              onConfirm={() => setDangerOpen(false)}
              onCancel={() => setDangerOpen(false)}
            />
          </div>
        </Preview>
      </Section>

      {/* Warning Variant */}
      <Section title="Warning Variant">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">variant="warning"</code>{" "}
          for actions that are significant but recoverable. The dialog uses an amber/yellow color scheme to convey
          caution without the severity of danger.
        </p>
        <Preview
          code={`<ConfirmDialog
  isOpen={isOpen}
  variant="warning"
  title="Unsaved Changes"
  message="You have unsaved changes that will be lost if you leave this page."
  confirmLabel="Leave Page"
  cancelLabel="Stay"
  onConfirm={() => setIsOpen(false)}
  onCancel={() => setIsOpen(false)}
/>`}
        >
          <div>
            <button
              onClick={() => setWarningOpen(true)}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg text-sm"
            >
              Leave Page
            </button>
            <ConfirmDialog
              isOpen={warningOpen}
              variant="warning"
              title="Unsaved Changes"
              message="You have unsaved changes that will be lost if you leave this page."
              confirmLabel="Leave Page"
              cancelLabel="Stay"
              onConfirm={() => setWarningOpen(false)}
              onCancel={() => setWarningOpen(false)}
            />
          </div>
        </Preview>
      </Section>

      {/* Custom Content */}
      <Section title="Custom Content">
        <p className="text-gray-600 dark:text-gray-400">
          Pass{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">children</code>{" "}
          to render custom content inside the dialog body. This is useful for adding forms, checkboxes,
          or additional context below the message.
        </p>
        <Preview
          code={`<ConfirmDialog
  isOpen={isOpen}
  title="Export Data"
  message="Choose your export format before proceeding."
  onConfirm={() => setIsOpen(false)}
  onCancel={() => setIsOpen(false)}
>
  <div className="mt-3 space-y-2">
    <label className="flex items-center gap-2 text-sm">
      <input type="radio" name="format" defaultChecked /> CSV
    </label>
    <label className="flex items-center gap-2 text-sm">
      <input type="radio" name="format" /> JSON
    </label>
  </div>
</ConfirmDialog>`}
        >
          <div>
            <button
              onClick={() => setCustomOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
            >
              Export Data
            </button>
            <ConfirmDialog
              isOpen={customOpen}
              title="Export Data"
              message="Choose your export format before proceeding."
              onConfirm={() => setCustomOpen(false)}
              onCancel={() => setCustomOpen(false)}
            >
              <div className="mt-3 space-y-2">
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="radio" name="format" defaultChecked /> CSV
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <input type="radio" name="format" /> JSON
                </label>
              </div>
            </ConfirmDialog>
          </div>
        </Preview>
      </Section>

      {/* Without Icon */}
      <Section title="Without Icon">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showIcon={"{false}"}</code>{" "}
          for a more minimal dialog without the leading icon.
        </p>
        <Preview
          code={`<ConfirmDialog
  isOpen={isOpen}
  showIcon={false}
  title="Confirm Subscription"
  message="You will be billed $9.99/month starting today."
  confirmLabel="Subscribe"
  onConfirm={() => setIsOpen(false)}
  onCancel={() => setIsOpen(false)}
/>`}
        >
          <div>
            <button
              onClick={() => setNoIconOpen(true)}
              className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded-lg text-sm"
            >
              Subscribe
            </button>
            <ConfirmDialog
              isOpen={noIconOpen}
              showIcon={false}
              title="Confirm Subscription"
              message="You will be billed $9.99/month starting today."
              confirmLabel="Subscribe"
              onConfirm={() => setNoIconOpen(false)}
              onCancel={() => setNoIconOpen(false)}
            />
          </div>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
