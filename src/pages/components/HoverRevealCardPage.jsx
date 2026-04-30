import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { HoverRevealCard } from "readyui-react";

const props = [
  { name: "title", type: "string", default: '""', required: true, description: "The main heading text displayed on the card. This is prominently shown and reveals fully on hover along with the description and action elements." },
  { name: "description", type: "string", default: '""', description: "A brief summary or subtitle text displayed below the title on hover. Use this to provide context about the card's content or purpose." },
  { name: "image", type: "string", default: '""', required: true, description: "The URL of the background image displayed on the card. The image fills the entire card area and serves as the visual backdrop that the hover overlay reveals content over." },
  { name: "category", type: "string", default: '""', description: "A category label displayed as a small badge on the card. Useful for classifying content by type, topic, or section such as \"Technology\", \"Design\", or \"Travel\"." },
  { name: "tags", type: "string[]", default: "[]", description: "An array of tag strings rendered as small pills on the card. Tags provide additional metadata and filtering context, such as technology names or descriptors." },
  { name: "author", type: "string", default: '""', description: "The name of the content author displayed on the card. Shown alongside other metadata to attribute the content to a specific creator." },
  { name: "date", type: "string", default: '""', description: "A date string displayed on the card, typically representing when the content was published or created. Accepts any string format like \"Mar 15, 2024\" or \"2024-03-15\"." },
  { name: "likes", type: "number", default: "0", description: "The number of likes or favorites to display on the card. When combined with the onLike callback, creates an interactive engagement indicator." },
  { name: "views", type: "number", default: "0", description: "The number of views or impressions to display on the card. Provides social proof and engagement metrics alongside other card metadata." },
  { name: "featured", type: "boolean", default: "false", description: "When true, displays a prominent \"Featured\" badge on the card to highlight important or promoted content above the rest." },
  { name: "onLike", type: "() => void", default: "—", description: "Callback fired when the user clicks the like/heart button on the card. Use this to update like counts or trigger engagement tracking." },
  { name: "onShare", type: "() => void", default: "—", description: "Callback fired when the user clicks the share button on the card. Use this to open a share dialog or copy a link to clipboard." },
  { name: "onClick", type: "() => void", default: "—", description: "Callback fired when the card itself is clicked. Typically used for navigation to a detail page or opening a modal with full content." },
  { name: "actionLabel", type: "string", default: '"View Details"', description: "The text label for the primary call-to-action button that appears on hover. Customize this to match the card's purpose, such as \"Read More\", \"Shop Now\", or \"Learn More\"." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the card's root element for custom sizing, spacing, or style overrides." },
  { name: "categoryColor", type: "string", default: '""', description: "A custom Tailwind background color class for the category badge. For example, \"bg-emerald-500\" or \"bg-rose-600\" to match your content's color coding." },
  { name: "children", type: "ReactNode", default: "—", description: "Custom content rendered inside the card's reveal area. When provided, this replaces the default layout, giving you full control over what appears on hover." },
];

export default function HoverRevealCardPage() {
  return (
    <ComponentPage
      name="HoverRevealCard"
      description="An image card with a smooth hover-activated overlay that reveals title, description, metadata, and action buttons. Supports featured badges, tags, engagement metrics, and custom content. Perfect for portfolios, blogs, galleries, and product showcases."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the HoverRevealCard component from readyui-react:
        </p>
        <CodeBlock code={`import { HoverRevealCard } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          At minimum, provide a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">title</code> and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">image</code>.
          Hover over the card to see the overlay reveal the content and action button.
        </p>
        <Preview
          code={`<HoverRevealCard
  title="Mountain Sunrise"
  description="A breathtaking view of the sun rising over misty mountain peaks."
  image="https://picsum.photos/600/400?random=10"
  category="Nature"
  author="Alex Rivera"
  date="Mar 15, 2024"
  likes={42}
  views={1280}
  onClick={() => console.log("Card clicked")}
  onLike={() => console.log("Liked")}
  onShare={() => console.log("Shared")}
/>`}
        >
          <div className="max-w-sm">
            <HoverRevealCard
              title="Mountain Sunrise"
              description="A breathtaking view of the sun rising over misty mountain peaks."
              image="https://picsum.photos/600/400?random=10"
              category="Nature"
              author="Alex Rivera"
              date="Mar 15, 2024"
              likes={42}
              views={1280}
              onClick={() => {}}
              onLike={() => {}}
              onShare={() => {}}
            />
          </div>
        </Preview>
      </Section>

      {/* Featured Badge */}
      <Section title="Featured Badge">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">featured</code> to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">true</code> to display a
          prominent badge that highlights the card as featured or promoted content.
        </p>
        <Preview
          code={`<HoverRevealCard
  title="City Skyline at Night"
  description="The glittering lights of downtown reflected in the river."
  image="https://picsum.photos/600/400?random=20"
  category="Urban"
  categoryColor="bg-violet-600"
  featured={true}
  author="Jordan Lee"
  date="Apr 2, 2024"
  likes={128}
  views={3400}
/>`}
        >
          <div className="max-w-sm">
            <HoverRevealCard
              title="City Skyline at Night"
              description="The glittering lights of downtown reflected in the river."
              image="https://picsum.photos/600/400?random=20"
              category="Urban"
              categoryColor="bg-violet-600"
              featured={true}
              author="Jordan Lee"
              date="Apr 2, 2024"
              likes={128}
              views={3400}
            />
          </div>
        </Preview>
      </Section>

      {/* With Tags */}
      <Section title="With Tags">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">tags</code> prop accepts an array of
          strings that render as small pills on the card. These are useful for adding searchable keywords or technology labels.
        </p>
        <Preview
          code={`<HoverRevealCard
  title="Building a Design System"
  description="How we built a scalable design system for our product suite."
  image="https://picsum.photos/600/400?random=30"
  category="Design"
  categoryColor="bg-emerald-600"
  tags={["React", "Tailwind CSS", "Figma"]}
  author="Sam Chen"
  date="Jan 10, 2024"
  likes={86}
  views={2100}
  actionLabel="Read Article"
/>`}
        >
          <div className="max-w-sm">
            <HoverRevealCard
              title="Building a Design System"
              description="How we built a scalable design system for our product suite."
              image="https://picsum.photos/600/400?random=30"
              category="Design"
              categoryColor="bg-emerald-600"
              tags={["React", "Tailwind CSS", "Figma"]}
              author="Sam Chen"
              date="Jan 10, 2024"
              likes={86}
              views={2100}
              actionLabel="Read Article"
            />
          </div>
        </Preview>
      </Section>

      {/* Custom Action Label */}
      <Section title="Custom Action Label">
        <p className="text-gray-600 dark:text-gray-400">
          Change the call-to-action button text using the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">actionLabel</code> prop.
          This lets you tailor the button to your content context — for example "Shop Now", "Read More", or "Watch Video".
        </p>
        <Preview
          code={`<HoverRevealCard
  title="Wireless Headphones Pro"
  description="Premium noise-cancelling headphones with 40h battery life."
  image="https://picsum.photos/600/400?random=40"
  category="Tech"
  categoryColor="bg-rose-600"
  actionLabel="Shop Now"
  likes={214}
  views={5600}
  onClick={() => console.log("Navigate to product")}
/>`}
        >
          <div className="max-w-sm">
            <HoverRevealCard
              title="Wireless Headphones Pro"
              description="Premium noise-cancelling headphones with 40h battery life."
              image="https://picsum.photos/600/400?random=40"
              category="Tech"
              categoryColor="bg-rose-600"
              actionLabel="Shop Now"
              likes={214}
              views={5600}
              onClick={() => {}}
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
