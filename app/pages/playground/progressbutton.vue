<script setup lang="ts">
import { ProgressButtonComponent as EjsProgressbutton } from '@syncfusion/ej2-vue-splitbuttons'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const progressRef = ref<InstanceType<typeof EjsProgressbutton> | null>(null)

// Spin settings
const spinLeft = { position: 'Left' }
const spinRight = { position: 'Right' }
const spinCenter = { position: 'Center' }

// Animation settings
const slideLeftAnim = { effect: 'SlideLeft', duration: 400, easing: 'linear' }
const slideRightAnim = { effect: 'SlideRight', duration: 400, easing: 'linear' }
const zoomInAnim = { effect: 'ZoomIn', duration: 400, easing: 'linear' }
const zoomOutAnim = { effect: 'ZoomOut', duration: 400, easing: 'linear' }

const onBegin = (args: any) => {
  console.log('Progress begin:', args)
}

const onEnd = (args: any) => {
  console.log('Progress end:', args)
}

const onProgress = (args: any) => {
  console.log('Progress:', args.percent)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">ProgressButton Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-splitbuttons</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic ProgressButton -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic ProgressButton</h2>
        <p class="text-gray-600 mb-6">Click to see the progress animation</p>
        <div class="flex gap-4">
          <ejs-progressbutton id="basic-progress" content="Download" />
          <ejs-progressbutton id="upload-progress" content="Upload" icon-css="e-icons e-upload" />
        </div>
      </section>

      <!-- 2. Spinner Position -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Spinner Position</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">spinSettings.position</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-progressbutton id="spin-left" content="Left Spinner" :spin-settings="spinLeft" />
          <ejs-progressbutton id="spin-right" content="Right Spinner" :spin-settings="spinRight" />
          <ejs-progressbutton id="spin-center" content="Center Spinner" :spin-settings="spinCenter" />
        </div>
      </section>

      <!-- 3. Enable Progress -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Progress Bar Mode</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">enableProgress</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-progressbutton
            id="progress-enabled"
            content="With Progress Bar"
            :enable-progress="true"
          />
          <ejs-progressbutton
            id="progress-disabled"
            content="Spinner Only"
            :enable-progress="false"
          />
        </div>
      </section>

      <!-- 4. Duration -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Duration</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">duration</code> (in milliseconds)
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-progressbutton
            id="duration-short"
            content="1 Second"
            :duration="1000"
            :enable-progress="true"
          />
          <ejs-progressbutton
            id="duration-medium"
            content="3 Seconds"
            :duration="3000"
            :enable-progress="true"
          />
          <ejs-progressbutton
            id="duration-long"
            content="5 Seconds"
            :duration="5000"
            :enable-progress="true"
          />
        </div>
      </section>

      <!-- 5. Content Animation -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Content Animation</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">animationSettings.effect</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-progressbutton
            id="anim-slide-left"
            content="Slide Left"
            :enable-progress="true"
            :animation-settings="slideLeftAnim"
            :spin-settings="spinCenter"
          />
          <ejs-progressbutton
            id="anim-slide-right"
            content="Slide Right"
            :enable-progress="true"
            :animation-settings="slideRightAnim"
            :spin-settings="spinCenter"
          />
          <ejs-progressbutton
            id="anim-zoom-in"
            content="Zoom In"
            :enable-progress="true"
            :animation-settings="zoomInAnim"
            :spin-settings="spinCenter"
          />
          <ejs-progressbutton
            id="anim-zoom-out"
            content="Zoom Out"
            :enable-progress="true"
            :animation-settings="zoomOutAnim"
            :spin-settings="spinCenter"
          />
        </div>
      </section>

      <!-- 6. Button Styles -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Button Styles</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">cssClass</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-progressbutton
            id="style-primary"
            content="Primary"
            css-class="e-primary"
            :enable-progress="true"
          />
          <ejs-progressbutton
            id="style-success"
            content="Success"
            css-class="e-success"
            :enable-progress="true"
          />
          <ejs-progressbutton
            id="style-info"
            content="Info"
            css-class="e-info"
            :enable-progress="true"
          />
          <ejs-progressbutton
            id="style-warning"
            content="Warning"
            css-class="e-warning"
            :enable-progress="true"
          />
          <ejs-progressbutton
            id="style-danger"
            content="Danger"
            css-class="e-danger"
            :enable-progress="true"
          />
        </div>
        <div class="flex flex-wrap gap-4 mt-4">
          <ejs-progressbutton
            id="style-outline"
            content="Outline"
            css-class="e-outline"
            :enable-progress="true"
          />
          <ejs-progressbutton
            id="style-flat"
            content="Flat"
            css-class="e-flat"
            :enable-progress="true"
          />
        </div>
      </section>

      <!-- 7. With Icons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. With Icons</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">iconCss</code>
        </p>
        <div class="flex flex-wrap gap-4">
          <ejs-progressbutton
            id="icon-download"
            content="Download"
            icon-css="e-icons e-download"
            :enable-progress="true"
            css-class="e-primary"
          />
          <ejs-progressbutton
            id="icon-sync"
            content="Sync"
            icon-css="e-icons e-refresh"
            :enable-progress="true"
            css-class="e-success"
          />
          <ejs-progressbutton
            id="icon-save"
            content="Save"
            icon-css="e-icons e-save"
            :enable-progress="true"
            css-class="e-info"
          />
        </div>
      </section>

      <!-- 8. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Events</h2>
        <p class="text-gray-600 mb-6">Available events: begin, progress, end, fail</p>
        <ejs-progressbutton
          ref="progressRef"
          id="event-progress"
          content="Click Me"
          :enable-progress="true"
          :duration="3000"
          css-class="e-primary"
          @begin="onBegin"
          @progress="onProgress"
          @end="onEnd"
        />
        <p class="mt-4 text-sm text-gray-500">Check console for event logs</p>
      </section>

      <!-- 9. Disabled State -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. Disabled State</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <div class="flex gap-4">
          <ejs-progressbutton
            id="enabled-btn"
            content="Enabled"
            :enable-progress="true"
          />
          <ejs-progressbutton
            id="disabled-btn"
            content="Disabled"
            :disabled="true"
            :enable-progress="true"
          />
        </div>
      </section>

      <!-- 10. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">10. API Reference</h2>
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
                <td class="px-4 py-3 text-sm text-gray-600">Button text content</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableProgress</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show progress bar animation</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">duration</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Progress duration in ms</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">spinSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Spinner position (Left/Right/Center)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">animationSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Content animation effect</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">iconCss</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Icon CSS class</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
