import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Eagerly loaded pages (above the fold)
import Home from "./pages/Home";
import GettingStarted from "./pages/GettingStarted";

// Lazy-loaded component doc pages
const AccordionPage = lazy(() => import("./pages/components/AccordionPage"));
const AnimatedCounterPage = lazy(() => import("./pages/components/AnimatedCounterPage"));
const AvatarGroupPage = lazy(() => import("./pages/components/AvatarGroupPage"));
const BadgePage = lazy(() => import("./pages/components/BadgePage"));
const BreadcrumbsPage = lazy(() => import("./pages/components/BreadcrumbsPage"));
const CardsPage = lazy(() => import("./pages/components/CardsPage"));
const ColorPickerPage = lazy(() => import("./pages/components/ColorPickerPage"));
const CommandPalettePage = lazy(() => import("./pages/components/CommandPalettePage"));
const ConfirmDialogPage = lazy(() => import("./pages/components/ConfirmDialogPage"));
const CopyToClipboardPage = lazy(() => import("./pages/components/CopyToClipboardPage"));
const DarkModeTogglePage = lazy(() => import("./pages/components/DarkModeTogglePage"));
const DataTablePage = lazy(() => import("./pages/components/DataTablePage"));
const DatePickerPage = lazy(() => import("./pages/components/DatePickerPage"));
const DrawerPage = lazy(() => import("./pages/components/DrawerPage"));
const FileUploaderPage = lazy(() => import("./pages/components/FileUploaderPage"));
const FilterableGalleryPage = lazy(() => import("./pages/components/FilterableGalleryPage"));
const FilterPanelPage = lazy(() => import("./pages/components/FilterPanelPage"));
const FloatingActionButtonPage = lazy(() => import("./pages/components/FloatingActionButtonPage"));
const HoverRevealCardPage = lazy(() => import("./pages/components/HoverRevealCardPage"));
const ImageCropperPage = lazy(() => import("./pages/components/ImageCropperPage"));
const InfiniteScrollPage = lazy(() => import("./pages/components/InfiniteScrollPage"));
const KanbanBoardPage = lazy(() => import("./pages/components/KanbanBoardPage"));
const MarqueePage = lazy(() => import("./pages/components/MarqueePage"));
const ModalPage = lazy(() => import("./pages/components/ModalPage"));
const MultiSelectTagInputPage = lazy(() => import("./pages/components/MultiSelectTagInputPage"));
const NotificationBellPage = lazy(() => import("./pages/components/NotificationBellPage"));
const OTPInputPage = lazy(() => import("./pages/components/OTPInputPage"));
const PaginationPage = lazy(() => import("./pages/components/PaginationPage"));
const PasswordStrengthPage = lazy(() => import("./pages/components/PasswordStrengthPage"));
const PopoverPage = lazy(() => import("./pages/components/PopoverPage"));
const ProgressBarStepsPage = lazy(() => import("./pages/components/ProgressBarStepsPage"));
const RangeSliderPage = lazy(() => import("./pages/components/RangeSliderPage"));
const RatingInputPage = lazy(() => import("./pages/components/RatingInputPage"));
const ResizableSidebarPage = lazy(() => import("./pages/components/ResizableSidebarPage"));
const ScrollAwareNavbarPage = lazy(() => import("./pages/components/ScrollAwareNavbarPage"));
const ScrollCarouselPage = lazy(() => import("./pages/components/ScrollCarouselPage"));
const SearchBarPage = lazy(() => import("./pages/components/SearchBarPage"));
const SelectPage = lazy(() => import("./pages/components/SelectPage"));
const SkeletonPage = lazy(() => import("./pages/components/SkeletonPage"));
const SortableListPage = lazy(() => import("./pages/components/SortableListPage"));
const SpinnerPage = lazy(() => import("./pages/components/SpinnerPage"));
const SpotlightCardPage = lazy(() => import("./pages/components/SpotlightCardPage"));
const StepperPage = lazy(() => import("./pages/components/StepperPage"));
const TabsPage = lazy(() => import("./pages/components/TabsPage"));
const TimeLinePage = lazy(() => import("./pages/components/TimelinePage"));
const ToastPage = lazy(() => import("./pages/components/ToastPage"));
const ToggleSwitchPage = lazy(() => import("./pages/components/ToggleSwitchPage"));
const TooltipPage = lazy(() => import("./pages/components/TooltipPage"));
const TreeViewPage = lazy(() => import("./pages/components/TreeViewPage"));
const VirtualListPage = lazy(() => import("./pages/components/VirtualListPage"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="getting-started" element={<GettingStarted />} />

        {/* Component routes — lazy loaded */}
        <Route path="components/accordion" element={<Suspense fallback={<PageLoader />}><AccordionPage /></Suspense>} />
        <Route path="components/animated-counter" element={<Suspense fallback={<PageLoader />}><AnimatedCounterPage /></Suspense>} />
        <Route path="components/avatar-group" element={<Suspense fallback={<PageLoader />}><AvatarGroupPage /></Suspense>} />
        <Route path="components/badge" element={<Suspense fallback={<PageLoader />}><BadgePage /></Suspense>} />
        <Route path="components/breadcrumbs" element={<Suspense fallback={<PageLoader />}><BreadcrumbsPage /></Suspense>} />
        <Route path="components/cards" element={<Suspense fallback={<PageLoader />}><CardsPage /></Suspense>} />
        <Route path="components/color-picker" element={<Suspense fallback={<PageLoader />}><ColorPickerPage /></Suspense>} />
        <Route path="components/command-palette" element={<Suspense fallback={<PageLoader />}><CommandPalettePage /></Suspense>} />
        <Route path="components/confirm-dialog" element={<Suspense fallback={<PageLoader />}><ConfirmDialogPage /></Suspense>} />
        <Route path="components/copy-to-clipboard" element={<Suspense fallback={<PageLoader />}><CopyToClipboardPage /></Suspense>} />
        <Route path="components/dark-mode-toggle" element={<Suspense fallback={<PageLoader />}><DarkModeTogglePage /></Suspense>} />
        <Route path="components/data-table" element={<Suspense fallback={<PageLoader />}><DataTablePage /></Suspense>} />
        <Route path="components/date-picker" element={<Suspense fallback={<PageLoader />}><DatePickerPage /></Suspense>} />
        <Route path="components/drawer" element={<Suspense fallback={<PageLoader />}><DrawerPage /></Suspense>} />
        <Route path="components/file-uploader" element={<Suspense fallback={<PageLoader />}><FileUploaderPage /></Suspense>} />
        <Route path="components/filterable-gallery" element={<Suspense fallback={<PageLoader />}><FilterableGalleryPage /></Suspense>} />
        <Route path="components/filter-panel" element={<Suspense fallback={<PageLoader />}><FilterPanelPage /></Suspense>} />
        <Route path="components/floating-action-button" element={<Suspense fallback={<PageLoader />}><FloatingActionButtonPage /></Suspense>} />
        <Route path="components/hover-reveal-card" element={<Suspense fallback={<PageLoader />}><HoverRevealCardPage /></Suspense>} />
        <Route path="components/image-cropper" element={<Suspense fallback={<PageLoader />}><ImageCropperPage /></Suspense>} />
        <Route path="components/infinite-scroll" element={<Suspense fallback={<PageLoader />}><InfiniteScrollPage /></Suspense>} />
        <Route path="components/kanban-board" element={<Suspense fallback={<PageLoader />}><KanbanBoardPage /></Suspense>} />
        <Route path="components/marquee" element={<Suspense fallback={<PageLoader />}><MarqueePage /></Suspense>} />
        <Route path="components/modal" element={<Suspense fallback={<PageLoader />}><ModalPage /></Suspense>} />
        <Route path="components/multi-select-tag-input" element={<Suspense fallback={<PageLoader />}><MultiSelectTagInputPage /></Suspense>} />
        <Route path="components/notification-bell" element={<Suspense fallback={<PageLoader />}><NotificationBellPage /></Suspense>} />
        <Route path="components/otp-input" element={<Suspense fallback={<PageLoader />}><OTPInputPage /></Suspense>} />
        <Route path="components/pagination" element={<Suspense fallback={<PageLoader />}><PaginationPage /></Suspense>} />
        <Route path="components/password-strength" element={<Suspense fallback={<PageLoader />}><PasswordStrengthPage /></Suspense>} />
        <Route path="components/popover" element={<Suspense fallback={<PageLoader />}><PopoverPage /></Suspense>} />
        <Route path="components/progress-bar-steps" element={<Suspense fallback={<PageLoader />}><ProgressBarStepsPage /></Suspense>} />
        <Route path="components/range-slider" element={<Suspense fallback={<PageLoader />}><RangeSliderPage /></Suspense>} />
        <Route path="components/rating-input" element={<Suspense fallback={<PageLoader />}><RatingInputPage /></Suspense>} />
        <Route path="components/resizable-sidebar" element={<Suspense fallback={<PageLoader />}><ResizableSidebarPage /></Suspense>} />
        <Route path="components/scroll-aware-navbar" element={<Suspense fallback={<PageLoader />}><ScrollAwareNavbarPage /></Suspense>} />
        <Route path="components/scroll-carousel" element={<Suspense fallback={<PageLoader />}><ScrollCarouselPage /></Suspense>} />
        <Route path="components/search-bar" element={<Suspense fallback={<PageLoader />}><SearchBarPage /></Suspense>} />
        <Route path="components/select" element={<Suspense fallback={<PageLoader />}><SelectPage /></Suspense>} />
        <Route path="components/skeleton" element={<Suspense fallback={<PageLoader />}><SkeletonPage /></Suspense>} />
        <Route path="components/sortable-list" element={<Suspense fallback={<PageLoader />}><SortableListPage /></Suspense>} />
        <Route path="components/spinner" element={<Suspense fallback={<PageLoader />}><SpinnerPage /></Suspense>} />
        <Route path="components/spotlight-card" element={<Suspense fallback={<PageLoader />}><SpotlightCardPage /></Suspense>} />
        <Route path="components/stepper" element={<Suspense fallback={<PageLoader />}><StepperPage /></Suspense>} />
        <Route path="components/tabs" element={<Suspense fallback={<PageLoader />}><TabsPage /></Suspense>} />
        <Route path="components/timeline" element={<Suspense fallback={<PageLoader />}><TimeLinePage /></Suspense>} />
        <Route path="components/toast" element={<Suspense fallback={<PageLoader />}><ToastPage /></Suspense>} />
        <Route path="components/toggle-switch" element={<Suspense fallback={<PageLoader />}><ToggleSwitchPage /></Suspense>} />
        <Route path="components/tooltip" element={<Suspense fallback={<PageLoader />}><TooltipPage /></Suspense>} />
        <Route path="components/tree-view" element={<Suspense fallback={<PageLoader />}><TreeViewPage /></Suspense>} />
        <Route path="components/virtual-list" element={<Suspense fallback={<PageLoader />}><VirtualListPage /></Suspense>} />
      </Route>
    </Routes>
  );
}
