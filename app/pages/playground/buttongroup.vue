<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const selectedAlign = ref('center')
const selectedFormats = ref<string[]>(['bold'])
const selectedSize = ref('medium')
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">ButtonGroup Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-buttons</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic ButtonGroup -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic ButtonGroup</h2>
        <p class="text-gray-600 mb-6">Simple button group using CSS class <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-btn-group</code></p>
        <div class="e-btn-group">
          <button class="e-btn">Left</button>
          <button class="e-btn">Center</button>
          <button class="e-btn">Right</button>
        </div>
      </section>

      <!-- 2. Single Selection (Radio) -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Single Selection (Radio)</h2>
        <p class="text-gray-600 mb-6">Only one button can be selected at a time using radio inputs</p>
        <div class="e-btn-group">
          <input id="align-left" v-model="selectedAlign" type="radio" name="align" value="left">
          <label class="e-btn" for="align-left">Left</label>
          <input id="align-center" v-model="selectedAlign" type="radio" name="align" value="center">
          <label class="e-btn" for="align-center">Center</label>
          <input id="align-right" v-model="selectedAlign" type="radio" name="align" value="right">
          <label class="e-btn" for="align-right">Right</label>
        </div>
        <p class="mt-4 text-sm text-gray-500">Selected: {{ selectedAlign }}</p>
      </section>

      <!-- 3. Multiple Selection (Checkbox) -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Multiple Selection (Checkbox)</h2>
        <p class="text-gray-600 mb-6">Multiple buttons can be selected using checkbox inputs</p>
        <div class="e-btn-group">
          <input id="format-bold" v-model="selectedFormats" type="checkbox" value="bold">
          <label class="e-btn" for="format-bold">Bold</label>
          <input id="format-italic" v-model="selectedFormats" type="checkbox" value="italic">
          <label class="e-btn" for="format-italic">Italic</label>
          <input id="format-underline" v-model="selectedFormats" type="checkbox" value="underline">
          <label class="e-btn" for="format-underline">Underline</label>
        </div>
        <p class="mt-4 text-sm text-gray-500">Selected: {{ selectedFormats.join(', ') || 'None' }}</p>
      </section>

      <!-- 4. With Icons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Icon Buttons</h2>
        <p class="text-gray-600 mb-6">Button group with Syncfusion icons</p>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Text Formatting:</p>
            <div class="e-btn-group">
              <input id="icon-bold" type="checkbox" value="bold">
              <label class="e-btn e-icon-btn" for="icon-bold">
                <span class="e-btn-icon e-icons e-bold" />
              </label>
              <input id="icon-italic" type="checkbox" value="italic">
              <label class="e-btn e-icon-btn" for="icon-italic">
                <span class="e-btn-icon e-icons e-italic" />
              </label>
              <input id="icon-underline" type="checkbox" value="underline">
              <label class="e-btn e-icon-btn" for="icon-underline">
                <span class="e-btn-icon e-icons e-underline" />
              </label>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Text Alignment:</p>
            <div class="e-btn-group">
              <input id="icon-align-left" type="radio" name="icon-align" value="left">
              <label class="e-btn e-icon-btn" for="icon-align-left">
                <span class="e-btn-icon e-icons e-align-left" />
              </label>
              <input id="icon-align-center" type="radio" name="icon-align" value="center" checked>
              <label class="e-btn e-icon-btn" for="icon-align-center">
                <span class="e-btn-icon e-icons e-align-center" />
              </label>
              <input id="icon-align-right" type="radio" name="icon-align" value="right">
              <label class="e-btn e-icon-btn" for="icon-align-right">
                <span class="e-btn-icon e-icons e-align-right" />
              </label>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Button Styles -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Button Styles</h2>
        <p class="text-gray-600 mb-6">Different button styles in groups</p>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Primary:</p>
            <div class="e-btn-group">
              <button class="e-btn e-primary">One</button>
              <button class="e-btn e-primary">Two</button>
              <button class="e-btn e-primary">Three</button>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Success:</p>
            <div class="e-btn-group">
              <button class="e-btn e-success">Accept</button>
              <button class="e-btn e-success">Pending</button>
              <button class="e-btn e-success">Complete</button>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Outline:</p>
            <div class="e-btn-group">
              <button class="e-btn e-outline">First</button>
              <button class="e-btn e-outline">Second</button>
              <button class="e-btn e-outline">Third</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Vertical ButtonGroup -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Vertical ButtonGroup</h2>
        <p class="text-gray-600 mb-6">
          CSS class: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-vertical</code>
        </p>
        <div class="flex gap-8">
          <div>
            <p class="text-sm text-gray-500 mb-2">Single Selection:</p>
            <div class="e-btn-group e-vertical">
              <input id="v-option1" type="radio" name="v-options" value="1" checked>
              <label class="e-btn" for="v-option1">Option 1</label>
              <input id="v-option2" type="radio" name="v-options" value="2">
              <label class="e-btn" for="v-option2">Option 2</label>
              <input id="v-option3" type="radio" name="v-options" value="3">
              <label class="e-btn" for="v-option3">Option 3</label>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Multiple Selection:</p>
            <div class="e-btn-group e-vertical">
              <input id="v-check1" type="checkbox" value="1">
              <label class="e-btn" for="v-check1">Feature A</label>
              <input id="v-check2" type="checkbox" value="2" checked>
              <label class="e-btn" for="v-check2">Feature B</label>
              <input id="v-check3" type="checkbox" value="3">
              <label class="e-btn" for="v-check3">Feature C</label>
            </div>
          </div>
        </div>
      </section>

      <!-- 7. Sizes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Button Sizes</h2>
        <p class="text-gray-600 mb-6">Different button sizes using CSS classes</p>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Small:</p>
            <div class="e-btn-group">
              <button class="e-btn e-small">Small</button>
              <button class="e-btn e-small">Buttons</button>
              <button class="e-btn e-small">Here</button>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Normal (Default):</p>
            <div class="e-btn-group">
              <button class="e-btn">Normal</button>
              <button class="e-btn">Buttons</button>
              <button class="e-btn">Here</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. Disabled State -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Disabled State</h2>
        <p class="text-gray-600 mb-6">Disabled buttons in a group</p>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Mixed enabled/disabled:</p>
            <div class="e-btn-group">
              <button class="e-btn">Enabled</button>
              <button class="e-btn" disabled>Disabled</button>
              <button class="e-btn">Enabled</button>
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">All disabled:</p>
            <div class="e-btn-group">
              <button class="e-btn" disabled>First</button>
              <button class="e-btn" disabled>Second</button>
              <button class="e-btn" disabled>Third</button>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. API Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">CSS Class</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-btn-group</td>
                <td class="px-4 py-3 text-sm text-gray-600">Container class for button group</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-vertical</td>
                <td class="px-4 py-3 text-sm text-gray-600">Makes button group vertical</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-btn</td>
                <td class="px-4 py-3 text-sm text-gray-600">Button class (on label for selection)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-icon-btn</td>
                <td class="px-4 py-3 text-sm text-gray-600">Icon-only button style</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type="radio"</td>
                <td class="px-4 py-3 text-sm text-gray-600">Single selection mode</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type="checkbox"</td>
                <td class="px-4 py-3 text-sm text-gray-600">Multiple selection mode</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
