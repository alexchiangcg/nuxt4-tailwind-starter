<script setup lang="ts">
import { InPlaceEditorComponent as EjsInplaceeditor, AutoComplete, ComboBox, MultiSelect, TimePicker, DateRangePicker, ColorPicker, Slider } from '@syncfusion/ej2-vue-inplace-editor'
import { provide, ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Inject additional components
provide('inplaceeditor', [AutoComplete, ComboBox, MultiSelect, TimePicker, DateRangePicker, ColorPicker, Slider])

// Data sources
const frameworkList = ['Vue.js', 'React', 'Angular', 'Svelte', 'Ember.js', 'Next.js', 'Nuxt.js']
const statusList = ['Active', 'Inactive', 'Pending', 'Suspended']

// Models for different editor types
const textModel = { placeholder: 'Enter your name' }
const numericModel = { placeholder: 'Enter value', min: 0, max: 100 }
const dateModel = { placeholder: 'Select date' }
const dropdownModel = { dataSource: statusList, placeholder: 'Select status' }
const autoCompleteModel = { dataSource: frameworkList, placeholder: 'Select framework' }
const multiSelectModel = { dataSource: frameworkList, placeholder: 'Select frameworks' }
const colorModel = { modeSwitcher: true }
const sliderModel = { min: 0, max: 100, ticks: { placement: 'After', largeStep: 20, smallStep: 5, showSmallTicks: true } }
const maskModel = { mask: '(999) 999-9999' }

// Event log
const eventLog = ref<string[]>([])

const addLog = (message: string) => {
  eventLog.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLog.value.length > 5) {
    eventLog.value.shift()
  }
}

const onActionBegin = (args: any) => {
  addLog(`Action Begin: ${args.name}`)
}

const onActionSuccess = (args: any) => {
  addLog(`Action Success: Value = ${args.value}`)
}

const onActionFailure = (args: any) => {
  addLog(`Action Failure: ${args.name}`)
}

