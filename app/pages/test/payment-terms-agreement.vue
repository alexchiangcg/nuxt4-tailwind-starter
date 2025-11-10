<script setup lang="ts">
import { ref } from 'vue'
import PaymentTermsAgreement from '~/features/reservation/components/PaymentTermsAgreement.vue'

const agreed1 = ref(false)
const agreed2 = ref(true)

const handleLinkClick = () => {
  console.log('Privacy policy link clicked')
  alert('個人資料蒐集政策連結被點擊')
}

definePageMeta({
  title: 'PaymentTermsAgreement Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        PaymentTermsAgreement Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: Unchecked (Default State) -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">1. Unchecked (Default State)</h2>
          <PaymentTermsAgreement v-model="agreed1" @link-click="handleLinkClick" />
          <div class="p-4 bg-gray-50 rounded">
            <p class="font-medium">Agreed:</p>
            <pre class="text-sm">{{ agreed1 }}</pre>
          </div>
        </div>

        <!-- State 2: Checked -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">2. Checked State</h2>
          <PaymentTermsAgreement v-model="agreed2" @link-click="handleLinkClick" />
          <div class="p-4 bg-gray-50 rounded">
            <p class="font-medium">Agreed:</p>
            <pre class="text-sm">{{ agreed2 }}</pre>
          </div>
        </div>

        <!-- State 3: Scrolled to Top -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">3. Scrolled to Top (Default Scroll Position)</h2>
          <p class="text-sm text-gray-600">文本框捲動位置在頂部</p>
          <PaymentTermsAgreement v-model="agreed1" @link-click="handleLinkClick" />
        </div>

        <!-- State 4: Interactive Test -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">4. Interactive Test</h2>
          <p class="text-sm text-gray-600">測試捲動、checkbox 和連結點擊功能</p>
          <PaymentTermsAgreement v-model="agreed1" @link-click="handleLinkClick" />
          <div class="p-4 bg-gray-50 rounded">
            <p class="font-medium">Instructions:</p>
            <ul class="text-sm list-disc list-inside space-y-1">
              <li>捲動文本框查看所有內容</li>
              <li>點擊 checkbox 切換同意狀態</li>
              <li>點擊「個人資料蒐集政策」連結</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
