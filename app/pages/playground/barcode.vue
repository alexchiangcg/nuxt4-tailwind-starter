<script setup lang="ts">
import {
  BarcodeGeneratorComponent as EjsBarcodegenerator,
  QRCodeGeneratorComponent as EjsQrcodegenerator,
  DataMatrixGeneratorComponent as EjsDatamatrixgenerator
} from '@syncfusion/ej2-vue-barcode-generator'

definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Barcode Generator Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-barcode-generator</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Code128 Barcode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Code128 Barcode</h2>
        <p class="text-gray-600 mb-6">
          Type: <code class="text-sm bg-gray-100 px-2 py-1 rounded">Code128</code> - High-density alphanumeric barcode
        </p>
        <div class="flex justify-center">
          <ejs-barcodegenerator
            id="code128"
            width="280px"
            height="100px"
            type="Code128"
            value="SYNCFUSION123"
            mode="SVG"
          />
        </div>
      </section>

      <!-- 2. Code39 Barcode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Code39 Barcode</h2>
        <p class="text-gray-600 mb-6">
          Type: <code class="text-sm bg-gray-100 px-2 py-1 rounded">Code39</code> - Variable length barcode
        </p>
        <div class="flex justify-center">
          <ejs-barcodegenerator
            id="code39"
            width="300px"
            height="100px"
            type="Code39"
            value="CODE39DEMO"
            mode="SVG"
          />
        </div>
      </section>

      <!-- 3. QR Code -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. QR Code</h2>
        <p class="text-gray-600 mb-6">
          Component: <code class="text-sm bg-gray-100 px-2 py-1 rounded">ejs-qrcodegenerator</code> - 2D matrix barcode
        </p>
        <div class="flex flex-wrap gap-8 justify-center">
          <div class="text-center">
            <ejs-qrcodegenerator
              id="qrcode1"
              width="150px"
              height="150px"
              value="https://syncfusion.com"
              mode="SVG"
            />
            <p class="text-sm text-gray-500 mt-2">URL QR Code</p>
          </div>
          <div class="text-center">
            <ejs-qrcodegenerator
              id="qrcode2"
              width="150px"
              height="150px"
              value="Hello Syncfusion!"
              mode="SVG"
            />
            <p class="text-sm text-gray-500 mt-2">Text QR Code</p>
          </div>
        </div>
      </section>

      <!-- 4. Data Matrix -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Data Matrix</h2>
        <p class="text-gray-600 mb-6">
          Component: <code class="text-sm bg-gray-100 px-2 py-1 rounded">ejs-datamatrixgenerator</code> - 2D barcode
        </p>
        <div class="flex justify-center">
          <ejs-datamatrixgenerator
            id="datamatrix"
            width="150px"
            height="150px"
            value="DATAMATRIX123"
            mode="SVG"
          />
        </div>
      </section>

      <!-- 5. EAN Barcodes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. EAN Barcodes</h2>
        <p class="text-gray-600 mb-6">European Article Number barcodes for retail</p>
        <div class="flex flex-wrap gap-8 justify-center">
          <div class="text-center">
            <ejs-barcodegenerator
              id="ean8"
              width="200px"
              height="100px"
              type="Ean8"
              value="12345678"
              mode="SVG"
            />
            <p class="text-sm text-gray-500 mt-2">EAN-8</p>
          </div>
          <div class="text-center">
            <ejs-barcodegenerator
              id="ean13"
              width="200px"
              height="100px"
              type="Ean13"
              value="5901234123457"
              mode="SVG"
            />
            <p class="text-sm text-gray-500 mt-2">EAN-13</p>
          </div>
        </div>
      </section>

      <!-- 6. UPC Barcodes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. UPC Barcodes</h2>
        <p class="text-gray-600 mb-6">Universal Product Code for retail items</p>
        <div class="flex flex-wrap gap-8 justify-center">
          <div class="text-center">
            <ejs-barcodegenerator
              id="upca"
              width="250px"
              height="100px"
              type="UpcA"
              value="012345678905"
              mode="SVG"
            />
            <p class="text-sm text-gray-500 mt-2">UPC-A</p>
          </div>
          <div class="text-center">
            <ejs-barcodegenerator
              id="upce"
              width="180px"
              height="100px"
              type="UpcE"
              value="01234565"
              mode="SVG"
            />
            <p class="text-sm text-gray-500 mt-2">UPC-E</p>
          </div>
        </div>
      </section>

      <!-- 7. Custom Colors -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Custom Colors</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">foreColor</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">backgroundColor</code>
        </p>
        <div class="flex flex-wrap gap-8 justify-center">
          <div class="text-center">
            <ejs-barcodegenerator
              id="color-blue"
              width="200px"
              height="100px"
              type="Code128"
              value="BLUE123"
              mode="SVG"
              fore-color="#4F46E5"
            />
            <p class="text-sm text-gray-500 mt-2">Blue Barcode</p>
          </div>
          <div class="text-center">
            <ejs-qrcodegenerator
              id="color-green"
              width="120px"
              height="120px"
              value="GREEN"
              mode="SVG"
              fore-color="#10B981"
            />
            <p class="text-sm text-gray-500 mt-2">Green QR Code</p>
          </div>
          <div class="text-center">
            <ejs-qrcodegenerator
              id="color-red"
              width="120px"
              height="120px"
              value="RED"
              mode="SVG"
              fore-color="#EF4444"
            />
            <p class="text-sm text-gray-500 mt-2">Red QR Code</p>
          </div>
        </div>
      </section>

      <!-- 8. Custom Dimensions -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Custom Dimensions</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">width</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">height</code>
        </p>
        <div class="flex flex-wrap items-end gap-8 justify-center">
          <div class="text-center">
            <ejs-qrcodegenerator
              id="size-small"
              width="80px"
              height="80px"
              value="SMALL"
              mode="SVG"
            />
            <p class="text-sm text-gray-500 mt-2">80x80</p>
          </div>
          <div class="text-center">
            <ejs-qrcodegenerator
              id="size-medium"
              width="120px"
              height="120px"
              value="MEDIUM"
              mode="SVG"
            />
            <p class="text-sm text-gray-500 mt-2">120x120</p>
          </div>
          <div class="text-center">
            <ejs-qrcodegenerator
              id="size-large"
              width="180px"
              height="180px"
              value="LARGE"
              mode="SVG"
            />
            <p class="text-sm text-gray-500 mt-2">180x180</p>
          </div>
        </div>
      </section>

      <!-- 9. Display Text -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. Custom Display Text</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">displayText</code>
        </p>
        <div class="flex flex-wrap gap-8 justify-center">
          <div class="text-center">
            <ejs-barcodegenerator
              id="text-custom"
              width="250px"
              height="100px"
              type="Code128"
              value="ABC123XYZ"
              mode="SVG"
              :display-text="{ text: 'Product SKU: ABC123XYZ' }"
            />
            <p class="text-sm text-gray-500 mt-2">Custom text below barcode</p>
          </div>
          <div class="text-center">
            <ejs-barcodegenerator
              id="text-hidden"
              width="250px"
              height="80px"
              type="Code128"
              value="HIDDEN123"
              mode="SVG"
              :display-text="{ visibility: false }"
            />
            <p class="text-sm text-gray-500 mt-2">Hidden text</p>
          </div>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Barcode type (Code128, Code39, Ean8, Ean13, UpcA, UpcE, etc.)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Value to encode in the barcode</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">width</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Width of the barcode (e.g., "200px")</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">height</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Height of the barcode (e.g., "100px")</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">mode</td>
                <td class="px-4 py-3 text-sm text-gray-600">'SVG' | 'Canvas'</td>
                <td class="px-4 py-3 text-sm text-gray-600">Rendering mode</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">foreColor</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Color of the barcode bars</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">backgroundColor</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Background color</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">displayText</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Configure text display below barcode</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">Supported Barcode Types</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <span class="px-2 py-1 bg-gray-100 rounded">Code128</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Code39</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Code93</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Codabar</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Ean8</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Ean13</span>
          <span class="px-2 py-1 bg-gray-100 rounded">UpcA</span>
          <span class="px-2 py-1 bg-gray-100 rounded">UpcE</span>
          <span class="px-2 py-1 bg-gray-100 rounded">QR Code</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Data Matrix</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Code32</span>
          <span class="px-2 py-1 bg-gray-100 rounded">Code128A/B/C</span>
        </div>
      </section>
    </div>
  </div>
</template>
