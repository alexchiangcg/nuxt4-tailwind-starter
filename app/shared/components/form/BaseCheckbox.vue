<script setup lang="ts">
interface Props {
  modelValue: boolean
  label?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}

const handleLabelClick = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>

<template>
  <div
    class="flex items-center gap-2 cursor-pointer"
    :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    data-name="Checkbox"
  >
    <div class="relative inline-flex items-center">
      <!-- Hidden native checkbox for accessibility -->
      <input
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        :aria-label="label"
        @change="handleChange"
        class="sr-only"
      />

      <!-- Custom checkbox UI -->
      <div
        :class="[
          'relative size-4 rounded border border-solid transition-all duration-200',
          modelValue
            ? 'bg-[var(--primary-primary,#2877ee)] border-[var(--primary-primary,#2877ee)]'
            : 'bg-transparent border-[var(--outline-variant,#d7dae0)]',
          !disabled && !modelValue ? 'hover:border-[var(--primary-primary,#2877ee)]' : '',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer'
        ]"
        data-name="CheckboxBox"
        @click="handleLabelClick"
      >
        <!-- Checkmark icon -->
        <div
          v-if="modelValue"
          class="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full"
          data-name="CheckmarkContainer"
        >
          <div
            class="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[3px] py-1 relative shrink-0 size-4"
            data-name="icon/16/check"
          >
            <svg
              class="h-[6.633px] w-[9px]"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-name="check"
            >
              <path
                d="M0.5 3.5L3 6L8.5 0.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Label -->
    <label
      v-if="label"
      class="font-['Noto_Sans_TC:Regular',sans-serif] text-base text-[color:var(--on-surface,#0f172a)] select-none"
      :class="{ 'cursor-pointer': !disabled, 'cursor-not-allowed': disabled }"
      @click="handleLabelClick"
    >
      {{ label }}
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
