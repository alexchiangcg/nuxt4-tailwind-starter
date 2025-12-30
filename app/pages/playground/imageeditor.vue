<script setup lang="ts">
import {
  ImageEditorComponent as EjsImageeditor
} from '@syncfusion/ej2-vue-image-editor'
import { ref } from 'vue'
import type { ImageFilterEventArgs } from '@syncfusion/ej2-image-editor'

definePageMeta({
  layout: 'playground'
})

const editorRef = ref<InstanceType<typeof EjsImageeditor> | null>(null)

// 範例圖片
const sampleImages = {
  bridge: 'https://ej2.syncfusion.com/vue/documentation/image-editor/images/bridge.jpeg',
  flower: 'https://ej2.syncfusion.com/vue/documentation/image-editor/images/flower.jpeg',
  nature: 'https://ej2.syncfusion.com/demos/src/image-editor/images/default.png'
}

// 預設工具列設定
const defaultToolbar = [
  'Crop',
  'Transform',
  'Annotate',
  'ZoomIn',
  'ZoomOut',
  'Finetune',
  'Filter',
  'Confirm',
  'Reset',
  'Save'
]

// 自訂工具列
const customToolbar = [
  'Crop',
  'Rotate',
  'Flip',
  'ZoomIn',
  'ZoomOut',
  'Reset',
  'Save'
]

// 載入圖片
const loadImage = (imageKey: keyof typeof sampleImages) => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.open(sampleImages[imageKey])
  }
}

// 翻轉操作
const flipHorizontal = () => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.flip('Horizontal')
  }
}

const flipVertical = () => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.flip('Vertical')
  }
}

// 旋轉操作
const rotateLeft = () => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.rotate(-90)
  }
}

const rotateRight = () => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.rotate(90)
  }
}

// 濾鏡操作
const applyFilter = (filter: string) => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.applyImageFilter(filter as any)
  }
}

// 縮放操作
const zoomIn = () => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.zoom(0.1)
  }
}

const zoomOut = () => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.zoom(-0.1)
  }
}

// 重設圖片
const resetImage = () => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.reset()
  }
}

// 儲存/匯出圖片
const saveImage = () => {
  if (editorRef.value) {
    editorRef.value.ej2Instances.export('PNG', 'EditedImage')
  }
}

// 取得 Base64 資料
const getImageData = () => {
  if (editorRef.value) {
    const imageData = editorRef.value.ej2Instances.getImageData()
    console.log('Image data:', imageData)
    alert('Image data logged to console')
  }
}

// 事件處理
const onCreated = () => {
  console.log('Image Editor created')
  // 預設載入範例圖片
  if (editorRef.value) {
    editorRef.value.ej2Instances.open(sampleImages.bridge)
  }
}

const onImageLoaded = () => {
  console.log('Image loaded')
}

