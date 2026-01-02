<script setup lang="ts">
import { SmithchartComponent as EjsSmithchart, SeriesDirective as ESeries, SeriesCollectionDirective as ESeriesCollection, SmithchartLegend, TooltipRender } from '@syncfusion/ej2-vue-charts'
import { provide } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Provide services
provide('smithchart', [SmithchartLegend, TooltipRender])

// Impedance data - typical transmission line measurements
const impedanceData = [
  { resistance: 0, reactance: 0.05 },
  { resistance: 0.3, reactance: 0.1 },
  { resistance: 0.5, reactance: 0.2 },
  { resistance: 1, reactance: 0.4 },
  { resistance: 1.5, reactance: 0.5 },
  { resistance: 2, reactance: 0.5 },
  { resistance: 2.5, reactance: 0.4 },
  { resistance: 3.5, reactance: 0 },
  { resistance: 4.5, reactance: -0.5 },
  { resistance: 5, reactance: -1 }
]

// Admittance data
const admittanceData = [
  { resistance: 0, reactance: 0.15 },
  { resistance: 0.3, reactance: 0.2 },
  { resistance: 0.5, reactance: 0.4 },
  { resistance: 1, reactance: 0.8 },
  { resistance: 2.5, reactance: 1.3 },
  { resistance: 3.5, reactance: 1.6 },
  { resistance: 4.5, reactance: 2 },
  { resistance: 6, reactance: 4.5 },
  { resistance: 8, reactance: 6 },
  { resistance: 10, reactance: 25 }
]

// Antenna matching data
const antennaData = [
  { resistance: 0.2, reactance: 0.1 },
  { resistance: 0.4, reactance: 0.2 },
  { resistance: 0.6, reactance: 0.35 },
  { resistance: 0.8, reactance: 0.5 },
  { resistance: 1, reactance: 0.6 },
  { resistance: 1.2, reactance: 0.5 },
  { resistance: 1.4, reactance: 0.35 },
  { resistance: 1.6, reactance: 0.2 },
  { resistance: 1.8, reactance: 0.1 },
  { resistance: 2, reactance: 0 }
]

// Tooltip settings
const tooltipSettings = { visible: true }

// Marker settings
const markerSettings = {
  visible: true,
  shape: 'Circle',
  width: 8,
  height: 8,
  border: { width: 2 }
}

const markerWithLabel = {
  visible: true,
  shape: 'Circle',
  width: 10,
  height: 10,
  dataLabel: { visible: true }
}

// Legend settings
const legendSettings = { visible: true, position: 'Bottom' }

// Title settings
const titleWithSubtitle = {
  text: 'Transmission Line Analysis',
  subtitle: {
    text: 'Impedance and Admittance Measurements'
  }
}

