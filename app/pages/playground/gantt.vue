<template>
  <div class="playground-page">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Gantt Chart
      </h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion Gantt Chart 提供專案排程管理功能，支援任務依賴關係、資源分配、里程碑追蹤等功能。
      </p>
    </div>

    <!-- Basic Gantt Chart -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        基本甘特圖
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        展示專案任務、時程和進度的甘特圖。
      </p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <ejs-gantt
          id="BasicGantt"
          :dataSource="projectData"
          :taskFields="taskFields"
          :height="'450px'"
          :treeColumnIndex="1"
          :highlightWeekends="true"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
          :columns="columns"
          :splitterSettings="splitterSettings"
          :labelSettings="labelSettings"
        />
      </div>
    </section>

    <!-- Gantt with Dependencies -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        任務依賴關係
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        支援 Finish-to-Start (FS)、Start-to-Start (SS)、Finish-to-Finish (FF)、Start-to-Finish (SF) 四種依賴類型。
      </p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <ejs-gantt
          id="DependencyGantt"
          :dataSource="dependencyData"
          :taskFields="dependencyTaskFields"
          :height="'400px'"
          :treeColumnIndex="1"
          :highlightWeekends="true"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
          :columns="dependencyColumns"
          :splitterSettings="splitterSettings"
        />
      </div>
    </section>

    <!-- Gantt with Editing -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        可編輯甘特圖
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        支援新增、編輯、刪除任務，以及拖曳調整時程。
      </p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <ejs-gantt
          id="EditableGantt"
          :dataSource="editableData"
          :taskFields="taskFields"
          :height="'450px'"
          :treeColumnIndex="1"
          :highlightWeekends="true"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
          :columns="columns"
          :splitterSettings="splitterSettings"
          :editSettings="editSettings"
          :toolbar="toolbar"
          :allowSelection="true"
          :allowFiltering="true"
          :allowSorting="true"
          :allowResizing="true"
        />
      </div>
    </section>

    <!-- Gantt with Resources -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        資源分配
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        支援將資源指派給任務，並顯示資源工作負載。
      </p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <ejs-gantt
          id="ResourceGantt"
          :dataSource="resourceData"
          :taskFields="resourceTaskFields"
          :height="'450px'"
          :treeColumnIndex="1"
          :highlightWeekends="true"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
          :columns="resourceColumns"
          :splitterSettings="splitterSettings"
          :resources="resourceCollection"
          :resourceFields="resourceFields"
          :labelSettings="resourceLabelSettings"
          :viewType="'ResourceView'"
          :showOverAllocation="true"
        />
      </div>
    </section>

    <!-- Gantt with Timeline Views -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        時間軸視圖
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        支援不同時間軸單位：日、週、月、年。
      </p>
      <div class="flex gap-4 mb-4 flex-wrap">
        <button
          v-for="view in timelineViews"
          :key="view.value"
          class="px-4 py-2 rounded-md transition-colors"
          :class="selectedTimelineView === view.value
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'"
          @click="changeTimelineView(view.value)"
        >
          {{ view.label }}
        </button>
      </div>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <ejs-gantt
          ref="timelineGantt"
          id="TimelineGantt"
          :dataSource="projectData"
          :taskFields="taskFields"
          :height="'400px'"
          :treeColumnIndex="1"
          :highlightWeekends="true"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
          :columns="columns"
          :splitterSettings="splitterSettings"
          :timelineSettings="timelineSettings"
        />
      </div>
    </section>

    <!-- Gantt with Milestones and Critical Path -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        里程碑與關鍵路徑
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        顯示專案里程碑和關鍵路徑，幫助追蹤專案進度。
      </p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <ejs-gantt
          id="CriticalPathGantt"
          :dataSource="milestoneData"
          :taskFields="dependencyTaskFields"
          :height="'450px'"
          :treeColumnIndex="1"
          :highlightWeekends="true"
          :projectStartDate="projectStartDate"
          :projectEndDate="projectEndDate"
          :columns="dependencyColumns"
          :splitterSettings="splitterSettings"
          :enableCriticalPath="true"
          :renderBaseline="true"
        />
      </div>
    </section>

    <!-- API Reference -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        API 參考
      </h2>
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
            <tr>
              <td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">dataSource</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Object[]</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">甘特圖資料來源</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">taskFields</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">TaskFieldsModel</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">定義任務欄位對應</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">editSettings</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">EditSettingsModel</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">編輯功能設定</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">timelineSettings</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">TimelineSettingsModel</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">時間軸顯示設定</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">resources</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Object[]</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">資源集合</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">enableCriticalPath</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">啟用關鍵路徑顯示</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">highlightWeekends</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">標記週末</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">renderBaseline</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td>
              <td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">顯示基線比較</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, reactive } from 'vue'
