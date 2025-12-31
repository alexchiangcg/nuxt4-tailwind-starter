<script setup lang="ts">
import { RatingComponent as EjsRating } from '@syncfusion/ej2-vue-inputs'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const ratingValue = ref(3)
const feedbackRating = ref(0)

const getFeedbackText = (value: number) => {
  if (value === 0) return 'Please rate your experience'
  if (value <= 1) return 'Very Poor'
  if (value <= 2) return 'Poor'
  if (value <= 3) return 'Average'
  if (value <= 4) return 'Good'
  return 'Excellent!'
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Rating Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Rating -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Rating</h2>
        <p class="text-gray-600 mb-6">Default 5-star rating component</p>
        <div class="flex items-center gap-4">
          <ejs-rating id="basic-rating" :value="3" />
          <span class="text-gray-600">3 out of 5</span>
        </div>
      </section>

      <!-- 2. Different Items Count -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Items Count</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">itemsCount</code>
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-24">3 items:</span>
            <ejs-rating id="rating-3" :value="2" :items-count="3" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-24">5 items:</span>
            <ejs-rating id="rating-5" :value="3" :items-count="5" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-24">10 items:</span>
            <ejs-rating id="rating-10" :value="7" :items-count="10" />
          </div>
        </div>
      </section>

      <!-- 3. Precision Modes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Precision Modes</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">precision</code>
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-32">Full (default):</span>
            <ejs-rating id="precision-full" :value="3" precision="Full" />
            <span class="text-gray-500">value: 3</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-32">Half:</span>
            <ejs-rating id="precision-half" :value="2.5" precision="Half" />
            <span class="text-gray-500">value: 2.5</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-32">Quarter:</span>
            <ejs-rating id="precision-quarter" :value="3.75" precision="Quarter" />
            <span class="text-gray-500">value: 3.75</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-32">Exact:</span>
            <ejs-rating id="precision-exact" :value="2.3" precision="Exact" />
            <span class="text-gray-500">value: 2.3</span>
          </div>
        </div>
      </section>

      <!-- 4. Tooltip -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Tooltip</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">showTooltip</code>
        </p>
        <div class="flex items-center gap-4">
          <ejs-rating id="tooltip-rating" :value="3" :show-tooltip="true" />
          <span class="text-gray-600">Hover to see tooltip</span>
        </div>
      </section>

      <!-- 5. Read Only and Disabled -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Read Only and Disabled</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">readOnly</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-24">Read Only:</span>
            <ejs-rating id="readonly-rating" :value="4" :read-only="true" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-24">Disabled:</span>
            <ejs-rating id="disabled-rating" :value="3" :disabled="true" />
          </div>
        </div>
      </section>

      <!-- 6. Show/Hide Label -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Label Display</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">showLabel</code>
        </p>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-32">With Label:</span>
            <ejs-rating id="label-rating" :value="4" :show-label="true" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-gray-700 w-32">Without Label:</span>
            <ejs-rating id="no-label-rating" :value="4" :show-label="false" />
          </div>
        </div>
      </section>

      <!-- 7. Reset Button -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Reset Button</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowReset</code>
        </p>
        <div class="flex items-center gap-4">
          <ejs-rating id="reset-rating" :value="3" :allow-reset="true" />
          <span class="text-gray-600">Click the X to reset</span>
        </div>
      </section>

      <!-- 8. Interactive Example -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Interactive Feedback</h2>
        <p class="text-gray-600 mb-6">Two-way binding with v-model</p>
        <div class="flex flex-col items-center gap-4">
          <ejs-rating
            id="feedback-rating"
            v-model="feedbackRating"
            :show-tooltip="true"
            :allow-reset="true"
          />
          <p class="text-lg font-medium" :class="{
            'text-red-500': feedbackRating <= 2 && feedbackRating > 0,
            'text-yellow-500': feedbackRating === 3,
            'text-green-500': feedbackRating >= 4,
            'text-gray-500': feedbackRating === 0
          }">
            {{ getFeedbackText(feedbackRating) }}
          </p>
        </div>
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. API Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Current rating value</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">itemsCount</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Number of rating items (default: 5)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">precision</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Full | Half | Quarter | Exact</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showTooltip</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show tooltip on hover</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showLabel</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Display rating label</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowReset</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show reset button</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">readOnly</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Make rating read-only</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Disable the rating</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
