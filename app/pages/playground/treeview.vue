<script setup lang="ts">
import { TreeViewComponent as EjsTreeview } from '@syncfusion/ej2-vue-navigations'

definePageMeta({
  layout: 'playground'
})

// 基本階層資料
const hierarchicalData = [
  {
    id: 'af', name: '非洲',
    children: [
      { id: 'nga', name: '奈及利亞' },
      { id: 'egy', name: '埃及' },
      { id: 'zaf', name: '南非' }
    ]
  },
  {
    id: 'as', name: '亞洲', expanded: true,
    children: [
      { id: 'chn', name: '中國' },
      { id: 'ind', name: '印度' },
      { id: 'jpn', name: '日本' },
      { id: 'twn', name: '台灣' }
    ]
  },
  {
    id: 'eu', name: '歐洲',
    children: [
      { id: 'dnk', name: '丹麥' },
      { id: 'fin', name: '芬蘭' },
      { id: 'aut', name: '奧地利' }
    ]
  },
  {
    id: 'na', name: '北美洲',
    children: [
      { id: 'usa', name: '美國' },
      { id: 'can', name: '加拿大' },
      { id: 'mex', name: '墨西哥' }
    ]
  }
]

const basicFields = {
  dataSource: hierarchicalData,
  id: 'id',
  text: 'name',
  child: 'children'
}

// 帶圖示的資料
const iconData = [
  {
    id: '01', name: '本機磁碟 (C:)', icon: 'folder', expanded: true,
    children: [
      {
        id: '01-01', name: 'Program Files', icon: 'folder',
        children: [
          { id: '01-01-01', name: 'Git', icon: 'folder' },
          { id: '01-01-02', name: 'Node.js', icon: 'folder' },
          { id: '01-01-03', name: 'VS Code', icon: 'folder' }
        ]
      },
      {
        id: '01-02', name: 'Users', icon: 'folder', expanded: true,
        children: [
          { id: '01-02-01', name: 'Documents', icon: 'folder' },
          { id: '01-02-02', name: 'Downloads', icon: 'folder' },
          { id: '01-02-03', name: 'Pictures', icon: 'folder' }
        ]
      },
      {
        id: '01-03', name: 'Windows', icon: 'folder',
        children: [
          { id: '01-03-01', name: 'System32', icon: 'folder' },
          { id: '01-03-02', name: 'Fonts', icon: 'folder' }
        ]
      }
    ]
  },
  {
    id: '02', name: '本機磁碟 (D:)', icon: 'folder',
    children: [
      {
        id: '02-01', name: 'Projects', icon: 'folder',
        children: [
          { id: '02-01-01', name: 'vue-app', icon: 'folder' },
          { id: '02-01-02', name: 'react-app', icon: 'folder' }
        ]
      }
    ]
  }
]

const iconFields = {
  dataSource: iconData,
  id: 'id',
  text: 'name',
  child: 'children',
  iconCss: 'icon'
}

// 核取方塊資料
const checkboxData = [
  {
    id: 1, name: '前端技術', expanded: true,
    children: [
      { id: 2, name: 'Vue.js', isChecked: true },
      { id: 3, name: 'React' },
      { id: 4, name: 'Angular' },
      { id: 5, name: 'Svelte' }
    ]
  },
  {
    id: 6, name: '後端技術', expanded: true,
    children: [
      { id: 7, name: 'Node.js', isChecked: true },
      { id: 8, name: 'Python' },
      { id: 9, name: 'Java' },
      { id: 10, name: 'Go' }
    ]
  },
  {
    id: 11, name: '資料庫',
    children: [
      { id: 12, name: 'PostgreSQL' },
      { id: 13, name: 'MongoDB' },
      { id: 14, name: 'Redis' }
    ]
  }
]

const checkboxFields = {
  dataSource: checkboxData,
  id: 'id',
  text: 'name',
  child: 'children',
  isChecked: 'isChecked'
}

// 拖放資料
const dragDropData = [
  {
    id: 1, name: '待辦事項', expanded: true,
    children: [
      { id: 2, name: '完成專案報告' },
      { id: 3, name: '審查程式碼' },
      { id: 4, name: '更新文檔' }
    ]
  },
  {
    id: 5, name: '進行中', expanded: true,
    children: [
      { id: 6, name: '開發新功能' },
      { id: 7, name: '修復 Bug' }
    ]
  },
  {
    id: 8, name: '已完成', expanded: true,
    children: [
      { id: 9, name: '部署到生產環境' },
      { id: 10, name: '撰寫測試案例' }
    ]
  }
]

