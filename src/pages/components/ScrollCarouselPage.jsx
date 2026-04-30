import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { ScrollCarousel } from "readyui-react";

const props = [
  {
    name: "items",
    type: "array",
    default: "[]",
    required: true,
    description:
      "An array of data objects to be rendered as carousel slides. Each object is passed to the renderItem function so its shape is entirely up to you.",
  },
  {
    name: "renderItem",
    type: "(item, index) => ReactNode",
    default: "—",
    required: true,
    description:
      "A render function called for every item in the array. Receives the item object and its index and should return a React element representing a single slide or card.",
  },
  {
    name: "autoScroll",
    type: "boolean",
    default: "true",
    description:
      "Whether the carousel automatically advances to the next slide on a timer. When true the carousel cycles through items continuously until the user interacts.",
  },
  {
    name: "autoScrollInterval",
    type: "number",
    default: "4000",
    description:
      "Time in milliseconds between automatic slide transitions. Only takes effect when autoScroll is enabled.",
  },
  {
    name: "showDots",
    type: "boolean",
    default: "true",
    description:
      "Whether to render pagination dots below the carousel. Each dot corresponds to a slide and can be clicked to navigate directly.",
  },
  {
    name: "showArrows",
    type: "boolean",
    default: "true",
    description:
      "Whether to render left and right navigation arrows on the sides of the carousel for manual slide control.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS classes applied to the outermost carousel container for layout or styling overrides.",
  },
  {
    name: "pauseOnInteract",
    type: "number",
    default: "5000",
    description:
      "Time in milliseconds to pause auto-scrolling after the user clicks an arrow or dot. After this delay, auto-scrolling resumes if enabled.",
  },
  {
    name: "itemsPerView",
    type: "number",
    default: "—",
    description:
      "Number of items visible at once in the carousel viewport. When set, the carousel calculates each item's width to fit the specified count. If omitted a single item fills the view.",
  },
  {
    name: "gap",
    type: "number",
    default: "24",
    description:
      "Spacing in pixels between adjacent carousel items. Applies when multiple items are visible at once via itemsPerView.",
  },
  {
    name: "scaleActive",
    type: "boolean",
    default: "false",
    description:
      "When true, the currently centred slide scales up slightly while surrounding slides remain at normal size, creating a spotlight effect.",
  },
  {
    name: "showEdgeFade",
    type: "boolean",
    default: "true",
    description:
      "Whether to apply a gradient fade on the left and right edges of the carousel to hint that more content is available beyond the viewport.",
  },
  {
    name: "cardClassName",
    type: "string",
    default: '""',
    description:
      "Additional CSS classes applied to each individual card/slide wrapper inside the carousel.",
  },
  {
    name: "mode",
    type: '"snap" | "continuous"',
    default: '"snap"',
    description:
      'The scrolling behaviour. "snap" advances one slide at a time with a snapping animation. "continuous" scrolls the items in a seamless loop at a constant speed, ideal for logo tickers or marquee-style displays.',
  },
  {
    name: "continuousSpeed",
    type: "number",
    default: "40",
    description:
      'Pixels per second for the continuous scroll animation. Only applies when mode is set to "continuous". Increase the value for faster scrolling.',
  },
];

const carouselItems = [
  { id: 1, title: "Mountain Sunrise", color: "from-orange-400 to-pink-500" },
  { id: 2, title: "Ocean Breeze", color: "from-cyan-400 to-blue-500" },
  { id: 3, title: "Forest Canopy", color: "from-green-400 to-emerald-600" },
  { id: 4, title: "Desert Dunes", color: "from-yellow-400 to-amber-500" },
  { id: 5, title: "Northern Lights", color: "from-purple-400 to-indigo-600" },
  { id: 6, title: "City Skyline", color: "from-slate-400 to-zinc-600" },
];

const renderCard = (item) => (
  <div
    className={`bg-gradient-to-br ${item.color} rounded-xl p-8 h-48 flex items-end`}
  >
    <h3 className="text-white text-xl font-bold drop-shadow">{item.title}</h3>
  </div>
);

