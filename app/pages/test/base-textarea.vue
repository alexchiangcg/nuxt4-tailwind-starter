<script setup lang="ts">
import { ref } from 'vue'
import BaseTextarea from '~/shared/components/form/BaseTextarea.vue'

const emptyTextarea = ref('')
const filledTextarea = ref('這是一些已填入的文字內容，用來測試 textarea 元件的顯示效果。')
const specialRequestsTextarea = ref('')
const disabledTextarea = ref('這個 textarea 已被停用，無法編輯。')
const longTextarea = ref('這是一段很長的文字內容，用來測試 textarea 的滾動效果。當文字內容超過顯示區域時，應該會出現滾動條。\n\n這是第二段內容。\n\n這是第三段內容，繼續增加更多文字來測試滾動功能。')

definePageMeta({
  title: 'BaseTextarea Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        BaseTextarea Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: Empty with placeholder -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">1. Empty with Placeholder</h2>
          <BaseTextarea
            v-model="emptyTextarea"
            label="備註"
            placeholder="請輸入備註內容"
            :required="true"
          />
          <p class="text-sm text-gray-600 mt-2">
            字數: {{ emptyTextarea.length }}
          </p>
        </div>

        <!-- State 2: Filled with content -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">2. Filled with Content</h2>
          <BaseTextarea
            v-model="filledTextarea"
            label="內容"
            :required="true"
          />
          <p class="text-sm text-gray-600 mt-2">
            字數: {{ filledTextarea.length }}
          </p>
        </div>

        <!-- State 3: Figma Example - Special Requests -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">3. Figma Example - Special Requests</h2>
          <BaseTextarea
            v-model="specialRequestsTextarea"
            label="其他備註"
            placeholder="例如：需要兒童椅、過敏食材、壽星姓名、素食需求等"
          />
          <p class="text-sm text-gray-600 mt-2">
            字數: {{ specialRequestsTextarea.length }}
          </p>
        </div>

        <!-- State 4: Disabled -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">4. Disabled</h2>
          <BaseTextarea
            v-model="disabledTextarea"
            label="備註（已停用）"
            :disabled="true"
          />
        </div>

        <!-- State 5: Without label -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">5. Without Label</h2>
          <BaseTextarea
            v-model="emptyTextarea"
            placeholder="請輸入內容"
          />
        </div>

        <!-- State 6: With max length -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">6. With Max Length (100 characters)</h2>
          <BaseTextarea
            v-model="emptyTextarea"
            label="短備註"
            placeholder="最多 100 個字元"
            :max-length="100"
          />
          <p class="text-sm text-gray-600 mt-2">
            字數: {{ emptyTextarea.length }} / 100
          </p>
        </div>

        <!-- State 7: Long content with scrolling -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">7. Long Content with Scrolling</h2>
          <BaseTextarea
            v-model="longTextarea"
            label="長內容"
            :rows="6"
          />
          <p class="text-sm text-gray-600 mt-2">
            字數: {{ longTextarea.length }}
          </p>
        </div>

        <!-- Interactive test -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">8. Interactive Test</h2>
          <div class="space-y-4">
            <BaseTextarea
              v-model="specialRequestsTextarea"
              label="特殊需求"
              placeholder="例如：需要兒童椅、過敏食材、壽星姓名、素食需求等"
            />
            <BaseTextarea
              v-model="emptyTextarea"
              label="其他備註"
              placeholder="請輸入其他備註"
              :max-length="200"
              :required="true"
            />
            <div class="p-4 bg-gray-50 rounded">
              <p class="font-medium">已輸入內容:</p>
              <p class="text-sm">特殊需求 ({{ specialRequestsTextarea.length }} 字): {{ specialRequestsTextarea || '未輸入' }}</p>
              <p class="text-sm">其他備註 ({{ emptyTextarea.length }}/200 字): {{ emptyTextarea || '未輸入' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
