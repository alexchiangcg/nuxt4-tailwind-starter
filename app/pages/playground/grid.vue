<script setup lang="ts">
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Page, Sort, Filter } from '@syncfusion/ej2-vue-grids'
import { provide, ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const sampleData = ref([
  { OrderID: 10248, CustomerName: 'Paul Henriot', ShipCountry: 'France', Freight: 32.38 },
  { OrderID: 10249, CustomerName: 'Karin Josephs', ShipCountry: 'Germany', Freight: 11.61 },
  { OrderID: 10250, CustomerName: 'Mario Pontes', ShipCountry: 'Brazil', Freight: 65.83 },
  { OrderID: 10251, CustomerName: 'Mary Saveley', ShipCountry: 'Switzerland', Freight: 41.34 },
  { OrderID: 10252, CustomerName: 'Pascale Cartrain', ShipCountry: 'Belgium', Freight: 51.30 },
  { OrderID: 10253, CustomerName: 'Mario Pontes', ShipCountry: 'Brazil', Freight: 58.17 },
  { OrderID: 10254, CustomerName: 'Yang Wang', ShipCountry: 'Switzerland', Freight: 22.98 },
  { OrderID: 10255, CustomerName: 'Michael Holz', ShipCountry: 'Switzerland', Freight: 148.33 },
  { OrderID: 10256, CustomerName: 'Paula Parente', ShipCountry: 'Brazil', Freight: 13.97 },
  { OrderID: 10257, CustomerName: 'Carlos Hernández', ShipCountry: 'Venezuela', Freight: 81.91 }
])

provide('grid', [Page, Sort, Filter])
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Grid Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-grids</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Grid -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Grid</h2>
        <p class="text-gray-600 mb-6">Simple data grid without any features</p>
        <ejs-grid :data-source="sampleData">
          <e-columns>
            <e-column field="OrderID" header-text="Order ID" width="120" />
            <e-column field="CustomerName" header-text="Customer Name" width="150" />
            <e-column field="ShipCountry" header-text="Ship Country" width="130" />
            <e-column field="Freight" header-text="Freight" width="120" format="C2" />
          </e-columns>
        </ejs-grid>
      </section>

      <!-- 2. With Paging -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Grid with Paging</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowPaging</code>
        </p>
        <ejs-grid :data-source="sampleData" :allow-paging="true" :page-settings="{ pageSize: 5 }">
          <e-columns>
            <e-column field="OrderID" header-text="Order ID" width="120" />
            <e-column field="CustomerName" header-text="Customer Name" width="150" />
            <e-column field="ShipCountry" header-text="Ship Country" width="130" />
            <e-column field="Freight" header-text="Freight" width="120" format="C2" />
          </e-columns>
        </ejs-grid>
      </section>

      <!-- 3. With Sorting -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Grid with Sorting</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowSorting</code>
        </p>
        <ejs-grid :data-source="sampleData" :allow-sorting="true">
          <e-columns>
            <e-column field="OrderID" header-text="Order ID" width="120" />
            <e-column field="CustomerName" header-text="Customer Name" width="150" />
            <e-column field="ShipCountry" header-text="Ship Country" width="130" />
            <e-column field="Freight" header-text="Freight" width="120" format="C2" />
          </e-columns>
        </ejs-grid>
      </section>

      <!-- 4. With Filtering -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Grid with Filtering</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowFiltering</code>
        </p>
        <ejs-grid :data-source="sampleData" :allow-filtering="true">
          <e-columns>
            <e-column field="OrderID" header-text="Order ID" width="120" />
            <e-column field="CustomerName" header-text="Customer Name" width="150" />
            <e-column field="ShipCountry" header-text="Ship Country" width="130" />
            <e-column field="Freight" header-text="Freight" width="120" format="C2" />
          </e-columns>
        </ejs-grid>
      </section>

      <!-- 5. All Features Combined -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Full Featured Grid</h2>
        <p class="text-gray-600 mb-6">Grid with paging, sorting, and filtering enabled</p>
        <ejs-grid
          :data-source="sampleData"
          :allow-paging="true"
          :allow-sorting="true"
          :allow-filtering="true"
          :page-settings="{ pageSize: 5 }"
        >
          <e-columns>
            <e-column field="OrderID" header-text="Order ID" width="120" />
            <e-column field="CustomerName" header-text="Customer Name" width="150" />
            <e-column field="ShipCountry" header-text="Ship Country" width="130" />
            <e-column field="Freight" header-text="Freight" width="120" format="C2" />
          </e-columns>
        </ejs-grid>
      </section>

      <!-- 6. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">Array | Object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data source for the grid</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowPaging</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable paging</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowSorting</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable sorting</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowFiltering</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable filtering</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">pageSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">Object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Page size and page count settings</td>
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
@import '@syncfusion/ej2-calendars/styles/material.css';
@import '@syncfusion/ej2-dropdowns/styles/material.css';
@import '@syncfusion/ej2-inputs/styles/material.css';
@import '@syncfusion/ej2-navigations/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import '@syncfusion/ej2-splitbuttons/styles/material.css';
@import '@syncfusion/ej2-vue-grids/styles/material.css';
</style>
