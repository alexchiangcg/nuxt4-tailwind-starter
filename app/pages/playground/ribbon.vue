<script setup lang="ts">
import {
  RibbonComponent as EjsRibbon,
  RibbonTabDirective as ERibbonTab,
  RibbonTabsDirective as ERibbonTabs,
  RibbonGroupDirective as ERibbonGroup,
  RibbonGroupsDirective as ERibbonGroups,
  RibbonCollectionDirective as ERibbonCollection,
  RibbonCollectionsDirective as ERibbonCollections,
  RibbonItemDirective as ERibbonItem,
  RibbonItemsDirective as ERibbonItems,
  RibbonFileMenu,
  RibbonColorPicker,
  RibbonItemSize
} from '@syncfusion/ej2-vue-ribbon'
import { provide } from 'vue'

definePageMeta({
  layout: 'playground'
})

// 提供 Ribbon 功能模組
provide('ribbon', [RibbonFileMenu, RibbonColorPicker])

// Item size 常數
const largeSize = RibbonItemSize.Large
const smallSize = RibbonItemSize.Small

// File Menu 設定
const fileSettings = {
  visible: true,
  menuItems: [
    { text: 'New', iconCss: 'e-icons e-file-new', id: 'new' },
    { text: 'Open', iconCss: 'e-icons e-folder-open', id: 'open' },
    { text: 'Save', iconCss: 'e-icons e-save', id: 'save' },
    { text: 'Save As', iconCss: 'e-icons e-save', id: 'saveas' },
    { separator: true },
    { text: 'Print', iconCss: 'e-icons e-print', id: 'print' },
    { text: 'Export', iconCss: 'e-icons e-export', id: 'export' }
  ]
}

// Clipboard 按鈕設定
const pasteSettings = {
  iconCss: 'e-icons e-paste',
  content: 'Paste',
  items: [
    { text: 'Keep Source Format' },
    { text: 'Merge Format' },
    { text: 'Keep Text Only' }
  ]
}

const cutButton = {
  iconCss: 'e-icons e-cut',
  content: 'Cut'
}

const copyButton = {
  iconCss: 'e-icons e-copy',
  content: 'Copy'
}

const formatPainterButton = {
  iconCss: 'e-icons e-format-painter',
  content: 'Format Painter'
}

// Font 設定
const fontStyleOptions = {
  dataSource: ['Arial', 'Calibri', 'Cambria', 'Georgia', 'Times New Roman', 'Verdana'],
  index: 1,
  width: '120px',
  allowFiltering: true
}

const fontSizeOptions = {
  dataSource: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '24', '28', '36', '48', '72'],
  index: 4,
  width: '60px'
}

// Formatting 按鈕
const boldButton = { iconCss: 'e-icons e-bold', content: 'Bold', isToggle: true }
const italicButton = { iconCss: 'e-icons e-italic', content: 'Italic', isToggle: true }
const underlineButton = { iconCss: 'e-icons e-underline', content: 'Underline', isToggle: true }
const strikethroughButton = { iconCss: 'e-icons e-strikethrough', content: 'Strikethrough', isToggle: true }

// Color picker 設定
const fontColorSettings = { value: '#000000' }
const highlightColorSettings = { value: '#FFFF00' }

// Paragraph 按鈕
const alignLeftButton = { iconCss: 'e-icons e-align-left', content: 'Align Left' }
const alignCenterButton = { iconCss: 'e-icons e-align-center', content: 'Center' }
const alignRightButton = { iconCss: 'e-icons e-align-right', content: 'Align Right' }
const justifyButton = { iconCss: 'e-icons e-justify', content: 'Justify' }

const bulletListButton = { iconCss: 'e-icons e-list-unordered', content: 'Bullets' }
const numberListButton = { iconCss: 'e-icons e-list-ordered', content: 'Numbering' }

// Insert 按鈕
const tableSettings = {
  iconCss: 'e-icons e-table',
  content: 'Table',
  isDropDownButton: true,
  items: [
    { text: 'Insert Table' },
    { text: 'Draw Table' },
    { text: 'Convert Table' }
  ]
}

const pictureSettings = {
  iconCss: 'e-icons e-image',
  content: 'Pictures',
  isDropDownButton: true,
  items: [
    { text: 'From File' },
    { text: 'Online Pictures' },
    { text: 'Stock Images' }
  ]
}

