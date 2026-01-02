<script setup lang="ts">
import { DropDownTreeComponent as EjsDropdowntree } from '@syncfusion/ej2-vue-dropdowns'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Hierarchical data - continents and countries
const continentData = [
  {
    code: 'AF', name: 'Africa', countries: [
      { code: 'NGA', name: 'Nigeria' },
      { code: 'EGY', name: 'Egypt' },
      { code: 'ZAF', name: 'South Africa' }
    ]
  },
  {
    code: 'AS', name: 'Asia', expanded: true, countries: [
      { code: 'CHN', name: 'China' },
      { code: 'IND', name: 'India' },
      { code: 'JPN', name: 'Japan' },
      { code: 'TWN', name: 'Taiwan' }
    ]
  },
  {
    code: 'EU', name: 'Europe', countries: [
      { code: 'DEU', name: 'Germany' },
      { code: 'FRA', name: 'France' },
      { code: 'GBR', name: 'United Kingdom' }
    ]
  },
  {
    code: 'NA', name: 'North America', countries: [
      { code: 'USA', name: 'United States' },
      { code: 'CAN', name: 'Canada' },
      { code: 'MEX', name: 'Mexico' }
    ]
  }
]

const continentFields = {
  dataSource: continentData,
  value: 'code',
  text: 'name',
  child: 'countries'
}

// Flat data with parent-child relationship
const employeeData = [
  { id: 1, name: 'Steven Buchanan', job: 'CEO', hasChild: true, expanded: true },
  { id: 2, pid: 1, name: 'Laura Callahan', job: 'Product Manager', hasChild: true },
  { id: 3, pid: 2, name: 'Andrew Fuller', job: 'Team Lead', hasChild: true },
  { id: 4, pid: 3, name: 'Anne Dodsworth', job: 'Developer' },
  { id: 5, pid: 3, name: 'Nancy Davolio', job: 'Developer' },
  { id: 6, pid: 1, name: 'Michael Suyama', job: 'HR Manager', hasChild: true },
  { id: 7, pid: 6, name: 'Robert King', job: 'HR Specialist' },
  { id: 8, pid: 6, name: 'Janet Leverling', job: 'Recruiter' }
]

const employeeFields = {
  dataSource: employeeData,
  value: 'id',
  text: 'name',
  parentValue: 'pid',
  hasChildren: 'hasChild'
}

// File system data
const fileData = [
  {
    id: '01', text: 'Documents', icon: 'e-icons e-folder', child: [
      { id: '01-01', text: 'Reports.xlsx', icon: 'e-icons e-file' },
      { id: '01-02', text: 'Budget.pdf', icon: 'e-icons e-file' }
    ]
  },
  {
    id: '02', text: 'Music', icon: 'e-icons e-folder', expanded: true, child: [
      { id: '02-01', text: 'Song1.mp3', icon: 'e-icons e-file' },
      { id: '02-02', text: 'Song2.mp3', icon: 'e-icons e-file' }
    ]
  },
  {
    id: '03', text: 'Pictures', icon: 'e-icons e-folder', child: [
      { id: '03-01', text: 'Photo1.jpg', icon: 'e-icons e-file' },
      { id: '03-02', text: 'Photo2.png', icon: 'e-icons e-file' }
    ]
  }
]

const fileFields = {
  dataSource: fileData,
  value: 'id',
  text: 'text',
  iconCss: 'icon',
  child: 'child'
}

// Tree settings
const treeSettings = { autoCheck: true }

// Event log
const eventLog = ref<string[]>([])

const addLog = (message: string) => {
  eventLog.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLog.value.length > 5) {
    eventLog.value.shift()
  }
}

const onSelect = (args: any) => {
  addLog(`Selected: ${args.itemData?.text || args.nodeData?.text}`)
}

