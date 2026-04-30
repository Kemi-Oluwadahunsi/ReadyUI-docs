import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { KanbanBoard } from "readyui-react";

const props = [
  {
    name: "data",
    type: "object",
    default: "—",
    required: true,
    description:
      "The complete board state object containing three keys: columns (an object mapping column IDs to column definitions with id, title, optional color, and taskIds array), tasks (an object mapping task IDs to task definitions with id, title, optional description, priority, and tags), and columnOrder (a string array controlling the left-to-right display order of columns).",
  },
  {
    name: "onDataChange",
    type: "(data) => void",
    default: "—",
    description:
      "Callback fired whenever the board state changes — for example when a task is dragged between columns or reordered within a column. Receives the full updated data object so you can persist or sync it.",
  },
  {
    name: "renderCard",
    type: "(task) => ReactNode",
    default: "—",
    description:
      "Optional render function for customising how each task card appears on the board. Receives the full task object and should return a React element. When omitted the component uses its built-in card layout.",
  },
  {
    name: "onAddTask",
    type: "(columnId) => void",
    default: "—",
    description:
      "Callback fired when the user clicks the add-task button at the bottom of a column. Receives the column ID so you can prompt for new task details and update the data accordingly.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS classes applied to the outermost board container for layout or styling overrides.",
  },
];

const initialData = {
  columns: {
    "col-todo": {
      id: "col-todo",
      title: "To Do",
      color: "blue",
      taskIds: ["task-1", "task-2"],
    },
    "col-progress": {
      id: "col-progress",
      title: "In Progress",
      color: "yellow",
      taskIds: ["task-3", "task-4"],
    },
    "col-done": {
      id: "col-done",
      title: "Done",
      color: "green",
      taskIds: ["task-5"],
    },
  },
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Design landing page",
      description: "Create wireframes and high-fidelity mockups for the new marketing site.",
      priority: "high",
      tags: ["design", "marketing"],
    },
    "task-2": {
      id: "task-2",
      title: "Set up CI/CD pipeline",
      description: "Configure GitHub Actions for automated testing and deployment.",
      priority: "medium",
      tags: ["devops"],
    },
    "task-3": {
      id: "task-3",
      title: "Implement authentication",
      description: "Add JWT-based login and registration flow.",
      priority: "high",
      tags: ["backend", "security"],
    },
    "task-4": {
      id: "task-4",
      title: "Write API documentation",
      description: "Document all REST endpoints with request/response examples.",
      priority: "low",
      tags: ["docs"],
    },
    "task-5": {
      id: "task-5",
      title: "Setup project repository",
      description: "Initialize monorepo with Turborepo and configure shared packages.",
      priority: "medium",
      tags: ["devops", "setup"],
    },
  },
  columnOrder: ["col-todo", "col-progress", "col-done"],
};

export default function KanbanBoardPage() {
  const [data, setData] = useState(initialData);

  const handleAddTask = (columnId) => {
    const id = `task-${Date.now()}`;
    const newTask = {
      id,
      title: "New task",
      description: "Describe this task…",
      priority: "medium",
      tags: [],
    };
    setData((prev) => ({
      ...prev,
      tasks: { ...prev.tasks, [id]: newTask },
      columns: {
        ...prev.columns,
        [columnId]: {
          ...prev.columns[columnId],
          taskIds: [...prev.columns[columnId].taskIds, id],
        },
      },
    }));
  };

  return (
    <ComponentPage
      name="KanbanBoard"
      description="A drag-and-drop Kanban board for organising tasks into columns. Supports custom card rendering, add-task callbacks, and full state control via a single data prop."
    >
      {/* Import */}
      <Section title="Import">
        <p className="text-gray-600 dark:text-gray-400">
          Import the KanbanBoard component from readyui-react:
        </p>
        <CodeBlock code={`import { KanbanBoard } from "readyui-react";`} />
      </Section>

      {/* Data Structure */}
      <Section title="Data Structure">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">data</code>{" "}
          prop is a single object with three keys:{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">columns</code>{" "}
          maps column IDs to column objects (each with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">id</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">title</code>,{" "}
          optional{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">color</code>,{" "}
          and a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">taskIds</code>{" "}
          array);{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">tasks</code>{" "}
          maps task IDs to task objects (each with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">id</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">title</code>,{" "}
          optional{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">description</code>,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">priority</code>,{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">tags</code>);{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">columnOrder</code>{" "}
          is an array of column IDs that controls the display order.
        </p>
        <CodeBlock
          code={`const data = {
  columns: {
    "col-todo": { id: "col-todo", title: "To Do", color: "blue", taskIds: ["task-1"] },
    "col-progress": { id: "col-progress", title: "In Progress", color: "yellow", taskIds: [] },
    "col-done": { id: "col-done", title: "Done", color: "green", taskIds: [] },
  },
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Design landing page",
      description: "Create wireframes and mockups.",
      priority: "high",
      tags: ["design"],
    },
  },
  columnOrder: ["col-todo", "col-progress", "col-done"],
};`}
        />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">data</code>{" "}
          object and an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onDataChange</code>{" "}
          handler. The board renders columns and their tasks, and calls your handler whenever the user drags a task.
        </p>
        <Preview
          code={`const [data, setData] = useState(initialData);

<KanbanBoard data={data} onDataChange={setData} />`}
        >
          <KanbanBoard data={data} onDataChange={setData} />
        </Preview>
      </Section>

      {/* Event Handling */}
      <Section title="Event Handling">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onDataChange</code>{" "}
          to persist the new board state after every drag operation, and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">onAddTask</code>{" "}
          to handle the add-task button click on each column. The add callback receives the column ID so you can insert a new task into the correct column.
        </p>
        <Preview
          code={`const handleAddTask = (columnId) => {
  const id = \`task-\${Date.now()}\`;
  const newTask = { id, title: "New task", description: "Describe this task…", priority: "medium", tags: [] };
  setData((prev) => ({
    ...prev,
    tasks: { ...prev.tasks, [id]: newTask },
    columns: {
      ...prev.columns,
      [columnId]: {
        ...prev.columns[columnId],
        taskIds: [...prev.columns[columnId].taskIds, id],
      },
    },
  }));
};

<KanbanBoard data={data} onDataChange={setData} onAddTask={handleAddTask} />`}
        >
          <KanbanBoard
            data={data}
            onDataChange={setData}
            onAddTask={handleAddTask}
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
