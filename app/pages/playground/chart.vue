<script setup lang="ts">
import {
  ChartComponent as EjsChart,
  SeriesCollectionDirective as ESeriesCollection,
  SeriesDirective as ESeries,
  LineSeries,
  ColumnSeries,
  AreaSeries,
  SplineSeries,
  PieSeries,
  BarSeries,
  Legend,
  Tooltip,
  DataLabel,
  Category,
  DateTime,
  Zoom,
  Crosshair,
  AccumulationChartComponent as EjsAccumulationchart,
  AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection,
  AccumulationSeriesDirective as EAccumulationSeries,
  PieSeries as AccPieSeries,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel
} from '@syncfusion/ej2-vue-charts'
import { provide } from 'vue'

definePageMeta({
  layout: 'playground'
})

// 提供 Chart 功能模組
provide('chart', [LineSeries, ColumnSeries, AreaSeries, SplineSeries, BarSeries, Legend, Tooltip, DataLabel, Category, DateTime, Zoom, Crosshair])
provide('accumulationchart', [AccPieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel])

// 線圖資料
const lineData = [
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
  { x: '2019', y: 28 },
  { x: '2020', y: 35 },
  { x: '2021', y: 38 },
  { x: '2022', y: 42 },
  { x: '2023', y: 48 }
]

const multiSeriesData2 = [
  { x: '2019', y: 22 },
  { x: '2020', y: 28 },
  { x: '2021', y: 32 },
  { x: '2022', y: 35 },
  { x: '2023', y: 40 }
]

const multiSeriesData3 = [
  { x: '2019', y: 18 },
  { x: '2020', y: 22 },
  { x: '2021', y: 25 },
  { x: '2022', y: 28 },
  { x: '2023', y: 32 }
]

// 圓餅圖資料
const pieData = [
  { x: 'Chrome', y: 65.3, text: '65.3%' },
  { x: 'Safari', y: 18.2, text: '18.2%' },
  { x: 'Firefox', y: 4.8, text: '4.8%' },
  { x: 'Edge', y: 4.2, text: '4.2%' },
  { x: 'Others', y: 7.5, text: '7.5%' }
]

// 長條圖資料
const barData = [
  { country: 'USA', gold: 46 },
  { country: 'China', gold: 38 },
  { country: 'UK', gold: 27 },
  { country: 'Russia', gold: 19 },
  { country: 'Germany', gold: 17 }
]

// 區域圖資料
const areaData = [
  { x: new Date(2020, 0, 1), y: 4 },
  { x: new Date(2020, 3, 1), y: 3.5 },
  { x: new Date(2020, 6, 1), y: 4.2 },
  { x: new Date(2020, 9, 1), y: 3.8 },
  { x: new Date(2021, 0, 1), y: 4.5 },
  { x: new Date(2021, 3, 1), y: 4.8 },
  { x: new Date(2021, 6, 1), y: 5.2 },
  { x: new Date(2021, 9, 1), y: 5.5 },
  { x: new Date(2022, 0, 1), y: 5.8 },
  { x: new Date(2022, 3, 1), y: 6.2 }
]

// 主軸設定
const primaryXAxis = { valueType: 'Category', title: 'Month' }
const primaryYAxis = { title: 'Sales (Million)', minimum: 0, maximum: 60 }

const barPrimaryXAxis = { valueType: 'Category', title: 'Country' }
const barPrimaryYAxis = { title: 'Gold Medals', minimum: 0 }

const dateTimeXAxis = { valueType: 'DateTime', labelFormat: 'MMM yyyy', title: 'Date' }
const dateTimeYAxis = { title: 'Revenue (Billion)', minimum: 0 }

