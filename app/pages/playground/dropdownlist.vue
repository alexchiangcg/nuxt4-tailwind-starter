<script setup lang="ts">
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const sportsData = ref(['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Hockey', 'Rugby', 'Tennis'])
const countries = ref([
  { value: 'US', text: 'United States' },
  { value: 'UK', text: 'United Kingdom' },
  { value: 'JP', text: 'Japan' },
  { value: 'DE', text: 'Germany' },
  { value: 'FR', text: 'France' }
])
const fields = ref({ text: 'text', value: 'value' })
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">DropDownList Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-dropdowns</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic DropDown -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic DropDownList</h2>
        <p class="text-gray-600 mb-6">Simple dropdown with array data source</p>
        <div class="max-w-sm">
          <ejs-dropdownlist :data-source="sportsData" placeholder="Select a sport" />
        </div>
      </section>

      <!-- 2. Object Data with Value/Text Mapping -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Object Data Source</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">fields</code>
        </p>
        <div class="max-w-sm">
          <ejs-dropdownlist :data-source="countries" :fields="fields" placeholder="Select a country" />
        </div>
      </section>

      <!-- 3. Placeholder -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Placeholder</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">placeholder</code>
        </p>
        <div class="space-y-4 max-w-sm">
          <ejs-dropdownlist :data-source="sportsData" placeholder="Choose your favorite sport" />
        </div>
      </section>

      <!-- 4. Floating Label -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Floating Label</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">floatLabelType</code>
        </p>
        <div class="space-y-4 max-w-sm">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Auto</label>
            <ejs-dropdownlist :data-source="sportsData" placeholder="Select sport" float-label-type="Auto" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Always</label>
            <ejs-dropdownlist :data-source="sportsData" placeholder="Select sport" float-label-type="Always" />
          </div>
        </div>
      </section>

      <!-- 5. Show Clear Button -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Clear Button</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">showClearButton</code>
        </p>
        <div class="max-w-sm">
          <ejs-dropdownlist :data-source="sportsData" :show-clear-button="true" placeholder="Select and clear" />
        </div>
      </section>

      <!-- 6. States -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. States</h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">readonly</code>
        </p>
        <div class="space-y-4 max-w-sm">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Disabled</label>
            <ejs-dropdownlist :data-source="sportsData" value="Cricket" :enabled="false" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Readonly</label>
            <ejs-dropdownlist :data-source="sportsData" value="Football" :readonly="true" />
          </div>
        </div>
      </section>

      <!-- 7. Popup Height & Width -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Popup Dimensions</h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">popupHeight</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">popupWidth</code>
        </p>
        <div class="max-w-sm">
          <ejs-dropdownlist :data-source="sportsData" popup-height="200px" popup-width="300px" placeholder="Custom popup size" />
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
                <td class="px-4 py-3 text-sm text-gray-600">Array | Object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data source for dropdown items</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">Object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Mapping fields for value and text</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Selected value</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">placeholder</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Placeholder text</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showClearButton</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show clear button</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable/disable component</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-inputs/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import '@syncfusion/ej2-vue-dropdowns/styles/material.css';
</style>
