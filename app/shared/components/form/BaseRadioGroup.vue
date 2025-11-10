<script setup lang="ts">
interface Option {
  label: string
  value: string | number
}

interface Props {
  modelValue: string | number | null
  options: Option[]
  name: string
  orientation?: 'horizontal' | 'vertical'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const handleChange = (value: string | number) => {
  if (!props.disabled) {
    emit('update:modelValue', value)
  }
}
</script>

<template>
  <div
    :class="[
      'flex',
      orientation === 'horizontal' ? 'flex-row gap-6' : 'flex-col gap-4'
    ]"
    data-name="RadioGroup"
    role="radiogroup"
  >
    <label
      v-for="option in options"
      :key="option.value"
      :class="[
        'flex items-center gap-2 cursor-pointer',
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      ]"
      @click="handleChange(option.value)"
    >
      <!-- Hidden native radio input -->
      <input
        type="radio"
        :name="name"
        :value="option.value"
        :checked="modelValue === option.value"
        :disabled="disabled"
        @change="() => handleChange(option.value)"
        class="sr-only"
      />

      <!-- Custom radio button UI -->
      <div
        :class="[
          'relative size-4 rounded-full border-2 border-solid transition-all duration-200',
          modelValue === option.value
            ? 'border-[var(--primary-primary,#2877ee)]'
            : 'border-[var(--outline-variant,#d7dae0)]',
          !disabled && modelValue !== option.value ? 'hover:border-[var(--primary-primary,#2877ee)]' : '',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        ]"
        data-name="RadioButton"
      >
        <!-- Inner filled circle when selected -->
        <div
          v-if="modelValue === option.value"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-[var(--primary-primary,#2877ee)]"
          data-name="RadioInner"
        />
      </div>

      <!-- Label text -->
      <span
        class="font-['Noto_Sans_TC:Regular',sans-serif] text-base text-[color:var(--on-surface,#0f172a)] select-none"
        :class="{ 'cursor-not-allowed': disabled }"
      >
        {{ option.label }}
      </span>
    </label>
  </div>
</template>

<style scoped>
/* Screen reader only class */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Focus visible styles for accessibility */
input:focus-visible + div {
  outline: 2px solid var(--primary-primary, #2877ee);
  outline-offset: 2px;
}
</style>
