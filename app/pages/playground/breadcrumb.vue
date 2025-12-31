<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Breadcrumb</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion Breadcrumb 提供麵包屑導航功能，幫助使用者了解當前頁面在網站階層結構中的位置，並能快速返回上層頁面。
      </p>
    </div>

    <!-- Basic Breadcrumb -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">基本麵包屑</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示基本的導航路徑結構。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-6">
        <ejs-breadcrumb :enableNavigation="false">
          <e-breadcrumb-items>
            <e-breadcrumb-item iconCss="e-icons e-home" text="首頁" url="#"></e-breadcrumb-item>
            <e-breadcrumb-item text="產品" url="#"></e-breadcrumb-item>
            <e-breadcrumb-item text="電子產品" url="#"></e-breadcrumb-item>
            <e-breadcrumb-item text="筆記型電腦" url="#"></e-breadcrumb-item>
          </e-breadcrumb-items>
        </ejs-breadcrumb>
      </div>
    </section>

    <!-- Breadcrumb with Icons -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">帶圖示的麵包屑</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">每個項目都配有圖示增強視覺識別。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-6">
        <ejs-breadcrumb :enableNavigation="false">
          <e-breadcrumb-items>
            <e-breadcrumb-item iconCss="e-icons e-home" text="首頁" url="#"></e-breadcrumb-item>
            <e-breadcrumb-item iconCss="e-icons e-folder" text="文件庫" url="#"></e-breadcrumb-item>
            <e-breadcrumb-item iconCss="e-icons e-folder-open" text="專案資料" url="#"></e-breadcrumb-item>
            <e-breadcrumb-item iconCss="e-icons e-file" text="報告.pdf" url="#"></e-breadcrumb-item>
          </e-breadcrumb-items>
        </ejs-breadcrumb>
      </div>
    </section>

    <!-- Breadcrumb with Custom Separator -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">自訂分隔符號</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">使用不同的分隔符號樣式。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-6 space-y-6">
        <!-- Arrow separator -->
        <div>
          <p class="text-sm text-gray-500 mb-2">箭頭分隔</p>
          <ejs-breadcrumb :enableNavigation="false" separatorTemplate="<span class='e-icons e-arrow-right'></span>">
            <e-breadcrumb-items>
              <e-breadcrumb-item text="首頁" url="#"></e-breadcrumb-item>
              <e-breadcrumb-item text="分類" url="#"></e-breadcrumb-item>
              <e-breadcrumb-item text="商品" url="#"></e-breadcrumb-item>
            </e-breadcrumb-items>
          </ejs-breadcrumb>
        </div>
        <!-- Dot separator -->
        <div>
          <p class="text-sm text-gray-500 mb-2">圓點分隔</p>
          <ejs-breadcrumb :enableNavigation="false" separatorTemplate="<span style='padding: 0 8px;'>•</span>">
            <e-breadcrumb-items>
              <e-breadcrumb-item text="首頁" url="#"></e-breadcrumb-item>
              <e-breadcrumb-item text="分類" url="#"></e-breadcrumb-item>
              <e-breadcrumb-item text="商品" url="#"></e-breadcrumb-item>
            </e-breadcrumb-items>
          </ejs-breadcrumb>
        </div>
        <!-- Slash separator -->
        <div>
          <p class="text-sm text-gray-500 mb-2">斜線分隔</p>
          <ejs-breadcrumb :enableNavigation="false" separatorTemplate="<span style='padding: 0 8px;'>/</span>">
            <e-breadcrumb-items>
              <e-breadcrumb-item text="首頁" url="#"></e-breadcrumb-item>
              <e-breadcrumb-item text="分類" url="#"></e-breadcrumb-item>
              <e-breadcrumb-item text="商品" url="#"></e-breadcrumb-item>
            </e-breadcrumb-items>
          </ejs-breadcrumb>
        </div>
      </div>
    </section>

    <!-- E-commerce Breadcrumb Example -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">電商網站範例</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">模擬電商網站的產品頁面導航。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-6">
        <div class="bg-gray-50 p-4 rounded-lg mb-4">
          <ejs-breadcrumb :enableNavigation="false">
            <e-breadcrumb-items>
              <e-breadcrumb-item iconCss="e-icons e-home" url="#"></e-breadcrumb-item>
              <e-breadcrumb-item text="電子產品" url="#"></e-breadcrumb-item>
              <e-breadcrumb-item text="電腦與平板" url="#"></e-breadcrumb-item>
              <e-breadcrumb-item text="筆記型電腦" url="#"></e-breadcrumb-item>
              <e-breadcrumb-item text="MacBook Pro 16吋" url="#"></e-breadcrumb-item>
            </e-breadcrumb-items>
          </ejs-breadcrumb>
        </div>
        <div class="text-center text-gray-500 text-sm">
          這是模擬電商網站產品頁面的麵包屑導航
        </div>
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
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">items</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">BreadcrumbItemModel[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">麵包屑項目陣列</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">enableNavigation</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">啟用導航功能</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">separatorTemplate</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">自訂分隔符號範本</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">maxItems</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">number</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">最大顯示項目數</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">overflowMode</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">BreadcrumbOverflowMode</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">溢位處理模式</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">常見應用場景</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🛒</div>
          <span class="text-sm font-medium">電商網站</span>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📁</div>
          <span class="text-sm font-medium">檔案管理</span>
        </div>
        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📚</div>
          <span class="text-sm font-medium">文件網站</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🏢</div>
          <span class="text-sm font-medium">企業入口</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  BreadcrumbComponent as EjsBreadcrumb,
  ItemsDirective as EBreadcrumbItems,
  ItemDirective as EBreadcrumbItem
} from '@syncfusion/ej2-vue-navigations'


definePageMeta({ layout: 'playground' })
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
