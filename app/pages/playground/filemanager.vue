<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">File Manager</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion File Manager 提供完整的檔案管理介面，支援瀏覽、上傳、下載、複製、移動、重新命名等操作。
      </p>
    </div>

    <!-- Basic File Manager -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">基本檔案管理器</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">完整的檔案管理介面，此範例連接 Syncfusion 的示範 API。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <ejs-filemanager
          id="file-manager"
          :height="'450px'"
          :ajaxSettings="ajaxSettings"
          :view="'Details'"
          :toolbarSettings="toolbarSettings"
          :contextMenuSettings="contextMenuSettings"
          :navigationPaneSettings="navigationPaneSettings"
        />
      </div>
      <div class="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
        <p class="text-sm text-amber-800 dark:text-amber-200">
          <strong>注意：</strong>此範例使用 Syncfusion 的公開示範 API。實際專案中需配置您自己的後端服務來處理檔案操作。
        </p>
      </div>
    </section>

    <!-- Features -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">功能特點</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">📁 檔案瀏覽</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">大型圖示、詳細資料等多種檢視模式</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">✂️ 檔案操作</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">複製、剪下、貼上、刪除、重新命名</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">📤 上傳下載</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">支援檔案上傳和下載功能</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">🔍 搜尋功能</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">快速搜尋檔案和資料夾</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">🖱️ 拖放支援</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">拖放移動檔案和資料夾</p>
        </div>
        <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">📋 右鍵選單</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">自訂右鍵選單操作項目</p>
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
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">ajaxSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">AjaxSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">API 端點設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">view</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">'LargeIcons' | 'Details'</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">檢視模式</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">toolbarSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">ToolbarSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">工具列設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">contextMenuSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">ContextMenuSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">右鍵選單設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">navigationPaneSettings</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">NavigationPaneSettingsModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">導航面板設定</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Backend Integration -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">後端整合</h2>
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">File Manager 需要後端 API 支援以下操作：</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
          <code class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Read</code>
          <code class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Create</code>
          <code class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Delete</code>
          <code class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Rename</code>
          <code class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Copy</code>
          <code class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Move</code>
          <code class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Upload</code>
          <code class="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Download</code>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { FileManagerComponent as EjsFilemanager, NavigationPane, Toolbar, DetailsView } from '@syncfusion/ej2-vue-filemanager'

import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-inputs/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-splitbuttons/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'
import '@syncfusion/ej2-layouts/styles/material.css'
import '@syncfusion/ej2-grids/styles/material.css'
import '@syncfusion/ej2-vue-filemanager/styles/material.css'

provide('filemanager', [NavigationPane, Toolbar, DetailsView])

definePageMeta({ layout: 'playground' })

// Ajax settings - using Syncfusion's demo API
const ajaxSettings = {
  url: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations',
  getImageUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage',
  uploadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload',
  downloadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download'
}

const toolbarSettings = {
  items: ['NewFolder', 'Upload', 'Cut', 'Copy', 'Paste', 'Delete', 'Rename', 'Download', 'SortBy', 'Refresh', 'Selection', 'View', 'Details']
}

const contextMenuSettings = {
  file: ['Open', '|', 'Cut', 'Copy', '|', 'Delete', 'Rename', '|', 'Details'],
  folder: ['Open', '|', 'Cut', 'Copy', 'Paste', '|', 'Delete', 'Rename', '|', 'Details'],
  layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', 'Upload', '|', 'Details', '|', 'SelectAll']
}

const navigationPaneSettings = {
  visible: true
}
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
