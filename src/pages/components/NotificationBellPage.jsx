import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { NotificationBell } from "readyui-react";

const props = [
  {
    name: "notifications",
    type: "Array<{ id, title, message, time, read?, avatar?, type?, body? }>",
    default: "[]",
    required: true,
    description:
      "An array of notification objects. Each notification must include an id, title, message, and time string. Optionally add read (boolean) to mark as seen, avatar (string URL) for a user image, type for categorization, and body for extended detail content.",
  },
  {
    name: "onRead",
    type: "Function",
    default: "—",
    description:
      "Callback fired when a single notification is marked as read. Receives the notification id as its argument.",
  },
  {
    name: "onReadAll",
    type: "Function",
    default: "—",
    description:
      'Callback fired when the user clicks the "Mark all as read" action. Use this to update all notification read states at once.',
  },
  {
    name: "onClear",
    type: "Function",
    default: "—",
    description:
      "Callback fired when the user clears all notifications. Use this to empty the notifications list in your state.",
  },
  {
    name: "onNotificationClick",
    type: "Function",
    default: "—",
    description:
      "Callback fired when a notification item is clicked. Receives the full notification object, useful for navigation or showing detail views.",
  },
  {
    name: "renderDetail",
    type: "Function",
    default: "—",
    description:
      "A custom render function for the notification detail view. Receives the notification object and returns a ReactNode to display when a notification is expanded or clicked.",
  },
  {
    name: "onDelete",
    type: "Function",
    default: "—",
    description:
      "Callback fired when a single notification is deleted. Receives the notification id as its argument.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the outermost bell button container for positioning or styling overrides.",
  },
  {
    name: "maxVisible",
    type: "number",
    default: "5",
    description:
      "The maximum number of notifications displayed in the dropdown panel before the list becomes scrollable.",
  },
  {
    name: "emptyMessage",
    type: "string",
    default: '"No new notifications"',
    description:
      "The message shown inside the dropdown panel when the notifications array is empty.",
  },
  {
    name: "bellColor",
    type: "string",
    default: "—",
    description:
      "A CSS color string applied to the bell icon. Useful for matching the icon to your theme or brand colors.",
  },
  {
    name: "panelClassName",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the dropdown notification panel container.",
  },
  {
    name: "modalClassName",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the notification detail modal when a notification is expanded.",
  },
  {
    name: "modalOverlayClassName",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the modal overlay backdrop behind the detail view.",
  },
  {
    name: "modalStyle",
    type: "Object",
    default: "—",
    description:
      "Inline styles applied to the notification detail modal for fine-grained layout control.",
  },
  {
    name: "panelStyle",
    type: "Object",
    default: "—",
    description:
      "Inline styles applied to the dropdown notification panel for custom sizing or positioning.",
  },
];

const sampleNotifications = [
  {
    id: 1,
    title: "New message",
    message: "You have a new message from Sarah.",
    time: "2 min ago",
    read: false,
    type: "message",
  },
  {
    id: 2,
    title: "Order shipped",
    message: "Your order #4521 has been shipped and is on the way.",
    time: "1 hour ago",
    read: false,
    type: "order",
  },
  {
    id: 3,
    title: "System update",
    message: "A new system update is available. Restart to apply changes.",
    time: "3 hours ago",
    read: true,
    type: "system",
  },
  {
    id: 4,
    title: "Welcome!",
    message: "Thanks for joining ReadyUI. Explore the component library.",
    time: "1 day ago",
    read: true,
    type: "info",
  },
];

export default function NotificationBellPage() {
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [clickLog, setClickLog] = useState("");

  const handleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleReadAll = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleClear = () => {
    setNotifications([]);
  };

  return (
    <ComponentPage
      name="NotificationBell"
      description="A bell icon button with an unread badge and dropdown notification panel. Supports read/unread states, mark-all-as-read, clear, and click-through to notification details."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { NotificationBell } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Pass a{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            notifications
          </code>{" "}
          array with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            id
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            title
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            message
          </code>
          , and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            time
          </code>{" "}
          for each entry. Click the bell to open the notification dropdown.
        </p>
        <Preview
          code={`const notifications = [
  {
    id: 1,
    title: "New message",
    message: "You have a new message from Sarah.",
    time: "2 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Order shipped",
    message: "Your order #4521 has been shipped.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "System update",
    message: "A new system update is available.",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 4,
    title: "Welcome!",
    message: "Thanks for joining ReadyUI.",
    time: "1 day ago",
    read: true,
  },
];

<NotificationBell notifications={notifications} />`}
        >
          <NotificationBell notifications={sampleNotifications} />
        </Preview>
      </Section>

      {/* With Read/Clear Actions */}
      <Section title="With Read / Clear Actions">
        <p className="text-gray-600 dark:text-gray-400">
          Wire up{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onRead
          </code>
          ,{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onReadAll
          </code>
          , and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onClear
          </code>{" "}
          to manage notification states in your application. The bell badge updates automatically based on unread count.
        </p>
        <Preview
          code={`const [notifications, setNotifications] = useState(initialNotifications);

const handleRead = (id) => {
  setNotifications((prev) =>
    prev.map((n) => (n.id === id ? { ...n, read: true } : n))
  );
};

const handleReadAll = () => {
  setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
};

const handleClear = () => {
  setNotifications([]);
};

<NotificationBell
  notifications={notifications}
  onRead={handleRead}
  onReadAll={handleReadAll}
  onClear={handleClear}
/>`}
        >
          <NotificationBell
            notifications={notifications}
            onRead={handleRead}
            onReadAll={handleReadAll}
            onClear={handleClear}
          />
        </Preview>
      </Section>

      {/* Custom Empty Message */}
      <Section title="Custom Empty Message">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            emptyMessage
          </code>{" "}
          to customize the text shown when there are no notifications.
        </p>
        <Preview
          code={`<NotificationBell
  notifications={[]}
  emptyMessage="You're all caught up! 🎉"
/>`}
        >
          <NotificationBell
            notifications={[]}
            emptyMessage="You're all caught up! 🎉"
          />
        </Preview>
      </Section>

      {/* Event Handling */}
      <Section title="Event Handling">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onNotificationClick
          </code>{" "}
          to respond when a user clicks on an individual notification. This is useful for routing to detail pages or showing expanded views.
        </p>
        <Preview
          code={`<NotificationBell
  notifications={notifications}
  onNotificationClick={(notification) =>
    alert(\`Clicked: \${notification.title}\`)
  }
/>`}
        >
          <div>
            <NotificationBell
              notifications={sampleNotifications}
              onNotificationClick={(notification) =>
                setClickLog(`Clicked: ${notification.title}`)
              }
            />
            {clickLog && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {clickLog}
              </p>
            )}
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
