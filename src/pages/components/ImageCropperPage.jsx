import { useState } from "react";
import ComponentPage, { Section } from "../../components/ComponentPage";
import PropsTable from "../../components/PropsTable";
import CodeBlock from "../../components/CodeBlock";
import Preview from "../../components/Preview";
import { ImageCropper } from "readyui-react";

const props = [
  {
    name: "src",
    type: "string",
    default: "—",
    description:
      "The URL or data URI of the image to crop. This is the source image that will be displayed inside the cropper interface for the user to adjust.",
    required: true,
  },
  {
    name: "isOpen",
    type: "boolean",
    default: "false",
    description:
      "Controls the visibility of the cropper modal. Set to true to open the cropper overlay and false to close it.",
  },
  {
    name: "onClose",
    type: "Function",
    default: "—",
    description:
      "Callback invoked when the user dismisses the cropper modal, either by clicking the close button or pressing Escape. Use this to set isOpen to false.",
    required: true,
  },
  {
    name: "onCrop",
    type: "Function",
    default: "—",
    description:
      "Callback invoked when the user confirms the crop. Receives the cropped image as a data URL string that you can use as an image source or upload to a server.",
    required: true,
  },
  {
    name: "aspectRatio",
    type: "number",
    default: "1",
    description:
      "The aspect ratio for the crop area, expressed as width divided by height. Use 1 for a square crop, 16/9 for widescreen, or 4/3 for standard photos.",
  },
  {
    name: "quality",
    type: "number",
    default: "0.92",
    description:
      "The quality of the output image between 0 and 1. Only applies to lossy formats like JPEG. Lower values produce smaller file sizes with some quality loss.",
  },
  {
    name: "outputType",
    type: "string",
    default: '"image/jpeg"',
    description:
      'The MIME type of the cropped output image. Common values are "image/jpeg" for compressed photos and "image/png" for lossless output with transparency support.',
  },
  {
    name: "minZoom",
    type: "number",
    default: "1",
    description:
      "The minimum zoom level allowed in the cropper. A value of 1 means the image cannot be zoomed out beyond its original size.",
  },
  {
    name: "maxZoom",
    type: "number",
    default: "3",
    description:
      "The maximum zoom level allowed in the cropper. Increase this to let users zoom in further for precise detail cropping.",
  },
  {
    name: "showGrid",
    type: "boolean",
    default: "true",
    description:
      "When true, displays a rule-of-thirds grid overlay on the crop area to help the user compose the image using standard photography guidelines.",
  },
  {
    name: "circular",
    type: "boolean",
    default: "false",
    description:
      "When true, the crop area becomes a circle instead of a rectangle. Ideal for avatar or profile picture cropping workflows.",
  },
  {
    name: "showPreview",
    type: "boolean",
    default: "false",
    description:
      "When true, displays a real-time preview of the cropped result alongside the cropper so users can see the final output before confirming.",
  },
  {
    name: "className",
    type: "string",
    default: '""',
    description:
      "Additional CSS class names applied to the cropper modal container for custom styling and theming overrides.",
  },
];

function BasicCropDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  return (
    <div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Open Cropper
        </button>
        {croppedImage && (
          <img src={croppedImage} alt="Cropped result" className="w-20 h-20 rounded-lg object-cover border border-gray-200 dark:border-zinc-700" />
        )}
      </div>
      <ImageCropper
        src="/sample-crop.jpg"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCrop={(result) => {
          setCroppedImage(result.dataUrl);
          setIsOpen(false);
        }}
      />
    </div>
  );
}

function CircularCropDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  return (
    <div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          Crop Avatar
        </button>
        {croppedImage && (
          <img src={croppedImage} alt="Avatar" className="w-20 h-20 rounded-full object-cover border-2 border-purple-300 dark:border-purple-700" />
        )}
      </div>
      <ImageCropper
        src="/sample-crop.jpg"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCrop={(result) => {
          setCroppedImage(result.dataUrl);
          setIsOpen(false);
        }}
        circular
      />
    </div>
  );
}

function WidescreenCropDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  return (
    <div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium w-fit"
        >
          Crop 16:9
        </button>
        {croppedImage && (
          <img src={croppedImage} alt="Widescreen" className="w-64 h-36 rounded-lg object-cover border border-gray-200 dark:border-zinc-700" />
        )}
      </div>
      <ImageCropper
        src="/sample-crop.jpg"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCrop={(result) => {
          setCroppedImage(result.dataUrl);
          setIsOpen(false);
        }}
        aspectRatio={16 / 9}
      />
    </div>
  );
}

function PreviewCropDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  return (
    <div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
        >
          Crop with Preview
        </button>
        {croppedImage && (
          <img src={croppedImage} alt="Preview" className="w-20 h-20 rounded-lg object-cover border border-gray-200 dark:border-zinc-700" />
        )}
      </div>
      <ImageCropper
        src="/sample-crop.jpg"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCrop={(result) => {
          setCroppedImage(result.dataUrl);
          setIsOpen(false);
        }}
        showPreview
      />
    </div>
  );
}

function QualityCropDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  return (
    <div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
        >
          Low Quality Crop
        </button>
        {croppedImage && (
          <img src={croppedImage} alt="Low quality" className="w-20 h-20 rounded-lg object-cover border border-gray-200 dark:border-zinc-700" />
        )}
      </div>
      <ImageCropper
        src="/sample-crop.jpg"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onCrop={(result) => {
          setCroppedImage(result.dataUrl);
          setIsOpen(false);
        }}
        quality={0.5}
      />
    </div>
  );
}

export default function ImageCropperPage() {
  return (
    <ComponentPage
      name="ImageCropper"
      description="A modal-based image cropping tool with zoom, aspect ratio lock, circular mode, and real-time preview. Perfect for avatar uploads, cover images, and media editing workflows."
    >
      {/* Import */}
      <Section title="Import">
        <CodeBlock code={`import { ImageCropper } from "readyui-react";`} />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <p className="text-gray-600 dark:text-gray-400">
          Control the cropper with{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            isOpen
          </code>{" "}
          state. When the user confirms the crop, the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            onCrop
          </code>{" "}
          callback receives the cropped image as a data URL.
        </p>
        <Preview
          code={`const [isOpen, setIsOpen] = useState(false);
const [croppedImage, setCroppedImage] = useState(null);

<button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
  Open Cropper
</button>

{croppedImage && (
  <img src={croppedImage} alt="Cropped" className="w-20 h-20 rounded-lg object-cover" />
)}

<ImageCropper
  src="https://picsum.photos/800/600?random=20"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onCrop={(img) => {
    setCroppedImage(img);
    setIsOpen(false);
  }}
/>`}
        >
          <BasicCropDemo />
        </Preview>
      </Section>

      {/* Circular Crop */}
      <Section title="Circular Crop">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            circular
          </code>{" "}
          to use a round crop area. This is ideal for profile pictures and avatar uploads.
        </p>
        <Preview
          code={`<ImageCropper
  src="https://picsum.photos/800/600?random=21"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onCrop={(img) => {
    setCroppedImage(img);
    setIsOpen(false);
  }}
  circular
/>`}
        >
          <CircularCropDemo />
        </Preview>
      </Section>

      {/* Custom Aspect Ratio */}
      <Section title="Custom Aspect Ratio (16:9)">
        <p className="text-gray-600 dark:text-gray-400">
          Set the{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            aspectRatio
          </code>{" "}
          prop to lock the crop area to a specific ratio. Use 16/9 for widescreen
          banners, 4/3 for standard photos, or any custom value.
        </p>
        <Preview
          code={`<ImageCropper
  src="https://picsum.photos/800/600?random=22"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onCrop={(img) => {
    setCroppedImage(img);
    setIsOpen(false);
  }}
  aspectRatio={16 / 9}
/>`}
        >
          <WidescreenCropDemo />
        </Preview>
      </Section>

      {/* With Preview */}
      <Section title="With Preview">
        <p className="text-gray-600 dark:text-gray-400">
          Enable{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            showPreview
          </code>{" "}
          to display a live preview of the cropped result alongside the cropper
          so users can see exactly what the output will look like.
        </p>
        <Preview
          code={`<ImageCropper
  src="https://picsum.photos/800/600?random=23"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onCrop={(img) => {
    setCroppedImage(img);
    setIsOpen(false);
  }}
  showPreview
/>`}
        >
          <PreviewCropDemo />
        </Preview>
      </Section>

      {/* Output Quality */}
      <Section title="Output Quality">
        <p className="text-gray-600 dark:text-gray-400">
          The{" "}
          <code className="text-sm bg-gray-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono">
            quality
          </code>{" "}
          prop controls JPEG compression level. Lower values reduce file size at the
          cost of some visual fidelity — useful for thumbnail generation.
        </p>
        <Preview
          code={`<ImageCropper
  src="https://picsum.photos/800/600?random=24"
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onCrop={(img) => {
    setCroppedImage(img);
    setIsOpen(false);
  }}
  quality={0.5}
/>`}
        >
          <QualityCropDemo />
        </Preview>
      </Section>

      {/* Props */}
      <Section title="Props">
        <PropsTable props={props} />
      </Section>
    </ComponentPage>
  );
}
