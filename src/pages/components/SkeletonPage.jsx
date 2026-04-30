import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { Skeleton } from "readyui-react";

const props = [
  {
    name: "variant",
    type: '"text" | "circle" | "rect" | "card" | "avatar" | "list" | "table" | "button" | "banner" | "profile"',
    default: '"text"',
    description:
      "Determines the shape and layout of the skeleton placeholder. \"text\" renders multiple line blocks, \"circle\" renders a round placeholder ideal for avatars, \"rect\" renders a rectangular block, and composite variants like \"card\", \"list\", \"table\", \"profile\", and \"banner\" render pre-composed layouts.",
  },
  {
    name: "width",
    type: "string | number",
    default: '"100%"',
    description:
      "Sets the CSS width of the skeleton element. Accepts any valid CSS value such as a pixel number, percentage string, or rem value.",
  },
  {
    name: "height",
    type: "string | number",
    default: "—",
    description:
      "Sets the CSS height of the skeleton element. The default varies by variant — for example, \"rect\" defaults to 120px while \"text\" lines have their own calculated height.",
  },
  {
    name: "lines",
    type: "number",
    default: "3",
    description:
      "The number of horizontal line blocks to render when using the \"text\" variant. The last line is typically rendered shorter to simulate realistic paragraph endings.",
  },
  {
    name: "rows",
    type: "number",
    default: "4",
    description:
      "The number of rows to render when using the \"list\" or \"table\" variant. Controls how many repeated row placeholders appear.",
  },
  {
    name: "cols",
    type: "number",
    default: "4",
    description:
      "The number of columns to render when using the \"table\" variant. Each row will contain this many cell placeholders.",
  },
  {
    name: "animation",
    type: '"pulse" | "wave" | "none"',
    default: '"pulse"',
    description:
      "Controls the loading animation style. \"pulse\" fades the element in and out, \"wave\" sweeps a highlight across the surface, and \"none\" disables animation entirely.",
  },
  {
    name: "borderRadius",
    type: "string | number",
    default: "—",
    description:
      "Overrides the default border radius of the skeleton element. Accepts any CSS border-radius value for custom shape control.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the skeleton container for custom styling overrides.",
  },
  {
    name: "loading",
    type: "boolean",
    default: "true",
    description:
      "When true, the skeleton placeholder is shown. When false, the children prop content is rendered instead, enabling smooth loading-to-content transitions.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "The actual content to display once loading is complete. Only rendered when the loading prop is set to false.",
  },
];

export default function SkeletonPage() {
  const [loading, setLoading] = useState(true);

  return (
    <ComponentPage
      name="Skeleton"
      description="Placeholder loading indicators that mimic the shape of content before it loads. Supports text, circles, rectangles, cards, tables, lists, and more with pulse or wave animations."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { Skeleton } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          The default{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">Skeleton</code>{" "}
          renders a text placeholder with 3 lines. Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">variant</code>{" "}
          prop to choose different shapes.
        </p>
        <Preview
          code={`<Skeleton />
<Skeleton variant="rect" height={80} className="mt-4" />
<Skeleton variant="circle" width={48} height={48} className="mt-4" />`}
        >
          <div className="space-y-4 max-w-md">
            <Skeleton />
            <Skeleton variant="rect" height={80} />
            <Skeleton variant="circle" width={48} height={48} />
          </div>
        </Preview>
      </Section>

      {/* Text Lines */}
      <Section title="Text Lines">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">lines</code>{" "}
          prop controls how many text line blocks appear when using the default{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">text</code>{" "}
          variant. The last line is rendered shorter to simulate a realistic paragraph ending.
        </p>
        <Preview
          code={`<Skeleton variant="text" lines={2} />
<Skeleton variant="text" lines={5} className="mt-6" />`}
        >
          <div className="space-y-6 max-w-md">
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">2 lines</span>
              <Skeleton variant="text" lines={2} />
            </div>
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-2 block">5 lines</span>
              <Skeleton variant="text" lines={5} />
            </div>
          </div>
        </Preview>
      </Section>

      {/* Circle */}
      <Section title="Circle">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">variant="circle"</code>{" "}
          to create a round placeholder, perfect for avatar or profile picture loading states.
        </p>
        <Preview
          code={`<div className="flex items-center gap-4">
  <Skeleton variant="circle" width={40} height={40} />
  <Skeleton variant="circle" width={56} height={56} />
  <Skeleton variant="circle" width={72} height={72} />
</div>`}
        >
          <div className="flex items-center gap-4">
            <Skeleton variant="circle" width={40} height={40} />
            <Skeleton variant="circle" width={56} height={56} />
            <Skeleton variant="circle" width={72} height={72} />
          </div>
        </Preview>
      </Section>

      {/* Card Variant */}
      <Section title="Card Variant">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">card</code>{" "}
          variant renders a pre-composed card placeholder with an image area, title line, and description lines.
        </p>
        <Preview
          code={`<div className="flex gap-4">
  <Skeleton variant="card" width={250} />
  <Skeleton variant="card" width={250} />
</div>`}
        >
          <div className="flex gap-4 flex-wrap">
            <Skeleton variant="card" width={250} />
            <Skeleton variant="card" width={250} />
          </div>
        </Preview>
      </Section>

      {/* Loading Toggle */}
      <Section title="Loading Toggle">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">loading</code>{" "}
          prop with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">children</code>{" "}
          to toggle between the skeleton placeholder and actual content. When{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">loading</code>{" "}
          is false, the children are rendered instead.
        </p>
        <Preview
          code={`const [loading, setLoading] = useState(true);

<button
  onClick={() => setLoading(!loading)}
  className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
>
  {loading ? "Show Content" : "Show Skeleton"}
</button>

<Skeleton loading={loading} variant="text" lines={3}>
  <div>
    <h3 className="font-semibold text-gray-900 dark:text-white">Content Loaded</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
      This is the real content that appears after loading completes.
    </p>
  </div>
</Skeleton>`}
        >
          <div>
            <button
              onClick={() => setLoading(!loading)}
              className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
            >
              {loading ? "Show Content" : "Show Skeleton"}
            </button>
            <div className="max-w-md">
              <Skeleton loading={loading} variant="text" lines={3}>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Content Loaded</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    This is the real content that appears after loading completes.
                  </p>
                </div>
              </Skeleton>
            </div>
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
