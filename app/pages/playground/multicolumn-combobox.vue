<script setup lang="ts">
import { MultiColumnComboBoxComponent as EjsMulticolumncombobox, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-multicolumn-combobox'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Employee data
const employeeData = [
  { empId: 1001, name: 'Andrew Fuller', designation: 'Team Lead', country: 'England', department: 'Engineering' },
  { empId: 1002, name: 'Robert King', designation: 'Developer', country: 'USA', department: 'Engineering' },
  { empId: 1003, name: 'Michael Suyama', designation: 'HR Manager', country: 'Russia', department: 'Human Resources' },
  { empId: 1004, name: 'Steven Buchanan', designation: 'Product Manager', country: 'Ukraine', department: 'Product' },
  { empId: 1005, name: 'Margaret Peacock', designation: 'Developer', country: 'Egypt', department: 'Engineering' },
  { empId: 1006, name: 'Janet Leverling', designation: 'Team Lead', country: 'Africa', department: 'Engineering' },
  { empId: 1007, name: 'Alice Johnson', designation: 'Product Manager', country: 'Australia', department: 'Product' },
  { empId: 1008, name: 'Bob Smith', designation: 'Developer', country: 'India', department: 'Engineering' },
  { empId: 1009, name: 'John Doe', designation: 'Product Manager', country: 'Ireland', department: 'Product' },
  { empId: 1010, name: 'Mario Pontes', designation: 'Team Lead', country: 'South Africa', department: 'Engineering' },
  { empId: 1011, name: 'Yang Wang', designation: 'Developer', country: 'China', department: 'Engineering' },
  { empId: 1012, name: 'David Brown', designation: 'HR Specialist', country: 'Egypt', department: 'Human Resources' },
  { empId: 1013, name: 'Antonio Bianchi', designation: 'Team Lead', country: 'USA', department: 'Engineering' },
  { empId: 1014, name: 'Laura Wilson', designation: 'Developer', country: 'England', department: 'Engineering' },
  { empId: 1015, name: 'Carlos Hernandez', designation: 'Developer', country: 'Canada', department: 'Engineering' }
]

// Product data
const productData = [
  { productId: 'P001', productName: 'MacBook Pro', category: 'Laptops', price: 2499, stock: 45 },
  { productId: 'P002', productName: 'Dell XPS 15', category: 'Laptops', price: 1899, stock: 32 },
  { productId: 'P003', productName: 'iPhone 15 Pro', category: 'Phones', price: 1199, stock: 120 },
  { productId: 'P004', productName: 'Samsung Galaxy S24', category: 'Phones', price: 999, stock: 85 },
  { productId: 'P005', productName: 'iPad Pro', category: 'Tablets', price: 1099, stock: 60 },
  { productId: 'P006', productName: 'Surface Pro 9', category: 'Tablets', price: 1299, stock: 40 },
  { productId: 'P007', productName: 'AirPods Pro', category: 'Accessories', price: 249, stock: 200 },
  { productId: 'P008', productName: 'Magic Keyboard', category: 'Accessories', price: 299, stock: 150 },
  { productId: 'P009', productName: 'LG UltraWide Monitor', category: 'Monitors', price: 699, stock: 25 },
  { productId: 'P010', productName: 'Dell 4K Monitor', category: 'Monitors', price: 549, stock: 30 }
]

// Fields configurations
const employeeFields = { text: 'name', value: 'empId' }
const productFields = { text: 'productName', value: 'productId' }
const groupedFields = { text: 'name', value: 'empId', groupBy: 'department' }

// Event log
const eventLog = ref<string[]>([])

const addLog = (message: string) => {
  eventLog.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLog.value.length > 5) {
    eventLog.value.shift()
  }
}

const onSelect = (args: any) => {
  addLog(`Selected: ${args.itemData?.name || args.itemData?.productName}`)
}

const onChange = (args: any) => {
  addLog(`Value changed: ${args.value}`)
}

