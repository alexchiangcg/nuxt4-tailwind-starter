<script setup lang="ts">
interface Props {
  modelValue: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  rows?: number
  maxLength?: number
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  required: false,
  disabled: false,
  rows: 4
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div
    class="content-stretch flex flex-col gap-2 items-start relative size-full"
    data-name="textarea"
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

    <!-- Textarea container -->
    <div class="relative w-full">
      <textarea
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-label="label"
        :aria-required="required"
        :rows="rows"
        :maxlength="maxLength"
        @input="handleInput"
        class="bg-[var(--surface,#ffffff)] border border-[var(--outline-variant,#d7dae0)] border-solid box-border content-stretch flex gap-2 items-start px-4 py-2 relative rounded-lg shrink-0 w-full font-['Noto_Sans_TC:Regular',sans-serif] font-normal text-base text-[color:var(--on-surface,#0f172a)] resize-y focus:outline-none focus:border-[var(--primary-primary,#2877ee)] focus:ring-2 focus:ring-[var(--primary-primary,#2877ee)] focus:ring-opacity-20 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-[color:var(--outline-variant,#d7dae0)]"
        data-name="Textarea"
      />

      <!-- Resizer icon overlay (bottom-right corner) -->
      <div
        class="absolute bottom-1 right-1 box-border content-stretch flex gap-[10px] items-center justify-center p-px size-5 pointer-events-none"
        data-name="icon/20/resizer"
      >
        <svg
          class="size-[14px]"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-name="resizer-icon"
        >
          <path
            d="M12.8333 12.8333H11.0833V11.0833H12.8333V12.8333ZM12.8333 9.33333H11.0833V7.58333H12.8333V9.33333ZM9.33333 12.8333H7.58333V11.0833H9.33333V12.8333ZM12.8333 5.83333H11.0833V4.08333H12.8333V5.83333ZM9.33333 9.33333H7.58333V7.58333H9.33333V9.33333ZM5.83333 12.8333H4.08333V11.0833H5.83333V12.8333ZM9.33333 5.83333H7.58333V4.08333H9.33333V5.83333ZM5.83333 9.33333H4.08333V7.58333H5.83333V9.33333ZM5.83333 5.83333H4.08333V4.08333H5.83333V5.83333Z"
            fill="var(--secondary-secondary, #6a6f7b)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar styling for textarea */
textarea::-webkit-scrollbar {
  width: 12px;
}

textarea::-webkit-scrollbar-track {
  background: transparent;
}

textarea::-webkit-scrollbar-thumb {
  background-color: var(--outline-variant, #d7dae0);
  border-radius: 6px;
  border: 3px solid var(--surface, #ffffff);
}

textarea::-webkit-scrollbar-thumb:hover {
  background-color: var(--secondary-secondary, #6a6f7b);
}

/* Firefox scrollbar */
textarea {
  scrollbar-width: thin;
  scrollbar-color: var(--outline-variant, #d7dae0) transparent;
}
</style>
