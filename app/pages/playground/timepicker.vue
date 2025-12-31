<script setup lang="ts">
import { ref } from 'vue'
import { TimePickerComponent as EjsTimepicker } from '@syncfusion/ej2-vue-calendars'

definePageMeta({
  layout: 'playground'
})

const selectedTime = ref<Date | null>(null)
const presetTime = ref(new Date())
presetTime.value.setHours(9, 0, 0)
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">TimePicker 時間選擇器</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-calendars</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的時間選擇器</p>
        <div class="max-w-xs">
          <ejs-timepicker placeholder="選擇時間" />
        </div>
      </section>

      <!-- 2. 預設值 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 預設值</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">value</code>
        </p>
        <div class="max-w-xs">
          <ejs-timepicker :value="presetTime" placeholder="選擇時間" />
        </div>
      </section>

      <!-- 3. 時間格式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 時間格式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">format</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">12 小時制</label>
            <ejs-timepicker format="hh:mm a" placeholder="hh:mm a" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">24 小時制</label>
            <ejs-timepicker format="HH:mm" placeholder="HH:mm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">含秒數</label>
            <ejs-timepicker format="HH:mm:ss" placeholder="HH:mm:ss" />
          </div>
        </div>
      </section>

      <!-- 4. 時間間隔 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 時間間隔</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">step</code>（分鐘）
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">15 分鐘間隔</label>
            <ejs-timepicker :step="15" placeholder="每 15 分鐘" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">30 分鐘間隔</label>
            <ejs-timepicker :step="30" placeholder="每 30 分鐘" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">60 分鐘間隔</label>
            <ejs-timepicker :step="60" placeholder="每 60 分鐘" />
          </div>
        </div>
      </section>

      <!-- 5. 時間範圍限制 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 時間範圍限制</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">min</code> /
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">max</code>
        </p>
        <div class="max-w-xs">
          <label class="block text-sm font-medium text-gray-700 mb-1">營業時間（09:00 - 18:00）</label>
          <ejs-timepicker
            min="09:00"
            max="18:00"
            placeholder="選擇營業時間"
          />
        </div>
      </section>

      <!-- 6. 停用狀態 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 停用與唯讀</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code> /
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">readonly</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">停用</label>
            <ejs-timepicker :enabled="false" :value="presetTime" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">唯讀</label>
            <ejs-timepicker :readonly="true" :value="presetTime" />
          </div>
        </div>
      </section>

      <!-- 7. 浮動標籤 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. 浮動標籤</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">floatLabelType</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <ejs-timepicker floatLabelType="Auto" placeholder="自動浮動" />
          </div>
          <div>
            <ejs-timepicker floatLabelType="Always" placeholder="始終浮動" />
          </div>
          <div>
            <ejs-timepicker floatLabelType="Never" placeholder="不浮動" />
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
                <td class="px-4 py-3 text-sm text-gray-600">Date</td>
                <td class="px-4 py-3 text-sm text-gray-600">選取的時間值</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">format</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">時間顯示格式</td>
                <td class="px-4 py-3 text-sm text-gray-600">'HH:mm'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">step</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">時間間隔（分鐘）</td>
                <td class="px-4 py-3 text-sm text-gray-600">30</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">min</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date | string</td>
                <td class="px-4 py-3 text-sm text-gray-600">最小可選時間</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">max</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date | string</td>
                <td class="px-4 py-3 text-sm text-gray-600">最大可選時間</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">floatLabelType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">浮動標籤類型（Auto/Always/Never）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Never'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


