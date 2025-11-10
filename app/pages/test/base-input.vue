<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '~/shared/components/form/BaseInput.vue'

const defaultValue = ref('')
const filledValue = ref('王小明')
const errorValue = ref('')
const disabledValue = ref('無法編輯')

definePageMeta({
  title: 'BaseInput Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        BaseInput Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: Default/Empty -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">1. Default (Empty)</h2>
          <BaseInput
            v-model="defaultValue"
            label="姓"
            :required="true"
          />
        </div>

        <!-- State 2: Focused (manual testing needed) -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">2. Focused (click to test)</h2>
          <BaseInput
            v-model="defaultValue"
            label="名"
            placeholder="請輸入您的名字"
          />
        </div>

        <!-- State 3: Filled with value -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">3. Filled with value</h2>
          <BaseInput
            v-model="filledValue"
            label="姓名"
          />
        </div>

        <!-- State 4: Error state -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">4. Error state</h2>
          <BaseInput
            v-model="errorValue"
            label="信箱"
            :required="true"
            error="請輸入有效的電子郵件地址"
          />
        </div>

        <!-- State 5: Disabled -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">5. Disabled</h2>
          <BaseInput
            v-model="disabledValue"
            label="帳號"
            :disabled="true"
          />
        </div>

        <!-- Without label -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">6. Without label</h2>
          <BaseInput
            v-model="defaultValue"
            placeholder="無標籤輸入框"
          />
        </div>
      </div>
    </div>
  </div>
</template>
