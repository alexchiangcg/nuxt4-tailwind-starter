<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonType = 'button' | 'submit' | 'reset'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  type?: ButtonType
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const buttonClasses = computed(() => {
  const base = 'content-stretch flex gap-[10px] items-center justify-center px-4 py-2 relative rounded-lg transition-all duration-200 font-["Noto_Sans_CJK_TC:Medium",sans-serif] text-base leading-normal not-italic text-center text-nowrap whitespace-pre'

  // Size classes
  const sizeClasses = {
    sm: 'h-10 px-3 text-sm',
    md: 'h-12 px-4 text-base',
    lg: 'h-14 px-5 text-lg'
  }

  // Variant classes
  const variantClasses = {
    primary: 'bg-[var(--primary-primary,#2877ee)] border-0 text-white hover:bg-[#1e5fc9] active:bg-[#174a9e]',
    secondary: 'bg-transparent border-2 border-[var(--primary-primary,#2877ee)] text-[color:var(--primary-primary,#2877ee)] hover:bg-[#f0f6ff] active:bg-[#e0edff]',
    outline: 'bg-[var(--surface,#ffffff)] border border-[var(--primary-primary,#2877ee)] border-solid text-[color:var(--primary-primary,#2877ee)] hover:bg-[#f0f6ff] active:bg-[#e0edff]',
    ghost: 'bg-transparent border-0 text-[color:var(--primary-primary,#2877ee)] hover:bg-[#f0f6ff] active:bg-[#e0edff]'
  }

  // Disabled classes
  const disabledClasses = 'bg-[var(--disable,rgba(98,91,113,0.16))] border border-[var(--outline-variant,#d7dae0)] border-solid text-[color:var(--outline,#7f8996)] cursor-not-allowed opacity-100'

  // Loading classes
  const loadingClasses = 'cursor-wait opacity-80'

  if (props.disabled) {
    return `${base} ${sizeClasses[props.size]} ${disabledClasses}`
  }

  if (props.loading) {
    return `${base} ${sizeClasses[props.size]} ${variantClasses[props.variant]} ${loadingClasses}`
  }

  return `${base} ${sizeClasses[props.size]} ${variantClasses[props.variant]} cursor-pointer`
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    data-name="Button"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      data-name="LoadingSpinner"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <!-- Button content (slot) -->
    <slot />
  </button>
</template>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
