import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { SpotlightCard } from "readyui-react";

const props = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "The content rendered inside the spotlight card. This can be any combination of text, icons, images, or other React elements that form the card body.",
    required: true,
  },
  {
    name: "spotlightColor",
    type: "string",
    default: '"rgba(59,130,246,0.15)"',
    description:
      "The color of the mouse-following spotlight glow effect, specified as an rgba string. Adjust the alpha channel to control the intensity of the glow.",
  },
  {
    name: "spotlightSize",
    type: "number",
    default: "300",
    description:
      "The diameter in pixels of the spotlight glow that follows the cursor. Larger values create a softer, more diffused light effect.",
  },
  {
    name: "borderGlow",
    type: "boolean",
    default: "true",
    description:
      "When enabled, the card border reacts to the cursor position, creating a glowing border segment near the mouse pointer for an interactive highlight effect.",
  },
  {
    name: "borderColor",
    type: "string",
    default: '"rgba(59,130,246,0.3)"',
    description:
      "The color of the reactive border glow effect, specified as an rgba string. This should complement the spotlightColor for a cohesive look.",
  },
  {
    name: "tilt",
    type: "boolean",
    default: "false",
    description:
      "When enabled, the card subtly tilts in 3D space based on the cursor position, creating a perspective effect that enhances the interactive feel.",
  },
  {
    name: "maxTilt",
    type: "number",
    default: "8",
    description:
      "The maximum tilt angle in degrees when the tilt effect is enabled. Higher values create more dramatic 3D rotation as the cursor moves across the card.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the outer card container for custom sizing, spacing, and styling overrides.",
  },
  {
    name: "onClick",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked when the card is clicked. Useful for making the card a clickable navigation element or trigger.",
  },
];

export default function SpotlightCardPage() {
  return (
    <ComponentPage
      name="SpotlightCard"
      description="An interactive card with a mouse-following spotlight glow, reactive border highlights, and optional 3D tilt. Ideal for feature showcases, pricing cards, and landing page sections."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { SpotlightCard } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Wrap your content in a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            SpotlightCard
          </code>{" "}
          and hover over it to see the spotlight glow follow your cursor. The border
          also reacts to the mouse position by default.
        </p>
        <Preview
          code={`<SpotlightCard>
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
      ⚡
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lightning Fast</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Built on modern web standards with optimized rendering for blazing fast performance.
      </p>
    </div>
  </div>
</SpotlightCard>`}
        >
          <SpotlightCard>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                ⚡
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lightning Fast</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Built on modern web standards with optimized rendering for blazing fast performance.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </Preview>
      </Section>

      {/* Custom Spotlight Color */}
      <Section title="Custom Spotlight Color">
        <p className="text-gray-600 dark:text-gray-400">
          Change the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            spotlightColor
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            borderColor
          </code>{" "}
          to match your brand or theme. Use any valid rgba color value.
        </p>
        <Preview
          code={`<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <SpotlightCard
    spotlightColor="rgba(168,85,247,0.15)"
    borderColor="rgba(168,85,247,0.3)"
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl">🎨</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Purple Glow</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">A purple-themed spotlight for creative sections.</p>
      </div>
    </div>
  </SpotlightCard>
  <SpotlightCard
    spotlightColor="rgba(16,185,129,0.15)"
    borderColor="rgba(16,185,129,0.3)"
  >
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl">🌿</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Green Glow</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">An emerald-themed spotlight for success states.</p>
      </div>
    </div>
  </SpotlightCard>
</div>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SpotlightCard
              spotlightColor="rgba(168,85,247,0.15)"
              borderColor="rgba(168,85,247,0.3)"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl">🎨</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Purple Glow</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">A purple-themed spotlight for creative sections.</p>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard
              spotlightColor="rgba(16,185,129,0.15)"
              borderColor="rgba(16,185,129,0.3)"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl">🌿</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Green Glow</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">An emerald-themed spotlight for success states.</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </Preview>
      </Section>

      {/* With Tilt Effect */}
      <Section title="With Tilt Effect">
        <p className="text-gray-600 dark:text-gray-400">
          Enable the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            tilt
          </code>{" "}
          prop for a subtle 3D perspective rotation that responds to cursor position.
          Adjust{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            maxTilt
          </code>{" "}
          to control the intensity.
        </p>
        <Preview
          code={`<SpotlightCard tilt maxTilt={12}>
  <div className="text-center">
    <div className="text-4xl mb-3">🚀</div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">3D Tilt Effect</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
      Move your cursor across the card to see it tilt in 3D space.
    </p>
  </div>
</SpotlightCard>`}
        >
          <SpotlightCard tilt maxTilt={12}>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">3D Tilt Effect</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Move your cursor across the card to see it tilt in 3D space.
              </p>
            </div>
          </SpotlightCard>
        </Preview>
      </Section>

      {/* Without Border Glow */}
      <Section title="Without Border Glow">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            borderGlow
          </code>{" "}
          to false to keep only the spotlight glow without the reactive border highlight.
          This creates a subtler, background-only effect.
        </p>
        <Preview
          code={`<SpotlightCard borderGlow={false}>
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-zinc-700 flex items-center justify-center text-gray-600 dark:text-gray-400 text-xl">🔒</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Subtle Glow</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        Only the background spotlight effect without the reactive border.
      </p>
    </div>
  </div>
</SpotlightCard>`}
        >
          <SpotlightCard borderGlow={false}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-zinc-700 flex items-center justify-center text-gray-600 dark:text-gray-400 text-xl">🔒</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Subtle Glow</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Only the background spotlight effect without the reactive border.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </Preview>
      </Section>

      {/* Different Spotlight Sizes */}
      <Section title="Different Spotlight Sizes">
        <p className="text-gray-600 dark:text-gray-400">
          Adjust{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            spotlightSize
          </code>{" "}
          to control how large the glow area is. Smaller values create a focused beam,
          while larger values produce a diffused ambient light.
        </p>
        <Preview
          code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <SpotlightCard spotlightSize={150}>
    <div className="text-center">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Small (150px)</p>
      <p className="text-xs text-gray-500 mt-1">Focused beam</p>
    </div>
  </SpotlightCard>
  <SpotlightCard spotlightSize={300}>
    <div className="text-center">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Medium (300px)</p>
      <p className="text-xs text-gray-500 mt-1">Default size</p>
    </div>
  </SpotlightCard>
  <SpotlightCard spotlightSize={500}>
    <div className="text-center">
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Large (500px)</p>
      <p className="text-xs text-gray-500 mt-1">Ambient glow</p>
    </div>
  </SpotlightCard>
</div>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SpotlightCard spotlightSize={150}>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Small (150px)</p>
                <p className="text-xs text-gray-500 mt-1">Focused beam</p>
              </div>
            </SpotlightCard>
            <SpotlightCard spotlightSize={300}>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Medium (300px)</p>
                <p className="text-xs text-gray-500 mt-1">Default size</p>
              </div>
            </SpotlightCard>
            <SpotlightCard spotlightSize={500}>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Large (500px)</p>
                <p className="text-xs text-gray-500 mt-1">Ambient glow</p>
              </div>
            </SpotlightCard>
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