export default function ScrollCarouselPage() {
  return (
    <ComponentPage
      name="ScrollCarousel"
      description="A responsive horizontal carousel with auto-scrolling, snap or continuous scroll modes, dot and arrow navigation, active-item scaling, and edge-fade effects."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the ScrollCarousel component from readyui-react:
        </p>
        <CodeBlock code={`import { ScrollCarousel } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Provide an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">items</code>{" "}
          array and a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">renderItem</code>{" "}
          function. The carousel auto-scrolls by default and shows dots and arrows for manual navigation.
        </p>
        <Preview
          code={`const items = [
  { id: 1, title: "Mountain Sunrise", color: "from-orange-400 to-pink-500" },
  { id: 2, title: "Ocean Breeze", color: "from-cyan-400 to-blue-500" },
  { id: 3, title: "Forest Canopy", color: "from-green-400 to-emerald-600" },
  { id: 4, title: "Desert Dunes", color: "from-yellow-400 to-amber-500" },
  { id: 5, title: "Northern Lights", color: "from-purple-400 to-indigo-600" },
  { id: 6, title: "City Skyline", color: "from-slate-400 to-zinc-600" },
];

const renderCard = (item) => (
  <div className={\`bg-gradient-to-br \${item.color} rounded-xl p-8 h-48 flex items-end\`}>
    <h3 className="text-white text-xl font-bold drop-shadow">{item.title}</h3>
  </div>
);

<ScrollCarousel items={items} renderItem={renderCard} />`}
        >
          <ScrollCarousel items={carouselItems} renderItem={renderCard} />
        </Preview>
      </Section>

      {/* Auto-Scroll Settings */}
      <Section title="Auto-Scroll Settings">
        <p className="text-gray-600 dark:text-gray-400">
          Control automatic scrolling with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">autoScroll</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">autoScrollInterval</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">pauseOnInteract</code>.
          The example below disables auto-scrolling entirely, requiring manual navigation only.
        </p>
        <Preview
          code={`<ScrollCarousel
  items={items}
  renderItem={renderCard}
  autoScroll={false}
/>`}
        >
          <ScrollCarousel
            items={carouselItems}
            renderItem={renderCard}
            autoScroll={false}
          />
        </Preview>
      </Section>

      {/* Scale Active Item */}
      <Section title="Scale Active Item">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">scaleActive</code>{" "}
          to give the currently centred slide a slight scale-up effect, drawing the user's attention to the active item.
        </p>
        <Preview
          code={`<ScrollCarousel
  items={items}
  renderItem={renderCard}
  scaleActive={true}
/>`}
        >
          <ScrollCarousel
            items={carouselItems}
            renderItem={renderCard}
            scaleActive={true}
          />
        </Preview>
      </Section>

      {/* Continuous Mode */}
      <Section title="Continuous Mode">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">mode</code>{" "}
          to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"continuous"</code>{" "}
          for a seamless, marquee-like loop. Adjust the speed with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">continuousSpeed</code>.
        </p>
        <Preview
          code={`<ScrollCarousel
  items={items}
  renderItem={renderCard}
  mode="continuous"
  continuousSpeed={60}
  showDots={false}
  showArrows={false}
/>`}
        >
          <ScrollCarousel
            items={carouselItems}
            renderItem={renderCard}
            mode="continuous"
            continuousSpeed={60}
            showDots={false}
            showArrows={false}
          />
        </Preview>
      </Section>

      {/* Multiple Items Per View */}
      <Section title="Multiple Items Per View">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">itemsPerView</code>{" "}
          to display several slides at once. The carousel automatically calculates the width of each item and applies the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">gap</code>{" "}
          spacing between them.
        </p>
        <Preview
          code={`<ScrollCarousel
  items={items}
  renderItem={renderCard}
  itemsPerView={3}
  gap={16}
  autoScroll={false}
/>`}
        >
          <ScrollCarousel
            items={carouselItems}
            renderItem={renderCard}
            itemsPerView={3}
            gap={16}
            autoScroll={false}
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
