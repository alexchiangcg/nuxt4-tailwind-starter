<script setup lang="ts">
import {
  CircularGaugeComponent as EjsCirculargauge,
  AxesDirective as EAxes,
  AxisDirective as EAxis,
  PointersDirective as EPointers,
  PointerDirective as EPointer,
  RangesDirective as ERanges,
  RangeDirective as ERange,
  AnnotationsDirective as EAnnotations,
  AnnotationDirective as EAnnotation,
  GaugeTooltip,
  Legend
} from '@syncfusion/ej2-vue-circulargauge'
import { provide, ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

provide('circulargauge', [GaugeTooltip, Legend])

// 速度計數值
const speedValue = ref(65)

// 更新速度值
const updateSpeed = (value: number) => {
  speedValue.value = value
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Circular Gauge Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-circulargauge</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Gauge -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic Circular Gauge
        </h2>
        <p class="text-gray-600 mb-6">Simple gauge with default settings</p>
        <div class="flex justify-center">
          <ejs-circulargauge style="height: 300px; width: 300px;">
            <e-axes>
              <e-axis :radius="'80%'" :start-angle="200" :end-angle="160" :minimum="0" :maximum="100">
                <e-pointers>
                  <e-pointer :value="70" :radius="'60%'" />
                </e-pointers>
              </e-axis>
            </e-axes>
          </ejs-circulargauge>
        </div>
      </section>

      <!-- 2. Speedometer Style -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Speedometer Style
        </h2>
        <p class="text-gray-600 mb-6">Classic speedometer with colored ranges</p>
        <div class="flex flex-col items-center gap-4">
          <ejs-circulargauge style="height: 350px; width: 350px;" :title="'Speed (km/h)'">
            <e-axes>
              <e-axis
                :radius="'80%'"
                :start-angle="210"
                :end-angle="150"
                :minimum="0"
                :maximum="120"
                :major-ticks="{ width: 2, height: 12, interval: 20 }"
                :minor-ticks="{ width: 1, height: 6, interval: 10 }"
                :label-style="{ font: { size: '12px' } }"
              >
                <e-ranges>
                  <e-range :start="0" :end="40" :color="'#30B32D'" :start-width="10" :end-width="10" />
                  <e-range :start="40" :end="80" :color="'#FFDD00'" :start-width="10" :end-width="10" />
                  <e-range :start="80" :end="120" :color="'#F03E3E'" :start-width="10" :end-width="10" />
                </e-ranges>
                <e-pointers>
                  <e-pointer
                    :value="speedValue"
                    :radius="'60%'"
                    :pointer-width="8"
                    :cap="{ radius: 10, color: '#333', border: { width: 0 } }"
                    :needle-start-width="3"
                  />
                </e-pointers>
              </e-axis>
            </e-axes>
          </ejs-circulargauge>
          <div class="flex gap-2">
            <button
              v-for="speed in [20, 40, 65, 85, 100]"
              :key="speed"
              class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              :class="{ 'bg-blue-500 text-white hover:bg-blue-600': speedValue === speed }"
              @click="updateSpeed(speed)"
            >
              {{ speed }}
            </button>
          </div>
        </div>
      </section>

      <!-- 3. Multi-Range Gauge -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Temperature Gauge
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">ranges</code>
        </p>
        <div class="flex justify-center">
          <ejs-circulargauge style="height: 300px; width: 300px;">
            <e-axes>
              <e-axis
                :radius="'80%'"
                :start-angle="230"
                :end-angle="130"
                :minimum="-20"
                :maximum="50"
                :major-ticks="{ width: 2, height: 10, interval: 10 }"
                :minor-ticks="{ width: 1, height: 5, interval: 5 }"
              >
                <e-ranges>
                  <e-range :start="-20" :end="0" :color="'#2196F3'" :start-width="8" :end-width="8" />
                  <e-range :start="0" :end="25" :color="'#4CAF50'" :start-width="8" :end-width="8" />
                  <e-range :start="25" :end="50" :color="'#FF5722'" :start-width="8" :end-width="8" />
                </e-ranges>
                <e-pointers>
                  <e-pointer :value="22" :radius="'50%'" :color="'#333'" />
                </e-pointers>
              </e-axis>
            </e-axes>
          </ejs-circulargauge>
        </div>
      </section>

      <!-- 4. Multiple Pointers -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Multiple Pointers (Clock)
        </h2>
        <p class="text-gray-600 mb-6">Multiple pointers on single axis</p>
        <div class="flex justify-center">
          <ejs-circulargauge style="height: 350px; width: 350px;">
            <e-axes>
              <e-axis
                :radius="'90%'"
                :start-angle="0"
                :end-angle="360"
                :minimum="0"
                :maximum="12"
                :major-ticks="{ width: 3, height: 15, interval: 1 }"
                :minor-ticks="{ width: 1, height: 8, interval: 0.2 }"
                :label-style="{ font: { size: '14px', fontWeight: 'bold' } }"
              >
                <e-pointers>
                  <e-pointer
                    :value="10"
                    :radius="'50%'"
                    :pointer-width="10"
                    :color="'#333'"
                    :cap="{ radius: 8, color: '#333' }"
                  />
                  <e-pointer
                    :value="2"
                    :radius="'70%'"
                    :pointer-width="6"
                    :color="'#666'"
                    :cap="{ radius: 6, color: '#666' }"
                  />
                  <e-pointer
                    :value="8"
                    :radius="'85%'"
                    :pointer-width="2"
                    :color="'#E53935'"
                    :cap="{ radius: 4, color: '#E53935' }"
                  />
                </e-pointers>
              </e-axis>
            </e-axes>
          </ejs-circulargauge>
        </div>
      </section>

      <!-- 5. Half Gauge -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Half Circle Gauge
        </h2>
        <p class="text-gray-600 mb-6">Semi-circular gauge layout</p>
        <div class="flex justify-center">
          <ejs-circulargauge style="height: 250px; width: 350px;">
            <e-axes>
              <e-axis
                :radius="'100%'"
                :start-angle="180"
                :end-angle="0"
                :minimum="0"
                :maximum="100"
                :line-style="{ width: 0 }"
                :major-ticks="{ width: 2, height: 10, interval: 20, offset: -5 }"
                :minor-ticks="{ width: 1, height: 5, interval: 10, offset: -5 }"
                :label-style="{ offset: -10 }"
              >
                <e-ranges>
                  <e-range :start="0" :end="30" :color="'#E53935'" :start-width="30" :end-width="30" :radius="'90%'" />
                  <e-range :start="30" :end="70" :color="'#FFC107'" :start-width="30" :end-width="30" :radius="'90%'" />
                  <e-range :start="70" :end="100" :color="'#4CAF50'" :start-width="30" :end-width="30" :radius="'90%'" />
                </e-ranges>
                <e-pointers>
                  <e-pointer :value="75" :radius="'60%'" :pointer-width="10" :color="'#333'" />
                </e-pointers>
              </e-axis>
            </e-axes>
          </ejs-circulargauge>
        </div>
      </section>

      <!-- 6. Gradient Range -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Progress Indicator
        </h2>
        <p class="text-gray-600 mb-6">Gauge as progress indicator</p>
        <div class="flex justify-center gap-8 flex-wrap">
          <div class="text-center">
            <ejs-circulargauge style="height: 200px; width: 200px;">
              <e-axes>
                <e-axis
                  :radius="'80%'"
                  :start-angle="0"
                  :end-angle="360"
                  :minimum="0"
                  :maximum="100"
                  :line-style="{ width: 20, color: '#E0E0E0' }"
                  :major-ticks="{ width: 0 }"
                  :minor-ticks="{ width: 0 }"
                  :label-style="{ font: { size: '0px' } }"
                >
                  <e-ranges>
                    <e-range :start="0" :end="75" :color="'#4CAF50'" :start-width="20" :end-width="20" :radius="'80%'" />
                  </e-ranges>
                  <e-pointers>
                    <e-pointer :value="75" type="Marker" marker-shape="Circle" :marker-width="20" :marker-height="20" :color="'#4CAF50'" :radius="'80%'" />
                  </e-pointers>
                  <e-annotations>
                    <e-annotation content="<div style='font-size: 24px; font-weight: bold;'>75%</div>" :angle="0" :radius="'0%'" :z-index="1" />
                  </e-annotations>
                </e-axis>
              </e-axes>
            </ejs-circulargauge>
            <p class="mt-2 text-sm text-gray-600">Task Progress</p>
          </div>
          <div class="text-center">
            <ejs-circulargauge style="height: 200px; width: 200px;">
              <e-axes>
                <e-axis
                  :radius="'80%'"
                  :start-angle="0"
                  :end-angle="360"
                  :minimum="0"
                  :maximum="100"
                  :line-style="{ width: 20, color: '#E0E0E0' }"
                  :major-ticks="{ width: 0 }"
                  :minor-ticks="{ width: 0 }"
                  :label-style="{ font: { size: '0px' } }"
                >
                  <e-ranges>
                    <e-range :start="0" :end="45" :color="'#2196F3'" :start-width="20" :end-width="20" :radius="'80%'" />
                  </e-ranges>
                  <e-pointers>
                    <e-pointer :value="45" type="Marker" marker-shape="Circle" :marker-width="20" :marker-height="20" :color="'#2196F3'" :radius="'80%'" />
                  </e-pointers>
                  <e-annotations>
                    <e-annotation content="<div style='font-size: 24px; font-weight: bold;'>45%</div>" :angle="0" :radius="'0%'" :z-index="1" />
                  </e-annotations>
                </e-axis>
              </e-axes>
            </ejs-circulargauge>
            <p class="mt-2 text-sm text-gray-600">Budget Used</p>
          </div>
          <div class="text-center">
            <ejs-circulargauge style="height: 200px; width: 200px;">
              <e-axes>
                <e-axis
                  :radius="'80%'"
                  :start-angle="0"
                  :end-angle="360"
                  :minimum="0"
                  :maximum="100"
                  :line-style="{ width: 20, color: '#E0E0E0' }"
                  :major-ticks="{ width: 0 }"
                  :minor-ticks="{ width: 0 }"
                  :label-style="{ font: { size: '0px' } }"
                >
                  <e-ranges>
                    <e-range :start="0" :end="92" :color="'#FF9800'" :start-width="20" :end-width="20" :radius="'80%'" />
                  </e-ranges>
                  <e-pointers>
                    <e-pointer :value="92" type="Marker" marker-shape="Circle" :marker-width="20" :marker-height="20" :color="'#FF9800'" :radius="'80%'" />
                  </e-pointers>
                  <e-annotations>
                    <e-annotation content="<div style='font-size: 24px; font-weight: bold;'>92%</div>" :angle="0" :radius="'0%'" :z-index="1" />
                  </e-annotations>
                </e-axis>
              </e-axes>
            </ejs-circulargauge>
            <p class="mt-2 text-sm text-gray-600">Storage Used</p>
          </div>
        </div>
      </section>

      <!-- 7. Pointer Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Pointer Types
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">type</code> (Needle, Marker, RangeBar)
        </p>
        <div class="flex justify-center gap-8 flex-wrap">
          <div class="text-center">
            <ejs-circulargauge style="height: 200px; width: 200px;">
              <e-axes>
                <e-axis :start-angle="200" :end-angle="160" :minimum="0" :maximum="100">
                  <e-pointers>
                    <e-pointer :value="70" type="Needle" :radius="'60%'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-circulargauge>
            <p class="mt-2 text-sm text-gray-600">Needle</p>
          </div>
          <div class="text-center">
            <ejs-circulargauge style="height: 200px; width: 200px;">
              <e-axes>
                <e-axis :start-angle="200" :end-angle="160" :minimum="0" :maximum="100">
                  <e-pointers>
                    <e-pointer :value="70" type="Marker" marker-shape="Triangle" :marker-width="15" :marker-height="15" :radius="'80%'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-circulargauge>
            <p class="mt-2 text-sm text-gray-600">Marker</p>
          </div>
          <div class="text-center">
            <ejs-circulargauge style="height: 200px; width: 200px;">
              <e-axes>
                <e-axis :start-angle="200" :end-angle="160" :minimum="0" :maximum="100">
                  <e-pointers>
                    <e-pointer :value="70" type="RangeBar" :radius="'60%'" :pointer-width="20" :color="'#4CAF50'" />
                  </e-pointers>
                </e-axis>
              </e-axes>
            </ejs-circulargauge>
            <p class="mt-2 text-sm text-gray-600">RangeBar</p>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">startAngle</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Start angle of the axis (0-360)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">endAngle</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">End angle of the axis</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">minimum</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Minimum value of the axis</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">maximum</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Maximum value of the axis</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">radius</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Radius of the axis (%, px)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">pointers</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Pointer configurations</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">ranges</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Range configurations with colors</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">annotations</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom HTML annotations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


