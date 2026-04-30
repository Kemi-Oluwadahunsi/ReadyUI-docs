// Component metadata organized by category
export const categories = [
  {
    name: "Layout & Navigation",
    components: [
      { name: "Accordion", path: "/components/accordion", description: "Configurable, accessible accordion/collapsible panel" },
      { name: "Breadcrumbs", path: "/components/breadcrumbs", description: "Auto-collapsing breadcrumb trail with overflow dropdown" },
      { name: "Drawer", path: "/components/drawer", description: "Slide-in panel from any edge with backdrop" },
      { name: "FloatingActionButton", path: "/components/floating-action-button", description: "Expandable FAB with configurable sub-actions" },
      { name: "KanbanBoard", path: "/components/kanban-board", description: "Drag-and-drop Kanban board" },
      { name: "ResizableSidebar", path: "/components/resizable-sidebar", description: "Collapsible, resizable sidebar navigation" },
      { name: "ScrollAwareNavbar", path: "/components/scroll-aware-navbar", description: "Smart scroll-aware sticky navbar" },
      { name: "Stepper", path: "/components/stepper", description: "Interactive step progress component" },
      { name: "Tabs", path: "/components/tabs", description: "Animated tab panels with sliding indicator" },
      { name: "TimeLine", path: "/components/timeline", description: "Vertical timeline for chronological events" },
      { name: "ProgressBarSteps", path: "/components/progress-bar-steps", description: "Step progress bar with visual indicators" },
    ],
  },
  {
    name: "Inputs & Forms",
    components: [
      { name: "ColorPicker", path: "/components/color-picker", description: "HSL/RGB/HEX picker with saturation pad" },
      { name: "DatePicker", path: "/components/date-picker", description: "Calendar dropdown with single/multiple/range selection" },
      { name: "FileUploader", path: "/components/file-uploader", description: "Drag-and-drop file upload with previews" },
      { name: "MultiSelectTagInput", path: "/components/multi-select-tag-input", description: "Searchable multi-select with tag display" },
      { name: "OTPInput", path: "/components/otp-input", description: "One-time-password input with auto-focus" },
      { name: "PasswordStrength", path: "/components/password-strength", description: "Password input with strength meter" },
      { name: "RangeSlider", path: "/components/range-slider", description: "Draggable slider with single or dual handles" },
      { name: "RatingInput", path: "/components/rating-input", description: "Star/emoji rating with hover preview" },
      { name: "SearchBar", path: "/components/search-bar", description: "Search bar with live suggestions" },
      { name: "Select", path: "/components/select", description: "Searchable dropdown with single/multi select" },
      { name: "ToggleSwitch", path: "/components/toggle-switch", description: "Polished toggle switch with multiple variants" },
    ],
  },
  {
    name: "Data Display",
    components: [
      { name: "AnimatedCounter", path: "/components/animated-counter", description: "Animated number counter with easing" },
      { name: "AvatarGroup", path: "/components/avatar-group", description: "Stacked avatars with +N overflow" },
      { name: "Badge", path: "/components/badge", description: "Count/status indicator for any element" },
      { name: "Cards", path: "/components/cards", description: "Collection of 15 card variants" },
      { name: "DataTable", path: "/components/data-table", description: "Sortable, filterable, paginated table" },
      { name: "Marquee", path: "/components/marquee", description: "Auto-scrolling content strip" },
      { name: "Pagination", path: "/components/pagination", description: "Page navigation with ellipsis and jump-to" },
      { name: "Skeleton", path: "/components/skeleton", description: "Content placeholder with animations" },
      { name: "SpotlightCard", path: "/components/spotlight-card", description: "Card with mouse-following glow effect" },
      { name: "TreeView", path: "/components/tree-view", description: "Hierarchical tree with expand/collapse" },
      { name: "VirtualList", path: "/components/virtual-list", description: "Efficiently renders large lists" },
    ],
  },
  {
    name: "Feedback & Overlay",
    components: [
      { name: "ConfirmDialog", path: "/components/confirm-dialog", description: "Promise-based confirmation modal" },
      { name: "Modal", path: "/components/modal", description: "Full-featured modal dialog" },
      { name: "NotificationBell", path: "/components/notification-bell", description: "Notification bell with dropdown panel" },
      { name: "Popover", path: "/components/popover", description: "Click/hover-triggered floating panel" },
      { name: "Spinner", path: "/components/spinner", description: "Loading animations with 13 variants" },
      { name: "Toast", path: "/components/toast", description: "Toast notification system via context" },
      { name: "Tooltip", path: "/components/tooltip", description: "Smart-positioned tooltip with auto-flip" },
    ],
  },
  {
    name: "Media & Content",
    components: [
      { name: "CopyToClipboard", path: "/components/copy-to-clipboard", description: "Click-to-copy with visual feedback" },
      { name: "FilterableGallery", path: "/components/filterable-gallery", description: "Filterable animated image gallery" },
      { name: "FilterPanel", path: "/components/filter-panel", description: "Multi-category filter component" },
      { name: "HoverRevealCard", path: "/components/hover-reveal-card", description: "Card with hover-activated overlay" },
      { name: "ImageCropper", path: "/components/image-cropper", description: "Drag-to-crop with zoom and rotation" },
      { name: "InfiniteScroll", path: "/components/infinite-scroll", description: "Scroll-triggered data loading" },
      { name: "ScrollCarousel", path: "/components/scroll-carousel", description: "Responsive carousel with auto-scroll" },
      { name: "SortableList", path: "/components/sortable-list", description: "Drag-and-drop reorderable list" },
    ],
  },
  {
    name: "Utilities",
    components: [
      { name: "CommandPalette", path: "/components/command-palette", description: "⌘K spotlight-style search overlay" },
      { name: "DarkModeToggle", path: "/components/dark-mode-toggle", description: "Theme toggle for light/dark/system" },
    ],
  },
];

export const allComponents = categories.flatMap((c) => c.components);
