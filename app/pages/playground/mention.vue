<script setup lang="ts">
import { MentionComponent as EjsMention } from '@syncfusion/ej2-vue-dropdowns'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Simple data source
const simpleUsers = ['John Doe', 'Jane Smith', 'Bob Wilson', 'Alice Brown', 'Charlie Davis']

// Object data source with fields
const userData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Manager' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'QA Engineer' }
]

const userFields = { text: 'name', value: 'id' }

// Tags data
const tags = ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Angular', 'Node.js', 'Python', 'Go', 'Rust']

// Event log
const eventLog = ref<string[]>([])

const addLog = (message: string) => {
  eventLog.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLog.value.length > 5) {
    eventLog.value.shift()
  }
}

const onSelect = (args: any) => {
  addLog(`Selected: ${args.itemData.name || args.itemData}`)
}

const onChange = (args: any) => {
  addLog(`Changed: ${args.value}`)
}

const onFiltering = (args: any) => {
  addLog(`Filtering: "${args.text}"`)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Mention Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-dropdowns</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Mention -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Mention</h2>
        <p class="text-gray-600 mb-6">Type @ to mention users</p>
        <label class="block text-sm font-medium text-gray-700 mb-2">Comments</label>
        <div
          id="basic-mention-target"
          contenteditable="true"
          class="min-h-[100px] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type @ to mention someone..."
        />
        <ejs-mention
          id="basic-mention"
          target="#basic-mention-target"
          :data-source="simpleUsers"
        />
      </section>

      <!-- 2. Object Data Source -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Object Data Source</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">fields</code>
        </p>
        <label class="block text-sm font-medium text-gray-700 mb-2">Team Chat</label>
        <div
          id="object-mention-target"
          contenteditable="true"
          class="min-h-[100px] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type @ to mention team members..."
        />
        <ejs-mention
          id="object-mention"
          target="#object-mention-target"
          :data-source="userData"
          :fields="userFields"
        />
      </section>

      <!-- 3. Custom Mention Character -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Custom Mention Character</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">mentionChar</code>
        </p>
        <label class="block text-sm font-medium text-gray-700 mb-2">Add Tags (type # for tags)</label>
        <div
          id="tag-mention-target"
          contenteditable="true"
          class="min-h-[100px] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type # to add technology tags..."
        />
        <ejs-mention
          id="tag-mention"
          target="#tag-mention-target"
          :data-source="tags"
          mention-char="#"
        />
      </section>

      <!-- 4. Show Mention Character -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Show Mention Character</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">showMentionChar</code> - Display @ in the result
        </p>
        <label class="block text-sm font-medium text-gray-700 mb-2">Comments (shows @ prefix)</label>
        <div
          id="show-char-target"
          contenteditable="true"
          class="min-h-[100px] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type @ to mention someone..."
        />
        <ejs-mention
          id="show-char-mention"
          target="#show-char-target"
          :data-source="simpleUsers"
          :show-mention-char="true"
        />
      </section>

      <!-- 5. Minimum Filter Length -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Minimum Filter Length</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">minLength</code> - Minimum characters before showing suggestions
        </p>
        <label class="block text-sm font-medium text-gray-700 mb-2">Type @jo to filter (min 2 chars)</label>
        <div
          id="min-length-target"
          contenteditable="true"
          class="min-h-[100px] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type @ then at least 2 characters..."
        />
        <ejs-mention
          id="min-length-mention"
          target="#min-length-target"
          :data-source="simpleUsers"
          :min-length="2"
        />
      </section>

      <!-- 6. Suggestion Count -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Suggestion Count</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">suggestionCount</code> - Limit displayed items
        </p>
        <label class="block text-sm font-medium text-gray-700 mb-2">Shows only 3 suggestions</label>
        <div
          id="suggestion-count-target"
          contenteditable="true"
          class="min-h-[100px] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type @ to see limited suggestions..."
        />
        <ejs-mention
          id="suggestion-count-mention"
          target="#suggestion-count-target"
          :data-source="simpleUsers"
          :suggestion-count="3"
        />
      </section>

      <!-- 7. Item Template -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Item Template</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">itemTemplate</code>
        </p>
        <label class="block text-sm font-medium text-gray-700 mb-2">Rich user suggestions</label>
        <div
          id="template-target"
          contenteditable="true"
          class="min-h-[100px] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type @ to see styled suggestions..."
        />
        <ejs-mention
          id="template-mention"
          target="#template-target"
          :data-source="userData"
          :fields="userFields"
          popup-width="280px"
          :item-template="'itemTemplate'"
        >
          <template #itemTemplate="{ data }">
            <div class="flex items-center gap-3 py-1">
              <div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-content text-white text-sm font-bold">
                {{ data.name.charAt(0) }}
              </div>
              <div>
                <div class="font-medium text-gray-900">{{ data.name }}</div>
                <div class="text-xs text-gray-500">{{ data.role }}</div>
              </div>
            </div>
          </template>
        </ejs-mention>
      </section>

      <!-- 8. Textarea Target -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Textarea Target</h2>
        <p class="text-gray-600 mb-6">Mention in a standard textarea element</p>
        <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          id="textarea-target"
          rows="4"
          class="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type @ to mention someone..."
        />
        <ejs-mention
          id="textarea-mention"
          target="#textarea-target"
          :data-source="simpleUsers"
        />
      </section>

      <!-- 9. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. Events</h2>
        <p class="text-gray-600 mb-6">
          Events: <code class="text-sm bg-gray-100 px-2 py-1 rounded">select</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">change</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">filtering</code>
        </p>
        <label class="block text-sm font-medium text-gray-700 mb-2">Track events</label>
        <div
          id="event-target"
          contenteditable="true"
          class="min-h-[100px] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type @ and watch the events..."
        />
        <ejs-mention
          id="event-mention"
          target="#event-target"
          :data-source="userData"
          :fields="userFields"
          @select="onSelect"
          @change="onChange"
          @filtering="onFiltering"
        />
        <div class="mt-4 p-3 bg-gray-100 rounded text-sm font-mono max-h-32 overflow-y-auto">
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">target</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">CSS selector for target element</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dataSource</td>
                <td class="px-4 py-3 text-sm text-gray-600">array | DataManager</td>
                <td class="px-4 py-3 text-sm text-gray-600">Data for mention suggestions</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">fields</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Map object properties to text/value</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">mentionChar</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Trigger character (default: @)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showMentionChar</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show @ in selected text</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">minLength</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Min chars before suggestions</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">suggestionCount</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Max suggestions to display</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">itemTemplate</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | slot</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom template for list items</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">select</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when item is selected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
[contenteditable][placeholder]:empty:before {
  content: attr(placeholder);
  color: #9CA3AF;
  pointer-events: none;
}
</style>
