<template>
  <div class="inquiry-order-form-page p-4">
    <!-- Toast 通知 -->
    <ejs-toast ref="toastRef" :position="{ X: 'Right', Y: 'Top' }" />

    <!-- Header: 標題 + 操作按鈕 -->
    <header class="mb-6 flex items-center justify-between">
      <h1 class="text-2xl font-bold">
        {{ mode === 'create' ? '新增初洽單' : '編輯初洽單' }}
      </h1>
      <div class="flex gap-2">
        <ejs-button :content="'儲存'" :isPrimary="true" @click="handleSave" />
        <ejs-button v-if="mode === 'edit'" :content="'複製'" @click="handleCopy" />
        <ejs-button v-if="mode === 'edit'" :content="'轉訂席單'" @click="handleConvert" />
      </div>
    </header>

    <!-- Simple Tab Navigation -->
    <div class="tabs-container">
      <div class="tab-buttons mb-4 border-b">
        <button
          :class="['tab-button', { active: activeTab === 'master' }]"
          @click="activeTab = 'master'"
        >
          主檔
        </button>
        <button
          :class="['tab-button', { active: activeTab === 'details' }]"
          @click="activeTab = 'details'"
        >
          預計活動明細
        </button>
      </div>

      <div v-show="activeTab === 'master'" class="tab-panel p-4">
        <InquiryBasicInfo />
        <InquiryCustomerInfo />
        <InquiryBanquetInfo />
        <InquirySupplementInfo />
      </div>

      <div v-show="activeTab === 'details'" class="tab-panel p-4">
        <InquiryOrderDetailsGrid />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { ToastComponent as EjsToast } from '@syncfusion/ej2-vue-notifications'
import { useInquiryOrderStore } from '../store/inquiry-order.store'
import { useInquiryOrder } from '../composables/useInquiryOrder'
import InquiryBasicInfo from '../components/InquiryBasicInfo.vue'
import InquiryCustomerInfo from '../components/InquiryCustomerInfo.vue'
import InquiryBanquetInfo from '../components/InquiryBanquetInfo.vue'
import InquirySupplementInfo from '../components/InquirySupplementInfo.vue'
import InquiryOrderDetailsGrid from '../components/InquiryOrderDetailsGrid.vue'

const route = useRoute()
const router = useRouter()
const store = useInquiryOrderStore()
const {
  inquiryOrder,
  isEditMode,
  canConvert,
  loadInquiryOrder,
  saveInquiryOrder,
  copyInquiryOrder,
  autoSaveDraft,
  loadDraft,
  clearDraft
} = useInquiryOrder()

// Tab 狀態
const activeTab = ref<'master' | 'details'>('master')

// 判斷模式：create 或 edit
const mode = computed(() => isEditMode.value ? 'edit' : 'create')

// 是否有未儲存的變更
const hasUnsavedChanges = ref(false)

// Toast 元件 ref
const toastRef = ref<InstanceType<typeof EjsToast>>()

// 自動儲存 interval ID
let autoSaveInterval: ReturnType<typeof setInterval> | null = null

// Toast 輔助函數
function showToast(title: string, content: string, cssClass: string = 'e-toast-success') {
  if (toastRef.value) {
    toastRef.value.show({
      title,
      content,
      cssClass,
      timeOut: 3000,
      showCloseButton: true
    })
  }
}

// 頁面載入時
onMounted(async () => {
  const params = route.params as Record<string, string>
  const id = params?.id
  if (id) {
    // 編輯模式：載入既有初洽單
    await loadInquiryOrder(id)
  } else {
    // 新增模式：載入草稿或初始化
    store.resetStore()
    loadDraft()
  }

  // 啟動自動儲存草稿（每 30 秒）
  autoSaveInterval = setInterval(() => {
    if (!isEditMode.value && hasUnsavedChanges.value) {
      autoSaveDraft()
      console.log('Auto-saved draft at', new Date().toLocaleTimeString())
    }
  }, 30000) // 30 秒
})

// 清理 interval
onUnmounted(() => {
  if (autoSaveInterval) {
    clearInterval(autoSaveInterval)
  }
})

// 監聽資料變化，標記為有未儲存的變更
watch(
  () => store.inquiryOrder,
  () => {
    hasUnsavedChanges.value = true
  },
  { deep: true }
)

// 離開頁面前提示
onBeforeRouteLeave((to, from, next) => {
  if (hasUnsavedChanges.value && !isEditMode.value) {
    const answer = window.confirm(
      '您有未儲存的變更，確定要離開嗎？'
    )
    if (answer) {
      next()
    } else {
      next(false)
    }
  } else {
    next()
  }
})

const handleSave = async () => {
  const success = await saveInquiryOrder()
  if (success) {
    hasUnsavedChanges.value = false
    showToast('儲存成功', '初洽單已成功儲存', 'e-toast-success')
  } else {
    const errors = store.errors.join('、')
    showToast('儲存失敗', errors, 'e-toast-danger')
  }
}

const handleCopy = async () => {
  await copyInquiryOrder()
  showToast('複製成功', '已複製為新的初洽單，請修改後儲存', 'e-toast-info')
}

const handleConvert = () => {
  // UI only - 跳轉至訂席單頁面
  showToast('功能開發中', '轉訂席單功能即將推出', 'e-toast-warning')
  // router.push('/reservation-order/new')
}
</script>

<style scoped>
.inquiry-order-form-page {
  max-width: 1200px;
  margin: 0 auto;
}

.tab-buttons {
  display: flex;
  gap: 0;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.tab-button:hover {
  background-color: #f3f4f6;
}

.tab-button.active {
  border-bottom-color: #3b82f6;
  color: #3b82f6;
  font-weight: 600;
}

.tab-panel {
  background-color: white;
}
</style>
