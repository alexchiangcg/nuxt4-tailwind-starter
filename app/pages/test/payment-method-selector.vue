<script setup lang="ts">
import { ref } from 'vue'
import PaymentMethodSelector from '~/features/reservation/components/PaymentMethodSelector.vue'
import type { PaymentMethod } from '~/features/reservation/types/reservation.types'

const selectedMethod1 = ref<PaymentMethod | null>(null)
const selectedMethod2 = ref<PaymentMethod | null>('cash')
const selectedMethod3 = ref<PaymentMethod | null>('credit_card')
const selectedMethod4 = ref<PaymentMethod | null>('bank_transfer')
const selectedMethod5 = ref<PaymentMethod | null>('paypal')

definePageMeta({
  title: 'PaymentMethodSelector Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        PaymentMethodSelector Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: No Selection (Default State) -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">1. No Selection (Default State)</h2>
          <PaymentMethodSelector v-model="selectedMethod1" />
          <div class="p-4 bg-gray-50 rounded">
            <p class="font-medium">Selected Method:</p>
            <pre class="text-sm">{{ selectedMethod1 || 'null' }}</pre>
          </div>
        </div>

        <!-- State 2: Cash Selected -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">2. Cash Selected (入坐時付款)</h2>
          <PaymentMethodSelector v-model="selectedMethod2" />
          <div class="p-4 bg-gray-50 rounded">
            <p class="font-medium">Selected Method:</p>
            <pre class="text-sm">{{ selectedMethod2 }}</pre>
          </div>
        </div>

        <!-- State 3: Credit Card Selected -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">3. Credit Card Selected (信用卡/金融卡)</h2>
          <PaymentMethodSelector v-model="selectedMethod3" />
          <div class="p-4 bg-gray-50 rounded">
            <p class="font-medium">Selected Method:</p>
            <pre class="text-sm">{{ selectedMethod3 }}</pre>
          </div>
        </div>

        <!-- State 4: Bank Transfer Selected -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">4. Bank Transfer Selected (銀行轉帳)</h2>
          <PaymentMethodSelector v-model="selectedMethod4" />
          <div class="p-4 bg-gray-50 rounded">
            <p class="font-medium">Selected Method:</p>
            <pre class="text-sm">{{ selectedMethod4 }}</pre>
          </div>
        </div>

        <!-- State 5: PayPal Selected -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">5. PayPal Selected (with PayPal Icon)</h2>
          <PaymentMethodSelector v-model="selectedMethod5" />
          <div class="p-4 bg-gray-50 rounded">
            <p class="font-medium">Selected Method:</p>
            <pre class="text-sm">{{ selectedMethod5 }}</pre>
          </div>
        </div>

        <!-- State 6: Interactive Test -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">6. Interactive Test - Click to Select</h2>
          <p class="text-sm text-gray-600">點擊任一選項來測試互動功能</p>
          <PaymentMethodSelector v-model="selectedMethod1" />
        </div>
      </div>
    </div>
  </div>
</template>
