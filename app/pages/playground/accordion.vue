<script setup lang="ts">
import {
  AccordionComponent as EjsAccordion,
  AccordionItemsDirective as EAccordionItems,
  AccordionItemDirective as EAccordionItem
} from '@syncfusion/ej2-vue-navigations'

definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Accordion 手風琴</h1>
      <p class="text-gray-600">
        套件：<code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-navigations</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. 基本用法 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. 基本用法</h2>
        <p class="text-gray-600 mb-6">預設的手風琴元件</p>
        <div class="max-w-2xl">
          <ejs-accordion>
            <e-accordionitems>
              <e-accordionitem
                expanded="true"
                header="什麼是 Vue.js？"
                content="Vue.js 是一個用於建立使用者介面的漸進式 JavaScript 框架。它專注於視圖層，易於整合到其他專案中。"
              />
              <e-accordionitem
                header="什麼是 Composition API？"
                content="Composition API 是 Vue 3 引入的新功能，提供了一種替代方式來組織和重用元件邏輯。它允許開發者使用函數來管理元件的屬性和行為。"
              />
              <e-accordionitem
                header="什麼是 Nuxt？"
                content="Nuxt 是一個基於 Vue.js 的框架，用於建立伺服器端渲染 (SSR) 和靜態生成的應用程式。它提供了許多開箱即用的功能。"
              />
            </e-accordionitems>
          </ejs-accordion>
        </div>
      </section>

      <!-- 2. 展開模式 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. 展開模式</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">expandMode</code>
        </p>
        <div class="space-y-8">
          <div class="max-w-2xl">
            <h3 class="text-lg font-medium mb-2">單一展開模式（預設）</h3>
            <ejs-accordion expandMode="Single">
              <e-accordionitems>
                <e-accordionitem
                  header="前端技術"
                  content="包含 HTML、CSS、JavaScript、Vue.js、React、Angular 等現代前端框架和工具。"
                />
                <e-accordionitem
                  header="後端技術"
                  content="包含 Node.js、Python、Java、.NET、資料庫管理系統等後端開發技術。"
                />
                <e-accordionitem
                  header="DevOps"
                  content="包含 Docker、Kubernetes、CI/CD、雲端平台等開發維運相關技術。"
                />
              </e-accordionitems>
            </ejs-accordion>
            <code class="text-xs text-gray-500 mt-2 block">expandMode: 'Single' - 同時只能展開一個項目</code>
          </div>
          <div class="max-w-2xl">
            <h3 class="text-lg font-medium mb-2">多重展開模式</h3>
            <ejs-accordion expandMode="Multiple">
              <e-accordionitems>
                <e-accordionitem
                  expanded="true"
                  header="前端技術"
                  content="包含 HTML、CSS、JavaScript、Vue.js、React、Angular 等現代前端框架和工具。"
                />
                <e-accordionitem
                  expanded="true"
                  header="後端技術"
                  content="包含 Node.js、Python、Java、.NET、資料庫管理系統等後端開發技術。"
                />
                <e-accordionitem
                  header="DevOps"
                  content="包含 Docker、Kubernetes、CI/CD、雲端平台等開發維運相關技術。"
                />
              </e-accordionitems>
            </ejs-accordion>
            <code class="text-xs text-gray-500 mt-2 block">expandMode: 'Multiple' - 可同時展開多個項目</code>
          </div>
        </div>
      </section>

      <!-- 3. 停用項目 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. 停用項目</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <div class="max-w-2xl">
          <ejs-accordion>
            <e-accordionitems>
              <e-accordionitem
                header="可用項目"
                content="這個項目可以正常展開和收合。"
              />
              <e-accordionitem
                header="停用項目"
                content="這個項目已被停用，無法點擊。"
                :disabled="true"
              />
              <e-accordionitem
                header="另一個可用項目"
                content="這個項目也可以正常使用。"
              />
            </e-accordionitems>
          </ejs-accordion>
        </div>
      </section>

      <!-- 4. 圖標位置 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. 圖標位置</h2>
        <p class="text-gray-600 mb-6">
          屬性：
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">expandIconPosition</code>
        </p>
        <div class="space-y-8">
          <div class="max-w-2xl">
            <h3 class="text-lg font-medium mb-2">圖標在右側（預設）</h3>
            <ejs-accordion>
              <e-accordionitems>
                <e-accordionitem
                  header="Vue.js"
                  content="漸進式 JavaScript 框架"
                />
                <e-accordionitem
                  header="React"
                  content="用於建立使用者介面的 JavaScript 函式庫"
                />
              </e-accordionitems>
            </ejs-accordion>
          </div>
          <div class="max-w-2xl">
            <h3 class="text-lg font-medium mb-2">圖標在左側</h3>
            <ejs-accordion expandIconPosition="Left">
              <e-accordionitems>
                <e-accordionitem
                  header="Vue.js"
                  content="漸進式 JavaScript 框架"
                />
                <e-accordionitem
                  header="React"
                  content="用於建立使用者介面的 JavaScript 函式庫"
                />
              </e-accordionitems>
            </ejs-accordion>
          </div>
        </div>
      </section>

      <!-- 5. 巢狀手風琴 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. 巢狀手風琴</h2>
        <p class="text-gray-600 mb-6">在手風琴內嵌套另一個手風琴</p>
        <div class="max-w-2xl">
          <ejs-accordion>
            <e-accordionitems>
              <e-accordionitem
                expanded="true"
                header="前端框架"
              >
                <template v-slot:content>
                  <div class="p-4">
                    <ejs-accordion>
                      <e-accordionitems>
                        <e-accordionitem
                          header="Vue.js"
                          content="漸進式 JavaScript 框架，易於學習和整合。"
                        />
                        <e-accordionitem
                          header="React"
                          content="由 Facebook 開發的 UI 函式庫，擁有龐大的生態系統。"
                        />
                        <e-accordionitem
                          header="Angular"
                          content="由 Google 維護的全功能框架，適合大型企業應用。"
                        />
                      </e-accordionitems>
                    </ejs-accordion>
                  </div>
                </template>
              </e-accordionitem>
              <e-accordionitem
                header="後端框架"
              >
                <template v-slot:content>
                  <div class="p-4">
                    <ejs-accordion>
                      <e-accordionitems>
                        <e-accordionitem
                          header="Express.js"
                          content="Node.js 的極簡 Web 框架。"
                        />
                        <e-accordionitem
                          header="Django"
                          content="Python 的高階 Web 框架，鼓勵快速開發。"
                        />
                        <e-accordionitem
                          header="Spring Boot"
                          content="Java 的輕量級框架，簡化企業應用開發。"
                        />
                      </e-accordionitems>
                    </ejs-accordion>
                  </div>
                </template>
              </e-accordionitem>
            </e-accordionitems>
          </ejs-accordion>
        </div>
      </section>

      <!-- 6. 使用情境範例 -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. 使用情境範例</h2>
        <p class="text-gray-600 mb-6">常見的手風琴使用場景</p>
        <div class="space-y-8">
          <div class="max-w-2xl">
            <h3 class="text-lg font-medium mb-2">常見問題 (FAQ)</h3>
            <ejs-accordion>
              <e-accordionitems>
                <e-accordionitem
                  header="如何開始使用 Vue 3？"
                  content="您可以使用 Vite 建立新專案：npm create vite@latest my-vue-app -- --template vue。然後進入專案目錄並執行 npm install 安裝依賴。"
                />
                <e-accordionitem
                  header="Composition API 與 Options API 有什麼差異？"
                  content="Composition API 提供了更靈活的程式碼組織方式，特別適合大型專案和邏輯重用。Options API 則是傳統的 Vue 2 風格，結構更清晰，適合初學者。"
                />
                <e-accordionitem
                  header="如何在 Vue 3 中管理狀態？"
                  content="您可以使用 Pinia（官方推薦）或 Vuex 進行全域狀態管理。對於簡單場景，也可以使用 Composition API 的 ref 和 reactive。"
                />
                <e-accordionitem
                  header="Vue 3 的效能優勢是什麼？"
                  content="Vue 3 採用 Proxy 進行響應式系統重寫，提供更好的效能。編譯器優化、Tree-shaking 支援，以及更小的打包體積都是主要優勢。"
                />
              </e-accordionitems>
            </ejs-accordion>
          </div>
        </div>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">expandMode</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">展開模式（'Single' | 'Multiple'）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Single'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">expandIconPosition</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">圖標位置（'Left' | 'Right'）</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Right'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">header</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">項目標題文字（Item 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">content</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">項目內容文字（Item 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">expanded</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">項目是否展開（Item 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">項目是否停用（Item 屬性）</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


