import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";

const props = [
  { name: "children", type: "ReactNode", default: "—", description: "Grid items to be laid out." },
  { name: "columns", type: "{ sm, md, lg, xl }", default: "{ sm: 1, md: 2, lg: 3, xl: 4 }", description: "Number of columns at each breakpoint." },
  { name: "gap", type: "number | string", default: "16", description: "Gap between grid items in pixels or CSS value." },
  { name: "minChildWidth", type: "string", default: "—", description: "Minimum width for auto-fit grid items (e.g. '250px'). Overrides the columns prop." },
  { name: "className", type: "string", default: "—", description: "Additional CSS class names for the grid container." },
];

export default function ResponsiveGridPage() {
  return (
    <ComponentPage
      name="ResponsiveGrid"
      description="Auto-responsive CSS grid wrapper that adapts columns to breakpoints or content width."
    >
      <Section title="Import">
        <CodeBlock code={`import { ResponsiveGrid } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <CodeBlock
          code={`<ResponsiveGrid>
  <Card title="Analytics" />
  <Card title="Revenue" />
  <Card title="Users" />
  <Card title="Orders" />
</ResponsiveGrid>`}
        />
      </Section>

      <Section title="Custom Columns">
        <CodeBlock
          code={`<ResponsiveGrid
  columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
  gap={24}
>
  {products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ))}
</ResponsiveGrid>`}
        />
      </Section>

      <Section title="Auto-Fit with minChildWidth">
        <CodeBlock
          code={`// Grid automatically creates as many columns as fit,
// each at least 280px wide
<ResponsiveGrid minChildWidth="280px" gap="1.5rem">
  {articles.map((article) => (
    <ArticleCard key={article.id} {...article} />
  ))}
</ResponsiveGrid>`}
        />
      </Section>

      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
