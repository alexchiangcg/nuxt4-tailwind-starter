<script setup lang="ts">
import { ProgressBarComponent as EjsProgressBar } from '@syncfusion/ej2-vue-progressbar'

definePageMeta({
  layout: 'playground'
})

const animation = {
  enable: true,
  duration: 2000,
  delay: 0
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">ProgressBar 進度條</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-progressbar</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 - 線性 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法 - 線性進度條</h2>
        <p class="text-gray-600 mb-6">預設的線性進度條</p>
        <div class="space-y-6">
          <div>
            <ejs-progressbar
              type="Linear"
              :value="40"
            />
            <code class="text-xs text-gray-500 mt-2 block">value: 40</code>
          </div>
          <div>
            <ejs-progressbar
              type="Linear"
              :value="75"
            />
            <code class="text-xs text-gray-500 mt-2 block">value: 75</code>
          </div>
        </div>
      </section>

      <!-- 2. 圓形進度條 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 圓形進度條</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">type="Circular"</code>
        </p>
        <div class="flex gap-8">
          <div class="flex flex-col items-center gap-2">
            <ejs-progressbar
              type="Circular"
              :value="60"
            />
            <code class="text-xs text-gray-500">60%</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-progressbar
              type="Circular"
              :value="100"
            />
            <code class="text-xs text-gray-500">100%</code>
          </div>
        </div>
      </section>

      <!-- 3. 顯示進度值 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 顯示進度值</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">showProgressValue</code>
        </p>
        <div class="space-y-8">
          <div>
            <h3 class="text-sm font-medium mb-2">線性進度條</h3>
            <ejs-progressbar
              type="Linear"
              :value="65"
              :showProgressValue="true"
            />
          </div>
          <div class="flex gap-8">
            <div class="flex flex-col items-center gap-2">
              <ejs-progressbar
                type="Circular"
                :value="45"
                :showProgressValue="true"
              />
              <code class="text-xs text-gray-500">顯示百分比</code>
            </div>
            <div class="flex flex-col items-center gap-2">
              <ejs-progressbar
                type="Circular"
                :value="85"
                :showProgressValue="true"
              />
              <code class="text-xs text-gray-500">85%</code>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. 動畫效果 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 動畫效果</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">animation</code>
        </p>
        <div class="space-y-8">
          <div>
            <h3 class="text-sm font-medium mb-2">線性動畫</h3>
            <ejs-progressbar
              type="Linear"
              :value="80"
              :animation="animation"
              :showProgressValue="true"
            />
            <code class="text-xs text-gray-500 mt-2 block">animation: { enable: true, duration: 2000, delay: 0 }</code>
          </div>
          <div class="flex gap-8">
            <div class="flex flex-col items-center gap-2">
              <ejs-progressbar
                type="Circular"
                :value="90"
                :animation="animation"
                :showProgressValue="true"
              />
              <code class="text-xs text-gray-500">圓形動畫</code>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. 範圍設定 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 範圍設定</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">minimum</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">maximum</code>
        </p>
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium mb-2">自訂範圍（10-90）</h3>
            <ejs-progressbar
              type="Linear"
              :minimum="10"
              :maximum="90"
              :value="50"
              :showProgressValue="true"
              :trackThickness="24"
              :progressThickness="24"
              :labelStyle="{ color: '#ffffff' }"
            />
            <code class="text-xs text-gray-500 mt-2 block">minimum: 10, maximum: 90, value: 50</code>
          </div>
        </div>
      </section>

      <!-- 6. 粗細設定 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 粗細設定</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">trackThickness</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">progressThickness</code>
        </p>
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium mb-2">細線（thickness: 4）</h3>
            <ejs-progressbar
              type="Linear"
              :value="60"
              :trackThickness="4"
              :progressThickness="4"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">中等（thickness: 12）</h3>
            <ejs-progressbar
              type="Linear"
              :value="60"
              :trackThickness="12"
              :progressThickness="12"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">粗線（thickness: 24）</h3>
            <ejs-progressbar
              type="Linear"
              :value="60"
              :trackThickness="24"
              :progressThickness="24"
              :showProgressValue="true"
              :labelStyle="{ color: '#ffffff' }"
            />
          </div>
        </div>
      </section>

      <!-- 7. 圓形進度條大小 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. 圓形進度條大小</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">height</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">width</code>
        </p>
        <div class="flex gap-8 items-end">
          <div class="flex flex-col items-center gap-2">
            <ejs-progressbar
              type="Circular"
              :value="70"
              :showProgressValue="true"
              height="80px"
              width="80px"
            />
            <code class="text-xs text-gray-500">80x80</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-progressbar
              type="Circular"
              :value="70"
              :showProgressValue="true"
              height="120px"
              width="120px"
            />
            <code class="text-xs text-gray-500">120x120</code>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-progressbar
              type="Circular"
              :value="70"
              :showProgressValue="true"
              height="160px"
              width="160px"
            />
            <code class="text-xs text-gray-500">160x160</code>
          </div>
        </div>
      </section>

      <!-- 8. 不同進度狀態 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. 不同進度狀態</h2>
        <p class="text-gray-600 mb-6">展示不同的進度階段</p>
        <div class="space-y-6">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium">開始</span>
              <span class="text-sm text-gray-500">10%</span>
            </div>
            <ejs-progressbar
              type="Linear"
              :value="10"
              :showProgressValue="true"
            />
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium">進行中</span>
              <span class="text-sm text-gray-500">45%</span>
            </div>
            <ejs-progressbar
              type="Linear"
              :value="45"
              :showProgressValue="true"
            />
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium">接近完成</span>
              <span class="text-sm text-gray-500">85%</span>
            </div>
            <ejs-progressbar
              type="Linear"
              :value="85"
              :showProgressValue="true"
            />
          </div>
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium">完成</span>
              <span class="text-sm text-gray-500">100%</span>
            </div>
            <ejs-progressbar
              type="Linear"
              :value="100"
              :showProgressValue="true"
            />
          </div>
        </div>
      </section>

      <!-- 9. 使用情境範例 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. 使用情境範例</h2>
        <p class="text-gray-600 mb-6">常見的進度條使用場景</p>
        <div class="space-y-8">
          <div class="max-w-md">
            <h3 class="text-sm font-medium mb-2">檔案上傳進度</h3>
            <ejs-progressbar
              type="Linear"
              :value="67"
              :showProgressValue="true"
              :animation="animation"
              :trackThickness="20"
              :progressThickness="20"
              :labelStyle="{ color: '#ffffff' }"
            />
            <p class="text-xs text-gray-500 mt-2">正在上傳 document.pdf (2.3 MB / 3.4 MB)</p>
          </div>
          <div class="max-w-md">
            <h3 class="text-sm font-medium mb-2">技能熟練度</h3>
            <div class="space-y-4">
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm">Vue.js</span>
                  <span class="text-sm text-gray-500">90%</span>
                </div>
                <ejs-progressbar
                  type="Linear"
                  :value="90"
                  :trackThickness="8"
                  :progressThickness="8"
                />
              </div>
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm">TypeScript</span>
                  <span class="text-sm text-gray-500">75%</span>
                </div>
                <ejs-progressbar
                  type="Linear"
                  :value="75"
                  :trackThickness="8"
                  :progressThickness="8"
                />
              </div>
              <div>
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm">Node.js</span>
                  <span class="text-sm text-gray-500">60%</span>
                </div>
                <ejs-progressbar
                  type="Linear"
                  :value="60"
                  :trackThickness="8"
                  :progressThickness="8"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-4">專案完成度</h3>
            <div class="flex gap-8">
              <div class="flex flex-col items-center gap-2">
                <ejs-progressbar
                  type="Circular"
                  :value="35"
                  :showProgressValue="true"
                  :animation="animation"
                  height="120px"
                  width="120px"
                />
                <span class="text-sm text-gray-600">專案 A</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <ejs-progressbar
                  type="Circular"
                  :value="78"
                  :showProgressValue="true"
                  :animation="animation"
                  height="120px"
                  width="120px"
                />
                <span class="text-sm text-gray-600">專案 B</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <ejs-progressbar
                  type="Circular"
                  :value="100"
                  :showProgressValue="true"
                  :animation="animation"
                  height="120px"
                  width="120px"
                />
                <span class="text-sm text-gray-600">專案 C</span>
              </div>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">進度條類型（'Linear' | 'Circular'）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Linear'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">進度值</td>
                <td class="px-4 py-3 text-sm text-gray-600">0</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">minimum</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">最小值</td>
                <td class="px-4 py-3 text-sm text-gray-600">0</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">maximum</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">最大值</td>
                <td class="px-4 py-3 text-sm text-gray-600">100</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showProgressValue</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">顯示進度值</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">trackThickness</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">軌道粗細</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">progressThickness</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">進度條粗細</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">animation</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">動畫設定</td>
                <td class="px-4 py-3 text-sm text-gray-600">{ enable: false }</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">height</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">高度（圓形進度條）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'100%'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">width</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">寬度（圓形進度條）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'100%'</td>
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
@import '@syncfusion/ej2-vue-progressbar/styles/material.css';
</style>
