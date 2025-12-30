<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Stepper</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion Stepper 提供步驟指示器功能，用於引導使用者完成多步驟流程，支援水平/垂直方向、圖示、標籤等設定。
      </p>
    </div>

    <!-- Basic Stepper -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">基本步驟指示器</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示基本的水平步驟指示器。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-6">
        <ejs-stepper id="basic-stepper" :activeStep="basicActiveStep">
          <e-steps>
            <e-step label="購物車" />
            <e-step label="地址" />
            <e-step label="付款" />
            <e-step label="確認" />
          </e-steps>
        </ejs-stepper>
        <div class="flex justify-center gap-4 mt-6">
          <button
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
            :disabled="basicActiveStep === 0"
            @click="basicActiveStep--"
          >
            上一步
          </button>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            :disabled="basicActiveStep === 3"
            @click="basicActiveStep++"
          >
            下一步
          </button>
        </div>
      </div>
    </section>

    <!-- Stepper with Icons -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">帶圖示的步驟指示器</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">每個步驟配有圖示增強視覺效果。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-6">
        <ejs-stepper id="icon-stepper" :activeStep="iconActiveStep">
          <e-steps>
            <e-step label="帳號" iconCss="e-icons e-user" />
            <e-step label="個人資料" iconCss="e-icons e-edit" />
            <e-step label="設定" iconCss="e-icons e-settings" />
            <e-step label="完成" iconCss="e-icons e-check" />
          </e-steps>
        </ejs-stepper>
        <div class="flex justify-center gap-4 mt-6">
          <button
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
            :disabled="iconActiveStep === 0"
            @click="iconActiveStep--"
          >
            上一步
          </button>
          <button
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            :disabled="iconActiveStep === 3"
            @click="iconActiveStep++"
          >
            下一步
          </button>
        </div>
      </div>
    </section>

    <!-- Vertical Stepper -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">垂直步驟指示器</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">垂直排列的步驟指示器，適合較多步驟的流程。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-6">
        <div class="flex">
          <div class="w-64">
            <ejs-stepper id="vertical-stepper" :activeStep="verticalActiveStep" orientation="Vertical">
              <e-steps>
                <e-step label="需求分析" text="1" />
                <e-step label="系統設計" text="2" />
                <e-step label="開發實作" text="3" />
                <e-step label="測試驗收" text="4" />
                <e-step label="部署上線" text="5" />
              </e-steps>
            </ejs-stepper>
          </div>
          <div class="flex-1 pl-8">
            <div class="bg-gray-50 rounded-lg p-4">
              <h3 class="font-semibold text-lg mb-2">{{ verticalSteps[verticalActiveStep].title }}</h3>
              <p class="text-gray-600">{{ verticalSteps[verticalActiveStep].description }}</p>
            </div>
            <div class="flex gap-4 mt-4">
              <button
                class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
                :disabled="verticalActiveStep === 0"
                @click="verticalActiveStep--"
              >
                上一步
              </button>
              <button
                class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
                :disabled="verticalActiveStep === 4"
                @click="verticalActiveStep++"
              >
                下一步
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Registration Form -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">互動式註冊流程</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">模擬完整的多步驟註冊流程。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-6">
        <ejs-stepper id="form-stepper" :activeStep="formActiveStep">
          <e-steps>
            <e-step label="基本資料" iconCss="e-icons e-user" />
            <e-step label="聯絡方式" iconCss="e-icons e-phone" />
            <e-step label="帳號設定" iconCss="e-icons e-lock" />
            <e-step label="完成註冊" iconCss="e-icons e-check-mark" />
          </e-steps>
        </ejs-stepper>

        <!-- Form Content -->
        <div class="mt-8 max-w-md mx-auto">
          <!-- Step 1: Basic Info -->
          <div v-if="formActiveStep === 0" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
              <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="請輸入姓名" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">生日</label>
              <input type="date" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>

          <!-- Step 2: Contact -->
          <div v-if="formActiveStep === 1" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="example@email.com" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">電話</label>
              <input type="tel" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="0912-345-678" />
            </div>
          </div>

          <!-- Step 3: Account -->
          <div v-if="formActiveStep === 2" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">使用者名稱</label>
              <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="請輸入使用者名稱" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">密碼</label>
              <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="請輸入密碼" />
            </div>
          </div>

          <!-- Step 4: Complete -->
          <div v-if="formActiveStep === 3" class="text-center py-8">
            <div class="text-6xl mb-4">🎉</div>
            <h3 class="text-xl font-bold text-green-600 mb-2">註冊成功！</h3>
            <p class="text-gray-600">歡迎加入我們的平台</p>
          </div>
        </div>

        <div class="flex justify-center gap-4 mt-8">
          <button
            v-if="formActiveStep > 0 && formActiveStep < 3"
            class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            @click="formActiveStep--"
          >
            上一步
          </button>
          <button
            v-if="formActiveStep < 3"
            class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            @click="formActiveStep++"
          >
            {{ formActiveStep === 2 ? '完成註冊' : '下一步' }}
          </button>
          <button
            v-if="formActiveStep === 3"
            class="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            @click="formActiveStep = 0"
          >
            重新開始
          </button>
        </div>
      </div>
    </section>

    <!-- API Reference -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">API 參考</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">屬性</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">類型</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">說明</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">activeStep</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">number</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">當前啟用的步驟索引</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">orientation</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">方向（Horizontal/Vertical）</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">label</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">步驟標籤</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">iconCss</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">步驟圖示 CSS 類別</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">text</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">string</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">步驟文字</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">常見應用場景</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📝</div>
          <span class="text-sm font-medium">註冊流程</span>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🛒</div>
          <span class="text-sm font-medium">結帳流程</span>
        </div>
        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📋</div>
          <span class="text-sm font-medium">表單嚮導</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🎯</div>
          <span class="text-sm font-medium">任務進度</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  StepperComponent as EjsStepper,
  StepsDirective as ESteps,
  StepDirective as EStep
} from '@syncfusion/ej2-vue-navigations'

import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'

definePageMeta({ layout: 'playground' })

// Basic Stepper
const basicActiveStep = ref(0)

// Icon Stepper
const iconActiveStep = ref(0)

// Vertical Stepper
const verticalActiveStep = ref(0)
const verticalSteps = [
  { title: '需求分析', description: '收集並分析專案需求，定義功能規格與系統目標。' },
  { title: '系統設計', description: '設計系統架構、資料庫結構與介面原型。' },
  { title: '開發實作', description: '根據設計規格進行程式開發與功能實作。' },
  { title: '測試驗收', description: '執行單元測試、整合測試，確保系統品質。' },
  { title: '部署上線', description: '將系統部署到生產環境，進行監控與維護。' }
]

// Form Stepper
const formActiveStep = ref(0)
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
