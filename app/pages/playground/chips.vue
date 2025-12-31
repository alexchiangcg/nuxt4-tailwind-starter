<script setup lang="ts">
import {
  ChipListComponent as EjsChiplist,
  ChipsDirective as EChips,
  ChipDirective as EChip
} from '@syncfusion/ej2-vue-buttons'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const selectedChips = ref<string[]>([])

const onSelect = (args: any) => {
  console.log('Selected:', args)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Chips Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-buttons</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Chips -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Chips</h2>
        <p class="text-gray-600 mb-6">Simple chip list without selection</p>
        <ejs-chiplist id="basic-chips">
          <e-chips>
            <e-chip text="Apple" />
            <e-chip text="Banana" />
            <e-chip text="Cherry" />
            <e-chip text="Date" />
          </e-chips>
        </ejs-chiplist>
      </section>

      <!-- 2. Chip with Avatar/Icon -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Chips with Icons</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">leadingIconCss</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">trailingIconCss</code>
        </p>
        <ejs-chiplist id="icon-chips">
          <e-chips>
            <e-chip text="Home" leading-icon-css="e-icons e-home" />
            <e-chip text="Settings" leading-icon-css="e-icons e-settings" />
            <e-chip text="User" leading-icon-css="e-icons e-user" />
            <e-chip text="Delete" trailing-icon-css="e-icons e-close" />
          </e-chips>
        </ejs-chiplist>
      </section>

      <!-- 3. Choice Chips (Single Selection) -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Choice Chips (Single Selection)</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">selection="Single"</code>
        </p>
        <div>
          <p class="text-sm text-gray-500 mb-3">Select your preferred size:</p>
          <ejs-chiplist id="choice-chips" selection="Single">
            <e-chips>
              <e-chip text="Small" />
              <e-chip text="Medium" />
              <e-chip text="Large" />
              <e-chip text="X-Large" />
            </e-chips>
          </ejs-chiplist>
        </div>
      </section>

      <!-- 4. Filter Chips (Multiple Selection) -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Filter Chips (Multiple Selection)</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">selection="Multiple"</code>
        </p>
        <div>
          <p class="text-sm text-gray-500 mb-3">Select your interests:</p>
          <ejs-chiplist id="filter-chips" selection="Multiple">
            <e-chips>
              <e-chip text="Music" />
              <e-chip text="Sports" />
              <e-chip text="Travel" />
              <e-chip text="Food" />
              <e-chip text="Technology" />
              <e-chip text="Art" />
            </e-chips>
          </ejs-chiplist>
        </div>
      </section>

      <!-- 5. Chip Styles -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Chip Styles</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cssClass</code>
        </p>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Primary, Success, Info, Warning, Danger:</p>
            <ejs-chiplist id="style-chips">
              <e-chips>
                <e-chip text="Primary" css-class="e-primary" />
                <e-chip text="Success" css-class="e-success" />
                <e-chip text="Info" css-class="e-info" />
                <e-chip text="Warning" css-class="e-warning" />
                <e-chip text="Danger" css-class="e-danger" />
              </e-chips>
            </ejs-chiplist>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Outline Style:</p>
            <ejs-chiplist id="outline-chips">
              <e-chips>
                <e-chip text="Primary" css-class="e-primary e-outline" />
                <e-chip text="Success" css-class="e-success e-outline" />
                <e-chip text="Info" css-class="e-info e-outline" />
                <e-chip text="Warning" css-class="e-warning e-outline" />
                <e-chip text="Danger" css-class="e-danger e-outline" />
              </e-chips>
            </ejs-chiplist>
          </div>
        </div>
      </section>

      <!-- 6. Deletable Chips -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Deletable Chips</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">enableDelete</code>
        </p>
        <ejs-chiplist id="delete-chips" :enable-delete="true">
          <e-chips>
            <e-chip text="JavaScript" />
            <e-chip text="TypeScript" />
            <e-chip text="Vue.js" />
            <e-chip text="React" />
            <e-chip text="Angular" />
          </e-chips>
        </ejs-chiplist>
      </section>

      <!-- 7. Drag and Drop -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Drag and Drop</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowDragAndDrop</code>
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-4">
            <p class="text-sm text-gray-500 mb-2">To-Do:</p>
            <ejs-chiplist id="drag-source" :allow-drag-and-drop="true">
              <e-chips>
                <e-chip text="Report" css-class="e-info" />
                <e-chip text="Meeting" css-class="e-warning" />
                <e-chip text="Review" css-class="e-warning" />
                <e-chip text="Design" css-class="e-primary" />
              </e-chips>
            </ejs-chiplist>
          </div>
          <div class="border-2 border-dashed border-green-300 rounded-lg p-4">
            <p class="text-sm text-gray-500 mb-2">Completed:</p>
            <ejs-chiplist id="drag-target" :allow-drag-and-drop="true">
              <e-chips>
                <e-chip text="Planning" css-class="e-success" />
                <e-chip text="Research" css-class="e-success" />
              </e-chips>
            </ejs-chiplist>
          </div>
        </div>
      </section>

      <!-- 8. Disabled Chips -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Disabled State</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>
        </p>
        <ejs-chiplist id="disabled-chips" :enabled="false">
          <e-chips>
            <e-chip text="Disabled 1" />
            <e-chip text="Disabled 2" />
            <e-chip text="Disabled 3" />
          </e-chips>
        </ejs-chiplist>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">selection</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">None | Single | Multiple</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableDelete</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show delete icon on chips</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowDragAndDrop</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable drag and drop</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">e-primary, e-success, e-outline, etc.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">leadingIconCss</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Icon class for leading icon</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">trailingIconCss</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Icon class for trailing icon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
