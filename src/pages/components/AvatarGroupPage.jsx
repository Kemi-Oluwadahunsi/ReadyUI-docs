import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { AvatarGroup } from "readyui-react";

const demoAvatars = [
  { src: "https://i.pravatar.cc/150?img=1", name: "Alice Johnson", status: "online" },
  { src: "https://i.pravatar.cc/150?img=2", name: "Bob Smith", status: "busy" },
  { src: "https://i.pravatar.cc/150?img=3", name: "Carol White", status: "away" },
  { src: "https://i.pravatar.cc/150?img=4", name: "Dave Brown", status: "online" },
  { src: "https://i.pravatar.cc/150?img=5", name: "Eve Davis", status: "offline" },
  { src: "https://i.pravatar.cc/150?img=6", name: "Frank Miller", status: "online" },
  { src: "https://i.pravatar.cc/150?img=7", name: "Grace Lee", status: "busy" },
  { src: "https://i.pravatar.cc/150?img=8", name: "Hank Wilson", status: "away" },
];

const props = [
  {
    name: "avatars",
    type: "Array<{ src?, name?, alt?, status? }>",
    default: "[]",
    description:
      "An array of avatar objects to render. Each object can include a src URL for the image, a name used to generate initials as a fallback, an alt text for accessibility, and a status string such as \"online\", \"offline\", \"busy\", or \"away\" for the status indicator dot.",
  },
  {
    name: "max",
    type: "number",
    default: "5",
    description:
      "The maximum number of avatars to display before collapsing the rest into a \"+N\" overflow badge. Useful for keeping the group compact when dealing with large teams.",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description:
      "Controls the diameter of each avatar in the group. \"sm\" is compact for dense UIs, \"md\" is the standard size, and \"lg\" is larger for high-visibility layouts.",
  },
  {
    name: "variant",
    type: '"stack" | "grid"',
    default: '"stack"',
    description:
      "Determines the layout mode. \"stack\" overlaps avatars horizontally with a negative margin, while \"grid\" arranges them in a non-overlapping grid layout.",
  },
  {
    name: "spacing",
    type: "string",
    default: "—",
    description:
      "Custom spacing value applied between avatars. When omitted, the component calculates an appropriate default overlap based on the current size.",
  },
  {
    name: "bordered",
    type: "boolean",
    default: "true",
    description:
      "When true, each avatar receives a white ring border that visually separates overlapping avatars in the stack layout.",
  },
  {
    name: "onAvatarClick",
    type: "(avatar, index) => void",
    default: "—",
    description:
      "Callback fired when an individual avatar is clicked. Receives the avatar object and its index, enabling actions like opening a user profile or tooltip.",
  },
  {
    name: "onOverflowClick",
    type: "(hiddenAvatars) => void",
    default: "—",
    description:
      "Callback fired when the \"+N\" overflow badge is clicked. Receives the array of hidden avatar objects so you can display them in a dropdown or modal.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the root container element for custom styling overrides.",
  },
  {
    name: "showStatus",
    type: "boolean",
    default: "true",
    description:
      "Controls whether colored status indicator dots are displayed on each avatar. Set to false to hide all status indicators.",
  },
];

