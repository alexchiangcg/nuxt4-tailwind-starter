<script setup lang="ts">
import { MessageComponent as EjsMessage } from '@syncfusion/ej2-vue-notifications'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const showMessage = ref(true)
const toggleMessage = () => {
  showMessage.value = !showMessage.value
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Message Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-notifications</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Message -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Message</h2>
        <p class="text-gray-600 mb-6">Default message without severity</p>
        <ejs-message id="basic-msg" content="This is a basic message" />
      </section>

      <!-- 2. Severity Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Severity Types</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">severity</code>
        </p>
        <div class="space-y-4">
          <ejs-message id="msg-normal" content="Normal: General information message" />
          <ejs-message id="msg-info" content="Info: Please read the instructions carefully" severity="Info" />
          <ejs-message id="msg-success" content="Success: Your changes have been saved successfully!" severity="Success" />
          <ejs-message id="msg-warning" content="Warning: Your session will expire in 5 minutes" severity="Warning" />
          <ejs-message id="msg-error" content="Error: Failed to connect to the server" severity="Error" />
        </div>
      </section>

      <!-- 3. Variants -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Variants</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">variant</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Filled (Default)</h3>
            <div class="space-y-2">
              <ejs-message id="filled-info" content="Info message" severity="Info" variant="Filled" />
              <ejs-message id="filled-success" content="Success message" severity="Success" variant="Filled" />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Outlined</h3>
            <div class="space-y-2">
              <ejs-message id="outlined-info" content="Info message" severity="Info" variant="Outlined" />
              <ejs-message id="outlined-success" content="Success message" severity="Success" variant="Outlined" />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Text</h3>
            <div class="space-y-2">
              <ejs-message id="text-info" content="Info message" severity="Info" variant="Text" />
              <ejs-message id="text-success" content="Success message" severity="Success" variant="Text" />
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Icons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Icons</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">showIcon</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">showCloseIcon</code>
        </p>
        <div class="space-y-4">
          <div>
            <label class="text-sm font-medium text-gray-700 block mb-2">With Icon (default)</label>
            <ejs-message id="icon-msg" content="Message with severity icon" severity="Info" :show-icon="true" />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-700 block mb-2">Without Icon</label>
            <ejs-message id="no-icon-msg" content="Message without icon" severity="Info" :show-icon="false" />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-700 block mb-2">With Close Icon</label>
            <ejs-message id="close-icon-msg" content="Click X to dismiss this message" severity="Warning" :show-close-icon="true" />
          </div>
        </div>
      </section>

      <!-- 5. Content Alignment -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Content Alignment</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cssClass</code>
        </p>
        <div class="space-y-4">
          <div>
            <label class="text-sm font-medium text-gray-700 block mb-2">Left (default)</label>
            <ejs-message id="left-msg" content="Left aligned content" severity="Info" />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-700 block mb-2">Center</label>
            <ejs-message id="center-msg" content="Center aligned content" severity="Info" css-class="e-content-center" />
          </div>
          <div>
            <label class="text-sm font-medium text-gray-700 block mb-2">Right</label>
            <ejs-message id="right-msg" content="Right aligned content" severity="Info" css-class="e-content-right" />
          </div>
        </div>
      </section>

      <!-- 6. Dynamic Visibility -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Dynamic Visibility</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">visible</code>
        </p>
        <div class="space-y-4">
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="toggleMessage"
          >
            {{ showMessage ? 'Hide' : 'Show' }} Message
          </button>
          <ejs-message
            id="toggle-msg"
            content="This message can be toggled"
            severity="Success"
            :visible="showMessage"
          />
        </div>
      </section>

      <!-- 7. Custom Content with Slot -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Rich Content</h2>
        <p class="text-gray-600 mb-6">Using content property with HTML</p>
        <ejs-message id="rich-msg" severity="Info">
          <template #content>
            <div>
              <strong>Important:</strong> Please review the
              <a href="#" class="underline">terms and conditions</a>
              before proceeding.
            </div>
          </template>
        </ejs-message>
      </section>

      <!-- 8. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">content</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Message text content</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">severity</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Normal | Info | Success | Warning | Error</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">variant</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Filled | Outlined | Text</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showIcon</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show severity icon</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showCloseIcon</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show close/dismiss button</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">visible</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Toggle message visibility</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