const onSaved = (args: any) => {
  console.log('Image saved:', args)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">ImageEditor Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-image-editor</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Full-Featured Image Editor -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Image Editor with Full Toolbar
        </h2>
        <p class="text-gray-600 mb-6">Complete image editing capabilities with all tools</p>

        <!-- 圖片載入按鈕 -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-gray-700 font-medium self-center">Load Sample Image:</span>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="loadImage('bridge')"
          >
            Bridge
          </button>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="loadImage('flower')"
          >
            Flower
          </button>
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            @click="loadImage('nature')"
          >
            Nature
          </button>
        </div>

        <div class="border rounded-lg overflow-hidden" style="height: 500px;">
          <ejs-imageeditor
            ref="editorRef"
            height="100%"
            width="100%"
            :toolbar="defaultToolbar"
            @created="onCreated"
            @image-loaded="onImageLoaded"
            @saved="onSaved"
          />
        </div>
      </section>

      <!-- 2. Programmatic Controls -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          2. Programmatic Controls
        </h2>
        <p class="text-gray-600 mb-6">Control the editor with JavaScript methods</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Transform -->
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3">Transform</h3>
            <div class="flex flex-wrap gap-2">
              <button
                class="px-3 py-1.5 bg-indigo-500 text-white text-sm rounded hover:bg-indigo-600"
                @click="rotateLeft"
              >
                Rotate Left
              </button>
              <button
                class="px-3 py-1.5 bg-indigo-500 text-white text-sm rounded hover:bg-indigo-600"
                @click="rotateRight"
              >
                Rotate Right
              </button>
              <button
                class="px-3 py-1.5 bg-indigo-500 text-white text-sm rounded hover:bg-indigo-600"
                @click="flipHorizontal"
              >
                Flip H
              </button>
              <button
                class="px-3 py-1.5 bg-indigo-500 text-white text-sm rounded hover:bg-indigo-600"
                @click="flipVertical"
              >
                Flip V
              </button>
            </div>
          </div>

          <!-- Zoom -->
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3">Zoom</h3>
            <div class="flex flex-wrap gap-2">
              <button
                class="px-3 py-1.5 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                @click="zoomIn"
              >
                Zoom In
              </button>
              <button
                class="px-3 py-1.5 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                @click="zoomOut"
              >
                Zoom Out
              </button>
            </div>
          </div>

          <!-- Filters -->
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3">Filters</h3>
            <div class="flex flex-wrap gap-2">
              <button
                class="px-3 py-1.5 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
                @click="applyFilter('Chrome')"
              >
                Chrome
              </button>
              <button
                class="px-3 py-1.5 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
                @click="applyFilter('Grayscale')"
              >
                Grayscale
              </button>
              <button
                class="px-3 py-1.5 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
                @click="applyFilter('Sepia')"
              >
                Sepia
              </button>
              <button
                class="px-3 py-1.5 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
                @click="applyFilter('Invert')"
              >
                Invert
              </button>
            </div>
          </div>

          <!-- Actions -->
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-3">Actions</h3>
            <div class="flex flex-wrap gap-2">
              <button
                class="px-3 py-1.5 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
                @click="resetImage"
              >
                Reset
              </button>
              <button
                class="px-3 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                @click="saveImage"
              >
                Save PNG
              </button>
              <button
                class="px-3 py-1.5 bg-orange-500 text-white text-sm rounded hover:bg-orange-600"
                @click="getImageData"
              >
                Get Data
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Key Features -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          3. Key Features
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Crop & Transform</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Custom, Circle, Square crop</li>
              <li>• Aspect ratio presets</li>
              <li>• Rotate 90°/180°/270°</li>
              <li>• Horizontal/Vertical flip</li>
              <li>• Straightening slider</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Annotations</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Text overlay</li>
              <li>• Freehand drawing</li>
              <li>• Shapes (Rectangle, Ellipse, Line)</li>
              <li>• Arrows and paths</li>
              <li>• Custom colors and styles</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Filters & Effects</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Chrome, Grayscale, Sepia</li>
              <li>• Invert, Blur, Sharpen</li>
              <li>• Brightness adjustment</li>
              <li>• Contrast control</li>
              <li>• Saturation tuning</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Finetune</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Brightness</li>
              <li>• Contrast</li>
              <li>• Saturation</li>
              <li>• Hue</li>
              <li>• Exposure</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Undo/Redo</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Full history stack</li>
              <li>• Undo any operation</li>
              <li>• Redo support</li>
              <li>• Reset to original</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Export Options</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• PNG format</li>
              <li>• JPEG format</li>
              <li>• SVG format</li>
              <li>• Custom filename</li>
              <li>• Base64 data URL</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 4. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          4. API Reference
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">toolbar</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Customize toolbar items</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">height</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Height of the editor</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">width</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Width of the editor</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Disable the editor</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">theme</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Theme for the editor (material, bootstrap, etc.)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">finetuneSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Configure finetune options</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 5. Methods -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          5. Common Methods
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">open(url)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Load an image from URL or base64</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">rotate(degree)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Rotate image by specified degrees</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">flip(direction)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Flip image horizontally or vertically</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">crop(startX, startY, width, height)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Crop the image to specified region</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">zoom(zoomFactor)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Zoom in/out by specified factor</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">applyImageFilter(filter)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Apply predefined filter effect</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">export(format, filename)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Export image to specified format</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">getImageData()</td>
                <td class="px-4 py-3 text-sm text-gray-600">Get image as ImageData object</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">reset()</td>
                <td class="px-4 py-3 text-sm text-gray-600">Reset image to original state</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">undo()</td>
                <td class="px-4 py-3 text-sm text-gray-600">Undo the last action</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">redo()</td>
                <td class="px-4 py-3 text-sm text-gray-600">Redo the last undone action</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 6. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          6. Events
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">created</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when the component is created</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">destroyed</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when the component is destroyed</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">imageLoaded</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when an image is loaded</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cropping</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered during crop operation</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">rotating</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered during rotate operation</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">flipping</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered during flip operation</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">saved</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when image is saved/exported</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">toolbarItemClicked</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when toolbar item is clicked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 7. Usage Notes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          7. Usage Notes
        </h2>
        <div class="space-y-4 text-gray-600">
          <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 class="font-semibold text-blue-800 mb-2">Loading Images</h3>
            <p class="text-sm">Use the <code class="bg-blue-100 px-1 rounded">open()</code> method to load images from URLs, local files, or base64 strings. For cross-origin images, ensure proper CORS headers are set.</p>
          </div>
          <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-2">Best Practices</h3>
            <ul class="text-sm space-y-1">
              <li>• Set appropriate height/width for the editor container</li>
              <li>• Use toolbar customization to show only needed tools</li>
              <li>• Handle the saved event for custom export logic</li>
              <li>• Use reset() to allow users to start over</li>
            </ul>
          </div>
          <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 class="font-semibold text-yellow-800 mb-2">Performance Tips</h3>
            <ul class="text-sm space-y-1">
              <li>• Large images may impact performance</li>
              <li>• Consider resizing images before editing</li>
              <li>• Use appropriate export quality settings</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-inputs/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import '@syncfusion/ej2-lists/styles/material.css';
@import '@syncfusion/ej2-navigations/styles/material.css';
@import '@syncfusion/ej2-splitbuttons/styles/material.css';
@import '@syncfusion/ej2-dropdowns/styles/material.css';
@import '@syncfusion/ej2-image-editor/styles/material.css';
</style>
