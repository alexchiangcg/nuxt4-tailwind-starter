<script setup lang="ts">
import {
  KanbanComponent as EjsKanban,
  ColumnsDirective as EColumns,
  ColumnDirective as EColumn
} from '@syncfusion/ej2-vue-kanban'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// 基本任務資料
const kanbanData = ref([
  { Id: 1, Title: 'Task 1', Status: 'Open', Summary: 'Analyze customer requirements', Priority: 'Low', Assignee: 'Andrew', Type: 'Story' },
  { Id: 2, Title: 'Task 2', Status: 'InProgress', Summary: 'Fix application crashes', Priority: 'High', Assignee: 'Janet', Type: 'Bug' },
  { Id: 3, Title: 'Task 3', Status: 'Open', Summary: 'Arrange web meeting', Priority: 'High', Assignee: 'Steven', Type: 'Story' },
  { Id: 4, Title: 'Task 4', Status: 'InProgress', Summary: 'Improve application performance', Priority: 'Normal', Assignee: 'Andrew', Type: 'Improvement' },
  { Id: 5, Title: 'Task 5', Status: 'Testing', Summary: 'Test login functionality', Priority: 'Normal', Assignee: 'Janet', Type: 'Story' },
  { Id: 6, Title: 'Task 6', Status: 'Close', Summary: 'Setup CI/CD pipeline', Priority: 'Low', Assignee: 'Steven', Type: 'Epic' },
  { Id: 7, Title: 'Task 7', Status: 'Open', Summary: 'Design database schema', Priority: 'High', Assignee: 'Laura', Type: 'Story' },
  { Id: 8, Title: 'Task 8', Status: 'InProgress', Summary: 'Implement user authentication', Priority: 'Critical', Assignee: 'Laura', Type: 'Story' },
  { Id: 9, Title: 'Task 9', Status: 'Testing', Summary: 'Review code quality', Priority: 'Normal', Assignee: 'Andrew', Type: 'Improvement' },
  { Id: 10, Title: 'Task 10', Status: 'Close', Summary: 'Deploy to production', Priority: 'High', Assignee: 'Janet', Type: 'Epic' },
  { Id: 11, Title: 'Task 11', Status: 'Open', Summary: 'Write unit tests', Priority: 'Normal', Assignee: 'Steven', Type: 'Story' },
  { Id: 12, Title: 'Task 12', Status: 'Testing', Summary: 'Test API endpoints', Priority: 'High', Assignee: 'Laura', Type: 'Bug' },
])

// 泳道資料
const swimlaneData = ref([
  { Id: 1, Title: 'Task 1', Status: 'Open', Summary: 'Analyze requirements', Priority: 'High', Assignee: 'Andrew', Type: 'Story' },
  { Id: 2, Title: 'Task 2', Status: 'InProgress', Summary: 'Fix crashes', Priority: 'Critical', Assignee: 'Andrew', Type: 'Bug' },
  { Id: 3, Title: 'Task 3', Status: 'Open', Summary: 'Setup meeting', Priority: 'Normal', Assignee: 'Janet', Type: 'Story' },
  { Id: 4, Title: 'Task 4', Status: 'Testing', Summary: 'Test features', Priority: 'High', Assignee: 'Janet', Type: 'Story' },
  { Id: 5, Title: 'Task 5', Status: 'Close', Summary: 'Deploy app', Priority: 'Low', Assignee: 'Steven', Type: 'Epic' },
  { Id: 6, Title: 'Task 6', Status: 'InProgress', Summary: 'Improve performance', Priority: 'Normal', Assignee: 'Steven', Type: 'Improvement' },
])

// WIP 限制資料
const wipData = ref([
  { Id: 1, Title: 'Task 1', Status: 'Open', Summary: 'Task summary 1', Priority: 'High' },
  { Id: 2, Title: 'Task 2', Status: 'Open', Summary: 'Task summary 2', Priority: 'Normal' },
  { Id: 3, Title: 'Task 3', Status: 'Open', Summary: 'Task summary 3', Priority: 'Low' },
  { Id: 4, Title: 'Task 4', Status: 'InProgress', Summary: 'Task summary 4', Priority: 'Critical' },
  { Id: 5, Title: 'Task 5', Status: 'InProgress', Summary: 'Task summary 5', Priority: 'High' },
  { Id: 6, Title: 'Task 6', Status: 'Close', Summary: 'Task summary 6', Priority: 'Normal' },
])

// 卡片設定
const cardSettings = { contentField: 'Summary', headerField: 'Title' }
const cardSettingsWithPriority = {
  contentField: 'Summary',
  headerField: 'Title',
  tagsField: 'Priority',
  grabberField: 'Priority'
}

// 泳道設定
const swimlaneSettings = { keyField: 'Assignee' }

// 對話框設定
const dialogSettings = {
  fields: [
    { key: 'Id', text: 'ID', type: 'TextBox' },
    { key: 'Title', text: 'Title', type: 'TextBox' },
    { key: 'Status', text: 'Status', type: 'DropDown' },
    { key: 'Summary', text: 'Summary', type: 'TextArea' },
    { key: 'Priority', text: 'Priority', type: 'DropDown' },
    { key: 'Assignee', text: 'Assignee', type: 'TextBox' }
  ]
}

// 事件處理
const onDragStop = (args: any) => {
  console.log('Card moved:', args.data)
}

