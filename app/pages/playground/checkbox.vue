<script setup lang="ts">
import { CheckBoxComponent as EjsCheckbox } from '@syncfusion/ej2-vue-buttons'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const isChecked = ref(true)
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">CheckBox 核取方塊</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-buttons</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的核取方塊</p>
        <div class="space-y-4">
          <ejs-checkbox label="未勾選" />
          <ejs-checkbox label="已勾選" :checked="true" />
        </div>
      </section>

      <!-- 2. 狀態 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 狀態</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">checked</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">indeterminate</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">disabled</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="未勾選狀態" :checked="false" />
            <code class="text-xs text-gray-500">checked: false</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="已勾選狀態" :checked="true" />
            <code class="text-xs text-gray-500">checked: true</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="不確定狀態" :indeterminate="true" />
            <code class="text-xs text-gray-500">indeterminate: true</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="停用狀態" :disabled="true" />
            <code class="text-xs text-gray-500">disabled: true</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="停用已勾選" :disabled="true" :checked="true" />
            <code class="text-xs text-gray-500">disabled + checked</code>
          </div>
        </div>
      </section>

      <!-- 3. 預定義樣式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 預定義樣式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">cssClass</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="Primary 主要" css-class="e-primary" :checked="true" />
            <code class="text-xs text-gray-500">cssClass: 'e-primary'</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="Success 成功" css-class="e-success" :checked="true" />
            <code class="text-xs text-gray-500">cssClass: 'e-success'</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="Info 資訊" css-class="e-info" :checked="true" />
            <code class="text-xs text-gray-500">cssClass: 'e-info'</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="Warning 警告" css-class="e-warning" :checked="true" />
            <code class="text-xs text-gray-500">cssClass: 'e-warning'</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="Danger 危險" css-class="e-danger" :checked="true" />
            <code class="text-xs text-gray-500">cssClass: 'e-danger'</code>
          </div>
        </div>
      </section>

      <!-- 4. 標籤位置 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 標籤位置</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">labelPosition</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="標籤在後（預設）" label-position="After" />
            <code class="text-xs text-gray-500">labelPosition: 'After'</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-checkbox label="標籤在前" label-position="Before" />
            <code class="text-xs text-gray-500">labelPosition: 'Before'</code>
          </div>
        </div>
      </section>

      <!-- 5. 使用情境 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 使用情境範例</h2>
        <p class="text-gray-600 mb-6">常見的核取方塊使用場景</p>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium mb-3">同意條款</h3>
            <ejs-checkbox label="我已閱讀並同意服務條款" />
          </div>
          <div>
            <h3 class="text-lg font-medium mb-3">訂閱選項</h3>
            <div class="space-y-2">
              <ejs-checkbox label="接收電子報" :checked="true" />
              <ejs-checkbox label="接收促銷通知" />
              <ejs-checkbox label="接收產品更新" :checked="true" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-3">功能設定</h3>
            <div class="space-y-2">
              <ejs-checkbox label="啟用深色模式" />
              <ejs-checkbox label="自動儲存" :checked="true" />
              <ejs-checkbox label="顯示通知" :checked="true" />
            </div>
          </div>
        </div>
      </section>

      <!-- 6. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. API 參考</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">label</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">核取方塊的標籤文字</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">checked</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否勾選</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">indeterminate</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">不確定狀態</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否停用</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">labelPosition</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">標籤位置 (Before / After)</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'After'</td>
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
      </section>
    </div>
  </div>
</template>

<style>
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
</style>
