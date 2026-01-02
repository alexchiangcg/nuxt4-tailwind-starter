<script setup lang="ts">
import { DialogUtility } from '@syncfusion/ej2-vue-popups'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Result tracking
const lastResult = ref<string>('')

// Basic Alert
const showBasicAlert = () => {
  DialogUtility.alert({
    title: 'Alert',
    content: 'This is a basic alert dialog.',
    okButton: { click: () => { lastResult.value = 'Alert: OK clicked' } }
  })
}

// Alert with custom content
const showCustomAlert = () => {
  DialogUtility.alert({
    title: 'Low Battery',
    content: '10% battery remaining. Please connect to power.',
    width: '300px',
    okButton: { text: 'Dismiss', click: () => { lastResult.value = 'Alert: Dismissed' } }
  })
}

// Alert with animation
const showAnimatedAlert = () => {
  DialogUtility.alert({
    title: 'Welcome!',
    content: 'Thank you for signing up.',
    width: '280px',
    animationSettings: { effect: 'Zoom' },
    okButton: { text: 'Get Started', click: () => { lastResult.value = 'Alert: Get Started clicked' } }
  })
}

// Basic Confirm
const showBasicConfirm = () => {
  DialogUtility.confirm({
    title: 'Confirm',
    content: 'Are you sure you want to proceed?',
    okButton: { click: () => { lastResult.value = 'Confirm: OK clicked' } },
    cancelButton: { click: () => { lastResult.value = 'Confirm: Cancelled' } }
  })
}

// Delete Confirm
const showDeleteConfirm = () => {
  DialogUtility.confirm({
    title: 'Delete Item',
    content: 'Are you sure you want to permanently delete this item? This action cannot be undone.',
    width: '350px',
    okButton: { text: 'Delete', cssClass: 'e-danger', click: () => { lastResult.value = 'Confirm: Item deleted' } },
    cancelButton: { text: 'Cancel', click: () => { lastResult.value = 'Confirm: Deletion cancelled' } }
  })
}

// Confirm with custom buttons
const showCustomConfirm = () => {
  DialogUtility.confirm({
    title: 'Save Changes',
    content: 'Do you want to save changes before closing?',
    width: '320px',
    okButton: { text: 'Save', cssClass: 'e-success', click: () => { lastResult.value = 'Confirm: Changes saved' } },
    cancelButton: { text: "Don't Save", click: () => { lastResult.value = 'Confirm: Changes discarded' } }
  })
}

// Draggable Confirm
const showDraggableConfirm = () => {
  DialogUtility.confirm({
    title: 'Move to Trash',
    content: 'Move selected items to trash?',
    width: '300px',
    isDraggable: true,
    okButton: { text: 'Move', click: () => { lastResult.value = 'Confirm: Items moved to trash' } },
    cancelButton: { text: 'Cancel', click: () => { lastResult.value = 'Confirm: Cancelled' } }
  })
}

// Confirm with position
const showPositionedConfirm = () => {
  DialogUtility.confirm({
    title: 'Positioned Dialog',
    content: 'This dialog is positioned at the center.',
    width: '300px',
    position: { X: 'center', Y: 'center' },
    okButton: { click: () => { lastResult.value = 'Confirm: Confirmed' } },
    cancelButton: { click: () => { lastResult.value = 'Confirm: Cancelled' } }
  })
}

// Confirm with Zoom animation
const showZoomConfirm = () => {
  DialogUtility.confirm({
    title: 'Zoom Animation',
    content: 'This dialog uses zoom animation effect.',
    width: '300px',
    animationSettings: { effect: 'Zoom' },
    okButton: { click: () => { lastResult.value = 'Confirm: OK clicked' } },
    cancelButton: { click: () => { lastResult.value = 'Confirm: Cancelled' } }
  })
}

