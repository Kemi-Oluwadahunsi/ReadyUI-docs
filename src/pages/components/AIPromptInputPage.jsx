import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { AIPromptInput, ChatMessageBubble } from "readyui-react";

const aiPromptProps = [
  { name: "onSubmit", type: "Function", default: "—", description: "Callback invoked with { prompt, model, files } when the user submits a message." },
  { name: "placeholder", type: "string", default: '"Ask anything or type a prompt..."', description: "Placeholder text for the textarea input." },
  { name: "models", type: "string[]", default: '["GPT-4o", "Claude 3.5 Sonnet", ...]', description: "Array of AI model names shown in the dropdown selector." },
  { name: "defaultModel", type: "string", default: '"Claude 3.5 Sonnet"', description: "The initially selected model in the dropdown." },
  { name: "className", type: "string", default: '""', description: "Additional CSS classes for the wrapper." },
];

const chatBubbleProps = [
  { name: "role", type: '"assistant" | "user"', default: '"assistant"', description: "Determines the message alignment and avatar display." },
  { name: "content", type: "string", default: "—", description: "The message text content." },
  { name: "timestamp", type: "string", default: '"Just now"', description: "Timestamp displayed below the message." },
  { name: "isStreaming", type: "boolean", default: "false", description: "Shows a blinking cursor to indicate the response is still being generated." },
];

export default function AIPromptInputPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I help you today?" },
  ]);

  return (
    <ComponentPage
      name="AIPromptInput"
      description="A polished AI chat input with model selector, file attachments, and voice input. Pairs with ChatMessageBubble for building conversational interfaces."
    >
      <Section title="Import">
        <CodeBlock code={`import { AIPromptInput, ChatMessageBubble } from "readyui-react";`} />
      </Section>

      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          The prompt input includes a model selector dropdown, file attachment button, and voice input. Press Enter to submit or Shift+Enter for a new line.
        </p>
        <Preview
          code={`<AIPromptInput
  onSubmit={({ prompt, model }) => console.log(prompt, model)}
  placeholder="Ask anything..."
/>`}
        >
          <div className="max-w-xl mx-auto">
            <AIPromptInput onSubmit={({ prompt }) => console.log(prompt)} />
          </div>
        </Preview>
      </Section>

      <Section title="Chat Bubbles">
        <p className="text-gray-600 dark:text-gray-400">
          Use <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">ChatMessageBubble</code> to render user and assistant messages with proper styling and alignment.
        </p>
        <Preview
          code={`<ChatMessageBubble role="user" content="How do I center a div?" />
<ChatMessageBubble role="assistant" content="Use flexbox: display: flex; align-items: center; justify-content: center;" />`}
        >
          <div className="max-w-xl mx-auto space-y-4">
            <ChatMessageBubble role="user" content="How do I center a div?" />
            <ChatMessageBubble role="assistant" content="Use flexbox: display: flex; align-items: center; justify-content: center;" />
          </div>
        </Preview>
      </Section>

      <Section title="Streaming Response">
        <Preview
          code={`<ChatMessageBubble role="assistant" content="Generating response..." isStreaming />`}
        >
          <div className="max-w-xl mx-auto">
            <ChatMessageBubble role="assistant" content="Generating response..." isStreaming />
          </div>
        </Preview>
      </Section>

      <Section title="AIPromptInput Props">
        <PropsTable props={aiPromptProps} />
      </Section>

      <Section title="ChatMessageBubble Props">
        <PropsTable props={chatBubbleProps} />
      </Section>
    </ComponentPage>
  );
}
