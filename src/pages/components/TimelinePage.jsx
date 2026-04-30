import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { TimeLine } from "readyui-react";

const props = [
  {
    name: "items",
    type: "array",
    default: "[]",
    required: true,
    description:
      "An array of timeline event objects. Each object should include id (unique identifier), title (event heading), description (body text), date (display date string), and optionally icon (React element), color (Tailwind color class for the dot), tag (label string), and tagColor (Tailwind color class for the tag badge).",
  },
  {
    name: "variant",
    type: '"default" | "alternating" | "compact"',
    default: '"default"',
    description:
      'Controls the visual layout of the timeline. "default" places all events on one side, "alternating" switches events left and right for a centred layout, and "compact" renders a condensed single-column list with smaller spacing.',
  },
  {
    name: "lineColor",
    type: "string",
    default: '"bg-blue-500"',
    description:
      "Tailwind background-color utility class applied to the vertical connector line. Change it to match your brand palette — for example bg-emerald-500 or bg-purple-600.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS classes applied to the outermost timeline wrapper for layout or spacing overrides.",
  },
  {
    name: "renderItem",
    type: "(item) => ReactNode",
    default: "—",
    description:
      "Optional render function that lets you fully customise each timeline card. Receives the item object and should return a React element. When omitted the component uses its built-in card design.",
  },
  {
    name: "animate",
    type: "boolean",
    default: "true",
    description:
      "Whether timeline items animate into view as the user scrolls. Set to false for a static layout with no entrance transitions.",
  },
];

const basicItems = [
  {
    id: "1",
    title: "Project Kickoff",
    description: "Assembled the core team and defined project scope, milestones, and deliverables for Q1.",
    date: "Jan 2024",
    tag: "Planning",
    tagColor: "blue",
  },
  {
    id: "2",
    title: "Design Phase Complete",
    description: "Finalised UI/UX wireframes and design system tokens. Handed off assets to the engineering team.",
    date: "Mar 2024",
    tag: "Design",
    tagColor: "purple",
  },
  {
    id: "3",
    title: "Alpha Release",
    description: "Shipped the first internal alpha build with core features for stakeholder review and feedback.",
    date: "Jun 2024",
    tag: "Development",
    tagColor: "yellow",
  },
  {
    id: "4",
    title: "Public Beta Launch",
    description: "Opened the beta programme to 500 early adopters. Collected feedback and triaged critical bugs.",
    date: "Sep 2024",
    tag: "Release",
    tagColor: "green",
  },
  {
    id: "5",
    title: "v1.0 General Availability",
    description: "Launched the stable v1.0 release to production with full documentation and support channels.",
    date: "Dec 2024",
    tag: "Milestone",
    tagColor: "red",
  },
];

export default function TimeLinePage() {
  return (
    <ComponentPage
      name="TimeLine"
      description="A vertical timeline component for displaying chronological events with animated entrance transitions, colour-coded dots, tags, and multiple layout variants."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the TimeLine component from readyui-react:
        </p>
        <CodeBlock code={`import { TimeLine } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass an array of event objects to the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">items</code>{" "}
          prop. Each item should contain at minimum an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">id</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">title</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">description</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">date</code>.
        </p>
        <Preview
          code={`const items = [
  { id: "1", title: "Project Kickoff", description: "Assembled the core team and defined project scope.", date: "Jan 2024", tag: "Planning", tagColor: "blue" },
  { id: "2", title: "Design Phase Complete", description: "Finalised UI/UX wireframes and design system tokens.", date: "Mar 2024", tag: "Design", tagColor: "purple" },
  { id: "3", title: "Alpha Release", description: "Shipped the first internal alpha build.", date: "Jun 2024", tag: "Development", tagColor: "yellow" },
  { id: "4", title: "Public Beta Launch", description: "Opened the beta to 500 early adopters.", date: "Sep 2024", tag: "Release", tagColor: "green" },
  { id: "5", title: "v1.0 General Availability", description: "Launched stable v1.0 to production.", date: "Dec 2024", tag: "Milestone", tagColor: "red" },
];

<TimeLine items={items} />`}
        >
          <TimeLine items={basicItems} />
        </Preview>
      </Section>

      {/* Alternating Layout */}
      <Section title="Alternating Layout">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">variant</code>{" "}
          to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"alternating"</code>{" "}
          to display events on alternating sides of the vertical line, creating a balanced centred layout.
        </p>
        <Preview
          code={`<TimeLine items={items} variant="alternating" />`}
        >
          <TimeLine items={basicItems} variant="alternating" />
        </Preview>
      </Section>

      {/* Compact Variant */}
      <Section title="Compact Variant">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"compact"</code>{" "}
          variant renders a condensed single-column timeline with reduced spacing — ideal for sidebar widgets or activity logs.
        </p>
        <Preview
          code={`<TimeLine items={items} variant="compact" />`}
        >
          <TimeLine items={basicItems} variant="compact" />
        </Preview>
      </Section>

      {/* Custom Line Color */}
      <Section title="Custom Line Color">
        <p className="text-gray-600 dark:text-gray-400">
          Override the vertical connector colour with the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">lineColor</code>{" "}
          prop. Pass any Tailwind background-color utility class such as{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">bg-emerald-500</code>{" "}
          or{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">bg-purple-600</code>.
        </p>
        <Preview
          code={`<TimeLine items={items} lineColor="bg-emerald-500" />`}
        >
          <TimeLine items={basicItems} lineColor="bg-emerald-500" />
        </Preview>
      </Section>

      {/* Without Animation */}
      <Section title="Without Animation">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">animate</code>{" "}
          to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">false</code>{" "}
          to disable the scroll-triggered entrance transitions. All items render immediately in their final position.
        </p>
        <Preview
          code={`<TimeLine items={items} animate={false} />`}
        >
          <TimeLine items={basicItems} animate={false} />
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
