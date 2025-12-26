<script setup lang="ts">
import { MultiSelectComponent as EjsMultiSelect, CheckBoxSelection } from '@syncfusion/ej2-vue-dropdowns'
import { provide, ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Provide CheckBoxSelection service
provide('multiselect', [CheckBoxSelection])

const sportsData = [
  { id: 'game1', name: '羽球' },
  { id: 'game2', name: '足球' },
  { id: 'game3', name: '網球' },
  { id: 'game4', name: '高爾夫' },
  { id: 'game5', name: '板球' },
  { id: 'game6', name: '手球' },
  { id: 'game7', name: '空手道' },
  { id: 'game8', name: '擊劍' },
  { id: 'game9', name: '拳擊' }
]

const countriesData = ['台灣', '日本', '韓國', '美國', '英國', '法國', '德國', '義大利']

const skillsData = [
  { skill: 'Vue.js', category: '前端' },
  { skill: 'React', category: '前端' },
  { skill: 'Angular', category: '前端' },
  { skill: 'Node.js', category: '後端' },
  { skill: 'Python', category: '後端' },
  { skill: 'Java', category: '後端' },
  { skill: 'TypeScript', category: '語言' },
  { skill: 'JavaScript', category: '語言' }
]

const fields = { text: 'name', value: 'id' }
const skillFields = { text: 'skill', value: 'skill', groupBy: 'category' }
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">MultiSelect 多選下拉選單</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-dropdowns</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的多選下拉選單</p>
        <div class="max-w-md">
          <ejs-multiselect
            :dataSource="countriesData"
            placeholder="選擇國家"
          />
        </div>
      </section>

      <!-- 2. 預選值 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 預選值</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">value</code>
        </p>
        <div class="max-w-md">
          <ejs-multiselect
            :dataSource="countriesData"
            :value="['台灣', '日本', '韓國']"
            placeholder="選擇國家"
          />
        </div>
      </section>

      <!-- 3. 顯示模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 顯示模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">mode</code>
        </p>
        <div class="space-y-6">
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">Box 模式（預設）</label>
            <ejs-multiselect
              :dataSource="countriesData"
              :value="['台灣', '日本']"
              mode="Box"
              placeholder="選擇國家"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">Delimiter 模式（逗號分隔）</label>
            <ejs-multiselect
              :dataSource="countriesData"
              :value="['台灣', '日本', '韓國']"
              mode="Delimiter"
              placeholder="選擇國家"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">Default 模式（僅顯示數量）</label>
            <ejs-multiselect
              :dataSource="countriesData"
              :value="['台灣', '日本', '韓國']"
              mode="Default"
              placeholder="選擇國家"
            />
          </div>
        </div>
      </section>

      <!-- 4. Checkbox 模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Checkbox 模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">mode="CheckBox"</code>
        </p>
        <div class="space-y-6">
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">基本 Checkbox 模式</label>
            <ejs-multiselect
              :dataSource="sportsData"
              :fields="fields"
              mode="CheckBox"
              placeholder="選擇運動項目"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">Checkbox 模式 + 全選</label>
            <ejs-multiselect
              :dataSource="sportsData"
              :fields="fields"
              mode="CheckBox"
              :showSelectAll="true"
              placeholder="選擇運動項目"
            />
          </div>
        </div>
      </section>

      <!-- 5. 選擇限制 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 選擇限制</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">maximumSelectionLength</code>
        </p>
        <div class="max-w-md">
          <label class="block text-sm font-medium text-gray-700 mb-2">最多選擇 3 項</label>
          <ejs-multiselect
            :dataSource="countriesData"
            :maximumSelectionLength="3"
            mode="Box"
            placeholder="最多選擇 3 個國家"
          />
          <p class="text-xs text-gray-500 mt-2">達到上限後無法繼續選擇</p>
        </div>
      </section>

      <!-- 6. 篩選功能 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 篩選功能</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowFiltering</code>
        </p>
        <div class="max-w-md">
          <label class="block text-sm font-medium text-gray-700 mb-2">啟用篩選</label>
          <ejs-multiselect
            :dataSource="countriesData"
            :allowFiltering="true"
            mode="Box"
            placeholder="輸入以篩選國家"
          />
        </div>
      </section>

      <!-- 7. 分組顯示 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. 分組顯示</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">fields.groupBy</code>
        </p>
        <div class="max-w-md">
          <label class="block text-sm font-medium text-gray-700 mb-2">依類別分組</label>
          <ejs-multiselect
            :dataSource="skillsData"
            :fields="skillFields"
            mode="Box"
            placeholder="選擇技能"
          />
        </div>
      </section>

      <!-- 8. 自訂分隔符號 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. 自訂分隔符號</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">delimiterChar</code>
        </p>
        <div class="space-y-6">
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">使用 " | " 分隔</label>
            <ejs-multiselect
              :dataSource="countriesData"
              :value="['台灣', '日本', '韓國']"
              mode="Delimiter"
              delimiterChar=" | "
              placeholder="選擇國家"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">使用 " ; " 分隔</label>
            <ejs-multiselect
              :dataSource="countriesData"
              :value="['台灣', '日本', '韓國']"
              mode="Delimiter"
              delimiterChar=" ; "
              placeholder="選擇國家"
            />
          </div>
        </div>
      </section>

      <!-- 9. 狀態 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. 狀態</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">readonly</code>
        </p>
        <div class="space-y-6">
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">停用</label>
            <ejs-multiselect
              :dataSource="countriesData"
              :value="['台灣', '日本']"
              :enabled="false"
              mode="Box"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">唯讀</label>
            <ejs-multiselect
              :dataSource="countriesData"
              :value="['台灣', '日本', '韓國']"
              :readonly="true"
              mode="Box"
            />
          </div>
        </div>
      </section>

      <!-- 10. 使用情境範例 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">10. 使用情境範例</h2>
        <p class="text-gray-600 mb-6">常見的多選下拉選單使用場景</p>
        <div class="space-y-8">
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">技能標籤</label>
            <ejs-multiselect
              :dataSource="skillsData"
              :fields="skillFields"
              :allowFiltering="true"
              mode="Box"
              placeholder="選擇您的技能"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">興趣選擇（最多 5 項）</label>
            <ejs-multiselect
              :dataSource="sportsData"
              :fields="fields"
              :maximumSelectionLength="5"
              mode="CheckBox"
              :showSelectAll="true"
              placeholder="選擇您的興趣"
            />
          </div>
          <div class="max-w-md">
            <label class="block text-sm font-medium text-gray-700 mb-2">目的地選擇</label>
            <ejs-multiselect
              :dataSource="countriesData"
              :allowFiltering="true"
              mode="Box"
              placeholder="選擇旅遊目的地"
            />
          </div>
        </div>
      </section>

      <!-- 11. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">11. API 參考</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">Array</td>
                <td class="px-4 py-3 text-sm text-gray-600">選中的值陣列</td>
                <td class="px-4 py-3 text-sm text-gray-600">[]</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">mode</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">顯示模式（'Box' | 'Delimiter' | 'Default' | 'CheckBox'）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Box'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">欄位映射設定</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">placeholder</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">佔位符文字</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">maximumSelectionLength</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">最大選擇數量</td>
                <td class="px-4 py-3 text-sm text-gray-600">1000</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowFiltering</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">啟用篩選功能</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showSelectAll</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">顯示全選選項（CheckBox 模式）</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">delimiterChar</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">分隔符號（Delimiter 模式）</td>
                <td class="px-4 py-3 text-sm text-gray-600">','</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否啟用</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
              <tr>
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

<style>
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-inputs/styles/material.css';
@import '@syncfusion/ej2-vue-dropdowns/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
</style>
