import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { PricingCardSingle } from "readyui-react";

const props = [
  {
    name: "name",
    type: "string",
    default: "—",
    required: true,
    description:
      "The plan or tier name displayed as the card heading — for example \"Starter\", \"Pro\", or \"Enterprise\".",
  },
  {
    name: "description",
    type: "string",
    default: "—",
    description:
      "A short sentence below the plan name summarising what the tier offers or who it is aimed at.",
  },
  {
    name: "price",
    type: "number | string",
    default: "—",
    required: true,
    description:
      "The price value displayed prominently on the card. Pass a number for formatted output or a string like \"Custom\" for enterprise tiers.",
  },
  {
    name: "period",
    type: "string",
    default: '"/mo"',
    description:
      "The billing period label shown next to the price — for example \"/mo\", \"/yr\", or \"/seat\".",
  },
  {
    name: "features",
    type: "string[]",
    default: "[]",
    description:
      "An array of feature description strings rendered as a checklist beneath the price. Each string becomes a single line item with a check icon.",
  },
  {
    name: "ctaLabel",
    type: "string",
    default: '"Get Started"',
    description:
      "The label text displayed on the call-to-action button at the bottom of the card.",
  },
  {
    name: "onSelect",
    type: "() => void",
    default: "—",
    description:
      "Callback fired when the user clicks the CTA button. Use it to navigate to a checkout page, open a modal, or trigger a sign-up flow.",
  },
  {
    name: "featured",
    type: "boolean",
    default: "false",
    description:
      "When true the card receives a highlighted visual treatment — a coloured border, shadow boost, and optional badge — to draw attention to the recommended tier.",
  },
  {
    name: "badge",
    type: "string",
    default: "—",
    description:
      "Optional badge text rendered above the card (typically \"Most Popular\" or \"Best Value\"). Only visible when the card is also marked as featured.",
  },
  {
    name: "accentColor",
    type: "string",
    default: '"blue"',
    description:
      "The Tailwind colour name used for the CTA button background and featured-card border highlight — for example \"blue\", \"purple\", or \"emerald\".",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS classes applied to the card root element for custom width, margin, or styling overrides.",
  },
];

export default function PricingCardsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <ComponentPage
      name="PricingCardSingle"
      description="A single pricing tier card with plan name, price, feature checklist, and call-to-action button. Combine multiple cards in a grid to build a full pricing section."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the PricingCardSingle component from readyui-react:
        </p>
        <CodeBlock code={`import { PricingCardSingle } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">name</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">price</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">description</code>, and a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">features</code>{" "}
          array to render a single pricing card.
        </p>
        <Preview
          code={`<PricingCardSingle
  name="Starter"
  description="Everything you need to get started."
  price={0}
  period="/mo"
  features={[
    "Up to 3 projects",
    "Basic analytics",
    "Community support",
    "1 GB storage",
  ]}
  onSelect={() => alert("Starter selected")}
/>`}
        >
          <div className="max-w-sm mx-auto">
            <PricingCardSingle
              name="Starter"
              description="Everything you need to get started."
              price={0}
              period="/mo"
              features={[
                "Up to 3 projects",
                "Basic analytics",
                "Community support",
                "1 GB storage",
              ]}
              onSelect={() => setSelected("Starter")}
            />
          </div>
        </Preview>
      </Section>

      {/* Featured Card */}
      <Section title="Featured Card">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">featured</code>{" "}
          to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">true</code>{" "}
          and supply a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">badge</code>{" "}
          to highlight the recommended tier. The card receives a coloured border and a floating badge label.
        </p>
        <Preview
          code={`<PricingCardSingle
  name="Pro"
  description="For growing teams that need more."
  price={29}
  period="/mo"
  features={[
    "Unlimited projects",
    "Advanced analytics",
    "Priority support",
    "50 GB storage",
    "Custom domains",
  ]}
  featured={true}
  badge="Most Popular"
  onSelect={() => alert("Pro selected")}
/>`}
        >
          <div className="max-w-sm mx-auto">
            <PricingCardSingle
              name="Pro"
              description="For growing teams that need more."
              price={29}
              period="/mo"
              features={[
                "Unlimited projects",
                "Advanced analytics",
                "Priority support",
                "50 GB storage",
                "Custom domains",
              ]}
              featured={true}
              badge="Most Popular"
              onSelect={() => setSelected("Pro")}
            />
          </div>
        </Preview>
      </Section>

      {/* Multiple Cards */}
      <Section title="Multiple Cards">
        <p className="text-gray-600 dark:text-gray-400">
          Place several PricingCardSingle components inside a responsive grid to build a complete pricing section. Mark one card as{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">featured</code>{" "}
          to guide users towards the recommended plan.
        </p>
        <Preview
          code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <PricingCardSingle
    name="Starter"
    description="For individuals and side projects."
    price={0}
    features={["Up to 3 projects", "Basic analytics", "Community support"]}
    onSelect={() => alert("Starter")}
  />
  <PricingCardSingle
    name="Pro"
    description="For growing teams that need more."
    price={29}
    features={["Unlimited projects", "Advanced analytics", "Priority support", "50 GB storage"]}
    featured={true}
    badge="Most Popular"
    onSelect={() => alert("Pro")}
  />
  <PricingCardSingle
    name="Enterprise"
    description="For large organisations with custom needs."
    price="Custom"
    features={["Everything in Pro", "Dedicated account manager", "SSO & SAML", "Unlimited storage", "SLA guarantee"]}
    ctaLabel="Contact Sales"
    accentColor="purple"
    onSelect={() => alert("Enterprise")}
  />
</div>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PricingCardSingle
              name="Starter"
              description="For individuals and side projects."
              price={0}
              features={["Up to 3 projects", "Basic analytics", "Community support"]}
              onSelect={() => setSelected("Starter")}
            />
            <PricingCardSingle
              name="Pro"
              description="For growing teams that need more."
              price={29}
              features={[
                "Unlimited projects",
                "Advanced analytics",
                "Priority support",
                "50 GB storage",
              ]}
              featured={true}
              badge="Most Popular"
              onSelect={() => setSelected("Pro")}
            />
            <PricingCardSingle
              name="Enterprise"
              description="For large organisations with custom needs."
              price="Custom"
              features={[
                "Everything in Pro",
                "Dedicated account manager",
                "SSO & SAML",
                "Unlimited storage",
                "SLA guarantee",
              ]}
              ctaLabel="Contact Sales"
              accentColor="purple"
              onSelect={() => setSelected("Enterprise")}
            />
          </div>
        </Preview>
      </Section>

      {/* Custom Accent Color */}
      <Section title="Custom Accent Color">
        <p className="text-gray-600 dark:text-gray-400">
          Change the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">accentColor</code>{" "}
          prop to customise the CTA button and featured border colour. Any Tailwind colour name works — for example{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"emerald"</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"rose"</code>, or{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"amber"</code>.
        </p>
        <Preview
          code={`<PricingCardSingle
  name="Premium"
  description="Stand out with a custom colour."
  price={49}
  features={["All Pro features", "White-label branding", "API access"]}
  featured={true}
  badge="Best Value"
  accentColor="emerald"
  onSelect={() => alert("Premium")}
/>`}
        >
          <div className="max-w-sm mx-auto">
            <PricingCardSingle
              name="Premium"
              description="Stand out with a custom colour."
              price={49}
              features={["All Pro features", "White-label branding", "API access"]}
              featured={true}
              badge="Best Value"
              accentColor="emerald"
              onSelect={() => setSelected("Premium")}
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
