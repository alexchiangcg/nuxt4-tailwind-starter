<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">ContextMenu</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion ContextMenu 提供右鍵選單功能，可在指定區域顯示快捷選單，支援多層級選單、圖示、分隔線等功能。
      </p>
    </div>

    <!-- Basic ContextMenu -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">基本右鍵選單</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">在下方區域點擊右鍵開啟選單。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <div
          id="basic-target"
          class="h-40 flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 text-gray-500"
        >
          在此區域點擊右鍵 / 長按開啟選單
        </div>
        <ejs-contextmenu
          target="#basic-target"
          :items="basicMenuItems"
          :select="onBasicSelect"
        />
      </div>
    </section>

    <!-- ContextMenu with Icons -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">帶圖示的選單</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">選單項目配有圖示增強視覺識別。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <div
          id="icon-target"
          class="h-40 flex items-center justify-center border-2 border-dashed border-blue-300 bg-blue-50 text-blue-600"
        >
          右鍵開啟帶圖示選單
        </div>
        <ejs-contextmenu
          target="#icon-target"
          :items="iconMenuItems"
          :select="onIconSelect"
        />
      </div>
    </section>

    <!-- Nested ContextMenu -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">多層級選單</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">支援子選單的多層級選單結構。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <div
          id="nested-target"
          class="h-40 flex items-center justify-center border-2 border-dashed border-green-300 bg-green-50 text-green-600"
        >
          右鍵開啟多層級選單
        </div>
        <ejs-contextmenu
          target="#nested-target"
          :items="nestedMenuItems"
          :select="onNestedSelect"
        />
      </div>
    </section>

    <!-- File Manager Style ContextMenu -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">檔案管理器風格</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">模擬檔案管理器的右鍵選單。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <div
          id="file-target"
          class="h-48 p-4 bg-gray-50"
        >
          <div class="grid grid-cols-4 gap-4">
            <div class="flex flex-col items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
              <div class="text-4xl">📁</div>
              <span class="text-sm mt-1">Documents</span>
            </div>
            <div class="flex flex-col items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
              <div class="text-4xl">📁</div>
              <span class="text-sm mt-1">Pictures</span>
            </div>
            <div class="flex flex-col items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
              <div class="text-4xl">📄</div>
              <span class="text-sm mt-1">Report.pdf</span>
            </div>
            <div class="flex flex-col items-center p-2 hover:bg-gray-100 rounded cursor-pointer">
              <div class="text-4xl">📝</div>
              <span class="text-sm mt-1">Notes.txt</span>
            </div>
          </div>
        </div>
        <ejs-contextmenu
          target="#file-target"
          :items="fileMenuItems"
          :select="onFileSelect"
        />
      </div>
    </section>

    <!-- Selected Action Display -->
    <section v-if="selectedAction" class="mb-10">
      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p class="text-blue-800 dark:text-blue-200">
          <span class="font-semibold">已選擇操作：</span> {{ selectedAction }}
        </p>
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
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">target</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">觸發選單的目標元素選擇器</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">items</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">MenuItemModel[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">選單項目陣列</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">iconCss</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">項目圖示 CSS 類別</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">separator</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">分隔線</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">items (nested)</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">MenuItemModel[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">子選單項目</td></tr>
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
          <span class="text-sm font-medium">檔案管理</span>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📝</div>
          <span class="text-sm font-medium">文字編輯</span>
        </div>
        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🖼️</div>
          <span class="text-sm font-medium">圖片操作</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📊</div>
          <span class="text-sm font-medium">資料表格</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ContextMenuComponent as EjsContextmenu } from '@syncfusion/ej2-vue-navigations'


definePageMeta({ layout: 'playground' })

const selectedAction = ref('')

// Basic Menu Items
const basicMenuItems = [
  { text: '剪下' },
  { text: '複製' },
  { text: '貼上' },
  { separator: true },
  { text: '全選' },
  { text: '刪除' }
]

// Menu Items with Icons
const iconMenuItems = [
  { text: '新增', iconCss: 'e-icons e-plus' },
  { text: '編輯', iconCss: 'e-icons e-edit' },
  { text: '儲存', iconCss: 'e-icons e-save' },
  { separator: true },
  { text: '重新整理', iconCss: 'e-icons e-refresh' },
  { text: '刪除', iconCss: 'e-icons e-trash' }
]

// Nested Menu Items
const nestedMenuItems = [
  {
    text: '檔案',
    items: [
      { text: '新增檔案' },
      { text: '開啟檔案' },
      { text: '儲存' },
      { text: '另存新檔' }
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
      { text: '放大' },
      { text: '縮小' },
      { text: '實際大小' }
    ]
  },
  { separator: true },
  { text: '說明' }
]

// File Manager Style Menu Items
const fileMenuItems = [
  { text: '開啟', iconCss: 'e-icons e-folder-open' },
  { text: '在新視窗開啟' },
  { separator: true },
  { text: '剪下', iconCss: 'e-icons e-cut' },
  { text: '複製', iconCss: 'e-icons e-copy' },
  { text: '貼上', iconCss: 'e-icons e-paste' },
  { separator: true },
  { text: '重新命名', iconCss: 'e-icons e-rename' },
  { text: '刪除', iconCss: 'e-icons e-trash' },
  { separator: true },
  { text: '屬性', iconCss: 'e-icons e-properties' }
]

// Event Handlers
const onBasicSelect = (args: { item: { text: string } }) => {
  selectedAction.value = `基本選單 - ${args.item.text}`
}

const onIconSelect = (args: { item: { text: string } }) => {
  selectedAction.value = `圖示選單 - ${args.item.text}`
}

const onNestedSelect = (args: { item: { text: string } }) => {
  selectedAction.value = `多層級選單 - ${args.item.text}`
}

const onFileSelect = (args: { item: { text: string } }) => {
  selectedAction.value = `檔案管理器 - ${args.item.text}`
}
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
