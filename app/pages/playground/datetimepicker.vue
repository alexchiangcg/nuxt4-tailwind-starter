<script setup lang="ts">
import { ref } from 'vue'
import { DateTimePickerComponent as EjsDatetimepicker } from '@syncfusion/ej2-vue-calendars'

definePageMeta({
  layout: 'playground'
})

const selectedDateTime = ref<Date | null>(null)
const presetDateTime = ref(new Date())

const minDate = new Date()
const maxDate = new Date()
maxDate.setMonth(maxDate.getMonth() + 3)
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">DateTimePicker 日期時間選擇器</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-calendars</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的日期時間選擇器</p>
        <div class="max-w-xs">
          <ejs-datetimepicker placeholder="選擇日期和時間" />
        </div>
      </section>

      <!-- 2. 預設值 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 預設值</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">value</code>
        </p>
        <div class="max-w-xs">
          <ejs-datetimepicker :value="presetDateTime" placeholder="選擇日期和時間" />
        </div>
      </section>

      <!-- 3. 格式設定 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 格式設定</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">format</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">完整格式</label>
            <ejs-datetimepicker format="yyyy/MM/dd HH:mm" placeholder="yyyy/MM/dd HH:mm" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">12 小時制</label>
            <ejs-datetimepicker format="yyyy-MM-dd hh:mm a" placeholder="yyyy-MM-dd hh:mm a" />
          </div>
        </div>
      </section>

      <!-- 4. 日期範圍限制 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 日期範圍限制</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">min</code> /
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">max</code>
        </p>
        <div class="max-w-xs">
          <label class="block text-sm font-medium text-gray-700 mb-1">今天起三個月內</label>
          <ejs-datetimepicker
            :min="minDate"
            :max="maxDate"
            placeholder="選擇日期時間"
          />
        </div>
      </section>

      <!-- 5. 時間間隔 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 時間間隔</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">step</code>（分鐘）
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">15 分鐘間隔</label>
            <ejs-datetimepicker :step="15" placeholder="每 15 分鐘" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">60 分鐘間隔</label>
            <ejs-datetimepicker :step="60" placeholder="每 60 分鐘" />
          </div>
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
            <ejs-datetimepicker :enabled="false" :value="presetDateTime" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">唯讀</label>
            <ejs-datetimepicker :readonly="true" :value="presetDateTime" />
          </div>
        </div>
      </section>

      <!-- 7. 第一天設定 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. 第一天設定</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">firstDayOfWeek</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">星期日為第一天（預設）</label>
            <ejs-datetimepicker :firstDayOfWeek="0" placeholder="選擇日期時間" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">星期一為第一天</label>
            <ejs-datetimepicker :firstDayOfWeek="1" placeholder="選擇日期時間" />
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
                <td class="px-4 py-3 text-sm text-gray-600">選取的日期時間值</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">format</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">日期時間顯示格式</td>
                <td class="px-4 py-3 text-sm text-gray-600">'yyyy/MM/dd HH:mm'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">step</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">時間間隔（分鐘）</td>
                <td class="px-4 py-3 text-sm text-gray-600">30</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">min</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date</td>
                <td class="px-4 py-3 text-sm text-gray-600">最小可選日期時間</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">max</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date</td>
                <td class="px-4 py-3 text-sm text-gray-600">最大可選日期時間</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">firstDayOfWeek</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">一週的第一天（0-6）</td>
                <td class="px-4 py-3 text-sm text-gray-600">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


