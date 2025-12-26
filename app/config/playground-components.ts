export interface PlaygroundComponent {
  name: string
  route: string
  category: string
  package: string
  description?: string
}

export const components: PlaygroundComponent[] = [
  // Buttons
  {
    name: 'Button',
    route: '/playground/button',
    category: 'Buttons',
    package: '@syncfusion/ej2-vue-buttons',
    description: 'Button component with various styles and states'
  },
  {
    name: 'CheckBox',
    route: '/playground/checkbox',
    category: 'Buttons',
    package: '@syncfusion/ej2-vue-buttons',
    description: 'CheckBox for boolean input selection'
  },
  {
    name: 'RadioButton',
    route: '/playground/radiobutton',
    category: 'Buttons',
    package: '@syncfusion/ej2-vue-buttons',
    description: 'RadioButton for selecting one option from a group'
  },
  {
    name: 'Switch',
    route: '/playground/switch',
    category: 'Buttons',
    package: '@syncfusion/ej2-vue-buttons',
    description: 'Switch toggle component for on/off states'
  },

  // Calendars
  {
    name: 'DatePicker',
    route: '/playground/datepicker',
    category: 'Calendars',
    package: '@syncfusion/ej2-vue-calendars',
    description: 'DatePicker for selecting dates with calendar popup'
  },
  {
    name: 'TimePicker',
    route: '/playground/timepicker',
    category: 'Calendars',
    package: '@syncfusion/ej2-vue-calendars',
    description: 'TimePicker for selecting time values'
  },
  {
    name: 'DateTimePicker',
    route: '/playground/datetimepicker',
    category: 'Calendars',
    package: '@syncfusion/ej2-vue-calendars',
    description: 'DateTimePicker for selecting date and time together'
  },

  // Inputs
  {
    name: 'TextBox',
    route: '/playground/textbox',
    category: 'Inputs',
    package: '@syncfusion/ej2-vue-inputs',
    description: 'TextBox input component with floating labels and validation'
  },
  {
    name: 'NumericTextBox',
    route: '/playground/numerictextbox',
    category: 'Inputs',
    package: '@syncfusion/ej2-vue-inputs',
    description: 'NumericTextBox for numeric input with formatting'
  },
  {
    name: 'Slider',
    route: '/playground/slider',
    category: 'Inputs',
    package: '@syncfusion/ej2-vue-inputs',
    description: 'Slider for selecting values within a range'
  },
  {
    name: 'ColorPicker',
    route: '/playground/colorpicker',
    category: 'Inputs',
    package: '@syncfusion/ej2-vue-inputs',
    description: 'ColorPicker for selecting colors with various modes'
  },

  // Dropdowns
  {
    name: 'DropDownList',
    route: '/playground/dropdownlist',
    category: 'Dropdowns',
    package: '@syncfusion/ej2-vue-dropdowns',
    description: 'DropDownList for selecting items from a list'
  },
  {
    name: 'ComboBox',
    route: '/playground/combobox',
    category: 'Dropdowns',
    package: '@syncfusion/ej2-vue-dropdowns',
    description: 'ComboBox with autocomplete and custom value support'
  },
  {
    name: 'MultiSelect',
    route: '/playground/multiselect',
    category: 'Dropdowns',
    package: '@syncfusion/ej2-vue-dropdowns',
    description: 'MultiSelect dropdown for selecting multiple items'
  },

  // Grids
  {
    name: 'Grid',
    route: '/playground/grid',
    category: 'Grids',
    package: '@syncfusion/ej2-vue-grids',
    description: 'Data Grid with sorting, filtering, and paging'
  },

  // Popups
  {
    name: 'Dialog',
    route: '/playground/dialog',
    category: 'Popups',
    package: '@syncfusion/ej2-vue-popups',
    description: 'Modal dialog component for displaying content'
  },

  // Navigations
  {
    name: 'Tab',
    route: '/playground/tab',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: 'Tab component for organizing content in tabs'
  },
  {
    name: 'Accordion',
    route: '/playground/accordion',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: 'Accordion component for expandable content panels'
  },
  {
    name: 'Menu',
    route: '/playground/menu',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: 'Menu component for hierarchical navigation'
  },
  {
    name: 'Toolbar',
    route: '/playground/toolbar',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: 'Toolbar for grouping action buttons and controls'
  },
  {
    name: 'Sidebar',
    route: '/playground/sidebar',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: 'Sidebar for slide-in navigation panels'
  },
  {
    name: 'TreeView',
    route: '/playground/treeview',
    category: 'Navigations',
    package: '@syncfusion/ej2-vue-navigations',
    description: 'TreeView for hierarchical data display'
  },

  // Notifications
  {
    name: 'Toast',
    route: '/playground/toast',
    category: 'Notifications',
    package: '@syncfusion/ej2-vue-notifications',
    description: 'Toast notification for displaying brief messages'
  },

  // Progress
  {
    name: 'ProgressBar',
    route: '/playground/progressbar',
    category: 'Progress',
    package: '@syncfusion/ej2-vue-progressbar',
    description: 'ProgressBar for showing task completion progress'
  },

  // Split Buttons
  {
    name: 'SplitButton',
    route: '/playground/splitbutton',
    category: 'Split Buttons',
    package: '@syncfusion/ej2-vue-splitbuttons',
    description: 'SplitButton with primary action and dropdown menu'
  },

  // Layouts
  {
    name: 'Splitter',
    route: '/playground/splitter',
    category: 'Layouts',
    package: '@syncfusion/ej2-vue-layouts',
    description: 'Splitter for resizable split panels'
  },

  // Lists
  {
    name: 'ListView',
    route: '/playground/listview',
    category: 'Lists',
    package: '@syncfusion/ej2-vue-lists',
    description: 'ListView for displaying and interacting with list data'
  },

  // Editors
  {
    name: 'RichTextEditor',
    route: '/playground/richtexteditor',
    category: 'Editors',
    package: '@syncfusion/ej2-vue-richtexteditor',
    description: 'RichTextEditor for rich text content editing'
  },

  // Schedule
  {
    name: 'Schedule',
    route: '/playground/schedule',
    category: 'Schedule',
    package: '@syncfusion/ej2-vue-schedule',
    description: 'Schedule for calendar and event management'
  },

  // PDF Viewer
  {
    name: 'PdfViewer',
    route: '/playground/pdfviewer',
    category: 'Viewers',
    package: '@syncfusion/ej2-vue-pdfviewer',
    description: 'PdfViewer for viewing and annotating PDF documents'
  },

  // Pivot View
  {
    name: 'PivotView',
    route: '/playground/pivotview',
    category: 'Data Analysis',
    package: '@syncfusion/ej2-vue-pivotview',
    description: 'PivotView for data analysis and visualization'
  },
]

export const categories = [
  'Buttons',
  'Calendars',
  'Data Analysis',
  'Dropdowns',
  'Editors',
  'Grids',
  'Inputs',
  'Layouts',
  'Lists',
  'Navigations',
  'Notifications',
  'Popups',
  'Progress',
  'Schedule',
  'Split Buttons',
  'Viewers',
]
