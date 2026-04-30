import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { DatePicker } from "readyui-react";

const props = [
  { name: "value", type: "Date | Date[] | { start: Date, end: Date }", default: "—", description: "The currently selected date value. For single mode pass a Date object, for multiple mode pass an array of Dates, and for range mode pass an object with start and end Date properties." },
  { name: "onChange", type: "(value) => void", default: "—", required: true, description: "Callback fired whenever the selected date changes. Receives the new value matching the shape determined by the current mode — a single Date, an array of Dates, or a range object." },
  { name: "mode", type: '"single" | "multiple" | "range"', default: '"single"', description: 'Determines the selection behavior. "single" allows picking one date, "multiple" allows selecting several individual dates, and "range" enables selecting a contiguous start-to-end date span.' },
  { name: "min", type: "Date", default: "—", description: "The earliest selectable date. All dates before this value appear disabled and cannot be clicked." },
  { name: "max", type: "Date", default: "—", description: "The latest selectable date. All dates after this value appear disabled and cannot be clicked." },
  { name: "unavailableDates", type: "Date[]", default: "[]", description: "An array of specific dates that should be disabled and unselectable. Useful for blocking holidays, booked dates, or maintenance windows." },
  { name: "placeholder", type: "string", default: '""', description: "Placeholder text displayed in the input field when no date is selected." },
  { name: "format", type: "string", default: '"yyyy-MM-dd"', description: "The date format pattern used to display the selected date in the input field. Supports tokens like yyyy, MM, dd, etc." },
  { name: "disableDate", type: "(date: Date) => boolean", default: "—", description: "A custom function that receives each date and returns true to disable it. Useful for complex rules like disabling weekends, specific weekdays, or dynamic business logic." },
  { name: "showToday", type: "boolean", default: "true", description: "Whether to visually highlight today's date in the calendar grid with a distinct indicator ring." },
  { name: "rtl", type: "boolean", default: "false", description: "Enables right-to-left layout for the calendar. Use this when your application serves RTL languages such as Arabic or Hebrew." },
  { name: "weekStart", type: "number", default: "0", description: "The day the week starts on, where 0 is Sunday, 1 is Monday, and so on up to 6 for Saturday. Adjusts the column order of the calendar grid." },
  { name: "dayLabels", type: "string[]", default: '["Su","Mo","Tu","We","Th","Fr","Sa"]', description: "Custom labels for the days-of-week header row in the calendar. Must be an array of exactly 7 strings starting from Sunday." },
  { name: "monthLabels", type: "string[]", default: "—", description: "Custom labels for the 12 months used in the month navigation header. Must be an array of exactly 12 strings starting from January." },
  { name: "presets", type: "Array<{ label, value }>", default: "[]", description: "An array of quick-select preset options displayed as a sidebar. Each preset has a label string and a value that matches the current mode's expected shape." },
  { name: "maxSelected", type: "number", default: "Infinity", description: "Maximum number of dates that can be selected in multiple mode. Once the limit is reached, additional clicks are ignored until a selected date is deselected." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes applied to the outermost wrapper element of the date picker." },
  { name: "inputClassName", type: "string", default: '""', description: "Additional CSS classes applied to the text input trigger element." },
  { name: "calendarClassName", type: "string", default: '""', description: "Additional CSS classes applied to the calendar dropdown panel." },
];

export default function DatePickerPage() {
  const [singleDate, setSingleDate] = useState(null);
  const [multipleDates, setMultipleDates] = useState([]);
  const [rangeValue, setRangeValue] = useState(null);
  const [minMaxDate, setMinMaxDate] = useState(null);
  const [unavailDate, setUnavailDate] = useState(null);
  const [weekendDate, setWeekendDate] = useState(null);
  const [presetDate, setPresetDate] = useState(null);
  const [rtlDate, setRtlDate] = useState(null);
  const [mondayDate, setMondayDate] = useState(null);

  const today = new Date();
  const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);

  const unavailableDates = [
    new Date(today.getFullYear(), today.getMonth(), 10),
    new Date(today.getFullYear(), today.getMonth(), 15),
    new Date(today.getFullYear(), today.getMonth(), 20),
  ];

  const presets = [
    { label: "Today", value: new Date() },
    { label: "Tomorrow", value: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) },
    { label: "Next Week", value: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7) },
  ];

  return (
    <ComponentPage
      name="DatePicker"
      description="A fully featured date picker with support for single, multiple, and range selection modes. Includes min/max constraints, unavailable dates, custom disable logic, quick-select presets, RTL support, and configurable week start day."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the DatePicker component from readyui-react:
        </p>
        <CodeBlock code={`import { DatePicker } from "readyui-react";`} />
      </Section>

      {/* Basic Single Date */}
      <Section title="Basic Single Date">
        <p className="text-gray-600 dark:text-gray-400">
          In the default{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">single</code>{" "}
          mode, the user picks one date. Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">useState</code>{" "}
          to track the selected value and pass it back via{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onChange</code>.
        </p>
        <Preview
          code={`const [date, setDate] = useState(null);

<DatePicker
  value={date}
  onChange={setDate}
  placeholder="Select a date"
/>`}
        >
          <DatePicker
            value={singleDate}
            onChange={setSingleDate}
            placeholder="Select a date"
          />
        </Preview>
      </Section>

      {/* Multiple Selection */}
      <Section title="Multiple Selection">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">mode</code> to{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">"multiple"</code>{" "}
          to allow selecting several individual dates. Clicking a selected date again deselects it.
        </p>
        <Preview
          code={`const [dates, setDates] = useState([]);

<DatePicker
  value={dates}
  onChange={setDates}
  mode="multiple"
  placeholder="Pick multiple dates"
/>`}
        >
          <DatePicker
            value={multipleDates}
            onChange={setMultipleDates}
            mode="multiple"
            placeholder="Pick multiple dates"
          />
        </Preview>
      </Section>

      {/* Date Range */}
      <Section title="Date Range">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">mode="range"</code>{" "}
          to enable selecting a contiguous date span. The first click sets the start date and the second click sets the end date.
        </p>
        <Preview
          code={`const [range, setRange] = useState(null);

<DatePicker
  value={range}
  onChange={setRange}
  mode="range"
  placeholder="Select date range"
/>`}
        >
          <DatePicker
            value={rangeValue}
            onChange={setRangeValue}
            mode="range"
            placeholder="Select date range"
          />
        </Preview>
      </Section>

      {/* Min/Max Constraints */}
      <Section title="Min/Max Constraints">
        <p className="text-gray-600 dark:text-gray-400">
          Pass{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">min</code> and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">max</code>{" "}
          dates to restrict the selectable range. Dates outside these bounds appear disabled.
        </p>
        <Preview
          code={`const today = new Date();
const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);
const [date, setDate] = useState(null);

<DatePicker
  value={date}
  onChange={setDate}
  min={minDate}
  max={maxDate}
  placeholder="Constrained range"
/>`}
        >
          <DatePicker
            value={minMaxDate}
            onChange={setMinMaxDate}
            min={minDate}
            max={maxDate}
            placeholder="Constrained range"
          />
        </Preview>
      </Section>

      {/* Unavailable Dates */}
      <Section title="Unavailable Dates">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">unavailableDates</code>{" "}
          prop to block specific dates such as holidays or booked slots.
        </p>
        <Preview
          code={`const unavailableDates = [
  new Date(2026, 3, 10),
  new Date(2026, 3, 15),
  new Date(2026, 3, 20),
];
const [date, setDate] = useState(null);

<DatePicker
  value={date}
  onChange={setDate}
  unavailableDates={unavailableDates}
  placeholder="Some dates blocked"
/>`}
        >
          <DatePicker
            value={unavailDate}
            onChange={setUnavailDate}
            unavailableDates={unavailableDates}
            placeholder="Some dates blocked"
          />
        </Preview>
      </Section>

      {/* Disable Weekends */}
      <Section title="Disable Weekends">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a custom{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">disableDate</code>{" "}
          function to implement complex disable rules. This example disables all Saturdays and Sundays.
        </p>
        <Preview
          code={`const [date, setDate] = useState(null);

<DatePicker
  value={date}
  onChange={setDate}
  disableDate={(d) => d.getDay() === 0 || d.getDay() === 6}
  placeholder="Weekdays only"
/>`}
        >
          <DatePicker
            value={weekendDate}
            onChange={setWeekendDate}
            disableDate={(d) => d.getDay() === 0 || d.getDay() === 6}
            placeholder="Weekdays only"
          />
        </Preview>
      </Section>

      {/* Presets */}
      <Section title="Presets">
        <p className="text-gray-600 dark:text-gray-400">
          Provide a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">presets</code>{" "}
          array to display a sidebar of quick-select options alongside the calendar. Each preset needs a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">label</code> and a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">value</code>.
        </p>
        <Preview
          code={`const presets = [
  { label: "Today", value: new Date() },
  { label: "Tomorrow", value: new Date(/* ... */) },
  { label: "Next Week", value: new Date(/* ... */) },
];
const [date, setDate] = useState(null);

<DatePicker
  value={date}
  onChange={setDate}
  presets={presets}
  placeholder="Pick or use preset"
/>`}
        >
          <DatePicker
            value={presetDate}
            onChange={setPresetDate}
            presets={presets}
            placeholder="Pick or use preset"
          />
        </Preview>
      </Section>

      {/* RTL Support */}
      <Section title="RTL Support">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">rtl</code>{" "}
          to flip the calendar layout for right-to-left languages such as Arabic or Hebrew.
        </p>
        <Preview
          code={`const [date, setDate] = useState(null);

<DatePicker
  value={date}
  onChange={setDate}
  rtl
  placeholder="RTL date picker"
/>`}
        >
          <DatePicker
            value={rtlDate}
            onChange={setRtlDate}
            rtl
            placeholder="RTL date picker"
          />
        </Preview>
      </Section>

      {/* Monday Start */}
      <Section title="Monday Start">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">weekStart</code>{" "}
          to <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">1</code> to start the week on Monday, which is the standard in many European countries.
        </p>
        <Preview
          code={`const [date, setDate] = useState(null);

<DatePicker
  value={date}
  onChange={setDate}
  weekStart={1}
  placeholder="Week starts Monday"
/>`}
        >
          <DatePicker
            value={mondayDate}
            onChange={setMondayDate}
            weekStart={1}
            placeholder="Week starts Monday"
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
