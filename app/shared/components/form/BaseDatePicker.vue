<script setup lang="ts">
interface Props {
  modelValue: string | null
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '請選擇日期',
  required: false,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value === '' ? null : target.value
  emit('update:modelValue', value)
}
</script>

<template>
  <div
    class="content-stretch flex flex-col gap-2 items-start relative size-full"
    data-name="datePicker"
  >
    <!-- Label with required indicator -->
    <div
      v-if="label"
      class="content-stretch flex font-['Noto_Sans_CJK_TC:Medium',sans-serif] gap-1 items-center justify-center leading-normal not-italic relative shrink-0 text-base text-nowrap whitespace-pre"
      data-name="Label"
    >
      <p class="relative shrink-0 text-[color:var(--secondary-secondary,#6a6f7b)]">
        {{ label }}
      </p>
      <p
        v-if="required"
        class="relative shrink-0 text-[color:var(--error,#f4493e)]"
      >
        *
      </p>
    </div>

    <!-- Date input container -->
    <div class="relative w-full">
      <input
        type="date"
        :value="modelValue ?? ''"
        :disabled="disabled"
        :aria-label="label"
        :aria-required="required"
        @change="handleChange"
        class="bg-[var(--surface,#ffffff)] border border-[var(--outline-variant,#d7dae0)] border-solid box-border content-stretch flex h-[50px] items-center px-4 py-0 relative rounded-lg shrink-0 w-full font-['Noto_Sans_TC:Regular',sans-serif] font-normal text-base text-[color:var(--on-surface,#0f172a)] cursor-pointer focus:outline-none focus:border-[var(--primary-primary,#2877ee)] focus:ring-2 focus:ring-[var(--primary-primary,#2877ee)] focus:ring-opacity-20 disabled:cursor-not-allowed disabled:opacity-50"
        :class="{
          'text-[color:var(--outline-variant,#d7dae0)]': !modelValue
        }"
        data-name="DateInput"
      />

      <!-- Calendar icon overlay (hidden on most browsers as they have their own) -->
      <div
        class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none box-border content-stretch flex gap-[10px] items-center justify-center px-[3px] py-[2px] size-6"
        data-name="icon/24/calendar"
      >
        <svg
          class="h-[19.115px] w-[17px]"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-name="calendar_today"
        >
          <path
            d="M14.875 2.11538H14.1667V0.576923H12.75V2.11538H4.25V0.576923H2.83333V2.11538H2.125C1.32917 2.11538 0.708333 2.73462 0.708333 3.52885V18.0481C0.708333 18.8423 1.32917 19.4615 2.125 19.4615H14.875C15.6708 19.4615 16.2917 18.8423 16.2917 18.0481V3.52885C16.2917 2.73462 15.6708 2.11538 14.875 2.11538ZM14.875 18.0481H2.125V6.60577H14.875V18.0481Z"
            fill="var(--secondary-secondary, #7f8996)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom styling for date input */
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: absolute;
  right: 16px;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-clear-button {
  display: none;
}

/* Firefox specific */
input[type="date"]::-moz-calendar-picker-indicator {
  opacity: 0;
  cursor: pointer;
}

/* Placeholder styling */
input[type="date"]:invalid {
  color: var(--outline-variant, #d7dae0);
}

input[type="date"]::before {
  content: attr(placeholder);
  color: var(--outline-variant, #d7dae0);
}

input[type="date"]:focus::before,
input[type="date"]:valid::before {
  content: none;
}
</style>
