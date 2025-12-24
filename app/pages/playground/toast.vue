<script setup lang="ts">
import { ToastComponent as EjsToast } from '@syncfusion/ej2-vue-notifications'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const toastRef = ref(null)

const showSuccessToast = () => {
  toastRef.value.show({
    title: 'Success!',
    content: 'Your operation completed successfully.',
    cssClass: 'e-toast-success',
    icon: 'e-success toast-icons'
  })
}

const showErrorToast = () => {
  toastRef.value.show({
    title: 'Error!',
    content: 'Something went wrong. Please try again.',
    cssClass: 'e-toast-danger',
    icon: 'e-error toast-icons'
  })
}

const showWarningToast = () => {
  toastRef.value.show({
    title: 'Warning!',
    content: 'This action may have consequences.',
    cssClass: 'e-toast-warning',
    icon: 'e-warning toast-icons'
  })
}

const showInfoToast = () => {
  toastRef.value.show({
    title: 'Information',
    content: 'Here is some useful information for you.',
    cssClass: 'e-toast-info',
    icon: 'e-info toast-icons'
  })
}

const showPositionToast = () => {
  toastRef.value.show({
    title: 'Custom Position',
    content: 'This toast appears at the top-right.',
  })
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Toast Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-notifications</code>
      </p>
    </div>

    <!-- Toast Container -->
    <ejs-toast
      ref="toastRef"
      :position="{ X: 'Right', Y: 'Top' }"
      :show-close-button="true"
    />

    <div class="space-y-10">
      <!-- 1. Toast Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Toast Types</h2>
        <p class="text-gray-600 mb-6">Different toast notification types with icons</p>
        <div class="flex flex-wrap gap-4">
          <ejs-button css-class="e-success" @click="showSuccessToast">
            Show Success Toast
          </ejs-button>
          <ejs-button css-class="e-danger" @click="showErrorToast">
            Show Error Toast
          </ejs-button>
          <ejs-button css-class="e-warning" @click="showWarningToast">
            Show Warning Toast
          </ejs-button>
          <ejs-button css-class="e-info" @click="showInfoToast">
            Show Info Toast
          </ejs-button>
        </div>
      </section>

      <!-- 2. Toast Position -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Toast Position</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">position</code>
        </p>
        <p class="text-sm text-gray-500 mb-4">
          Current position: Top-Right. Click the button to see the toast appear.
        </p>
        <ejs-button css-class="e-primary" @click="showPositionToast">
          Show Toast
        </ejs-button>
      </section>

      <!-- 3. Toast Content Structure -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Toast Content Structure</h2>
        <p class="text-gray-600 mb-6">Each toast can have a title, content, and icon</p>
        <div class="bg-gray-50 p-4 rounded border border-gray-200">
          <pre class="text-sm text-gray-800"><code>{
  title: 'Toast Title',
  content: 'Toast message content',
  cssClass: 'e-toast-success',
  icon: 'e-success toast-icons'
}</code></pre>
        </div>
      </section>

      <!-- 4. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">title</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Toast title text</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">content</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Toast message content</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">position</td>
                <td class="px-4 py-3 text-sm text-gray-600">Object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Toast position {X, Y}</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showCloseButton</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show close button</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">timeOut</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Auto-hide timeout in milliseconds</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom CSS class for styling</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">icon</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Icon CSS class</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 5. Available CSS Classes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Available CSS Classes</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">CSS Class</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Icon Class</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-green-600">Success</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">e-toast-success</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">e-success toast-icons</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-red-600">Error</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">e-toast-danger</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">e-error toast-icons</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-medium text-yellow-600">Warning</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">e-toast-warning</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">e-warning toast-icons</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-medium text-blue-600">Info</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">e-toast-info</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">e-info toast-icons</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-vue-notifications/styles/material.css';
</style>
