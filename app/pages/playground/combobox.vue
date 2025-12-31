<script setup lang="ts">
import { ComboBoxComponent as EjsComboBox } from '@syncfusion/ej2-vue-dropdowns'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const sportsData = ['籃球', '足球', '網球', '高爾夫', '板球', '棒球', '游泳', '田徑']

const gameData = [
  { id: 'game1', name: '羽球' },
  { id: 'game2', name: '足球' },
  { id: 'game3', name: '網球' },
  { id: 'game4', name: '高爾夫' },
  { id: 'game5', name: '板球' }
]

const employeeData = [
  { empId: 1001, name: '張三', designation: '工程師', country: '台灣' },
  { empId: 1002, name: '李四', designation: '設計師', country: '台灣' },
  { empId: 1003, name: 'John', designation: '開發者', country: '美國' },
  { empId: 1004, name: 'Robert', designation: '產品經理', country: '英國' },
  { empId: 1005, name: 'Steven', designation: '測試工程師', country: '日本' }
]

const fields = { text: 'name', value: 'id' }
const empFields = { text: 'name', value: 'empId' }
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">ComboBox 組合框</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-dropdowns</code>
      </p>
      <p class="text-sm text-gray-600 mt-2">
        💡 與 DropDownList 的差異：ComboBox 允許使用者輸入自訂值，並具有自動完成功能
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的組合框元件</p>
        <div class="max-w-md">
          <ejs-combobox
            :dataSource="sportsData"
            placeholder="選擇運動項目"
          />
        </div>
      </section>

      <!-- 2. 資料綁定 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 資料綁定</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">dataSource</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">fields</code>
        </p>
        <div class="space-y-6">
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">陣列資料</label>
            <ejs-combobox
              :dataSource="sportsData"
              placeholder="選擇運動項目"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">物件陣列資料（使用 fields）</label>
            <ejs-combobox
              :dataSource="gameData"
              :fields="fields"
              placeholder="選擇遊戲"
            />
            <code class="text-xs text-gray-500 mt-2 block">fields: { text: 'name', value: 'id' }</code>
          </div>
        </div>
      </section>

      <!-- 3. 篩選功能 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 篩選功能</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowFiltering</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">filterType</code>
        </p>
        <div class="space-y-6">
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">啟用篩選（預設 Contains）</label>
            <ejs-combobox
              :dataSource="sportsData"
              :allowFiltering="true"
              placeholder="輸入以篩選運動項目"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">StartsWith 篩選</label>
            <ejs-combobox
              :dataSource="sportsData"
              :allowFiltering="true"
              filterType="StartsWith"
              placeholder="輸入開頭字元"
            />
          </div>
        </div>
      </section>

      <!-- 4. 自訂值 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 自訂值</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowCustom</code>
        </p>
        <div class="max-w-md">
          <label class="block text-sm font-medium text-gray-700 mb-2">允許輸入自訂值</label>
          <ejs-combobox
            :dataSource="sportsData"
            :allowCustom="true"
            placeholder="選擇或輸入運動項目"
          />
          <p class="text-xs text-gray-500 mt-2">您可以選擇清單中的項目，或輸入自己的值</p>
        </div>
      </section>

      <!-- 5. 預設值與唯讀 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 預設值與唯讀</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">value</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">readonly</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">enabled</code>
        </p>
        <div class="space-y-6">
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">預設值</label>
            <ejs-combobox
              :dataSource="sportsData"
              value="網球"
              placeholder="選擇運動項目"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">唯讀</label>
            <ejs-combobox
              :dataSource="sportsData"
              value="籃球"
              :readonly="true"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">停用</label>
            <ejs-combobox
              :dataSource="sportsData"
              value="足球"
              :enabled="false"
            />
          </div>
        </div>
      </section>

      <!-- 6. 分組 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 分組顯示</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">fields.groupBy</code>
        </p>
        <div class="max-w-md">
          <label class="block text-sm font-medium text-gray-700 mb-2">依國家分組</label>
          <ejs-combobox
            :dataSource="employeeData"
            :fields="{ text: 'name', value: 'empId', groupBy: 'country' }"
            placeholder="選擇員工"
          />
        </div>
      </section>

      <!-- 7. 自動完成 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. 自動完成</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">autofill</code>
        </p>
        <div class="max-w-md">
          <label class="block text-sm font-medium text-gray-700 mb-2">啟用自動填入</label>
          <ejs-combobox
            :dataSource="sportsData"
            :autofill="true"
            placeholder="輸入以自動完成"
          />
          <p class="text-xs text-gray-500 mt-2">開始輸入時會自動完成匹配的項目</p>
        </div>
      </section>

      <!-- 8. 使用情境範例 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. 使用情境範例</h2>
        <p class="text-gray-600 mb-6">常見的組合框使用場景</p>
        <div class="space-y-8">
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">搜尋引擎建議</label>
            <ejs-combobox
              :dataSource="['Vue.js 教學', 'Vue 3 Composition API', 'Nuxt 4', 'TypeScript', 'Tailwind CSS']"
              :allowFiltering="true"
              :autofill="true"
              placeholder="輸入搜尋關鍵字"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">城市選擇（允許自訂）</label>
            <ejs-combobox
              :dataSource="['台北', '新北', '桃園', '台中', '台南', '高雄']"
              :allowCustom="true"
              :allowFiltering="true"
              placeholder="選擇或輸入城市"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">員工選擇器</label>
            <ejs-combobox
              :dataSource="employeeData"
              :fields="{ text: 'name', value: 'empId', groupBy: 'country' }"
              :allowFiltering="true"
              placeholder="搜尋員工"
            />
          </div>
        </div>
      </section>

      <!-- 9. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. API 參考</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">Array | Object</td>
                <td class="px-4 py-3 text-sm text-gray-600">資料來源</td>
                <td class="px-4 py-3 text-sm text-gray-600">[]</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">欄位映射設定</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | number</td>
                <td class="px-4 py-3 text-sm text-gray-600">選中的值</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">placeholder</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">佔位符文字</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowFiltering</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">啟用篩選功能</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowCustom</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">允許自訂值</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">autofill</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">啟用自動填入</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">filterType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">篩選類型（'Contains' | 'StartsWith' | 'EndsWith'）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Contains'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否啟用</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">readonly</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否唯讀</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