// Prompt Dialog (using confirm with custom content)
let promptDialog: any = null
const showPrompt = () => {
  promptDialog = DialogUtility.confirm({
    title: 'Enter Your Name',
    content: '<p style="margin-bottom:10px">Please enter your name:</p><input id="promptInput" type="text" class="e-input" placeholder="Type here..." style="width:100%" />',
    width: '320px',
    okButton: {
      text: 'Submit',
      click: () => {
        const input = document.getElementById('promptInput') as HTMLInputElement
        const value = input?.value || ''
        lastResult.value = value ? `Prompt: Name entered - "${value}"` : 'Prompt: No name entered'
        promptDialog?.hide()
      }
    },
    cancelButton: {
      text: 'Cancel',
      click: () => {
        lastResult.value = 'Prompt: Cancelled'
        promptDialog?.hide()
      }
    }
  })
}

// Email prompt
const showEmailPrompt = () => {
  promptDialog = DialogUtility.confirm({
    title: 'Subscribe to Newsletter',
    content: '<div style="margin-bottom:15px"><p style="margin-bottom:10px">Enter your email address:</p><input id="emailInput" type="email" class="e-input" placeholder="email@example.com" style="width:100%" /></div>',
    width: '350px',
    okButton: {
      text: 'Subscribe',
      cssClass: 'e-success',
      click: () => {
        const input = document.getElementById('emailInput') as HTMLInputElement
        const value = input?.value || ''
        lastResult.value = value ? `Prompt: Subscribed with "${value}"` : 'Prompt: No email provided'
        promptDialog?.hide()
      }
    },
    cancelButton: {
      text: 'No Thanks',
      click: () => {
        lastResult.value = 'Prompt: Subscription cancelled'
        promptDialog?.hide()
      }
    }
  })
}

// Warning dialog
const showWarningDialog = () => {
  DialogUtility.alert({
    title: 'Warning',
    content: '<div style="display:flex;align-items:center;gap:10px"><span style="font-size:24px;color:#F59E0B">&#9888;</span><span>You have unsaved changes that will be lost.</span></div>',
    width: '320px',
    cssClass: 'e-warning-dialog',
    okButton: { text: 'I Understand', click: () => { lastResult.value = 'Warning: Acknowledged' } }
  })
}

