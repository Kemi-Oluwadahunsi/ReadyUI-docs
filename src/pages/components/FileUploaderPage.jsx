import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { FileUploader } from "readyui-react";

const props = [
  {
    name: "onUpload",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked when files are selected or dropped. Receives an array of File objects representing the user's selection.",
  },
  {
    name: "accept",
    type: "string[]",
    default: "[]",
    description:
      'An array of accepted MIME types or file extensions. For example, ["image/*"] for all images, or [".pdf", ".docx"] for specific document types. When empty, all file types are accepted.',
  },
  {
    name: "maxSize",
    type: "number",
    default: "10485760",
    description:
      "The maximum allowed file size in bytes. Defaults to 10 MB (10485760 bytes). Files exceeding this size will trigger the onError callback with a size validation message.",
  },
  {
    name: "maxFiles",
    type: "number",
    default: "10",
    description:
      "The maximum number of files that can be uploaded at once. When the limit is reached, additional files are rejected with an appropriate error message.",
  },
  {
    name: "multiple",
    type: "boolean",
    default: "true",
    description:
      "When true, the uploader allows selecting multiple files. Set to false to restrict selection to a single file at a time.",
  },
  {
    name: "showPreview",
    type: "boolean",
    default: "true",
    description:
      "When enabled, displays thumbnail previews for image files and file name previews for other file types after selection. Provides visual confirmation of the selected files.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names to apply to the outer container for custom styling overrides.",
  },
  {
    name: "dropzoneClassName",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names to apply specifically to the drag-and-drop zone area, allowing targeted styling of the dropzone.",
  },
  {
    name: "label",
    type: "string",
    default: "—",
    description:
      "Custom label text displayed inside the dropzone. Overrides the default \"Drag & drop files here\" message to provide context-specific instructions.",
  },
  {
    name: "hint",
    type: "string",
    default: "—",
    description:
      "Additional hint text displayed below the label inside the dropzone. Useful for communicating file size limits, accepted formats, or usage instructions.",
  },
  {
    name: "onError",
    type: "Function",
    default: "—",
    description:
      "Callback function invoked when a file validation error occurs, such as exceeding the size limit or selecting an unsupported file type. Receives an error message string.",
  },
  {
    name: "renderFile",
    type: "Function",
    default: "—",
    description:
      "A custom render function for individual file items in the preview list. Receives the file object and index, allowing fully custom file item rendering.",
  },
];

export default function FileUploaderPage() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  return (
    <ComponentPage
      name="FileUploader"
      description="A drag-and-drop file uploader with preview support, file type validation, size limits, and customizable labels. Supports single and multi-file uploads."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { FileUploader } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Provide an{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onUpload
          </code>{" "}
          handler to receive the selected files. Users can drag and drop files
          onto the dropzone or click to open the file picker.
        </p>
        <Preview
          code={`const [files, setFiles] = useState([]);

<FileUploader
  onUpload={(selectedFiles) => setFiles(selectedFiles)}
/>`}
        >
          <FileUploader
            onUpload={(selectedFiles) => setFiles(selectedFiles)}
          />
        </Preview>
      </Section>

      {/* Accept Specific Types */}
      <Section title="Accept Specific Types">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            accept
          </code>{" "}
          prop to restrict uploads to specific file types. Pass MIME types like{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            "image/*"
          </code>{" "}
          to allow all images, or specific extensions.
        </p>
        <Preview
          code={`<FileUploader
  onUpload={(files) => console.log(files)}
  accept={["image/*"]}
  label="Upload Images"
  hint="Only image files (JPG, PNG, GIF, SVG) are accepted"
/>`}
        >
          <FileUploader
            onUpload={(f) => console.log(f)}
            accept={["image/*"]}
            label="Upload Images"
            hint="Only image files (JPG, PNG, GIF, SVG) are accepted"
          />
        </Preview>
      </Section>

      {/* Single File */}
      <Section title="Single File">
        <p className="text-gray-600 dark:text-gray-400">
          Set{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            multiple
          </code>{" "}
          to false to restrict the uploader to a single file at a time.
        </p>
        <Preview
          code={`<FileUploader
  onUpload={(files) => console.log(files)}
  multiple={false}
  label="Upload a single file"
/>`}
        >
          <FileUploader
            onUpload={(f) => console.log(f)}
            multiple={false}
            label="Upload a single file"
          />
        </Preview>
      </Section>

      {/* Max Size & Files */}
      <Section title="Max Size & Files">
        <p className="text-gray-600 dark:text-gray-400">
          Use{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            maxSize
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            maxFiles
          </code>{" "}
          to enforce upload limits. Files exceeding these constraints will be
          rejected with an error.
        </p>
        <Preview
          code={`<FileUploader
  onUpload={(files) => console.log(files)}
  maxSize={5 * 1024 * 1024}
  maxFiles={3}
  hint="Max 3 files, 5 MB each"
/>`}
        >
          <FileUploader
            onUpload={(f) => console.log(f)}
            maxSize={5 * 1024 * 1024}
            maxFiles={3}
            hint="Max 3 files, 5 MB each"
          />
        </Preview>
      </Section>

      {/* Custom Label & Hint */}
      <Section title="Custom Label & Hint">
        <p className="text-gray-600 dark:text-gray-400">
          Override the default dropzone text with custom{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            label
          </code>{" "}
          and{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            hint
          </code>{" "}
          props to give users context-specific instructions.
        </p>
        <Preview
          code={`<FileUploader
  onUpload={(files) => console.log(files)}
  label="Drop your resume here"
  hint="Accepted formats: PDF, DOCX — Max 2 MB"
  accept={[".pdf", ".docx"]}
  maxSize={2 * 1024 * 1024}
  multiple={false}
/>`}
        >
          <FileUploader
            onUpload={(f) => console.log(f)}
            label="Drop your resume here"
            hint="Accepted formats: PDF, DOCX — Max 2 MB"
            accept={[".pdf", ".docx"]}
            maxSize={2 * 1024 * 1024}
            multiple={false}
          />
        </Preview>
      </Section>

      {/* Error Handling */}
      <Section title="Error Handling">
        <p className="text-gray-600 dark:text-gray-400">
          Use the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onError
          </code>{" "}
          callback to handle validation errors such as oversized files or
          unsupported types. Display custom error messages to guide the user.
        </p>
        <Preview
          code={`const [error, setError] = useState("");

<div className="space-y-3">
  <FileUploader
    onUpload={(files) => console.log(files)}
    maxSize={1024 * 1024}
    onError={(msg) => setError(msg)}
    hint="Max 1 MB — try uploading a larger file to see the error"
  />
  {error && (
    <p className="text-sm text-red-500">{error}</p>
  )}
</div>`}
        >
          <div className="space-y-3">
            <FileUploader
              onUpload={(f) => console.log(f)}
              maxSize={1024 * 1024}
              onError={(msg) => setError(msg)}
              hint="Max 1 MB — try uploading a larger file to see the error"
            />
            {error && (
              <p className="text-sm text-red-500">{error}</p>
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