export default function AvatarGroupPage() {
  const [clickedAvatar, setClickedAvatar] = useState(null);

  return (
    <ComponentPage
      name="AvatarGroup"
      description="A stacked group of user avatars with image or initials fallback, colored status indicators, and a +N overflow badge. Perfect for displaying team members, participants, or collaborators in a compact layout."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { AvatarGroup } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass an array of avatar objects to the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">avatars</code>{" "}
          prop. Each object should include a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">src</code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">name</code>{" "}
          at minimum. By default the component displays up to 5 avatars.
        </p>
        <Preview
          code={`const avatars = [
  { src: "https://i.pravatar.cc/150?img=1", name: "Alice Johnson", status: "online" },
  { src: "https://i.pravatar.cc/150?img=2", name: "Bob Smith", status: "busy" },
  { src: "https://i.pravatar.cc/150?img=3", name: "Carol White", status: "away" },
  { src: "https://i.pravatar.cc/150?img=4", name: "Dave Brown", status: "online" },
  { src: "https://i.pravatar.cc/150?img=5", name: "Eve Davis", status: "offline" },
];

<AvatarGroup avatars={avatars} />`}
        >
          <AvatarGroup avatars={demoAvatars.slice(0, 5)} />
        </Preview>
      </Section>

      {/* Max Overflow */}
      <Section title="Max Overflow">
        <p className="text-gray-600 dark:text-gray-400">
          When the number of avatars exceeds the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">max</code>{" "}
          prop, a "+N" badge appears indicating how many additional avatars are hidden. Here we set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">max={"{3}"}</code>{" "}
          with 8 avatars so "+5" is shown.
        </p>
        <Preview
          code={`<AvatarGroup avatars={avatars} max={3} />`}
        >
          <AvatarGroup avatars={demoAvatars} max={3} />
        </Preview>
      </Section>

      {/* Sizes */}
      <Section title="Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">size</code>{" "}
          prop to control the diameter of each avatar. Available sizes are{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">sm</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">md</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">lg</code>.
        </p>
        <Preview
          code={`<AvatarGroup avatars={avatars} size="sm" />
<AvatarGroup avatars={avatars} size="md" />
<AvatarGroup avatars={avatars} size="lg" />`}
        >
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Small</span>
              <AvatarGroup avatars={demoAvatars.slice(0, 5)} size="sm" />
            </div>
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Medium (default)</span>
              <AvatarGroup avatars={demoAvatars.slice(0, 5)} size="md" />
            </div>
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Large</span>
              <AvatarGroup avatars={demoAvatars.slice(0, 5)} size="lg" />
            </div>
          </div>
        </Preview>
      </Section>

      {/* With Status Indicators */}
      <Section title="With Status Indicators">
        <p className="text-gray-600 dark:text-gray-400">
          Each avatar can display a colored status dot when the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showStatus</code>{" "}
          prop is true (the default). Supported statuses include{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">online</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">offline</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">busy</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">away</code>.
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showStatus={"{false}"}</code>{" "}
          to hide them.
        </p>
        <Preview
          code={`// With status (default)
<AvatarGroup avatars={avatars} showStatus />

// Without status
<AvatarGroup avatars={avatars} showStatus={false} />`}
        >
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">With status dots</span>
              <AvatarGroup avatars={demoAvatars.slice(0, 5)} showStatus />
            </div>
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">Without status dots</span>
              <AvatarGroup avatars={demoAvatars.slice(0, 5)} showStatus={false} />
            </div>
          </div>
        </Preview>
      </Section>

      {/* Click Handling */}
      <Section title="Click Handling">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onAvatarClick</code>{" "}
          to handle clicks on individual avatars and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onOverflowClick</code>{" "}
          to handle clicks on the "+N" overflow badge. Both callbacks receive the relevant avatar data.
        </p>
        <Preview
          code={`const [clickedAvatar, setClickedAvatar] = useState(null);

<AvatarGroup
  avatars={avatars}
  max={4}
  onAvatarClick={(avatar) => setClickedAvatar(avatar.name)}
  onOverflowClick={(hidden) => alert(\`\${hidden.length} more avatars\`)}
/>
{clickedAvatar && <p>Clicked: {clickedAvatar}</p>}`}
        >
          <div>
            <AvatarGroup
              avatars={demoAvatars}
              max={4}
              onAvatarClick={(avatar) => setClickedAvatar(avatar.name)}
              onOverflowClick={(hidden) => alert(`${hidden.length} more avatars`)}
            />
            {clickedAvatar && (
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                Clicked: <strong>{clickedAvatar}</strong>
              </p>
            )}
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
