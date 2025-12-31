<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Stock Chart</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion Stock Chart 提供專業的股票圖表功能，支援 K 線圖、OHLC 圖表、技術指標、範圍選擇器等金融市場常用功能。
      </p>
    </div>

    <!-- Candlestick Chart -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">K 線圖 (Candlestick Chart)</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示股票的開高低收價格變化。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <ejs-stockchart
          id="candlestick-chart"
          :primaryXAxis="primaryXAxis"
          :primaryYAxis="primaryYAxis"
          :title="'AAPL 股票走勢'"
          :crosshair="crosshairSettings"
          :tooltip="tooltipSettings"
          height="400"
        >
          <e-stockchart-series-collection>
            <e-stockchart-series
              :dataSource="stockData"
              type="Candle"
              xName="date"
              open="open"
              high="high"
              low="low"
              close="close"
              volume="volume"
              :bearFillColor="'#E74C3C'"
              :bullFillColor="'#27AE60'"
            />
          </e-stockchart-series-collection>
        </ejs-stockchart>
      </div>
    </section>

    <!-- OHLC Chart -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">OHLC 圖表</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">使用水平線段表示開高低收價格。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <ejs-stockchart
          id="ohlc-chart"
          :primaryXAxis="primaryXAxis"
          :primaryYAxis="primaryYAxis"
          :title="'MSFT 股票走勢'"
          :crosshair="crosshairSettings"
          :tooltip="tooltipSettings"
          height="400"
        >
          <e-stockchart-series-collection>
            <e-stockchart-series
              :dataSource="msftData"
              type="HiloOpenClose"
              xName="date"
              open="open"
              high="high"
              low="low"
              close="close"
              :bearFillColor="'#E74C3C'"
              :bullFillColor="'#27AE60'"
            />
          </e-stockchart-series-collection>
        </ejs-stockchart>
      </div>
    </section>

    <!-- Line Chart with Volume -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">收盤價線圖</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示收盤價的趨勢變化。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <ejs-stockchart
          id="line-chart"
          :primaryXAxis="primaryXAxis"
          :primaryYAxis="primaryYAxis"
          :title="'GOOGL 收盤價趨勢'"
          :crosshair="crosshairSettings"
          :tooltip="tooltipSettings"
          height="400"
        >
          <e-stockchart-series-collection>
            <e-stockchart-series
              :dataSource="googleData"
              type="Line"
              xName="date"
              yName="close"
              :marker="markerSettings"
            />
          </e-stockchart-series-collection>
        </ejs-stockchart>
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
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">type</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">圖表類型（Candle, HiloOpenClose, Line 等）</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">open/high/low/close</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">OHLC 資料欄位對應</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">volume</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">成交量欄位</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">bearFillColor</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">下跌顏色</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">bullFillColor</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">上漲顏色</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">crosshair</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">CrosshairSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">十字線設定</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Features -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">主要功能</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📈</div>
          <span class="text-sm font-medium">K 線圖</span>
        </div>
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📊</div>
          <span class="text-sm font-medium">技術指標</span>
        </div>
        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🔍</div>
          <span class="text-sm font-medium">範圍選擇</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">➕</div>
          <span class="text-sm font-medium">十字線</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import {
  StockChartComponent as EjsStockchart,
  StockChartSeriesCollectionDirective as EStockchartSeriesCollection,
  StockChartSeriesDirective as EStockchartSeries,
  DateTime,
  CandleSeries,
  HiloOpenCloseSeries,
  LineSeries,
  RangeTooltip,
  Crosshair,
  Export
} from '@syncfusion/ej2-vue-charts'


provide('stockchart', [DateTime, CandleSeries, HiloOpenCloseSeries, LineSeries, RangeTooltip, Crosshair, Export])

definePageMeta({ layout: 'playground' })

