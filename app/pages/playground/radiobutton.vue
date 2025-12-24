<script setup lang="ts">
import { RadioButtonComponent as EjsRadiobutton } from '@syncfusion/ej2-vue-buttons'

definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">RadioButton 單選按鈕</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-buttons</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">使用 name 屬性將單選按鈕分組</p>
        <div class="space-y-2">
          <ejs-radiobutton label="選項一" name="basic" value="1" :checked="true" />
          <ejs-radiobutton label="選項二" name="basic" value="2" />
          <ejs-radiobutton label="選項三" name="basic" value="3" />
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
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <ejs-radiobutton label="未選取狀態" name="state1" :checked="false" />
            <code class="text-xs text-gray-500">checked: false</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-radiobutton label="已選取狀態" name="state2" :checked="true" />
            <code class="text-xs text-gray-500">checked: true</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-radiobutton label="停用狀態" name="state3" :disabled="true" />
            <code class="text-xs text-gray-500">disabled: true</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-radiobutton label="停用已選取" name="state4" :disabled="true" :checked="true" />
            <code class="text-xs text-gray-500">disabled + checked</code>
          </div>
        </div>
      </section>

      <!-- 3. 標籤位置 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 標籤位置</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">labelPosition</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <ejs-radiobutton label="標籤在後（預設）" name="pos1" label-position="After" :checked="true" />
            <code class="text-xs text-gray-500">labelPosition: 'After'</code>
          </div>
          <div class="flex flex-col gap-2">
            <ejs-radiobutton label="標籤在前" name="pos2" label-position="Before" :checked="true" />
            <code class="text-xs text-gray-500">labelPosition: 'Before'</code>
          </div>
        </div>
      </section>

      <!-- 4. 使用情境 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 使用情境範例</h2>
        <p class="text-gray-600 mb-6">常見的單選按鈕使用場景</p>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium mb-3">性別選擇</h3>
            <div class="flex gap-6">
              <ejs-radiobutton label="男" name="gender" value="male" :checked="true" />
              <ejs-radiobutton label="女" name="gender" value="female" />
              <ejs-radiobutton label="其他" name="gender" value="other" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-3">付款方式</h3>
            <div class="space-y-2">
              <ejs-radiobutton label="信用卡" name="payment" value="credit" :checked="true" />
              <ejs-radiobutton label="銀行轉帳" name="payment" value="bank" />
              <ejs-radiobutton label="貨到付款" name="payment" value="cod" />
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium mb-3">配送方式</h3>
            <div class="space-y-2">
              <ejs-radiobutton label="標準配送（3-5 天）" name="shipping" value="standard" :checked="true" />
              <ejs-radiobutton label="快速配送（1-2 天）" name="shipping" value="express" />
              <ejs-radiobutton label="超急件（當日送達）" name="shipping" value="sameday" />
            </div>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">label</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">單選按鈕的標籤文字</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">name</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">群組名稱</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">選項值</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">checked</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否選取</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否停用</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">labelPosition</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">標籤位置 (Before / After)</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'After'</td>
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
