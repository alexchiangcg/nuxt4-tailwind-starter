<script setup lang="ts">
import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const today = new Date()
const startDate = new Date(today.getFullYear(), today.getMonth(), 1)
const endDate = new Date(today.getFullYear(), today.getMonth(), 15)
const dateRange = ref([startDate, endDate])

// 預設範圍選項
const presets = [
  { label: 'This Week', start: new Date(today.setDate(today.getDate() - today.getDay())), end: new Date(today.setDate(today.getDate() - today.getDay() + 6)) },
  { label: 'This Month', start: new Date(new Date().getFullYear(), new Date().getMonth(), 1), end: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0) },
  { label: 'Last Month', start: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1), end: new Date(new Date().getFullYear(), new Date().getMonth(), 0) },
  { label: 'Last 30 Days', start: new Date(new Date().setDate(new Date().getDate() - 30)), end: new Date() },
]

const handleChange = (args: { startDate: Date; endDate: Date }) => {
  console.log('Date range changed:', args.startDate, 'to', args.endDate)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">DateRangePicker Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-calendars</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic DateRangePicker -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic DateRangePicker
        </h2>
        <p class="text-gray-600 mb-6">Select a date range with start and end dates</p>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Select Date Range</label>
            <ejs-daterangepicker
              :start-date="startDate"
              :end-date="endDate"
              @change="handleChange"
              class="w-80"
            />
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
            <ejs-daterangepicker
              :start-date="startDate"
              :end-date="endDate"
              format="yyyy-MM-dd"
              class="w-96"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">dd/MM/yyyy</label>
            <ejs-daterangepicker
              :start-date="startDate"
              :end-date="endDate"
              format="dd/MM/yyyy"
              class="w-96"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">MMM dd, yyyy</label>
            <ejs-daterangepicker
              :start-date="startDate"
              :end-date="endDate"
              format="MMM dd, yyyy"
              class="w-96"
            />
          </div>
        </div>
      </section>

      <!-- 3. Custom Separator -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Custom Separator
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">separator</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Separator: " to "</label>
            <ejs-daterangepicker
              :start-date="startDate"
              :end-date="endDate"
              separator=" to "
              class="w-96"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Separator: " ~ "</label>
            <ejs-daterangepicker
              :start-date="startDate"
              :end-date="endDate"
              separator=" ~ "
              class="w-96"
            />
          </div>
        </div>
      </section>

      <!-- 4. Min/Max Range -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Date Range Restriction
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">min</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">max</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">minDays</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">maxDays</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Min 3 days, Max 14 days selection</label>
            <ejs-daterangepicker
              :min-days="3"
              :max-days="14"
              placeholder="Select 3-14 days range"
              class="w-96"
            />
          </div>
        </div>
      </section>

      <!-- 5. Presets -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Preset Ranges
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">presets</code>
        </p>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-gray-700">With Preset Options</label>
          <ejs-daterangepicker
            :presets="presets"
            placeholder="Select a preset or custom range"
            class="w-96"
          />
        </div>
      </section>

      <!-- 6. Floating Label -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Floating Label
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">floatLabelType</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Auto</label>
            <ejs-daterangepicker
              placeholder="Select Date Range"
              float-label-type="Auto"
              class="w-96"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Always</label>
            <ejs-daterangepicker
              placeholder="Select Date Range"
              float-label-type="Always"
              class="w-96"
            />
          </div>
        </div>
      </section>

      <!-- 7. Week Number -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Week Number
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">weekNumber</code>
        </p>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium text-gray-700">Show Week Numbers</label>
          <ejs-daterangepicker
            :week-number="true"
            class="w-96"
          />
        </div>
      </section>

      <!-- 8. States -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. States
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">readonly</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Disabled</label>
            <ejs-daterangepicker
              :start-date="startDate"
              :end-date="endDate"
              :enabled="false"
              class="w-96"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Readonly</label>
            <ejs-daterangepicker
              :start-date="startDate"
              :end-date="endDate"
              :readonly="true"
              class="w-96"
            />
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
                  Default
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">startDate</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date</td>
                <td class="px-4 py-3 text-sm text-gray-600">Start date of the range</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">endDate</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date</td>
                <td class="px-4 py-3 text-sm text-gray-600">End date of the range</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">format</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date display format</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'M/d/yyyy'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">separator</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Separator between start and end dates</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">' - '</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">minDays</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Minimum days in selection range</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">maxDays</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Maximum days in selection range</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">presets</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Predefined date range options</td>
                <td class="px-4 py-3 text-sm text-gray-600">[]</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">weekNumber</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show week numbers</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">floatLabelType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Floating label type</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Never'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