import { GanttComponent as EjsGantt, Edit, Selection, Toolbar, Filter, Sort, Resize, CriticalPath, DayMarkers } from '@syncfusion/ej2-vue-gantt'

// Import Syncfusion styles
import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-calendars/styles/material.css'
import '@syncfusion/ej2-dropdowns/styles/material.css'
import '@syncfusion/ej2-inputs/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-splitbuttons/styles/material.css'
import '@syncfusion/ej2-grids/styles/material.css'
import '@syncfusion/ej2-treegrid/styles/material.css'
import '@syncfusion/ej2-layouts/styles/material.css'
import '@syncfusion/ej2-richtexteditor/styles/material.css'
import '@syncfusion/ej2-vue-gantt/styles/material.css'

// Inject required modules
provide('gantt', [Edit, Selection, Toolbar, Filter, Sort, Resize, CriticalPath, DayMarkers])

definePageMeta({
  layout: 'playground'
})

// Project dates
const projectStartDate = new Date('2025-01-01')
const projectEndDate = new Date('2025-03-31')

// Task fields configuration
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  endDate: 'EndDate',
  duration: 'Duration',
  progress: 'Progress',
  parentID: 'ParentID',
  child: 'subtasks'
}

const dependencyTaskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  endDate: 'EndDate',
  duration: 'Duration',
  progress: 'Progress',
  dependency: 'Predecessor',
  parentID: 'ParentID',
  child: 'subtasks'
}

const resourceTaskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  endDate: 'EndDate',
  duration: 'Duration',
  progress: 'Progress',
  parentID: 'ParentID',
  child: 'subtasks',
  resourceInfo: 'resources'
}

// Columns configuration
const columns = [
  { field: 'TaskID', headerText: 'ID', width: 70 },
  { field: 'TaskName', headerText: '任務名稱', width: 200 },
  { field: 'StartDate', headerText: '開始日期', width: 120 },
  { field: 'Duration', headerText: '工期', width: 80 },
  { field: 'Progress', headerText: '進度', width: 80 }
]

const dependencyColumns = [
  { field: 'TaskID', headerText: 'ID', width: 70 },
  { field: 'TaskName', headerText: '任務名稱', width: 180 },
  { field: 'StartDate', headerText: '開始日期', width: 120 },
  { field: 'Duration', headerText: '工期', width: 80 },
  { field: 'Predecessor', headerText: '前置任務', width: 100 },
  { field: 'Progress', headerText: '進度', width: 80 }
]

const resourceColumns = [
  { field: 'TaskID', headerText: 'ID', width: 70 },
  { field: 'TaskName', headerText: '任務名稱', width: 180 },
  { field: 'StartDate', headerText: '開始日期', width: 120 },
  { field: 'Duration', headerText: '工期', width: 80 },
  { field: 'Progress', headerText: '進度', width: 80 }
]

// Splitter settings
const splitterSettings = {
  position: '40%'
}

// Label settings
const labelSettings = {
  rightLabel: 'TaskName'
}

const resourceLabelSettings = {
  rightLabel: 'resources'
}

// Edit settings
const editSettings = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  allowTaskbarEditing: true,
  showDeleteConfirmDialog: true
}

// Toolbar
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit']

// Resource collection
const resourceCollection = [
  { resourceId: 1, resourceName: '張三' },
  { resourceId: 2, resourceName: '李四' },
  { resourceId: 3, resourceName: '王五' },
  { resourceId: 4, resourceName: '趙六' }
]

const resourceFields = {
  id: 'resourceId',
  name: 'resourceName'
}

// Timeline views
const timelineViews = [
  { label: '日視圖', value: 'Day' },
  { label: '週視圖', value: 'Week' },
  { label: '月視圖', value: 'Month' },
  { label: '年視圖', value: 'Year' }
]

const selectedTimelineView = ref('Week')
const timelineGantt = ref<InstanceType<typeof EjsGantt> | null>(null)

const timelineSettings = reactive({
  topTier: {
    unit: 'Week',
    format: 'MMM dd, yyyy'
  },
  bottomTier: {
    unit: 'Day',
    format: 'dd'
  }
})

const changeTimelineView = (view: string) => {
  selectedTimelineView.value = view

  switch (view) {
    case 'Day':
      timelineSettings.topTier = { unit: 'Day', format: 'MMM dd, yyyy' }
      timelineSettings.bottomTier = { unit: 'Hour', format: 'HH' }
      break
    case 'Week':
      timelineSettings.topTier = { unit: 'Week', format: 'MMM dd, yyyy' }
      timelineSettings.bottomTier = { unit: 'Day', format: 'dd' }
      break
    case 'Month':
      timelineSettings.topTier = { unit: 'Month', format: 'MMM yyyy' }
      timelineSettings.bottomTier = { unit: 'Week', format: 'dd' }
      break
    case 'Year':
      timelineSettings.topTier = { unit: 'Year', format: 'yyyy' }
      timelineSettings.bottomTier = { unit: 'Month', format: 'MMM' }
      break
  }
}

