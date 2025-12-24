export interface PlaygroundComponent {
  name: string
  route: string
  category: string
  package: string
  description?: string
}

export const components: PlaygroundComponent[] = [
  {
    name: 'Button',
    route: '/playground/button',
    category: 'Buttons',
    package: '@syncfusion/ej2-vue-buttons',
    description: 'Button component with various styles and states'
  },
  // 未來可以新增更多元件
  // {
  //   name: 'Grid',
  //   route: '/playground/grid',
  //   category: 'Data',
  //   package: '@syncfusion/ej2-vue-grids',
  // },
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
  'Editors',
  'Schedule',
]
