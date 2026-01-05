<script setup lang="ts">
import { saDocs } from '~/config/sa-docs'

definePageMeta({
  layout: 'docs',
})

const recentDocs = computed(() => saDocs.slice(0, 5))
</script>

<template>
  <div class="p-10 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-3">
        SA 文件總覽
      </h1>
      <p class="text-lg text-gray-600">
        系統分析文件管理系統。使用 Claude CLI 輔助撰寫 SA 文件。
      </p>
    </div>

    <!-- 快速開始 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">快速開始</h2>
      <div class="bg-gray-900 text-gray-100 p-6 rounded-lg">
        <p class="text-sm text-gray-400 mb-2"># 使用 Claude CLI 新增 SA 文件</p>
        <code class="text-green-400">claude "幫我在 docs/ 新增一個訂單管理模組的 SA 文件"</code>
      </div>
    </section>

    <!-- 文件列表 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">文件列表</h2>

      <div v-if="saDocs.length > 0" class="space-y-3">
        <NuxtLink
          v-for="doc in saDocs"
          :key="doc.route"
          :to="doc.route"
          class="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-500 transition-all"
        >
          <div class="flex items-start justify-between">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">{{ doc.title }}</h3>
              <p v-if="doc.description" class="text-sm text-gray-500 mt-1">
                {{ doc.description }}
              </p>
            </div>
            <span v-if="doc.category" class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {{ doc.category }}
            </span>
          </div>
        </NuxtLink>
      </div>

      <div v-else class="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p class="text-gray-500">尚無文件。使用 Claude CLI 開始新增！</p>
      </div>
    </section>

    <!-- 使用說明 -->
    <section>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">如何新增文件</h2>
      <div class="prose prose-gray max-w-none">
        <ol class="list-decimal list-inside space-y-3 text-gray-600">
          <li>
            <strong>建立頁面檔案</strong>：在 <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">app/pages/docs/</code> 目錄下建立 <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">.vue</code> 檔案
          </li>
          <li>
            <strong>更新配置檔</strong>：在 <code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm">app/config/sa-docs.ts</code> 新增文件資訊
          </li>
          <li>
            <strong>使用 Syncfusion 元件</strong>：可參考 <NuxtLink to="/playground" class="text-blue-600 hover:underline">Playground</NuxtLink> 的元件範例
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>
