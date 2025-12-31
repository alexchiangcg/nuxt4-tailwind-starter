<script setup lang="ts">
import { createSpinner, showSpinner, hideSpinner, setSpinner } from '@syncfusion/ej2-vue-popups'
import { onMounted, ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const isLoading = ref(false)

onMounted(() => {
  // Create spinners for demo containers
  const containers = [
    'spinner-basic',
    'spinner-material',
    'spinner-fabric',
    'spinner-bootstrap',
    'spinner-bootstrap4',
    'spinner-tailwind'
  ]

  containers.forEach(id => {
    const element = document.getElementById(id)
    if (element) {
      createSpinner({ target: element })
    }
  })
})

const showBasicSpinner = () => {
  const element = document.getElementById('spinner-basic')
  if (element) {
    showSpinner(element)
    setTimeout(() => hideSpinner(element), 3000)
  }
}

const showMaterialSpinner = () => {
  const element = document.getElementById('spinner-material')
  if (element) {
    setSpinner({ type: 'Material' })
    createSpinner({ target: element, type: 'Material' })
    showSpinner(element)
    setTimeout(() => hideSpinner(element), 3000)
  }
}

const showFabricSpinner = () => {
  const element = document.getElementById('spinner-fabric')
  if (element) {
    createSpinner({ target: element, type: 'Fabric' })
    showSpinner(element)
    setTimeout(() => hideSpinner(element), 3000)
  }
}

const showBootstrapSpinner = () => {
  const element = document.getElementById('spinner-bootstrap')
  if (element) {
    createSpinner({ target: element, type: 'Bootstrap' })
    showSpinner(element)
    setTimeout(() => hideSpinner(element), 3000)
  }
}

const showBootstrap4Spinner = () => {
  const element = document.getElementById('spinner-bootstrap4')
  if (element) {
    createSpinner({ target: element, type: 'Bootstrap4' })
    showSpinner(element)
    setTimeout(() => hideSpinner(element), 3000)
  }
}

const showTailwindSpinner = () => {
  const element = document.getElementById('spinner-tailwind')
  if (element) {
    createSpinner({ target: element, type: 'Tailwind' })
    showSpinner(element)
    setTimeout(() => hideSpinner(element), 3000)
  }
}

const showCustomSpinner = () => {
  const element = document.getElementById('spinner-custom')
  if (element) {
    createSpinner({
      target: element,
      width: 50,
      label: 'Loading...'
    })
    showSpinner(element)
    setTimeout(() => hideSpinner(element), 3000)
  }
}

const showLargeSpinner = () => {
  const element = document.getElementById('spinner-large')
  if (element) {
    createSpinner({ target: element, width: 60 })
    showSpinner(element)
    setTimeout(() => hideSpinner(element), 3000)
  }
}

const showSmallSpinner = () => {
  const element = document.getElementById('spinner-small')
  if (element) {
    createSpinner({ target: element, width: 20 })
    showSpinner(element)
    setTimeout(() => hideSpinner(element), 3000)
  }
}

const toggleLoading = () => {
  const element = document.getElementById('spinner-toggle')
  if (!element) return

  if (!isLoading.value) {
    createSpinner({ target: element, label: 'Processing...' })
    showSpinner(element)
    isLoading.value = true
  } else {
    hideSpinner(element)
    isLoading.value = false
  }
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Spinner Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-popups</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Spinner -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Spinner</h2>
        <p class="text-gray-600 mb-6">Click the button to show spinner for 3 seconds</p>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
          @click="showBasicSpinner"
        >
          Show Spinner
        </button>
        <div id="spinner-basic" class="relative min-h-[150px] border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
          <span class="text-gray-400">Spinner will appear here</span>
        </div>
      </section>

      <!-- 2. Spinner Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Spinner Types</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">type</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <button
              class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
              @click="showMaterialSpinner"
            >
              Material
            </button>
            <div id="spinner-material" class="relative min-h-[120px] border border-gray-200 rounded-lg bg-gray-50" />
          </div>
          <div>
            <button
              class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
              @click="showFabricSpinner"
            >
              Fabric
            </button>
            <div id="spinner-fabric" class="relative min-h-[120px] border border-gray-200 rounded-lg bg-gray-50" />
          </div>
          <div>
            <button
              class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
              @click="showBootstrapSpinner"
            >
              Bootstrap
            </button>
            <div id="spinner-bootstrap" class="relative min-h-[120px] border border-gray-200 rounded-lg bg-gray-50" />
          </div>
          <div>
            <button
              class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
              @click="showBootstrap4Spinner"
            >
              Bootstrap4
            </button>
            <div id="spinner-bootstrap4" class="relative min-h-[120px] border border-gray-200 rounded-lg bg-gray-50" />
          </div>
          <div>
            <button
              class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
              @click="showTailwindSpinner"
            >
              Tailwind
            </button>
            <div id="spinner-tailwind" class="relative min-h-[120px] border border-gray-200 rounded-lg bg-gray-50" />
          </div>
        </div>
      </section>

      <!-- 3. Spinner Sizes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Spinner Sizes</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">width</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <button
              class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
              @click="showSmallSpinner"
            >
              Small (20px)
            </button>
            <div id="spinner-small" class="relative min-h-[100px] border border-gray-200 rounded-lg bg-gray-50" />
          </div>
          <div>
            <button
              class="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
              @click="showLargeSpinner"
            >
              Large (60px)
            </button>
            <div id="spinner-large" class="relative min-h-[100px] border border-gray-200 rounded-lg bg-gray-50" />
          </div>
        </div>
      </section>

      <!-- 4. With Label -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Spinner with Label</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">label</code>
        </p>
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
          @click="showCustomSpinner"
        >
          Show with Label
        </button>
        <div id="spinner-custom" class="relative min-h-[150px] border border-gray-200 rounded-lg bg-gray-50" />
      </section>

      <!-- 5. Toggle Spinner -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Toggle Spinner</h2>
        <p class="text-gray-600 mb-6">Show/hide spinner programmatically</p>
        <button
          class="px-4 py-2 rounded mb-4"
          :class="isLoading ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'"
          @click="toggleLoading"
        >
          {{ isLoading ? 'Hide Spinner' : 'Show Spinner' }}
        </button>
        <div id="spinner-toggle" class="relative min-h-[150px] border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center">
          <span v-if="!isLoading" class="text-gray-400">Content area</span>
        </div>
      </section>

      <!-- 6. Usage Example -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Code Example</h2>
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre class="text-sm text-gray-100"><code>import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-vue-popups'

// Create spinner on target element
createSpinner({
  target: document.getElementById('container'),
  width: 40,
  label: 'Loading...',
  type: 'Material'  // Material, Fabric, Bootstrap, Bootstrap4, Tailwind
})

// Show the spinner
showSpinner(document.getElementById('container'))

// Hide the spinner
hideSpinner(document.getElementById('container'))</code></pre>
        </div>
      </section>

      <!-- 7. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. API Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method/Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">createSpinner()</td>
                <td class="px-4 py-3 text-sm text-gray-600">function</td>
                <td class="px-4 py-3 text-sm text-gray-600">Create a spinner on target element</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showSpinner()</td>
                <td class="px-4 py-3 text-sm text-gray-600">function</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show the spinner</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">hideSpinner()</td>
                <td class="px-4 py-3 text-sm text-gray-600">function</td>
                <td class="px-4 py-3 text-sm text-gray-600">Hide the spinner</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">setSpinner()</td>
                <td class="px-4 py-3 text-sm text-gray-600">function</td>
                <td class="px-4 py-3 text-sm text-gray-600">Set global spinner settings</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">target</td>
                <td class="px-4 py-3 text-sm text-gray-600">HTMLElement</td>
                <td class="px-4 py-3 text-sm text-gray-600">Container element for spinner</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">width</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Spinner size in pixels</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">label</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Text label below spinner</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Material, Fabric, Bootstrap, Bootstrap4, Tailwind</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
