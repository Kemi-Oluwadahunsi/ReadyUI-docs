import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Marquee } from "readyui-react";

const props = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "The content to scroll inside the marquee. This can be any combination of text, images, cards, or other React elements that will be duplicated and looped continuously.",
    required: true,
  },
  {
    name: "direction",
    type: '"left" | "right" | "up" | "down"',
    default: '"left"',
    description:
      'Sets the scrolling direction of the marquee content. Use "left" or "right" for horizontal scrolling, and "up" or "down" for vertical scrolling.',
  },
  {
    name: "speed",
    type: "number",
    default: "50",
    description:
      "Controls the scroll speed in pixels per second. Lower values create a slow, elegant drift while higher values produce a faster, more dynamic scroll.",
  },
  {
    name: "pauseOnHover",
    type: "boolean",
    default: "true",
    description:
      "When enabled, the scrolling animation pauses when the user hovers over the marquee, allowing them to read or interact with the content.",
  },
  {
    name: "gap",
    type: "number",
    default: "40",
    description:
      "The spacing in pixels between the end of the content and the beginning of the repeated copy. Increase this for more breathing room between loops.",
  },
  {
    name: "reverse",
    type: "boolean",
    default: "false",
    description:
      "Reverses the scroll direction. When combined with the direction prop, this allows you to create opposing scroll rows for a visually dynamic layout.",
  },
  {
    name: "gradient",
    type: "boolean",
    default: "true",
    description:
      "Adds a fade-out gradient overlay on both edges of the marquee to create a smooth blending effect with the surrounding background.",
  },
  {
    name: "gradientWidth",
    type: "number",
    default: "60",
    description:
      "Sets the width in pixels of the gradient fade overlay on each edge. Set to 0 to disable the gradient entirely, or increase for a wider fade effect.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names to apply to the marquee container for custom styling and layout adjustments.",
  },
];

