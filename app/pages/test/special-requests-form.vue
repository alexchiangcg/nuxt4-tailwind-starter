<script setup lang="ts">
import { ref } from 'vue'
import SpecialRequestsForm from '~/features/reservation/components/SpecialRequestsForm.vue'

const formRef = ref()

definePageMeta({
  title: 'SpecialRequestsForm Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        SpecialRequestsForm Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: Empty Form (Default State) -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">1. Empty Form (Default State)</h2>
          <SpecialRequestsForm ref="formRef" />
          <div class="p-4 bg-gray-50 rounded">
            <p class="font-medium">Form Data:</p>
            <pre class="text-sm">{{ formRef?.formData || '{}' }}</pre>
          </div>
        </div>

        <!-- State 2: Filled Form Example -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">2. Filled Form Example</h2>
          <div class="bg-white p-6 rounded-lg">
            <p class="text-sm text-gray-600 mb-4">這個範例展示表單填寫完成的狀態</p>
            <div class="bg-[var(--surface,#ffffff)] box-border content-stretch flex flex-col gap-4 items-start p-6 relative rounded-[10px] border border-gray-200">
              <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-[1.5] text-2xl text-[color:var(--on-surface,#0f172a)]">
                特殊需求
              </p>
              <div class="text-sm text-gray-700 space-y-2 w-full">
                <div><strong>預訂目的：</strong>生日、家庭聚餐</div>
                <div><strong>其他備註：</strong>需要兒童椅、壽星姓名：王小明、對花生過敏</div>
              </div>
            </div>
          </div>
        </div>

        <!-- State 3: Interactive Form -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">3. Interactive Form Test</h2>
          <p class="text-sm text-gray-600">選擇預訂目的並填寫備註以測試所有欄位的互動功能</p>
          <SpecialRequestsForm />
        </div>
      </div>
    </div>
  </div>
</template>
