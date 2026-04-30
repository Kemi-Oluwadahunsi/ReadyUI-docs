import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { ScrollAwareNavbar } from "readyui-react";

const props = [
  {
    name: "items",
    type: "Array<{ name|label, href, icon?, active? }>",
    default: "[]",
    required: true,
    description:
      "An array of navigation link objects. Each item should have a name or label string and an href. Optionally include an icon component and an active boolean to highlight the current page.",
  },
  {
    name: "logo",
    type: "ReactNode | string",
    default: "—",
    description:
      "The branding element rendered on the left side of the navbar. Can be a plain string for text logos or a ReactNode for images and custom markup.",
  },
  {
    name: "cta",
    type: "ReactNode | { label, onClick, variant? }",
    default: "—",
    description:
      "A call-to-action element rendered on the right side of the navbar. Pass a ReactNode for full control or an object with label, onClick, and an optional variant string for a styled button.",
  },
  {
    name: "behavior",
    type: '"auto-hide" | "sticky" | "scroll-shadow"',
    default: '"sticky"',
    description:
      'Controls how the navbar responds to page scrolling. "sticky" keeps it always visible at the top. "auto-hide" hides the navbar when scrolling down and reveals it when scrolling up. "scroll-shadow" adds a drop shadow after the user scrolls past the threshold.',
  },
  {
    name: "scrollThreshold",
    type: "number",
    default: "10",
    description:
      "The number of pixels the user must scroll before the navbar behavior activates. For auto-hide, this is the distance before the navbar begins hiding. For scroll-shadow, it is the distance before the shadow appears.",
  },
  {
    name: "transparent",
    type: "boolean",
    default: "false",
    description:
      "When true, the navbar renders with a transparent background, ideal for hero sections or landing pages where the navbar overlays content.",
  },
  {
    name: "blur",
    type: "boolean",
    default: "true",
    description:
      "Applies a backdrop blur effect to the navbar background. Works especially well with transparent mode to maintain readability over varied content.",
  },
  {
    name: "activeItem",
    type: "string",
    default: "—",
    description:
      "The href or name of the currently active navigation item. When set, the matching item receives active styling to indicate the current page.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the outermost navbar container for custom styling or layout overrides.",
  },
  {
    name: "onNavigate",
    type: "Function",
    default: "—",
    description:
      "Callback fired when a navigation item is clicked. Receives the item object as its argument, allowing integration with client-side routers.",
  },
  {
    name: "height",
    type: "number",
    default: "64",
    description:
      "The fixed height of the navbar in pixels. Adjust this to match your design system spacing.",
  },
];

const navItems = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function ScrollAwareNavbarPage() {
  return (
    <ComponentPage
      name="ScrollAwareNavbar"
      description="A responsive navigation bar that reacts to scroll position with auto-hide, sticky, and scroll-shadow behaviors. Includes support for logos, CTAs, and transparent overlays."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { ScrollAwareNavbar } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Provide an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            items
          </code>{" "}
          array and a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            logo
          </code>{" "}
          to render a basic sticky navbar. Each item needs a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            name
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            href
          </code>
          .
        </p>
        <Preview
          code={`const navItems = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

<ScrollAwareNavbar
  items={navItems}
  logo="ReadyUI"
/>`}
        >
          <div className="border rounded-lg overflow-hidden">
            <ScrollAwareNavbar items={navItems} logo="ReadyUI" />
          </div>
        </Preview>
      </Section>

      {/* Behavior Modes */}
      <Section title="Behavior Modes">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            behavior
          </code>{" "}
          prop controls how the navbar responds to scrolling. There are three modes:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 mb-4 space-y-1">
          <li>
            <strong>"sticky"</strong> — The navbar stays fixed at the top of the viewport at all times (default).
          </li>
          <li>
            <strong>"auto-hide"</strong> — The navbar slides out of view when the user scrolls down and reappears when scrolling up, saving vertical space.
          </li>
          <li>
            <strong>"scroll-shadow"</strong> — The navbar remains at the top but gains a subtle drop shadow once the user scrolls past the threshold, providing a visual cue of scroll depth.
          </li>
        </ul>
        <Preview
          code={`{/* Sticky (default) */}
<ScrollAwareNavbar items={navItems} logo="Sticky" behavior="sticky" />

{/* Auto-hide: hides on scroll down, shows on scroll up */}
<ScrollAwareNavbar items={navItems} logo="Auto Hide" behavior="auto-hide" />

{/* Scroll-shadow: adds shadow after scrolling */}
<ScrollAwareNavbar items={navItems} logo="Shadow" behavior="scroll-shadow" />`}
        >
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <ScrollAwareNavbar items={navItems} logo="Sticky" behavior="sticky" />
            </div>
            <div className="border rounded-lg overflow-hidden">
              <ScrollAwareNavbar items={navItems} logo="Auto Hide" behavior="auto-hide" />
            </div>
            <div className="border rounded-lg overflow-hidden">
              <ScrollAwareNavbar items={navItems} logo="Shadow" behavior="scroll-shadow" />
            </div>
          </div>
        </Preview>
      </Section>

      {/* Transparent Mode */}
      <Section title="Transparent Mode">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            transparent
          </code>{" "}
          to render the navbar with no background. Combine with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            blur
          </code>{" "}
          for a frosted-glass effect over hero sections.
        </p>
        <Preview
          code={`<ScrollAwareNavbar
  items={navItems}
  logo="ReadyUI"
  transparent
  blur
/>`}
        >
          <div className="border rounded-lg overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 p-0">
            <ScrollAwareNavbar items={navItems} logo="ReadyUI" transparent blur />
            <div className="h-20 flex items-center justify-center text-white/80 text-sm">
              Hero content behind transparent navbar
            </div>
          </div>
        </Preview>
      </Section>

      {/* With CTA Button */}
      <Section title="With CTA Button">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            cta
          </code>{" "}
          prop to add a call-to-action button on the right side of the navbar. Pass an object with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            label
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onClick
          </code>{" "}
          or a custom ReactNode.
        </p>
        <Preview
          code={`<ScrollAwareNavbar
  items={navItems}
  logo="ReadyUI"
  cta={{ label: "Get Started", onClick: () => alert("CTA clicked!") }}
/>`}
        >
          <div className="border rounded-lg overflow-hidden">
            <ScrollAwareNavbar
              items={navItems}
              logo="ReadyUI"
              cta={{ label: "Get Started", onClick: () => alert("CTA clicked!") }}
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
