<script setup lang="ts">
import { MenuComponent as EjsMenu } from '@syncfusion/ej2-vue-navigations'

definePageMeta({
  layout: 'playground'
})

// 基本選單項目
const basicMenuItems = [
  {
    text: '檔案',
    items: [
      { text: '新增' },
      { text: '開啟' },
      { text: '儲存' },
      { separator: true },
      { text: '離開' }
    ]
  },
  {
    text: '編輯',
    items: [
      { text: '復原' },
      { text: '重做' },
      { separator: true },
      { text: '剪下' },
      { text: '複製' },
      { text: '貼上' }
    ]
  },
  {
    text: '檢視',
    items: [
      { text: '工具列' },
      { text: '狀態列' },
      { text: '全螢幕' }
    ]
  },
  { text: '說明' }
]

// 多層子選單
const multilevelMenuItems = [
  {
    text: '家電',
    items: [
      {
        text: '廚房電器',
        items: [
          { text: '電鍋' },
          { text: '咖啡機' },
          { text: '微波爐' }
        ]
      },
      {
        text: '電視',
        items: [
          { text: '智慧電視' },
          { text: '大螢幕電視' },
          { text: 'OLED 電視' }
        ]
      },
      { text: '洗衣機' },
      { text: '冰箱' }
    ]
  },
  {
    text: '電子產品',
    items: [
      {
        text: '手機配件',
        items: [
          { text: '耳機' },
          { text: '記憶卡' },
          { text: '行動電源' }
        ]
      },
      { text: '筆記型電腦' },
      {
        text: '桌上型電腦',
        items: [
          { text: '顯示器' },
          { text: '鍵盤' },
          { text: '滑鼠' }
        ]
      }
    ]
  },
  { text: '時尚' },
  { text: '居家生活' }
]

// 帶圖示的選單
const iconMenuItems = [
  {
    text: '剪下',
    iconCss: 'e-icons e-cut'
  },
  {
    text: '複製',
    iconCss: 'e-icons e-copy'
  },
  {
    text: '貼上',
    iconCss: 'e-icons e-paste'
  },
  { separator: true },
  {
    text: '字型',
    iconCss: 'e-icons e-font-name',
    items: [
      { text: '微軟正黑體' },
      { text: 'Arial' },
      { text: 'Times New Roman' }
    ]
  }
]

// 垂直選單
const verticalMenuItems = [
  {
    text: '首頁',
    iconCss: 'e-icons e-home'
  },
  {
    text: '產品',
    iconCss: 'e-icons e-grid-view',
    items: [
      { text: '軟體' },
      { text: '硬體' },
      { text: '服務' }
    ]
  },
  {
    text: '關於我們',
    iconCss: 'e-icons e-people'
  },
  {
    text: '聯絡我們',
    iconCss: 'e-icons e-comment-show'
  }
]
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Menu 選單</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-navigations</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">水平選單（預設）</p>
        <div class="border border-gray-300 rounded overflow-hidden">
          <ejs-menu :items="basicMenuItems" />
        </div>
      </section>

      <!-- 2. 多層子選單 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 多層子選單</h2>
        <p class="text-gray-600 mb-6">支援無限層級的巢狀子選單</p>
        <div class="border border-gray-300 rounded overflow-hidden">
          <ejs-menu :items="multilevelMenuItems" />
        </div>
      </section>

      <!-- 3. 帶圖示的選單 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 帶圖示的選單</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">iconCss</code>
        </p>
        <div class="border border-gray-300 rounded overflow-hidden">
          <ejs-menu :items="iconMenuItems" />
        </div>
      </section>

      <!-- 4. 垂直選單 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 垂直選單</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">orientation="Vertical"</code>
        </p>
        <div class="inline-block border border-gray-300 rounded overflow-hidden">
          <ejs-menu :items="verticalMenuItems" orientation="Vertical" />
        </div>
      </section>

      <!-- 5. 點擊開啟子選單 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 點擊開啟子選單</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">showItemOnClick</code>
        </p>
        <div class="border border-gray-300 rounded overflow-hidden">
          <ejs-menu :items="basicMenuItems" :showItemOnClick="true" />
        </div>
        <code class="text-xs text-gray-500 mt-2 block">必須點擊才能開啟子選單（預設是 hover）</code>
      </section>

      <!-- 6. 可捲動選單 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 可捲動選單</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">enableScrolling</code>
        </p>
        <div class="max-w-md border border-gray-300 rounded overflow-hidden">
          <ejs-menu :items="multilevelMenuItems" :enableScrolling="true" cssClass="e-scrollable-menu" />
        </div>
        <code class="text-xs text-gray-500 mt-2 block">當選單項目超過容器寬度時，會顯示捲動按鈕</code>
      </section>

      <!-- 7. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. API 參考</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">items</td>
                <td class="px-4 py-3 text-sm text-gray-600">MenuItemModel[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">選單項目資料</td>
                <td class="px-4 py-3 text-sm text-gray-600">[]</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">orientation</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">選單方向（Horizontal/Vertical）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Horizontal'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showItemOnClick</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否點擊才開啟子選單</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableScrolling</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否啟用捲動</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">iconCss</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">圖示 CSS 類別（項目屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">separator</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否為分隔線（項目屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style>

.e-menu-wrapper.e-scrollable-menu:not(.e-menu-popup) {
  width: 100%;
}
</style>