// Custom colors for series
const seriesColors = {
  impedance: '#4F46E5',
  admittance: '#10B981'
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Smith Chart Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-charts</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Smith Chart -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Smith Chart</h2>
        <p class="text-gray-600 mb-6">Impedance plotting with resistance and reactance values</p>
        <div class="flex justify-center">
          <ejs-smithchart
            id="basic-smith"
            height="400px"
            :legend-settings="{ visible: true }"
          >
            <e-series-collection>
              <e-series
                :points="impedanceData"
                name="Impedance"
                reactance="reactance"
                resistance="resistance"
                :marker="markerSettings"
              />
            </e-series-collection>
          </ejs-smithchart>
        </div>
      </section>

      <!-- 2. With Tooltip -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. With Tooltip</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">tooltip.visible</code>
        </p>
        <div class="flex justify-center">
          <ejs-smithchart
            id="tooltip-smith"
            height="400px"
            :legend-settings="legendSettings"
          >
            <e-series-collection>
              <e-series
                :points="impedanceData"
                name="Impedance"
                reactance="reactance"
                resistance="resistance"
                :tooltip="tooltipSettings"
                :marker="markerSettings"
              />
            </e-series-collection>
          </ejs-smithchart>
        </div>
        <p class="text-sm text-gray-500 mt-2 text-center">Hover over data points to see tooltip</p>
      </section>

      <!-- 3. Multiple Series -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Multiple Series</h2>
        <p class="text-gray-600 mb-6">Compare impedance and admittance data</p>
        <div class="flex justify-center">
          <ejs-smithchart
            id="multi-smith"
            height="450px"
            :legend-settings="legendSettings"
            :title="titleWithSubtitle"
          >
            <e-series-collection>
              <e-series
                :points="impedanceData"
                name="Impedance"
                reactance="reactance"
                resistance="resistance"
                :tooltip="tooltipSettings"
                :marker="markerSettings"
                fill="#4F46E5"
              />
              <e-series
                :points="admittanceData"
                name="Admittance"
                reactance="reactance"
                resistance="resistance"
                :tooltip="tooltipSettings"
                :marker="markerSettings"
                fill="#10B981"
              />
            </e-series-collection>
          </ejs-smithchart>
        </div>
      </section>

      <!-- 4. With Data Labels -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. With Data Labels</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">marker.dataLabel.visible</code>
        </p>
        <div class="flex justify-center">
          <ejs-smithchart
            id="label-smith"
            height="400px"
            :legend-settings="legendSettings"
          >
            <e-series-collection>
              <e-series
                :points="antennaData"
                name="Antenna Match"
                reactance="reactance"
                resistance="resistance"
                :tooltip="tooltipSettings"
                :marker="markerWithLabel"
                fill="#F59E0B"
              />
            </e-series-collection>
          </ejs-smithchart>
        </div>
      </section>

      <!-- 5. Rendering Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Rendering Types</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">renderType</code> - Impedance or Admittance
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p class="text-sm text-gray-500 mb-2 text-center">Impedance (Default)</p>
            <ejs-smithchart
              id="impedance-type"
              height="350px"
              render-type="Impedance"
            >
              <e-series-collection>
                <e-series
                  :points="impedanceData"
                  name="Impedance"
                  reactance="reactance"
                  resistance="resistance"
                  :marker="markerSettings"
                  fill="#4F46E5"
                />
              </e-series-collection>
            </ejs-smithchart>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2 text-center">Admittance</p>
            <ejs-smithchart
              id="admittance-type"
              height="350px"
              render-type="Admittance"
            >
              <e-series-collection>
                <e-series
                  :points="admittanceData"
                  name="Admittance"
                  reactance="reactance"
                  resistance="resistance"
                  :marker="markerSettings"
                  fill="#10B981"
                />
              </e-series-collection>
            </ejs-smithchart>
          </div>
        </div>
      </section>

      <!-- 6. Axis Customization -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Axis Customization</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">horizontalAxis</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">radialAxis</code>
        </p>
        <div class="flex justify-center">
          <ejs-smithchart
            id="axis-smith"
            height="400px"
            :horizontal-axis="{
              minorGridLines: { visible: true },
              labelStyle: { fontFamily: 'inherit' }
            }"
            :radial-axis="{
              minorGridLines: { visible: true },
              labelStyle: { fontFamily: 'inherit' }
            }"
          >
            <e-series-collection>
              <e-series
                :points="impedanceData"
                name="Impedance"
                reactance="reactance"
                resistance="resistance"
                :marker="markerSettings"
                :tooltip="tooltipSettings"
                fill="#DC2626"
              />
            </e-series-collection>
          </ejs-smithchart>
        </div>
      </section>

      <!-- 7. Use Cases -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. Common Use Cases</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="p-4 bg-blue-50 rounded-lg">
            <h3 class="font-semibold text-blue-800 mb-2">RF Circuit Design</h3>
            <p class="text-sm text-blue-700">Analyze and design radio frequency circuits, matching networks, and transmission lines.</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-2">Antenna Matching</h3>
            <p class="text-sm text-green-700">Visualize antenna impedance and design matching circuits for optimal power transfer.</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg">
            <h3 class="font-semibold text-purple-800 mb-2">S-Parameter Analysis</h3>
            <p class="text-sm text-purple-700">Plot scattering parameters to analyze network behavior at microwave frequencies.</p>
          </div>
          <div class="p-4 bg-yellow-50 rounded-lg">
            <h3 class="font-semibold text-yellow-800 mb-2">Filter Design</h3>
            <p class="text-sm text-yellow-700">Design RF filters by visualizing impedance transformations on the chart.</p>
          </div>
          <div class="p-4 bg-red-50 rounded-lg">
            <h3 class="font-semibold text-red-800 mb-2">Cable Testing</h3>
            <p class="text-sm text-red-700">Measure and display cable characteristics and impedance mismatches.</p>
          </div>
          <div class="p-4 bg-indigo-50 rounded-lg">
            <h3 class="font-semibold text-indigo-800 mb-2">Amplifier Design</h3>
            <p class="text-sm text-indigo-700">Optimize amplifier stability and gain by analyzing input/output matching.</p>
          </div>
        </div>
      </section>

      <!-- 8. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">renderType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Impedance or Admittance chart type</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">series.resistance</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Field name for resistance values</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">series.reactance</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Field name for reactance values</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">series.points</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data points with resistance and reactance</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">tooltip</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Tooltip configuration</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">marker</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data point marker settings</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">legendSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Legend configuration</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">title</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Chart title with optional subtitle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
:deep(.e-smithchart) {
  font-family: inherit;
}
</style>
