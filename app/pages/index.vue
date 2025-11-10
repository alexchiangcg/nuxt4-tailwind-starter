<script setup lang="ts">
definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-8">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <h1 class="text-5xl font-bold text-gray-900 dark:text-white">
        Nuxt 4 + Tailwind CSS
      </h1>

      <p class="text-xl text-gray-600 dark:text-gray-300">
        現代化的 Nuxt 4 起始模板，專為企業級專案與 Figma 轉代碼工作流程設計
      </p>

      <div class="flex gap-4 justify-center flex-wrap">
        <a
          href="https://nuxt.com"
          target="_blank"
          class="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          Nuxt 文件
        </a>
        <a
          href="https://tailwindcss.com"
          target="_blank"
          class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Tailwind 文件
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            ⚡️ 快速開發
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Nuxt 4 + Vite 提供極速的開發體驗
          </p>
        </div>

        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            🎨 現代化 UI
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            Tailwind CSS v4 提供靈活的樣式系統
          </p>
        </div>

        <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            🏗️ Feature-based
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            模組化架構，易於維護和擴展
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