const tooltip = { enable: true }
const legendSettings = { visible: true, position: 'Bottom' }
const marker = { visible: true, width: 10, height: 10 }
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Chart Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-charts</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Line Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Line Chart
        </h2>
        <p class="text-gray-600 mb-6">Basic line chart for showing trends over time</p>
        <div class="h-96">
          <ejs-chart
            id="lineChart"
            :primary-x-axis="primaryXAxis"
            :primary-y-axis="primaryYAxis"
            :tooltip="tooltip"
            :legend-settings="legendSettings"
            title="Monthly Sales Report"
          >
            <e-series-collection>
              <e-series
                :data-source="lineData"
                type="Line"
                x-name="month"
                y-name="sales"
                name="Sales"
                :marker="marker"
              />
            </e-series-collection>
          </ejs-chart>
        </div>
      </section>

      <!-- 2. Spline Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Spline Chart
        </h2>
        <p class="text-gray-600 mb-6">Smooth curved line chart</p>
        <div class="h-96">
          <ejs-chart
            id="splineChart"
            :primary-x-axis="primaryXAxis"
            :primary-y-axis="primaryYAxis"
            :tooltip="tooltip"
            :legend-settings="legendSettings"
            title="Monthly Sales Trend"
          >
            <e-series-collection>
              <e-series
                :data-source="lineData"
                type="Spline"
                x-name="month"
                y-name="sales"
                name="Sales"
                :marker="marker"
              />
            </e-series-collection>
          </ejs-chart>
        </div>
      </section>

      <!-- 3. Column Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Column Chart
        </h2>
        <p class="text-gray-600 mb-6">Vertical bar chart for comparing categories</p>
        <div class="h-96">
          <ejs-chart
            id="columnChart"
            :primary-x-axis="primaryXAxis"
            :primary-y-axis="primaryYAxis"
            :tooltip="tooltip"
            :legend-settings="legendSettings"
            title="Monthly Sales Comparison"
          >
            <e-series-collection>
              <e-series
                :data-source="lineData"
                type="Column"
                x-name="month"
                y-name="sales"
                name="Sales"
              />
            </e-series-collection>
          </ejs-chart>
        </div>
      </section>

      <!-- 4. Multi-Series Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Multi-Series Chart
        </h2>
        <p class="text-gray-600 mb-6">Multiple data series for comparison</p>
        <div class="h-96">
          <ejs-chart
            id="multiSeriesChart"
            :primary-x-axis="{ valueType: 'Category', title: 'Year' }"
            :primary-y-axis="{ title: 'Revenue (Million)', minimum: 0, maximum: 60 }"
            :tooltip="tooltip"
            :legend-settings="legendSettings"
            title="Revenue by Product Line"
          >
            <e-series-collection>
              <e-series
                :data-source="multiSeriesData1"
                type="Column"
                x-name="x"
                y-name="y"
                name="Product A"
              />
              <e-series
                :data-source="multiSeriesData2"
                type="Column"
                x-name="x"
                y-name="y"
                name="Product B"
              />
              <e-series
                :data-source="multiSeriesData3"
                type="Column"
                x-name="x"
                y-name="y"
                name="Product C"
              />
            </e-series-collection>
          </ejs-chart>
        </div>
      </section>

      <!-- 5. Bar Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Bar Chart
        </h2>
        <p class="text-gray-600 mb-6">Horizontal bar chart</p>
        <div class="h-96">
          <ejs-chart
            id="barChart"
            :primary-x-axis="barPrimaryXAxis"
            :primary-y-axis="barPrimaryYAxis"
            :tooltip="tooltip"
            title="Olympic Gold Medals"
          >
            <e-series-collection>
              <e-series
                :data-source="barData"
                type="Bar"
                x-name="country"
                y-name="gold"
                name="Gold Medals"
              />
            </e-series-collection>
          </ejs-chart>
        </div>
      </section>

      <!-- 6. Area Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Area Chart
        </h2>
        <p class="text-gray-600 mb-6">Filled area chart with DateTime axis</p>
        <div class="h-96">
          <ejs-chart
            id="areaChart"
            :primary-x-axis="dateTimeXAxis"
            :primary-y-axis="dateTimeYAxis"
            :tooltip="tooltip"
            title="Quarterly Revenue Growth"
          >
            <e-series-collection>
              <e-series
                :data-source="areaData"
                type="Area"
                x-name="x"
                y-name="y"
                name="Revenue"
                opacity="0.6"
              />
            </e-series-collection>
          </ejs-chart>
        </div>
      </section>

      <!-- 7. Pie Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Pie Chart
        </h2>
        <p class="text-gray-600 mb-6">Circular chart for showing proportions</p>
        <div class="h-96">
          <ejs-accumulationchart
            id="pieChart"
            :tooltip="{ enable: true, format: '${point.x}: ${point.y}%' }"
            :legend-settings="legendSettings"
            title="Browser Market Share"
          >
            <e-accumulation-series-collection>
              <e-accumulation-series
                :data-source="pieData"
                x-name="x"
                y-name="y"
                :data-label="{ visible: true, name: 'text', position: 'Outside' }"
              />
            </e-accumulation-series-collection>
          </ejs-accumulationchart>
        </div>
      </section>

      <!-- 8. Doughnut Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. Doughnut Chart
        </h2>
        <p class="text-gray-600 mb-6">Pie chart with center hole</p>
        <div class="h-96">
          <ejs-accumulationchart
            id="doughnutChart"
            :tooltip="{ enable: true }"
            :legend-settings="legendSettings"
            title="Browser Market Share"
          >
            <e-accumulation-series-collection>
              <e-accumulation-series
                :data-source="pieData"
                x-name="x"
                y-name="y"
                inner-radius="50%"
                :data-label="{ visible: true, name: 'text', position: 'Inside' }"
              />
            </e-accumulation-series-collection>
          </ejs-accumulationchart>
        </div>
      </section>

      <!-- 9. Stacked Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          9. Stacked Column Chart
        </h2>
        <p class="text-gray-600 mb-6">Stacked bars showing cumulative totals</p>
        <div class="h-96">
          <ejs-chart
            id="stackedChart"
            :primary-x-axis="{ valueType: 'Category', title: 'Year' }"
            :primary-y-axis="{ title: 'Revenue (Million)' }"
            :tooltip="tooltip"
            :legend-settings="legendSettings"
            title="Stacked Revenue by Product"
          >
            <e-series-collection>
              <e-series
                :data-source="multiSeriesData1"
                type="StackingColumn"
                x-name="x"
                y-name="y"
                name="Product A"
              />
              <e-series
                :data-source="multiSeriesData2"
                type="StackingColumn"
                x-name="x"
                y-name="y"
                name="Product B"
              />
              <e-series
                :data-source="multiSeriesData3"
                type="StackingColumn"
                x-name="x"
                y-name="y"
                name="Product C"
              />
            </e-series-collection>
          </ejs-chart>
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
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Chart type (Line, Spline, Column, Bar, Area, Pie, etc.)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data source for the chart series</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">primaryXAxis</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">X-axis configuration (valueType, title, format)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">primaryYAxis</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Y-axis configuration (title, minimum, maximum)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">tooltip</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Tooltip settings (enable, format)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">legendSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Legend display settings (visible, position)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">marker</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data point marker settings</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">innerRadius</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Inner radius for doughnut chart (e.g., '50%')</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 11. Chart Types Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          11. Available Chart Types
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Line</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Spline</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Column</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Bar</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Area</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">SplineArea</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">StackingColumn</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">StackingArea</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Scatter</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Bubble</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Polar</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Radar</span>
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
