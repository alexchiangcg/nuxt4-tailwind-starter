<script setup lang="ts">
import { ref } from 'vue'
import BaseChip from '~/shared/components/form/BaseChip.vue'
import BaseTextarea from '~/shared/components/form/BaseTextarea.vue'

interface SpecialRequestsFormData {
  purposes: string[]
  notes: string
}

const formData = ref<SpecialRequestsFormData>({
  purposes: [],
  notes: ''
})

const purposeOptions = [
  { label: '生日', value: 'birthday' },
  { label: '結婚週年', value: 'anniversary' },
  { label: '朋友聚會', value: 'friends' },
  { label: '家庭聚餐', value: 'family' },
  { label: '商務用餐', value: 'business' },
  { label: '想吃美食', value: 'food' },
  { label: '其他', value: 'other' }
]

const togglePurpose = (value: string) => {
  const index = formData.value.purposes.indexOf(value)
  if (index > -1) {
    formData.value.purposes.splice(index, 1)
  } else {
    formData.value.purposes.push(value)
  }
}

defineExpose({
  formData
})
</script>

<template>
  <div
    class="bg-[var(--surface,#ffffff)] box-border content-stretch flex flex-col gap-4 items-start p-6 relative rounded-[10px] w-full"
    data-name="SpecialRequestsForm"
  >
    <!-- Title -->
    <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-2xl text-[color:var(--on-surface,#0f172a)] w-full">
      特殊需求
    </p>

    <!-- Purpose Chips -->
    <div class="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
      <div class="content-stretch flex gap-1 items-center justify-center relative shrink-0">
        <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-normal not-italic relative shrink-0 text-base text-[color:var(--secondary-secondary,#6a6f7b)] text-nowrap whitespace-pre">
          預訂目的
        </p>
      </div>
      <div class="content-start flex flex-wrap gap-2 items-start relative shrink-0 w-full">
        <BaseChip
          v-for="option in purposeOptions"
          :key="option.value"
          :label="option.label"
          :selected="formData.purposes.includes(option.value)"
          @click="togglePurpose(option.value)"
        />
      </div>
    </div>

    <!-- Notes Textarea -->
    <BaseTextarea
      v-model="formData.notes"
      label="其他備註"
      placeholder="例如：需要兒童椅、過敏食材、壽星姓名、素食需求等"
    />
  </div>
</template>
