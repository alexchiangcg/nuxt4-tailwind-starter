<script setup lang="ts">
import {
  DocumentEditorContainerComponent as EjsDocumenteditorcontainer,
  Toolbar
} from '@syncfusion/ej2-vue-documenteditor'
import { provide, ref, onMounted } from 'vue'

definePageMeta({
  layout: 'playground'
})

provide('DocumentEditorContainer', [Toolbar])

const editorRef = ref<InstanceType<typeof EjsDocumenteditorcontainer> | null>(null)

// 服務 URL（用於伺服器端操作，如匯出 PDF）
// 注意：需要設定 Syncfusion Document Editor 服務才能使用完整功能
const serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/'

// 工具列項目設定
const toolbarItems = [
  'New',
  'Open',
  'Separator',
  'Undo',
  'Redo',
  'Separator',
  'Image',
  'Table',
  'Hyperlink',
  'Bookmark',
  'TableOfContents',
  'Separator',
  'Header',
  'Footer',
  'PageSetup',
  'PageNumber',
  'Break',
  'Separator',
  'Find',
  'Separator',
  'Comments',
  'TrackChanges',
  'Separator',
  'LocalClipboard',
  'RestrictEditing',
  'Separator',
  'FormFields',
  'UpdateFields'
]

// 插入範例文件內容
const insertSampleContent = () => {
  if (editorRef.value) {
    const editor = editorRef.value.ej2Instances.documentEditor
    editor.editor.insertText('Welcome to Syncfusion Document Editor!')
    editor.editor.insertText('\n\n')
    editor.editor.insertText('This is a powerful word processor component that allows you to create, edit, and view documents in your web application.')
    editor.editor.insertText('\n\n')
    editor.editor.insertText('Key Features:')
    editor.editor.insertText('\n')
    editor.editor.insertText('• Rich text formatting (bold, italic, underline)')
    editor.editor.insertText('\n')
    editor.editor.insertText('• Insert images and tables')
    editor.editor.insertText('\n')
    editor.editor.insertText('• Headers and footers')
    editor.editor.insertText('\n')
    editor.editor.insertText('• Page setup and numbering')
    editor.editor.insertText('\n')
    editor.editor.insertText('• Comments and track changes')
    editor.editor.insertText('\n')
    editor.editor.insertText('• Export to DOCX, PDF, and more')
  }
}

// 建立新文件
const createNewDocument = () => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.documentEditor.openBlank()
  }
}

// 匯出為 SFDT（Syncfusion Document Text）
const exportDocument = () => {
  if (editorRef.value) {
    const editor = editorRef.value.ej2Instances.documentEditor
    editor.save('Document', 'Sfdt')
  }
}

// 列印文件
const printDocument = () => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.documentEditor.print()
  }
}

// 事件處理
const onCreated = () => {
  console.log('Document Editor created')
}

const onDocumentChange = () => {
  console.log('Document changed')
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">DocumentEditor Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-documenteditor</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Full-Featured Document Editor -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Document Editor with Toolbar
        </h2>
        <p class="text-gray-600 mb-6">Full-featured word processor with toolbar</p>

        <!-- 自訂按鈕 -->
        <div class="flex gap-2 mb-4">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="insertSampleContent"
          >
            Insert Sample Text
          </button>
          <button
            class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            @click="createNewDocument"
          >
            New Document
          </button>
          <button
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            @click="exportDocument"
          >
            Export SFDT
          </button>
          <button
            class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
            @click="printDocument"
          >
            Print
          </button>
        </div>

        <div class="border rounded-lg overflow-hidden" style="height: 600px;">
          <ejs-documenteditorcontainer
            ref="editorRef"
            :enable-toolbar="true"
            :toolbar-items="toolbarItems"
            :service-url="serviceUrl"
            :enable-spell-check="true"
            :enable-comment="true"
            :enable-track-changes="true"
            :show-properties-pane="true"
            height="100%"
            @created="onCreated"
            @document-change="onDocumentChange"
          />
        </div>
      </section>

      <!-- 2. Key Features -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          2. Key Features
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Text Formatting</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Bold, Italic, Underline, Strikethrough</li>
              <li>• Font family, size, and color</li>
              <li>• Subscript and Superscript</li>
              <li>• Text highlighting</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Paragraph Formatting</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Alignment (left, center, right, justify)</li>
              <li>• Line spacing</li>
              <li>• Indentation</li>
              <li>• Bullets and numbering</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Insert Elements</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Images</li>
              <li>• Tables</li>
              <li>• Hyperlinks</li>
              <li>• Bookmarks</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Page Layout</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Headers and Footers</li>
              <li>• Page setup (size, margins)</li>
              <li>• Page numbers</li>
              <li>• Page breaks</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Collaboration</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Comments</li>
              <li>• Track changes</li>
              <li>• Restrict editing</li>
              <li>• Form fields</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Export Options</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• DOCX format</li>
              <li>• PDF format</li>
              <li>• SFDT format</li>
              <li>• Text format</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 3. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          3. API Reference
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableToolbar</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable the toolbar</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">toolbarItems</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Customize toolbar items</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">serviceUrl</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Server-side API URL for operations</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableSpellCheck</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable spell checking</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableComment</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable comments feature</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableTrackChanges</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable track changes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showPropertiesPane</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show properties pane</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">restrictEditing</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable restrict editing mode</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 4. Methods -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          4. Common Methods
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">openBlank()</td>
                <td class="px-4 py-3 text-sm text-gray-600">Create a new blank document</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">open(sfdt)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Open a document from SFDT string</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">save(filename, format)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Save document to specified format</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">print()</td>
                <td class="px-4 py-3 text-sm text-gray-600">Print the document</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">editor.insertText(text)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Insert text at cursor position</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">editor.insertImage(url)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Insert image from URL</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">editor.insertTable(rows, cols)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Insert table with specified dimensions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 5. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          5. Events
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">created</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when the component is created</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">documentChange</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when document content changes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">selectionChange</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when selection changes</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">contentChange</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered on any content modification</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">beforePaneSwitch</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered before switching panes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 6. Usage Notes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          6. Usage Notes
        </h2>
        <div class="space-y-4 text-gray-600">
          <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 class="font-semibold text-yellow-800 mb-2">Server-Side Requirements</h3>
            <p class="text-sm">Some features like opening DOCX files and exporting to PDF require a server-side API. Syncfusion provides a service URL for demo purposes, but for production, you should deploy your own Document Editor server.</p>
          </div>
          <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 class="font-semibold text-blue-800 mb-2">Licensing</h3>
            <p class="text-sm">Document Editor is a premium component. Ensure you have a valid Syncfusion license for production use.</p>
          </div>
          <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-2">Best Practices</h3>
            <ul class="text-sm space-y-1">
              <li>• Use DocumentEditorContainer for full-featured editing</li>
              <li>• Use DocumentEditor for custom implementations</li>
              <li>• Enable only required toolbar items to reduce complexity</li>
              <li>• Implement auto-save for better user experience</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


