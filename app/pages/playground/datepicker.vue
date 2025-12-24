<script setup lang="ts">
import { DatePickerComponent as EjsDatepicker } from '@syncfusion/ej2-vue-calendars'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const today = new Date()
const minDate = new Date(today.getFullYear(), today.getMonth(), 1)
const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0)
const sampleDate = ref(new Date())
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">DatePicker Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-calendars</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic DatePicker -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic DatePicker
        </h2>
        <p class="text-gray-600 mb-6">Default DatePicker without any customization</p>
        <div class="flex flex-wrap gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Select Date</label>
            <ejs-datepicker :value="sampleDate" />
          </div>
        </div>
      </section>

      <!-- 2. Date Formats -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Date Formats
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">format</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">yyyy-MM-dd</label>
            <ejs-datepicker :value="sampleDate" format="yyyy-MM-dd" class="w-64" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">dd/MM/yyyy</label>
            <ejs-datepicker :value="sampleDate" format="dd/MM/yyyy" class="w-64" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">MMM dd, yyyy</label>
            <ejs-datepicker :value="sampleDate" format="MMM dd, yyyy" class="w-64" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">EEEE, MMMM dd, yyyy</label>
            <ejs-datepicker :value="sampleDate" format="EEEE, MMMM dd, yyyy" class="w-80" />
          </div>
        </div>
      </section>

      <!-- 3. Min and Max Dates -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Date Range Restriction
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">min</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">max</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">
              Current Month Only ({{ minDate.toLocaleDateString() }} - {{ maxDate.toLocaleDateString() }})
            </label>
            <ejs-datepicker :value="sampleDate" :min="minDate" :max="maxDate" class="w-64" />
          </div>
        </div>
      </section>

      <!-- 4. Placeholder -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Placeholder Text
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">placeholder</code>
        </p>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-gray-700">Custom Placeholder</label>
          <ejs-datepicker placeholder="Choose a date" class="w-64" />
        </div>
      </section>

      <!-- 5. Floating Label -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Floating Label
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">floatLabelType</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Auto</label>
            <ejs-datepicker :value="sampleDate" placeholder="Birth Date" float-label-type="Auto" class="w-64" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Always</label>
            <ejs-datepicker :value="sampleDate" placeholder="Birth Date" float-label-type="Always" class="w-64" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Never</label>
            <ejs-datepicker :value="sampleDate" placeholder="Birth Date" float-label-type="Never" class="w-64" />
          </div>
        </div>
      </section>

      <!-- 6. Disabled and Readonly -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. States
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">readonly</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Disabled</label>
            <ejs-datepicker :value="sampleDate" :enabled="false" class="w-64" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Readonly</label>
            <ejs-datepicker :value="sampleDate" :readonly="true" class="w-64" />
          </div>
        </div>
      </section>

      <!-- 7. Strict Mode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Strict Mode
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">strictMode</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Strict Mode Enabled (only valid dates allowed)</label>
            <ejs-datepicker :value="sampleDate" :strict-mode="true" :min="minDate" :max="maxDate" class="w-64" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Strict Mode Disabled (invalid dates allowed)</label>
            <ejs-datepicker :value="sampleDate" :strict-mode="false" :min="minDate" :max="maxDate" class="w-64" />
          </div>
        </div>
      </section>

      <!-- 8. Start and Depth -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. Calendar View Levels
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">start</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">depth</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Start at Month View (default)</label>
            <ejs-datepicker :value="sampleDate" start="Month" depth="Month" class="w-64" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Start at Year View</label>
            <ejs-datepicker :value="sampleDate" start="Year" class="w-64" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Start at Decade View</label>
            <ejs-datepicker :value="sampleDate" start="Decade" class="w-64" />
          </div>
        </div>
      </section>

      <!-- 9. Week Number -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          9. Week Number
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">weekNumber</code>
        </p>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-gray-700">Show Week Number</label>
          <ejs-datepicker :value="sampleDate" :week-number="true" class="w-64" />
        </div>
      </section>

      <!-- 10. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          10. API Reference
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
                  Default
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date</td>
                <td class="px-4 py-3 text-sm text-gray-600">The selected date value</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">format</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date display format</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'M/d/yyyy'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">min</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date</td>
                <td class="px-4 py-3 text-sm text-gray-600">Minimum selectable date</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">max</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date</td>
                <td class="px-4 py-3 text-sm text-gray-600">Maximum selectable date</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">placeholder</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Placeholder text when no date is selected</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">floatLabelType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Floating label type</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Never'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable or disable the component</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">readonly</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Make the component readonly</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">strictMode</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Restrict to valid dates within min/max range</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">weekNumber</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show week numbers in calendar</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">start</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Initial calendar view</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Month'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">depth</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Maximum calendar view depth</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Month'</td>
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
@import '@syncfusion/ej2-vue-calendars/styles/material.css';
</style>
