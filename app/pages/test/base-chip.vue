<script setup lang="ts">
import { ref } from 'vue'
import BaseChip from '~/shared/components/form/BaseChip.vue'

const selectedChip = ref<string | null>(null)
const selectedSpecialRequests = ref<string[]>([])

const specialRequestOptions = [
  { label: '生日', value: 'birthday' },
  { label: '需要兒童椅', value: 'child_chair' },
  { label: '素食需求', value: 'vegetarian' },
  { label: '過敏食材', value: 'allergies' },
  { label: '壽星姓名', value: 'birthday_name' },
  { label: '無障礙空間', value: 'accessible' },
  { label: '其他', value: 'other' }
]

const genderOptions = [
  { label: '男生', value: 'male' },
  { label: '女生', value: 'female' },
  { label: '其他', value: 'other' }
]

const toggleSpecialRequest = (value: string) => {
  const index = selectedSpecialRequests.value.indexOf(value)
  if (index > -1) {
    selectedSpecialRequests.value.splice(index, 1)
  } else {
    selectedSpecialRequests.value.push(value)
  }
}

definePageMeta({
  title: 'BaseChip Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        BaseChip Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: Outlined unselected -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">1. Outlined Unselected</h2>
          <div class="flex gap-2 flex-wrap">
            <BaseChip label="生日" />
            <BaseChip label="需要兒童椅" />
            <BaseChip label="素食需求" />
          </div>
        </div>

        <!-- State 2: Outlined selected -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">2. Outlined Selected</h2>
          <div class="flex gap-2 flex-wrap">
            <BaseChip label="生日" :selected="true" />
            <BaseChip label="需要兒童椅" :selected="true" />
            <BaseChip label="素食需求" :selected="false" />
          </div>
        </div>

        <!-- State 3: Disabled -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">3. Disabled</h2>
          <div class="flex gap-2 flex-wrap">
            <BaseChip label="生日" :disabled="true" />
            <BaseChip label="需要兒童椅" :disabled="true" :selected="true" />
          </div>
        </div>

        <!-- State 4: Filled variant -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">4. Filled Variant</h2>
          <div class="flex gap-2 flex-wrap">
            <BaseChip label="生日" variant="filled" />
            <BaseChip label="需要兒童椅" variant="filled" />
            <BaseChip label="素食需求" variant="filled" />
          </div>
        </div>

        <!-- State 5: Figma Example - Special Requests Group -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">5. Figma Example - Special Requests</h2>
          <div class="space-y-3">
            <label class="block font-medium text-gray-700">過敏食材</label>
            <div class="flex gap-2 flex-wrap">
              <BaseChip label="生日" />
              <BaseChip label="需要兒童椅" />
              <BaseChip label="素食需求" />
              <BaseChip label="過敏食材" />
              <BaseChip label="壽星姓名" />
              <BaseChip label="無障礙空間" />
              <BaseChip label="其他" />
            </div>
          </div>
        </div>

        <!-- State 6: Single selection chip group -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">6. Single Selection (Radio Behavior)</h2>
          <div class="space-y-3">
            <label class="block font-medium text-gray-700">選擇性別</label>
            <div class="flex gap-2 flex-wrap">
              <BaseChip
                v-for="option in genderOptions"
                :key="option.value"
                :label="option.label"
                :selected="selectedChip === option.value"
                @click="selectedChip = option.value"
              />
            </div>
            <p class="text-sm text-gray-600 mt-2">
              選中的值: {{ selectedChip || '未選擇' }}
            </p>
          </div>
        </div>

        <!-- State 7: Multiple selection chip group -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">7. Multiple Selection (Checkbox Behavior)</h2>
          <div class="space-y-3">
            <label class="block font-medium text-gray-700">選擇特殊需求（可複選）</label>
            <div class="flex gap-2 flex-wrap">
              <BaseChip
                v-for="option in specialRequestOptions"
                :key="option.value"
                :label="option.label"
                :selected="selectedSpecialRequests.includes(option.value)"
                @click="toggleSpecialRequest(option.value)"
              />
            </div>
            <p class="text-sm text-gray-600 mt-2">
              已選擇: {{ selectedSpecialRequests.length > 0 ? selectedSpecialRequests.join(', ') : '未選擇' }}
            </p>
          </div>
        </div>

        <!-- Interactive test -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">8. Interactive Test</h2>
          <div class="space-y-4">
            <div>
              <label class="block font-medium text-gray-700 mb-2">性別</label>
              <div class="flex gap-2 flex-wrap">
                <BaseChip
                  v-for="option in genderOptions"
                  :key="option.value"
                  :label="option.label"
                  :selected="selectedChip === option.value"
                  @click="selectedChip = option.value"
                />
              </div>
            </div>
            <div>
              <label class="block font-medium text-gray-700 mb-2">特殊需求</label>
              <div class="flex gap-2 flex-wrap">
                <BaseChip
                  v-for="option in specialRequestOptions"
                  :key="option.value"
                  :label="option.label"
                  :selected="selectedSpecialRequests.includes(option.value)"
                  @click="toggleSpecialRequest(option.value)"
                />
              </div>
            </div>
            <div class="p-4 bg-gray-50 rounded">
              <p class="font-medium">已選擇:</p>
              <p class="text-sm">性別: {{ selectedChip || '未選擇' }}</p>
              <p class="text-sm">特殊需求: {{ selectedSpecialRequests.length > 0 ? selectedSpecialRequests.join(', ') : '未選擇' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