// Sample values
const dateValue = new Date('2024-06-15')
const multiValue = ['Vue.js', 'Nuxt.js']
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">In-Place Editor Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inplace-editor</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Text Editor -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Text Editor</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">type="text"</code> (default)
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-32">Name:</span>
            <ejs-inplaceeditor
              id="text-basic"
              type="text"
              mode="inline"
              value="John Doe"
              :model="textModel"
            />
          </div>
        </div>
      </section>

      <!-- 2. Rendering Modes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Rendering Modes</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">mode</code> - inline or popup
        </p>
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-32">Inline:</span>
            <ejs-inplaceeditor
              id="mode-inline"
              type="text"
              mode="inline"
              value="Click to edit inline"
              :model="textModel"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-32">Popup:</span>
            <ejs-inplaceeditor
              id="mode-popup"
              type="text"
              mode="popup"
              value="Click for popup editor"
              :model="textModel"
            />
          </div>
        </div>
      </section>

      <!-- 3. Different Editor Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Built-in Editor Types</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">type</code>
        </p>
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">TextBox:</span>
            <ejs-inplaceeditor
              id="type-text"
              type="text"
              mode="inline"
              value="Sample text"
              :model="textModel"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">Numeric:</span>
            <ejs-inplaceeditor
              id="type-numeric"
              type="numeric"
              mode="inline"
              :value="42"
              :model="numericModel"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">DatePicker:</span>
            <ejs-inplaceeditor
              id="type-date"
              type="date"
              mode="inline"
              :value="dateValue"
              :model="dateModel"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">MaskedTextBox:</span>
            <ejs-inplaceeditor
              id="type-mask"
              type="mask"
              mode="inline"
              value="(555) 123-4567"
              :model="maskModel"
            />
          </div>
        </div>
      </section>

      <!-- 4. Dropdown Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Dropdown Editor Types</h2>
        <p class="text-gray-600 mb-6">Selection-based editors with data sources</p>
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">DropDownList:</span>
            <ejs-inplaceeditor
              id="type-dropdown"
              type="dropdownlist"
              mode="inline"
              value="Active"
              :model="dropdownModel"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">AutoComplete:</span>
            <ejs-inplaceeditor
              id="type-autocomplete"
              type="autocomplete"
              mode="inline"
              value="Vue.js"
              :model="autoCompleteModel"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">ComboBox:</span>
            <ejs-inplaceeditor
              id="type-combobox"
              type="combobox"
              mode="inline"
              value="React"
              :model="autoCompleteModel"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">MultiSelect:</span>
            <ejs-inplaceeditor
              id="type-multiselect"
              type="multiselect"
              mode="inline"
              :value="multiValue"
              :model="multiSelectModel"
            />
          </div>
        </div>
      </section>

      <!-- 5. Color and Slider -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Color Picker and Slider</h2>
        <p class="text-gray-600 mb-6">Visual editor types</p>
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">ColorPicker:</span>
            <ejs-inplaceeditor
              id="type-color"
              type="color"
              mode="inline"
              value="#4F46E5"
              :model="colorModel"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">Slider:</span>
            <ejs-inplaceeditor
              id="type-slider"
              type="slider"
              mode="inline"
              :value="60"
              :model="sliderModel"
            />
          </div>
        </div>
      </section>

      <!-- 6. Submit on Enter -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Submit on Enter</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">submitOnEnter</code>
        </p>
        <div class="flex items-center gap-4">
          <span class="text-gray-700 w-40">Press Enter to submit:</span>
          <ejs-inplaceeditor
            id="submit-enter"
            type="text"
            mode="inline"
            value="Edit and press Enter"
            :submit-on-enter="true"
            :model="textModel"
          />
        </div>
      </section>

      <!-- 7. Show Buttons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Action Buttons</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">showButtons</code>
        </p>
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">With buttons:</span>
            <ejs-inplaceeditor
              id="buttons-show"
              type="text"
              mode="inline"
              value="Shows save/cancel"
              :show-buttons="true"
              :model="textModel"
            />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-gray-700 w-40">Without buttons:</span>
            <ejs-inplaceeditor
              id="buttons-hide"
              type="text"
              mode="inline"
              value="Auto-save on blur"
              :show-buttons="false"
              :model="textModel"
            />
          </div>
        </div>
      </section>

      <!-- 8. Disabled State -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Disabled State</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <div class="flex items-center gap-4">
          <span class="text-gray-700 w-40">Disabled editor:</span>
          <ejs-inplaceeditor
            id="disabled-editor"
            type="text"
            mode="inline"
            value="Cannot be edited"
            :disabled="true"
            :model="textModel"
          />
        </div>
      </section>

      <!-- 9. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. Events</h2>
        <p class="text-gray-600 mb-6">
          Events: <code class="text-sm bg-gray-100 px-2 py-1 rounded">actionBegin</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">actionSuccess</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">actionFailure</code>
        </p>
        <div class="flex items-center gap-4 mb-4">
          <span class="text-gray-700 w-40">Track events:</span>
          <ejs-inplaceeditor
            id="event-editor"
            type="text"
            mode="inline"
            value="Edit and save to see events"
            :model="textModel"
            @action-begin="onActionBegin"
            @action-success="onActionSuccess"
            @action-failure="onActionFailure"
          />
        </div>
        <div class="p-3 bg-gray-100 rounded text-sm font-mono max-h-32 overflow-y-auto">
          <p v-for="(log, index) in eventLog" :key="index" class="text-gray-600">{{ log }}</p>
          <p v-if="eventLog.length === 0" class="text-gray-400">Event log will appear here...</p>
        </div>
      </section>

      <!-- 10. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">10. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Editor type (text, numeric, date, dropdown, etc.)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">mode</td>
                <td class="px-4 py-3 text-sm text-gray-600">'inline' | 'popup'</td>
                <td class="px-4 py-3 text-sm text-gray-600">Rendering mode for editor</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">any</td>
                <td class="px-4 py-3 text-sm text-gray-600">Current value of the editor</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">model</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Configuration for the internal component</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">submitOnEnter</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Submit value when Enter is pressed</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showButtons</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show save/cancel buttons</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Disable the editor</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">actionBegin</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired before save action starts</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">actionSuccess</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired after successful save</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
