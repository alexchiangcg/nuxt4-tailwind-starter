<script setup lang="ts">
interface Option {
  label: string
  value: string | number
}

interface Props {
  modelValue: string | number | null
  options: Option[]
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '請選擇',
  required: false,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number | null]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  const value = target.value === '' ? null : target.value
  emit('update:modelValue', value)
}
</script>

<template>
  <div
    class="content-stretch flex flex-col gap-2 items-start relative size-full"
    data-name="dropdown"
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

    <!-- Dropdown container -->
    <div
      class="content-stretch flex flex-col gap-1 items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div class="relative w-full">
        <!-- Native select element -->
        <select
          :value="modelValue ?? ''"
          :disabled="disabled"
          :aria-label="label"
          :aria-required="required"
          @change="handleChange"
          class="bg-[var(--surface,#ffffff)] border border-[var(--outline-variant,#d7dae0)] border-solid box-border content-stretch flex h-[50px] items-center justify-between px-4 py-0 relative rounded-lg shrink-0 w-full appearance-none font-['Noto_Sans_TC:Regular',sans-serif] font-normal text-base text-[color:var(--on-surface,#0f172a)] cursor-pointer focus:outline-none focus:border-[var(--primary-primary,#2877ee)] focus:ring-2 focus:ring-[var(--primary-primary,#2877ee)] focus:ring-opacity-20 disabled:cursor-not-allowed disabled:opacity-50"
          :class="{
            'text-[color:var(--outline-variant,#d7dae0)]': !modelValue
          }"
          data-name="Select"
        >
          <!-- Placeholder option -->
          <option value="" disabled selected hidden>
            {{ placeholder }}
          </option>

          <!-- Options -->
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            class="text-[color:var(--on-surface,#0f172a)]"
          >
            {{ option.label }}
          </option>
        </select>

        <!-- Arrow down icon -->
        <div
          class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[5px] py-[7px] size-5"
          data-name="icon/20/arrow_down"
        >
          <svg
            class="h-[5.018px] w-[9.018px]"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-name="keyboard_arrow_down"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-[color:var(--on-surface,#0f172a)]"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Remove default select arrow in different browsers */
select {
  background-image: none;
}

select::-ms-expand {
  display: none;
}

/* Style for selected option */
select option:checked {
  background-color: var(--primary-primary, #2877ee);
  color: white;
}
</style>
