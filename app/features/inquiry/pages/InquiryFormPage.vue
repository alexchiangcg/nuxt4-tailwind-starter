<template>
  <div class="inquiry-form-page">
    <!-- Toolbar -->
    <InquiryToolbar
      :mode="viewMode"
      @mode-change="handleModeChange"
      @delete="handleDelete"
      @copy="handleCopy"
      @add="handleAdd"
      @convert="handleConvert"
    />

    <!-- Syncfusion Tab -->
    <TabComponent ref="tabInstance" :selectedItem="0">
      <TabItemsDirective>
        <!-- Tab 1: 主檔 -->
        <TabItemDirective :header="{ text: '主檔' }" :content="'content1'">
          <template v-slot:content1>
            <div class="tab-content">
              <InquiryBasicInfo
                v-model="formData.basic"
                @navigate-to-reservation="handleNavigateToReservation"
              />
              <InquiryCustomerInfo
                v-model="formData.customer"
                @open-customer-detail="handleOpenCustomerDetail"
              />
              <InquiryBanquetInfo v-model="formData.banquet" />
              <InquirySupplementInfo v-model="formData.supplement" />
            </div>
          </template>
        </TabItemDirective>

        <!-- Tab 2: 預計活動明細 -->
        <TabItemDirective :header="{ text: '預計活動明細' }" :content="'content2'">
          <template v-slot:content2>
            <div class="tab-content">
              <InquiryActivityDetailsGrid :dataSource="mockActivityDetails" />
            </div>
          </template>
        </TabItemDirective>
      </TabItemsDirective>
    </TabComponent>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-vue-navigations'
import InquiryToolbar from '../components/InquiryToolbar.vue'
import InquiryBasicInfo from '../components/InquiryBasicInfo.vue'
import InquiryCustomerInfo from '../components/InquiryCustomerInfo.vue'
import InquiryBanquetInfo from '../components/InquiryBanquetInfo.vue'
import InquirySupplementInfo from '../components/InquirySupplementInfo.vue'
import InquiryActivityDetailsGrid from '../components/InquiryActivityDetailsGrid.vue'
import { mockFormData, mockActivityDetails } from '../mock/inquiry.mock'

// Provide services for Syncfusion Tab component
provide('tab', [])

// 表單資料（使用 mock data）
const formData = ref(mockFormData)

// 檢視模式
const viewMode = ref<'view' | 'edit'>('view')

// 事件處理（本階段僅 console.log）
const handleModeChange = (mode: 'view' | 'edit') => {
  viewMode.value = mode
  console.log('Mode changed:', mode)
}

const handleDelete = () => {
  console.log('Delete')
}

const handleCopy = () => {
  console.log('Copy')
}

const handleAdd = () => {
  console.log('Add')
}

const handleConvert = () => {
  console.log('Convert to Reservation')
}

const handleNavigateToReservation = (reservationNo: string) => {
  console.log('Navigate to reservation:', reservationNo)
}

const handleOpenCustomerDetail = () => {
  console.log('Open customer detail')
}
</script>

<style scoped>
.inquiry-form-page {
  min-height: 100vh;
  background: rgb(var(--color-sf-surface));
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tab-content {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Tab 樣式 - 精確匹配 Figma */
:deep(.e-tab) {
  border: none;
}

:deep(.e-tab .e-tab-header) {
  border-bottom: 1px solid rgb(var(--color-sf-outline));
  background: transparent;
  height: 38px;
  padding: 0;
  margin: 0;
}

:deep(.e-tab .e-tab-header .e-toolbar-items) {
  height: 38px;
}

:deep(.e-tab .e-tab-header .e-toolbar-item) {
  padding: 10px 12px 0 12px;
  height: 38px;
}

:deep(.e-tab .e-tab-header .e-toolbar-item .e-tab-wrap) {
  padding: 0;
  border: none;
  background: transparent;
  height: 28px;
}

:deep(.e-tab .e-tab-header .e-toolbar-item .e-tab-text) {
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: rgb(var(--color-sf-on-surface-variant));
}

:deep(.e-tab .e-tab-header .e-toolbar-item.e-active .e-tab-text) {
  color: rgb(var(--color-sf-primary));
}

:deep(.e-tab .e-tab-header .e-indicator) {
  height: 3px;
  background: rgb(var(--color-sf-primary));
  bottom: 0;
}

:deep(.e-tab .e-content) {
  padding: 16px 0 0 0;
}
</style>