const dragDropFields = {
  dataSource: dragDropData,
  id: 'id',
  text: 'name',
  child: 'children'
}

// 節點編輯資料
const editData = [
  {
    id: '01', name: '專案資料夾', expanded: true,
    children: [
      { id: '01-01', name: 'src' },
      { id: '01-02', name: 'components' },
      { id: '01-03', name: 'utils' }
    ]
  },
  {
    id: '02', name: '設定檔',
    children: [
      { id: '02-01', name: 'config.json' },
      { id: '02-02', name: 'settings.yaml' }
    ]
  }
]

const editFields = {
  dataSource: editData,
  id: 'id',
  text: 'name',
  child: 'children'
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">TreeView 樹狀檢視</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-navigations</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">顯示階層式資料結構</p>
        <div class="max-w-md border border-gray-300 rounded p-4">
          <ejs-treeview id="basic-tree" :fields="basicFields" />
        </div>
      </section>

      <!-- 2. 帶圖示的樹狀檢視 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 帶圖示的樹狀檢視</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">iconCss</code>
        </p>
        <div class="max-w-md border border-gray-300 rounded p-4">
          <ejs-treeview id="icon-tree" :fields="iconFields" />
        </div>
      </section>

      <!-- 3. 核取方塊模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 核取方塊模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">showCheckBox</code>
        </p>
        <div class="max-w-md border border-gray-300 rounded p-4">
          <ejs-treeview
            id="checkbox-tree"
            :fields="checkboxFields"
            :showCheckBox="true"
          />
        </div>
        <code class="text-xs text-gray-500 mt-2 block">可勾選節點，父節點會根據子節點狀態自動更新</code>
      </section>

      <!-- 4. 拖放功能 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 拖放功能</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">allowDragAndDrop</code>
        </p>
        <div class="max-w-md border border-gray-300 rounded p-4">
          <ejs-treeview
            id="dragdrop-tree"
            :fields="dragDropFields"
            :allowDragAndDrop="true"
          />
        </div>
        <code class="text-xs text-gray-500 mt-2 block">拖動節點可重新排列位置</code>
      </section>

      <!-- 5. 多選拖放 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 多選拖放</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">allowMultiSelection</code> +
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowDragAndDrop</code>
        </p>
        <div class="max-w-md border border-gray-300 rounded p-4">
          <ejs-treeview
            id="multiselect-tree"
            :fields="dragDropFields"
            :allowDragAndDrop="true"
            :allowMultiSelection="true"
          />
        </div>
        <code class="text-xs text-gray-500 mt-2 block">按住 Ctrl 點擊可多選，按住 Shift 可範圍選擇</code>
      </section>

      <!-- 6. 節點編輯 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 節點編輯</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">allowEditing</code>
        </p>
        <div class="max-w-md border border-gray-300 rounded p-4">
          <ejs-treeview
            id="edit-tree"
            :fields="editFields"
            :allowEditing="true"
          />
        </div>
        <code class="text-xs text-gray-500 mt-2 block">雙擊節點或選取後按 F2 可編輯節點名稱</code>
      </section>

      <!-- 7. 展開全部 / 收合全部 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. 全部展開</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">expandOn</code>
        </p>
        <div class="space-y-4">
          <div class="max-w-md border border-gray-300 rounded p-4">
            <h3 class="text-lg font-medium mb-2">點擊展開（預設）</h3>
            <ejs-treeview
              id="click-expand-tree"
              :fields="basicFields"
              expandOn="Click"
            />
          </div>
          <div class="max-w-md border border-gray-300 rounded p-4">
            <h3 class="text-lg font-medium mb-2">雙擊展開</h3>
            <ejs-treeview
              id="dblclick-expand-tree"
              :fields="basicFields"
              expandOn="DblClick"
            />
          </div>
        </div>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">FieldsSettingsModel</td>
                <td class="px-4 py-3 text-sm text-gray-600">資料欄位映射設定</td>
                <td class="px-4 py-3 text-sm text-gray-600">-</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showCheckBox</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否顯示核取方塊</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowDragAndDrop</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否允許拖放</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowMultiSelection</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否允許多選</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowEditing</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否允許編輯節點</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">expandOn</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">展開觸發方式（Click/DblClick/None）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Click'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style>

.e-treeview .e-list-icon.folder {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffc107"><path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
