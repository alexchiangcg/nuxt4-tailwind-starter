<script setup lang="ts">
import { ref } from 'vue'
import type { PaymentMethod } from '../types/reservation.types'

interface Props {
  modelValue: PaymentMethod | null
}

interface Emits {
  (e: 'update:modelValue', value: PaymentMethod | null): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const paymentOptions = [
  { label: '入坐時付款', value: 'cash' as PaymentMethod },
  { label: '信用卡/金融卡', value: 'credit_card' as PaymentMethod },
  { label: '銀行轉帳', value: 'bank_transfer' as PaymentMethod },
  { label: 'PayPal', value: 'paypal' as PaymentMethod, hasIcon: true }
]

const selectPaymentMethod = (value: PaymentMethod) => {
  emit('update:modelValue', value)
}

defineExpose({
  modelValue: props.modelValue
})
</script>

<template>
  <div
    class="bg-[var(--surface,#ffffff)] box-border content-stretch flex flex-col gap-4 items-start overflow-clip p-6 relative rounded-[10px] w-full"
    data-name="PaymentMethodSelector"
  >
    <!-- Title Section -->
    <div class="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
      <!-- Title with Required Indicator -->
      <div class="content-stretch flex font-['Noto_Sans_CJK_TC:Medium',sans-serif] gap-1 items-start not-italic relative shrink-0 text-nowrap w-full whitespace-pre">
        <p class="leading-[1.5] relative shrink-0 text-2xl text-[color:var(--on-surface,#0f172a)]">
          付款方式
        </p>
        <p class="leading-normal relative shrink-0 text-base text-[color:var(--error,#f4493e)]">
          *
        </p>
      </div>

      <!-- Warning Alert Box -->
      <div class="bg-[var(--tertiary-container,#fff2c2)] box-border content-stretch flex gap-1 items-center p-2 relative rounded-lg shrink-0 w-full">
        <p class="basis-0 font-['Noto_Sans_CJK_TC:Medium',sans-serif] grow leading-normal min-h-px min-w-px not-italic relative shrink-0 text-sm text-[color:var(--on-tertiary-container,#2d2000)]">
          請在下一步輸入有效的信用卡資訊，信用卡資訊不會用於確保預定資格以外的任何目的
        </p>
      </div>
    </div>

    <!-- Payment Method Radio Group -->
    <div class="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <button
        v-for="option in paymentOptions"
        :key="option.value"
        type="button"
        class="border-[0px_0px_1px] border-[var(--outline-variant,#d7dae0)] border-solid box-border content-stretch flex gap-1 h-[65px] items-center p-2 relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors"
        :class="{ 'bg-blue-50': modelValue === option.value }"
        @click="selectPaymentMethod(option.value)"
      >
        <div class="content-stretch flex gap-2 items-center relative shrink-0">
          <!-- Radio Button -->
          <div class="relative shrink-0 size-4 flex items-center justify-center">
            <div
              class="size-4 rounded-full border-2 flex items-center justify-center transition-all"
              :class="modelValue === option.value
                ? 'border-[var(--primary-primary,#2877ee)] bg-white'
                : 'border-[var(--primary-primary,#2877ee)] bg-white'"
            >
              <div
                v-if="modelValue === option.value"
                class="size-2 rounded-full bg-[var(--primary-primary,#2877ee)]"
              />
            </div>
          </div>

          <!-- Label and Icon -->
          <div class="content-stretch flex gap-2 items-center justify-center relative shrink-0">
            <!-- PayPal Icon (only for PayPal option) -->
            <div
              v-if="option.hasIcon"
              class="box-border content-stretch flex flex-col h-12 items-center justify-center p-1 relative shrink-0"
            >
              <!-- PayPal Logo SVG -->
              <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2891 6.97656H8.98438C8.51562 6.97656 8.11719 7.30469 8.04688 7.76562L5.42969 26.0078C5.38281 26.3359 5.64062 26.6172 5.96875 26.6172H9.73438C10.2031 26.6172 10.6016 26.2891 10.6719 25.8281L11.3984 21.25C11.4688 20.7891 11.8672 20.4609 12.3359 20.4609H14.6562C19.5547 20.4609 22.5234 18.1172 23.2969 13.4062C23.625 11.4844 23.3672 9.96094 22.5 8.90625C21.5625 7.75781 19.7344 6.97656 17.2266 6.97656H15.2891ZM16.1094 13.6641C15.6875 16.3984 13.625 16.3984 11.6875 16.3984H10.6484L11.3516 11.6484C11.3984 11.3672 11.6328 11.1562 11.9141 11.1562H12.4297C13.7891 11.1562 15.0547 11.1562 15.7344 11.9531C16.1328 12.4453 16.25 13.1016 16.1094 13.6641Z" fill="#139AD6"/>
                <path d="M32.5391 13.5703H28.7734C28.4922 13.5703 28.2578 13.7812 28.2109 14.0625L28.0469 15.125L27.7891 14.7266C27.0156 13.5938 25.3516 13.2188 23.6875 13.2188C20.0391 13.2188 16.9531 16.0234 16.3672 19.9766C16.0625 21.9453 16.5781 23.8203 17.75 25.1094C18.8281 26.2891 20.3281 26.7578 22.0859 26.7578C25.2109 26.7578 27.0156 24.7422 27.0156 24.7422L26.8516 25.7812C26.8047 26.1094 27.0625 26.3906 27.3906 26.3906H30.8047C31.2734 26.3906 31.6719 26.0625 31.7422 25.6016L33.5234 14.1797C33.5703 13.8516 33.3125 13.5703 32.9844 13.5703H32.5391ZM27.8594 20.0703C27.5547 22.0156 26.0312 23.3281 24.0859 23.3281C23.0938 23.3281 22.3203 23 21.8047 22.4141C21.2891 21.8281 21.0781 21.0078 21.2188 20.0938C21.5 18.1719 23.0469 16.8125 24.9688 16.8125C25.9375 16.8125 26.7109 17.1406 27.2266 17.7266C27.7422 18.3125 27.9766 19.1562 27.8594 20.0703Z" fill="#263B80"/>
                <path d="M16.1094 13.6641C15.6875 16.3984 13.625 16.3984 11.6875 16.3984H10.6484L11.3516 11.6484C11.3984 11.3672 11.6328 11.1562 11.9141 11.1562H12.4297C13.7891 11.1562 15.0547 11.1562 15.7344 11.9531C16.1328 12.4453 16.25 13.1016 16.1094 13.6641Z" fill="#232C65"/>
              </svg>
            </div>

            <!-- Label Text -->
            <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-normal not-italic relative shrink-0 text-base text-[color:var(--secondary-secondary,#6a6f7b)] text-nowrap whitespace-pre">
              {{ option.label }}
            </p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
