<script setup lang="ts">
import { SliderComponent as EjsSlider } from '@syncfusion/ej2-vue-inputs'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const sliderValue = ref(30)
const rangeValue = ref([30, 70])
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Slider 滑桿</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的滑桿元件</p>
        <div class="space-y-8">
          <div>
            <ejs-slider :value="30" />
            <code class="text-xs text-gray-500 mt-2 block">預設值：30</code>
          </div>
        </div>
      </section>

      <!-- 2. 最小值、最大值、步進值 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 最小值、最大值、步進值</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">min</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">max</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">step</code>
        </p>
        <div class="space-y-8">
          <div>
            <ejs-slider :min="0" :max="100" :step="10" :value="50" />
            <code class="text-xs text-gray-500 mt-2 block">min: 0, max: 100, step: 10</code>
          </div>
          <div>
            <ejs-slider :min="10" :max="90" :step="5" :value="50" />
            <code class="text-xs text-gray-500 mt-2 block">min: 10, max: 90, step: 5</code>
          </div>
        </div>
      </section>

      <!-- 3. 範圍選擇 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 範圍選擇</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">type="Range"</code>
        </p>
        <div class="space-y-8">
          <div>
            <ejs-slider type="Range" :value="[30, 70]" />
            <code class="text-xs text-gray-500 mt-2 block">type: 'Range', value: [30, 70]</code>
          </div>
        </div>
      </section>

      <!-- 4. 垂直方向 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 垂直方向</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">orientation="Vertical"</code>
        </p>
        <div class="flex gap-8" style="height: 300px;">
          <div class="flex flex-col items-center gap-4">
            <ejs-slider orientation="Vertical" :value="30" />
            <code class="text-xs text-gray-500">垂直滑桿</code>
          </div>
          <div class="flex flex-col items-center gap-4">
            <ejs-slider orientation="Vertical" type="Range" :value="[30, 70]" />
            <code class="text-xs text-gray-500">垂直範圍滑桿</code>
          </div>
        </div>
      </section>

      <!-- 5. Tooltip 提示 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Tooltip 提示</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">tooltip</code>
        </p>
        <div class="space-y-8">
          <div>
            <ejs-slider
              :value="30"
              :tooltip="{ isVisible: true, placement: 'Before' }"
            />
            <code class="text-xs text-gray-500 mt-2 block">tooltip: { isVisible: true, placement: 'Before' }</code>
          </div>
          <div>
            <ejs-slider
              :value="50"
              :tooltip="{ isVisible: true, placement: 'After' }"
            />
            <code class="text-xs text-gray-500 mt-2 block">tooltip: { isVisible: true, placement: 'After' }</code>
          </div>
        </div>
      </section>

      <!-- 6. Ticks 刻度 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Ticks 刻度</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">ticks</code>
        </p>
        <div class="space-y-8">
          <div>
            <ejs-slider
              :value="30"
              :ticks="{ placement: 'Before', largeStep: 20, smallStep: 10, showSmallTicks: true }"
            />
            <code class="text-xs text-gray-500 mt-2 block">ticks: { placement: 'Before', largeStep: 20, smallStep: 10 }</code>
          </div>
          <div>
            <ejs-slider
              :value="50"
              :ticks="{ placement: 'After', largeStep: 25 }"
            />
            <code class="text-xs text-gray-500 mt-2 block">ticks: { placement: 'After', largeStep: 25 }</code>
          </div>
          <div>
            <ejs-slider
              :value="40"
              :ticks="{ placement: 'Both', largeStep: 20 }"
            />
            <code class="text-xs text-gray-500 mt-2 block">ticks: { placement: 'Both', largeStep: 20 }</code>
          </div>
        </div>
      </section>

      <!-- 7. 停用狀態 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. 停用狀態</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <div class="space-y-8">
          <div>
            <ejs-slider :value="30" :disabled="true" />
            <code class="text-xs text-gray-500 mt-2 block">disabled: true</code>
          </div>
        </div>
      </section>

      <!-- 8. 使用情境範例 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. 使用情境範例</h2>
        <p class="text-gray-600 mb-6">常見的滑桿使用場景</p>
        <div class="space-y-8">
          <div class="max-w-md">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">音量</span>
              <span class="text-sm text-gray-500">50%</span>
            </div>
            <ejs-slider
              :value="50"
              :tooltip="{ isVisible: true }"
            />
          </div>
          <div class="max-w-md">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">亮度</span>
              <span class="text-sm text-gray-500">75%</span>
            </div>
            <ejs-slider
              :value="75"
              :tooltip="{ isVisible: true }"
            />
          </div>
          <div class="max-w-md">
            <div class="flex items-center justify-between mb-2">
              <span class="font-medium">價格範圍</span>
              <span class="text-sm text-gray-500">$300 - $700</span>
            </div>
            <ejs-slider
              type="Range"
              :value="[300, 700]"
              :min="0"
              :max="1000"
              :step="10"
              :tooltip="{ isVisible: true }"
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">number | number[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">滑桿的值（範圍選擇時使用陣列）</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">min</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">最小值</td>
                <td class="px-4 py-3 text-sm text-gray-600">0</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">max</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">最大值</td>
                <td class="px-4 py-3 text-sm text-gray-600">100</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">step</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">步進值</td>
                <td class="px-4 py-3 text-sm text-gray-600">1</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">滑桿類型（'Default' | 'Range'）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Default'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">orientation</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">方向（'Horizontal' | 'Vertical'）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Horizontal'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">tooltip</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Tooltip 設定</td>
                <td class="px-4 py-3 text-sm text-gray-600">{ isVisible: false }</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">ticks</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">刻度設定</td>
                <td class="px-4 py-3 text-sm text-gray-600">{ placement: 'Before' }</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否停用</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


