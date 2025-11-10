<script setup lang="ts">
interface Props {
  modelValue: string
  label?: string
  placeholder?: string
  required?: boolean
  error?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '請輸入',
  required: false,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div
    class="content-stretch flex flex-col gap-2 items-start relative size-full"
    data-name="input"
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

    <!-- Input container -->
    <div
      class="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        :class="[
          'bg-[var(--surface,#ffffff)] border border-solid box-border content-stretch flex gap-2 h-[50px] items-center px-4 py-0 relative rounded-lg shrink-0 w-full',
          error ? 'border-[color:var(--error,#f4493e)]' : 'border-[color:var(--outline-variant,#d7dae0)]',
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        ]"
        data-name="InputContainer"
      >
        <input
          :value="modelValue"
          :placeholder="placeholder"
          :disabled="disabled"
          :aria-label="label"
          :aria-required="required"
          :aria-invalid="!!error"
          @input="handleInput"
          class="basis-0 flex flex-col font-['Noto_Sans_TC:Regular',sans-serif] font-normal grow justify-center leading-0 min-h-px min-w-px relative shrink-0 text-base bg-transparent border-0 outline-none text-[color:var(--on-surface,#0f172a)] placeholder:text-[color:var(--outline-variant,#d7dae0)]"
          data-name="Input"
        />
      </div>

      <!-- Error message -->
      <p
        v-if="error"
        class="text-sm text-[color:var(--error,#f4493e)] mt-1"
        data-name="ErrorMessage"
      >
        {{ error }}
      </p>
    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  line-height: 24px;
}

input:focus {
  outline: none;
}
</style>
