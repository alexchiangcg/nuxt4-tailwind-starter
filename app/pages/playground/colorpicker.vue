<script setup lang="ts">
import { ref } from 'vue'
import { ColorPickerComponent as EjsColorpicker } from '@syncfusion/ej2-vue-inputs'

definePageMeta({
  layout: 'playground'
})

const selectedColor = ref('#1976d2')

const handleChange = (args: { currentValue: { hex: string } }) => {
  selectedColor.value = args.currentValue.hex
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">ColorPicker 顏色選擇器</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的顏色選擇器（Picker 模式）</p>
        <div class="flex items-center gap-4">
          <ejs-colorpicker value="#1976d2" />
          <span class="text-gray-500">點擊按鈕開啟顏色選擇器</span>
        </div>
      </section>

      <!-- 2. 調色盤模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 調色盤模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">mode="Palette"</code>
        </p>
        <div class="flex items-center gap-4">
          <ejs-colorpicker mode="Palette" value="#4caf50" />
          <span class="text-gray-500">從預設調色盤中選擇顏色</span>
        </div>
      </section>

      <!-- 3. 內嵌模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 內嵌模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">inline</code>
        </p>
        <div class="flex gap-8">
          <div>
            <h3 class="text-lg font-medium mb-2">Picker 內嵌</h3>
            <ejs-colorpicker :inline="true" :showButtons="false" />
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2">Palette 內嵌</h3>
            <ejs-colorpicker :inline="true" mode="Palette" :showButtons="false" :modeSwitcher="false" />
          </div>
        </div>
      </section>

      <!-- 4. 禁用透明度 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 禁用透明度</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">enableOpacity</code>
        </p>
        <div class="flex items-center gap-8">
          <div>
            <h3 class="text-lg font-medium mb-2">啟用透明度（預設）</h3>
            <ejs-colorpicker :enableOpacity="true" value="#ff5722" />
          </div>
          <div>
            <h3 class="text-lg font-medium mb-2">禁用透明度</h3>
            <ejs-colorpicker :enableOpacity="false" value="#ff5722" />
          </div>
        </div>
      </section>

      <!-- 5. 無模式切換 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 無模式切換</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">modeSwitcher</code>
        </p>
        <div class="flex items-center gap-4">
          <ejs-colorpicker :modeSwitcher="false" value="#9c27b0" />
          <span class="text-gray-500">隱藏 Picker/Palette 切換按鈕</span>
        </div>
      </section>

      <!-- 6. 預設調色盤顏色 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 自訂預設顏色</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">presetColors</code>
        </p>
        <div>
          <ejs-colorpicker
            mode="Palette"
            :modeSwitcher="false"
            :showButtons="false"
            :inline="true"
            :presetColors="{
              'custom': ['#FF0000', '#FF4500', '#FFA500', '#FFD700', '#FFFF00', '#9ACD32', '#008000', '#00CED1', '#0000FF', '#8A2BE2', '#800080', '#FF1493']
            }"
          />
        </div>
      </section>

      <!-- 7. 取得選取的顏色 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. 取得選取的顏色</h2>
        <p class="text-gray-600 mb-6">
          事件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">change</code>
        </p>
        <div class="flex items-center gap-4">
          <ejs-colorpicker :value="selectedColor" @change="handleChange" />
          <div class="flex items-center gap-2">
            <div
              class="w-10 h-10 rounded border border-gray-300"
              :style="{ backgroundColor: selectedColor }"
            />
            <span class="font-mono">{{ selectedColor }}</span>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">選取的顏色值</td>
                <td class="px-4 py-3 text-sm text-gray-600">'#008000ff'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">mode</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">顯示模式（Picker/Palette）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Picker'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">inline</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否內嵌顯示</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableOpacity</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否啟用透明度選擇</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">modeSwitcher</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否顯示模式切換器</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showButtons</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否顯示控制按鈕</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
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
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import '@syncfusion/ej2-splitbuttons/styles/material.css';
@import '@syncfusion/ej2-inputs/styles/material.css';
</style>
