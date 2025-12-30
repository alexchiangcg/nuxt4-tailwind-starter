<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">HeatMap Chart</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion HeatMap 提供熱力圖視覺化功能，用於顯示二維資料的密度或強度分布，常用於資料分析和趨勢識別。
      </p>
    </div>

    <!-- Basic HeatMap -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">基本熱力圖</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示每週各時段的活動熱度分布。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-4">
        <ejs-heatmap
          id="basic-heatmap"
          :dataSource="basicData"
          :xAxis="xAxis"
          :yAxis="yAxis"
          :paletteSettings="paletteSettings"
          :cellSettings="cellSettings"
          :legendSettings="legendSettings"
          :titleSettings="titleSettings"
        />
      </div>
    </section>

    <!-- Sales HeatMap -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">銷售數據熱力圖</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示各地區不同產品類別的銷售業績。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-4">
        <ejs-heatmap
          id="sales-heatmap"
          :dataSource="salesData"
          :xAxis="salesXAxis"
          :yAxis="salesYAxis"
          :paletteSettings="salesPaletteSettings"
          :cellSettings="salesCellSettings"
          :legendSettings="legendSettings"
          :titleSettings="salesTitleSettings"
        />
      </div>
    </section>

    <!-- Temperature HeatMap -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">溫度分布熱力圖</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示各月份不同城市的平均溫度。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-4">
        <ejs-heatmap
          id="temp-heatmap"
          :dataSource="tempData"
          :xAxis="tempXAxis"
          :yAxis="tempYAxis"
          :paletteSettings="tempPaletteSettings"
          :cellSettings="tempCellSettings"
          :legendSettings="legendSettings"
          :titleSettings="tempTitleSettings"
        />
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
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">dataSource</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Object[][]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">熱力圖資料來源</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">xAxis</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">AxisModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">X 軸設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">yAxis</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">AxisModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Y 軸設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">paletteSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">PaletteSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">調色盤設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">cellSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">CellSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">儲存格設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">legendSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">LegendSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">圖例設定</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">常見應用場景</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📊</div>
          <span class="text-sm font-medium">銷售分析</span>
        </div>
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🌡️</div>
          <span class="text-sm font-medium">溫度分布</span>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">👥</div>
          <span class="text-sm font-medium">用戶活動</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📈</div>
          <span class="text-sm font-medium">風險評估</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { HeatMapComponent as EjsHeatmap, Legend, Tooltip } from '@syncfusion/ej2-vue-heatmap'

import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-vue-heatmap/styles/material.css'

provide('heatmap', [Legend, Tooltip])

definePageMeta({ layout: 'playground' })

// Basic HeatMap - Weekly Activity
const basicData = [
  [10, 20, 30, 40, 50, 60, 70],
  [20, 30, 40, 50, 60, 70, 80],
  [30, 40, 50, 60, 70, 80, 90],
  [40, 50, 60, 70, 80, 90, 100],
  [50, 60, 70, 80, 90, 100, 95],
  [60, 70, 80, 90, 100, 95, 85]
]

const xAxis = {
  labels: ['週一', '週二', '週三', '週四', '週五', '週六', '週日']
}

const yAxis = {
  labels: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
}

const paletteSettings = {
  palette: [
    { color: '#E8F5E9', value: 0 },
    { color: '#C8E6C9', value: 25 },
    { color: '#81C784', value: 50 },
    { color: '#4CAF50', value: 75 },
    { color: '#2E7D32', value: 100 }
  ]
}

const cellSettings = {
  showLabel: true,
  border: { width: 1, color: '#ffffff' }
}

const legendSettings = {
  visible: true,
  position: 'Right'
}

const titleSettings = {
  text: '每週活動熱度分布',
  textStyle: { size: '16px', fontWeight: 'Bold' }
}

// Sales HeatMap
const salesData = [
  [125, 89, 156, 112, 98],
  [145, 112, 178, 134, 125],
  [98, 76, 134, 89, 78],
  [167, 145, 198, 156, 145],
  [112, 98, 145, 112, 98]
]

const salesXAxis = {
  labels: ['電子產品', '服飾', '食品', '家居', '運動']
}

const salesYAxis = {
  labels: ['北區', '東區', '南區', '西區', '中區']
}

const salesPaletteSettings = {
  palette: [
    { color: '#FFEBEE', value: 70 },
    { color: '#FFCDD2', value: 100 },
    { color: '#EF9A9A', value: 130 },
    { color: '#E57373', value: 160 },
    { color: '#EF5350', value: 200 }
  ]
}

const salesCellSettings = {
  showLabel: true,
  border: { width: 1, color: '#ffffff' },
  format: '{value}K'
}

const salesTitleSettings = {
  text: '各地區產品銷售額 (千元)',
  textStyle: { size: '16px', fontWeight: 'Bold' }
}

// Temperature HeatMap
const tempData = [
  [5, 8, 14, 22, 28, 32, 34, 33, 28, 20, 12, 6],
  [8, 10, 16, 24, 30, 35, 37, 36, 30, 22, 14, 9],
  [12, 14, 18, 25, 30, 33, 35, 34, 29, 23, 17, 13],
  [18, 20, 24, 28, 32, 35, 36, 35, 31, 26, 21, 18]
]

const tempXAxis = {
  labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
}

const tempYAxis = {
  labels: ['台北', '高雄', '台中', '花蓮']
}

const tempPaletteSettings = {
  palette: [
    { color: '#2196F3', value: 5 },
    { color: '#64B5F6', value: 15 },
    { color: '#FFEB3B', value: 25 },
    { color: '#FF9800', value: 32 },
    { color: '#F44336', value: 40 }
  ]
}

const tempCellSettings = {
  showLabel: true,
  border: { width: 1, color: '#ffffff' },
  format: '{value}°C'
}

const tempTitleSettings = {
  text: '各城市月均溫度',
  textStyle: { size: '16px', fontWeight: 'Bold' }
}
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
