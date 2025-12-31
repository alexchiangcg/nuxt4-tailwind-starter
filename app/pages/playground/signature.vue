<script setup lang="ts">
import { SignatureComponent as EjsSignature } from '@syncfusion/ej2-vue-inputs'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const signatureRef = ref<InstanceType<typeof EjsSignature> | null>(null)
const savedSignature = ref<string>('')

const clearSignature = () => {
  signatureRef.value?.ej2Instances?.clear()
}

const saveSignature = () => {
  const signature = signatureRef.value?.ej2Instances?.save('Png', 'signature')
  if (signature) {
    savedSignature.value = signatureRef.value?.ej2Instances?.getSignature() || ''
  }
}

const undoSignature = () => {
  signatureRef.value?.ej2Instances?.undo()
}

const redoSignature = () => {
  signatureRef.value?.ej2Instances?.redo()
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Signature Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Signature -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Signature</h2>
        <p class="text-gray-600 mb-6">Draw your signature in the area below</p>
        <div class="border border-gray-300 rounded-lg overflow-hidden" style="width: 400px; height: 200px;">
          <ejs-signature id="basic-signature" />
        </div>
      </section>

      <!-- 2. With Actions -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Interactive Signature</h2>
        <p class="text-gray-600 mb-6">Signature pad with toolbar actions</p>
        <div class="space-y-4">
          <div class="flex gap-2">
            <button
              class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              @click="undoSignature"
            >
              Undo
            </button>
            <button
              class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              @click="redoSignature"
            >
              Redo
            </button>
            <button
              class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              @click="clearSignature"
            >
              Clear
            </button>
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              @click="saveSignature"
            >
              Save as PNG
            </button>
          </div>
          <div class="border border-gray-300 rounded-lg overflow-hidden" style="width: 500px; height: 200px;">
            <ejs-signature ref="signatureRef" id="action-signature" />
          </div>
          <div v-if="savedSignature" class="mt-4">
            <p class="text-sm text-gray-500 mb-2">Saved Signature:</p>
            <img :src="savedSignature" alt="Saved signature" class="border rounded" />
          </div>
        </div>
      </section>

      <!-- 3. Stroke Color -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Stroke Color</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">strokeColor</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Blue</p>
            <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 150px;">
              <ejs-signature id="blue-signature" stroke-color="#1E40AF" />
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Red</p>
            <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 150px;">
              <ejs-signature id="red-signature" stroke-color="#DC2626" />
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Green</p>
            <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 150px;">
              <ejs-signature id="green-signature" stroke-color="#16A34A" />
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Stroke Width -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Stroke Width</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">minStrokeWidth</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">maxStrokeWidth</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Thin (1-2)</p>
            <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 150px;">
              <ejs-signature id="thin-signature" :min-stroke-width="1" :max-stroke-width="2" />
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Medium (2-4)</p>
            <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 150px;">
              <ejs-signature id="medium-signature" :min-stroke-width="2" :max-stroke-width="4" />
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Thick (4-8)</p>
            <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 150px;">
              <ejs-signature id="thick-signature" :min-stroke-width="4" :max-stroke-width="8" />
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Background Color -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Background Color</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">backgroundColor</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Light Yellow</p>
            <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 150px;">
              <ejs-signature id="yellow-bg-signature" background-color="#FEF9C3" />
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Light Blue</p>
            <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 150px;">
              <ejs-signature id="blue-bg-signature" background-color="#DBEAFE" />
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Disabled and ReadOnly -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Disabled and Read Only</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">isReadOnly</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Disabled</p>
            <div class="border border-gray-300 rounded-lg overflow-hidden opacity-50" style="height: 150px;">
              <ejs-signature id="disabled-signature" :disabled="true" />
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Read Only</p>
            <div class="border border-gray-300 rounded-lg overflow-hidden" style="height: 150px;">
              <ejs-signature id="readonly-signature" :is-read-only="true" />
            </div>
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
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property/Method</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">strokeColor</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Color of the signature stroke</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">backgroundColor</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Background color of canvas</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">minStrokeWidth</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Minimum stroke width</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">maxStrokeWidth</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Maximum stroke width</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">clear()</td>
                <td class="px-4 py-3 text-sm text-gray-600">method</td>
                <td class="px-4 py-3 text-sm text-gray-600">Clear the signature</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">save(type, name)</td>
                <td class="px-4 py-3 text-sm text-gray-600">method</td>
                <td class="px-4 py-3 text-sm text-gray-600">Save as Png, Jpeg, Svg</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">undo() / redo()</td>
                <td class="px-4 py-3 text-sm text-gray-600">method</td>
                <td class="px-4 py-3 text-sm text-gray-600">Undo/Redo strokes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
