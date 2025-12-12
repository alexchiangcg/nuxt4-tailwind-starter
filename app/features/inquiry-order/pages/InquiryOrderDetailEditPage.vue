<template>
  <div class="inquiry-order-detail-edit-page p-4">
    <!-- Header -->
    <header class="mb-6 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <ejs-button
          :content="'← 返回'"
          @click="handleBack"
        />
        <h1 class="text-2xl font-bold">
          {{ mode === 'create' ? '新增活動明細' : '編輯活動明細' }}
        </h1>
      </div>
      <div class="flex gap-2">
        <ejs-button :content="'儲存'" :isPrimary="true" @click="handleSave" />
        <ejs-button v-if="mode === 'edit'" :content="'刪除'" :cssClass="'e-danger'" @click="handleDelete" />
      </div>
    </header>

    <!-- Error Messages -->
    <div v-if="errors.length > 0" class="error-messages mb-4 p-4 bg-red-50 border border-red-200 rounded">
      <ul class="list-disc list-inside text-red-700">
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <!-- Form -->
    <div class="form-container bg-white p-6 rounded-lg shadow">
      <div class="form-grid">
        <!-- Row 1 -->
        <div class="form-field">
          <label>預計主場地 <span class="required">*</span></label>
          <ejs-dropdownlist
            v-model="detail.mainVenue"
            :dataSource="MOCK_MAIN_VENUES"
            :fields="{ text: 'name', value: 'name' }"
            placeholder="請選擇"
          />
        </div>
        <div class="form-field">
          <label>預計子場地</label>
          <ejs-dropdownlist
            v-model="detail.subVenue"
            :dataSource="MOCK_SUB_VENUES"
            :fields="{ text: 'name', value: 'name' }"
            placeholder="請選擇"
          />
        </div>
        <div class="form-field">
          <label>使用日期 <span class="required">*</span></label>
          <ejs-datepicker
            v-model="detail.usageDate"
            :format="'yyyy/MM/dd'"
            placeholder="請選擇"
          />
        </div>
        <div class="form-field">
          <label>活動類別</label>
          <ejs-dropdownlist
            v-model="detail.activityCategory"
            :dataSource="MOCK_ACTIVITY_CATEGORIES"
            :fields="{ text: 'name', value: 'name' }"
            placeholder="請選擇"
          />
        </div>

        <!-- Row 2 -->
        <div class="form-field">
          <label>開始時間 <span class="required">*</span></label>
          <ejs-timepicker
            v-model="detail.startTime"
            :format="'HH:mm'"
            placeholder="請選擇"
          />
        </div>
        <div class="form-field">
          <label>結束時間 <span class="required">*</span></label>
          <ejs-timepicker
            v-model="detail.endTime"
            :format="'HH:mm'"
            placeholder="請選擇"
          />
        </div>
        <div class="form-field">
          <label>桌圖</label>
          <ejs-dropdownlist
            v-model="detail.tableLayout"
            :dataSource="MOCK_TABLE_LAYOUTS"
            :fields="{ text: 'name', value: 'name' }"
            placeholder="請選擇"
          />
        </div>
        <div class="form-field">
          <label>預訂桌數</label>
          <ejs-numerictextbox
            v-model="detail.reservedTables"
            :min="0"
            :format="'n0'"
            placeholder="請輸入"
          />
        </div>

        <!-- Row 3 -->
        <div class="form-field col-span-2">
          <label>活動主旨</label>
          <ejs-textbox
            v-model="detail.activitySubject"
            placeholder="請輸入"
          />
        </div>
        <div class="form-field">
          <label>預訂人數</label>
          <ejs-numerictextbox
            v-model="detail.reservedPeople"
            :min="0"
            :format="'n0'"
            placeholder="請輸入"
          />
        </div>
        <div class="form-field">
          <label>預計設備需求</label>
          <ejs-textbox
            v-model="detail.equipmentNeeds"
            placeholder="請輸入"
          />
        </div>

        <!-- Row 4 - Full width -->
        <div class="form-field col-span-4">
          <label>備註</label>
          <ejs-textbox
            v-model="detail.remarks"
            :multiline="true"
            :rows="4"
            placeholder="請輸入"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { TextBoxComponent as EjsTextbox, NumericTextBoxComponent as EjsNumerictextbox } from '@syncfusion/ej2-vue-inputs'
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns'
import { DatePickerComponent as EjsDatepicker, TimePickerComponent as EjsTimepicker } from '@syncfusion/ej2-vue-calendars'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { useInquiryOrderStore } from '../store/inquiry-order.store'
import type { InquiryOrderDetail } from '../types/inquiry-order.types'
import {
  MOCK_MAIN_VENUES,
  MOCK_SUB_VENUES,
  MOCK_ACTIVITY_CATEGORIES,
  MOCK_TABLE_LAYOUTS,
  mockSaveInquiryOrderDetail,
  mockDeleteInquiryOrderDetail
} from '../mock/inquiry-order.mock'

