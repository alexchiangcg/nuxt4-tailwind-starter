<script setup lang="ts">
import { ref } from 'vue'
import BaseRadioGroup from '~/shared/components/form/BaseRadioGroup.vue'

const genderOptions = [
  { label: '男生', value: 'male' },
  { label: '女生', value: 'female' },
  { label: '其他', value: 'other' }
]

const paymentOptions = [
  { label: '入坐時付款', value: 'cash' },
  { label: '信用卡/金融卡', value: 'credit_card' },
  { label: '銀行轉帳', value: 'bank_transfer' },
  { label: 'PayPal', value: 'paypal' }
]

const selectedGenderHorizontal = ref<string | number | null>(null)
const selectedGenderVertical = ref<string | number | null>('female')
const selectedPayment = ref<string | number | null>(null)
const disabledRadio = ref<string | number | null>('male')

definePageMeta({
  title: 'BaseRadioGroup Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        BaseRadioGroup Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: Horizontal - None selected -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">1. Horizontal - None Selected</h2>
          <BaseRadioGroup
            v-model="selectedGenderHorizontal"
            :options="genderOptions"
            name="gender-horizontal-1"
            orientation="horizontal"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ selectedGenderHorizontal || '未選擇' }}
          </p>
        </div>

        <!-- State 2: Horizontal - One selected -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">2. Horizontal - One Selected</h2>
          <BaseRadioGroup
            v-model="selectedGenderVertical"
            :options="genderOptions"
            name="gender-horizontal-2"
            orientation="horizontal"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ selectedGenderVertical }}
          </p>
        </div>

        <!-- State 3: Vertical layout -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">3. Vertical Layout</h2>
          <BaseRadioGroup
            v-model="selectedPayment"
            :options="paymentOptions"
            name="payment-vertical"
            orientation="vertical"
          />
          <p class="text-sm text-gray-600 mt-2">
            選中的值: {{ selectedPayment || '未選擇' }}
          </p>
        </div>

        <!-- State 4: Disabled -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">4. Disabled</h2>
          <BaseRadioGroup
            v-model="disabledRadio"
            :options="genderOptions"
            name="gender-disabled"
            orientation="horizontal"
            :disabled="true"
          />
        </div>

        <!-- Real-world example: Gender selection -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">5. Real-world Example - Gender Selection</h2>
          <div class="space-y-3">
            <label class="block font-medium text-gray-700">性別</label>
            <BaseRadioGroup
              v-model="selectedGenderHorizontal"
              :options="genderOptions"
              name="gender-example"
              orientation="horizontal"
            />
          </div>
        </div>

        <!-- Real-world example: Payment method -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">6. Real-world Example - Payment Method</h2>
          <div class="space-y-3">
            <label class="block font-medium text-gray-700">付款方式</label>
            <BaseRadioGroup
              v-model="selectedPayment"
              :options="paymentOptions"
              name="payment-example"
              orientation="vertical"
            />
          </div>
        </div>

        <!-- Interactive test -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">7. Interactive Selection Test</h2>
          <div class="space-y-4">
            <div>
              <label class="block font-medium text-gray-700 mb-2">選擇您的性別</label>
              <BaseRadioGroup
                v-model="selectedGenderHorizontal"
                :options="genderOptions"
                name="gender-interactive"
                orientation="horizontal"
              />
            </div>
            <div>
              <label class="block font-medium text-gray-700 mb-2">選擇付款方式</label>
              <BaseRadioGroup
                v-model="selectedPayment"
                :options="paymentOptions"
                name="payment-interactive"
                orientation="vertical"
              />
            </div>
            <div class="p-4 bg-gray-50 rounded">
              <p class="font-medium">已選擇:</p>
              <p class="text-sm">性別: {{ selectedGenderHorizontal || '未選擇' }}</p>
              <p class="text-sm">付款方式: {{ selectedPayment || '未選擇' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
