<script setup lang="ts">
import { TextAreaComponent as EjsTextarea } from '@syncfusion/ej2-vue-inputs'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const sampleValue = ref('')
const charCount = ref(0)

const onInput = (args: any) => {
  charCount.value = args.value?.length || 0
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">TextArea Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic TextArea -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic TextArea</h2>
        <p class="text-gray-600 mb-6">Default multiline text input</p>
        <div class="max-w-md">
          <ejs-textarea placeholder="Enter your comments" />
        </div>
      </section>

      <!-- 2. Rows and Columns -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Rows and Columns</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">rows</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">cols</code>
        </p>
        <div class="space-y-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">3 rows, 35 cols</label>
            <ejs-textarea placeholder="Enter comments" :rows="3" :cols="35" float-label-type="Auto" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">5 rows, 50 cols</label>
            <ejs-textarea placeholder="Enter description" :rows="5" :cols="50" float-label-type="Auto" />
          </div>
        </div>
      </section>

      <!-- 3. Floating Label Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Floating Label Types</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">floatLabelType</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Never (default)</label>
            <ejs-textarea placeholder="Enter text" float-label-type="Never" :rows="3" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Auto</label>
            <ejs-textarea placeholder="Enter text" float-label-type="Auto" :rows="3" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Always</label>
            <ejs-textarea placeholder="Enter text" float-label-type="Always" :rows="3" />
          </div>
        </div>
      </section>

      <!-- 4. Resize Modes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Resize Modes</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">resizeMode</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Vertical</label>
            <ejs-textarea placeholder="Resize vertically" resize-mode="Vertical" :rows="3" float-label-type="Auto" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Horizontal</label>
            <ejs-textarea placeholder="Resize horizontally" resize-mode="Horizontal" :rows="3" float-label-type="Auto" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Both</label>
            <ejs-textarea placeholder="Resize both ways" resize-mode="Both" :rows="3" float-label-type="Auto" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">None</label>
            <ejs-textarea placeholder="Cannot resize" resize-mode="None" :rows="3" float-label-type="Auto" />
          </div>
        </div>
      </section>

      <!-- 5. Maximum Length -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Maximum Length</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">maxLength</code>
        </p>
        <div class="max-w-md">
          <ejs-textarea
            v-model="sampleValue"
            placeholder="Max 100 characters"
            :max-length="100"
            :rows="4"
            float-label-type="Auto"
            @input="onInput"
          />
          <p class="text-sm text-gray-500 mt-2">{{ charCount }}/100 characters</p>
        </div>
      </section>

      <!-- 6. Disabled and ReadOnly -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Disabled and ReadOnly</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">readonly</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Disabled</label>
            <ejs-textarea placeholder="Disabled textarea" :enabled="false" :rows="3" value="This textarea is disabled" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">ReadOnly</label>
            <ejs-textarea placeholder="ReadOnly textarea" :readonly="true" :rows="3" value="This textarea is read-only" />
          </div>
        </div>
      </section>

      <!-- 7. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">rows</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Number of visible text lines</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cols</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Width in characters</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">maxLength</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Maximum character limit</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">resizeMode</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Vertical | Horizontal | Both | None</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">floatLabelType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Never | Auto | Always</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">placeholder</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Placeholder text</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">readonly</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Make textarea read-only</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable/disable textarea</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
