<script setup lang="ts">
interface Props {
  label: string
  selected?: boolean
  disabled?: boolean
  variant?: 'outlined' | 'filled'
}

const props = withDefaults(defineProps<Props>(), {
  selected: false,
  disabled: false,
  variant: 'outlined'
})

const emit = defineEmits<{
  'click': []
}>()

const handleClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    @click="handleClick"
    :class="[
      'box-border content-stretch flex items-center justify-center px-4 py-1 relative rounded-lg shrink-0',
      variant === 'outlined' && !selected
        ? 'border border-[var(--primary-primary,#2877ee)] border-solid bg-transparent'
        : '',
      variant === 'outlined' && selected
        ? 'border border-[var(--primary-primary,#2877ee)] border-solid bg-[var(--primary-primary,#2877ee)]'
        : '',
      variant === 'filled'
        ? 'border-0 bg-[var(--primary-primary,#2877ee)]'
        : '',
      disabled
        ? 'opacity-50 cursor-not-allowed'
        : 'cursor-pointer hover:opacity-80 transition-opacity duration-200'
    ]"
    data-name="Chip"
  >
    <p
      :class="[
        'font-[\'Noto_Sans_CJK_TC:Medium\',sans-serif] leading-[1.5] not-italic relative shrink-0 text-base text-center text-nowrap tracking-[0.1px] whitespace-pre',
        variant === 'outlined' && !selected
          ? 'text-[color:var(--primary-primary,#2877ee)]'
          : '',
        (variant === 'outlined' && selected) || variant === 'filled'
          ? 'text-white'
          : ''
      ]"
    >
      {{ label }}
    </p>
  </button>
</template>

<style scoped>
button:focus-visible {
  outline: 2px solid var(--primary-primary, #2877ee);
  outline-offset: 2px;
}
</style>
