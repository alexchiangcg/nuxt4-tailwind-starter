<script setup lang="ts">
import { saDocs, saCategories } from '~/config/sa-docs'

const route = useRoute()

const getDocsByCategory = (category: string) => {
  return saDocs.filter(d => d.category === category)
}

const uncategorizedDocs = computed(() => {
  return saDocs.filter(d => !d.category)
})
</script>

<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="w-72 bg-gray-900 text-white overflow-y-auto flex-shrink-0">
      <!-- Header -->
      <div class="p-4 border-b border-gray-700">
        <NuxtLink to="/" class="block">
          <h1 class="text-xl font-bold">SA 文件系統</h1>
          <p class="text-xs text-gray-400 mt-1">系統分析文件總覽</p>
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="py-4">
        <!-- 首頁 -->
        <NuxtLink
          to="/"
          class="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors flex items-center gap-2"
          :class="{
            'bg-gray-800 border-l-4 border-blue-500': route.path === '/',
            'border-l-4 border-transparent': route.path !== '/'
          }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          首頁
        </NuxtLink>

        <!-- 分類文件 -->
        <template v-for="category in saCategories" :key="category">
          <div v-if="getDocsByCategory(category).length > 0" class="mt-4">
            <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {{ category }}
            </div>
            <NuxtLink
              v-for="doc in getDocsByCategory(category)"
              :key="doc.route"
              :to="doc.route"
              class="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
              :class="{
                'bg-gray-800 border-l-4 border-blue-500': route.path === doc.route,
                'border-l-4 border-transparent': route.path !== doc.route
              }"
            >
              {{ doc.title }}
            </NuxtLink>
          </div>
        </template>

        <!-- 未分類文件 -->
        <div v-if="uncategorizedDocs.length > 0" class="mt-4">
          <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            其他
          </div>
          <NuxtLink
            v-for="doc in uncategorizedDocs"
            :key="doc.route"
            :to="doc.route"
            class="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
            :class="{
              'bg-gray-800 border-l-4 border-blue-500': route.path === doc.route,
              'border-l-4 border-transparent': route.path !== doc.route
            }"
          >
            {{ doc.title }}
          </NuxtLink>
        </div>

        <!-- Playground 連結 -->
        <div class="mt-8 px-4">
          <div class="border-t border-gray-700 pt-4">
            <NuxtLink
              to="/playground"
              class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Syncfusion Playground
            </NuxtLink>
          </div>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
