<script setup lang="ts">
import { ScheduleComponent as EjsSchedule, ViewsDirective as EViews, ViewDirective as EView, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule'
import { provide } from 'vue'

definePageMeta({
  layout: 'playground'
})

// 範例事件資料
const eventData = [
  {
    Id: 1,
    Subject: '專案會議',
    StartTime: new Date(2025, 0, 6, 10, 0),
    EndTime: new Date(2025, 0, 6, 12, 0),
    IsAllDay: false
  },
  {
    Id: 2,
    Subject: '產品發表會',
    StartTime: new Date(2025, 0, 7, 14, 0),
    EndTime: new Date(2025, 0, 7, 16, 0),
    IsAllDay: false
  },
  {
    Id: 3,
    Subject: '團隊建設活動',
    StartTime: new Date(2025, 0, 8, 0, 0),
    EndTime: new Date(2025, 0, 8, 0, 0),
    IsAllDay: true
  },
  {
    Id: 4,
    Subject: '客戶拜訪',
    StartTime: new Date(2025, 0, 9, 9, 0),
    EndTime: new Date(2025, 0, 9, 11, 0),
    IsAllDay: false
  },
  {
    Id: 5,
    Subject: '技術研討會',
    StartTime: new Date(2025, 0, 10, 13, 0),
    EndTime: new Date(2025, 0, 10, 17, 0),
    IsAllDay: false
  }
]

const eventSettings = { dataSource: eventData }

provide('schedule', [Day, Week, WorkWeek, Month, Agenda])
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Schedule 排程元件</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-schedule</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本排程（週檢視）</h2>
        <p class="text-gray-600 mb-6">預設顯示週檢視的行事曆</p>
        <div class="h-[600px]">
          <ejs-schedule
            height="100%"
            :selectedDate="new Date(2025, 0, 6)"
            :eventSettings="eventSettings"
          >
            <e-views>
              <e-view option="Week" />
            </e-views>
          </ejs-schedule>
        </div>
      </section>

      <!-- 2. 多視圖模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 多視圖模式</h2>
        <p class="text-gray-600 mb-6">
          支援日、週、工作週、月、議程等多種視圖切換
        </p>
        <div class="h-[600px]">
          <ejs-schedule
            height="100%"
            :selectedDate="new Date(2025, 0, 6)"
            :eventSettings="eventSettings"
          >
            <e-views>
              <e-view option="Day" />
              <e-view option="Week" />
              <e-view option="WorkWeek" />
              <e-view option="Month" />
              <e-view option="Agenda" />
            </e-views>
          </ejs-schedule>
        </div>
      </section>

      <!-- 3. 唯讀模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 唯讀模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">readonly</code>
        </p>
        <div class="h-[500px]">
          <ejs-schedule
            height="100%"
            :selectedDate="new Date(2025, 0, 6)"
            :eventSettings="eventSettings"
            :readonly="true"
            currentView="Month"
          >
            <e-views>
              <e-view option="Month" />
            </e-views>
          </ejs-schedule>
        </div>
      </section>

      <!-- 4. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. API 參考</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">屬性</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">型別</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">說明</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">selectedDate</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date</td>
                <td class="px-4 py-3 text-sm text-gray-600">當前選中的日期</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">eventSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">Object</td>
                <td class="px-4 py-3 text-sm text-gray-600">事件資料設定，包含 dataSource</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">currentView</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">當前視圖（Day/Week/Month 等）</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">readonly</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否為唯讀模式</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">height</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | number</td>
                <td class="px-4 py-3 text-sm text-gray-600">排程元件高度</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 5. 視圖類型 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. 可用視圖類型</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800">Day</h3>
            <p class="text-sm text-gray-600">單日視圖</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800">Week</h3>
            <p class="text-sm text-gray-600">週視圖（7天）</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800">WorkWeek</h3>
            <p class="text-sm text-gray-600">工作週（5天）</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800">Month</h3>
            <p class="text-sm text-gray-600">月曆視圖</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800">Agenda</h3>
            <p class="text-sm text-gray-600">議程列表視圖</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800">TimelineDay</h3>
            <p class="text-sm text-gray-600">時間軸日視圖</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