const onCardClick = (args: any) => {
  console.log('Card clicked:', args.data)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Kanban Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-kanban</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Kanban -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic Kanban Board
        </h2>
        <p class="text-gray-600 mb-6">Drag and drop cards between columns to change status</p>
        <div class="h-[500px]">
          <ejs-kanban
            id="basicKanban"
            key-field="Status"
            :data-source="kanbanData"
            :card-settings="cardSettings"
            @drag-stop="onDragStop"
          >
            <e-columns>
              <e-column header-text="To Do" key-field="Open" />
              <e-column header-text="In Progress" key-field="InProgress" />
              <e-column header-text="Testing" key-field="Testing" />
              <e-column header-text="Done" key-field="Close" />
            </e-columns>
          </ejs-kanban>
        </div>
      </section>

      <!-- 2. Kanban with Swimlanes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Kanban with Swimlanes
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">swimlaneSettings</code>
        </p>
        <div class="h-[600px]">
          <ejs-kanban
            id="swimlaneKanban"
            key-field="Status"
            :data-source="swimlaneData"
            :card-settings="cardSettings"
            :swimlane-settings="swimlaneSettings"
          >
            <e-columns>
              <e-column header-text="To Do" key-field="Open" />
              <e-column header-text="In Progress" key-field="InProgress" />
              <e-column header-text="Testing" key-field="Testing" />
              <e-column header-text="Done" key-field="Close" />
            </e-columns>
          </ejs-kanban>
        </div>
      </section>

      <!-- 3. WIP Limit -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. WIP (Work In Progress) Limit
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">minCount / maxCount</code>
        </p>
        <div class="h-[400px]">
          <ejs-kanban
            id="wipKanban"
            key-field="Status"
            :data-source="wipData"
            :card-settings="cardSettings"
          >
            <e-columns>
              <e-column header-text="To Do" key-field="Open" :min-count="1" />
              <e-column header-text="In Progress" key-field="InProgress" :min-count="1" :max-count="2" />
              <e-column header-text="Done" key-field="Close" />
            </e-columns>
          </ejs-kanban>
        </div>
        <p class="mt-4 text-sm text-gray-500">
          In Progress column has a WIP limit of 2 cards. Try to add more cards to see the constraint.
        </p>
      </section>

      <!-- 4. Toggle Columns -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Toggle Columns
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowToggle</code>
        </p>
        <div class="h-[450px]">
          <ejs-kanban
            id="toggleKanban"
            key-field="Status"
            :data-source="kanbanData"
            :card-settings="cardSettings"
          >
            <e-columns>
              <e-column header-text="To Do" key-field="Open" :allow-toggle="true" />
              <e-column header-text="In Progress" key-field="InProgress" :allow-toggle="true" />
              <e-column header-text="Testing" key-field="Testing" :allow-toggle="true" />
              <e-column header-text="Done" key-field="Close" :allow-toggle="true" />
            </e-columns>
          </ejs-kanban>
        </div>
        <p class="mt-4 text-sm text-gray-500">
          Click on column headers to collapse/expand columns.
        </p>
      </section>

      <!-- 5. Card with Priority Colors -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Card with Priority Tags
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cardSettings.tagsField</code>
        </p>
        <div class="h-[500px]">
          <ejs-kanban
            id="priorityKanban"
            key-field="Status"
            :data-source="kanbanData"
            :card-settings="cardSettingsWithPriority"
            @card-click="onCardClick"
          >
            <e-columns>
              <e-column header-text="To Do" key-field="Open" />
              <e-column header-text="In Progress" key-field="InProgress" />
              <e-column header-text="Testing" key-field="Testing" />
              <e-column header-text="Done" key-field="Close" />
            </e-columns>
          </ejs-kanban>
        </div>
      </section>

      <!-- 6. Stacked Headers -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Multiple Key Fields
        </h2>
        <p class="text-gray-600 mb-6">Single column with multiple status values</p>
        <div class="h-[450px]">
          <ejs-kanban
            id="multiKeyKanban"
            key-field="Status"
            :data-source="kanbanData"
            :card-settings="cardSettings"
          >
            <e-columns>
              <e-column header-text="Backlog" key-field="Open" />
              <e-column header-text="Development" key-field="InProgress,Testing" />
              <e-column header-text="Done" key-field="Close" />
            </e-columns>
          </ejs-kanban>
        </div>
      </section>

      <!-- 7. Dialog Editing -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Dialog Editing
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">dialogSettings</code>
          - Double-click a card to edit
        </p>
        <div class="h-[500px]">
          <ejs-kanban
            id="dialogKanban"
            key-field="Status"
            :data-source="kanbanData"
            :card-settings="cardSettings"
            :dialog-settings="dialogSettings"
          >
            <e-columns>
              <e-column header-text="To Do" key-field="Open" />
              <e-column header-text="In Progress" key-field="InProgress" />
              <e-column header-text="Testing" key-field="Testing" />
              <e-column header-text="Done" key-field="Close" />
            </e-columns>
          </ejs-kanban>
        </div>
      </section>

      <!-- 8. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          8. API Reference
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">keyField</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Field that determines card column placement</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data source for kanban cards</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cardSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Card display configuration (headerField, contentField)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">swimlaneSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Swimlane configuration (keyField)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">columns</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Column definitions (headerText, keyField)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowToggle</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable column collapse/expand</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">minCount</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Minimum cards required in column</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">maxCount</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">WIP limit - maximum cards allowed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 9. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          9. Events
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Event
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dragStart</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when card drag begins</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">drag</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered during card dragging</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dragStop</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when card is dropped</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cardClick</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when card is clicked</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cardDoubleClick</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when card is double-clicked</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cardRendered</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered after card is rendered</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">actionComplete</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered after CRUD operations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


