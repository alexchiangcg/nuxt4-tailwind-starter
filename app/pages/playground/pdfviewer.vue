<script setup lang="ts">
import { PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer'
import { provide } from 'vue'

definePageMeta({
  layout: 'playground'
})

// PDF Viewer 需要伺服器端服務來處理 PDF
// 使用 Syncfusion 提供的公開服務端點作為示範
const serviceUrl = 'https://services.syncfusion.com/vue/production/api/pdfviewer'

// 範例 PDF 文件路徑
const documentPath = 'PDF_Succinctly.pdf'

provide('PdfViewer', [
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner
])
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">PDF Viewer 檢視器</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-pdfviewer</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本 PDF 檢視器 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 完整功能 PDF 檢視器</h2>
        <p class="text-gray-600 mb-6">包含工具列、縮放、導航、書籤、縮圖等完整功能</p>
        <div class="h-[700px] border border-gray-300 rounded">
          <ejs-pdfviewer
            id="pdfViewer1"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath"
            height="100%"
          />
        </div>
      </section>

      <!-- 2. 功能說明 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. 主要功能</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 class="font-semibold text-blue-800">Magnification</h3>
            <p class="text-sm text-blue-600">縮放功能：放大、縮小、適合頁面寬度</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg border border-green-200">
            <h3 class="font-semibold text-green-800">Navigation</h3>
            <p class="text-sm text-green-600">頁面導航：跳頁、上下頁切換</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 class="font-semibold text-purple-800">TextSelection</h3>
            <p class="text-sm text-purple-600">文字選取與複製功能</p>
          </div>
          <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 class="font-semibold text-yellow-800">TextSearch</h3>
            <p class="text-sm text-yellow-600">全文搜尋與關鍵字高亮</p>
          </div>
          <div class="p-4 bg-red-50 rounded-lg border border-red-200">
            <h3 class="font-semibold text-red-800">Annotation</h3>
            <p class="text-sm text-red-600">註解功能：高亮、底線、刪除線、便條</p>
          </div>
          <div class="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <h3 class="font-semibold text-indigo-800">Print</h3>
            <p class="text-sm text-indigo-600">列印 PDF 文件</p>
          </div>
          <div class="p-4 bg-pink-50 rounded-lg border border-pink-200">
            <h3 class="font-semibold text-pink-800">BookmarkView</h3>
            <p class="text-sm text-pink-600">書籤面板：快速跳轉至書籤位置</p>
          </div>
          <div class="p-4 bg-teal-50 rounded-lg border border-teal-200">
            <h3 class="font-semibold text-teal-800">ThumbnailView</h3>
            <p class="text-sm text-teal-600">縮圖預覽：快速導航頁面</p>
          </div>
          <div class="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h3 class="font-semibold text-orange-800">FormFields</h3>
            <p class="text-sm text-orange-600">表單欄位填寫功能</p>
          </div>
        </div>
      </section>

      <!-- 3. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. API 參考</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">serviceUrl</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">PDF 服務端點 URL（必要）</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">documentPath</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">PDF 文件路徑或名稱</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableToolbar</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否顯示工具列（預設 true）</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableNavigation</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否啟用導航功能</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableMagnification</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否啟用縮放功能</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enablePrint</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否啟用列印功能</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">height</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | number</td>
                <td class="px-4 py-3 text-sm text-gray-600">檢視器高度</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 4. 注意事項 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. 注意事項</h2>
        <div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h3 class="font-semibold text-amber-800 mb-2">伺服器端服務</h3>
          <p class="text-sm text-amber-700 mb-2">
            PDF Viewer 需要伺服器端服務來處理 PDF 文件。本範例使用 Syncfusion 提供的公開服務端點。
          </p>
          <p class="text-sm text-amber-700">
            在正式環境中，建議自行部署 PDF 服務，可使用 ASP.NET Core 或 Node.js 後端。
          </p>
        </div>
      </section>
    </div>
  </div>
</template>


