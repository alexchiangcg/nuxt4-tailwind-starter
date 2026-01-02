<script setup lang="ts">
import { QueryBuilderComponent as EjsQuerybuilder, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-querybuilder'
import { ref, onMounted } from 'vue'

definePageMeta({
  layout: 'playground'
})

const querybuilder = ref<any>(null)
const sqlOutput = ref('')
const jsonOutput = ref('')

// Sample employee data
const employeeData = [
  { EmployeeID: 1, FirstName: 'Nancy', LastName: 'Davolio', Title: 'Sales Representative', HireDate: '2020-01-15', City: 'Seattle', Country: 'USA', Age: 32, IsActive: true },
  { EmployeeID: 2, FirstName: 'Andrew', LastName: 'Fuller', Title: 'Vice President', HireDate: '2019-08-22', City: 'Tacoma', Country: 'USA', Age: 45, IsActive: true },
  { EmployeeID: 3, FirstName: 'Janet', LastName: 'Leverling', Title: 'Sales Representative', HireDate: '2021-03-10', City: 'Kirkland', Country: 'USA', Age: 28, IsActive: false },
  { EmployeeID: 4, FirstName: 'Margaret', LastName: 'Peacock', Title: 'Sales Manager', HireDate: '2018-05-20', City: 'London', Country: 'UK', Age: 38, IsActive: true }
]

// Initial rules
const importRules = {
  condition: 'and',
  rules: [
    { label: 'Country', field: 'Country', type: 'string', operator: 'equal', value: 'USA' },
    { label: 'Age', field: 'Age', type: 'number', operator: 'greaterthan', value: 30 }
  ]
}

// Custom operators for EmployeeID
const employeeOperators = [
  { value: 'equal', key: 'Equal' },
  { value: 'notequal', key: 'Not Equal' },
  { value: 'greaterthan', key: 'Greater Than' },
  { value: 'lessthan', key: 'Less Than' }
]

// Countries list
const countries = ['USA', 'UK', 'Canada', 'Germany', 'France', 'Japan', 'Australia']

// Event handlers
const onRuleChange = () => {
  updateOutputs()
}

const updateOutputs = () => {
  if (querybuilder.value) {
    const qb = querybuilder.value.ej2Instances
    sqlOutput.value = qb.getSqlFromRules(qb.getRules())
    jsonOutput.value = JSON.stringify(qb.getRules(), null, 2)
  }
}

onMounted(() => {
  setTimeout(updateOutputs, 500)
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Query Builder Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-querybuilder</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Query Builder -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Query Builder</h2>
        <p class="text-gray-600 mb-6">Build queries with conditions and groups</p>
        <ejs-querybuilder
          ref="querybuilder"
          width="100%"
          :data-source="employeeData"
          :rule="importRules"
          @rule-change="onRuleChange"
        >
          <e-columns>
            <e-column field="EmployeeID" label="Employee ID" type="number" :operators="employeeOperators" />
            <e-column field="FirstName" label="First Name" type="string" />
            <e-column field="LastName" label="Last Name" type="string" />
            <e-column field="Title" label="Title" type="string" />
            <e-column field="Age" label="Age" type="number" />
            <e-column field="HireDate" label="Hire Date" type="date" format="yyyy-MM-dd" />
            <e-column field="Country" label="Country" type="string" :values="countries" />
            <e-column field="City" label="City" type="string" />
            <e-column field="IsActive" label="Is Active" type="boolean" />
          </e-columns>
        </ejs-querybuilder>
      </section>

      <!-- 2. SQL Output -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. SQL Output</h2>
        <p class="text-gray-600 mb-6">
          Method: <code class="text-sm bg-gray-100 px-2 py-1 rounded">getSqlFromRules()</code>
        </p>
        <div class="p-4 bg-gray-900 rounded-lg">
          <pre class="text-green-400 text-sm font-mono whitespace-pre-wrap">{{ sqlOutput || 'No rules defined' }}</pre>
        </div>
      </section>

      <!-- 3. JSON Output -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. JSON Output</h2>
        <p class="text-gray-600 mb-6">
          Method: <code class="text-sm bg-gray-100 px-2 py-1 rounded">getRules()</code>
        </p>
        <div class="p-4 bg-gray-900 rounded-lg max-h-64 overflow-auto">
          <pre class="text-blue-400 text-sm font-mono">{{ jsonOutput || '{}' }}</pre>
        </div>
      </section>

      <!-- 4. Column Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Column Types</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Operators</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Text fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">equal, notequal, startswith, endswith, contains, in, notin</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Numeric fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">equal, notequal, greaterthan, lessthan, between, in, notin</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">date</td>
                <td class="px-4 py-3 text-sm text-gray-600">Date fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">equal, notequal, greaterthan, lessthan, between</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">True/False fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">equal, notequal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 5. Operators Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Operators Reference</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="p-3 bg-gray-50 rounded">
            <p class="font-mono text-sm text-gray-900">startswith</p>
            <p class="text-xs text-gray-500">Value begins with</p>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <p class="font-mono text-sm text-gray-900">endswith</p>
            <p class="text-xs text-gray-500">Value ends with</p>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <p class="font-mono text-sm text-gray-900">contains</p>
            <p class="text-xs text-gray-500">Value contains</p>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <p class="font-mono text-sm text-gray-900">equal</p>
            <p class="text-xs text-gray-500">Exact match</p>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <p class="font-mono text-sm text-gray-900">notequal</p>
            <p class="text-xs text-gray-500">Not equal to</p>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <p class="font-mono text-sm text-gray-900">greaterthan</p>
            <p class="text-xs text-gray-500">Greater than</p>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <p class="font-mono text-sm text-gray-900">lessthan</p>
            <p class="text-xs text-gray-500">Less than</p>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <p class="font-mono text-sm text-gray-900">between</p>
            <p class="text-xs text-gray-500">Between range</p>
          </div>
          <div class="p-3 bg-gray-50 rounded">
            <p class="font-mono text-sm text-gray-900">in / notin</p>
            <p class="text-xs text-gray-500">In list</p>
          </div>
        </div>
      </section>

      <!-- 6. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data source for column inference</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">columns</td>
                <td class="px-4 py-3 text-sm text-gray-600">ColumnDirective[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Column definitions with field, label, type</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">rule</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Initial rules configuration</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">getRules()</td>
                <td class="px-4 py-3 text-sm text-gray-600">method</td>
                <td class="px-4 py-3 text-sm text-gray-600">Get current rules as JSON</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">getSqlFromRules()</td>
                <td class="px-4 py-3 text-sm text-gray-600">method</td>
                <td class="px-4 py-3 text-sm text-gray-600">Convert rules to SQL WHERE clause</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">setRulesFromSql()</td>
                <td class="px-4 py-3 text-sm text-gray-600">method</td>
                <td class="px-4 py-3 text-sm text-gray-600">Set rules from SQL string</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">ruleChange</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when rules change</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowDragAndDrop</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable drag and drop for rules</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
:deep(.e-query-builder) {
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}
</style>
