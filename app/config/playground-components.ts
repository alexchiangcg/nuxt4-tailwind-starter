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
]

export const categories = [
  'Buttons',
  'Calendars',
  'Dropdowns',
  'Grids',
  'Inputs',
  'Layouts',
  'Navigations',
  'Notifications',
  'Popups',
  'Progress',
  'Split Buttons',
  'Editors',
  'Schedule',
]
