<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Spreadsheet</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion Spreadsheet 提供 Excel 級別的試算表功能，支援公式計算、格式設定、圖表、資料驗證等完整功能。
      </p>
    </div>

    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">基本試算表</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">具備基本編輯功能的試算表，支援儲存格選取、資料輸入、基本格式設定。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <ejs-spreadsheet ref="basicSpreadsheet" :height="'450px'" :showRibbon="true" :showFormulaBar="true" :showSheetTabs="true" :sheets="basicSheets" />
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">公式計算</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">支援 Excel 公式，包括 SUM、AVERAGE、IF、VLOOKUP 等常用函數。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <ejs-spreadsheet ref="formulaSpreadsheet" :height="'400px'" :showRibbon="true" :showFormulaBar="true" :sheets="formulaSheets" />
      </div>
    </section>

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
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">sheets</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">SheetModel[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">工作表配置陣列</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">showRibbon</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">顯示功能區工具列</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">showFormulaBar</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">顯示公式列</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">allowOpen</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">允許開啟檔案</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">allowSave</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">允許儲存檔案</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SpreadsheetComponent as EjsSpreadsheet } from '@syncfusion/ej2-vue-spreadsheet'


definePageMeta({ layout: 'playground' })

const basicSheets = [
  {
    name: '銷售資料',
    rows: [
      { cells: [
        { value: '產品', style: { fontWeight: 'bold', backgroundColor: '#4472C4', color: '#FFFFFF' } },
        { value: 'Q1', style: { fontWeight: 'bold', backgroundColor: '#4472C4', color: '#FFFFFF' } },
        { value: 'Q2', style: { fontWeight: 'bold', backgroundColor: '#4472C4', color: '#FFFFFF' } },
        { value: 'Q3', style: { fontWeight: 'bold', backgroundColor: '#4472C4', color: '#FFFFFF' } },
        { value: 'Q4', style: { fontWeight: 'bold', backgroundColor: '#4472C4', color: '#FFFFFF' } },
        { value: '總計', style: { fontWeight: 'bold', backgroundColor: '#4472C4', color: '#FFFFFF' } }
      ]},
      { cells: [{ value: '筆記型電腦' }, { value: 15000 }, { value: 18000 }, { value: 22000 }, { value: 25000 }, { formula: '=SUM(B2:E2)' }] },
      { cells: [{ value: '平板電腦' }, { value: 8000 }, { value: 9500 }, { value: 11000 }, { value: 12000 }, { formula: '=SUM(B3:E3)' }] },
      { cells: [{ value: '智慧型手機' }, { value: 25000 }, { value: 28000 }, { value: 32000 }, { value: 35000 }, { formula: '=SUM(B4:E4)' }] },
      { cells: [{ value: '配件' }, { value: 5000 }, { value: 6000 }, { value: 7000 }, { value: 8000 }, { formula: '=SUM(B5:E5)' }] },
      { cells: [
        { value: '季度總計', style: { fontWeight: 'bold' } },
        { formula: '=SUM(B2:B5)', style: { fontWeight: 'bold' } },
        { formula: '=SUM(C2:C5)', style: { fontWeight: 'bold' } },
        { formula: '=SUM(D2:D5)', style: { fontWeight: 'bold' } },
        { formula: '=SUM(E2:E5)', style: { fontWeight: 'bold' } },
        { formula: '=SUM(F2:F5)', style: { fontWeight: 'bold', backgroundColor: '#E2EFDA' } }
      ]}
    ],
    columns: [{ width: 120 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }, { width: 100 }]
  }
]

const formulaSheets = [
  {
    name: '成績計算',
    rows: [
      { cells: [
        { value: '學生', style: { fontWeight: 'bold', backgroundColor: '#70AD47', color: '#FFFFFF' } },
        { value: '國文', style: { fontWeight: 'bold', backgroundColor: '#70AD47', color: '#FFFFFF' } },
        { value: '數學', style: { fontWeight: 'bold', backgroundColor: '#70AD47', color: '#FFFFFF' } },
        { value: '英文', style: { fontWeight: 'bold', backgroundColor: '#70AD47', color: '#FFFFFF' } },
        { value: '總分', style: { fontWeight: 'bold', backgroundColor: '#70AD47', color: '#FFFFFF' } },
        { value: '平均', style: { fontWeight: 'bold', backgroundColor: '#70AD47', color: '#FFFFFF' } },
        { value: '及格', style: { fontWeight: 'bold', backgroundColor: '#70AD47', color: '#FFFFFF' } }
      ]},
      { cells: [{ value: '王小明' }, { value: 85 }, { value: 92 }, { value: 78 }, { formula: '=SUM(B2:D2)' }, { formula: '=AVERAGE(B2:D2)' }, { formula: '=IF(F2>=60,"是","否")' }] },
      { cells: [{ value: '李小華' }, { value: 72 }, { value: 65 }, { value: 88 }, { formula: '=SUM(B3:D3)' }, { formula: '=AVERAGE(B3:D3)' }, { formula: '=IF(F3>=60,"是","否")' }] },
      { cells: [{ value: '張小美' }, { value: 90 }, { value: 88 }, { value: 95 }, { formula: '=SUM(B4:D4)' }, { formula: '=AVERAGE(B4:D4)' }, { formula: '=IF(F4>=60,"是","否")' }] },
      { cells: [{ value: '陳大偉' }, { value: 55 }, { value: 48 }, { value: 62 }, { formula: '=SUM(B5:D5)' }, { formula: '=AVERAGE(B5:D5)' }, { formula: '=IF(F5>=60,"是","否")' }] }
    ],
    columns: [{ width: 100 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }, { width: 80 }]
  }
]
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
