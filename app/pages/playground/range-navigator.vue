<script setup lang="ts">
import { RangeNavigatorComponent as EjsRangenavigator, RangenavigatorSeriesDirective as ERangenavigatorSeries, RangenavigatorSeriesCollectionDirective as ERangenavigatorSeriesCollection, AreaSeries, DateTime, RangeTooltip } from '@syncfusion/ej2-vue-charts'
import { provide, ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Provide services
provide('rangeNavigator', [AreaSeries, DateTime, RangeTooltip])

// Generate sample data
const generateData = (start: Date, count: number) => {
  const data = []
  const baseValue = 100
  for (let i = 0; i < count; i++) {
    const date = new Date(start)
    date.setDate(date.getDate() + i)
    const random = Math.random() * 20 - 10
    data.push({
      x: date,
      y: baseValue + Math.sin(i * 0.1) * 30 + random
    })
  }
  return data
}

// Stock price data (2023)
const stockData = generateData(new Date(2023, 0, 1), 365)

// Shorter dataset for demos
const shortData = generateData(new Date(2023, 0, 1), 90)

// Event handlers
const selectedRange = ref({ start: '', end: '' })

const onChanged = (args: any) => {
  if (args.start && args.end) {
    selectedRange.value = {
      start: new Date(args.start).toLocaleDateString(),
      end: new Date(args.end).toLocaleDateString()
    }
  }
}

// Tooltip settings
const tooltip = { enable: true, displayMode: 'Always' }
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Range Navigator Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-charts</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Range Navigator -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Range Navigator</h2>
        <p class="text-gray-600 mb-6">Select a date range using the slider handles</p>
        <ejs-rangenavigator
          id="basic-range"
          :value="[new Date(2023, 0, 1), new Date(2023, 3, 1)]"
          value-type="DateTime"
          label-format="MMM"
          height="120px"
        >
          <e-rangenavigator-series-collection>
            <e-rangenavigator-series :data-source="stockData" x-name="x" y-name="y" type="Area" />
          </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
      </section>

      <!-- 2. With Tooltip -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. With Tooltip</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">tooltip.enable</code>
        </p>
        <ejs-rangenavigator
          id="tooltip-range"
          :value="[new Date(2023, 0, 1), new Date(2023, 2, 1)]"
          value-type="DateTime"
          label-format="MMM dd"
          :tooltip="tooltip"
          height="120px"
        >
          <e-rangenavigator-series-collection>
            <e-rangenavigator-series :data-source="shortData" x-name="x" y-name="y" type="Area" />
          </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
      </section>

      <!-- 3. Custom Styling -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Custom Styling</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">navigatorStyleSettings</code>
        </p>
        <ejs-rangenavigator
          id="styled-range"
          :value="[new Date(2023, 0, 1), new Date(2023, 5, 1)]"
          value-type="DateTime"
          label-format="MMM"
          height="120px"
          :navigator-style-settings="{
            unselectedRegionColor: 'rgba(79, 70, 229, 0.1)',
            selectedRegionColor: 'rgba(79, 70, 229, 0.3)',
            thumbSettings: {
              fill: '#4F46E5',
              border: { color: '#4F46E5', width: 2 }
            }
          }"
        >
          <e-rangenavigator-series-collection>
            <e-rangenavigator-series
              :data-source="stockData"
              x-name="x"
              y-name="y"
              type="Area"
              fill="rgba(79, 70, 229, 0.5)"
              border-color="#4F46E5"
              :border-width="2"
            />
          </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
      </section>

      <!-- 4. Event Handling -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Event Handling</h2>
        <p class="text-gray-600 mb-6">
          Event: <code class="text-sm bg-gray-100 px-2 py-1 rounded">changed</code>
        </p>
        <ejs-rangenavigator
          id="event-range"
          :value="[new Date(2023, 0, 1), new Date(2023, 3, 1)]"
          value-type="DateTime"
          label-format="MMM dd"
          height="120px"
          @changed="onChanged"
        >
          <e-rangenavigator-series-collection>
            <e-rangenavigator-series :data-source="stockData" x-name="x" y-name="y" type="Area" />
          </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
        <div class="mt-4 p-4 bg-gray-100 rounded-lg">
          <p class="text-sm text-gray-600">
            <span class="font-medium">Selected Range:</span>
            <span v-if="selectedRange.start" class="ml-2">
              {{ selectedRange.start }} - {{ selectedRange.end }}
            </span>
            <span v-else class="ml-2 text-gray-400">Drag the handles to select a range</span>
          </p>
        </div>
      </section>

      <!-- 5. Period Selector -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Period Selector</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">periodSelectorSettings</code>
        </p>
        <ejs-rangenavigator
          id="period-range"
          :value="[new Date(2023, 0, 1), new Date(2023, 11, 31)]"
          value-type="DateTime"
          label-format="MMM"
          height="150px"
          :period-selector-settings="{
            position: 'Top',
            periods: [
              { text: '1M', interval: 1, intervalType: 'Months' },
              { text: '3M', interval: 3, intervalType: 'Months' },
              { text: '6M', interval: 6, intervalType: 'Months' },
              { text: 'YTD', text: 'YTD' },
              { text: '1Y', interval: 1, intervalType: 'Years' },
              { text: 'All' }
            ]
          }"
        >
          <e-rangenavigator-series-collection>
            <e-rangenavigator-series :data-source="stockData" x-name="x" y-name="y" type="Area" />
          </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
      </section>

      <!-- 6. Light Weight Mode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Light Weight Mode</h2>
        <p class="text-gray-600 mb-6">
          Without data series - just the range selector
        </p>
        <ejs-rangenavigator
          id="lightweight-range"
          :value="[new Date(2023, 0, 1), new Date(2023, 6, 1)]"
          value-type="DateTime"
          label-format="MMM yyyy"
          height="80px"
          :interval="1"
          interval-type="Months"
          :enable-deferred-update="true"
        />
      </section>

      <!-- 7. Label Customization -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Label Customization</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">labelStyle</code>
        </p>
        <ejs-rangenavigator
          id="label-range"
          :value="[new Date(2023, 3, 1), new Date(2023, 9, 1)]"
          value-type="DateTime"
          label-format="MMMM"
          height="120px"
          :label-style="{
            color: '#4F46E5',
            fontWeight: '600',
            size: '12px'
          }"
        >
          <e-rangenavigator-series-collection>
            <e-rangenavigator-series :data-source="stockData" x-name="x" y-name="y" type="Area" />
          </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Selected range [start, end]</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">valueType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">DateTime, Double, Logarithmic</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">labelFormat</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Format for axis labels</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">intervalType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Years, Months, Days, Hours, etc.</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">navigatorStyleSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Styling for navigator appearance</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">periodSelectorSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Period selector buttons (1M, 3M, etc.)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">tooltip</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Tooltip configuration</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">changed</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when range changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
:deep(.e-range-navigator) {
  font-family: inherit;
}
</style>
