<script setup lang="ts">
import { ref, provide } from 'vue'
import {
  RichTextEditorComponent as EjsRichtexteditor,
  Toolbar, Link, Image, QuickToolbar, HtmlEditor, Table, PasteCleanup
} from '@syncfusion/ej2-vue-richtexteditor'

definePageMeta({
  layout: 'playground'
})

provide('richtexteditor', [Toolbar, Link, Image, QuickToolbar, HtmlEditor, Table, PasteCleanup])

const basicContent = ref(`<p>歡迎使用 <strong>Syncfusion RichTextEditor</strong>！</p>
<p>這是一個功能強大的 WYSIWYG 編輯器，支援：</p>
<ul>
  <li>文字格式化（粗體、斜體、底線等）</li>
  <li>項目符號和編號清單</li>
  <li>超連結和圖片插入</li>
  <li>表格建立與編輯</li>
</ul>`)

const minimalToolbar = {
  items: ['Bold', 'Italic', 'Underline', '|', 'Undo', 'Redo']
}

const fullToolbar = {
  items: [
    'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
    'Formats', 'Alignments', '|',
    'OrderedList', 'UnorderedList', 'Indent', 'Outdent', '|',
    'CreateLink', 'Image', 'CreateTable', '|',
    'SourceCode', 'Undo', 'Redo'
  ]
}

const popupToolbar = {
  type: 'MultiRow',
  items: [
    'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
    'Formats', 'Alignments', '|',
    'OrderedList', 'UnorderedList', '|',
    'CreateLink', 'Image', 'CreateTable', '|',
    'SourceCode', 'Undo', 'Redo'
  ]
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">RichTextEditor 富文本編輯器</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-richtexteditor</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的富文本編輯器</p>
        <ejs-richtexteditor :value="basicContent" :height="300" />
      </section>

      <!-- 2. 簡化工具列 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 簡化工具列</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">toolbarSettings</code>
        </p>
        <ejs-richtexteditor
          :value="'<p>這是一個簡化工具列的編輯器</p>'"
          :toolbarSettings="minimalToolbar"
          :height="200"
        />
      </section>

      <!-- 3. 完整工具列 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 完整工具列</h2>
        <p class="text-gray-600 mb-6">包含所有常用格式化功能</p>
        <ejs-richtexteditor
          :value="basicContent"
          :toolbarSettings="fullToolbar"
          :height="350"
        />
      </section>

      <!-- 4. 多行工具列 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 多行工具列</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">toolbarSettings.type: 'MultiRow'</code>
        </p>
        <ejs-richtexteditor
          :value="'<p>多行工具列讓所有工具一目了然</p>'"
          :toolbarSettings="popupToolbar"
          :height="300"
        />
      </section>

      <!-- 5. 唯讀模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 唯讀模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">readonly</code>
        </p>
        <ejs-richtexteditor
          :value="'<p><strong>這是唯讀內容</strong></p><p>使用者無法編輯此內容。</p>'"
          :readonly="true"
          :height="150"
        />
      </section>

      <!-- 6. Iframe 模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Iframe 模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">iframeSettings.enable</code>
        </p>
        <ejs-richtexteditor
          :value="'<p>此編輯器使用 iframe 模式渲染</p>'"
          :iframeSettings="{ enable: true }"
          :height="200"
        />
        <code class="text-xs text-gray-500 mt-2 block">Iframe 模式可隔離樣式，避免與頁面樣式衝突</code>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">編輯器 HTML 內容</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">toolbarSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">工具列設定</td>
                <td class="px-4 py-3 text-sm text-gray-600">預設工具列</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">height</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | number</td>
                <td class="px-4 py-3 text-sm text-gray-600">編輯器高度</td>
                <td class="px-4 py-3 text-sm text-gray-600">'auto'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">readonly</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否唯讀</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">iframeSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Iframe 模式設定</td>
                <td class="px-4 py-3 text-sm text-gray-600">{ enable: false }</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">placeholder</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">佔位符文字</td>
                <td class="px-4 py-3 text-sm text-gray-600">'輸入您的文字'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


