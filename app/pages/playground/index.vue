<script setup lang="ts">
import { components, categories, categoryLabels } from '~/config/playground-components'

definePageMeta({
  layout: 'playground'
})

const componentsByCategory = computed(() => {
  return categories.map(category => ({
    category,
    components: components.filter(c => c.category === category)
  })).filter(group => group.components.length > 0)
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-3">
        Syncfusion Component Playground
      </h1>
      <p class="text-lg text-gray-600">
        探索所有 Syncfusion Vue 元件的屬性、狀態和變體
      </p>
    </div>

    <!-- Component Grid by Category -->
    <div class="space-y-10">
      <section v-for="group in componentsByCategory" :key="group.category">
        <div class="mb-4">
          <h2 class="text-2xl font-semibold text-gray-800">
            {{ categoryLabels[group.category] || group.category }}
          </h2>
          <span class="text-sm text-gray-400">{{ group.category }}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink
            v-for="comp in group.components"
            :key="comp.route"
            :to="comp.route"
            class="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition-all"
          >
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ comp.name }}
            </h3>
            <p class="text-sm text-gray-500 mb-3">
              {{ comp.package }}
            </p>
            <p v-if="comp.description" class="text-gray-600 text-sm">
              {{ comp.description }}
            </p>
          </NuxtLink>
        </div>
      </section>
    </div>

    <!-- Empty State -->
    <div v-if="components.length === 0" class="text-center py-20">
      <p class="text-gray-500 text-lg">尚無元件。請在配置檔中新增元件。</p>
    </div>
  </div>
</template>
