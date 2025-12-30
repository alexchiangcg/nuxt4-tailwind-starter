<script setup lang="ts">
import {
  Chart3DComponent as EjsChart3d,
  Chart3DSeriesCollectionDirective as EChart3dSeriesCollection,
  Chart3DSeriesDirective as EChart3dSeries,
  ColumnSeries3D,
  BarSeries3D,
  StackingColumnSeries3D,
  Category3D,
  Legend3D,
  Tooltip3D,
  DataLabel3D,
  Highlight3D
} from '@syncfusion/ej2-vue-charts'
import { provide } from 'vue'

definePageMeta({
  layout: 'playground'
})

// 提供 3D Chart 功能模組
provide('chart3d', [ColumnSeries3D, BarSeries3D, StackingColumnSeries3D, Category3D, Legend3D, Tooltip3D, DataLabel3D, Highlight3D])

// 基礎柱狀圖資料
const columnData = [
  { month: 'Jan', sales: 35 },
  { month: 'Feb', sales: 28 },
  { month: 'Mar', sales: 34 },
  { month: 'Apr', sales: 32 },
  { month: 'May', sales: 40 },
  { month: 'Jun', sales: 32 },
  { month: 'Jul', sales: 35 },
  { month: 'Aug', sales: 55 },
  { month: 'Sep', sales: 38 },
  { month: 'Oct', sales: 30 },
  { month: 'Nov', sales: 25 },
  { month: 'Dec', sales: 32 }
]

// 多系列資料
const multiSeriesData1 = [
  { x: '2020', y: 28 },
  { x: '2021', y: 35 },
  { x: '2022', y: 38 },
  { x: '2023', y: 42 },
  { x: '2024', y: 48 }
]

const multiSeriesData2 = [
  { x: '2020', y: 22 },
  { x: '2021', y: 28 },
  { x: '2022', y: 32 },
  { x: '2023', y: 35 },
  { x: '2024', y: 40 }
]

const multiSeriesData3 = [
  { x: '2020', y: 18 },
  { x: '2021', y: 22 },
  { x: '2022', y: 25 },
  { x: '2023', y: 28 },
  { x: '2024', y: 32 }
]

// 長條圖資料（水平）
const barData = [
  { country: 'USA', gold: 46 },
  { country: 'China', gold: 38 },
  { country: 'UK', gold: 27 },
  { country: 'Russia', gold: 19 },
  { country: 'Germany', gold: 17 }
]

// 軸設定
const primaryXAxis = { valueType: 'Category', title: 'Month' }
const primaryYAxis = { title: 'Sales (Million)', minimum: 0, maximum: 60 }

const barXAxis = { valueType: 'Category', title: 'Country' }
const barYAxis = { title: 'Gold Medals', minimum: 0 }

const yearXAxis = { valueType: 'Category', title: 'Year' }
const yearYAxis = { title: 'Revenue (Million)', minimum: 0, maximum: 60 }