const onChange = (args: any) => {
  addLog(`Changed: ${args.value?.join(', ') || 'none'}`)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Dropdown Tree Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-dropdowns</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Dropdown Tree -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Dropdown Tree</h2>
        <p class="text-gray-600 mb-6">Hierarchical data with nested structure</p>
        <div class="max-w-xs">
          <ejs-dropdowntree
            id="basic-tree"
            :fields="continentFields"
            placeholder="Select a country"
            popup-height="250px"
          />
        </div>
      </section>

      <!-- 2. Flat Data with Parent-Child -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Flat Data with Parent-Child Relationship</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">parentValue</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">hasChildren</code>
        </p>
        <div class="max-w-xs">
          <ejs-dropdowntree
            id="flat-tree"
            :fields="employeeFields"
            placeholder="Select an employee"
            popup-height="250px"
          />
        </div>
      </section>

      <!-- 3. Checkbox Selection -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Checkbox Selection</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">showCheckBox</code>
        </p>
        <div class="max-w-md">
          <ejs-dropdowntree
            id="checkbox-tree"
            :fields="continentFields"
            :show-check-box="true"
            placeholder="Select countries"
            popup-height="250px"
          />
        </div>
      </section>

      <!-- 4. Auto Check (Parent-Child Sync) -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Auto Check (Parent-Child Sync)</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">treeSettings.autoCheck</code>
        </p>
        <div class="max-w-md">
          <ejs-dropdowntree
            id="autocheck-tree"
            :fields="employeeFields"
            :show-check-box="true"
            :tree-settings="treeSettings"
            placeholder="Select team members"
            popup-height="250px"
          />
        </div>
        <p class="text-sm text-gray-500 mt-2">Selecting a parent automatically selects all children</p>
      </section>

      <!-- 5. Selection Mode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Selection Mode</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">mode</code> - delimiter, box, default, custom
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Delimiter mode (comma-separated):</p>
            <ejs-dropdowntree
              id="mode-delimiter"
              :fields="continentFields"
              :show-check-box="true"
              mode="Delimiter"
              placeholder="Select countries"
              popup-height="200px"
            />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Box mode (tags):</p>
            <ejs-dropdowntree
              id="mode-box"
              :fields="continentFields"
              :show-check-box="true"
              mode="Box"
              placeholder="Select countries"
              popup-height="200px"
            />
          </div>
        </div>
      </section>

      <!-- 6. Filtering -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Filtering</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowFiltering</code>
        </p>
        <div class="max-w-xs">
          <ejs-dropdowntree
            id="filter-tree"
            :fields="continentFields"
            :allow-filtering="true"
            placeholder="Search countries..."
            popup-height="250px"
          />
        </div>
      </section>

      <!-- 7. Icons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. With Icons</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">iconCss</code> in fields
        </p>
        <div class="max-w-xs">
          <ejs-dropdowntree
            id="icon-tree"
            :fields="fileFields"
            placeholder="Select a file"
            popup-height="250px"
          />
        </div>
      </section>

      <!-- 8. Default Value -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Default Value</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">value</code>
        </p>
        <div class="max-w-xs">
          <ejs-dropdowntree
            id="value-tree"
            :fields="continentFields"
            :value="['TWN']"
            placeholder="Select a country"
            popup-height="250px"
          />
        </div>
      </section>

      <!-- 9. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. Events</h2>
        <p class="text-gray-600 mb-6">
          Events: <code class="text-sm bg-gray-100 px-2 py-1 rounded">select</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">change</code>
        </p>
        <div class="max-w-xs mb-4">
          <ejs-dropdowntree
            id="event-tree"
            :fields="continentFields"
            :show-check-box="true"
            placeholder="Select and watch events"
            popup-height="200px"
            @select="onSelect"
            @change="onChange"
          />
        </div>
        <div class="p-3 bg-gray-100 rounded text-sm font-mono max-h-32 overflow-y-auto">
          <p v-for="(log, index) in eventLog" :key="index" class="text-gray-600">{{ log }}</p>
          <p v-if="eventLog.length === 0" class="text-gray-400">Event log will appear here...</p>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data source and field mappings</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showCheckBox</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable checkbox for multi-select</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">treeSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Tree configuration (autoCheck, etc.)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">mode</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Display mode (Delimiter, Box, Custom)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowFiltering</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable search filtering</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">string[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Selected values array</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">select</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when item is selected</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">change</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when value changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
