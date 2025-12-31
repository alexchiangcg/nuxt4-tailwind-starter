<script setup lang="ts">
import { SkeletonComponent as EjsSkeleton } from '@syncfusion/ej2-vue-notifications'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const isLoading = ref(true)

const toggleLoading = () => {
  isLoading.value = !isLoading.value
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Skeleton Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-notifications</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Shapes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic Shapes
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">shape</code>
        </p>
        <div class="flex flex-wrap gap-8 items-center">
          <div class="flex flex-col items-center gap-2">
            <ejs-skeleton shape="Circle" width="50px" height="50px" />
            <span class="text-sm text-gray-500">Circle</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-skeleton shape="Square" width="50px" height="50px" />
            <span class="text-sm text-gray-500">Square</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-skeleton shape="Rectangle" width="120px" height="50px" />
            <span class="text-sm text-gray-500">Rectangle</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <ejs-skeleton shape="Text" width="150px" />
            <span class="text-sm text-gray-500">Text</span>
          </div>
        </div>
      </section>

      <!-- 2. Sizes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Custom Sizes
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">width</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">height</code>
        </p>
        <div class="space-y-4">
          <div class="flex gap-4 items-center">
            <ejs-skeleton shape="Circle" width="30px" height="30px" />
            <ejs-skeleton shape="Circle" width="50px" height="50px" />
            <ejs-skeleton shape="Circle" width="70px" height="70px" />
            <ejs-skeleton shape="Circle" width="100px" height="100px" />
          </div>
          <div class="flex flex-col gap-2">
            <ejs-skeleton shape="Text" width="100%" height="16px" />
            <ejs-skeleton shape="Text" width="80%" height="16px" />
            <ejs-skeleton shape="Text" width="60%" height="16px" />
          </div>
        </div>
      </section>

      <!-- 3. Shimmer Effects -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Shimmer Effects
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">shimmerEffect</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex flex-col gap-2">
            <span class="text-sm font-medium text-gray-700">Wave (default)</span>
            <ejs-skeleton shape="Rectangle" width="100%" height="100px" shimmer-effect="Wave" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm font-medium text-gray-700">Fade</span>
            <ejs-skeleton shape="Rectangle" width="100%" height="100px" shimmer-effect="Fade" />
          </div>
          <div class="flex flex-col gap-2">
            <span class="text-sm font-medium text-gray-700">Pulse</span>
            <ejs-skeleton shape="Rectangle" width="100%" height="100px" shimmer-effect="Pulse" />
          </div>
        </div>
      </section>

      <!-- 4. Card Skeleton -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Card Skeleton
        </h2>
        <p class="text-gray-600 mb-6">Composite skeleton for card loading state</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border rounded-lg p-4 space-y-4">
            <ejs-skeleton shape="Rectangle" width="100%" height="150px" />
            <ejs-skeleton shape="Text" width="80%" height="20px" />
            <ejs-skeleton shape="Text" width="100%" height="14px" />
            <ejs-skeleton shape="Text" width="60%" height="14px" />
          </div>
          <div class="border rounded-lg p-4 space-y-4">
            <ejs-skeleton shape="Rectangle" width="100%" height="150px" />
            <ejs-skeleton shape="Text" width="70%" height="20px" />
            <ejs-skeleton shape="Text" width="90%" height="14px" />
            <ejs-skeleton shape="Text" width="40%" height="14px" />
          </div>
          <div class="border rounded-lg p-4 space-y-4">
            <ejs-skeleton shape="Rectangle" width="100%" height="150px" />
            <ejs-skeleton shape="Text" width="60%" height="20px" />
            <ejs-skeleton shape="Text" width="85%" height="14px" />
            <ejs-skeleton shape="Text" width="50%" height="14px" />
          </div>
        </div>
      </section>

      <!-- 5. Profile Skeleton -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Profile Skeleton
        </h2>
        <p class="text-gray-600 mb-6">Skeleton for user profile loading</p>
        <div class="flex gap-4 items-center">
          <ejs-skeleton shape="Circle" width="60px" height="60px" />
          <div class="flex-1 space-y-2">
            <ejs-skeleton shape="Text" width="150px" height="18px" />
            <ejs-skeleton shape="Text" width="100px" height="14px" />
          </div>
        </div>
      </section>

      <!-- 6. List Skeleton -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. List Skeleton
        </h2>
        <p class="text-gray-600 mb-6">Skeleton for list loading state</p>
        <div class="space-y-4 max-w-md">
          <div v-for="i in 5" :key="i" class="flex gap-4 items-center">
            <ejs-skeleton shape="Circle" width="40px" height="40px" />
            <div class="flex-1 space-y-2">
              <ejs-skeleton shape="Text" width="70%" height="14px" />
              <ejs-skeleton shape="Text" width="40%" height="12px" />
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Table Skeleton -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Table Skeleton
        </h2>
        <p class="text-gray-600 mb-6">Skeleton for table loading state</p>
        <div class="border rounded-lg overflow-hidden">
          <!-- Header -->
          <div class="bg-gray-50 p-4 flex gap-4">
            <ejs-skeleton shape="Text" width="20%" height="16px" />
            <ejs-skeleton shape="Text" width="25%" height="16px" />
            <ejs-skeleton shape="Text" width="20%" height="16px" />
            <ejs-skeleton shape="Text" width="15%" height="16px" />
            <ejs-skeleton shape="Text" width="20%" height="16px" />
          </div>
          <!-- Rows -->
          <div v-for="i in 5" :key="i" class="p-4 flex gap-4 border-t">
            <ejs-skeleton shape="Text" width="20%" height="14px" />
            <ejs-skeleton shape="Text" width="25%" height="14px" />
            <ejs-skeleton shape="Text" width="20%" height="14px" />
            <ejs-skeleton shape="Text" width="15%" height="14px" />
            <ejs-skeleton shape="Text" width="20%" height="14px" />
          </div>
        </div>
      </section>

      <!-- 8. Interactive Demo -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. Interactive Demo
        </h2>
        <p class="text-gray-600 mb-6">Toggle between skeleton and actual content</p>
        <button
          class="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          @click="toggleLoading"
        >
          {{ isLoading ? 'Show Content' : 'Show Skeleton' }}
        </button>

        <div class="border rounded-lg p-6">
          <template v-if="isLoading">
            <div class="flex gap-4 items-start">
              <ejs-skeleton shape="Circle" width="80px" height="80px" />
              <div class="flex-1 space-y-3">
                <ejs-skeleton shape="Text" width="200px" height="24px" />
                <ejs-skeleton shape="Text" width="150px" height="16px" />
                <ejs-skeleton shape="Text" width="100%" height="14px" />
                <ejs-skeleton shape="Text" width="90%" height="14px" />
                <ejs-skeleton shape="Text" width="70%" height="14px" />
              </div>
            </div>
          </template>
          <template v-else>
            <div class="flex gap-4 items-start">
              <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-semibold text-gray-900">John Doe</h3>
                <p class="text-gray-500">Software Engineer</p>
                <p class="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </template>
        </div>
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          9. API Reference
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Default
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">shape</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Shape type (Circle/Square/Rectangle/Text)</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Text'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">width</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Width of skeleton (px, %, em)</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">height</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Height of skeleton (px, %, em)</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">shimmerEffect</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Animation effect (Wave/Fade/Pulse/None)</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Wave'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">visible</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show/hide the skeleton</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">label</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Accessibility label</td>
                <td class="px-4 py-3 text-sm text-gray-600">'Loading...'</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 10. Best Practices -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          10. Best Practices
        </h2>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>Match skeleton dimensions to actual content for smooth transitions</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>Use Wave effect for most cases, Pulse for subtle loading states</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>Combine multiple skeletons to represent complex layouts</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">✓</span>
            <span>Keep skeleton layouts consistent with final content structure</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-red-500 mt-1">✗</span>
            <span>Don't show skeletons for instant-loading content</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-red-500 mt-1">✗</span>
            <span>Don't use too many animation effects on the same page</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>


