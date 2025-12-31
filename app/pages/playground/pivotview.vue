<script setup lang="ts">
import { PivotViewComponent as EjsPivotview, FieldList, CalculatedField, GroupingBar } from '@syncfusion/ej2-vue-pivotview'
import { provide } from 'vue'

definePageMeta({
  layout: 'playground'
})

// 範例銷售資料
const pivotData = [
  { Year: '2023', Quarter: 'Q1', Product: '手機', Region: '北區', Amount: 125000, Quantity: 500 },
  { Year: '2023', Quarter: 'Q1', Product: '手機', Region: '南區', Amount: 98000, Quantity: 400 },
  { Year: '2023', Quarter: 'Q1', Product: '筆電', Region: '北區', Amount: 230000, Quantity: 150 },
  { Year: '2023', Quarter: 'Q1', Product: '筆電', Region: '南區', Amount: 180000, Quantity: 120 },
  { Year: '2023', Quarter: 'Q2', Product: '手機', Region: '北區', Amount: 145000, Quantity: 580 },
  { Year: '2023', Quarter: 'Q2', Product: '手機', Region: '南區', Amount: 112000, Quantity: 450 },
  { Year: '2023', Quarter: 'Q2', Product: '筆電', Region: '北區', Amount: 250000, Quantity: 165 },
  { Year: '2023', Quarter: 'Q2', Product: '筆電', Region: '南區', Amount: 195000, Quantity: 130 },
  { Year: '2023', Quarter: 'Q3', Product: '手機', Region: '北區', Amount: 135000, Quantity: 540 },
  { Year: '2023', Quarter: 'Q3', Product: '手機', Region: '南區', Amount: 105000, Quantity: 420 },
  { Year: '2023', Quarter: 'Q3', Product: '筆電', Region: '北區', Amount: 220000, Quantity: 145 },
  { Year: '2023', Quarter: 'Q3', Product: '筆電', Region: '南區', Amount: 175000, Quantity: 115 },
  { Year: '2023', Quarter: 'Q4', Product: '手機', Region: '北區', Amount: 165000, Quantity: 660 },
  { Year: '2023', Quarter: 'Q4', Product: '手機', Region: '南區', Amount: 128000, Quantity: 510 },
  { Year: '2023', Quarter: 'Q4', Product: '筆電', Region: '北區', Amount: 280000, Quantity: 185 },
  { Year: '2023', Quarter: 'Q4', Product: '筆電', Region: '南區', Amount: 215000, Quantity: 140 },
  { Year: '2024', Quarter: 'Q1', Product: '手機', Region: '北區', Amount: 142000, Quantity: 560 },
  { Year: '2024', Quarter: 'Q1', Product: '手機', Region: '南區', Amount: 108000, Quantity: 430 },
  { Year: '2024', Quarter: 'Q1', Product: '筆電', Region: '北區', Amount: 255000, Quantity: 168 },
  { Year: '2024', Quarter: 'Q1', Product: '筆電', Region: '南區', Amount: 198000, Quantity: 132 }
]

// 基本資料來源設定
const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  columns: [{ name: 'Year' }, { name: 'Quarter' }],
  values: [
    { name: 'Amount', caption: '銷售額' },
    { name: 'Quantity', caption: '銷售數量' }
  ],
  rows: [{ name: 'Product', caption: '產品' }, { name: 'Region', caption: '地區' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
}

// 帶分組列的資料來源設定
const groupingDataSource = {
  dataSource: pivotData,
  expandAll: true,
  columns: [{ name: 'Year' }],
  values: [{ name: 'Amount', caption: '銷售額' }],
  rows: [{ name: 'Product', caption: '產品' }, { name: 'Region', caption: '地區' }, { name: 'Quarter', caption: '季度' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
}

provide('pivotview', [FieldList, CalculatedField, GroupingBar])
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">PivotView 樞紐分析表</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-pivotview</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本樞紐分析表 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本樞紐分析表</h2>
        <p class="text-gray-600 mb-6">以產品和地區為列，年份和季度為欄，顯示銷售額和數量</p>
        <div class="h-[400px]">
          <ejs-pivotview
            id="pivotview1"
            :dataSourceSettings="dataSourceSettings"
            height="100%"
          />
        </div>
      </section>

      <!-- 2. 帶欄位選擇器 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 帶欄位選擇器</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">showFieldList</code>
          - 可拖放欄位調整分析維度
        </p>
        <div class="h-[450px]">
          <ejs-pivotview
            id="pivotview2"
            :dataSourceSettings="dataSourceSettings"
            :showFieldList="true"
            height="100%"
          />
        </div>
      </section>

      <!-- 3. 帶分組列 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 帶分組列</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">showGroupingBar</code>
          - 在表格上方顯示分組列
        </p>
        <div class="h-[500px]">
          <ejs-pivotview
            id="pivotview3"
            :dataSourceSettings="groupingDataSource"
            :showGroupingBar="true"
            height="100%"
          />
        </div>
      </section>

      <!-- 4. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. API 參考</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">屬性</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">型別</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">說明</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSourceSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">Object</td>
                <td class="px-4 py-3 text-sm text-gray-600">資料來源設定（必要）</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showFieldList</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否顯示欄位選擇器</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showGroupingBar</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否顯示分組列</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableVirtualization</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否啟用虛擬化（大資料量時使用）</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">height</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | number</td>
                <td class="px-4 py-3 text-sm text-gray-600">元件高度</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 5. DataSourceSettings 結構 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. DataSourceSettings 結構</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">屬性</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">說明</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">資料陣列或遠端資料來源</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">rows</td>
                <td class="px-4 py-3 text-sm text-gray-600">列欄位設定（左側維度）</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">columns</td>
                <td class="px-4 py-3 text-sm text-gray-600">欄欄位設定（上方維度）</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">values</td>
                <td class="px-4 py-3 text-sm text-gray-600">值欄位設定（計算的數值）</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">filters</td>
                <td class="px-4 py-3 text-sm text-gray-600">篩選欄位設定</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">formatSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">數值格式設定（貨幣、百分比等）</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">expandAll</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否預設展開所有群組</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


