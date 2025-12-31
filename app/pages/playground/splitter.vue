<script setup lang="ts">
import {
  SplitterComponent as EjsSplitter,
  PanesDirective as EPanes,
  PaneDirective as EPane
} from '@syncfusion/ej2-vue-layouts'

definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Splitter 分割器</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-layouts</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 水平分割（預設） -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 水平分割（預設）</h2>
        <p class="text-gray-600 mb-6">左右分割面板</p>
        <ejs-splitter height="200px" width="100%">
          <e-panes>
            <e-pane size="30%">
              <template #content>
                <div class="p-4 bg-blue-50 h-full">
                  <h3 class="font-bold text-blue-800">左側面板</h3>
                  <p class="text-blue-600 mt-2">可拖動分隔線調整寬度</p>
                </div>
              </template>
            </e-pane>
            <e-pane size="40%">
              <template #content>
                <div class="p-4 bg-green-50 h-full">
                  <h3 class="font-bold text-green-800">中間面板</h3>
                  <p class="text-green-600 mt-2">主要內容區域</p>
                </div>
              </template>
            </e-pane>
            <e-pane size="30%">
              <template #content>
                <div class="p-4 bg-purple-50 h-full">
                  <h3 class="font-bold text-purple-800">右側面板</h3>
                  <p class="text-purple-600 mt-2">輔助內容</p>
                </div>
              </template>
            </e-pane>
          </e-panes>
        </ejs-splitter>
      </section>

      <!-- 2. 垂直分割 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 垂直分割</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">orientation="Vertical"</code>
        </p>
        <ejs-splitter height="300px" width="100%" orientation="Vertical">
          <e-panes>
            <e-pane size="33%">
              <template #content>
                <div class="p-4 bg-orange-50 h-full">
                  <h3 class="font-bold text-orange-800">上方面板</h3>
                  <p class="text-orange-600 mt-2">標題區域</p>
                </div>
              </template>
            </e-pane>
            <e-pane size="34%">
              <template #content>
                <div class="p-4 bg-teal-50 h-full">
                  <h3 class="font-bold text-teal-800">中間面板</h3>
                  <p class="text-teal-600 mt-2">主要內容區域</p>
                </div>
              </template>
            </e-pane>
            <e-pane size="33%">
              <template #content>
                <div class="p-4 bg-pink-50 h-full">
                  <h3 class="font-bold text-pink-800">下方面板</h3>
                  <p class="text-pink-600 mt-2">頁尾區域</p>
                </div>
              </template>
            </e-pane>
          </e-panes>
        </ejs-splitter>
      </section>

      <!-- 3. 最小/最大尺寸限制 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 最小/最大尺寸限制</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">min</code> /
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">max</code>
        </p>
        <ejs-splitter height="200px" width="100%">
          <e-panes>
            <e-pane size="200px" min="100px" max="300px">
              <template #content>
                <div class="p-4 bg-indigo-50 h-full">
                  <h3 class="font-bold text-indigo-800">左側面板</h3>
                  <p class="text-indigo-600 mt-2">最小 100px，最大 300px</p>
                </div>
              </template>
            </e-pane>
            <e-pane>
              <template #content>
                <div class="p-4 bg-gray-50 h-full">
                  <h3 class="font-bold text-gray-800">右側面板</h3>
                  <p class="text-gray-600 mt-2">自動填滿剩餘空間</p>
                </div>
              </template>
            </e-pane>
          </e-panes>
        </ejs-splitter>
      </section>

      <!-- 4. 可折疊面板 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 可折疊面板</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">collapsible</code>
        </p>
        <ejs-splitter height="200px" width="100%">
          <e-panes>
            <e-pane size="30%" :collapsible="true">
              <template #content>
                <div class="p-4 bg-red-50 h-full">
                  <h3 class="font-bold text-red-800">可折疊面板</h3>
                  <p class="text-red-600 mt-2">點擊箭頭可折疊此面板</p>
                </div>
              </template>
            </e-pane>
            <e-pane>
              <template #content>
                <div class="p-4 bg-yellow-50 h-full">
                  <h3 class="font-bold text-yellow-800">主內容</h3>
                  <p class="text-yellow-600 mt-2">折疊後此區域會擴展</p>
                </div>
              </template>
            </e-pane>
          </e-panes>
        </ejs-splitter>
      </section>

      <!-- 5. 不可調整大小 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 不可調整大小</h2>
        <p class="text-gray-600 mb-6">
          屬性：<code class="text-sm bg-gray-100 px-2 py-1 rounded">resizable</code>
        </p>
        <ejs-splitter height="200px" width="100%">
          <e-panes>
            <e-pane size="200px" :resizable="false">
              <template #content>
                <div class="p-4 bg-cyan-50 h-full">
                  <h3 class="font-bold text-cyan-800">固定寬度</h3>
                  <p class="text-cyan-600 mt-2">此面板無法調整大小</p>
                </div>
              </template>
            </e-pane>
            <e-pane>
              <template #content>
                <div class="p-4 bg-lime-50 h-full">
                  <h3 class="font-bold text-lime-800">可調整面板</h3>
                  <p class="text-lime-600 mt-2">只有此面板可以調整</p>
                </div>
              </template>
            </e-pane>
          </e-panes>
        </ejs-splitter>
      </section>

      <!-- 6. 巢狀分割器 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 巢狀分割器</h2>
        <p class="text-gray-600 mb-6">在面板內嵌套另一個分割器</p>
        <ejs-splitter height="300px" width="100%">
          <e-panes>
            <e-pane size="30%">
              <template #content>
                <div class="p-4 bg-blue-50 h-full">
                  <h3 class="font-bold text-blue-800">側邊欄</h3>
                  <p class="text-blue-600 mt-2">導航選單</p>
                </div>
              </template>
            </e-pane>
            <e-pane size="70%">
              <template #content>
                <ejs-splitter orientation="Vertical" height="100%">
                  <e-panes>
                    <e-pane size="50%">
                      <template #content>
                        <div class="p-4 bg-green-50 h-full">
                          <h3 class="font-bold text-green-800">上方內容</h3>
                          <p class="text-green-600 mt-2">主要顯示區域</p>
                        </div>
                      </template>
                    </e-pane>
                    <e-pane size="50%">
                      <template #content>
                        <div class="p-4 bg-purple-50 h-full">
                          <h3 class="font-bold text-purple-800">下方內容</h3>
                          <p class="text-purple-600 mt-2">詳細資訊區域</p>
                        </div>
                      </template>
                    </e-pane>
                  </e-panes>
                </ejs-splitter>
              </template>
            </e-pane>
          </e-panes>
        </ejs-splitter>
      </section>

      <!-- 7. API 參考 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. API 參考</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">orientation</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">分割方向（Horizontal/Vertical）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Horizontal'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">size</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">面板尺寸（Pane 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'auto'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">min</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">最小尺寸（Pane 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">max</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">最大尺寸（Pane 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">collapsible</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否可折疊（Pane 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">resizable</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">是否可調整大小（Pane 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


