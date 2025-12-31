<script setup lang="ts">
import { SplitButtonComponent as EjsSplitButton } from '@syncfusion/ej2-vue-splitbuttons'
import { enableRipple } from '@syncfusion/ej2-base'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

enableRipple(true)

const basicItems = [
  { text: '剪下' },
  { text: '複製' },
  { text: '貼上' }
]

const fileItems = [
  { text: '新增檔案' },
  { text: '開啟檔案' },
  { text: '儲存檔案' },
  { text: '另存新檔' }
]

const actionItems = [
  { text: '編輯' },
  { text: '刪除' },
  { text: '分享' },
  { text: '下載' }
]

const exportItems = [
  { text: '匯出為 PDF' },
  { text: '匯出為 Excel' },
  { text: '匯出為 CSV' },
  { text: '匯出為 JSON' }
]

const lastAction = ref('尚未執行任何動作')

function handleClick() {
  lastAction.value = '主按鈕被點擊'
}

function handleSelect(args: any) {
  lastAction.value = `選擇了：${args.item.text}`
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">SplitButton 分割按鈕</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-splitbuttons</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的分割按鈕</p>
        <div class="flex gap-4">
          <ejs-splitbutton
            :items="basicItems"
            content="貼上"
          />
        </div>
      </section>

      <!-- 2. 不同內容 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 不同內容</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">content</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">items</code>
        </p>
        <div class="flex gap-4 flex-wrap">
          <ejs-splitbutton
            :items="fileItems"
            content="新增"
          />
          <ejs-splitbutton
            :items="actionItems"
            content="動作"
          />
          <ejs-splitbutton
            :items="exportItems"
            content="匯出"
          />
        </div>
      </section>

      <!-- 3. 圖標按鈕 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 圖標按鈕</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">iconCss</code>
        </p>
        <div class="flex gap-4">
          <ejs-splitbutton
            :items="basicItems"
            content="剪貼簿"
            iconCss="e-icons e-paste"
          />
        </div>
      </section>

      <!-- 4. 僅圖標 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 僅圖標</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">iconCss</code>（不設定 content）
        </p>
        <div class="flex gap-4">
          <ejs-splitbutton
            :items="actionItems"
            iconCss="e-icons e-settings"
          />
        </div>
      </section>

      <!-- 5. 停用狀態 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 停用狀態</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <div class="flex gap-4">
          <ejs-splitbutton
            :items="basicItems"
            content="貼上"
          />
          <ejs-splitbutton
            :items="basicItems"
            content="貼上（停用）"
            :disabled="true"
          />
        </div>
      </section>

      <!-- 6. 停用特定選項 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 停用特定選項</h2>
        <p class="text-gray-600 mb-6">
          在 items 中設定
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled: true</code>
        </p>
        <div class="flex gap-4">
          <ejs-splitbutton
            :items="[
              { text: '剪下' },
              { text: '複製', disabled: true },
              { text: '貼上' }
            ]"
            content="編輯"
          />
        </div>
      </section>

      <!-- 7. 分隔符號 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibent text-gray-800 mb-2">7. 分隔符號</h2>
        <p class="text-gray-600 mb-6">
          在 items 中設定
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">separator: true</code>
        </p>
        <div class="flex gap-4">
          <ejs-splitbutton
            :items="[
              { text: '剪下' },
              { text: '複製' },
              { separator: true },
              { text: '貼上' },
              { text: '全選' }
            ]"
            content="編輯"
          />
        </div>
      </section>

      <!-- 8. 事件處理 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. 事件處理</h2>
        <p class="text-gray-600 mb-6">
          事件：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">@click</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">@select</code>
        </p>
        <div class="space-y-4">
          <div class="flex gap-4">
            <ejs-splitbutton
              :items="actionItems"
              content="動作"
              @click="handleClick"
              @select="handleSelect"
            />
          </div>
          <div class="bg-gray-50 p-4 rounded border border-gray-200">
            <p class="text-sm font-medium text-gray-700">最後執行的動作：</p>
            <p class="text-sm text-gray-600 mt-1">{{ lastAction }}</p>
          </div>
        </div>
      </section>

      <!-- 9. 使用情境範例 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. 使用情境範例</h2>
        <p class="text-gray-600 mb-6">常見的分割按鈕使用場景</p>
        <div class="space-y-8">
          <div>
            <h3 class="text-sm font-medium mb-3">檔案操作</h3>
            <div class="flex gap-3">
              <ejs-splitbutton
                :items="[
                  { text: '新增文字檔' },
                  { text: '新增資料夾' },
                  { text: '新增專案' }
                ]"
                content="新增"
                iconCss="e-icons e-plus"
              />
              <ejs-splitbutton
                :items="[
                  { text: '儲存' },
                  { text: '另存新檔' },
                  { text: '儲存所有檔案' }
                ]"
                content="儲存"
                iconCss="e-icons e-save"
              />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-3">文件編輯</h3>
            <div class="flex gap-3">
              <ejs-splitbutton
                :items="[
                  { text: '剪下' },
                  { text: '複製' },
                  { separator: true },
                  { text: '貼上' },
                  { text: '特殊貼上' }
                ]"
                content="編輯"
              />
              <ejs-splitbutton
                :items="[
                  { text: '復原上一步' },
                  { text: '復原多步' },
                  { separator: true },
                  { text: '清除復原歷史' }
                ]"
                content="復原"
              />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-3">資料匯出</h3>
            <div class="flex gap-3">
              <ejs-splitbutton
                :items="exportItems"
                content="匯出為 PDF"
                iconCss="e-icons e-export"
              />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-3">工具列</h3>
            <div class="flex gap-3">
              <ejs-splitbutton
                :items="[
                  { text: '偏好設定' },
                  { text: '快捷鍵' },
                  { separator: true },
                  { text: '重設設定' }
                ]"
                iconCss="e-icons e-settings"
              />
              <ejs-splitbutton
                :items="[
                  { text: '使用說明' },
                  { text: '快速導覽' },
                  { separator: true },
                  { text: '關於' }
                ]"
                iconCss="e-icons e-help"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- 10. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">10. API 參考</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">content</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">主按鈕文字</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">items</td>
                <td class="px-4 py-3 text-sm text-gray-600">Array</td>
                <td class="px-4 py-3 text-sm text-gray-600">下拉選項陣列</td>
                <td class="px-4 py-3 text-sm text-gray-600">[]</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">iconCss</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">圖標 CSS 類別</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否停用</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">isPrimary</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否為主要按鈕樣式</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">自訂 CSS 類別</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Item 屬性</h3>
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
                  <td class="px-4 py-3 text-sm font-mono text-gray-900">text</td>
                  <td class="px-4 py-3 text-sm text-gray-600">string</td>
                  <td class="px-4 py-3 text-sm text-gray-600">選項文字</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-4 py-3 text-sm font-mono text-gray-900">iconCss</td>
                  <td class="px-4 py-3 text-sm text-gray-600">string</td>
                  <td class="px-4 py-3 text-sm text-gray-600">選項圖標</td>
                </tr>
                <tr>
                  <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                  <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                  <td class="px-4 py-3 text-sm text-gray-600">是否停用此選項</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-4 py-3 text-sm font-mono text-gray-900">separator</td>
                  <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                  <td class="px-4 py-3 text-sm text-gray-600">是否為分隔符號</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mt-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">事件</h3>
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">事件</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">說明</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-4 py-3 text-sm font-mono text-gray-900">click</td>
                  <td class="px-4 py-3 text-sm text-gray-600">主按鈕被點擊時觸發</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-4 py-3 text-sm font-mono text-gray-900">select</td>
                  <td class="px-4 py-3 text-sm text-gray-600">下拉選項被選擇時觸發</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


