<script setup lang="ts">
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const sampleValue = ref('Sample Text')
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">TextBox Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic TextBox -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic TextBox
        </h2>
        <p class="text-gray-600 mb-6">Default TextBox without any customization</p>
        <div class="flex flex-col gap-2 max-w-sm">
          <ejs-textbox placeholder="Enter text" />
        </div>
      </section>

      <!-- 2. Floating Label Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Floating Label Types
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">floatLabelType</code>
        </p>
        <div class="space-y-4 max-w-sm">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Never (default)</label>
            <ejs-textbox placeholder="Enter your name" float-label-type="Never" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Auto</label>
            <ejs-textbox placeholder="Enter your email" float-label-type="Auto" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Always</label>
            <ejs-textbox placeholder="Enter your address" float-label-type="Always" />
          </div>
        </div>
      </section>

      <!-- 3. Input Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Input Types
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">type</code>
        </p>
        <div class="space-y-4 max-w-sm">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Text (default)</label>
            <ejs-textbox placeholder="Enter text" type="text" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Password</label>
            <ejs-textbox placeholder="Enter password" type="password" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Email</label>
            <ejs-textbox placeholder="Enter email" type="email" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Number</label>
            <ejs-textbox placeholder="Enter number" type="number" />
          </div>
        </div>
      </section>

      <!-- 4. Multiline TextBox -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Multiline TextBox (Textarea)
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">multiline</code>
        </p>
        <div class="space-y-4 max-w-sm">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Basic Multiline</label>
            <ejs-textbox :multiline="true" placeholder="Enter your message" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">With Floating Label</label>
            <ejs-textbox :multiline="true" placeholder="Enter description" float-label-type="Auto" />
          </div>
        </div>
      </section>

      <!-- 5. With Icons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. TextBox with Icons
        </h2>
        <p class="text-gray-600 mb-6">Using CSS classes to add icons</p>
        <div class="space-y-4 max-w-sm">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Left Icon</label>
            <ejs-textbox placeholder="Search" css-class="e-search" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Email Icon</label>
            <ejs-textbox placeholder="Email" css-class="e-email" />
          </div>
        </div>
      </section>

      <!-- 6. States -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. States
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">readonly</code>
        </p>
        <div class="space-y-4 max-w-sm">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Normal</label>
            <ejs-textbox :value="sampleValue" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Disabled</label>
            <ejs-textbox :value="sampleValue" :enabled="false" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Readonly</label>
            <ejs-textbox :value="sampleValue" :readonly="true" />
          </div>
        </div>
      </section>

      <!-- 7. Show/Hide Clear Button -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Clear Button
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">showClearButton</code>
        </p>
        <div class="space-y-4 max-w-sm">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">With Clear Button</label>
            <ejs-textbox :value="sampleValue" :show-clear-button="true" placeholder="Type something" />
          </div>
        </div>
      </section>

      <!-- 8. CSS Class -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. Custom Styling
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cssClass</code>
        </p>
        <div class="space-y-4 max-w-sm">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Success Style</label>
            <ejs-textbox placeholder="Valid input" css-class="e-success" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Warning Style</label>
            <ejs-textbox placeholder="Warning input" css-class="e-warning" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Error Style</label>
            <ejs-textbox placeholder="Invalid input" css-class="e-error" />
          </div>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">The input text value</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">placeholder</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Placeholder text</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">floatLabelType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Floating label behavior</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Never'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Input type (text, password, email, etc.)</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'text'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">multiline</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable multiline textarea</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable or disable the component</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">readonly</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Make the component readonly</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showClearButton</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show clear button to reset value</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom CSS class names</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
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
@import '@syncfusion/ej2-inputs/styles/material.css';
</style>