const shapeSettings = {
  iconCss: 'e-icons e-shapes',
  content: 'Shapes',
  isDropDownButton: true,
  items: [
    { text: 'Rectangles' },
    { text: 'Lines' },
    { text: 'Arrows' },
    { text: 'Flowchart' }
  ]
}

const chartSettings = {
  iconCss: 'e-icons e-chart',
  content: 'Chart'
}

const linkSettings = {
  iconCss: 'e-icons e-link',
  content: 'Link'
}

const commentSettings = {
  iconCss: 'e-icons e-comment-add',
  content: 'Comment'
}

// View 按鈕
const printLayoutButton = { iconCss: 'e-icons e-print-layout', content: 'Print Layout' }
const webLayoutButton = { iconCss: 'e-icons e-web-layout', content: 'Web Layout' }

// Checkbox 設定
const rulerSettings = { label: 'Ruler', checked: true }
const gridlinesSettings = { label: 'Gridlines', checked: false }
const navigationSettings = { label: 'Navigation Pane', checked: false }

// Zoom 設定
const zoomSettings = {
  dataSource: ['50%', '75%', '100%', '125%', '150%', '200%'],
  index: 2,
  width: '80px'
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Ribbon Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-ribbon</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Full Featured Ribbon -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Full Featured Ribbon
        </h2>
        <p class="text-gray-600 mb-6">Complete Office-style ribbon with multiple tabs and groups</p>
        <div class="border rounded overflow-hidden">
          <ejs-ribbon id="ribbon-full" :file-menu="fileSettings">
            <e-ribbon-tabs>
              <!-- Home Tab -->
              <e-ribbon-tab header="Home">
                <e-ribbon-groups>
                  <!-- Clipboard Group -->
                  <e-ribbon-group header="Clipboard" group-icon-css="e-icons e-paste" :show-launcher-icon="true">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="SplitButton" :allowed-sizes="largeSize" :split-button-settings="pasteSettings" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="Button" :button-settings="cutButton" />
                          <e-ribbon-item type="Button" :button-settings="copyButton" />
                          <e-ribbon-item type="Button" :button-settings="formatPainterButton" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>

                  <!-- Font Group -->
                  <e-ribbon-group header="Font" orientation="Row" :enable-group-overflow="true" group-icon-css="e-icons e-bold">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="ComboBox" :combo-box-settings="fontStyleOptions" />
                          <e-ribbon-item type="ComboBox" :combo-box-settings="fontSizeOptions" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="ColorPicker" :allowed-sizes="smallSize" :color-picker-settings="fontColorSettings" />
                          <e-ribbon-item type="Button" :allowed-sizes="smallSize" :button-settings="boldButton" />
                          <e-ribbon-item type="Button" :allowed-sizes="smallSize" :button-settings="italicButton" />
                          <e-ribbon-item type="Button" :allowed-sizes="smallSize" :button-settings="underlineButton" />
                          <e-ribbon-item type="Button" :allowed-sizes="smallSize" :button-settings="strikethroughButton" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>

                  <!-- Paragraph Group -->
                  <e-ribbon-group header="Paragraph" orientation="Row" group-icon-css="e-icons e-align-center">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="Button" :allowed-sizes="smallSize" :button-settings="alignLeftButton" />
                          <e-ribbon-item type="Button" :allowed-sizes="smallSize" :button-settings="alignCenterButton" />
                          <e-ribbon-item type="Button" :allowed-sizes="smallSize" :button-settings="alignRightButton" />
                          <e-ribbon-item type="Button" :allowed-sizes="smallSize" :button-settings="justifyButton" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="Button" :allowed-sizes="smallSize" :button-settings="bulletListButton" />
                          <e-ribbon-item type="Button" :allowed-sizes="smallSize" :button-settings="numberListButton" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>
                </e-ribbon-groups>
              </e-ribbon-tab>

              <!-- Insert Tab -->
              <e-ribbon-tab header="Insert">
                <e-ribbon-groups>
                  <e-ribbon-group header="Tables" :is-collapsible="false">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="DropDown" :allowed-sizes="largeSize" :drop-down-settings="tableSettings" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>

                  <e-ribbon-group header="Illustrations" orientation="Row" group-icon-css="e-icons e-image">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="DropDown" :allowed-sizes="largeSize" :drop-down-settings="pictureSettings" />
                          <e-ribbon-item type="DropDown" :allowed-sizes="largeSize" :drop-down-settings="shapeSettings" />
                          <e-ribbon-item type="Button" :allowed-sizes="largeSize" :button-settings="chartSettings" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>

                  <e-ribbon-group header="Links" :is-collapsible="false">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="Button" :allowed-sizes="largeSize" :button-settings="linkSettings" />
                          <e-ribbon-item type="Button" :allowed-sizes="largeSize" :button-settings="commentSettings" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>
                </e-ribbon-groups>
              </e-ribbon-tab>

              <!-- View Tab -->
              <e-ribbon-tab header="View">
                <e-ribbon-groups>
                  <e-ribbon-group header="Views" orientation="Row" group-icon-css="e-icons e-print-layout">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="Button" :button-settings="printLayoutButton" />
                          <e-ribbon-item type="Button" :button-settings="webLayoutButton" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>

                  <e-ribbon-group header="Show" :is-collapsible="false">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="CheckBox" :check-box-settings="rulerSettings" />
                          <e-ribbon-item type="CheckBox" :check-box-settings="gridlinesSettings" />
                          <e-ribbon-item type="CheckBox" :check-box-settings="navigationSettings" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>

                  <e-ribbon-group header="Zoom">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="ComboBox" :combo-box-settings="zoomSettings" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>
                </e-ribbon-groups>
              </e-ribbon-tab>
            </e-ribbon-tabs>
          </ejs-ribbon>

          <!-- Content Area -->
          <div class="h-64 bg-gray-50 p-4 flex items-center justify-center text-gray-500">
            Document Content Area
          </div>
        </div>
      </section>

      <!-- 2. Simple Ribbon -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Simple Ribbon
        </h2>
        <p class="text-gray-600 mb-6">Minimal ribbon with basic actions</p>
        <div class="border rounded overflow-hidden">
          <ejs-ribbon id="ribbon-simple">
            <e-ribbon-tabs>
              <e-ribbon-tab header="Actions">
                <e-ribbon-groups>
                  <e-ribbon-group header="File">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="Button" :button-settings="{ iconCss: 'e-icons e-file-new', content: 'New' }" />
                          <e-ribbon-item type="Button" :button-settings="{ iconCss: 'e-icons e-folder-open', content: 'Open' }" />
                          <e-ribbon-item type="Button" :button-settings="{ iconCss: 'e-icons e-save', content: 'Save' }" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>

                  <e-ribbon-group header="Edit">
                    <e-ribbon-collections>
                      <e-ribbon-collection>
                        <e-ribbon-items>
                          <e-ribbon-item type="Button" :button-settings="{ iconCss: 'e-icons e-undo', content: 'Undo' }" />
                          <e-ribbon-item type="Button" :button-settings="{ iconCss: 'e-icons e-redo', content: 'Redo' }" />
                        </e-ribbon-items>
                      </e-ribbon-collection>
                    </e-ribbon-collections>
                  </e-ribbon-group>
                </e-ribbon-groups>
              </e-ribbon-tab>
            </e-ribbon-tabs>
          </ejs-ribbon>
        </div>
      </section>

      <!-- 3. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          3. API Reference
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fileMenu</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">File menu configuration</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">tabs</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Collection of ribbon tabs</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">groups</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Groups within each tab</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">items</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Items within each collection</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Item type (Button, DropDown, SplitButton, etc.)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowedSizes</td>
                <td class="px-4 py-3 text-sm text-gray-600">enum</td>
                <td class="px-4 py-3 text-sm text-gray-600">Size of ribbon item (Large, Medium, Small)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 4. Available Item Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          4. Available Item Types
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Button</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">DropDown</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">SplitButton</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">ComboBox</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">CheckBox</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">ColorPicker</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">GroupButton</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Template</span>
          </div>
        </div>
      </section>

      <!-- 5. Structure Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          5. Ribbon Structure
        </h2>
        <div class="bg-gray-50 p-4 rounded font-mono text-sm">
          <pre>
Ribbon
├── File Menu (optional)
└── Tabs
    └── Tab
        └── Groups
            └── Group
                └── Collections
                    └── Collection
                        └── Items
                            └── Item (Button, ComboBox, etc.)
          </pre>
        </div>
      </section>
    </div>
  </div>
</template>


