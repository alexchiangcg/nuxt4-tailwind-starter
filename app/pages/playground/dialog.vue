<script setup lang="ts">
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const basicDialogVisible = ref(false)
const modalDialogVisible = ref(false)
const customDialogVisible = ref(false)
const positionDialogVisible = ref(false)

const openBasicDialog = () => { basicDialogVisible.value = true }
const openModalDialog = () => { modalDialogVisible.value = true }
const openCustomDialog = () => { customDialogVisible.value = true }
const openPositionDialog = () => { positionDialogVisible.value = true }
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Dialog Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-popups</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Dialog -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Dialog</h2>
        <p class="text-gray-600 mb-6">Simple dialog with default settings</p>
        <ejs-button css-class="e-primary" @click="openBasicDialog">Open Dialog</ejs-button>

        <ejs-dialog
          v-model:visible="basicDialogVisible"
          header="Basic Dialog"
          :width="'400px'"
          :show-close-icon="true"
        >
          <div class="p-4">
            This is a basic dialog with default settings.
          </div>
        </ejs-dialog>
      </section>

      <!-- 2. Modal Dialog -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Modal Dialog</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">isModal</code>
        </p>
        <ejs-button css-class="e-success" @click="openModalDialog">Open Modal Dialog</ejs-button>

        <ejs-dialog
          v-model:visible="modalDialogVisible"
          header="Modal Dialog"
          :width="'450px'"
          :show-close-icon="true"
          :is-modal="true"
        >
          <div class="p-4">
            This is a modal dialog. The background is overlaid and you must close this dialog to interact with the page.
          </div>
        </ejs-dialog>
      </section>

      <!-- 3. Custom Width and Height -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Custom Dimensions</h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">width</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">height</code>
        </p>
        <ejs-button css-class="e-info" @click="openCustomDialog">Open Custom Size Dialog</ejs-button>

        <ejs-dialog
          v-model:visible="customDialogVisible"
          header="Custom Size Dialog"
          :width="'600px'"
          :height="'400px'"
          :show-close-icon="true"
          :is-modal="true"
        >
          <div class="p-4">
            This dialog has custom width (600px) and height (400px).
          </div>
        </ejs-dialog>
      </section>

      <!-- 4. Position -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Dialog Position</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">position</code>
        </p>
        <ejs-button css-class="e-warning" @click="openPositionDialog">Open Positioned Dialog</ejs-button>

        <ejs-dialog
          v-model:visible="positionDialogVisible"
          header="Positioned Dialog"
          :width="'400px'"
          :show-close-icon="true"
          :position="{ X: 'right', Y: 'top' }"
        >
          <div class="p-4">
            This dialog is positioned at the top-right corner.
          </div>
        </ejs-dialog>
      </section>

      <!-- 5. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">visible</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show or hide the dialog</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">header</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Dialog header text</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">width</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Dialog width</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">height</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Dialog height</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">isModal</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable modal overlay</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showCloseIcon</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show close button</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">position</td>
                <td class="px-4 py-3 text-sm text-gray-600">Object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Dialog position {X, Y}</td>
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
@import '@syncfusion/ej2-vue-popups/styles/material.css';
</style>
