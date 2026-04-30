import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { FilterableGallery } from "readyui-react";

const props = [
  { name: "items", type: "Array<{ id, src, alt, title, categories: string[] }>", default: "[]", required: true, description: "An array of gallery item objects. Each item must have a unique id, an image src URL, alt text for accessibility, a display title, and a categories array listing which filter groups the item belongs to." },
  { name: "categories", type: "string[]", default: "auto-extracted", description: "An explicit list of filter category names to show as filter buttons. If omitted, the component automatically extracts unique categories from all items." },
  { name: "columns", type: "number", default: "3", description: "The number of columns in the gallery grid layout. Adjusts the grid template to display items in the specified column count." },
  { name: "showLightbox", type: "boolean", default: "true", description: "Whether clicking a gallery item opens an enlarged lightbox view of the image. Set to false to disable the lightbox and handle clicks yourself via onItemClick." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the outermost wrapper element of the gallery component." },
  { name: "onFilter", type: "(category: string) => void", default: "—", description: "Callback fired when the user clicks a filter category button. Receives the selected category string, or the allLabel value when the all-items filter is selected." },
  { name: "onItemClick", type: "(item: object) => void", default: "—", description: "Callback fired when a gallery item is clicked. Receives the full item object. Useful for custom navigation or detail panel behavior." },
  { name: "allLabel", type: "string", default: '"All"', description: "The display text for the button that shows all items regardless of category. Customize this for localization or branding." },
];

const demoItems = [
  { id: "1", src: "https://picsum.photos/400/300?random=1", alt: "Nature landscape", title: "Mountain View", categories: ["Nature", "Landscape"] },
  { id: "2", src: "https://picsum.photos/400/300?random=2", alt: "City skyline", title: "Urban Skyline", categories: ["City", "Architecture"] },
  { id: "3", src: "https://picsum.photos/400/300?random=3", alt: "Ocean waves", title: "Ocean Waves", categories: ["Nature", "Water"] },
  { id: "4", src: "https://picsum.photos/400/300?random=4", alt: "Modern building", title: "Glass Tower", categories: ["City", "Architecture"] },
  { id: "5", src: "https://picsum.photos/400/300?random=5", alt: "Forest trail", title: "Forest Trail", categories: ["Nature", "Landscape"] },
  { id: "6", src: "https://picsum.photos/400/300?random=6", alt: "Bridge at sunset", title: "Sunset Bridge", categories: ["City", "Landscape"] },
];

export default function FilterableGalleryPage() {
  return (
    <ComponentPage
      name="FilterableGallery"
      description="An animated, filterable image gallery with category-based filtering, responsive grid layout, and built-in lightbox support. Ideal for portfolios, product showcases, and media libraries."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the FilterableGallery component from readyui-react:
        </p>
        <CodeBlock code={`import { FilterableGallery } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">items</code>{" "}
          array where each item includes an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">id</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">src</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">alt</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">title</code>, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">categories</code>{" "}
          array. Categories are automatically extracted and shown as filter buttons.
        </p>
        <Preview
          code={`const items = [
  { id: "1", src: "https://picsum.photos/400/300?random=1", alt: "Nature", title: "Mountain View", categories: ["Nature", "Landscape"] },
  { id: "2", src: "https://picsum.photos/400/300?random=2", alt: "City", title: "Urban Skyline", categories: ["City", "Architecture"] },
  { id: "3", src: "https://picsum.photos/400/300?random=3", alt: "Ocean", title: "Ocean Waves", categories: ["Nature", "Water"] },
  { id: "4", src: "https://picsum.photos/400/300?random=4", alt: "Building", title: "Glass Tower", categories: ["City", "Architecture"] },
  { id: "5", src: "https://picsum.photos/400/300?random=5", alt: "Forest", title: "Forest Trail", categories: ["Nature", "Landscape"] },
  { id: "6", src: "https://picsum.photos/400/300?random=6", alt: "Bridge", title: "Sunset Bridge", categories: ["City", "Landscape"] },
];

<FilterableGallery items={items} />`}
        >
          <FilterableGallery items={demoItems} />
        </Preview>
      </Section>

      {/* Custom Columns */}
      <Section title="Custom Columns">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">columns</code>{" "}
          prop to change the grid layout. For example, set it to 2 for a wider two-column gallery or 4 for a denser layout.
        </p>
        <Preview
          code={`<FilterableGallery items={items} columns={2} />`}
        >
          <FilterableGallery items={demoItems} columns={2} />
        </Preview>
      </Section>

      {/* Lightbox Disabled */}
      <Section title="Lightbox Disabled">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">showLightbox</code>{" "}
          to <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">false</code>{" "}
          to disable the built-in image zoom overlay. Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onItemClick</code>{" "}
          callback to implement custom behavior when items are clicked.
        </p>
        <Preview
          code={`<FilterableGallery
  items={items}
  showLightbox={false}
  onItemClick={(item) => console.log("Clicked:", item.title)}
/>`}
        >
          <FilterableGallery
            items={demoItems}
            showLightbox={false}
            onItemClick={(item) => console.log("Clicked:", item.title)}
          />
        </Preview>
      </Section>

      {/* Custom All Label */}
      <Section title="Custom All Label">
        <p className="text-gray-600 dark:text-gray-400">
          Change the label of the "show all" filter button using the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">allLabel</code>{" "}
          prop. This is useful for localization or when you want a more descriptive label like "Everything" or "Todos".
        </p>
        <Preview
          code={`<FilterableGallery items={items} allLabel="Everything" />`}
        >
          <FilterableGallery items={demoItems} allLabel="Everything" />
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
