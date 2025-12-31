<script setup lang="ts">
import { CalendarComponent as EjsCalendar } from '@syncfusion/ej2-vue-calendars'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const today = new Date()
const minDate = new Date(today.getFullYear(), today.getMonth(), 1)
const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0)
const selectedDate = ref(new Date())
const multiSelectedDates = ref<Date[]>([])

// 停用特定日期（週末）
const disabledDates = (args: { date: Date }) => {
  const day = args.date.getDay()
  return day === 0 || day === 6
}

// 事件處理
const handleChange = (args: { value: Date }) => {
  console.log('Selected date:', args.value)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Calendar Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-calendars</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Calendar -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic Calendar
        </h2>
        <p class="text-gray-600 mb-6">Default calendar component for inline date selection</p>
        <div class="flex flex-wrap gap-8">
          <div>
            <ejs-calendar v-model:value="selectedDate" @change="handleChange" />
            <p class="mt-4 text-sm text-gray-600">
              Selected: <span class="font-medium">{{ selectedDate?.toLocaleDateString() }}</span>
            </p>
          </div>
        </div>
      </section>

      <!-- 2. Date Range Restriction -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Date Range Restriction
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">min</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">max</code>
        </p>
        <div class="flex flex-wrap gap-8">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              {{ minDate.toLocaleDateString() }} - {{ maxDate.toLocaleDateString() }}
            </label>
            <ejs-calendar :min="minDate" :max="maxDate" />
          </div>
        </div>
      </section>

      <!-- 3. Multiple Selection -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Multiple Selection
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">isMultiSelection</code>
        </p>
        <div class="flex flex-wrap gap-8">
          <div>
            <ejs-calendar
              v-model:values="multiSelectedDates"
              :is-multi-selection="true"
            />
            <p class="mt-4 text-sm text-gray-600">
              Selected {{ multiSelectedDates.length }} date(s)
            </p>
          </div>
        </div>
      </section>

      <!-- 4. Week Number -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Week Number Display
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">weekNumber</code>
        </p>
        <div class="flex flex-wrap gap-8">
          <ejs-calendar :week-number="true" />
        </div>
      </section>

      <!-- 5. Calendar Views -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Calendar Views
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">start</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">depth</code>
        </p>
        <div class="flex flex-wrap gap-8">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Month View (Default)</label>
            <ejs-calendar start="Month" depth="Month" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Year View</label>
            <ejs-calendar start="Year" depth="Year" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Decade View</label>
            <ejs-calendar start="Decade" depth="Decade" />
          </div>
        </div>
      </section>

      <!-- 6. First Day of Week -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. First Day of Week
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">firstDayOfWeek</code>
        </p>
        <div class="flex flex-wrap gap-8">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Sunday (0)</label>
            <ejs-calendar :first-day-of-week="0" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Monday (1)</label>
            <ejs-calendar :first-day-of-week="1" />
          </div>
        </div>
      </section>

      <!-- 7. Disabled Dates -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Disabled Dates (Weekends)
        </h2>
        <p class="text-gray-600 mb-6">
          Event: <code class="text-sm bg-gray-100 px-2 py-1 rounded">renderDayCell</code>
        </p>
        <div class="flex flex-wrap gap-8">
          <div>
            <ejs-calendar
              @render-day-cell="(args: any) => { if (disabledDates(args)) args.isDisabled = true }"
            />
          </div>
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
        <div class="flex flex-wrap gap-8">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Disabled</label>
            <ejs-calendar :enabled="false" />
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date</td>
                <td class="px-4 py-3 text-sm text-gray-600">The selected date value</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">values</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Array of selected dates (multi-selection mode)</td>
                <td class="px-4 py-3 text-sm text-gray-600">[]</td>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">isMultiSelection</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable multiple date selection</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">weekNumber</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show week numbers</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">firstDayOfWeek</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">First day of week (0=Sunday, 1=Monday...)</td>
                <td class="px-4 py-3 text-sm text-gray-600">0</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">start</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Initial calendar view (Month/Year/Decade)</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Month'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">depth</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Maximum drill-down level</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Month'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable or disable the calendar</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 10. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          10. Events
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">change</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when date selection changes</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">renderDayCell</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered before rendering each date cell, used for disabling dates</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">navigated</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when calendar view changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


