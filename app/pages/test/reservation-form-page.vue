<script setup lang="ts">
import { ref } from 'vue'
import ReservationFormPage from '~/features/reservation/pages/ReservationFormPage.vue'

definePageMeta({
  title: 'ReservationFormPage Visual Test',
  layout: false
})

const testStates = [
  { id: 'default', name: 'Default State (Empty Form)', description: '初始空白表單狀態' },
  { id: 'scrolled-middle', name: 'Scrolled to Middle', description: '捲動到頁面中間' },
  { id: 'scrolled-bottom', name: 'Scrolled to Bottom', description: '捲動到頁面底部' },
  { id: 'interactive', name: 'Interactive Test', description: '互動測試（可填寫表單）' }
]
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold mb-6 text-gray-900">
        ReservationFormPage Visual Test
      </h1>

      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4">Test States</h2>
        <ul class="space-y-2">
          <li v-for="state in testStates" :key="state.id" class="flex items-start">
            <span class="font-medium text-blue-600 w-48">{{ state.name }}:</span>
            <span class="text-gray-600">{{ state.description }}</span>
          </li>
        </ul>

        <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <p class="font-medium text-yellow-800">Visual Testing Instructions:</p>
          <ol class="list-decimal list-inside mt-2 space-y-1 text-sm text-yellow-700">
            <li>Navigate to /restaurant/reservation-form for actual page testing</li>
            <li>Test empty state (initial load)</li>
            <li>Test scrolling behavior (header should remain sticky)</li>
            <li>Test form filling and validation</li>
            <li>Capture full-page screenshots (page height ~2147px)</li>
            <li>Compare with Figma design (node 5006:11441)</li>
          </ol>
        </div>

        <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
          <p class="font-medium text-blue-800">Expected Behaviors:</p>
          <ul class="list-disc list-inside mt-2 space-y-1 text-sm text-blue-700">
            <li>Sticky header remains at top when scrolling</li>
            <li>Two-column layout: 949px (left) + 459px (right)</li>
            <li>Yellow alert box visible below page title</li>
            <li>All 5 feature components render correctly</li>
            <li>Form validation works on required fields</li>
            <li>Payment method selection updates state</li>
            <li>Agreement checkboxes toggle correctly</li>
            <li>上一步 button is enabled, 登記候補 button is disabled</li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-4">Quick Links</h2>
        <div class="flex gap-4">
          <a
            href="/restaurant/reservation-form"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Actual Page
          </a>
          <a
            href="/test/reservation-form"
            class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            ReservationForm Component Test
          </a>
          <a
            href="/test/booking-detail-card"
            class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            BookingDetailCard Component Test
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
