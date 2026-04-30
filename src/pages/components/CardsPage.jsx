import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import {
  BasicCard,
  ProfileCard,
  ProductCard,
  TestimonialCard,
  BlogCard,
  StatsCard,
  TeamCard,
  FeatureCard,
  NotificationCard,
  ImageOverlayCard,
  HorizontalCard,
  PricingCardSingle,
  MetricCard,
  InteractiveCard,
  GlassCard,
} from "readyui-react";

export default function CardsPage() {
  return (
    <ComponentPage
      name="Cards"
      description="A comprehensive collection of card components for every use case — profiles, products, testimonials, blogs, stats, pricing, and more. Each variant is a standalone component with its own set of props."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock
          code={`import {
  BasicCard,
  ProfileCard,
  ProductCard,
  TestimonialCard,
  BlogCard,
  StatsCard,
  TeamCard,
  FeatureCard,
  NotificationCard,
  ImageOverlayCard,
  HorizontalCard,
  PricingCardSingle,
  MetricCard,
  InteractiveCard,
  GlassCard,
} from "readyui-react";`}
        />
      </Section>

      {/* BasicCard */}
      <Section title="BasicCard">
        <p className="text-gray-600 dark:text-gray-400">
          A simple card with a title, description, and optional image. Use it as a
          general-purpose container for content blocks.
        </p>
        <Preview
          code={`<BasicCard
  title="Getting Started"
  description="Learn how to install and configure ReadyUI components in your React project."
  image="https://picsum.photos/seed/basic1/400/200"
/>`}
        >
          <BasicCard
            title="Getting Started"
            description="Learn how to install and configure ReadyUI components in your React project."
            image="https://picsum.photos/seed/basic1/400/200"
          />
        </Preview>
      </Section>

      {/* ProfileCard */}
      <Section title="ProfileCard">
        <p className="text-gray-600 dark:text-gray-400">
          Displays a user profile with avatar, name, role, and optional stats or
          action buttons.
        </p>
        <Preview
          code={`<ProfileCard
  name="Sarah Johnson"
  role="Senior Designer"
  avatar="https://i.pravatar.cc/150?img=32"
  bio="Creating beautiful interfaces that people love to use."
  stats={[
    { label: "Projects", value: "48" },
    { label: "Followers", value: "2.1k" },
    { label: "Rating", value: "4.9" },
  ]}
/>`}
        >
          <div className="max-w-sm">
            <ProfileCard
              name="Sarah Johnson"
              role="Senior Designer"
              avatar="https://i.pravatar.cc/150?img=32"
              bio="Creating beautiful interfaces that people love to use."
              stats={[
                { label: "Projects", value: "48" },
                { label: "Followers", value: "2.1k" },
                { label: "Rating", value: "4.9" },
              ]}
            />
          </div>
        </Preview>
      </Section>

      {/* ProductCard */}
      <Section title="ProductCard">
        <p className="text-gray-600 dark:text-gray-400">
          Designed for e-commerce listings with product image, price, rating, and an
          add-to-cart action.
        </p>
        <Preview
          code={`<ProductCard
  title="Wireless Headphones"
  description="Premium noise-canceling wireless headphones with 30-hour battery life."
  image="https://picsum.photos/seed/product1/400/300"
  price="$129.99"
  originalPrice="$179.99"
  rating={4.5}
  badge="Sale"
  onAddToCart={() => alert("Added to cart!")}
/>`}
        >
          <div className="max-w-sm">
            <ProductCard
              title="Wireless Headphones"
              description="Premium noise-canceling wireless headphones with 30-hour battery life."
              image="https://picsum.photos/seed/product1/400/300"
              price="$129.99"
              originalPrice="$179.99"
              rating={4.5}
              badge="Sale"
              onAddToCart={() => alert("Added to cart!")}
            />
          </div>
        </Preview>
      </Section>

      {/* TestimonialCard */}
      <Section title="TestimonialCard">
        <p className="text-gray-600 dark:text-gray-400">
          Shows a customer testimonial or review with a quote, author name, avatar,
          and star rating.
        </p>
        <Preview
          code={`<TestimonialCard
  quote="ReadyUI has completely transformed our development workflow. The components are polished, accessible, and incredibly easy to customize."
  author="Alex Rivera"
  role="CTO at TechFlow"
  avatar="https://i.pravatar.cc/150?img=11"
  rating={5}
/>`}
        >
          <div className="max-w-md">
            <TestimonialCard
              quote="ReadyUI has completely transformed our development workflow. The components are polished, accessible, and incredibly easy to customize."
              author="Alex Rivera"
              role="CTO at TechFlow"
              avatar="https://i.pravatar.cc/150?img=11"
              rating={5}
            />
          </div>
        </Preview>
      </Section>

      {/* BlogCard */}
      <Section title="BlogCard">
        <p className="text-gray-600 dark:text-gray-400">
          A blog post preview card with featured image, title, excerpt, author info,
          and reading time.
        </p>
        <Preview
          code={`<BlogCard
  title="Building Accessible React Components"
  excerpt="A deep dive into creating components that work for everyone, with practical tips on ARIA attributes and keyboard navigation."
  image="https://picsum.photos/seed/blog1/400/200"
  author="Maria Chen"
  authorAvatar="https://i.pravatar.cc/150?img=23"
  date="Mar 15, 2026"
  readTime="8 min read"
  tags={["React", "Accessibility"]}
/>`}
        >
          <div className="max-w-md">
            <BlogCard
              title="Building Accessible React Components"
              excerpt="A deep dive into creating components that work for everyone, with practical tips on ARIA attributes and keyboard navigation."
              image="https://picsum.photos/seed/blog1/400/200"
              author="Maria Chen"
              authorAvatar="https://i.pravatar.cc/150?img=23"
              date="Mar 15, 2026"
              readTime="8 min read"
              tags={["React", "Accessibility"]}
            />
          </div>
        </Preview>
      </Section>

      {/* StatsCard */}
      <Section title="StatsCard">
        <p className="text-gray-600 dark:text-gray-400">
          Displays a key metric with a label, value, trend indicator, and optional
          icon. Ideal for dashboards and analytics.
        </p>
        <Preview
          code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <StatsCard
    label="Total Revenue"
    value="$48,250"
    change="+12.5%"
    trend="up"
    icon="💰"
  />
  <StatsCard
    label="Active Users"
    value="2,340"
    change="+8.1%"
    trend="up"
    icon="👥"
  />
  <StatsCard
    label="Bounce Rate"
    value="24.5%"
    change="-3.2%"
    trend="down"
    icon="📉"
  />
</div>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatsCard
              label="Total Revenue"
              value="$48,250"
              change="+12.5%"
              trend="up"
              icon="💰"
            />
            <StatsCard
              label="Active Users"
              value="2,340"
              change="+8.1%"
              trend="up"
              icon="👥"
            />
            <StatsCard
              label="Bounce Rate"
              value="24.5%"
              change="-3.2%"
              trend="down"
              icon="📉"
            />
          </div>
        </Preview>
      </Section>

      {/* TeamCard */}
      <Section title="TeamCard">
        <p className="text-gray-600 dark:text-gray-400">
          Showcases a team member with photo, name, title, and social links.
        </p>
        <Preview
          code={`<TeamCard
  name="James Park"
  role="Lead Engineer"
  avatar="https://i.pravatar.cc/150?img=53"
  bio="Full-stack developer with 10+ years of experience building scalable applications."
  socials={{
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  }}
/>`}
        >
          <div className="max-w-sm">
            <TeamCard
              name="James Park"
              role="Lead Engineer"
              avatar="https://i.pravatar.cc/150?img=53"
              bio="Full-stack developer with 10+ years of experience building scalable applications."
              socials={{
                github: "https://github.com",
                linkedin: "https://linkedin.com",
                twitter: "https://twitter.com",
              }}
            />
          </div>
        </Preview>
      </Section>

      {/* FeatureCard */}
      <Section title="FeatureCard">
        <p className="text-gray-600 dark:text-gray-400">
          Highlights a product feature with an icon, title, and description. Works well
          in grid layouts for feature sections.
        </p>
        <Preview
          code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <FeatureCard
    icon="🔒"
    title="Secure by Default"
    description="Enterprise-grade security with end-to-end encryption and SOC 2 compliance."
  />
  <FeatureCard
    icon="⚡"
    title="Blazing Fast"
    description="Optimized for performance with lazy loading, code splitting, and edge caching."
  />
  <FeatureCard
    icon="🎯"
    title="Developer First"
    description="Clean APIs, comprehensive docs, and TypeScript support out of the box."
  />
</div>`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FeatureCard
              icon="🔒"
              title="Secure by Default"
              description="Enterprise-grade security with end-to-end encryption and SOC 2 compliance."
            />
            <FeatureCard
              icon="⚡"
              title="Blazing Fast"
              description="Optimized for performance with lazy loading, code splitting, and edge caching."
            />
            <FeatureCard
              icon="🎯"
              title="Developer First"
              description="Clean APIs, comprehensive docs, and TypeScript support out of the box."
            />
          </div>
        </Preview>
      </Section>

      {/* ImageOverlayCard */}
      <Section title="ImageOverlayCard">
        <p className="text-gray-600 dark:text-gray-400">
          A full-bleed image card with text overlaid on a gradient. Great for hero
          sections, portfolios, and media galleries.
        </p>
        <Preview
          code={`<ImageOverlayCard
  image="https://picsum.photos/seed/overlay1/600/400"
  title="Mountain Retreat"
  description="Escape to the mountains and find your peace in nature."
  height="h-72"
/>`}
        >
          <div className="max-w-md">
            <ImageOverlayCard
              image="https://picsum.photos/seed/overlay1/600/400"
              title="Mountain Retreat"
              description="Escape to the mountains and find your peace in nature."
              height="h-72"
            />
          </div>
        </Preview>
      </Section>

      {/* HorizontalCard */}
      <Section title="HorizontalCard">
        <p className="text-gray-600 dark:text-gray-400">
          A side-by-side layout with an image on one side and content on the other.
          Useful for featured content, news articles, and media listings.
        </p>
        <Preview
          code={`<HorizontalCard
  title="Design Systems at Scale"
  description="How leading companies build and maintain design systems that serve hundreds of teams."
  image="https://picsum.photos/seed/horiz1/300/200"
/>`}
        >
          <HorizontalCard
            title="Design Systems at Scale"
            description="How leading companies build and maintain design systems that serve hundreds of teams."
            image="https://picsum.photos/seed/horiz1/300/200"
          />
        </Preview>
      </Section>

      {/* InteractiveCard */}
      <Section title="InteractiveCard (Flip)">
        <p className="text-gray-600 dark:text-gray-400">
          A card that flips on hover or click to reveal a back side with additional
          content. Perfect for team bios, product details, or flashcard UIs.
        </p>
        <Preview
          code={`<InteractiveCard
  front={
    <div className="text-center p-6">
      <div className="text-4xl mb-3">🎁</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Click to Reveal</h3>
      <p className="text-sm text-gray-500 mt-1">Something special awaits</p>
    </div>
  }
  back={
    <div className="text-center p-6">
      <div className="text-4xl mb-3">🎉</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Surprise!</h3>
      <p className="text-sm text-gray-500 mt-1">You found the hidden content.</p>
    </div>
  }
/>`}
        >
          <div className="max-w-sm">
            <InteractiveCard
              front={
                <div className="text-center p-6">
                  <div className="text-4xl mb-3">🎁</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Click to Reveal</h3>
                  <p className="text-sm text-gray-500 mt-1">Something special awaits</p>
                </div>
              }
              back={
                <div className="text-center p-6">
                  <div className="text-4xl mb-3">🎉</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Surprise!</h3>
                  <p className="text-sm text-gray-500 mt-1">You found the hidden content.</p>
                </div>
              }
            />
          </div>
        </Preview>
      </Section>

      {/* GlassCard */}
      <Section title="GlassCard">
        <p className="text-gray-600 dark:text-gray-400">
          A frosted glass effect card with backdrop blur and translucent background.
          Looks stunning over gradient or image backgrounds.
        </p>
        <Preview
          code={`<div className="p-8 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
  <GlassCard>
    <h3 className="text-lg font-semibold text-white">Glassmorphism</h3>
    <p className="text-sm text-white/80 mt-2">
      A beautiful frosted glass card that blends with any colorful background.
    </p>
  </GlassCard>
</div>`}
        >
          <div className="p-8 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            <GlassCard>
              <h3 className="text-lg font-semibold text-white">Glassmorphism</h3>
              <p className="text-sm text-white/80 mt-2">
                A beautiful frosted glass card that blends with any colorful background.
              </p>
            </GlassCard>
          </div>
        </Preview>
      </Section>

      {/* Dark Mode Note */}
      <Section title="Dark Mode & Customization">
        <p className="text-gray-600 dark:text-gray-400">
          All card variants fully support dark mode out of the box. Colors, borders,
          and shadows adapt automatically when the dark class is active on the document.
          Every card also accepts a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            className
          </code>{" "}
          prop for custom styling overrides, and most accept an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onClick
          </code>{" "}
          handler to make them interactive. Refer to each component's TypeScript types
          for the full list of supported props.
        </p>
      </Section>
    </ComponentPage>
  );
}