// Basic project data
const projectData = [
  {
    TaskID: 1,
    TaskName: '專案啟動',
    StartDate: new Date('2025-01-02'),
    EndDate: new Date('2025-01-15'),
    subtasks: [
      { TaskID: 2, TaskName: '需求分析', StartDate: new Date('2025-01-02'), Duration: 5, Progress: 100 },
      { TaskID: 3, TaskName: '可行性評估', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 80 },
      { TaskID: 4, TaskName: '專案計畫', StartDate: new Date('2025-01-13'), Duration: 3, Progress: 50 }
    ]
  },
  {
    TaskID: 5,
    TaskName: '設計階段',
    StartDate: new Date('2025-01-16'),
    EndDate: new Date('2025-02-05'),
    subtasks: [
      { TaskID: 6, TaskName: '系統架構設計', StartDate: new Date('2025-01-16'), Duration: 5, Progress: 60 },
      { TaskID: 7, TaskName: 'UI/UX 設計', StartDate: new Date('2025-01-21'), Duration: 8, Progress: 40 },
      { TaskID: 8, TaskName: '資料庫設計', StartDate: new Date('2025-01-28'), Duration: 5, Progress: 20 }
    ]
  },
  {
    TaskID: 9,
    TaskName: '開發階段',
    StartDate: new Date('2025-02-06'),
    EndDate: new Date('2025-03-10'),
    subtasks: [
      { TaskID: 10, TaskName: '前端開發', StartDate: new Date('2025-02-06'), Duration: 15, Progress: 10 },
      { TaskID: 11, TaskName: '後端開發', StartDate: new Date('2025-02-10'), Duration: 18, Progress: 5 },
      { TaskID: 12, TaskName: 'API 整合', StartDate: new Date('2025-02-28'), Duration: 8, Progress: 0 }
    ]
  },
  {
    TaskID: 13,
    TaskName: '測試與部署',
    StartDate: new Date('2025-03-11'),
    EndDate: new Date('2025-03-25'),
    subtasks: [
      { TaskID: 14, TaskName: '單元測試', StartDate: new Date('2025-03-11'), Duration: 5, Progress: 0 },
      { TaskID: 15, TaskName: '整合測試', StartDate: new Date('2025-03-16'), Duration: 5, Progress: 0 },
      { TaskID: 16, TaskName: '部署上線', StartDate: new Date('2025-03-21'), Duration: 3, Progress: 0 }
    ]
  }
]

// Dependency data
const dependencyData = [
  {
    TaskID: 1,
    TaskName: '網站改版專案',
    StartDate: new Date('2025-01-02'),
    EndDate: new Date('2025-02-28'),
    subtasks: [
      { TaskID: 2, TaskName: '規劃階段', StartDate: new Date('2025-01-02'), Duration: 5, Progress: 100, Predecessor: '' },
      { TaskID: 3, TaskName: '設計稿確認', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 100, Predecessor: '2FS' },
      { TaskID: 4, TaskName: '前端切版', StartDate: new Date('2025-01-15'), Duration: 8, Progress: 70, Predecessor: '3FS' },
      { TaskID: 5, TaskName: '後端 API', StartDate: new Date('2025-01-15'), Duration: 10, Progress: 60, Predecessor: '3FS' },
      { TaskID: 6, TaskName: '前後端整合', StartDate: new Date('2025-01-27'), Duration: 5, Progress: 30, Predecessor: '4FS,5FS' },
      { TaskID: 7, TaskName: '測試', StartDate: new Date('2025-02-03'), Duration: 5, Progress: 0, Predecessor: '6FS' },
      { TaskID: 8, TaskName: '上線部署', StartDate: new Date('2025-02-10'), Duration: 2, Progress: 0, Predecessor: '7FS' }
    ]
  }
]

