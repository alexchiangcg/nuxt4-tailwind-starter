<script setup lang="ts">
import { TabComponent as EjsTab, TabItemDirective as ETabitem, TabItemsDirective as ETabitems } from '@syncfusion/ej2-vue-navigations'
import { provide } from 'vue'

definePageMeta({
  layout: 'playground'
})

const header0 = { text: 'Twitter' }
const header1 = { text: 'Facebook' }
const header2 = { text: 'WhatsApp' }

provide('tab', [])
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Tab Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-navigations</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Tab -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Tab</h2>
        <p class="text-gray-600 mb-6">Simple tab component with multiple tabs</p>
        <ejs-tab>
          <e-tabitems>
            <e-tabitem :header="header0">
              <template #content>
                <div class="p-4">
                  <h3 class="font-semibold mb-2">Twitter Content</h3>
                  <p>Twitter is a microblogging and social networking service where users post and interact with messages known as tweets.</p>
                </div>
              </template>
            </e-tabitem>
            <e-tabitem :header="header1">
              <template #content>
                <div class="p-4">
                  <h3 class="font-semibold mb-2">Facebook Content</h3>
                  <p>Facebook is a social media and social networking service owned by Meta Platforms.</p>
                </div>
              </template>
            </e-tabitem>
            <e-tabitem :header="header2">
              <template #content>
                <div class="p-4">
                  <h3 class="font-semibold mb-2">WhatsApp Content</h3>
                  <p>WhatsApp is a freeware, cross-platform, centralized instant messaging and voice-over-IP service.</p>
                </div>
              </template>
            </e-tabitem>
          </e-tabitems>
        </ejs-tab>
      </section>

      <!-- 2. Header Placement -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Header Placement</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">headerPlacement</code>
        </p>

        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Top (default)</h3>
            <ejs-tab header-placement="Top">
              <e-tabitems>
                <e-tabitem :header="{ text: 'Tab 1' }">
                  <template #content>
                    <div class="p-4">Content for Tab 1</div>
                  </template>
                </e-tabitem>
                <e-tabitem :header="{ text: 'Tab 2' }">
                  <template #content>
                    <div class="p-4">Content for Tab 2</div>
                  </template>
                </e-tabitem>
              </e-tabitems>
            </ejs-tab>
          </div>

          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-2">Bottom</h3>
            <ejs-tab header-placement="Bottom">
              <e-tabitems>
                <e-tabitem :header="{ text: 'Tab 1' }">
                  <template #content>
                    <div class="p-4">Content for Tab 1</div>
                  </template>
                </e-tabitem>
                <e-tabitem :header="{ text: 'Tab 2' }">
                  <template #content>
                    <div class="p-4">Content for Tab 2</div>
                  </template>
                </e-tabitem>
              </e-tabitems>
            </ejs-tab>
          </div>
        </div>
      </section>

      <!-- 3. Orientation -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Vertical Orientation</h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">orientation</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">headerPlacement</code>
        </p>

        <ejs-tab orientation="Vertical" header-placement="Left">
          <e-tabitems>
            <e-tabitem :header="{ text: 'Left Tab 1' }">
              <template #content>
                <div class="p-4">
                  <h3 class="font-semibold mb-2">Vertical Tab Content 1</h3>
                  <p>This tab is oriented vertically with headers on the left.</p>
                </div>
              </template>
            </e-tabitem>
            <e-tabitem :header="{ text: 'Left Tab 2' }">
              <template #content>
                <div class="p-4">
                  <h3 class="font-semibold mb-2">Vertical Tab Content 2</h3>
                  <p>The orientation property is set to 'Vertical'.</p>
                </div>
              </template>
            </e-tabitem>
            <e-tabitem :header="{ text: 'Left Tab 3' }">
              <template #content>
                <div class="p-4">
                  <h3 class="font-semibold mb-2">Vertical Tab Content 3</h3>
                  <p>Headers are placed on the left side.</p>
                </div>
              </template>
            </e-tabitem>
          </e-tabitems>
        </ejs-tab>
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
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Default</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">selectedItem</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Index of the selected tab</td>
                <td class="px-4 py-3 text-sm text-gray-600">0</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">headerPlacement</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Tab header position</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Top'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">orientation</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Tab orientation (Horizontal/Vertical)</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Horizontal'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">heightAdjustMode</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Content height adjustment</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Content'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom CSS classes</td>
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
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-vue-navigations/styles/material.css';
</style>
