<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Diagram</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion Diagram 提供流程圖、組織圖、UML 圖、BPMN 圖等多種圖表繪製功能，支援節點拖放、連接線、自動佈局。
      </p>
    </div>

    <!-- Basic Flowchart -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">基本流程圖</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">使用節點和連接線建立基本流程圖，展示程式邏輯流程。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <ejs-diagram
          id="flowchart"
          :width="'100%'"
          :height="'450px'"
          :nodes="flowchartNodes"
          :connectors="flowchartConnectors"
          :getNodeDefaults="getNodeDefaults"
          :getConnectorDefaults="getConnectorDefaults"
        />
      </div>
    </section>

    <!-- Organization Chart -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">組織架構圖</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">使用階層佈局自動排列組織架構圖。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <ejs-diagram
          id="orgchart"
          :width="'100%'"
          :height="'400px'"
          :nodes="orgNodes"
          :connectors="orgConnectors"
          :layout="orgLayout"
          :getNodeDefaults="getOrgNodeDefaults"
          :getConnectorDefaults="getConnectorDefaults"
        />
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
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">nodes</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">NodeModel[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">圖表節點陣列</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">connectors</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">ConnectorModel[]</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">連接線陣列</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">layout</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">LayoutModel</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">自動佈局設定</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">getNodeDefaults</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Function</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">節點預設樣式</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">getConnectorDefaults</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">Function</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">連接線預設樣式</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Diagram Types -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">支援的圖表類型</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📊</div>
          <span class="text-sm font-medium">Flowchart</span>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🏢</div>
          <span class="text-sm font-medium">Org Chart</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📐</div>
          <span class="text-sm font-medium">UML</span>
        </div>
        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">⚙️</div>
          <span class="text-sm font-medium">BPMN</span>
        </div>
        <div class="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🧠</div>
          <span class="text-sm font-medium">Mind Map</span>
        </div>
        <div class="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🌐</div>
          <span class="text-sm font-medium">Network</span>
        </div>
        <div class="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🏠</div>
          <span class="text-sm font-medium">Floor Plan</span>
        </div>
        <div class="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🗃️</div>
          <span class="text-sm font-medium">ER Diagram</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { DiagramComponent as EjsDiagram, HierarchicalTree, DataBinding } from '@syncfusion/ej2-vue-diagrams'

import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-splitbuttons/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'
import '@syncfusion/ej2-vue-diagrams/styles/material.css'

provide('diagram', [HierarchicalTree, DataBinding])

definePageMeta({ layout: 'playground' })

// Flowchart nodes
const flowchartNodes = [
  { id: 'start', offsetX: 300, offsetY: 50, shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: '開始' }] },
  { id: 'process1', offsetX: 300, offsetY: 140, shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: '輸入資料' }] },
  { id: 'decision', offsetX: 300, offsetY: 230, shape: { type: 'Flow', shape: 'Decision' }, annotations: [{ content: '驗證?' }] },
  { id: 'process2', offsetX: 150, offsetY: 320, shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: '顯示錯誤' }] },
  { id: 'process3', offsetX: 450, offsetY: 320, shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: '處理資料' }] },
  { id: 'end', offsetX: 450, offsetY: 410, shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: '結束' }] }
]

const flowchartConnectors = [
  { id: 'conn1', sourceID: 'start', targetID: 'process1' },
  { id: 'conn2', sourceID: 'process1', targetID: 'decision' },
  { id: 'conn3', sourceID: 'decision', targetID: 'process2', annotations: [{ content: '否', style: { fill: 'white' } }] },
  { id: 'conn4', sourceID: 'decision', targetID: 'process3', annotations: [{ content: '是', style: { fill: 'white' } }] },
  { id: 'conn5', sourceID: 'process2', targetID: 'process1' },
  { id: 'conn6', sourceID: 'process3', targetID: 'end' }
]

// Org chart nodes
const orgNodes = [
  { id: 'ceo', annotations: [{ content: 'CEO\n王大明' }] },
  { id: 'cto', annotations: [{ content: 'CTO\n李志強' }] },
  { id: 'cfo', annotations: [{ content: 'CFO\n張美玲' }] },
  { id: 'cmo', annotations: [{ content: 'CMO\n陳小華' }] },
  { id: 'dev', annotations: [{ content: '開發部\n林大偉' }] },
  { id: 'qa', annotations: [{ content: 'QA部\n周曉芬' }] }
]

const orgConnectors = [
  { id: 'org1', sourceID: 'ceo', targetID: 'cto' },
  { id: 'org2', sourceID: 'ceo', targetID: 'cfo' },
  { id: 'org3', sourceID: 'ceo', targetID: 'cmo' },
  { id: 'org4', sourceID: 'cto', targetID: 'dev' },
  { id: 'org5', sourceID: 'cto', targetID: 'qa' }
]

const orgLayout = {
  type: 'HierarchicalTree',
  orientation: 'TopToBottom',
  horizontalSpacing: 40,
  verticalSpacing: 50
}

const getNodeDefaults = (node: any) => {
  node.width = 120
  node.height = 50
  node.style = { fill: '#4472C4', strokeColor: '#2F528F' }
  if (node.shape?.shape === 'Decision') {
    node.height = 70
    node.width = 100
  }
  if (node.annotations) {
    node.annotations[0].style = { color: 'white', bold: true, fontSize: 12 }
  }
  return node
}

const getOrgNodeDefaults = (node: any) => {
  node.width = 120
  node.height = 50
  node.style = { fill: '#70AD47', strokeColor: '#538135' }
  if (node.annotations) {
    node.annotations[0].style = { color: 'white', bold: true, fontSize: 11 }
  }
  return node
}

const getConnectorDefaults = (connector: any) => {
  connector.type = 'Orthogonal'
  connector.style = { strokeColor: '#666666', strokeWidth: 2 }
  connector.targetDecorator = { style: { fill: '#666666', strokeColor: '#666666' } }
  return connector
}
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }
</style>
