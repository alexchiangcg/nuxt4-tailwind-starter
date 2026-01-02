<script setup lang="ts">
import { DashboardLayoutComponent as EjsDashboardlayout, PanelDirective as EPanel, PanelsDirective as EPanels } from '@syncfusion/ej2-vue-layouts'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const cellSpacing = [10, 10]
const resizableHandles = ['e-south-east', 'e-east', 'e-west', 'e-north', 'e-south']

// Event log
const eventLog = ref<string[]>([])

const addLog = (message: string) => {
  eventLog.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLog.value.length > 5) {
    eventLog.value.shift()
  }
}

const onDragStart = () => addLog('Drag started')
const onDrag = () => addLog('Dragging...')
const onDragStop = () => addLog('Drag stopped')
const onResizeStart = () => addLog('Resize started')
const onResize = () => addLog('Resizing...')
const onResizeStop = () => addLog('Resize stopped')
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Dashboard Layout Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-layouts</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Dashboard Layout -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Dashboard Layout</h2>
        <p class="text-gray-600 mb-6">Drag panels to reposition them</p>
        <ejs-dashboardlayout
          id="basic-dashboard"
          :columns="5"
          :cell-spacing="cellSpacing"
        >
          <e-panels>
            <e-panel
              :row="0"
              :col="0"
              :size-x="1"
              :size-y="1"
              content="<div class='panel-content bg-indigo-100 text-indigo-800'>Panel 1</div>"
            />
            <e-panel
              :row="0"
              :col="1"
              :size-x="2"
              :size-y="1"
              content="<div class='panel-content bg-green-100 text-green-800'>Panel 2</div>"
            />
            <e-panel
              :row="0"
              :col="3"
              :size-x="2"
              :size-y="2"
              content="<div class='panel-content bg-yellow-100 text-yellow-800'>Panel 3</div>"
            />
            <e-panel
              :row="1"
              :col="0"
              :size-x="3"
              :size-y="1"
              content="<div class='panel-content bg-pink-100 text-pink-800'>Panel 4</div>"
            />
          </e-panels>
        </ejs-dashboardlayout>
      </section>

      <!-- 2. Resizable Panels -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Resizable Panels</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowResizing</code> - Resize from edges and corners
        </p>
        <ejs-dashboardlayout
          id="resize-dashboard"
          :columns="5"
          :cell-spacing="cellSpacing"
          :allow-resizing="true"
          :resizable-handles="resizableHandles"
        >
          <e-panels>
            <e-panel
              :row="0"
              :col="0"
              :size-x="2"
              :size-y="1"
              content="<div class='panel-content bg-blue-100 text-blue-800'>Resizable A</div>"
            />
            <e-panel
              :row="0"
              :col="2"
              :size-x="2"
              :size-y="1"
              content="<div class='panel-content bg-purple-100 text-purple-800'>Resizable B</div>"
            />
            <e-panel
              :row="1"
              :col="0"
              :size-x="3"
              :size-y="1"
              content="<div class='panel-content bg-teal-100 text-teal-800'>Resizable C</div>"
            />
          </e-panels>
        </ejs-dashboardlayout>
      </section>

      <!-- 3. Fixed Panels (No Dragging) -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Fixed Panels</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowDragging="false"</code>
        </p>
        <ejs-dashboardlayout
          id="fixed-dashboard"
          :columns="4"
          :cell-spacing="cellSpacing"
          :allow-dragging="false"
        >
          <e-panels>
            <e-panel
              :row="0"
              :col="0"
              :size-x="2"
              :size-y="1"
              content="<div class='panel-content bg-gray-100 text-gray-800'>Fixed 1</div>"
            />
            <e-panel
              :row="0"
              :col="2"
              :size-x="2"
              :size-y="1"
              content="<div class='panel-content bg-gray-100 text-gray-800'>Fixed 2</div>"
            />
          </e-panels>
        </ejs-dashboardlayout>
      </section>

      <!-- 4. Panel with Header -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Panels with Headers</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">header</code>
        </p>
        <ejs-dashboardlayout
          id="header-dashboard"
          :columns="4"
          :cell-spacing="cellSpacing"
        >
          <e-panels>
            <e-panel
              :row="0"
              :col="0"
              :size-x="2"
              :size-y="2"
              header="<div class='panel-header'>Sales Overview</div>"
              content="<div class='panel-body'>Sales chart goes here...</div>"
            />
            <e-panel
              :row="0"
              :col="2"
              :size-x="2"
              :size-y="1"
              header="<div class='panel-header'>Recent Orders</div>"
              content="<div class='panel-body'>Orders list...</div>"
            />
            <e-panel
              :row="1"
              :col="2"
              :size-x="2"
              :size-y="1"
              header="<div class='panel-header'>User Activity</div>"
              content="<div class='panel-body'>Activity stats...</div>"
            />
          </e-panels>
        </ejs-dashboardlayout>
      </section>

      <!-- 5. Different Cell Spacing -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Cell Spacing</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cellSpacing</code> - [horizontal, vertical]
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Spacing: [5, 5]</p>
            <ejs-dashboardlayout
              id="spacing-small"
              :columns="3"
              :cell-spacing="[5, 5]"
            >
              <e-panels>
                <e-panel :row="0" :col="0" :size-x="1" :size-y="1" content="<div class='panel-sm bg-red-100'>1</div>" />
                <e-panel :row="0" :col="1" :size-x="1" :size-y="1" content="<div class='panel-sm bg-red-100'>2</div>" />
                <e-panel :row="0" :col="2" :size-x="1" :size-y="1" content="<div class='panel-sm bg-red-100'>3</div>" />
              </e-panels>
            </ejs-dashboardlayout>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Spacing: [20, 20]</p>
            <ejs-dashboardlayout
              id="spacing-large"
              :columns="3"
              :cell-spacing="[20, 20]"
            >
              <e-panels>
                <e-panel :row="0" :col="0" :size-x="1" :size-y="1" content="<div class='panel-sm bg-orange-100'>1</div>" />
                <e-panel :row="0" :col="1" :size-x="1" :size-y="1" content="<div class='panel-sm bg-orange-100'>2</div>" />
                <e-panel :row="0" :col="2" :size-x="1" :size-y="1" content="<div class='panel-sm bg-orange-100'>3</div>" />
              </e-panels>
            </ejs-dashboardlayout>
          </div>
        </div>
      </section>

      <!-- 6. Panel Min/Max Size -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Panel Size Constraints</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">minSizeX/Y</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">maxSizeX/Y</code>
        </p>
        <ejs-dashboardlayout
          id="constrained-dashboard"
          :columns="5"
          :cell-spacing="cellSpacing"
          :allow-resizing="true"
        >
          <e-panels>
            <e-panel
              :row="0"
              :col="0"
              :size-x="2"
              :size-y="1"
              :min-size-x="1"
              :min-size-y="1"
              :max-size-x="3"
              :max-size-y="2"
              content="<div class='panel-content bg-cyan-100 text-cyan-800'>Min: 1x1, Max: 3x2</div>"
            />
            <e-panel
              :row="0"
              :col="2"
              :size-x="2"
              :size-y="1"
              :min-size-x="2"
              :min-size-y="1"
              content="<div class='panel-content bg-lime-100 text-lime-800'>Min: 2x1</div>"
            />
          </e-panels>
        </ejs-dashboardlayout>
      </section>

      <!-- 7. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Events</h2>
        <p class="text-gray-600 mb-6">
          Events: <code class="text-sm bg-gray-100 px-2 py-1 rounded">dragStart/drag/dragStop</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">resizeStart/resize/resizeStop</code>
        </p>
        <ejs-dashboardlayout
          id="event-dashboard"
          :columns="4"
          :cell-spacing="cellSpacing"
          :allow-resizing="true"
          @drag-start="onDragStart"
          @drag="onDrag"
          @drag-stop="onDragStop"
          @resize-start="onResizeStart"
          @resize="onResize"
          @resize-stop="onResizeStop"
        >
          <e-panels>
            <e-panel
              :row="0"
              :col="0"
              :size-x="2"
              :size-y="1"
              content="<div class='panel-content bg-violet-100 text-violet-800'>Drag or Resize Me</div>"
            />
            <e-panel
              :row="0"
              :col="2"
              :size-x="2"
              :size-y="1"
              content="<div class='panel-content bg-fuchsia-100 text-fuchsia-800'>Drag or Resize Me</div>"
            />
          </e-panels>
        </ejs-dashboardlayout>
        <div class="mt-4 p-3 bg-gray-100 rounded text-sm font-mono max-h-32 overflow-y-auto">
          <p v-for="(log, index) in eventLog" :key="index" class="text-gray-600">{{ log }}</p>
          <p v-if="eventLog.length === 0" class="text-gray-400">Drag or resize panels to see events...</p>
        </div>
      </section>

      <!-- 8. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. API Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">columns</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Number of columns in the grid</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cellSpacing</td>
                <td class="px-4 py-3 text-sm text-gray-600">[number, number]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Horizontal and vertical spacing</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowDragging</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable panel dragging</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowResizing</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable panel resizing</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">row/col</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Panel position in grid</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">sizeX/sizeY</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Panel size in grid units</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">header/content</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Panel header and content HTML</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
:deep(.panel-content) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
}

:deep(.panel-sm) {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
}

:deep(.panel-header) {
  padding: 10px 15px;
  font-weight: 600;
  font-size: 14px;
  background: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
}

:deep(.panel-body) {
  padding: 15px;
  font-size: 13px;
  color: #6b7280;
}

:deep(.e-panel) {
  transition: none !important;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