export default function MarqueePage() {
  return (
    <ComponentPage
      name="Marquee"
      description="A smooth, infinitely scrolling content strip with edge fade gradients. Perfect for logo carousels, testimonial tickers, and announcement banners."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { Marquee } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass any content as{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            children
          </code>{" "}
          and it will scroll continuously. The marquee automatically duplicates the
          content to create a seamless loop.
        </p>
        <Preview
          code={`<Marquee>
  <span className="mx-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">React</span>
  <span className="mx-6 px-4 py-2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Tailwind</span>
  <span className="mx-6 px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Vite</span>
  <span className="mx-6 px-4 py-2 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">TypeScript</span>
  <span className="mx-6 px-4 py-2 bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">Next.js</span>
  <span className="mx-6 px-4 py-2 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">Node.js</span>
</Marquee>`}
        >
          <Marquee>
            <span className="mx-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">React</span>
            <span className="mx-6 px-4 py-2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">Tailwind</span>
            <span className="mx-6 px-4 py-2 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Vite</span>
            <span className="mx-6 px-4 py-2 bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">TypeScript</span>
            <span className="mx-6 px-4 py-2 bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">Next.js</span>
            <span className="mx-6 px-4 py-2 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">Node.js</span>
          </Marquee>
        </Preview>
      </Section>

      {/* Reverse Direction */}
      <Section title="Reverse Direction">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            reverse
          </code>{" "}
          to scroll content in the opposite direction. Combine two marquees with
          opposing directions for a dynamic visual effect.
        </p>
        <Preview
          code={`<Marquee reverse>
  <span className="mx-6 px-4 py-2 bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium">Design</span>
  <span className="mx-6 px-4 py-2 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium">Develop</span>
  <span className="mx-6 px-4 py-2 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">Deploy</span>
  <span className="mx-6 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">Scale</span>
  <span className="mx-6 px-4 py-2 bg-lime-100 dark:bg-lime-900/40 text-lime-700 dark:text-lime-300 rounded-full text-sm font-medium">Monitor</span>
</Marquee>`}
        >
          <Marquee reverse>
            <span className="mx-6 px-4 py-2 bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 rounded-full text-sm font-medium">Design</span>
            <span className="mx-6 px-4 py-2 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium">Develop</span>
            <span className="mx-6 px-4 py-2 bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">Deploy</span>
            <span className="mx-6 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">Scale</span>
            <span className="mx-6 px-4 py-2 bg-lime-100 dark:bg-lime-900/40 text-lime-700 dark:text-lime-300 rounded-full text-sm font-medium">Monitor</span>
          </Marquee>
        </Preview>
      </Section>

      {/* Custom Speed */}
      <Section title="Custom Speed">
        <p className="text-gray-600 dark:text-gray-400">
          Adjust the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            speed
          </code>{" "}
          prop to control how fast the content scrolls. A lower value like 20 creates
          a slow, relaxed drift.
        </p>
        <Preview
          code={`<Marquee speed={20} gap={60}>
  <span className="mx-6 text-lg font-semibold text-gray-700 dark:text-gray-300">🚀 Fast Builds</span>
  <span className="mx-6 text-lg font-semibold text-gray-700 dark:text-gray-300">⚡ Live Reload</span>
  <span className="mx-6 text-lg font-semibold text-gray-700 dark:text-gray-300">🎨 Beautiful UI</span>
  <span className="mx-6 text-lg font-semibold text-gray-700 dark:text-gray-300">📦 Tree Shaking</span>
  <span className="mx-6 text-lg font-semibold text-gray-700 dark:text-gray-300">🔒 Type Safe</span>
</Marquee>`}
        >
          <Marquee speed={20} gap={60}>
            <span className="mx-6 text-lg font-semibold text-gray-700 dark:text-gray-300">🚀 Fast Builds</span>
            <span className="mx-6 text-lg font-semibold text-gray-700 dark:text-gray-300">⚡ Live Reload</span>
            <span className="mx-6 text-lg font-semibold text-gray-700 dark:text-gray-300">🎨 Beautiful UI</span>
            <span className="mx-6 text-lg font-semibold text-gray-700 dark:text-gray-300">📦 Tree Shaking</span>
            <span className="mx-6 text-lg font-semibold text-gray-700 dark:text-gray-300">🔒 Type Safe</span>
          </Marquee>
        </Preview>
      </Section>

      {/* Without Gradient */}
      <Section title="Without Gradient">
        <p className="text-gray-600 dark:text-gray-400">
          Disable the edge fade effect by setting{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            gradient
          </code>{" "}
          to false. This is useful when the marquee spans the full width of the viewport.
        </p>
        <Preview
          code={`<Marquee gradient={false} speed={60}>
  <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">HTML</span>
  <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">CSS</span>
  <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">JavaScript</span>
  <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">Python</span>
  <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">Rust</span>
  <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">Go</span>
</Marquee>`}
        >
          <Marquee gradient={false} speed={60}>
            <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">HTML</span>
            <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">CSS</span>
            <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">JavaScript</span>
            <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">Python</span>
            <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">Rust</span>
            <span className="mx-4 px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded text-sm">Go</span>
          </Marquee>
        </Preview>
      </Section>

      {/* With Cards */}
      <Section title="With Cards">
        <p className="text-gray-600 dark:text-gray-400">
          The marquee works with any content — including cards, images, and complex
          layouts. Here is an example with styled card elements.
        </p>
        <Preview
          code={`<Marquee speed={35} gap={24}>
  <div className="mx-2 w-56 p-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm">
    <h4 className="font-semibold text-gray-900 dark:text-white">Analytics</h4>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Track user engagement and performance metrics in real time.</p>
  </div>
  <div className="mx-2 w-56 p-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm">
    <h4 className="font-semibold text-gray-900 dark:text-white">Security</h4>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">End-to-end encryption and role-based access control built in.</p>
  </div>
  <div className="mx-2 w-56 p-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm">
    <h4 className="font-semibold text-gray-900 dark:text-white">Integrations</h4>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Connect with Slack, GitHub, Jira and 200+ other tools.</p>
  </div>
  <div className="mx-2 w-56 p-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm">
    <h4 className="font-semibold text-gray-900 dark:text-white">Automation</h4>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Set up workflows and triggers to automate repetitive tasks.</p>
  </div>
</Marquee>`}
        >
          <Marquee speed={35} gap={24}>
            <div className="mx-2 w-56 p-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white">Analytics</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Track user engagement and performance metrics in real time.</p>
            </div>
            <div className="mx-2 w-56 p-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white">Security</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">End-to-end encryption and role-based access control built in.</p>
            </div>
            <div className="mx-2 w-56 p-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white">Integrations</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Connect with Slack, GitHub, Jira and 200+ other tools.</p>
            </div>
            <div className="mx-2 w-56 p-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white">Automation</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Set up workflows and triggers to automate repetitive tasks.</p>
            </div>
          </Marquee>
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
