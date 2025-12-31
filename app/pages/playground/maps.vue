<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Maps</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion Maps 提供地理資料視覺化功能，支援世界地圖、區域地圖、標記、泡泡圖、熱力圖等多種展示方式。
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="mb-10 p-8 text-center text-gray-500">
      <div class="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
      載入地圖資料中...
    </div>

    <template v-else-if="worldMapData">
      <!-- World Map -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">世界地圖</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">使用顏色對應顯示各大洲的地理分布。</p>
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
          <ejs-maps id="world-map" :height="'450px'" :zoomSettings="zoomSettings" :legendSettings="legendSettings">
            <e-layers>
              <e-layer :shapeData="worldMapData" :shapeSettings="worldShapeSettings" :tooltipSettings="tooltipSettings" />
            </e-layers>
          </ejs-maps>
        </div>
      </section>

      <!-- Map with Markers -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">標記地圖</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">在地圖上標記重要城市位置。</p>
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
          <ejs-maps id="marker-map" :height="'400px'" :zoomSettings="zoomSettings">
            <e-layers>
              <e-layer :shapeData="worldMapData" :shapeSettings="simpleShapeSettings" :markerSettings="markerSettings" />
            </e-layers>
          </ejs-maps>
        </div>
      </section>

      <!-- Bubble Map -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">泡泡地圖</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">使用泡泡大小表示各國人口數量。</p>
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
          <ejs-maps id="bubble-map" :height="'400px'" :zoomSettings="zoomSettings">
            <e-layers>
              <e-layer :shapeData="worldMapData" :shapeSettings="simpleShapeSettings" :bubbleSettings="bubbleSettings" />
            </e-layers>
          </ejs-maps>
        </div>
      </section>
    </template>

    <!-- Error State -->
    <div v-else class="mb-10 p-8 text-center text-red-500">
      無法載入地圖資料，請檢查網路連線。
    </div>

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
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">shapeData</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Object</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">GeoJSON 地圖資料</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">shapeSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">ShapeSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">形狀樣式設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">markerSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">MarkerSettingsModel[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">標記設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">bubbleSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">BubbleSettingsModel[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">泡泡設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">zoomSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">ZoomSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">縮放設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">legendSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">LegendSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">圖例設定</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Map Types -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">支援的地圖功能</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🗺️</div>
          <span class="text-sm font-medium">Geometry</span>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📍</div>
          <span class="text-sm font-medium">Marker</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🔵</div>
          <span class="text-sm font-medium">Bubble</span>
        </div>
        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🏷️</div>
          <span class="text-sm font-medium">Data Label</span>
        </div>
        <div class="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">➡️</div>
          <span class="text-sm font-medium">Navigation</span>
        </div>
        <div class="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📊</div>
          <span class="text-sm font-medium">Legend</span>
        </div>
        <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🎨</div>
          <span class="text-sm font-medium">Color Mapping</span>
        </div>
        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🔍</div>
          <span class="text-sm font-medium">Drill Down</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, onMounted } from 'vue'
import {
  MapsComponent as EjsMaps,
  LayersDirective as ELayers,
  LayerDirective as ELayer,
  Legend,
  MapsTooltip,
  Bubble,
  Marker,
  Zoom
} from '@syncfusion/ej2-vue-maps'


provide('maps', [Legend, MapsTooltip, Bubble, Marker, Zoom])

definePageMeta({ layout: 'playground' })

// 使用 ref 存儲異步載入的地圖資料
const worldMapData = ref<object | null>(null)
const isLoading = ref(true)

// 異步載入世界地圖 GeoJSON 資料
onMounted(async () => {
  try {
    const response = await fetch('https://cdn.syncfusion.com/maps/map-data/world-map.json')
    worldMapData.value = await response.json()
  } catch (error) {
    console.error('Failed to load world map data:', error)
  } finally {
    isLoading.value = false
  }
})

// Shape settings with color by continent
const worldShapeSettings = {
  fill: '#E5E5E5',
  border: { color: '#FFFFFF', width: 0.5 },
  colorValuePath: 'continent',
  colorMapping: [
    { value: 'North America', color: '#4472C4' },
    { value: 'South America', color: '#70AD47' },
    { value: 'Europe', color: '#ED7D31' },
    { value: 'Africa', color: '#FFC000' },
    { value: 'Asia', color: '#5B9BD5' },
    { value: 'Oceania', color: '#9E480E' },
    { value: 'Antarctica', color: '#7030A0' }
  ]
}

const simpleShapeSettings = {
  fill: '#A6D5F7',
  border: { color: '#FFFFFF', width: 0.5 }
}

// Zoom settings
const zoomSettings = {
  enable: true,
  toolbarSettings: {
    buttonSettings: {
      toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
    }
  }
}

// Legend settings
const legendSettings = {
  visible: true,
  position: 'Bottom',
  title: { text: '各大洲' }
}

// Tooltip settings
const tooltipSettings = {
  visible: true,
  valuePath: 'name'
}

// Marker settings - Major cities
const markerSettings = [
  {
    visible: true,
    dataSource: [
      { latitude: 40.7128, longitude: -74.0060, name: '紐約' },
      { latitude: 51.5074, longitude: -0.1278, name: '倫敦' },
      { latitude: 35.6762, longitude: 139.6503, name: '東京' },
      { latitude: 25.0330, longitude: 121.5654, name: '台北' },
      { latitude: 22.3193, longitude: 114.1694, name: '香港' },
      { latitude: 1.3521, longitude: 103.8198, name: '新加坡' },
      { latitude: -33.8688, longitude: 151.2093, name: '雪梨' },
      { latitude: 48.8566, longitude: 2.3522, name: '巴黎' }
    ],
    shape: 'Circle',
    fill: '#FF5733',
    width: 10,
    height: 10,
    border: { color: '#FFFFFF', width: 2 },
    tooltipSettings: {
      visible: true,
      valuePath: 'name'
    }
  }
]

// Bubble settings - Population data
const bubbleSettings = [
  {
    visible: true,
    dataSource: [
      { name: 'United States', latitude: 37.0902, longitude: -95.7129, population: 331000000 },
      { name: 'China', latitude: 35.8617, longitude: 104.1954, population: 1439000000 },
      { name: 'India', latitude: 20.5937, longitude: 78.9629, population: 1380000000 },
      { name: 'Brazil', latitude: -14.2350, longitude: -51.9253, population: 212000000 },
      { name: 'Russia', latitude: 61.5240, longitude: 105.3188, population: 144000000 },
      { name: 'Japan', latitude: 36.2048, longitude: 138.2529, population: 126000000 },
      { name: 'Germany', latitude: 51.1657, longitude: 10.4515, population: 83000000 },
      { name: 'Australia', latitude: -25.2744, longitude: 133.7751, population: 25000000 }
    ],
    valuePath: 'population',
    minRadius: 5,
    maxRadius: 40,
    fill: 'rgba(68, 114, 196, 0.6)',
    border: { color: '#4472C4', width: 2 },
    tooltipSettings: {
      visible: true,
      valuePath: 'name',
      format: '${name}: ${population:n0}'
    }
  }
]
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