const route = useRoute()
const router = useRouter()
const store = useInquiryOrderStore()

const mode = ref<'create' | 'edit'>('create')
const errors = ref<string[]>([])

// 初始化空白明細
const detail = ref<InquiryOrderDetail>({
  id: '',
  mainVenue: '',
  subVenue: '',
  usageDate: null,
  startTime: '',
  endTime: '',
  activityCategory: '',
  activitySubject: '',
  tableLayout: '',
  equipmentNeeds: '',
  reservedTables: 0,
  reservedPeople: 0,
  remarks: '',
  createdBy: '',
  createdDate: new Date(),
  modifiedBy: '',
  modifiedDate: null
})

onMounted(() => {
  const params = route.params as Record<string, string>
  const id = params?.id

  if (id && id !== 'new') {
    mode.value = 'edit'
    // 從 store 載入現有明細
    const existing = store.inquiryOrderDetails.find(d => d.id === id)
    if (existing) {
      detail.value = { ...existing }
    }
  } else {
    mode.value = 'create'
    // 設定前端產生欄位
    detail.value.createdBy = getCurrentUser()
    detail.value.createdDate = new Date()
    detail.value.id = `temp-${Date.now()}`
  }
})

const handleSave = async () => {
  errors.value = []

  // 驗證
  if (!validate()) {
    return
  }

  try {
    // 模擬儲存
    const saved = await mockSaveInquiryOrderDetail(detail.value)

    // 更新 store
    if (mode.value === 'create') {
      store.addDetail(saved)
    } else {
      store.updateDetail(saved)
    }

    // 返回列表
    navigateTo('/inquiry-order')
  } catch (error) {
    errors.value = ['儲存失敗']
  }
}

const handleDelete = async () => {
  if (!confirm('確定要刪除此活動明細嗎？')) {
    return
  }

  try {
    await mockDeleteInquiryOrderDetail(detail.value.id)
    store.deleteDetail(detail.value.id)
    navigateTo('/inquiry-order')
  } catch (error) {
    errors.value = ['刪除失敗']
  }
}

const handleBack = () => {
  router.back()
}

function validate(): boolean {
  const validationErrors: string[] = []

  // 必填欄位
  if (!detail.value.mainVenue) validationErrors.push('請選擇預計主場地')
  if (!detail.value.usageDate) validationErrors.push('請選擇使用日期')
  if (!detail.value.startTime) validationErrors.push('請選擇開始時間')
  if (!detail.value.endTime) validationErrors.push('請選擇結束時間')

  // 時間驗證
  if (detail.value.startTime && detail.value.endTime) {
    if (detail.value.endTime <= detail.value.startTime) {
      validationErrors.push('結束時間必須晚於開始時間')
    }
  }

  // 日期範圍驗證（檢查是否在預計宴客日期區間內）
  if (detail.value.usageDate && store.inquiryOrder.expectedBanquetDateStart && store.inquiryOrder.expectedBanquetDateEnd) {
    const usageDate = new Date(detail.value.usageDate)
    const startDate = new Date(store.inquiryOrder.expectedBanquetDateStart)
    const endDate = new Date(store.inquiryOrder.expectedBanquetDateEnd)

    if (usageDate < startDate || usageDate > endDate) {
      validationErrors.push('使用日期必須在預計宴客日期區間內')
    }
  }

  errors.value = validationErrors
  return validationErrors.length === 0
}

function getCurrentUser(): string {
  // TODO: 從認證系統取得當前使用者
  return 'Demo User'
}
</script>

<style scoped>
.inquiry-order-detail-edit-page {
  max-width: 1200px;
  margin: 0 auto;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field.col-span-2 {
  grid-column: span 2;
}

.form-field.col-span-4 {
  grid-column: span 4;
}

.form-field label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.required {
  color: #ef4444;
}

.error-messages ul {
  margin: 0;
}
</style>
