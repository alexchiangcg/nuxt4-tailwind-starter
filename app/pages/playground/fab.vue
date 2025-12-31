<script setup lang="ts">
import {
  FabComponent as EjsFab,
  SpeedDialComponent as EjsSpeeddial
} from '@syncfusion/ej2-vue-buttons'

definePageMeta({
  layout: 'playground'
})

// SpeedDial items
const speedDialItems = [
  { text: 'Cut', iconCss: 'e-icons e-cut' },
  { text: 'Copy', iconCss: 'e-icons e-copy' },
  { text: 'Paste', iconCss: 'e-icons e-paste' }
]

const radialItems = [
  { iconCss: 'e-icons e-cut' },
  { iconCss: 'e-icons e-copy' },
  { iconCss: 'e-icons e-paste' },
  { iconCss: 'e-icons e-edit' }
]

const actionItems = [
  { text: 'Home', iconCss: 'e-icons e-home' },
  { text: 'People', iconCss: 'e-icons e-people' },
  { text: 'Settings', iconCss: 'e-icons e-settings' },
  { text: 'Search', iconCss: 'e-icons e-search' }
]

const radialSettings = {
  offset: '80px',
  direction: 'Auto'
}

const onFabClick = () => {
  console.log('FAB clicked!')
}

const onItemClick = (args: any) => {
  console.log('SpeedDial item clicked:', args.item.text || args.item.iconCss)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Floating Action Button (FAB)</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-buttons</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic FAB -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic FAB</h2>
        <p class="text-gray-600 mb-6">Simple floating action button with icon</p>
        <div id="fab-target-1" class="relative min-h-[200px] border border-gray-300 rounded-lg bg-gray-50">
          <ejs-fab
            id="basic-fab"
            icon-css="e-icons e-plus"
            target="#fab-target-1"
            position="BottomRight"
            @click="onFabClick"
          />
        </div>
      </section>

      <!-- 2. FAB with Text -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. FAB with Text</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">content</code>
        </p>
        <div id="fab-target-2" class="relative min-h-[200px] border border-gray-300 rounded-lg bg-gray-50">
          <ejs-fab
            id="text-fab"
            icon-css="e-icons e-plus"
            content="Add"
            target="#fab-target-2"
            position="BottomRight"
          />
        </div>
      </section>

      <!-- 3. FAB Positions -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. FAB Positions</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">position</code>
        </p>
        <div id="fab-target-3" class="relative min-h-[300px] border border-gray-300 rounded-lg bg-gray-50">
          <ejs-fab id="fab-tl" icon-css="e-icons e-circle-add" target="#fab-target-3" position="TopLeft" />
          <ejs-fab id="fab-tc" icon-css="e-icons e-circle-add" target="#fab-target-3" position="TopCenter" />
          <ejs-fab id="fab-tr" icon-css="e-icons e-circle-add" target="#fab-target-3" position="TopRight" />
          <ejs-fab id="fab-ml" icon-css="e-icons e-circle-add" target="#fab-target-3" position="MiddleLeft" />
          <ejs-fab id="fab-mc" icon-css="e-icons e-circle-add" target="#fab-target-3" position="MiddleCenter" />
          <ejs-fab id="fab-mr" icon-css="e-icons e-circle-add" target="#fab-target-3" position="MiddleRight" />
          <ejs-fab id="fab-bl" icon-css="e-icons e-circle-add" target="#fab-target-3" position="BottomLeft" />
          <ejs-fab id="fab-bc" icon-css="e-icons e-circle-add" target="#fab-target-3" position="BottomCenter" />
          <ejs-fab id="fab-br" icon-css="e-icons e-circle-add" target="#fab-target-3" position="BottomRight" />
        </div>
        <p class="text-sm text-gray-500 mt-4">
          Positions: TopLeft, TopCenter, TopRight, MiddleLeft, MiddleCenter, MiddleRight, BottomLeft, BottomCenter, BottomRight
        </p>
      </section>

      <!-- 4. FAB Styles -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. FAB Styles</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cssClass</code>
        </p>
        <div id="fab-target-4" class="relative min-h-[200px] border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center gap-4 p-8">
          <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Primary</p>
            <ejs-fab id="primary-fab" icon-css="e-icons e-plus" css-class="e-primary" :is-primary="true" />
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Success</p>
            <ejs-fab id="success-fab" icon-css="e-icons e-check" css-class="e-success" />
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Info</p>
            <ejs-fab id="info-fab" icon-css="e-icons e-info" css-class="e-info" />
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Warning</p>
            <ejs-fab id="warning-fab" icon-css="e-icons e-warning" css-class="e-warning" />
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Danger</p>
            <ejs-fab id="danger-fab" icon-css="e-icons e-close" css-class="e-danger" />
          </div>
        </div>
      </section>

      <!-- 5. SpeedDial - Linear Mode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. SpeedDial - Linear Mode</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">mode="Linear"</code>
        </p>
        <div id="speeddial-target-1" class="relative min-h-[300px] border border-gray-300 rounded-lg bg-gray-50">
          <ejs-speeddial
            id="linear-speeddial"
            open-icon-css="e-icons e-plus"
            close-icon-css="e-icons e-close"
            target="#speeddial-target-1"
            position="BottomRight"
            mode="Linear"
            :items="speedDialItems"
            @clicked="onItemClick"
          />
        </div>
      </section>

      <!-- 6. SpeedDial - Radial Mode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. SpeedDial - Radial Mode</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">mode="Radial"</code>
        </p>
        <div id="speeddial-target-2" class="relative min-h-[350px] border border-gray-300 rounded-lg bg-gray-50">
          <ejs-speeddial
            id="radial-speeddial"
            open-icon-css="e-icons e-edit"
            close-icon-css="e-icons e-close"
            target="#speeddial-target-2"
            position="BottomCenter"
            mode="Radial"
            :items="radialItems"
            :radial-settings="radialSettings"
          />
        </div>
      </section>

      <!-- 7. SpeedDial Directions -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. SpeedDial Directions</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">direction</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div id="speeddial-target-up" class="relative min-h-[250px] border border-gray-300 rounded-lg bg-gray-50">
            <p class="absolute top-2 left-2 text-sm text-gray-500">Up (Default)</p>
            <ejs-speeddial
              id="up-speeddial"
              open-icon-css="e-icons e-plus"
              close-icon-css="e-icons e-close"
              target="#speeddial-target-up"
              position="BottomRight"
              direction="Up"
              :items="speedDialItems"
            />
          </div>
          <div id="speeddial-target-down" class="relative min-h-[250px] border border-gray-300 rounded-lg bg-gray-50">
            <p class="absolute top-2 left-2 text-sm text-gray-500">Down</p>
            <ejs-speeddial
              id="down-speeddial"
              open-icon-css="e-icons e-plus"
              close-icon-css="e-icons e-close"
              target="#speeddial-target-down"
              position="TopRight"
              direction="Down"
              :items="speedDialItems"
            />
          </div>
          <div id="speeddial-target-left" class="relative min-h-[200px] border border-gray-300 rounded-lg bg-gray-50">
            <p class="absolute top-2 left-2 text-sm text-gray-500">Left</p>
            <ejs-speeddial
              id="left-speeddial"
              open-icon-css="e-icons e-plus"
              close-icon-css="e-icons e-close"
              target="#speeddial-target-left"
              position="MiddleRight"
              direction="Left"
              :items="speedDialItems"
            />
          </div>
          <div id="speeddial-target-right" class="relative min-h-[200px] border border-gray-300 rounded-lg bg-gray-50">
            <p class="absolute top-2 left-2 text-sm text-gray-500">Right</p>
            <ejs-speeddial
              id="right-speeddial"
              open-icon-css="e-icons e-plus"
              close-icon-css="e-icons e-close"
              target="#speeddial-target-right"
              position="MiddleLeft"
              direction="Right"
              :items="speedDialItems"
            />
          </div>
        </div>
      </section>

      <!-- 8. Disabled FAB -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Disabled State</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <div id="fab-target-disabled" class="relative min-h-[150px] border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center gap-8">
          <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Enabled</p>
            <ejs-fab id="enabled-fab" icon-css="e-icons e-plus" />
          </div>
          <div class="text-center">
            <p class="text-sm text-gray-500 mb-2">Disabled</p>
            <ejs-fab id="disabled-fab" icon-css="e-icons e-plus" :disabled="true" />
          </div>
        </div>
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. API Reference</h2>
        <div class="space-y-6">
          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-3">FAB Properties</h3>
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
                    <td class="px-4 py-3 text-sm font-mono text-gray-900">iconCss</td>
                    <td class="px-4 py-3 text-sm text-gray-600">string</td>
                    <td class="px-4 py-3 text-sm text-gray-600">Icon CSS class</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-4 py-3 text-sm font-mono text-gray-900">content</td>
                    <td class="px-4 py-3 text-sm text-gray-600">string</td>
                    <td class="px-4 py-3 text-sm text-gray-600">Text content for the button</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-mono text-gray-900">position</td>
                    <td class="px-4 py-3 text-sm text-gray-600">string</td>
                    <td class="px-4 py-3 text-sm text-gray-600">TopLeft, BottomRight, etc.</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-4 py-3 text-sm font-mono text-gray-900">target</td>
                    <td class="px-4 py-3 text-sm text-gray-600">string</td>
                    <td class="px-4 py-3 text-sm text-gray-600">CSS selector for target container</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-3">SpeedDial Properties</h3>
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
                    <td class="px-4 py-3 text-sm font-mono text-gray-900">items</td>
                    <td class="px-4 py-3 text-sm text-gray-600">SpeedDialItemModel[]</td>
                    <td class="px-4 py-3 text-sm text-gray-600">Action items array</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-4 py-3 text-sm font-mono text-gray-900">mode</td>
                    <td class="px-4 py-3 text-sm text-gray-600">string</td>
                    <td class="px-4 py-3 text-sm text-gray-600">Linear | Radial</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-mono text-gray-900">direction</td>
                    <td class="px-4 py-3 text-sm text-gray-600">string</td>
                    <td class="px-4 py-3 text-sm text-gray-600">Up | Down | Left | Right | Auto</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="px-4 py-3 text-sm font-mono text-gray-900">radialSettings</td>
                    <td class="px-4 py-3 text-sm text-gray-600">object</td>
                    <td class="px-4 py-3 text-sm text-gray-600">offset, direction, startAngle, endAngle</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