// Success dialog
const showSuccessDialog = () => {
  DialogUtility.alert({
    title: 'Success',
    content: '<div style="text-align:center"><div style="font-size:48px;color:#10B981;margin-bottom:10px">&#10004;</div><p>Your changes have been saved successfully!</p></div>',
    width: '300px',
    animationSettings: { effect: 'Zoom' },
    okButton: { text: 'Great!', cssClass: 'e-success', click: () => { lastResult.value = 'Success: Acknowledged' } }
  })
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Predefined Dialogs</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-popups</code>
      </p>
    </div>

    <!-- Result Display -->
    <div class="mb-8 p-4 bg-gray-100 rounded-lg">
      <p class="text-sm text-gray-600">
        <span class="font-medium">Last Action:</span>
        <span class="ml-2">{{ lastResult || 'Click a button to see results...' }}</span>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Alert Dialogs -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Alert Dialogs</h2>
        <p class="text-gray-600 mb-6">
          Method: <code class="text-sm bg-gray-100 px-2 py-1 rounded">DialogUtility.alert()</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            @click="showBasicAlert"
          >
            Basic Alert
          </button>
          <button
            class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            @click="showCustomAlert"
          >
            Low Battery Alert
          </button>
          <button
            class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            @click="showAnimatedAlert"
          >
            Animated Alert
          </button>
        </div>
      </section>

      <!-- 2. Confirm Dialogs -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Confirm Dialogs</h2>
        <p class="text-gray-600 mb-6">
          Method: <code class="text-sm bg-gray-100 px-2 py-1 rounded">DialogUtility.confirm()</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            @click="showBasicConfirm"
          >
            Basic Confirm
          </button>
          <button
            class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            @click="showDeleteConfirm"
          >
            Delete Confirm
          </button>
          <button
            class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            @click="showCustomConfirm"
          >
            Save Changes
          </button>
        </div>
      </section>

      <!-- 3. Confirm Options -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Confirm with Options</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">isDraggable</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">position</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">animationSettings</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <button
            class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            @click="showDraggableConfirm"
          >
            Draggable
          </button>
          <button
            class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition"
            @click="showPositionedConfirm"
          >
            Positioned
          </button>
          <button
            class="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
            @click="showZoomConfirm"
          >
            Zoom Animation
          </button>
        </div>
      </section>

      <!-- 4. Prompt Dialogs -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Prompt Dialogs</h2>
        <p class="text-gray-600 mb-6">Using confirm with custom HTML content for input</p>
        <div class="flex flex-wrap gap-4">
          <button
            class="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
            @click="showPrompt"
          >
            Enter Name
          </button>
          <button
            class="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
            @click="showEmailPrompt"
          >
            Subscribe Email
          </button>
        </div>
      </section>

      <!-- 5. Custom Styled Dialogs -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Custom Styled Dialogs</h2>
        <p class="text-gray-600 mb-6">Dialogs with custom HTML content and styling</p>
        <div class="flex flex-wrap gap-4">
          <button
            class="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
            @click="showWarningDialog"
          >
            Warning
          </button>
          <button
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            @click="showSuccessDialog"
          >
            Success
          </button>
        </div>
      </section>

      <!-- 6. Code Examples -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Code Examples</h2>
        <div class="space-y-4">
          <div class="p-4 bg-gray-900 rounded-lg">
            <p class="text-gray-400 text-sm mb-2">// Alert Dialog</p>
            <pre class="text-green-400 text-sm font-mono">DialogUtility.alert({
  title: 'Alert',
  content: 'Your message here',
  okButton: { text: 'OK' }
})</pre>
          </div>
          <div class="p-4 bg-gray-900 rounded-lg">
            <p class="text-gray-400 text-sm mb-2">// Confirm Dialog</p>
            <pre class="text-blue-400 text-sm font-mono">DialogUtility.confirm({
  title: 'Confirm',
  content: 'Are you sure?',
  okButton: { text: 'Yes', click: () => {} },
  cancelButton: { text: 'No', click: () => {} }
})</pre>
          </div>
          <div class="p-4 bg-gray-900 rounded-lg">
            <p class="text-gray-400 text-sm mb-2">// With Options</p>
            <pre class="text-purple-400 text-sm font-mono">DialogUtility.confirm({
  title: 'Title',
  content: 'Content',
  width: '300px',
  isDraggable: true,
  animationSettings: { effect: 'Zoom' },
  position: { X: 'center', Y: 'center' }
})</pre>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">title</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Dialog title text</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">content</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Dialog content (supports HTML)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">width</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Dialog width (e.g., '300px')</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">okButton</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">OK button config (text, click, cssClass)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cancelButton</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Cancel button config (confirm only)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">isDraggable</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable dialog dragging</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">position</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Dialog position { X, Y }</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">animationSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Animation effect (Zoom, Fade, etc.)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom CSS class for styling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 8. Available Methods -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. DialogUtility Methods</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-blue-50 rounded-lg">
            <h3 class="font-semibold text-blue-800 mb-2">DialogUtility.alert()</h3>
            <p class="text-sm text-blue-700">Display an alert dialog with OK button. Used for informational messages.</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-2">DialogUtility.confirm()</h3>
            <p class="text-sm text-green-700">Display a confirm dialog with OK and Cancel buttons. Used for user decisions.</p>
          </div>
        </div>
        <div class="mt-4 p-4 bg-gray-50 rounded-lg">
          <p class="text-sm text-gray-600">
            <strong>Note:</strong> Prompt dialogs are created using <code class="bg-gray-200 px-1 rounded">confirm()</code>
            with custom HTML content containing an input field.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
/* Custom styles for predefined dialogs */
.e-warning-dialog .e-dlg-header {
  color: #F59E0B;
}
</style>
