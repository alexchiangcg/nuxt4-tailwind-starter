<script setup lang="ts">
import { ListBoxComponent as EjsListbox } from '@syncfusion/ej2-vue-dropdowns'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Basic data
const countries = [
  { name: 'Australia', code: 'AU' },
  { name: 'Canada', code: 'CA' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'Japan', code: 'JP' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'United States', code: 'US' }
]

const fields = { text: 'name', value: 'code' }

// Dual listbox data
const groupA = ref([
  { name: 'Australia', code: 'AU' },
  { name: 'Bermuda', code: 'BM' },
  { name: 'Canada', code: 'CA' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' }
])

const groupB = ref([
  { name: 'India', code: 'IN' },
  { name: 'Italy', code: 'IT' },
  { name: 'Japan', code: 'JP' },
  { name: 'Mexico', code: 'MX' },
  { name: 'Norway', code: 'NO' }
])

// Toolbar items for dual listbox
const toolbarSettings = {
  items: ['moveUp', 'moveDown', 'moveTo', 'moveFrom', 'moveAllTo', 'moveAllFrom']
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">ListBox Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-dropdowns</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic ListBox -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic ListBox</h2>
        <p class="text-gray-600 mb-6">Simple list with single selection</p>
        <div class="max-w-xs">
          <ejs-listbox id="basic-listbox" :data-source="countries" :fields="fields" />
        </div>
      </section>

      <!-- 2. Selection Modes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Selection Modes</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">selectionSettings</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Single Selection</h3>
            <ejs-listbox
              id="single-listbox"
              :data-source="countries"
              :fields="fields"
              :selection-settings="{ mode: 'Single' }"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Multiple Selection (Ctrl+Click)</h3>
            <ejs-listbox
              id="multiple-listbox"
              :data-source="countries"
              :fields="fields"
              :selection-settings="{ mode: 'Multiple' }"
            />
          </div>
        </div>
      </section>

      <!-- 3. Checkbox Selection -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Checkbox Selection</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">selectionSettings.showCheckbox</code>
        </p>
        <div class="max-w-xs">
          <ejs-listbox
            id="checkbox-listbox"
            :data-source="countries"
            :fields="fields"
            :selection-settings="{ showCheckbox: true, showSelectAll: true }"
          />
        </div>
      </section>

      <!-- 4. Drag and Drop -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Drag and Drop</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowDragAndDrop</code>
        </p>
        <div class="max-w-xs">
          <p class="text-sm text-gray-500 mb-2">Drag items to reorder</p>
          <ejs-listbox
            id="drag-listbox"
            :data-source="countries"
            :fields="fields"
            :allow-drag-and-drop="true"
          />
        </div>
      </section>

      <!-- 5. Dual ListBox with Drag & Drop -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Dual ListBox</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">scope</code> - Drag items between lists
        </p>
        <div class="grid grid-cols-2 gap-4 max-w-2xl">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Group A</h3>
            <ejs-listbox
              id="listbox-a"
              :data-source="groupA"
              :fields="fields"
              :allow-drag-and-drop="true"
              scope="dual-list"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Group B</h3>
            <ejs-listbox
              id="listbox-b"
              :data-source="groupB"
              :fields="fields"
              :allow-drag-and-drop="true"
              scope="dual-list"
            />
          </div>
        </div>
      </section>

      <!-- 6. With Toolbar -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Toolbar Actions</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">toolbarSettings</code>
        </p>
        <div class="grid grid-cols-2 gap-4 max-w-2xl">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Available</h3>
            <ejs-listbox
              id="toolbar-a"
              :data-source="[
                { name: 'Apple', code: 'A' },
                { name: 'Banana', code: 'B' },
                { name: 'Cherry', code: 'C' },
                { name: 'Date', code: 'D' },
                { name: 'Elderberry', code: 'E' }
              ]"
              :fields="fields"
              :selection-settings="{ showCheckbox: true }"
              :toolbar-settings="toolbarSettings"
              scope="toolbar-list"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Selected</h3>
            <ejs-listbox
              id="toolbar-b"
              :data-source="[]"
              :fields="fields"
              :selection-settings="{ showCheckbox: true }"
              scope="toolbar-list"
            />
          </div>
        </div>
      </section>

      <!-- 7. Filtering -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Filtering</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowFiltering</code>
        </p>
        <div class="max-w-xs">
          <ejs-listbox
            id="filter-listbox"
            :data-source="countries"
            :fields="fields"
            :allow-filtering="true"
          />
        </div>
      </section>

      <!-- 8. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data source for the list</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Field mapping (text, value)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">selectionSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Selection mode, checkbox options</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowDragAndDrop</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable drag and drop</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">scope</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Group name for dual listbox</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowFiltering</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable search filtering</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">toolbarSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Toolbar configuration for actions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
