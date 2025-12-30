<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Accumulation Chart</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion Accumulation Chart 提供圓餅圖、甜甜圈圖等累積圖表，用於展示各部分佔整體的比例關係。
      </p>
    </div>

    <!-- Pie Chart -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">圓餅圖 (Pie Chart)</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示各產品類別的銷售佔比。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-4">
        <ejs-accumulationchart
          id="pie-chart"
          :title="'產品銷售分布'"
          :legendSettings="legendSettings"
          :tooltip="tooltipSettings"
        >
          <e-accumulation-series-collection>
            <e-accumulation-series
              :dataSource="pieData"
              xName="category"
              yName="value"
              :dataLabel="dataLabelSettings"
            />
          </e-accumulation-series-collection>
        </ejs-accumulationchart>
      </div>
    </section>

    <!-- Doughnut Chart -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">甜甜圈圖 (Doughnut Chart)</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示各瀏覽器的市場佔有率。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-4">
        <ejs-accumulationchart
          id="doughnut-chart"
          :title="'瀏覽器市場佔有率'"
          :legendSettings="legendSettings"
          :tooltip="tooltipSettings"
        >
          <e-accumulation-series-collection>
            <e-accumulation-series
              :dataSource="browserData"
              xName="browser"
              yName="share"
              innerRadius="40%"
              :dataLabel="doughnutLabelSettings"
              :palettes="browserColors"
            />
          </e-accumulation-series-collection>
        </ejs-accumulationchart>
      </div>
    </section>

    <!-- Semi Pie Chart -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">半圓餅圖 (Semi Pie Chart)</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示各部門的預算分配。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-4">
        <ejs-accumulationchart
          id="semi-pie-chart"
          :title="'部門預算分配'"
          :legendSettings="legendSettings"
          :tooltip="tooltipSettings"
        >
          <e-accumulation-series-collection>
            <e-accumulation-series
              :dataSource="budgetData"
              xName="department"
              yName="budget"
              :startAngle="270"
              :endAngle="90"
              :dataLabel="dataLabelSettings"
            />
          </e-accumulation-series-collection>
        </ejs-accumulationchart>
      </div>
    </section>

    <!-- Exploded Pie Chart -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">分離式圓餅圖 (Exploded Pie)</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">突顯特定數據區塊的圓餅圖。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-4">
        <ejs-accumulationchart
          id="exploded-pie-chart"
          :title="'各國 GDP 佔比'"
          :legendSettings="legendSettings"
          :tooltip="tooltipSettings"
        >
          <e-accumulation-series-collection>
            <e-accumulation-series
              :dataSource="gdpData"
              xName="country"
              yName="gdp"
              :explode="true"
              :explodeIndex="0"
              explodeOffset="10%"
              :dataLabel="dataLabelSettings"
            />
          </e-accumulation-series-collection>
        </ejs-accumulationchart>
      </div>
    </section>

    <!-- API Reference -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">API 參考</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">屬性</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">類型</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">說明</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">dataSource</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Object[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">資料來源</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">innerRadius</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">內圓半徑（甜甜圈效果）</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">startAngle</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">number</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">起始角度</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">endAngle</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">number</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">結束角度</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">explode</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">啟用分離效果</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">dataLabel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">AccumulationDataLabelSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">資料標籤設定</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Chart Types -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">支援的圖表類型</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🥧</div>
          <span class="text-sm font-medium">Pie Chart</span>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🍩</div>
          <span class="text-sm font-medium">Doughnut</span>
        </div>
        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🔘</div>
          <span class="text-sm font-medium">Semi Pie</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📊</div>
          <span class="text-sm font-medium">Pyramid</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import {
  AccumulationChartComponent as EjsAccumulationchart,
  AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection,
  AccumulationSeriesDirective as EAccumulationSeries,
  PieSeries,
  AccumulationLegend,
  AccumulationTooltip,
  AccumulationDataLabel
} from '@syncfusion/ej2-vue-charts'

import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-vue-charts/styles/material.css'

provide('accumulationchart', [PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel])

definePageMeta({ layout: 'playground' })

// Pie Chart Data - Product Sales
const pieData = [
  { category: '電子產品', value: 35 },
  { category: '服飾', value: 25 },
  { category: '食品', value: 20 },
  { category: '家居', value: 12 },
  { category: '運動', value: 8 }
]

// Doughnut Chart Data - Browser Share
const browserData = [
  { browser: 'Chrome', share: 65 },
  { browser: 'Safari', share: 18 },
  { browser: 'Firefox', share: 8 },
  { browser: 'Edge', share: 5 },
  { browser: 'Others', share: 4 }
]

const browserColors = ['#4285F4', '#FF9500', '#FF6B6B', '#0078D4', '#6C757D']

// Semi Pie Data - Budget
const budgetData = [
  { department: '研發', budget: 35 },
  { department: '行銷', budget: 25 },
  { department: '營運', budget: 20 },
  { department: '人資', budget: 12 },
  { department: '行政', budget: 8 }
]

// Exploded Pie Data - GDP
const gdpData = [
  { country: '美國', gdp: 25 },
  { country: '中國', gdp: 18 },
  { country: '日本', gdp: 6 },
  { country: '德國', gdp: 5 },
  { country: '其他', gdp: 46 }
]

// Legend Settings
const legendSettings = {
  visible: true,
  position: 'Bottom'
}

// Tooltip Settings
const tooltipSettings = {
  enable: true,
  format: '${point.x}: ${point.y}%'
}

// Data Label Settings
const dataLabelSettings = {
  visible: true,
  position: 'Outside',
  name: 'category',
  connectorStyle: { type: 'Curve', length: '10%' }
}

// Doughnut Label Settings
const doughnutLabelSettings = {
  visible: true,
  position: 'Inside',
  name: 'browser',
  font: { color: 'white', fontWeight: 'bold' }
}
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
