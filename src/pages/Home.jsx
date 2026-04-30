import { Link } from "react-router-dom";
import { categories, allComponents } from "../data/components";
import { ArrowRight, Package, Zap, Palette, Code, Globe, Moon } from "lucide-react";

const features = [
  { icon: Package, title: "50+ Components", description: "Production-ready UI components covering all common patterns" },
  { icon: Zap, title: "Zero Dependencies", description: "Built with just React, Tailwind CSS, and Lucide icons" },
  { icon: Palette, title: "Dark Mode", description: "Every component supports light and dark themes out of the box" },
  { icon: Code, title: "Copy & Paste", description: "Simple API with sensible defaults — just import and use" },
  { icon: Globe, title: "Responsive", description: "Mobile-first design that adapts beautifully to any screen" },
  { icon: Moon, title: "Accessible", description: "Keyboard navigation and ARIA attributes built in" },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center space-y-6 pt-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          <span className="text-blue-600">Ready</span>UI React
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A beautiful collection of 50+ production-ready React components. Built with Tailwind CSS, fully customizable, and designed for modern web apps.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/getting-started"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-colors"
          >
            Get Started
          </Link>
          <a
            href="https://www.npmjs.com/package/readyui-react"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-xl font-medium text-sm transition-colors"
          >
            npm install readyui-react
          </a>
        </div>
      </section>

      {/* Features grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="p-5 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900/40 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-3">
              <Icon className="w-4.5 h-4.5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        ))}
      </section>

      {/* Component categories */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Components</h2>
        {categories.map((cat) => (
          <div key={cat.name}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              {cat.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {cat.components.map((comp) => (
                <Link
                  key={comp.path}
                  to={comp.path}
                  className="group flex items-center justify-between p-3.5 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{comp.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 truncate">{comp.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 flex-shrink-0 ml-2 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="text-center py-8 space-y-2">
        <p className="text-4xl font-bold text-blue-600">{allComponents.length}</p>
        <p className="text-gray-500 dark:text-gray-400">Components and counting</p>
      </section>
    </div>
  );
}
