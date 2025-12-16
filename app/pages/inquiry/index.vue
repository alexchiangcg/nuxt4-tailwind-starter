<template>
  <div class="inquiry-page">
    <InquiryFormPage />
  </div>
</template>

<script setup lang="ts">
// 當 InquiryFormPage 元件完成後，此頁面會自動載入該元件
import InquiryFormPage from '~/features/inquiry/pages/InquiryFormPage.vue'

definePageMeta({
  title: '初洽單管理',
  ssr: false // Syncfusion 組件需要在客戶端渲染
})
</script>

<style scoped>
.inquiry-page {
  min-height: 100vh;
  background: rgb(var(--color-sf-surface-container-low));
}
</style>
