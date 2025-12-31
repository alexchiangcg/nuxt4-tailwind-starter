<script setup lang="ts">
import {
  SparklineComponent as EjsSparkline,
  SparklineTooltip
} from '@syncfusion/ej2-vue-charts'
import { provide } from 'vue'

definePageMeta({
  layout: 'playground'
})

// 提供 Sparkline 功能模組
provide('sparkline', [SparklineTooltip])

// 線狀 Sparkline 資料
const lineData = [
  { x: 0, xval: 'Jan', yval: 35 },
  { x: 1, xval: 'Feb', yval: 28 },
  { x: 2, xval: 'Mar', yval: 34 },
  { x: 3, xval: 'Apr', yval: 32 },
  { x: 4, xval: 'May', yval: 40 },
  { x: 5, xval: 'Jun', yval: 32 },
  { x: 6, xval: 'Jul', yval: 35 },
  { x: 7, xval: 'Aug', yval: 55 },
  { x: 8, xval: 'Sep', yval: 38 },
  { x: 9, xval: 'Oct', yval: 30 },
  { x: 10, xval: 'Nov', yval: 25 },
  { x: 11, xval: 'Dec', yval: 32 }
]

// 輸贏資料 (正負值)
const winlossData = [
  { x: 0, xval: 'Game 1', yval: 12 },
  { x: 1, xval: 'Game 2', yval: -5 },
  { x: 2, xval: 'Game 3', yval: 8 },
  { x: 3, xval: 'Game 4', yval: -3 },
  { x: 4, xval: 'Game 5', yval: 15 },
  { x: 5, xval: 'Game 6', yval: -8 },
  { x: 6, xval: 'Game 7', yval: 10 },
  { x: 7, xval: 'Game 8', yval: 6 },
  { x: 8, xval: 'Game 9', yval: -2 },
  { x: 9, xval: 'Game 10', yval: 7 }
]

// 圓餅圖資料
const pieData = [
  { x: 0, xval: 'Chrome', yval: 65 },
  { x: 1, xval: 'Safari', yval: 18 },
  { x: 2, xval: 'Firefox', yval: 5 },
  { x: 3, xval: 'Edge', yval: 4 },
  { x: 4, xval: 'Others', yval: 8 }
]

// 股票資料
const stockData = [
  { x: 0, xval: 'Mon', yval: 100 },
  { x: 1, xval: 'Tue', yval: 115 },
  { x: 2, xval: 'Wed', yval: 108 },
  { x: 3, xval: 'Thu', yval: 125 },
  { x: 4, xval: 'Fri', yval: 118 }
]

// 溫度資料
const tempData = [
  { x: 0, xval: '6am', yval: 18 },
  { x: 1, xval: '9am', yval: 22 },
  { x: 2, xval: '12pm', yval: 28 },
  { x: 3, xval: '3pm', yval: 32 },
  { x: 4, xval: '6pm', yval: 26 },
  { x: 5, xval: '9pm', yval: 20 }
]

// 工具提示設定
const tooltipSettings = {
  visible: true,
  format: '${xval}: ${yval}'
}

// 標記設定
const markerSettings = {
  visible: ['All'],
  size: 4
}

// 範圍帶設定
const rangeBandSettings = [
  { startRange: 25, endRange: 40, color: '#c4c4c4', opacity: 0.2 }
]

