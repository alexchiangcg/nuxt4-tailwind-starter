<script setup lang="ts">
import { NumericTextBoxComponent as EjsNumerictextbox } from '@syncfusion/ej2-vue-inputs'

definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">NumericTextBox 數值輸入框</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的數值輸入框</p>
        <div class="max-w-xs">
          <ejs-numerictextbox :value="100" placeholder="輸入數值" />
        </div>
      </section>

      <!-- 2. 數值格式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 數值格式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">format</code>
        </p>
        <div class="space-y-6 max-w-xs">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">數字格式 (n2 = 2位小數)</label>
            <ejs-numerictextbox :value="1234.56" format="n2" />
            <code class="text-xs text-gray-500">format: 'n2'</code>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">貨幣格式</label>
            <ejs-numerictextbox :value="1234.56" format="c2" />
            <code class="text-xs text-gray-500">format: 'c2'</code>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">百分比格式</label>
            <ejs-numerictextbox :value="0.5" format="p0" />
            <code class="text-xs text-gray-500">format: 'p0'</code>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">自訂格式（3位小數）</label>
            <ejs-numerictextbox :value="123.456" format="n3" />
            <code class="text-xs text-gray-500">format: 'n3'</code>
          </div>
        </div>
      </section>

      <!-- 3. 範圍限制 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 範圍限制</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">min</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">max</code>
        </p>
        <div class="space-y-6 max-w-xs">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">範圍：1 - 100</label>
            <ejs-numerictextbox :value="50" :min="1" :max="100" />
            <code class="text-xs text-gray-500">min: 1, max: 100</code>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">年齡輸入：0 - 120</label>
            <ejs-numerictextbox :value="25" :min="0" :max="120" placeholder="輸入年齡" />
            <code class="text-xs text-gray-500">min: 0, max: 120</code>
          </div>
        </div>
      </section>

      <!-- 4. 步進值 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 步進值</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">step</code>
        </p>
        <div class="space-y-6 max-w-xs">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">步進 1（預設）</label>
            <ejs-numerictextbox :value="10" :step="1" />
            <code class="text-xs text-gray-500">step: 1</code>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">步進 5</label>
            <ejs-numerictextbox :value="10" :step="5" />
            <code class="text-xs text-gray-500">step: 5</code>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">步進 0.1（小數）</label>
            <ejs-numerictextbox :value="1.5" :step="0.1" format="n1" />
            <code class="text-xs text-gray-500">step: 0.1</code>
          </div>
        </div>
      </section>

      <!-- 5. 小數精度 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 小數精度</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">decimals</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">validateDecimalOnType</code>
        </p>
        <div class="space-y-6 max-w-xs">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">限制 2 位小數（輸入時驗證）</label>
            <ejs-numerictextbox :value="10.12" :decimals="2" :validate-decimal-on-type="true" format="n2" />
            <code class="text-xs text-gray-500">decimals: 2, validateDecimalOnType: true</code>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">限制 3 位小數</label>
            <ejs-numerictextbox :value="10.123" :decimals="3" :validate-decimal-on-type="true" format="n3" />
            <code class="text-xs text-gray-500">decimals: 3</code>
          </div>
        </div>
      </section>

      <!-- 6. 浮動標籤 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 浮動標籤</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">floatLabelType</code>
        </p>
        <div class="space-y-6 max-w-xs">
          <div class="flex flex-col gap-2">
            <ejs-numerictextbox placeholder="Never（預設）" float-label-type="Never" />
            <code class="text-xs text-gray-500">floatLabelType: 'Never'</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-numerictextbox placeholder="Auto 浮動標籤" float-label-type="Auto" />
            <code class="text-xs text-gray-500">floatLabelType: 'Auto'</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-numerictextbox placeholder="Always 浮動標籤" float-label-type="Always" />
            <code class="text-xs text-gray-500">floatLabelType: 'Always'</code>
          </div>
        </div>
      </section>

      <!-- 7. 顯示/隱藏旋轉按鈕 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. 旋轉按鈕</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">showSpinButton</code>
        </p>
        <div class="space-y-6 max-w-xs">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">顯示旋轉按鈕（預設）</label>
            <ejs-numerictextbox :value="50" :show-spin-button="true" />
            <code class="text-xs text-gray-500">showSpinButton: true</code>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">隱藏旋轉按鈕</label>
            <ejs-numerictextbox :value="50" :show-spin-button="false" />
            <code class="text-xs text-gray-500">showSpinButton: false</code>
          </div>
        </div>
      </section>

      <!-- 8. 狀態 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. 狀態</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">readonly</code>
        </p>
        <div class="space-y-6 max-w-xs">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">正常</label>
            <ejs-numerictextbox :value="100" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">停用</label>
            <ejs-numerictextbox :value="100" :enabled="false" />
            <code class="text-xs text-gray-500">enabled: false</code>
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">唯讀</label>
            <ejs-numerictextbox :value="100" :readonly="true" />
            <code class="text-xs text-gray-500">readonly: true</code>
          </div>
        </div>
      </section>

      <!-- 9. 使用情境 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. 使用情境範例</h2>
        <p class="text-gray-600 mb-6">常見的數值輸入場景</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">商品價格</label>
            <ejs-numerictextbox :value="999" format="c0" :min="0" placeholder="輸入價格" float-label-type="Auto" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">商品數量</label>
            <ejs-numerictextbox :value="1" :min="1" :max="99" :step="1" placeholder="輸入數量" float-label-type="Auto" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">折扣百分比</label>
            <ejs-numerictextbox :value="0.1" format="p0" :min="0" :max="1" :step="0.05" placeholder="折扣" float-label-type="Auto" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">評分 (0-5)</label>
            <ejs-numerictextbox :value="4.5" format="n1" :min="0" :max="5" :step="0.5" placeholder="評分" float-label-type="Auto" />
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">數值</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">format</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">數值格式 (n, c, p)</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'n2'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">min</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">最小值</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">max</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">最大值</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">step</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">步進值</td>
                <td class="px-4 py-3 text-sm text-gray-600">1</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">decimals</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">小數位數</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showSpinButton</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">顯示旋轉按鈕</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">floatLabelType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">浮動標籤類型</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Never'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