const tooltip = { enable: true }
const legendSettings = { visible: true, position: 'Bottom' }
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">3D Chart Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-charts</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 3D Column Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. 3D Column Chart
        </h2>
        <p class="text-gray-600 mb-6">Basic 3D column chart for comparing categories</p>
        <div class="h-96">
          <ejs-chart3d
            id="chart3d-column"
            :primary-x-axis="primaryXAxis"
            :primary-y-axis="primaryYAxis"
            :tooltip="tooltip"
            :legend-settings="legendSettings"
            title="Monthly Sales Report"
            :enable-rotation="true"
            :wall-color="'transparent'"
          >
            <e-chart3d-series-collection>
              <e-chart3d-series
                :data-source="columnData"
                type="Column"
                x-name="month"
                y-name="sales"
                name="Sales"
                column-width="0.7"
              />
            </e-chart3d-series-collection>
          </ejs-chart3d>
        </div>
      </section>

      <!-- 2. 3D Bar Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. 3D Bar Chart
        </h2>
        <p class="text-gray-600 mb-6">Horizontal 3D bar chart</p>
        <div class="h-96">
          <ejs-chart3d
            id="chart3d-bar"
            :primary-x-axis="barXAxis"
            :primary-y-axis="barYAxis"
            :tooltip="tooltip"
            title="Olympic Gold Medals"
            :enable-rotation="true"
          >
            <e-chart3d-series-collection>
              <e-chart3d-series
                :data-source="barData"
                type="Bar"
                x-name="country"
                y-name="gold"
                name="Gold Medals"
              />
            </e-chart3d-series-collection>
          </ejs-chart3d>
        </div>
      </section>

      <!-- 3. Multi-Series 3D Column Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Multi-Series 3D Column Chart
        </h2>
        <p class="text-gray-600 mb-6">Multiple data series for comparison</p>
        <div class="h-96">
          <ejs-chart3d
            id="chart3d-multi"
            :primary-x-axis="yearXAxis"
            :primary-y-axis="yearYAxis"
            :tooltip="tooltip"
            :legend-settings="legendSettings"
            title="Revenue by Product Line"
            :enable-rotation="true"
          >
            <e-chart3d-series-collection>
              <e-chart3d-series
                :data-source="multiSeriesData1"
                type="Column"
                x-name="x"
                y-name="y"
                name="Product A"
              />
              <e-chart3d-series
                :data-source="multiSeriesData2"
                type="Column"
                x-name="x"
                y-name="y"
                name="Product B"
              />
              <e-chart3d-series
                :data-source="multiSeriesData3"
                type="Column"
                x-name="x"
                y-name="y"
                name="Product C"
              />
            </e-chart3d-series-collection>
          </ejs-chart3d>
        </div>
      </section>

      <!-- 4. 3D Stacked Column Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. 3D Stacked Column Chart
        </h2>
        <p class="text-gray-600 mb-6">Stacked bars showing cumulative totals</p>
        <div class="h-96">
          <ejs-chart3d
            id="chart3d-stacked"
            :primary-x-axis="yearXAxis"
            :primary-y-axis="{ title: 'Revenue (Million)' }"
            :tooltip="tooltip"
            :legend-settings="legendSettings"
            title="Stacked Revenue by Product"
            :enable-rotation="true"
          >
            <e-chart3d-series-collection>
              <e-chart3d-series
                :data-source="multiSeriesData1"
                type="StackingColumn"
                x-name="x"
                y-name="y"
                name="Product A"
              />
              <e-chart3d-series
                :data-source="multiSeriesData2"
                type="StackingColumn"
                x-name="x"
                y-name="y"
                name="Product B"
              />
              <e-chart3d-series
                :data-source="multiSeriesData3"
                type="StackingColumn"
                x-name="x"
                y-name="y"
                name="Product C"
              />
            </e-chart3d-series-collection>
          </ejs-chart3d>
        </div>
      </section>

      <!-- 5. Custom Rotation Angles -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Custom Rotation Angles
        </h2>
        <p class="text-gray-600 mb-6">3D chart with custom tilt and rotation</p>
        <div class="h-96">
          <ejs-chart3d
            id="chart3d-rotation"
            :primary-x-axis="primaryXAxis"
            :primary-y-axis="primaryYAxis"
            :tooltip="tooltip"
            :legend-settings="legendSettings"
            title="Custom 3D View Angle"
            :enable-rotation="true"
            :tilt="10"
            :rotation="20"
            :depth="100"
          >
            <e-chart3d-series-collection>
              <e-chart3d-series
                :data-source="columnData"
                type="Column"
                x-name="month"
                y-name="sales"
                name="Sales"
              />
            </e-chart3d-series-collection>
          </ejs-chart3d>
        </div>
      </section>

      <!-- 6. With Data Labels -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. With Data Labels
        </h2>
        <p class="text-gray-600 mb-6">3D chart showing data labels on columns</p>
        <div class="h-96">
          <ejs-chart3d
            id="chart3d-labels"
            :primary-x-axis="primaryXAxis"
            :primary-y-axis="primaryYAxis"
            :tooltip="tooltip"
            title="Sales with Data Labels"
            :enable-rotation="true"
          >
            <e-chart3d-series-collection>
              <e-chart3d-series
                :data-source="columnData"
                type="Column"
                x-name="month"
                y-name="sales"
                name="Sales"
                :data-label="{ visible: true, position: 'Top' }"
              />
            </e-chart3d-series-collection>
          </ejs-chart3d>
        </div>
      </section>

      <!-- 7. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          7. API Reference
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
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Series type (Column, Bar, StackingColumn, StackingBar)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableRotation</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable mouse drag rotation</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">tilt</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Tilt angle (0-90)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">rotation</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Horizontal rotation angle (0-360)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">depth</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Depth of the 3D chart</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">wallColor</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Background wall color</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 8. Available 3D Chart Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          8. Available 3D Chart Types
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Column</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Bar</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">StackingColumn</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">StackingBar</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">StackingColumn100</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">StackingBar100</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
</style>