const onFiltering = () => {
  addLog('Filtering triggered')
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">MultiColumn ComboBox Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-multicolumn-combobox</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic MultiColumn ComboBox -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic MultiColumn ComboBox</h2>
        <p class="text-gray-600 mb-6">Display multiple columns in dropdown</p>
        <div class="max-w-md">
          <ejs-multicolumncombobox
            id="basic-combo"
            :data-source="employeeData"
            :fields="employeeFields"
            placeholder="Select an employee"
            popup-height="250px"
          >
            <e-columns>
              <e-column field="empId" header="ID" width="80" />
              <e-column field="name" header="Name" width="150" />
              <e-column field="designation" header="Designation" width="130" />
              <e-column field="country" header="Country" width="100" />
            </e-columns>
          </ejs-multicolumncombobox>
        </div>
      </section>

      <!-- 2. With Filtering -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. With Filtering</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowFiltering</code> - Type to filter results
        </p>
        <div class="max-w-md">
          <ejs-multicolumncombobox
            id="filter-combo"
            :data-source="employeeData"
            :fields="employeeFields"
            :allow-filtering="true"
            placeholder="Search employees..."
            popup-height="250px"
          >
            <e-columns>
              <e-column field="empId" header="ID" width="80" />
              <e-column field="name" header="Name" width="150" />
              <e-column field="designation" header="Designation" width="130" />
              <e-column field="country" header="Country" width="100" />
            </e-columns>
          </ejs-multicolumncombobox>
        </div>
      </section>

      <!-- 3. With Sorting -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. With Sorting</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowSorting</code> - Click column header to sort
        </p>
        <div class="max-w-lg">
          <ejs-multicolumncombobox
            id="sort-combo"
            :data-source="productData"
            :fields="productFields"
            :allow-sorting="true"
            :allow-filtering="true"
            placeholder="Select a product"
            popup-height="280px"
          >
            <e-columns>
              <e-column field="productId" header="ID" width="80" />
              <e-column field="productName" header="Product" width="150" />
              <e-column field="category" header="Category" width="100" />
              <e-column field="price" header="Price ($)" width="90" />
              <e-column field="stock" header="Stock" width="80" />
            </e-columns>
          </ejs-multicolumncombobox>
        </div>
        <p class="text-sm text-gray-500 mt-2">Click on column headers to sort ascending/descending</p>
      </section>

      <!-- 4. With Grouping -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. With Grouping</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">fields.groupBy</code> - Group items by category
        </p>
        <div class="max-w-md">
          <ejs-multicolumncombobox
            id="group-combo"
            :data-source="employeeData"
            :fields="groupedFields"
            placeholder="Select by department"
            popup-height="300px"
          >
            <e-columns>
              <e-column field="empId" header="ID" width="80" />
              <e-column field="name" header="Name" width="150" />
              <e-column field="designation" header="Designation" width="130" />
              <e-column field="department" header="Department" width="120" />
            </e-columns>
          </ejs-multicolumncombobox>
        </div>
      </section>

      <!-- 5. Popup Configuration -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Popup Configuration</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">popupHeight</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">popupWidth</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Default popup width:</p>
            <ejs-multicolumncombobox
              id="popup-default"
              :data-source="employeeData"
              :fields="employeeFields"
              placeholder="Default width"
              popup-height="200px"
            >
              <e-columns>
                <e-column field="name" header="Name" width="150" />
                <e-column field="designation" header="Role" width="130" />
              </e-columns>
            </ejs-multicolumncombobox>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Custom popup width (600px):</p>
            <ejs-multicolumncombobox
              id="popup-custom"
              :data-source="employeeData"
              :fields="employeeFields"
              placeholder="Custom width"
              popup-height="200px"
              popup-width="600px"
            >
              <e-columns>
                <e-column field="name" header="Name" width="150" />
                <e-column field="designation" header="Role" width="130" />
                <e-column field="country" header="Country" width="100" />
                <e-column field="department" header="Dept" width="120" />
              </e-columns>
            </ejs-multicolumncombobox>
          </div>
        </div>
      </section>

      <!-- 6. Default Value -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Default Value</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">value</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">text</code>
        </p>
        <div class="max-w-md">
          <ejs-multicolumncombobox
            id="default-combo"
            :data-source="employeeData"
            :fields="employeeFields"
            :value="1005"
            placeholder="Employee selected"
            popup-height="250px"
          >
            <e-columns>
              <e-column field="empId" header="ID" width="80" />
              <e-column field="name" header="Name" width="150" />
              <e-column field="designation" header="Designation" width="130" />
              <e-column field="country" header="Country" width="100" />
            </e-columns>
          </ejs-multicolumncombobox>
        </div>
      </section>

      <!-- 7. Disabled & Read-only -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Disabled & Read-only States</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">readonly</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Disabled:</p>
            <ejs-multicolumncombobox
              id="disabled-combo"
              :data-source="employeeData"
              :fields="employeeFields"
              :enabled="false"
              :value="1001"
              popup-height="200px"
            >
              <e-columns>
                <e-column field="name" header="Name" width="150" />
                <e-column field="designation" header="Role" width="130" />
              </e-columns>
            </ejs-multicolumncombobox>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Read-only:</p>
            <ejs-multicolumncombobox
              id="readonly-combo"
              :data-source="employeeData"
              :fields="employeeFields"
              :readonly="true"
              :value="1003"
              popup-height="200px"
            >
              <e-columns>
                <e-column field="name" header="Name" width="150" />
                <e-column field="designation" header="Role" width="130" />
              </e-columns>
            </ejs-multicolumncombobox>
          </div>
        </div>
      </section>

      <!-- 8. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Events</h2>
        <p class="text-gray-600 mb-6">
          Events: <code class="text-sm bg-gray-100 px-2 py-1 rounded">select</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">change</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">filtering</code>
        </p>
        <div class="max-w-md mb-4">
          <ejs-multicolumncombobox
            id="event-combo"
            :data-source="employeeData"
            :fields="employeeFields"
            :allow-filtering="true"
            placeholder="Select and watch events"
            popup-height="200px"
            @select="onSelect"
            @change="onChange"
            @filtering="onFiltering"
          >
            <e-columns>
              <e-column field="empId" header="ID" width="80" />
              <e-column field="name" header="Name" width="150" />
              <e-column field="designation" header="Designation" width="130" />
            </e-columns>
          </ejs-multicolumncombobox>
        </div>
        <div class="p-3 bg-gray-100 rounded text-sm font-mono max-h-32 overflow-y-auto">
          <p v-for="(log, index) in eventLog" :key="index" class="text-gray-600">{{ log }}</p>
          <p v-if="eventLog.length === 0" class="text-gray-400">Event log will appear here...</p>
        </div>
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. API Reference</h2>
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
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data source for the dropdown</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Field mappings (text, value, groupBy)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">columns</td>
                <td class="px-4 py-3 text-sm text-gray-600">ColumnDirective[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Column definitions with field, header, width</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowFiltering</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable search filtering (default: true)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowSorting</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable column sorting (default: true)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">popupHeight/Width</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Popup dimensions</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Selected value</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">select / change</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Selection and value change events</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
:deep(.e-multicolumn-list) {
  font-family: inherit;
}
</style>