// 軸設定
const axisSettings = {
  minX: 0,
  maxX: 11,
  minY: 0,
  maxY: 60
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Sparkline Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-charts</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Line Sparkline -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Line Sparkline
        </h2>
        <p class="text-gray-600 mb-6">Basic line sparkline for showing trends</p>
        <div class="flex items-center justify-center">
          <ejs-sparkline
            id="sparkline-line"
            height="100px"
            width="400px"
            :data-source="lineData"
            x-name="xval"
            y-name="yval"
            type="Line"
            :tooltip-settings="tooltipSettings"
            :line-width="2"
            fill="#3B82F6"
          />
        </div>
      </section>

      <!-- 2. Area Sparkline -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Area Sparkline
        </h2>
        <p class="text-gray-600 mb-6">Filled area sparkline</p>
        <div class="flex items-center justify-center">
          <ejs-sparkline
            id="sparkline-area"
            height="100px"
            width="400px"
            :data-source="lineData"
            x-name="xval"
            y-name="yval"
            type="Area"
            :tooltip-settings="tooltipSettings"
            fill="#10B981"
            opacity="0.5"
            :border="{ color: '#10B981', width: 2 }"
          />
        </div>
      </section>

      <!-- 3. Column Sparkline -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Column Sparkline
        </h2>
        <p class="text-gray-600 mb-6">Vertical bar sparkline for comparing values</p>
        <div class="flex items-center justify-center">
          <ejs-sparkline
            id="sparkline-column"
            height="120px"
            width="400px"
            :data-source="lineData"
            x-name="xval"
            y-name="yval"
            type="Column"
            :tooltip-settings="tooltipSettings"
            fill="#8B5CF6"
            :negative-point-color="'#EF4444'"
          />
        </div>
      </section>

      <!-- 4. WinLoss Sparkline -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. WinLoss Sparkline
        </h2>
        <p class="text-gray-600 mb-6">Win/Loss chart showing positive and negative values</p>
        <div class="flex items-center justify-center">
          <ejs-sparkline
            id="sparkline-winloss"
            height="100px"
            width="400px"
            :data-source="winlossData"
            x-name="xval"
            y-name="yval"
            type="WinLoss"
            :tooltip-settings="tooltipSettings"
            fill="#10B981"
            :negative-point-color="'#EF4444'"
            :tie-point-color="'#6B7280'"
          />
        </div>
      </section>

      <!-- 5. Pie Sparkline -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Pie Sparkline
        </h2>
        <p class="text-gray-600 mb-6">Pie chart sparkline for showing proportions</p>
        <div class="flex items-center justify-center">
          <ejs-sparkline
            id="sparkline-pie"
            height="150px"
            width="150px"
            :data-source="pieData"
            x-name="xval"
            y-name="yval"
            type="Pie"
            :tooltip-settings="tooltipSettings"
            :palette="['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#6B7280']"
          />
        </div>
      </section>

      <!-- 6. Line with Markers -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Line with Markers
        </h2>
        <p class="text-gray-600 mb-6">Line sparkline showing all data point markers</p>
        <div class="flex items-center justify-center">
          <ejs-sparkline
            id="sparkline-markers"
            height="100px"
            width="400px"
            :data-source="lineData"
            x-name="xval"
            y-name="yval"
            type="Line"
            :tooltip-settings="tooltipSettings"
            :line-width="2"
            fill="#3B82F6"
            :marker-settings="markerSettings"
          />
        </div>
      </section>

      <!-- 7. With Special Points -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. With Special Points (High/Low/Start/End)
        </h2>
        <p class="text-gray-600 mb-6">Line sparkline highlighting special data points</p>
        <div class="flex items-center justify-center">
          <ejs-sparkline
            id="sparkline-special"
            height="100px"
            width="400px"
            :data-source="lineData"
            x-name="xval"
            y-name="yval"
            type="Line"
            :tooltip-settings="tooltipSettings"
            :line-width="2"
            fill="#6B7280"
            :high-point-color="'#10B981'"
            :low-point-color="'#EF4444'"
            :start-point-color="'#3B82F6'"
            :end-point-color="'#8B5CF6'"
            :marker-settings="{ visible: ['High', 'Low', 'Start', 'End'], size: 6 }"
          />
        </div>
        <div class="mt-4 flex justify-center gap-6 text-sm">
          <span class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-green-500"></span> High
          </span>
          <span class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-red-500"></span> Low
          </span>
          <span class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-blue-500"></span> Start
          </span>
          <span class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-purple-500"></span> End
          </span>
        </div>
      </section>

      <!-- 8. With Range Band -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. With Range Band
        </h2>
        <p class="text-gray-600 mb-6">Line sparkline with background range band</p>
        <div class="flex items-center justify-center">
          <ejs-sparkline
            id="sparkline-range"
            height="100px"
            width="400px"
            :data-source="lineData"
            x-name="xval"
            y-name="yval"
            type="Line"
            :tooltip-settings="tooltipSettings"
            :line-width="2"
            fill="#3B82F6"
            :axis-settings="axisSettings"
            :range-band-settings="rangeBandSettings"
          />
        </div>
      </section>

      <!-- 9. Dashboard Example -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          9. Dashboard Example
        </h2>
        <p class="text-gray-600 mb-6">Multiple sparklines in a dashboard layout</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="p-4 bg-gray-50 rounded-lg">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-600">Monthly Sales</span>
              <span class="text-lg font-semibold text-green-600">+12%</span>
            </div>
            <ejs-sparkline
              id="dash-sales"
              height="50px"
              width="100%"
              :data-source="lineData"
              x-name="xval"
              y-name="yval"
              type="Area"
              fill="#10B981"
              opacity="0.3"
              :border="{ color: '#10B981', width: 2 }"
            />
          </div>
          <!-- Card 2 -->
          <div class="p-4 bg-gray-50 rounded-lg">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-600">Stock Price</span>
              <span class="text-lg font-semibold text-blue-600">$125</span>
            </div>
            <ejs-sparkline
              id="dash-stock"
              height="50px"
              width="100%"
              :data-source="stockData"
              x-name="xval"
              y-name="yval"
              type="Line"
              fill="#3B82F6"
              :line-width="2"
            />
          </div>
          <!-- Card 3 -->
          <div class="p-4 bg-gray-50 rounded-lg">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-gray-600">Temperature</span>
              <span class="text-lg font-semibold text-orange-600">32°C</span>
            </div>
            <ejs-sparkline
              id="dash-temp"
              height="50px"
              width="100%"
              :data-source="tempData"
              x-name="xval"
              y-name="yval"
              type="Column"
              fill="#F59E0B"
            />
          </div>
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
                <td class="px-4 py-3 text-sm text-gray-600">Sparkline type (Line, Area, Column, WinLoss, Pie)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data source for the sparkline</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fill</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fill color for the sparkline</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">lineWidth</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Line width for Line/Area types</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">markerSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Marker configuration (visible, size, fill)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">highPointColor</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Color for highest value point</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">lowPointColor</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Color for lowest value point</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">negativePointColor</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Color for negative values</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 11. Available Sparkline Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          11. Available Sparkline Types
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Line</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Area</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Column</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">WinLoss</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Pie</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


