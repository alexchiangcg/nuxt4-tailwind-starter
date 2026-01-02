<script setup lang="ts">
import { BulletChartComponent as EjsBulletchart, BulletRangeDirective as EBulletRange, BulletRangeCollectionDirective as EBulletRangeCollection, BulletTooltip } from '@syncfusion/ej2-vue-charts'
import { provide } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Provide tooltip
provide('bulletchart', [BulletTooltip])

// Basic data
const revenueData = [{ value: 270, target: 250 }]
const profitData = [{ value: 23, target: 27 }]
const expenseData = [{ value: 350, target: 550 }]

// Multiple data points
const salesData = [
  { category: 'Q1', value: 270, target: 250 },
  { category: 'Q2', value: 320, target: 280 },
  { category: 'Q3', value: 290, target: 300 },
  { category: 'Q4', value: 360, target: 350 }
]

// Animation settings
const animation = { enable: true }
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Bullet Chart Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-charts</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Bullet Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Bullet Chart</h2>
        <p class="text-gray-600 mb-6">Revenue comparison with target</p>
        <div class="max-w-lg">
          <ejs-bulletchart
            id="basic-bullet"
            :data-source="revenueData"
            value-field="value"
            target-field="target"
            :minimum="0"
            :maximum="300"
            :interval="50"
            title="Revenue"
            subtitle="(in thousands)"
            :animation="animation"
          >
            <e-bullet-range-collection>
              <e-bullet-range end="100" color="#ebebeb" />
              <e-bullet-range end="200" color="#d8d8d8" />
              <e-bullet-range end="300" color="#7f7f7f" />
            </e-bullet-range-collection>
          </ejs-bulletchart>
        </div>
      </section>

      <!-- 2. With Categories -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. With Categories</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">categoryField</code>
        </p>
        <div class="max-w-lg">
          <ejs-bulletchart
            id="category-bullet"
            :data-source="salesData"
            value-field="value"
            target-field="target"
            category-field="category"
            :minimum="0"
            :maximum="400"
            :interval="100"
            title="Sales Performance"
            :animation="animation"
          >
            <e-bullet-range-collection>
              <e-bullet-range end="150" color="#C6E7C6" />
              <e-bullet-range end="300" color="#E6F2FF" />
              <e-bullet-range end="400" color="#FFE6E6" />
            </e-bullet-range-collection>
          </ejs-bulletchart>
        </div>
      </section>

      <!-- 3. Custom Colors -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Custom Colors</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">valueFill</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">targetColor</code>
        </p>
        <div class="max-w-lg">
          <ejs-bulletchart
            id="color-bullet"
            :data-source="profitData"
            value-field="value"
            target-field="target"
            :minimum="0"
            :maximum="40"
            :interval="10"
            title="Profit %"
            value-fill="#4F46E5"
            target-color="#DC2626"
            :animation="animation"
          >
            <e-bullet-range-collection>
              <e-bullet-range end="15" color="#FEF3C7" />
              <e-bullet-range end="25" color="#D1FAE5" />
              <e-bullet-range end="40" color="#DBEAFE" />
            </e-bullet-range-collection>
          </ejs-bulletchart>
        </div>
      </section>

      <!-- 4. Vertical Orientation -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Vertical Orientation</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">orientation="Vertical"</code>
        </p>
        <div class="h-64">
          <ejs-bulletchart
            id="vertical-bullet"
            :data-source="expenseData"
            value-field="value"
            target-field="target"
            :minimum="0"
            :maximum="600"
            :interval="100"
            orientation="Vertical"
            title="Expense"
            height="250px"
            :animation="animation"
          >
            <e-bullet-range-collection>
              <e-bullet-range end="200" color="#D1FAE5" />
              <e-bullet-range end="400" color="#FEF3C7" />
              <e-bullet-range end="600" color="#FEE2E2" />
            </e-bullet-range-collection>
          </ejs-bulletchart>
        </div>
      </section>

      <!-- 5. RTL Mode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. RTL Mode</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">enableRtl</code>
        </p>
        <div class="max-w-lg">
          <ejs-bulletchart
            id="rtl-bullet"
            :data-source="revenueData"
            value-field="value"
            target-field="target"
            :minimum="0"
            :maximum="300"
            :interval="50"
            title="Revenue (RTL)"
            :enable-rtl="true"
            :animation="animation"
          >
            <e-bullet-range-collection>
              <e-bullet-range end="100" color="#ebebeb" />
              <e-bullet-range end="200" color="#d8d8d8" />
              <e-bullet-range end="300" color="#7f7f7f" />
            </e-bullet-range-collection>
          </ejs-bulletchart>
        </div>
      </section>

      <!-- 6. With Tooltip -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. With Tooltip</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">tooltip.enable</code>
        </p>
        <div class="max-w-lg">
          <ejs-bulletchart
            id="tooltip-bullet"
            :data-source="revenueData"
            value-field="value"
            target-field="target"
            :minimum="0"
            :maximum="300"
            :interval="50"
            title="Revenue"
            :tooltip="{ enable: true }"
            :animation="animation"
          >
            <e-bullet-range-collection>
              <e-bullet-range end="100" color="#DBEAFE" />
              <e-bullet-range end="200" color="#BFDBFE" />
              <e-bullet-range end="300" color="#93C5FD" />
            </e-bullet-range-collection>
          </ejs-bulletchart>
        </div>
        <p class="text-sm text-gray-500 mt-2">Hover over the chart to see tooltip</p>
      </section>

      <!-- 7. Range Configurations -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. Range Configurations</h2>
        <p class="text-gray-600 mb-6">Ranges represent performance zones (Poor, Satisfactory, Good)</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-medium text-gray-700 mb-2">Poor Range</h3>
            <div class="h-4 bg-red-200 rounded" />
            <p class="text-xs text-gray-500 mt-1">0 - 100</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-medium text-gray-700 mb-2">Satisfactory Range</h3>
            <div class="h-4 bg-yellow-200 rounded" />
            <p class="text-xs text-gray-500 mt-1">100 - 200</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-medium text-gray-700 mb-2">Good Range</h3>
            <div class="h-4 bg-green-200 rounded" />
            <p class="text-xs text-gray-500 mt-1">200 - 300</p>
          </div>
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
                <td class="px-4 py-3 text-sm text-gray-600">Data source for the chart</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">valueField</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Field name for actual value</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">targetField</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Field name for target value</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">minimum</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Minimum value of the scale</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">maximum</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Maximum value of the scale</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">interval</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Interval for the scale</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">orientation</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Horizontal or Vertical</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">valueFill</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Color for actual value bar</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">targetColor</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Color for target marker</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">ranges</td>
                <td class="px-4 py-3 text-sm text-gray-600">BulletRange[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Collection of qualitative ranges</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
:deep(.e-bullet-chart) {
  font-family: inherit;
}
</style>
