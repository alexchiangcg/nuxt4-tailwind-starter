<script setup lang="ts">
import { components, categories } from '~/config/playground-components'

const route = useRoute()

const getComponentsByCategory = (category: string) => {
  return components.filter(c => c.category === category)
}

const hasComponentsInCategory = (category: string) => {
  return getComponentsByCategory(category).length > 0
}
</script>

<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white overflow-y-auto flex-shrink-0">
      <!-- Header -->
      <div class="p-4 border-b border-gray-700">
        <NuxtLink to="/playground" class="block">
          <h1 class="text-xl font-bold">Syncfusion Playground</h1>
          <p class="text-xs text-gray-400 mt-1">Component Explorer</p>
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="py-4">
        <template v-for="category in categories" :key="category">
          <div v-if="hasComponentsInCategory(category)">
            <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {{ category }}
            </div>
            <NuxtLink
              v-for="comp in getComponentsByCategory(category)"
              :key="comp.route"
              :to="comp.route"
              class="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
              :class="{
                'bg-gray-800 border-l-4 border-blue-500': route.path === comp.route,
                'border-l-4 border-transparent': route.path !== comp.route
              }"
            >
              {{ comp.name }}
            </NuxtLink>
          </div>
        </template>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-y-auto">
      <slot />
    </main>
  </div>
</template>
