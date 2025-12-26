<script setup lang="ts">
import {
  ToolbarComponent as EjsToolbar,
  ItemsDirective as EItems,
  ItemDirective as EItem
} from '@syncfusion/ej2-vue-navigations'

definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Toolbar 工具列</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-navigations</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">帶圖示的工具列按鈕</p>
        <ejs-toolbar>
          <e-items>
            <e-item text="剪下" prefixIcon="e-icons e-cut" />
            <e-item text="複製" prefixIcon="e-icons e-copy" />
            <e-item text="貼上" prefixIcon="e-icons e-paste" />
            <e-item type="Separator" />
            <e-item text="粗體" prefixIcon="e-icons e-bold" />
            <e-item text="斜體" prefixIcon="e-icons e-italic" />
            <e-item text="底線" prefixIcon="e-icons e-underline" />
          </e-items>
        </ejs-toolbar>
      </section>

      <!-- 2. 純文字工具列 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 純文字工具列</h2>
        <p class="text-gray-600 mb-6">只顯示文字的工具列項目</p>
        <ejs-toolbar>
          <e-items>
            <e-item text="檔案" />
            <e-item text="編輯" />
            <e-item text="檢視" />
            <e-item type="Separator" />
            <e-item text="說明" />
          </e-items>
        </ejs-toolbar>
      </section>

      <!-- 3. 純圖示工具列 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 純圖示工具列</h2>
        <p class="text-gray-600 mb-6">只顯示圖示的工具列項目</p>
        <ejs-toolbar>
          <e-items>
            <e-item prefixIcon="e-icons e-cut" tooltipText="剪下" />
            <e-item prefixIcon="e-icons e-copy" tooltipText="複製" />
            <e-item prefixIcon="e-icons e-paste" tooltipText="貼上" />
            <e-item type="Separator" />
            <e-item prefixIcon="e-icons e-undo" tooltipText="復原" />
            <e-item prefixIcon="e-icons e-redo" tooltipText="重做" />
            <e-item type="Separator" />
            <e-item prefixIcon="e-icons e-zoom-in" tooltipText="放大" />
            <e-item prefixIcon="e-icons e-zoom-out" tooltipText="縮小" />
          </e-items>
        </ejs-toolbar>
      </section>

      <!-- 4. 溢位模式：彈出 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 溢位模式：彈出</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">overflowMode="Popup"</code>
        </p>
        <div class="max-w-md">
          <ejs-toolbar overflowMode="Popup">
            <e-items>
              <e-item text="剪下" prefixIcon="e-icons e-cut" />
              <e-item text="複製" prefixIcon="e-icons e-copy" />
              <e-item text="貼上" prefixIcon="e-icons e-paste" />
              <e-item type="Separator" />
              <e-item text="粗體" prefixIcon="e-icons e-bold" />
              <e-item text="斜體" prefixIcon="e-icons e-italic" />
              <e-item text="底線" prefixIcon="e-icons e-underline" />
              <e-item type="Separator" />
              <e-item text="左對齊" prefixIcon="e-icons e-align-left" />
              <e-item text="置中" prefixIcon="e-icons e-align-center" />
              <e-item text="右對齊" prefixIcon="e-icons e-align-right" />
            </e-items>
          </ejs-toolbar>
        </div>
        <code class="text-xs text-gray-500 mt-2 block">超出寬度的項目會顯示在彈出選單中</code>
      </section>

      <!-- 5. 溢位模式：捲動 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 溢位模式：捲動</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">overflowMode="Scrollable"</code>
        </p>
        <div class="max-w-md">
          <ejs-toolbar overflowMode="Scrollable">
            <e-items>
              <e-item text="剪下" prefixIcon="e-icons e-cut" />
              <e-item text="複製" prefixIcon="e-icons e-copy" />
              <e-item text="貼上" prefixIcon="e-icons e-paste" />
              <e-item type="Separator" />
              <e-item text="粗體" prefixIcon="e-icons e-bold" />
              <e-item text="斜體" prefixIcon="e-icons e-italic" />
              <e-item text="底線" prefixIcon="e-icons e-underline" />
              <e-item type="Separator" />
              <e-item text="左對齊" prefixIcon="e-icons e-align-left" />
              <e-item text="置中" prefixIcon="e-icons e-align-center" />
              <e-item text="右對齊" prefixIcon="e-icons e-align-right" />
            </e-items>
          </ejs-toolbar>
        </div>
        <code class="text-xs text-gray-500 mt-2 block">可水平捲動查看所有項目</code>
      </section>

      <!-- 6. 項目對齊 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 項目對齊</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">align</code>（Left / Center / Right）
        </p>
        <ejs-toolbar>
          <e-items>
            <e-item text="首頁" prefixIcon="e-icons e-home" align="Left" />
            <e-item text="搜尋" prefixIcon="e-icons e-search" align="Center" />
            <e-item text="設定" prefixIcon="e-icons e-settings" align="Right" />
            <e-item text="個人資料" prefixIcon="e-icons e-people" align="Right" />
          </e-items>
        </ejs-toolbar>
      </section>

      <!-- 7. 停用項目 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. 停用項目</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <ejs-toolbar>
          <e-items>
            <e-item text="剪下" prefixIcon="e-icons e-cut" />
            <e-item text="複製" prefixIcon="e-icons e-copy" />
            <e-item text="貼上" prefixIcon="e-icons e-paste" :disabled="true" />
            <e-item type="Separator" />
            <e-item text="復原" prefixIcon="e-icons e-undo" :disabled="true" />
            <e-item text="重做" prefixIcon="e-icons e-redo" />
          </e-items>
        </ejs-toolbar>
      </section>

      <!-- 8. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. API 參考</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">overflowMode</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">溢位模式（Scrollable/Popup/MultiRow/Extended）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Scrollable'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">text</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">項目顯示文字（Item 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">''</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">prefixIcon</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">項目前置圖示 CSS 類別（Item 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">''</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">項目類型（Button/Separator/Input）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Button'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">align</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">項目對齊方式（Left/Center/Right）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Left'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否停用項目（Item 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">tooltipText</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">項目提示文字（Item 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">''</td>
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
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import '@syncfusion/ej2-navigations/styles/material.css';
</style>
