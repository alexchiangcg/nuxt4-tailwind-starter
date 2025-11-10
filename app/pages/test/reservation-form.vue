<script setup lang="ts">
import { ref } from 'vue'
import ReservationForm from '~/features/reservation/components/ReservationForm.vue'

const formRef = ref()

definePageMeta({
  title: 'ReservationForm Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        ReservationForm Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: Empty Form (Default State) -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">1. Empty Form (Default State)</h2>
          <ReservationForm ref="formRef" />
          <div class="p-4 bg-gray-50 rounded">
            <p class="font-medium">Form Data:</p>
            <pre class="text-sm">{{ formRef?.formData || '{}' }}</pre>
          </div>
        </div>

        <!-- State 2: Filled Form -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">2. Filled Form Example</h2>
          <div class="bg-white p-6 rounded-lg">
            <p class="text-sm text-gray-600 mb-4">這個範例展示表單填寫完成的狀態</p>
            <div class="bg-[var(--surface,#ffffff)] box-border content-stretch flex flex-col gap-4 items-start overflow-clip p-6 relative rounded-[10px] border border-gray-200">
              <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-[1.5] text-2xl text-[color:var(--on-surface,#0f172a)]">
                預訂人資料
              </p>
              <div class="text-sm text-gray-700 space-y-2 w-full">
                <div class="flex gap-4">
                  <div><strong>姓名：</strong>陳 小明</div>
                </div>
                <div><strong>稱謂：</strong>先生</div>
                <div><strong>性別：</strong>男生</div>
                <div><strong>生日：</strong>1990-05-15</div>
                <div><strong>手機號碼：</strong>+886 912345678</div>
                <div><strong>信箱：</strong>example@email.com</div>
                <div><strong>儲存資訊：</strong>✓ 已勾選</div>
              </div>
            </div>
          </div>
        </div>

        <!-- State 3: Interactive Form -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">3. Interactive Form Test</h2>
          <p class="text-sm text-gray-600">填寫此表單以測試所有欄位的互動功能</p>
          <ReservationForm />
        </div>
      </div>
    </div>
  </div>
</template>
