<script setup lang="ts">
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// 簡單資料
const countries = ['Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'China', 'Denmark', 'Egypt', 'Finland', 'France', 'Germany', 'Greece', 'India', 'Indonesia', 'Ireland', 'Italy', 'Japan', 'Korea', 'Mexico', 'Netherlands', 'New Zealand', 'Norway', 'Poland', 'Portugal', 'Russia', 'Singapore', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'UK', 'USA', 'Vietnam']

// 物件資料
const employees = [
  { id: 1, name: 'Andrew Fuller', job: 'Sales Manager', email: 'andrew@company.com' },
  { id: 2, name: 'Janet Leverling', job: 'Marketing Lead', email: 'janet@company.com' },
  { id: 3, name: 'Laura Callahan', job: 'Product Designer', email: 'laura@company.com' },
  { id: 4, name: 'Margaret Peacock', job: 'HR Manager', email: 'margaret@company.com' },
  { id: 5, name: 'Michael Suyama', job: 'Software Engineer', email: 'michael@company.com' },
  { id: 6, name: 'Nancy Davolio', job: 'Project Manager', email: 'nancy@company.com' },
  { id: 7, name: 'Robert King', job: 'Business Analyst', email: 'robert@company.com' },
  { id: 8, name: 'Steven Buchanan', job: 'Tech Lead', email: 'steven@company.com' },
]

// 分組資料
const vegetables = [
  { name: 'Cabbage', category: 'Leafy Vegetables' },
  { name: 'Spinach', category: 'Leafy Vegetables' },
  { name: 'Lettuce', category: 'Leafy Vegetables' },
  { name: 'Carrot', category: 'Root Vegetables' },
  { name: 'Potato', category: 'Root Vegetables' },
  { name: 'Onion', category: 'Root Vegetables' },
  { name: 'Tomato', category: 'Fruit Vegetables' },
  { name: 'Cucumber', category: 'Fruit Vegetables' },
  { name: 'Pepper', category: 'Fruit Vegetables' },
]

const selectedCountry = ref('')
const selectedEmployee = ref(null)

const handleSelect = (args: { itemData: { name: string } }) => {
  console.log('Selected:', args.itemData)
}

// 自訂模板
const itemTemplate = (data: { name: string; job: string }) => {
  return `<div class="flex flex-col py-1">
    <span class="font-medium">${data.name}</span>
    <span class="text-xs text-gray-500">${data.job}</span>
  </div>`
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">AutoComplete Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-dropdowns</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic AutoComplete -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic AutoComplete
        </h2>
        <p class="text-gray-600 mb-6">Simple autocomplete with string array data source</p>
        <div class="flex flex-col gap-2 max-w-md">
          <label class="text-sm font-medium text-gray-700">Search Country</label>
          <ejs-autocomplete
            v-model:value="selectedCountry"
            :data-source="countries"
            placeholder="Type to search..."
          />
        </div>
      </section>

      <!-- 2. Object Data Binding -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Object Data Binding
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">fields</code>
        </p>
        <div class="flex flex-col gap-2 max-w-md">
          <label class="text-sm font-medium text-gray-700">Search Employee</label>
          <ejs-autocomplete
            :data-source="employees"
            :fields="{ value: 'name', text: 'name' }"
            placeholder="Search by name..."
            @select="handleSelect"
          />
        </div>
      </section>

      <!-- 3. Filter Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Filter Types
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">filterType</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Contains (default)</label>
            <ejs-autocomplete
              :data-source="countries"
              filter-type="Contains"
              placeholder="Type 'an'..."
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">StartsWith</label>
            <ejs-autocomplete
              :data-source="countries"
              filter-type="StartsWith"
              placeholder="Type 'Au'..."
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">EndsWith</label>
            <ejs-autocomplete
              :data-source="countries"
              filter-type="EndsWith"
              placeholder="Type 'land'..."
            />
          </div>
        </div>
      </section>

      <!-- 4. Minimum Characters -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Minimum Characters
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">minLength</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Min 1 character (default)</label>
            <ejs-autocomplete
              :data-source="countries"
              :min-length="1"
              placeholder="Start typing..."
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Min 3 characters</label>
            <ejs-autocomplete
              :data-source="countries"
              :min-length="3"
              placeholder="Type at least 3 chars..."
            />
          </div>
        </div>
      </section>

      <!-- 5. Grouping -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Grouping
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">fields.groupBy</code>
        </p>
        <div class="flex flex-col gap-2 max-w-md">
          <label class="text-sm font-medium text-gray-700">Search Vegetable</label>
          <ejs-autocomplete
            :data-source="vegetables"
            :fields="{ value: 'name', text: 'name', groupBy: 'category' }"
            placeholder="Type vegetable name..."
          />
        </div>
      </section>

      <!-- 6. Highlight Search -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Highlight Search
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">highlight</code>
        </p>
        <div class="flex flex-col gap-2 max-w-md">
          <label class="text-sm font-medium text-gray-700">Highlight matching text</label>
          <ejs-autocomplete
            :data-source="countries"
            :highlight="true"
            placeholder="Type to see highlights..."
          />
        </div>
      </section>

      <!-- 7. Floating Label -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Floating Label
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">floatLabelType</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Auto</label>
            <ejs-autocomplete
              :data-source="countries"
              placeholder="Select Country"
              float-label-type="Auto"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Always</label>
            <ejs-autocomplete
              :data-source="countries"
              placeholder="Select Country"
              float-label-type="Always"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Never</label>
            <ejs-autocomplete
              :data-source="countries"
              placeholder="Select Country"
              float-label-type="Never"
            />
          </div>
        </div>
      </section>

      <!-- 8. Custom Value -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. Allow Custom Value
        </h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowCustom</code>
        </p>
        <div class="flex flex-col gap-2 max-w-md">
          <label class="text-sm font-medium text-gray-700">Can enter values not in the list</label>
          <ejs-autocomplete
            :data-source="countries"
            :allow-custom="true"
            placeholder="Type any country..."
          />
        </div>
      </section>

      <!-- 9. States -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          9. States
        </h2>
        <p class="text-gray-600 mb-6">
          Properties:
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>
          <code class="text-sm bg-gray-100 px-2 py-1 rounded ml-2">readonly</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Disabled</label>
            <ejs-autocomplete
              :data-source="countries"
              value="Australia"
              :enabled="false"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium text-gray-700">Readonly</label>
            <ejs-autocomplete
              :data-source="countries"
              value="Canada"
              :readonly="true"
            />
          </div>
        </div>
      </section>

      <!-- 10. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          10. API Reference
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Default
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">array</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data source for suggestions</td>
                <td class="px-4 py-3 text-sm text-gray-600">[]</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Field mapping for object data</td>
                <td class="px-4 py-3 text-sm text-gray-600">{ value, text, groupBy }</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">filterType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Filter type (Contains/StartsWith/EndsWith)</td>
                <td class="px-4 py-3 text-sm font-mono text-gray-600">'Contains'</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">minLength</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Minimum characters before filtering</td>
                <td class="px-4 py-3 text-sm text-gray-600">1</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">highlight</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Highlight matching text</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowCustom</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Allow values not in list</td>
                <td class="px-4 py-3 text-sm text-gray-600">true</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">suggestionCount</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Max suggestions to display</td>
                <td class="px-4 py-3 text-sm text-gray-600">20</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">autofill</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Auto-fill first matching value</td>
                <td class="px-4 py-3 text-sm text-gray-600">false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>


