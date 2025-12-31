<script setup lang="ts">
import { DropDownButtonComponent as EjsDropdownbutton } from '@syncfusion/ej2-vue-splitbuttons'

definePageMeta({
  layout: 'playground'
})

// Basic items
const basicItems = [
  { text: 'Dashboard' },
  { text: 'Notifications' },
  { text: 'User Info' },
  { text: 'Log Out' }
]

// Items with icons
const iconItems = [
  { text: 'Edit', iconCss: 'e-icons e-edit' },
  { text: 'Delete', iconCss: 'e-icons e-trash' },
  { text: 'Copy', iconCss: 'e-icons e-copy' },
  { text: 'Print', iconCss: 'e-icons e-print' }
]

// Items with separator
const separatorItems = [
  { text: 'New File', iconCss: 'e-icons e-file-new' },
  { text: 'Open File', iconCss: 'e-icons e-folder-open' },
  { separator: true },
  { text: 'Save', iconCss: 'e-icons e-save' },
  { text: 'Save As', iconCss: 'e-icons e-save' },
  { separator: true },
  { text: 'Exit', iconCss: 'e-icons e-close' }
]

// Items with disabled
const disabledItems = [
  { text: 'Available' },
  { text: 'Disabled', disabled: true },
  { text: 'Also Available' },
  { text: 'Also Disabled', disabled: true }
]

const onSelect = (args: any) => {
  console.log('Selected:', args.item.text)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">DropdownButton Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-splitbuttons</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic DropdownButton -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic DropdownButton</h2>
        <p class="text-gray-600 mb-6">Simple dropdown with text items</p>
        <ejs-dropdownbutton id="basic-dropdown" :items="basicItems" @select="onSelect">
          Menu
        </ejs-dropdownbutton>
      </section>

      <!-- 2. With Icons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. With Icons</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">iconCss</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">iconPosition</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-dropdownbutton
            id="icon-left"
            :items="iconItems"
            icon-css="e-icons e-menu"
          >
            Actions
          </ejs-dropdownbutton>
          <ejs-dropdownbutton
            id="icon-right"
            :items="iconItems"
            icon-css="e-icons e-menu"
            icon-position="Right"
          >
            Actions
          </ejs-dropdownbutton>
          <ejs-dropdownbutton
            id="icon-top"
            :items="iconItems"
            icon-css="e-icons e-menu"
            icon-position="Top"
          >
            Actions
          </ejs-dropdownbutton>
          <ejs-dropdownbutton
            id="icon-bottom"
            :items="iconItems"
            icon-css="e-icons e-menu"
            icon-position="Bottom"
          >
            Actions
          </ejs-dropdownbutton>
        </div>
      </section>

      <!-- 3. Items with Icons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Items with Icons</h2>
        <p class="text-gray-600 mb-6">Each item can have its own icon</p>
        <ejs-dropdownbutton id="item-icons" :items="iconItems" icon-css="e-icons e-settings">
          Settings
        </ejs-dropdownbutton>
      </section>

      <!-- 4. Separator and Disabled Items -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Separator and Disabled Items</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">separator</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <div class="flex gap-4">
          <ejs-dropdownbutton id="separator-dropdown" :items="separatorItems" icon-css="e-icons e-file">
            File
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="disabled-items-dropdown" :items="disabledItems">
            With Disabled
          </ejs-dropdownbutton>
        </div>
      </section>

      <!-- 5. Button Styles -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Button Styles</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cssClass</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-dropdownbutton id="primary-dropdown" :items="basicItems" css-class="e-primary">
            Primary
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="success-dropdown" :items="basicItems" css-class="e-success">
            Success
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="info-dropdown" :items="basicItems" css-class="e-info">
            Info
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="warning-dropdown" :items="basicItems" css-class="e-warning">
            Warning
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="danger-dropdown" :items="basicItems" css-class="e-danger">
            Danger
          </ejs-dropdownbutton>
        </div>
        <div class="flex flex-wrap gap-4 mt-4">
          <ejs-dropdownbutton id="outline-primary" :items="basicItems" css-class="e-primary e-outline">
            Outline Primary
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="outline-success" :items="basicItems" css-class="e-success e-outline">
            Outline Success
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="flat-dropdown" :items="basicItems" css-class="e-flat">
            Flat
          </ejs-dropdownbutton>
        </div>
      </section>

      <!-- 6. Popup Positions -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Popup Positions</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">popupPosition</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-dropdownbutton id="pos-bottom-left" :items="basicItems">
            Bottom Left (Default)
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="pos-bottom-center" :items="basicItems">
            Bottom Center
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="pos-bottom-right" :items="basicItems">
            Bottom Right
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="pos-top-left" :items="basicItems">
            Top Left
          </ejs-dropdownbutton>
        </div>
      </section>

      <!-- 7. Icon Only -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Icon Only Button</h2>
        <p class="text-gray-600 mb-6">Dropdown button with only icon, no text</p>
        <div class="flex gap-4">
          <ejs-dropdownbutton
            id="icon-only-1"
            :items="iconItems"
            icon-css="e-icons e-more-vertical-1"
            css-class="e-round"
          />
          <ejs-dropdownbutton
            id="icon-only-2"
            :items="iconItems"
            icon-css="e-icons e-settings"
          />
          <ejs-dropdownbutton
            id="icon-only-3"
            :items="basicItems"
            icon-css="e-icons e-user"
            css-class="e-primary"
          />
        </div>
      </section>

      <!-- 8. Disabled -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Disabled State</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <div class="flex gap-4">
          <ejs-dropdownbutton id="enabled-dropdown" :items="basicItems">
            Enabled
          </ejs-dropdownbutton>
          <ejs-dropdownbutton id="disabled-dropdown" :items="basicItems" :disabled="true">
            Disabled
          </ejs-dropdownbutton>
        </div>
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. API Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">items</td>
                <td class="px-4 py-3 text-sm text-gray-600">ItemModel[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Dropdown menu items</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">iconCss</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">CSS class for button icon</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">iconPosition</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Left | Right | Top | Bottom</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">e-primary, e-success, e-outline, etc.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Disable the dropdown button</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">select</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when item is selected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
