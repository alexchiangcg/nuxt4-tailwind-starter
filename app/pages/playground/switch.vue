<script setup lang="ts">
import { SwitchComponent as EjsSwitch } from '@syncfusion/ej2-vue-buttons'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const isOn = ref(true)
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Switch 切換開關</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-buttons</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的開關切換元件</p>
        <div class="flex gap-8">
          <div class="flex flex-col items-center gap-2">
            <ejs-switch />
            <code class="text-xs text-gray-500">關閉狀態</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-switch :checked="true" />
            <code class="text-xs text-gray-500">開啟狀態</code>
          </div>
        </div>
      </section>

      <!-- 2. 狀態 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 狀態</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">checked</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">disabled</code>
        </p>
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <ejs-switch :checked="false" />
            <span class="text-sm text-gray-700">關閉</span>
            <code class="text-xs text-gray-500">checked: false</code>
          </div>
          <div class="flex items-center gap-4">
            <ejs-switch :checked="true" />
            <span class="text-sm text-gray-700">開啟</span>
            <code class="text-xs text-gray-500">checked: true</code>
          </div>
          <div class="flex items-center gap-4">
            <ejs-switch :disabled="true" />
            <span class="text-sm text-gray-700">停用（關閉）</span>
            <code class="text-xs text-gray-500">disabled: true</code>
          </div>
          <div class="flex items-center gap-4">
            <ejs-switch :checked="true" :disabled="true" />
            <span class="text-sm text-gray-700">停用（開啟）</span>
            <code class="text-xs text-gray-500">disabled + checked</code>
          </div>
        </div>
      </section>

      <!-- 3. 自訂標籤 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 自訂標籤</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">onLabel</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">offLabel</code>
        </p>
        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <ejs-switch on-label="開" off-label="關" :checked="true" />
            <code class="text-xs text-gray-500">onLabel: '開', offLabel: '關'</code>
          </div>
          <div class="flex items-center gap-4">
            <ejs-switch on-label="是" off-label="否" />
            <code class="text-xs text-gray-500">onLabel: '是', offLabel: '否'</code>
          </div>
          <div class="flex items-center gap-4">
            <ejs-switch on-label="ON" off-label="OFF" :checked="true" />
            <code class="text-xs text-gray-500">onLabel: 'ON', offLabel: 'OFF'</code>
          </div>
        </div>
      </section>

      <!-- 4. 使用情境 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 使用情境範例</h2>
        <p class="text-gray-600 mb-6">常見的開關使用場景</p>
        <div class="space-y-6">
          <div class="flex items-center justify-between max-w-md">
            <div>
              <h3 class="font-medium">深色模式</h3>
              <p class="text-sm text-gray-500">切換為深色主題</p>
            </div>
            <ejs-switch :checked="false" />
          </div>
          <div class="flex items-center justify-between max-w-md">
            <div>
              <h3 class="font-medium">推播通知</h3>
              <p class="text-sm text-gray-500">接收推播通知訊息</p>
            </div>
            <ejs-switch :checked="true" />
          </div>
          <div class="flex items-center justify-between max-w-md">
            <div>
              <h3 class="font-medium">自動更新</h3>
              <p class="text-sm text-gray-500">自動下載並安裝更新</p>
            </div>
            <ejs-switch :checked="true" />
          </div>
          <div class="flex items-center justify-between max-w-md">
            <div>
              <h3 class="font-medium">WiFi</h3>
              <p class="text-sm text-gray-500">啟用無線網路連線</p>
            </div>
            <ejs-switch :checked="true" on-label="開" off-label="關" />
          </div>
          <div class="flex items-center justify-between max-w-md">
            <div>
              <h3 class="font-medium">飛航模式</h3>
              <p class="text-sm text-gray-500">停用所有無線連線</p>
            </div>
            <ejs-switch :checked="false" on-label="開" off-label="關" />
          </div>
        </div>
      </section>

      <!-- 5. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. API 參考</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">checked</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">開關是否開啟</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否停用</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">onLabel</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">開啟時的標籤文字</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">offLabel</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">關閉時的標籤文字</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">自訂 CSS 類別</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
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
</style>
