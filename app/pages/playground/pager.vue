<script setup lang="ts">
import { PagerComponent as EjsPager, Pager, PagerDropDown } from '@syncfusion/ej2-vue-grids'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Inject PagerDropDown for page sizes feature
Pager.Inject(PagerDropDown)

const currentPage = ref(1)
const pageSizes = [5, 10, 20, 50]

const onPageClick = (args: any) => {
  currentPage.value = args.currentPage
  console.log('Page changed:', args)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Pager Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-grids</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Pager -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Pager</h2>
        <p class="text-gray-600 mb-6">Simple pager with default settings</p>
        <ejs-pager
          id="basic-pager"
          :total-records-count="100"
          :page-size="10"
        />
      </section>

      <!-- 2. Page Size -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Page Size</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">pageSize</code>
        </p>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">5 items per page (100 total):</p>
            <ejs-pager
              id="pagesize-5"
              :total-records-count="100"
              :page-size="5"
            />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">20 items per page (100 total):</p>
            <ejs-pager
              id="pagesize-20"
              :total-records-count="100"
              :page-size="20"
            />
          </div>
        </div>
      </section>

      <!-- 3. Page Count -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Page Count</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">pageCount</code> - Number of page buttons to display
        </p>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Page count: 3</p>
            <ejs-pager
              id="pagecount-3"
              :total-records-count="200"
              :page-size="10"
              :page-count="3"
            />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Page count: 5</p>
            <ejs-pager
              id="pagecount-5"
              :total-records-count="200"
              :page-size="10"
              :page-count="5"
            />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Page count: 10 (default)</p>
            <ejs-pager
              id="pagecount-10"
              :total-records-count="200"
              :page-size="10"
              :page-count="10"
            />
          </div>
        </div>
      </section>

      <!-- 4. Current Page -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Current Page</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">currentPage</code>
        </p>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-gray-500 mb-2">Start at page 5:</p>
            <ejs-pager
              id="current-page"
              :total-records-count="200"
              :page-size="10"
              :current-page="5"
            />
          </div>
        </div>
      </section>

      <!-- 5. Page Sizes Dropdown -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Page Sizes Dropdown</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">pageSizes</code>
        </p>
        <ejs-pager
          id="pagesizes-pager"
          :total-records-count="200"
          :page-size="10"
          :page-sizes="pageSizes"
        />
        <p class="mt-4 text-sm text-gray-500">Available sizes: {{ pageSizes.join(', ') }}</p>
      </section>

      <!-- 6. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Events</h2>
        <p class="text-gray-600 mb-6">
          Event: <code class="text-sm bg-gray-100 px-2 py-1 rounded">click</code>
        </p>
        <ejs-pager
          id="event-pager"
          :total-records-count="100"
          :page-size="10"
          @click="onPageClick"
        />
        <p class="mt-4 text-sm text-gray-500">Current Page: {{ currentPage }}</p>
      </section>

      <!-- 7. Enable Query String -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Query String</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">enableQueryString</code> - Update URL with page number
        </p>
        <ejs-pager
          id="querystring-pager"
          :total-records-count="100"
          :page-size="10"
          :enable-query-string="true"
        />
      </section>

      <!-- 8. Enable External Message -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. External Message</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">enableExternalMessage</code>
        </p>
        <ejs-pager
          id="message-pager"
          :total-records-count="100"
          :page-size="10"
          :enable-external-message="true"
          external-message="Showing items from server"
        />
      </section>

      <!-- 9. Large Dataset -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. Large Dataset</h2>
        <p class="text-gray-600 mb-6">Pager handling 10,000 records</p>
        <ejs-pager
          id="large-pager"
          :total-records-count="10000"
          :page-size="100"
          :page-sizes="[50, 100, 200, 500]"
          :page-count="5"
        />
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">totalRecordsCount</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Total number of records</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">pageSize</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Records per page</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">pageCount</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Number of page buttons to display</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">currentPage</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Active page number</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">pageSizes</td>
                <td class="px-4 py-3 text-sm text-gray-600">number[] | boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Page size dropdown options</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">enableQueryString</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Append page number to URL</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">click</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when page changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
