<script setup lang="ts">
import { ref } from 'vue'
import { SidebarComponent as EjsSidebar } from '@syncfusion/ej2-vue-navigations'

definePageMeta({
  layout: 'playground'
})

const leftSidebar = ref<InstanceType<typeof EjsSidebar> | null>(null)
const rightSidebar = ref<InstanceType<typeof EjsSidebar> | null>(null)
const dockSidebar = ref<InstanceType<typeof EjsSidebar> | null>(null)
const pushSidebar = ref<InstanceType<typeof EjsSidebar> | null>(null)

const toggleLeft = () => {
  leftSidebar.value?.toggle()
}

const toggleRight = () => {
  rightSidebar.value?.toggle()
}

const toggleDock = () => {
  dockSidebar.value?.toggle()
}

const togglePush = () => {
  pushSidebar.value?.toggle()
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Sidebar 側邊欄</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-navigations</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 左側側邊欄 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 左側側邊欄（預設）</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">position="Left"</code>
        </p>
        <div class="relative h-64 border border-gray-300 rounded overflow-hidden">
          <ejs-sidebar
            id="left-sidebar"
            ref="leftSidebar"
            :isOpen="true"
            :showBackdrop="false"
            :closeOnDocumentClick="false"
            target="#left-target"
            width="200px"
          >
            <div class="p-4 bg-blue-600 text-white h-full">
              <h3 class="font-bold mb-4">左側選單</h3>
              <ul class="space-y-2">
                <li>首頁</li>
                <li>產品</li>
                <li>關於我們</li>
                <li>聯絡我們</li>
              </ul>
            </div>
          </ejs-sidebar>
          <div id="left-target" class="p-4 h-full">
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              @click="toggleLeft"
            >
              切換側邊欄
            </button>
            <p class="mt-4 text-gray-600">這是主要內容區域</p>
          </div>
        </div>
      </section>

      <!-- 2. 右側側邊欄 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 右側側邊欄</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">position="Right"</code>
        </p>
        <div class="relative h-64 border border-gray-300 rounded overflow-hidden">
          <ejs-sidebar
            id="right-sidebar"
            ref="rightSidebar"
            position="Right"
            :isOpen="true"
            :showBackdrop="false"
            :closeOnDocumentClick="false"
            target="#right-target"
            width="200px"
          >
            <div class="p-4 bg-green-600 text-white h-full">
              <h3 class="font-bold mb-4">右側面板</h3>
              <ul class="space-y-2">
                <li>通知</li>
                <li>設定</li>
                <li>個人資料</li>
              </ul>
            </div>
          </ejs-sidebar>
          <div id="right-target" class="p-4 h-full">
            <button
              class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              @click="toggleRight"
            >
              切換側邊欄
            </button>
            <p class="mt-4 text-gray-600">這是主要內容區域</p>
          </div>
        </div>
      </section>

      <!-- 3. Dock 模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Dock 模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">enableDock</code> +
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">dockSize</code>
        </p>
        <div class="relative h-64 border border-gray-300 rounded overflow-hidden">
          <ejs-sidebar
            id="dock-sidebar"
            ref="dockSidebar"
            :enableDock="true"
            dockSize="50px"
            width="200px"
            :isOpen="false"
            :showBackdrop="false"
            :closeOnDocumentClick="false"
            target="#dock-target"
          >
            <div class="p-2 bg-purple-600 text-white h-full">
              <ul class="space-y-4">
                <li class="flex items-center gap-2">
                  <span class="e-icons e-home text-xl" />
                  <span>首頁</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="e-icons e-people text-xl" />
                  <span>使用者</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="e-icons e-settings text-xl" />
                  <span>設定</span>
                </li>
              </ul>
            </div>
          </ejs-sidebar>
          <div id="dock-target" class="p-4 h-full">
            <button
              class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              @click="toggleDock"
            >
              切換 Dock
            </button>
            <p class="mt-4 text-gray-600">收合時只顯示圖示，展開時顯示完整選單</p>
          </div>
        </div>
      </section>

      <!-- 4. Push 模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Push 模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">type="Push"</code>
        </p>
        <div class="relative h-64 border border-gray-300 rounded overflow-hidden">
          <ejs-sidebar
            id="push-sidebar"
            ref="pushSidebar"
            type="Push"
            width="200px"
            :isOpen="false"
            :showBackdrop="false"
            :closeOnDocumentClick="false"
            target="#push-target"
          >
            <div class="p-4 bg-orange-600 text-white h-full">
              <h3 class="font-bold mb-4">推送模式</h3>
              <p>側邊欄會推動主內容區域</p>
            </div>
          </ejs-sidebar>
          <div id="push-target" class="p-4 h-full">
            <button
              class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              @click="togglePush"
            >
              切換推送側邊欄
            </button>
            <p class="mt-4 text-gray-600">側邊欄展開時會推動此內容</p>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">position</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">側邊欄位置（Left/Right）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Left'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">展開類型（Over/Push/Slide/Auto）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Auto'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableDock</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否啟用 Dock 模式</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dockSize</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Dock 模式下收合的寬度</td>
                <td class="px-4 py-3 text-sm text-gray-600">'auto'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">width</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">展開時的寬度</td>
                <td class="px-4 py-3 text-sm text-gray-600">'auto'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">isOpen</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否展開</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showBackdrop</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否顯示遮罩</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style>

.e-sidebar {
  z-index: 10 !important;
}
</style>