// AAPL Stock Data
const stockData = [
  { date: new Date('2024-01-02'), open: 185.50, high: 188.20, low: 184.30, close: 187.80, volume: 45000000 },
  { date: new Date('2024-01-03'), open: 187.80, high: 189.50, low: 186.20, close: 186.90, volume: 42000000 },
  { date: new Date('2024-01-04'), open: 186.90, high: 187.80, low: 183.50, close: 184.20, volume: 51000000 },
  { date: new Date('2024-01-05'), open: 184.20, high: 186.30, low: 183.80, close: 185.60, volume: 38000000 },
  { date: new Date('2024-01-08'), open: 185.60, high: 188.90, low: 185.10, close: 188.50, volume: 47000000 },
  { date: new Date('2024-01-09'), open: 188.50, high: 190.20, low: 187.30, close: 189.80, volume: 52000000 },
  { date: new Date('2024-01-10'), open: 189.80, high: 191.50, low: 188.90, close: 190.50, volume: 48000000 },
  { date: new Date('2024-01-11'), open: 190.50, high: 192.80, low: 189.60, close: 191.20, volume: 55000000 },
  { date: new Date('2024-01-12'), open: 191.20, high: 193.50, low: 190.80, close: 192.80, volume: 49000000 },
  { date: new Date('2024-01-16'), open: 192.80, high: 194.20, low: 191.50, close: 193.50, volume: 46000000 },
  { date: new Date('2024-01-17'), open: 193.50, high: 195.80, low: 192.30, close: 194.20, volume: 53000000 },
  { date: new Date('2024-01-18'), open: 194.20, high: 196.50, low: 193.80, close: 195.80, volume: 51000000 },
  { date: new Date('2024-01-19'), open: 195.80, high: 197.20, low: 194.50, close: 196.50, volume: 48000000 },
  { date: new Date('2024-01-22'), open: 196.50, high: 198.80, low: 195.90, close: 197.90, volume: 54000000 },
  { date: new Date('2024-01-23'), open: 197.90, high: 199.50, low: 196.80, close: 198.50, volume: 50000000 }
]

// MSFT Stock Data
const msftData = [
  { date: new Date('2024-01-02'), open: 372.50, high: 378.20, low: 370.30, close: 376.80, volume: 25000000 },
  { date: new Date('2024-01-03'), open: 376.80, high: 380.50, low: 375.20, close: 378.90, volume: 28000000 },
  { date: new Date('2024-01-04'), open: 378.90, high: 382.80, low: 377.50, close: 381.20, volume: 31000000 },
  { date: new Date('2024-01-05'), open: 381.20, high: 385.30, low: 380.80, close: 384.60, volume: 27000000 },
  { date: new Date('2024-01-08'), open: 384.60, high: 388.90, low: 383.10, close: 387.50, volume: 32000000 },
  { date: new Date('2024-01-09'), open: 387.50, high: 390.20, low: 385.30, close: 388.80, volume: 29000000 },
  { date: new Date('2024-01-10'), open: 388.80, high: 392.50, low: 387.90, close: 391.50, volume: 33000000 },
  { date: new Date('2024-01-11'), open: 391.50, high: 395.80, low: 390.60, close: 394.20, volume: 35000000 },
  { date: new Date('2024-01-12'), open: 394.20, high: 398.50, low: 393.80, close: 397.80, volume: 30000000 },
  { date: new Date('2024-01-16'), open: 397.80, high: 402.20, low: 396.50, close: 400.50, volume: 36000000 },
  { date: new Date('2024-01-17'), open: 400.50, high: 405.80, low: 399.30, close: 404.20, volume: 34000000 },
  { date: new Date('2024-01-18'), open: 404.20, high: 408.50, low: 403.80, close: 407.80, volume: 32000000 },
  { date: new Date('2024-01-19'), open: 407.80, high: 410.20, low: 405.50, close: 408.50, volume: 31000000 },
  { date: new Date('2024-01-22'), open: 408.50, high: 412.80, low: 407.90, close: 411.90, volume: 33000000 },
  { date: new Date('2024-01-23'), open: 411.90, high: 415.50, low: 410.80, close: 414.50, volume: 35000000 }
]

// GOOGL Stock Data
const googleData = [
  { date: new Date('2024-01-02'), close: 140.50 },
  { date: new Date('2024-01-03'), close: 142.30 },
  { date: new Date('2024-01-04'), close: 141.80 },
  { date: new Date('2024-01-05'), close: 143.50 },
  { date: new Date('2024-01-08'), close: 145.20 },
  { date: new Date('2024-01-09'), close: 146.80 },
  { date: new Date('2024-01-10'), close: 148.50 },
  { date: new Date('2024-01-11'), close: 147.20 },
  { date: new Date('2024-01-12'), close: 149.80 },
  { date: new Date('2024-01-16'), close: 151.50 },
  { date: new Date('2024-01-17'), close: 153.20 },
  { date: new Date('2024-01-18'), close: 152.80 },
  { date: new Date('2024-01-19'), close: 154.50 },
  { date: new Date('2024-01-22'), close: 156.20 },
  { date: new Date('2024-01-23'), close: 158.50 }
]

// Axis Settings
const primaryXAxis = {
  valueType: 'DateTime',
  majorGridLines: { width: 0 },
  crosshairTooltip: { enable: true }
}

const primaryYAxis = {
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  crosshairTooltip: { enable: true }
}

// Crosshair Settings
const crosshairSettings = {
  enable: true,
  lineType: 'Both'
}

// Tooltip Settings
const tooltipSettings = {
  enable: true
}

// Marker Settings
const markerSettings = {
  visible: true,
  width: 8,
  height: 8
}
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