// Editable data (copy of project data for separate instance)
const editableData = [
  {
    TaskID: 1,
    TaskName: '專案啟動',
    StartDate: new Date('2025-01-02'),
    EndDate: new Date('2025-01-15'),
    subtasks: [
      { TaskID: 2, TaskName: '需求分析', StartDate: new Date('2025-01-02'), Duration: 5, Progress: 100 },
      { TaskID: 3, TaskName: '可行性評估', StartDate: new Date('2025-01-09'), Duration: 4, Progress: 80 },
      { TaskID: 4, TaskName: '專案計畫', StartDate: new Date('2025-01-13'), Duration: 3, Progress: 50 }
    ]
  },
  {
    TaskID: 5,
    TaskName: '設計階段',
    StartDate: new Date('2025-01-16'),
    EndDate: new Date('2025-02-05'),
    subtasks: [
      { TaskID: 6, TaskName: '系統架構設計', StartDate: new Date('2025-01-16'), Duration: 5, Progress: 60 },
      { TaskID: 7, TaskName: 'UI/UX 設計', StartDate: new Date('2025-01-21'), Duration: 8, Progress: 40 },
      { TaskID: 8, TaskName: '資料庫設計', StartDate: new Date('2025-01-28'), Duration: 5, Progress: 20 }
    ]
  }
]

// Resource data
const resourceData = [
  {
    TaskID: 1,
    TaskName: 'App 開發專案',
    StartDate: new Date('2025-01-02'),
    EndDate: new Date('2025-02-28'),
    subtasks: [
      { TaskID: 2, TaskName: '需求訪談', StartDate: new Date('2025-01-02'), Duration: 3, Progress: 100, resources: [{ resourceId: 1 }, { resourceId: 2 }] },
      { TaskID: 3, TaskName: '原型設計', StartDate: new Date('2025-01-07'), Duration: 5, Progress: 80, resources: [{ resourceId: 2 }] },
      { TaskID: 4, TaskName: 'iOS 開發', StartDate: new Date('2025-01-14'), Duration: 15, Progress: 40, resources: [{ resourceId: 1 }] },
      { TaskID: 5, TaskName: 'Android 開發', StartDate: new Date('2025-01-14'), Duration: 15, Progress: 35, resources: [{ resourceId: 3 }] },
      { TaskID: 6, TaskName: '後端開發', StartDate: new Date('2025-01-14'), Duration: 12, Progress: 50, resources: [{ resourceId: 4 }] },
      { TaskID: 7, TaskName: 'QA 測試', StartDate: new Date('2025-02-03'), Duration: 8, Progress: 10, resources: [{ resourceId: 2 }, { resourceId: 3 }] }
    ]
  }
]

// Milestone data with critical path
const milestoneData = [
  {
    TaskID: 1,
    TaskName: '產品發布專案',
    StartDate: new Date('2025-01-02'),
    EndDate: new Date('2025-03-15'),
    subtasks: [
      { TaskID: 2, TaskName: '市場調研', StartDate: new Date('2025-01-02'), Duration: 10, Progress: 100, Predecessor: '' },
      { TaskID: 3, TaskName: '需求確認 (里程碑)', StartDate: new Date('2025-01-16'), Duration: 0, Progress: 100, Predecessor: '2FS' },
      { TaskID: 4, TaskName: '產品設計', StartDate: new Date('2025-01-17'), Duration: 15, Progress: 70, Predecessor: '3FS' },
      { TaskID: 5, TaskName: '設計評審 (里程碑)', StartDate: new Date('2025-02-07'), Duration: 0, Progress: 0, Predecessor: '4FS' },
      { TaskID: 6, TaskName: '開發實作', StartDate: new Date('2025-02-10'), Duration: 20, Progress: 30, Predecessor: '5FS' },
      { TaskID: 7, TaskName: '程式碼凍結 (里程碑)', StartDate: new Date('2025-03-07'), Duration: 0, Progress: 0, Predecessor: '6FS' },
      { TaskID: 8, TaskName: '品質測試', StartDate: new Date('2025-03-10'), Duration: 5, Progress: 0, Predecessor: '7FS' },
      { TaskID: 9, TaskName: '正式發布 (里程碑)', StartDate: new Date('2025-03-15'), Duration: 0, Progress: 0, Predecessor: '8FS' }
    ]
  }
]
</script>

<style scoped>
.playground-page {
  padding: 1.5rem;
  max-width: 100%;
}

:deep(.e-gantt) {
  font-family: inherit;
}

:deep(.e-gantt .e-gantt-chart) {
  background-color: #fff;
}

:deep(.e-gantt .e-weekend) {
  background-color: #f5f5f5;
}

:deep(.e-gantt .e-gantt-milestone) {
  background-color: #ff9800 !important;
}

:deep(.e-gantt .e-critical-path-task) {
  background-color: #f44336 !important;
}

:deep(.e-gantt .e-critical-path-connector-line) {
  stroke: #f44336 !important;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :deep(.e-gantt .e-gantt-chart) {
    background-color: #1f2937;
  }

  :deep(.e-gantt .e-weekend) {
    background-color: #374151;
  }
}
</style>
