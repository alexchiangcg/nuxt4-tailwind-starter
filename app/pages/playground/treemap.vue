<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">TreeMap</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion TreeMap 以矩形區塊的大小來表示資料的數量關係，適合用於顯示階層式資料的佔比和分布。
      </p>
    </div>

    <!-- Basic TreeMap -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">基本樹狀圖</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示各國 GDP 的佔比分布。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <ejs-treemap
          id="basic-treemap"
          :dataSource="gdpData"
          :weightValuePath="'GDP'"
          :leafItemSettings="leafItemSettings"
          :palette="palette"
          :legendSettings="legendSettings"
          height="400px"
        />
      </div>
    </section>

    <!-- Hierarchical TreeMap -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">階層式樹狀圖</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示公司部門的預算分配結構。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <ejs-treemap
          id="hierarchical-treemap"
          :dataSource="budgetData"
          :weightValuePath="'budget'"
          :levels="levels"
          :leafItemSettings="hierarchicalLeafSettings"
          :legendSettings="legendSettings"
          height="450px"
        />
      </div>
    </section>

    <!-- Sales TreeMap -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">銷售數據樹狀圖</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示各產品類別的銷售額佔比。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <ejs-treemap
          id="sales-treemap"
          :dataSource="salesData"
          :weightValuePath="'sales'"
          :leafItemSettings="salesLeafSettings"
          :palette="salesPalette"
          :legendSettings="legendSettings"
          height="400px"
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
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">dataSource</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Object[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">樹狀圖資料來源</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">weightValuePath</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">權重值欄位路徑</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">levels</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">LevelSettingsModel[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">層級設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">leafItemSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">LeafItemSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">葉節點設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">palette</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">調色盤</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">常見應用場景</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📁</div>
          <span class="text-sm font-medium">磁碟空間</span>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">💰</div>
          <span class="text-sm font-medium">預算分配</span>
        </div>
        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📊</div>
          <span class="text-sm font-medium">市場佔比</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🏢</div>
          <span class="text-sm font-medium">組織架構</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { TreeMapComponent as EjsTreemap, TreeMapLegend, TreeMapTooltip } from '@syncfusion/ej2-vue-treemap'

provide('treemap', [TreeMapLegend, TreeMapTooltip])

definePageMeta({ layout: 'playground' })

// GDP Data
const gdpData = [
  { Country: '美國', GDP: 21400 },
  { Country: '中國', GDP: 14700 },
  { Country: '日本', GDP: 5100 },
  { Country: '德國', GDP: 3800 },
  { Country: '英國', GDP: 2800 },
  { Country: '印度', GDP: 2700 },
  { Country: '法國', GDP: 2600 },
  { Country: '義大利', GDP: 1900 },
  { Country: '巴西', GDP: 1800 },
  { Country: '加拿大', GDP: 1700 }
]

const leafItemSettings = {
  labelPath: 'Country',
  labelStyle: { color: '#ffffff' },
  border: { color: '#ffffff', width: 1 }
}

const palette = ['#4472C4', '#ED7D31', '#A5A5A5', '#FFC000', '#5B9BD5', '#70AD47', '#9E480E', '#997300', '#264478', '#43682B']

const legendSettings = {
  visible: true,
  position: 'Bottom'
}

// Budget Data (Hierarchical)
const budgetData = [
  {
    category: '技術部門',
    budget: 5000,
    items: [
      { name: '研發', budget: 2500 },
      { name: 'IT 維運', budget: 1500 },
      { name: '資安', budget: 1000 }
    ]
  },
  {
    category: '業務部門',
    budget: 4000,
    items: [
      { name: '銷售', budget: 2000 },
      { name: '行銷', budget: 1200 },
      { name: '客服', budget: 800 }
    ]
  },
  {
    category: '行政部門',
    budget: 2000,
    items: [
      { name: '人資', budget: 800 },
      { name: '財務', budget: 700 },
      { name: '總務', budget: 500 }
    ]
  },
  {
    category: '管理層',
    budget: 1500,
    items: [
      { name: '高階主管', budget: 1000 },
      { name: '顧問', budget: 500 }
    ]
  }
]

const levels = [
  {
    groupPath: 'category',
    border: { color: '#ffffff', width: 2 },
    headerStyle: { size: '14px' },
    headerFormat: '${category}'
  }
]

const hierarchicalLeafSettings = {
  labelPath: 'name',
  labelStyle: { color: '#ffffff', size: '12px' },
  border: { color: '#ffffff', width: 1 }
}

// Sales Data
const salesData = [
  { product: '筆記型電腦', sales: 4500 },
  { product: '智慧手機', sales: 8200 },
  { product: '平板電腦', sales: 2800 },
  { product: '桌上型電腦', sales: 1900 },
  { product: '耳機', sales: 1500 },
  { product: '智慧手錶', sales: 2100 },
  { product: '鍵盤滑鼠', sales: 900 },
  { product: '顯示器', sales: 1600 },
  { product: '印表機', sales: 700 },
  { product: '網路設備', sales: 1100 }
]

const salesLeafSettings = {
  labelPath: 'product',
  labelStyle: { color: '#ffffff' },
  border: { color: '#ffffff', width: 1 }
}

const salesPalette = ['#2E7D32', '#388E3C', '#43A047', '#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9', '#E8F5E9', '#F1F8E9']
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
