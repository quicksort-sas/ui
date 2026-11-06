/**
 * Every component in the toolkit: its page slug, name, category and a one-line description.
 * Examples live in src/examples/<slug>/*.tsx (default export = the example, `export const title`).
 */
export type Category = "Foundations" | "Actions" | "Forms" | "Dates" | "Data display" | "Feedback" | "Overlays" | "Navigation" | "Layout" | "AI" | "Quicksort"

export type Entry = { slug: string; name: string; category: Category; description: string; registry?: string[] }

export const CATEGORIES: Category[] = ["Foundations", "Actions", "Forms", "Dates", "Data display", "Feedback", "Overlays", "Navigation", "Layout", "AI", "Quicksort"]

export const CATALOG: Entry[] = [
  // Foundations
  { slug: "colors", name: "Colour", category: "Foundations", description: "Ink, paper and stone carry the interface. Lime marks the one thing that matters." },
  { slug: "typography", name: "Typography", category: "Foundations", description: "Host Grotesk for words, Martian Mono for numbers and labels." },
  // Actions
  { slug: "button", name: "Button", category: "Actions", description: "Ink for the default action, lime for the one action that matters on a screen." },
  { slug: "button-group", name: "Button group", category: "Actions", description: "Related actions joined into one control." },
  { slug: "toggle", name: "Toggle", category: "Actions", description: "A two-state button." },
  { slug: "toggle-group", name: "Toggle group", category: "Actions", description: "A set of toggles, one or many on." },
  // Forms
  { slug: "input", name: "Input", category: "Forms", description: "Single-line text entry." },
  { slug: "input-group", name: "Input group", category: "Forms", description: "An input with icons, text or buttons attached." },
  { slug: "input-otp", name: "One-time code", category: "Forms", description: "Code entry, one character per slot." },
  { slug: "textarea", name: "Textarea", category: "Forms", description: "Multi-line text entry." },
  { slug: "field", name: "Field", category: "Forms", description: "Label, control, description and error, laid out together." },
  { slug: "label", name: "Label", category: "Forms", description: "The name of a form control." },
  { slug: "checkbox", name: "Checkbox", category: "Forms", description: "Turn an option on or off." },
  { slug: "radio-group", name: "Radio group", category: "Forms", description: "Choose one option from a short list." },
  { slug: "switch", name: "Switch", category: "Forms", description: "A setting that takes effect immediately." },
  { slug: "select", name: "Select", category: "Forms", description: "Choose one option from a list." },
  { slug: "native-select", name: "Native select", category: "Forms", description: "The browser's own select, styled." },
  { slug: "combobox", name: "Combobox", category: "Forms", description: "A select you can type into to filter." },
  { slug: "slider", name: "Slider", category: "Forms", description: "Pick a value or a range on a scale." },
  // Dates
  { slug: "calendar", name: "Calendar", category: "Dates", description: "A month grid for choosing a day or a range." },
  { slug: "date-picker", name: "Date picker", category: "Dates", description: "A field that opens a calendar: single date, range and presets." },
  // Data display
  { slug: "card", name: "Card", category: "Data display", description: "A surface that groups related content and actions." },
  { slug: "table", name: "Table", category: "Data display", description: "Rows and columns, with numbers in mono." },
  { slug: "chart", name: "Chart", category: "Data display", description: "Bars, lines and areas in ink and stone, with the key value in lime." },
  { slug: "badge", name: "Badge", category: "Data display", description: "A short status or label in mono." },
  { slug: "avatar", name: "Avatar", category: "Data display", description: "A person's photo or initials." },
  { slug: "kbd", name: "Keyboard key", category: "Data display", description: "A key or shortcut." },
  { slug: "item", name: "Item", category: "Data display", description: "A row with media, text and actions." },
  { slug: "empty", name: "Empty state", category: "Data display", description: "What to show when there is nothing yet." },
  { slug: "code-block", name: "Code block", category: "Data display", description: "Highlighted code with a copy button." },
  { slug: "carousel", name: "Carousel", category: "Data display", description: "A row of slides with previous and next." },
  { slug: "aspect-ratio", name: "Aspect ratio", category: "Data display", description: "Keep media at a fixed ratio." },
  // Feedback
  { slug: "alert", name: "Alert", category: "Feedback", description: "A message that needs attention, in the flow of the page." },
  { slug: "toast", name: "Toast", category: "Feedback", description: "A brief message that confirms an action." },
  { slug: "progress", name: "Progress", category: "Feedback", description: "How far a task has gone." },
  { slug: "spinner", name: "Spinner", category: "Feedback", description: "Work in progress, length unknown." },
  { slug: "skeleton", name: "Skeleton", category: "Feedback", description: "A placeholder while content loads." },
  // Overlays
  { slug: "dialog", name: "Dialog", category: "Overlays", description: "A window over the page for a focused task." },
  { slug: "alert-dialog", name: "Alert dialog", category: "Overlays", description: "Asks to confirm an action that can't be undone." },
  { slug: "sheet", name: "Sheet", category: "Overlays", description: "A panel that slides in from an edge." },
  { slug: "drawer", name: "Drawer", category: "Overlays", description: "A panel from the bottom, made for touch." },
  { slug: "popover", name: "Popover", category: "Overlays", description: "Rich content anchored to a trigger." },
  { slug: "tooltip", name: "Tooltip", category: "Overlays", description: "A short label on hover or focus." },
  { slug: "hover-card", name: "Hover card", category: "Overlays", description: "A preview on hover." },
  { slug: "dropdown-menu", name: "Dropdown menu", category: "Overlays", description: "A list of actions from a button." },
  { slug: "context-menu", name: "Context menu", category: "Overlays", description: "Actions on right-click." },
  { slug: "command", name: "Command", category: "Overlays", description: "Search and run commands from the keyboard." },
  // Navigation
  { slug: "tabs", name: "Tabs", category: "Navigation", description: "Switch between views of the same content." },
  { slug: "breadcrumb", name: "Breadcrumb", category: "Navigation", description: "Where you are, every step a link." },
  { slug: "pagination", name: "Pagination", category: "Navigation", description: "Move through pages of results." },
  { slug: "navigation-menu", name: "Navigation menu", category: "Navigation", description: "Site navigation with rich dropdowns." },
  { slug: "menubar", name: "Menubar", category: "Navigation", description: "An application menu bar." },
  { slug: "sidebar", name: "Sidebar", category: "Navigation", description: "Collapsible application navigation." },
  // Layout
  { slug: "accordion", name: "Accordion", category: "Layout", description: "Sections that open one at a time." },
  { slug: "collapsible", name: "Collapsible", category: "Layout", description: "Show and hide a section." },
  { slug: "separator", name: "Separator", category: "Layout", description: "A hairline between groups." },
  { slug: "scroll-area", name: "Scroll area", category: "Layout", description: "A scrolling region with a quiet scrollbar." },
  { slug: "resizable", name: "Resizable", category: "Layout", description: "Panels you can resize by dragging." },
  // AI
  { slug: "message", name: "Message", category: "AI", description: "A chat message from a person or an assistant." },
  { slug: "bubble", name: "Bubble", category: "AI", description: "A chat bubble." },
  { slug: "attachment", name: "Attachment", category: "AI", description: "A file attached to a message." },
  { slug: "marker", name: "Marker", category: "AI", description: "Inline status in a conversation." },
  { slug: "trace", name: "Trace", category: "AI", description: "The steps an agent took, step by step." },
  { slug: "questionnaire", name: "Questionnaire", category: "AI", description: "Questions an agent asks a person." },
  { slug: "message-scroller", name: "Message scroller", category: "AI", description: "A conversation that keeps to the latest message." },
  // Quicksort
  { slug: "logo", name: "Logo", category: "Quicksort", description: "The mark and wordmark." },
  { slug: "pivot", name: "Pivot", category: "Quicksort", description: "The lime dot: the one thing that matters." },
  { slug: "icons", name: "Pixel icons", category: "Quicksort", description: "Fifteen pixel icons on a 16 × 16 grid." },
  { slug: "stat", name: "Stat", category: "Quicksort", description: "A number, its unit and its source, set in mono." },
  { slug: "ticket", name: "Event ticket", category: "Quicksort", description: "The event cover: title, partner and date stub." },
]

export const bySlug = Object.fromEntries(CATALOG.map((e) => [e.slug, e]))
