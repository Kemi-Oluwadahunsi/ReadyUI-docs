import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { SearchBar } from "readyui-react";

const props = [
  { name: "suggestions", type: "string[]", default: "[]", description: "An array of suggestion strings that are filtered and displayed as the user types. The component matches input against these values internally and shows the top results in a dropdown." },
  { name: "onSearch", type: "(query: string) => void", default: "—", description: "Callback fired when the user submits a search by pressing Enter or clicking the search icon. Receives the current query string as the argument." },
  { name: "onSuggestionSelect", type: "(suggestion: string) => void", default: "—", description: "Callback fired when the user clicks or selects a suggestion from the dropdown list. Receives the selected suggestion string." },
  { name: "placeholder", type: "string", default: '"Search..."', description: "Placeholder text displayed inside the search input when it is empty." },
  { name: "debounceMs", type: "number", default: "300", description: "The debounce delay in milliseconds before filtering suggestions after the user stops typing. Increase this value for expensive filtering operations." },
  { name: "maxSuggestions", type: "number", default: "6", description: "The maximum number of suggestion items to display in the dropdown at any given time." },
  { name: "recentSearches", type: "string[]", default: "[]", description: "An array of recent search terms displayed when the input is focused but empty. Helps users quickly repeat previous queries." },
  { name: "trendingSearches", type: "string[]", default: "[]", description: "An array of trending or popular search terms displayed alongside recent searches when the input is focused but empty." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the outermost wrapper element of the search bar." },
  { name: "value", type: "string", default: "—", description: "The controlled value of the search input. When provided, the component operates in controlled mode and you must update this value via onChange or onSearch handlers." },
  { name: "showIcon", type: "boolean", default: "true", description: "Whether to display the search magnifying glass icon inside the input field." },
];

const demoSuggestions = [
  "Accordion",
  "Avatar Group",
  "Badge",
  "Breadcrumbs",
  "Cards",
  "Color Picker",
  "Command Palette",
  "Confirm Dialog",
  "Data Table",
  "Date Picker",
  "Drawer",
  "File Uploader",
  "Modal",
  "Search Bar",
  "Tooltip",
];

export default function SearchBarPage() {
  const [searchResult, setSearchResult] = useState("");
  const [controlledValue, setControlledValue] = useState("");

  return (
    <ComponentPage
      name="SearchBar"
      description="An accessible search input with auto-complete suggestions, debounced filtering, recent and trending search support, and controlled value mode. Ideal for navigation bars, documentation sites, and any search-driven interface."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the SearchBar component from readyui-react:
        </p>
        <CodeBlock code={`import { SearchBar } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onSearch</code>{" "}
          callback to capture the submitted query. The callback fires when the user presses Enter.
        </p>
        <Preview
          code={`const [result, setResult] = useState("");

<SearchBar
  onSearch={(query) => setResult(query)}
  placeholder="Search components..."
/>
{result && <p>You searched: {result}</p>}`}
        >
          <div className="space-y-3">
            <SearchBar
              onSearch={(query) => setSearchResult(query)}
              placeholder="Search components..."
            />
            {searchResult && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You searched: <strong>{searchResult}</strong>
              </p>
            )}
          </div>
        </Preview>
      </Section>

      {/* With Suggestions */}
      <Section title="With Suggestions">
        <p className="text-gray-600 dark:text-gray-400">
          Provide a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">suggestions</code>{" "}
          array to enable auto-complete. As the user types, matching suggestions appear in a dropdown. Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onSuggestionSelect</code>{" "}
          to handle when a suggestion is clicked.
        </p>
        <Preview
          code={`const suggestions = [
  "Accordion", "Avatar Group", "Badge",
  "Breadcrumbs", "Cards", "Color Picker",
  "Data Table", "Date Picker", "Drawer",
  "Modal", "Search Bar", "Tooltip",
];

<SearchBar
  suggestions={suggestions}
  onSearch={(q) => console.log("Search:", q)}
  onSuggestionSelect={(s) => console.log("Selected:", s)}
  placeholder="Try typing a component name..."
/>`}
        >
          <SearchBar
            suggestions={demoSuggestions}
            onSearch={(q) => console.log("Search:", q)}
            onSuggestionSelect={(s) => console.log("Selected:", s)}
            placeholder="Try typing a component name..."
          />
        </Preview>
      </Section>

      {/* Recent & Trending Searches */}
      <Section title="Recent & Trending Searches">
        <p className="text-gray-600 dark:text-gray-400">
          Pass{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">recentSearches</code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">trendingSearches</code>{" "}
          arrays to show helpful options when the input is focused but empty. This improves discoverability and helps users repeat previous queries.
        </p>
        <Preview
          code={`<SearchBar
  suggestions={suggestions}
  recentSearches={["Modal", "Drawer", "Cards"]}
  trendingSearches={["Date Picker", "Data Table", "Accordion"]}
  onSearch={(q) => console.log(q)}
  placeholder="Focus to see recent & trending..."
/>`}
        >
          <SearchBar
            suggestions={demoSuggestions}
            recentSearches={["Modal", "Drawer", "Cards"]}
            trendingSearches={["Date Picker", "Data Table", "Accordion"]}
            onSearch={(q) => console.log(q)}
            placeholder="Focus to see recent & trending..."
          />
        </Preview>
      </Section>

      {/* Controlled Value */}
      <Section title="Controlled Value">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">value</code>{" "}
          prop to fully control the input state from the parent. Combine with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onSearch</code>{" "}
          to update the controlled value.
        </p>
        <Preview
          code={`const [value, setValue] = useState("");

<SearchBar
  value={value}
  onSearch={setValue}
  suggestions={suggestions}
  placeholder="Controlled search..."
/>
<button onClick={() => setValue("")}>Clear</button>`}
        >
          <div className="space-y-3">
            <SearchBar
              value={controlledValue}
              onSearch={setControlledValue}
              suggestions={demoSuggestions}
              placeholder="Controlled search..."
            />
            <button
              onClick={() => setControlledValue("")}
              className="px-3 py-1.5 text-sm bg-gray-200 dark:bg-zinc-700 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors"
            >
              Clear
            </button>
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
