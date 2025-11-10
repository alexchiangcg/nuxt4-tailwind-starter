<script setup lang="ts">
import { ref } from 'vue'
import BaseDropdown from '~/shared/components/form/BaseDropdown.vue'

const titleOptions = [
  { label: '先生', value: 'mr' },
  { label: '女士', value: 'ms' },
  { label: '小姐', value: 'miss' }
]

const countryCodeOptions = [
  { label: '+886 台灣', value: '+886' },
  { label: '+1 美國', value: '+1' },
  { label: '+86 中國', value: '+86' },
  { label: '+81 日本', value: '+81' },
  { label: '+82 韓國', value: '+82' }
]

const selectedTitle = ref<string | number | null>(null)
const selectedCountry = ref<string | number | null>(null)
const preSelectedTitle = ref<string | number | null>('mr')
const disabledDropdown = ref<string | number | null>(null)

definePageMeta({
  title: 'BaseDropdown Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        BaseDropdown Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: Closed with placeholder -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">1. Closed with Placeholder</h2>
          <BaseDropdown
            v-model="selectedTitle"
            :options="titleOptions"
            label="稱謂"
            :required="true"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ selectedTitle || '未選擇' }}
          </p>
        </div>

        <!-- State 2: Open (click to open) -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">2. Open Dropdown (click to test)</h2>
          <BaseDropdown
            v-model="selectedCountry"
            :options="countryCodeOptions"
            label="國碼"
            placeholder="請選擇國碼"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ selectedCountry || '未選擇' }}
          </p>
        </div>

        <!-- State 3: Closed with selected option -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">3. Closed with Selected Value</h2>
          <BaseDropdown
            v-model="preSelectedTitle"
            :options="titleOptions"
            label="稱謂"
            :required="true"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ preSelectedTitle }}
          </p>
        </div>

        <!-- State 4: Disabled -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">4. Disabled</h2>
          <BaseDropdown
            v-model="disabledDropdown"
            :options="titleOptions"
            label="稱謂（已停用）"
            :disabled="true"
          />
        </div>

        <!-- Without label -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">5. Without Label</h2>
          <BaseDropdown
            v-model="selectedTitle"
            :options="titleOptions"
            placeholder="選擇稱謂"
          />
        </div>

        <!-- Figma Example -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">6. Figma Example</h2>
          <BaseDropdown
            v-model="selectedTitle"
            :options="titleOptions"
            label="稱謂"
            placeholder="請選擇"
            :required="true"
          />
        </div>

        <!-- Interactive test -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">7. Interactive Selection Test</h2>
          <div class="space-y-4">
            <BaseDropdown
              v-model="selectedTitle"
              :options="titleOptions"
              label="選擇您的稱謂"
              :required="true"
            />
            <BaseDropdown
              v-model="selectedCountry"
              :options="countryCodeOptions"
              label="選擇國家/地區代碼"
            />
            <div class="p-4 bg-gray-50 rounded">
              <p class="font-medium">已選擇:</p>
              <p class="text-sm">稱謂: {{ selectedTitle || '未選擇' }}</p>
              <p class="text-sm">國碼: {{ selectedCountry || '未選擇' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
