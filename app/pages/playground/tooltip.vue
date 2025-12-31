<script setup lang="ts">
import { TooltipComponent as EjsTooltip } from '@syncfusion/ej2-vue-popups'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'

definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Tooltip Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-popups</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Tooltip -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic Tooltip
        </h2>
        <p class="text-gray-600 mb-6">Hover over the button to see the tooltip</p>
        <div class="flex flex-wrap gap-4">
          <ejs-tooltip content="This is a tooltip message">
            <ejs-button css-class="e-primary">Hover Me</ejs-button>
          </ejs-tooltip>
        </div>
      </section>

      <!-- 2. Tooltip Positions -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Tooltip Positions
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">position</code>
        </p>
        <div class="flex flex-wrap gap-4 justify-center py-10">
          <ejs-tooltip content="Top Start" position="TopLeft">
            <ejs-button>Top Left</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Top Center" position="TopCenter">
            <ejs-button>Top Center</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Top End" position="TopRight">
            <ejs-button>Top Right</ejs-button>
          </ejs-tooltip>
        </div>
        <div class="flex flex-wrap gap-4 justify-between py-4">
          <div class="flex flex-col gap-4">
            <ejs-tooltip content="Left Top" position="LeftTop">
              <ejs-button>Left Top</ejs-button>
            </ejs-tooltip>
            <ejs-tooltip content="Left Center" position="LeftCenter">
              <ejs-button>Left Center</ejs-button>
            </ejs-tooltip>
            <ejs-tooltip content="Left Bottom" position="LeftBottom">
              <ejs-button>Left Bottom</ejs-button>
            </ejs-tooltip>
          </div>
          <div class="flex flex-col gap-4">
            <ejs-tooltip content="Right Top" position="RightTop">
              <ejs-button>Right Top</ejs-button>
            </ejs-tooltip>
            <ejs-tooltip content="Right Center" position="RightCenter">
              <ejs-button>Right Center</ejs-button>
            </ejs-tooltip>
            <ejs-tooltip content="Right Bottom" position="RightBottom">
              <ejs-button>Right Bottom</ejs-button>
            </ejs-tooltip>
          </div>
        </div>
        <div class="flex flex-wrap gap-4 justify-center py-10">
          <ejs-tooltip content="Bottom Left" position="BottomLeft">
            <ejs-button>Bottom Left</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Bottom Center" position="BottomCenter">
            <ejs-button>Bottom Center</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Bottom Right" position="BottomRight">
            <ejs-button>Bottom Right</ejs-button>
          </ejs-tooltip>
        </div>
      </section>

      <!-- 3. Open Modes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Open Modes
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">opensOn</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-tooltip content="Opens on hover" opens-on="Hover">
            <ejs-button>Hover</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Opens on click" opens-on="Click">
            <ejs-button>Click</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Opens on focus" opens-on="Focus">
            <input type="text" class="e-input" placeholder="Focus me" />
          </ejs-tooltip>
          <ejs-tooltip content="Custom trigger" opens-on="Custom" :is-sticky="true">
            <ejs-button css-class="e-info">Custom (Sticky)</ejs-button>
          </ejs-tooltip>
        </div>
      </section>

      <!-- 4. Sticky Tooltip -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Sticky Tooltip
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">isSticky</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-tooltip content="This tooltip has a close button" :is-sticky="true">
            <ejs-button css-class="e-success">Sticky Tooltip</ejs-button>
          </ejs-tooltip>
        </div>
      </section>

      <!-- 5. HTML Content -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. HTML Content
        </h2>
        <p class="text-gray-600 mb-6">Support rich HTML content in tooltips</p>
        <div class="flex flex-wrap gap-4">
          <ejs-tooltip content="<strong>Bold</strong> and <em>italic</em> text">
            <ejs-button>HTML Content</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="<div style='padding: 8px'><h4 style='margin: 0 0 8px'>Title</h4><p style='margin: 0'>Description text here</p></div>">
            <ejs-button>Rich Content</ejs-button>
          </ejs-tooltip>
        </div>
      </section>

      <!-- 6. Animation -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Animation Effects
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">animation</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-tooltip
            content="Fade In/Out"
            :animation="{ open: { effect: 'FadeIn', duration: 300 }, close: { effect: 'FadeOut', duration: 300 } }"
          >
            <ejs-button>Fade</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip
            content="Zoom In/Out"
            :animation="{ open: { effect: 'ZoomIn', duration: 300 }, close: { effect: 'ZoomOut', duration: 300 } }"
          >
            <ejs-button>Zoom</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip
            content="Flip X"
            :animation="{ open: { effect: 'FlipXDownIn', duration: 300 }, close: { effect: 'FlipXUpOut', duration: 300 } }"
          >
            <ejs-button>Flip X</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip
            content="No animation"
            :animation="{ open: { effect: 'None' }, close: { effect: 'None' } }"
          >
            <ejs-button>None</ejs-button>
          </ejs-tooltip>
        </div>
      </section>

      <!-- 7. Tip Pointer -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Tip Pointer
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">showTipPointer</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">tipPointerPosition</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-tooltip content="With pointer (default)" :show-tip-pointer="true">
            <ejs-button>With Pointer</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Without pointer" :show-tip-pointer="false">
            <ejs-button>No Pointer</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Auto pointer position" tip-pointer-position="Auto">
            <ejs-button>Auto Position</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Start position" tip-pointer-position="Start">
            <ejs-button>Start</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="End position" tip-pointer-position="End">
            <ejs-button>End</ejs-button>
          </ejs-tooltip>
        </div>
      </section>

      <!-- 8. Open Delay -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. Open/Close Delay
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">openDelay</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">closeDelay</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-tooltip content="Immediate (no delay)" :open-delay="0" :close-delay="0">
            <ejs-button>No Delay</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Opens after 500ms" :open-delay="500">
            <ejs-button>Open Delay 500ms</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Closes after 1000ms" :close-delay="1000">
            <ejs-button>Close Delay 1s</ejs-button>
          </ejs-tooltip>
        </div>
      </section>

      <!-- 9. Offset -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          9. Offset Distance
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">offsetX / offsetY</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-tooltip content="Default offset">
            <ejs-button>Default</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Offset X: 20px" :offset-x="20">
            <ejs-button>X: 20px</ejs-button>
          </ejs-tooltip>
          <ejs-tooltip content="Offset Y: 20px" :offset-y="20">
            <ejs-button>Y: 20px</ejs-button>
          </ejs-tooltip>
        </div>
      </section>

      <!-- 10. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          10. API Reference
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">content</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | HTMLElement</td>
                <td class="px-4 py-3 text-sm text-gray-600">Tooltip content (supports HTML)</td>
                <td class="px-4 py-3 text-sm text-gray-600">null</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">position</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Tooltip position relative to target</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'TopCenter'</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">opensOn</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Trigger mode (Hover/Click/Focus/Custom)</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Auto'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">isSticky</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show close button on tooltip</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showTipPointer</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show tip pointer arrow</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">openDelay</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Delay before showing (ms)</td>
                <td class="px-4 py-3 text-sm text-gray-600">0</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">closeDelay</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Delay before hiding (ms)</td>
                <td class="px-4 py-3 text-sm text-gray-600">0</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">animation</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Animation settings for open/close</td>
                <td class="px-4 py-3 text-sm text-gray-600">{ open, close }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


