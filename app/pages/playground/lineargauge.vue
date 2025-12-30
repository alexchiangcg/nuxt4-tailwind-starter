<script setup lang="ts">
import {
  LinearGaugeComponent as EjsLineargauge,
  AxesDirective as EAxes,
  AxisDirective as EAxis,
  PointersDirective as EPointers,
  PointerDirective as EPointer,
  RangesDirective as ERanges,
  RangeDirective as ERange,
  AnnotationsDirective as EAnnotations,
  AnnotationDirective as EAnnotation,
  GaugeTooltip
} from '@syncfusion/ej2-vue-lineargauge'
import { provide, ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

provide('lineargauge', [GaugeTooltip])

// 溫度計數值
const temperatureValue = ref(28)

// 更新溫度值
const updateTemperature = (value: number) => {
  temperatureValue.value = value
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Linear Gauge Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-lineargauge</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Linear Gauge -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic Linear Gauge
        </h2>
        <p class="text-gray-600 mb-6">Horizontal gauge with default settings</p>
        <div class="flex justify-center">
          <ejs-lineargauge style="height: 150px; width: 400px;" orientation="Horizontal">
            <e-axes>
              <e-axis :minimum="0" :maximum="100">
                <e-pointers>
                  <e-pointer :value="70" />
                </e-pointers>
              </e-axis>
            </e-axes>
          </ejs-lineargauge>
        </div>
      </section>

      <!-- 2. Thermometer Style -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Thermometer Style
        </h2>
        <p class="text-gray-600 mb-6">Vertical thermometer with temperature ranges</p>
        <div class="flex flex-col items-center gap-4">
          <div class="flex gap-8 items-end">
            <ejs-lineargauge
              style="height: 350px; width: 120px;"
              orientation="Vertical"
              :title="'Temperature (°C)'"
            >
              <e-axes>
                <e-axis
                  :minimum="-20"
                  :maximum="50"
                  :is-inversed="true"
                  :major-ticks="{ interval: 10, height: 10 }"
                  :minor-ticks="{ interval: 5, height: 5 }"
                >
                  <e-ranges>
                    <e-range :start="-20" :end="0" :color="'#2196F3'" :start-width="30" :end-width="30" />
                    <e-range :start="0" :end="25" :color="'#4CAF50'" :start-width="30" :end-width="30" />
                    <e-range :start="25" :end="50" :color="'#F44336'" :start-width="30" :end-width="30" />
                  </e-ranges>
                  <e-pointers>
                    <e-pointer
                      :value="temperatureValue"
                      type="Bar"
                      :width="20"
                      :color="'#333'"
                      :offset="-35"
                    />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-lineargauge>
          </div>
          <div class="flex gap-2">
            <button
              v-for="temp in [-10, 0, 15, 28, 40]"
              :key="temp"
              class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              :class="{ 'bg-blue-500 text-white hover:bg-blue-600': temperatureValue === temp }"
              @click="updateTemperature(temp)"
            >
              {{ temp }}°C
            </button>
          </div>
        </div>
      </section>

      <!-- 3. Progress Bar Style -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Progress Bar Style
        </h2>
        <p class="text-gray-600 mb-6">Bar pointer as progress indicator</p>
        <div class="space-y-8">
          <div>
            <p class="text-sm text-gray-600 mb-2">Download Progress: 75%</p>
            <ejs-lineargauge style="height: 60px; width: 100%;" orientation="Horizontal">
              <e-axes>
                <e-axis
                  :minimum="0"
                  :maximum="100"
                  :line="{ width: 0 }"
                  :major-ticks="{ height: 0 }"
                  :minor-ticks="{ height: 0 }"
                  :label-style="{ font: { size: '0px' } }"
                >
                  <e-ranges>
                    <e-range :start="0" :end="100" :color="'#E0E0E0'" :start-width="30" :end-width="30" />
                  </e-ranges>
                  <e-pointers>
                    <e-pointer :value="75" type="Bar" :width="30" :color="'#4CAF50'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-lineargauge>
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Upload Progress: 45%</p>
            <ejs-lineargauge style="height: 60px; width: 100%;" orientation="Horizontal">
              <e-axes>
                <e-axis
                  :minimum="0"
                  :maximum="100"
                  :line="{ width: 0 }"
                  :major-ticks="{ height: 0 }"
                  :minor-ticks="{ height: 0 }"
                  :label-style="{ font: { size: '0px' } }"
                >
                  <e-ranges>
                    <e-range :start="0" :end="100" :color="'#E0E0E0'" :start-width="30" :end-width="30" />
                  </e-ranges>
                  <e-pointers>
                    <e-pointer :value="45" type="Bar" :width="30" :color="'#2196F3'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-lineargauge>
          </div>
          <div>
            <p class="text-sm text-gray-600 mb-2">Processing: 90%</p>
            <ejs-lineargauge style="height: 60px; width: 100%;" orientation="Horizontal">
              <e-axes>
                <e-axis
                  :minimum="0"
                  :maximum="100"
                  :line="{ width: 0 }"
                  :major-ticks="{ height: 0 }"
                  :minor-ticks="{ height: 0 }"
                  :label-style="{ font: { size: '0px' } }"
                >
                  <e-ranges>
                    <e-range :start="0" :end="100" :color="'#E0E0E0'" :start-width="30" :end-width="30" />
                  </e-ranges>
                  <e-pointers>
                    <e-pointer :value="90" type="Bar" :width="30" :color="'#FF9800'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-lineargauge>
          </div>
        </div>
      </section>

      <!-- 4. Multiple Axes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Multiple Axes (Celsius & Fahrenheit)
        </h2>
        <p class="text-gray-600 mb-6">Dual scale thermometer</p>
        <div class="flex justify-center">
          <ejs-lineargauge style="height: 350px; width: 200px;" orientation="Vertical">
            <e-axes>
              <e-axis
                :minimum="-20"
                :maximum="50"
                :is-inversed="true"
                :line="{ offset: -20 }"
                :major-ticks="{ interval: 10, height: 10, offset: -20 }"
                :minor-ticks="{ interval: 5, height: 5, offset: -20 }"
                :label-style="{ offset: -30 }"
              >
                <e-pointers>
                  <e-pointer :value="25" type="Bar" :width="15" :color="'#F44336'" :offset="-20" />
                </e-pointers>
              </e-axis>
              <e-axis
                :minimum="-4"
                :maximum="122"
                :is-inversed="true"
                :opposite-position="true"
                :line="{ offset: 20 }"
                :major-ticks="{ interval: 18, height: 10, offset: 20 }"
                :minor-ticks="{ interval: 9, height: 5, offset: 20 }"
                :label-style="{ offset: 30, format: '{value}°F' }"
              />
            </e-axes>
          </ejs-lineargauge>
        </div>
      </section>

      <!-- 5. Range Colors -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Range Colors (Risk Level)
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">ranges</code>
        </p>
        <div class="flex justify-center">
          <ejs-lineargauge style="height: 150px; width: 500px;" orientation="Horizontal">
            <e-axes>
              <e-axis
                :minimum="0"
                :maximum="100"
                :major-ticks="{ interval: 25, height: 10 }"
                :minor-ticks="{ interval: 5, height: 5 }"
              >
                <e-ranges>
                  <e-range :start="0" :end="25" :color="'#4CAF50'" :start-width="20" :end-width="20" />
                  <e-range :start="25" :end="50" :color="'#8BC34A'" :start-width="20" :end-width="20" />
                  <e-range :start="50" :end="75" :color="'#FFC107'" :start-width="20" :end-width="20" />
                  <e-range :start="75" :end="100" :color="'#F44336'" :start-width="20" :end-width="20" />
                </e-ranges>
                <e-pointers>
                  <e-pointer :value="65" type="Marker" marker-type="Triangle" :width="15" :height="15" :offset="-25" :color="'#333'" />
                </e-pointers>
              </e-axis>
            </e-axes>
          </ejs-lineargauge>
        </div>
        <div class="flex justify-center gap-6 mt-4 text-sm">
          <span class="flex items-center gap-2"><span class="w-4 h-4 bg-green-500 rounded" /> Low</span>
          <span class="flex items-center gap-2"><span class="w-4 h-4 bg-lime-500 rounded" /> Medium</span>
          <span class="flex items-center gap-2"><span class="w-4 h-4 bg-yellow-500 rounded" /> High</span>
          <span class="flex items-center gap-2"><span class="w-4 h-4 bg-red-500 rounded" /> Critical</span>
        </div>
      </section>

      <!-- 6. Pointer Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Pointer Types
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">type</code> (Marker, Bar)
        </p>
        <div class="space-y-8">
          <div>
            <p class="text-sm font-medium text-gray-700 mb-2">Marker Pointer (Triangle)</p>
            <ejs-lineargauge style="height: 100px; width: 100%;" orientation="Horizontal">
              <e-axes>
                <e-axis :minimum="0" :maximum="100">
                  <e-pointers>
                    <e-pointer :value="60" type="Marker" marker-type="Triangle" :width="15" :height="15" :color="'#4CAF50'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-lineargauge>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-700 mb-2">Marker Pointer (Diamond)</p>
            <ejs-lineargauge style="height: 100px; width: 100%;" orientation="Horizontal">
              <e-axes>
                <e-axis :minimum="0" :maximum="100">
                  <e-pointers>
                    <e-pointer :value="40" type="Marker" marker-type="Diamond" :width="15" :height="15" :color="'#2196F3'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-lineargauge>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-700 mb-2">Bar Pointer</p>
            <ejs-lineargauge style="height: 100px; width: 100%;" orientation="Horizontal">
              <e-axes>
                <e-axis :minimum="0" :maximum="100">
                  <e-pointers>
                    <e-pointer :value="80" type="Bar" :width="15" :color="'#FF9800'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-lineargauge>
          </div>
        </div>
      </section>

      <!-- 7. CPU/Memory Meters -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. System Metrics
        </h2>
        <p class="text-gray-600 mb-6">Real-world usage: CPU and Memory monitors</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-4 border rounded-lg">
            <h3 class="font-medium text-gray-800 mb-4">CPU Usage</h3>
            <ejs-lineargauge style="height: 200px; width: 100%;" orientation="Vertical">
              <e-axes>
                <e-axis
                  :minimum="0"
                  :maximum="100"
                  :is-inversed="true"
                  :line="{ width: 0 }"
                  :major-ticks="{ interval: 25, height: 0 }"
                  :minor-ticks="{ height: 0 }"
                  :label-style="{ format: '{value}%' }"
                >
                  <e-ranges>
                    <e-range :start="0" :end="50" :color="'#4CAF50'" :start-width="40" :end-width="40" />
                    <e-range :start="50" :end="80" :color="'#FFC107'" :start-width="40" :end-width="40" />
                    <e-range :start="80" :end="100" :color="'#F44336'" :start-width="40" :end-width="40" />
                  </e-ranges>
                  <e-pointers>
                    <e-pointer :value="45" type="Bar" :width="20" :color="'rgba(0,0,0,0.3)'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-lineargauge>
          </div>
          <div class="p-4 border rounded-lg">
            <h3 class="font-medium text-gray-800 mb-4">Memory Usage</h3>
            <ejs-lineargauge style="height: 200px; width: 100%;" orientation="Vertical">
              <e-axes>
                <e-axis
                  :minimum="0"
                  :maximum="100"
                  :is-inversed="true"
                  :line="{ width: 0 }"
                  :major-ticks="{ interval: 25, height: 0 }"
                  :minor-ticks="{ height: 0 }"
                  :label-style="{ format: '{value}%' }"
                >
                  <e-ranges>
                    <e-range :start="0" :end="50" :color="'#4CAF50'" :start-width="40" :end-width="40" />
                    <e-range :start="50" :end="80" :color="'#FFC107'" :start-width="40" :end-width="40" />
                    <e-range :start="80" :end="100" :color="'#F44336'" :start-width="40" :end-width="40" />
                  </e-ranges>
                  <e-pointers>
                    <e-pointer :value="72" type="Bar" :width="20" :color="'rgba(0,0,0,0.3)'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-lineargauge>
          </div>
        </div>
      </section>

      <!-- 8. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          8. API Reference
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">orientation</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Gauge orientation (Horizontal/Vertical)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">minimum</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Minimum value of the axis</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">maximum</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Maximum value of the axis</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">isInversed</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Reverse the axis direction</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">oppositePosition</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Place axis on opposite side</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">pointers</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Pointer configurations (Marker/Bar)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">ranges</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Range configurations with colors</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">markerType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Marker shape (Triangle, Diamond, Circle, etc.)</td>
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
@import '@syncfusion/ej2-popups/styles/material.css';
</style>
