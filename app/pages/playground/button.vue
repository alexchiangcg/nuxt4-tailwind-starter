<script setup lang="ts">
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'

definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Button Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-buttons</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. cssClass - Predefined Styles -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Predefined Styles (cssClass)
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cssClass</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="flex flex-col items-center gap-2">
            <ejs-button>Normal</ejs-button>
            <code class="text-xs text-gray-500">default</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-primary">Primary</ejs-button>
            <code class="text-xs text-gray-500">e-primary</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-success">Success</ejs-button>
            <code class="text-xs text-gray-500">e-success</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-info">Info</ejs-button>
            <code class="text-xs text-gray-500">e-info</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-warning">Warning</ejs-button>
            <code class="text-xs text-gray-500">e-warning</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-danger">Danger</ejs-button>
            <code class="text-xs text-gray-500">e-danger</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-link">Link</ejs-button>
            <code class="text-xs text-gray-500">e-link</code>
          </div>
        </div>
      </section>

      <!-- 2. Button Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Button Types
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cssClass</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-primary">Filled</ejs-button>
            <code class="text-xs text-gray-500">e-primary</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-outline e-primary">Outline</ejs-button>
            <code class="text-xs text-gray-500">e-outline</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-flat e-primary">Flat</ejs-button>
            <code class="text-xs text-gray-500">e-flat</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-round e-primary">Round</ejs-button>
            <code class="text-xs text-gray-500">e-round</code>
          </div>
        </div>
      </section>

      <!-- 3. Sizes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Sizes
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cssClass</code>
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-small e-primary">Small</ejs-button>
            <code class="text-xs text-gray-500">e-small</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-primary">Normal</ejs-button>
            <code class="text-xs text-gray-500">default</code>
          </div>
        </div>
      </section>

      <!-- 4. Icons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Icons
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">iconCss</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">iconPosition</code>
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium mb-3">Icon Position</h3>
            <div class="flex flex-wrap gap-4">
              <div class="flex flex-col items-center gap-2">
                <ejs-button css-class="e-primary" icon-css="e-icons e-play-icon" icon-position="Left">
                  Play
                </ejs-button>
                <code class="text-xs text-gray-500">iconPosition="Left"</code>
              </div>
              <div class="flex flex-col items-center gap-2">
                <ejs-button css-class="e-primary" icon-css="e-icons e-play-icon" icon-position="Right">
                  Play
                </ejs-button>
                <code class="text-xs text-gray-500">iconPosition="Right"</code>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-3">Icon Only</h3>
            <div class="flex flex-wrap gap-4">
              <div class="flex flex-col items-center gap-2">
                <ejs-button css-class="e-primary e-icon-btn" icon-css="e-icons e-play-icon" />
                <code class="text-xs text-gray-500">icon only</code>
              </div>
              <div class="flex flex-col items-center gap-2">
                <ejs-button css-class="e-primary e-round" icon-css="e-icons e-play-icon" />
                <code class="text-xs text-gray-500">round icon</code>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-3">Common Icon Examples</h3>
            <div class="flex flex-wrap gap-3">
              <ejs-button css-class="e-primary" icon-css="e-icons e-plus">Add</ejs-button>
              <ejs-button css-class="e-success" icon-css="e-icons e-check">Save</ejs-button>
              <ejs-button css-class="e-danger" icon-css="e-icons e-close">Delete</ejs-button>
              <ejs-button css-class="e-info" icon-css="e-icons e-search">Search</ejs-button>
              <ejs-button css-class="e-warning" icon-css="e-icons e-edit">Edit</ejs-button>
              <ejs-button icon-css="e-icons e-download">Download</ejs-button>
              <ejs-button icon-css="e-icons e-upload">Upload</ejs-button>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. States -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. States
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium mb-3">Disabled State</h3>
            <div class="flex flex-wrap gap-4">
              <ejs-button css-class="e-primary" :disabled="true">Disabled Primary</ejs-button>
              <ejs-button css-class="e-success" :disabled="true">Disabled Success</ejs-button>
              <ejs-button css-class="e-outline e-primary" :disabled="true">Disabled Outline</ejs-button>
              <ejs-button css-class="e-flat e-primary" :disabled="true">Disabled Flat</ejs-button>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-medium mb-3">Interactive States (hover, active)</h3>
            <p class="text-sm text-gray-500 mb-3">Hover and click the buttons below to see state changes</p>
            <div class="flex flex-wrap gap-4">
              <ejs-button css-class="e-primary">Hover Me</ejs-button>
              <ejs-button css-class="e-success">Click Me</ejs-button>
              <ejs-button css-class="e-outline e-primary">Interact</ejs-button>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Content -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Content
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">content</code> or slot
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-primary" content="Using content prop" />
            <code class="text-xs text-gray-500">content prop</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button css-class="e-primary">Using default slot</ejs-button>
            <code class="text-xs text-gray-500">slot</code>
          </div>
        </div>
      </section>

      <!-- 7. isPrimary -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. isPrimary Property
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">isPrimary</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <div class="flex flex-col items-center gap-2">
            <ejs-button>Normal Button</ejs-button>
            <code class="text-xs text-gray-500">isPrimary: false</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-button :is-primary="true">Primary Button</ejs-button>
            <code class="text-xs text-gray-500">isPrimary: true</code>
          </div>
        </div>
      </section>

      <!-- 8. Combinations -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. All Combinations
        </h2>
        <p class="text-gray-600 mb-6">Combining multiple properties</p>

        <div class="space-y-6">
          <!-- Primary combinations -->
          <div>
            <h3 class="text-sm font-medium text-gray-600 mb-3">Primary Style Variations</h3>
            <div class="flex flex-wrap gap-3">
              <ejs-button css-class="e-primary">Primary</ejs-button>
              <ejs-button css-class="e-primary e-small">Primary Small</ejs-button>
              <ejs-button css-class="e-outline e-primary">Primary Outline</ejs-button>
              <ejs-button css-class="e-flat e-primary">Primary Flat</ejs-button>
              <ejs-button css-class="e-primary" icon-css="e-icons e-plus">Primary Icon</ejs-button>
              <ejs-button css-class="e-primary e-round" icon-css="e-icons e-plus" />
              <ejs-button css-class="e-primary" :disabled="true">Primary Disabled</ejs-button>
            </div>
          </div>

          <!-- Success combinations -->
          <div>
            <h3 class="text-sm font-medium text-gray-600 mb-3">Success Style Variations</h3>
            <div class="flex flex-wrap gap-3">
              <ejs-button css-class="e-success">Success</ejs-button>
              <ejs-button css-class="e-success e-small">Success Small</ejs-button>
              <ejs-button css-class="e-outline e-success">Success Outline</ejs-button>
              <ejs-button css-class="e-flat e-success">Success Flat</ejs-button>
              <ejs-button css-class="e-success" icon-css="e-icons e-check">Success Icon</ejs-button>
              <ejs-button css-class="e-success e-round" icon-css="e-icons e-check" />
              <ejs-button css-class="e-success" :disabled="true">Success Disabled</ejs-button>
            </div>
          </div>

          <!-- Danger combinations -->
          <div>
            <h3 class="text-sm font-medium text-gray-600 mb-3">Danger Style Variations</h3>
            <div class="flex flex-wrap gap-3">
              <ejs-button css-class="e-danger">Danger</ejs-button>
              <ejs-button css-class="e-danger e-small">Danger Small</ejs-button>
              <ejs-button css-class="e-outline e-danger">Danger Outline</ejs-button>
              <ejs-button css-class="e-flat e-danger">Danger Flat</ejs-button>
              <ejs-button css-class="e-danger" icon-css="e-icons e-close">Danger Icon</ejs-button>
              <ejs-button css-class="e-danger e-round" icon-css="e-icons e-close" />
              <ejs-button css-class="e-danger" :disabled="true">Danger Disabled</ejs-button>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          9. API Reference
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
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Values
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Applies predefined styles or custom CSS classes</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">
                  e-primary, e-success, e-info, e-warning, e-danger, e-link, e-flat, e-outline, e-round, e-small
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">content</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Text or HTML content to display in the button</td>
                <td class="px-4 py-3 text-sm text-gray-600">Any string</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">iconCss</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">CSS class for the icon to be displayed</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">
                  e-icons e-plus, e-icons e-check, e-icons e-close, etc.
                </td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">iconPosition</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Position of the icon relative to the text</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">Left, Right</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">isPrimary</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Sets the button as the primary action button</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">true, false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Disables the button and prevents user interaction</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">true, false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


