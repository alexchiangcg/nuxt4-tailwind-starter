<script setup lang="ts">
import { ListViewComponent as EjsListview } from '@syncfusion/ej2-vue-lists'

definePageMeta({
  layout: 'playground'
})

// 基本資料
const basicData = [
  { text: 'iPhone 15 Pro', id: '1' },
  { text: 'Samsung Galaxy S24', id: '2' },
  { text: 'Google Pixel 8', id: '3' },
  { text: 'OnePlus 12', id: '4' },
  { text: 'Sony Xperia 1 V', id: '5' }
]

// 分組資料
const groupedData = [
  { text: 'Audi A4', id: '1', category: 'Audi' },
  { text: 'Audi A5', id: '2', category: 'Audi' },
  { text: 'Audi A6', id: '3', category: 'Audi' },
  { text: 'BMW 3 Series', id: '4', category: 'BMW' },
  { text: 'BMW 5 Series', id: '5', category: 'BMW' },
  { text: 'BMW X5', id: '6', category: 'BMW' },
  { text: 'Mercedes C-Class', id: '7', category: 'Mercedes' },
  { text: 'Mercedes E-Class', id: '8', category: 'Mercedes' }
]

const groupFields = {
  groupBy: 'category',
  text: 'text'
}

// 待辦清單資料
const todoData = [
  { text: '完成專案報告', id: '1' },
  { text: '準備會議資料', id: '2' },
  { text: '回覆客戶郵件', id: '3' },
  { text: '更新產品文檔', id: '4' },
  { text: '檢視程式碼', id: '5' }
]

// 帶圖示的資料
const iconData = [
  { text: '文件', id: '1', icon: 'e-icons e-folder' },
  { text: '圖片', id: '2', icon: 'e-icons e-image' },
  { text: '音樂', id: '3', icon: 'e-icons e-audio' },
  { text: '影片', id: '4', icon: 'e-icons e-video' },
  { text: '下載', id: '5', icon: 'e-icons e-download' }
]

// 巢狀資料
const nestedData = [
  {
    id: '01', text: '音樂', icon: 'folder',
    child: [
      { id: '01-01', text: '流行音樂' },
      { id: '01-02', text: '古典音樂' },
      { id: '01-03', text: '搖滾音樂' }
    ]
  },
  {
    id: '02', text: '影片', icon: 'folder',
    child: [
      { id: '02-01', text: '電影' },
      { id: '02-02', text: '電視劇' },
      { id: '02-03', text: '紀錄片' }
    ]
  },
  {
    id: '03', text: '圖片', icon: 'folder',
    child: [
      { id: '03-01', text: '風景' },
      { id: '03-02', text: '人物' },
      { id: '03-03', text: '美食' }
    ]
  }
]

const nestedFields = {
  text: 'text',
  child: 'child'
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">ListView 清單檢視</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-lists</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">簡單的清單顯示</p>
        <div class="max-w-md border border-gray-300 rounded">
          <ejs-listview :dataSource="basicData" />
        </div>
      </section>

      <!-- 2. 帶標題的清單 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 帶標題的清單</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">showHeader</code> +
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">headerTitle</code>
        </p>
        <div class="max-w-md border border-gray-300 rounded">
          <ejs-listview
            :dataSource="basicData"
            :showHeader="true"
            headerTitle="熱門手機"
          />
        </div>
      </section>

      <!-- 3. 核取方塊清單 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 核取方塊清單</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">showCheckBox</code>
        </p>
        <div class="max-w-md border border-gray-300 rounded">
          <ejs-listview
            :dataSource="todoData"
            :showCheckBox="true"
            :showHeader="true"
            headerTitle="待辦事項"
          />
        </div>
      </section>

      <!-- 4. 分組清單 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 分組清單</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">fields.groupBy</code>
        </p>
        <div class="max-w-md border border-gray-300 rounded">
          <ejs-listview
            :dataSource="groupedData"
            :fields="groupFields"
            :showHeader="true"
            headerTitle="汽車品牌"
          />
        </div>
      </section>

      <!-- 5. 巢狀清單 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 巢狀清單</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">fields.child</code>
        </p>
        <div class="max-w-md border border-gray-300 rounded">
          <ejs-listview
            :dataSource="nestedData"
            :fields="nestedFields"
            :showHeader="true"
            headerTitle="檔案總管"
          />
        </div>
        <code class="text-xs text-gray-500 mt-2 block">點擊項目可進入子清單，點擊返回可回到上層</code>
      </section>

      <!-- 6. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. API 參考</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">屬性</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">型別</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">說明</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">預設值</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">清單資料來源</td>
                <td class="px-4 py-3 text-sm text-gray-600">[]</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showHeader</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否顯示標題</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">headerTitle</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">標題文字</td>
                <td class="px-4 py-3 text-sm text-gray-600">''</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showCheckBox</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否顯示核取方塊</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields.groupBy</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">分組欄位名稱</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields.child</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">子項目欄位名稱</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-vue-lists/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
</style>
