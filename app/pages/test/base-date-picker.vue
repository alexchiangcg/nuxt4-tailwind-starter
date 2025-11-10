<script setup lang="ts">
import { ref } from 'vue'
import BaseDatePicker from '~/shared/components/form/BaseDatePicker.vue'

const selectedDate = ref<string | null>(null)
const preSelectedDate = ref<string | null>('2024-12-25')
const birthdayDate = ref<string | null>(null)
const disabledDate = ref<string | null>('2024-01-01')

definePageMeta({
  title: 'BaseDatePicker Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        BaseDatePicker Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: Empty with placeholder -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">1. Empty with Placeholder</h2>
          <BaseDatePicker
            v-model="selectedDate"
            label="日期"
            :required="true"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ selectedDate || '未選擇' }}
          </p>
        </div>

        <!-- State 2: With pre-selected date -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">2. With Pre-selected Date</h2>
          <BaseDatePicker
            v-model="preSelectedDate"
            label="預約日期"
            :required="true"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ preSelectedDate }}
          </p>
        </div>

        <!-- State 3: Without label -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">3. Without Label</h2>
          <BaseDatePicker
            v-model="selectedDate"
            placeholder="選擇日期"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ selectedDate || '未選擇' }}
          </p>
        </div>

        <!-- State 4: Disabled -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">4. Disabled</h2>
          <BaseDatePicker
            v-model="disabledDate"
            label="日期（已停用）"
            :disabled="true"
          />
        </div>

        <!-- State 5: Figma Example - Birthday -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">5. Figma Example - Birthday</h2>
          <BaseDatePicker
            v-model="birthdayDate"
            label="生日"
            placeholder="請選擇日期"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ birthdayDate || '未選擇' }}
          </p>
        </div>

        <!-- State 6: Required field -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">6. Required Field</h2>
          <BaseDatePicker
            v-model="selectedDate"
            label="出生日期"
            :required="true"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ selectedDate || '未選擇' }}
          </p>
        </div>

        <!-- Interactive test -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">7. Interactive Selection Test</h2>
          <div class="space-y-4">
            <BaseDatePicker
              v-model="birthdayDate"
              label="選擇您的生日"
            />
            <BaseDatePicker
              v-model="selectedDate"
              label="選擇預約日期"
              :required="true"
            />
            <div class="p-4 bg-gray-50 rounded">
              <p class="font-medium">已選擇:</p>
              <p class="text-sm">生日: {{ birthdayDate || '未選擇' }}</p>
              <p class="text-sm">預約日期: {{ selectedDate || '未選擇' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
