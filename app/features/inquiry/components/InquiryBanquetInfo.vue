<template>
  <div class="inquiry-banquet-info">
    <h2 class="section-title">宴會資料</h2>
    <div class="form-grid">
      <!-- 類別 -->
      <div class="form-field">
        <label>類別</label>
        <ejs-dropdownlist
          :value="modelValue.category"
          :dataSource="mockBanquetCategories"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇"
          @change="updateField('category', $event.value)"
        />
      </div>

      <!-- 宴會名稱 -->
      <div class="form-field">
        <label>宴會名稱</label>
        <ejs-textbox
          :value="modelValue.banquetName"
          @input="updateField('banquetName', $event.value)"
        />
      </div>

      <!-- 預算範圍 -->
      <div class="form-field">
        <label>預算範圍</label>
        <ejs-textbox
          :value="modelValue.budgetRange"
          placeholder="例如：50,000–100,000"
          @input="updateField('budgetRange', $event.value)"
        />
      </div>

      <!-- 賞廳業務 -->
      <div class="form-field">
        <label>賞廳業務</label>
        <ejs-dropdownlist
          :value="modelValue.tourSalesPerson"
          :dataSource="mockSalesPersons"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇"
          @change="updateField('tourSalesPerson', $event.value)"
        />
      </div>

      <!-- 預計宴客日期區間 -->
      <div class="form-field">
        <label>預計宴客日期區間</label>
        <ejs-daterangepicker
          :value="modelValue.estimatedDateRange"
          :format="'yyyy/MM/dd'"
          placeholder="請選擇"
          @change="updateDateRange($event.value)"
        />
      </div>

      <!-- 預約賞廳時間 -->
      <div class="form-field">
        <label>預約賞廳時間</label>
        <ejs-datetimepicker
          :value="modelValue.tourDateTime"
          :format="'yyyy/MM/dd HH:mm'"
          placeholder="請選擇"
          @change="updateField('tourDateTime', $event.value)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns'
import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars'
import { DateTimePickerComponent as EjsDatetimepicker } from '@syncfusion/ej2-vue-calendars'
import type { InquiryBanquetInfo } from '../types/inquiry.types'
import {
  mockBanquetCategories,
  mockSalesPersons
} from '../mock/inquiry.mock'

interface InquiryBanquetInfoProps {
  modelValue: InquiryBanquetInfo
}

interface InquiryBanquetInfoEmits {
  (e: 'update:modelValue', value: InquiryBanquetInfo): void
}

const props = defineProps<InquiryBanquetInfoProps>()
const emit = defineEmits<InquiryBanquetInfoEmits>()

const updateField = (field: keyof InquiryBanquetInfo, value: any) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value
  })
}

const updateDateRange = (value: Date[] | null) => {
  if (value && value.length === 2) {
    const dateRange: [string, string] = [
      value[0].toISOString().split('T')[0],
      value[1].toISOString().split('T')[0]
    ]
    updateField('estimatedDateRange', dateRange)
  }
}
</script>

<style scoped>
.inquiry-banquet-info {
  background: rgb(var(--color-sf-surface));
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  padding-left: 10px;
  border-left: 5px solid rgb(var(--color-sf-primary));
  color: rgb(var(--color-sf-primary));
  margin: 0;
}

.form-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
}

.form-field {
  display: flex;
  flex-direction: column;
  width: 251px;
}

.form-field:nth-child(2),
.form-field:nth-child(4),
.form-field:nth-child(6) {
  width: 251px;
}

.form-field label {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: rgb(var(--color-sf-on-surface-variant));
  margin-bottom: 2px;
}

/* Syncfusion 組件樣式覆寫 - 精確匹配 Figma */
:deep(.e-input-group),
:deep(.e-ddl),
:deep(.e-daterangepicker),
:deep(.e-datetimepicker) {
  height: 40px;
}

:deep(.e-input-group input),
:deep(.e-ddl input),
:deep(.e-daterangepicker input),
:deep(.e-datetimepicker input) {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.24px;
  color: rgb(var(--color-sf-on-surface));
  opacity: 0.7;
  padding-left: 10px;
}

:deep(.e-input-group),
:deep(.e-ddl .e-input-group),
:deep(.e-daterangepicker .e-input-group),
:deep(.e-datetimepicker .e-input-group) {
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid rgb(var(--color-sf-outline));
  background: transparent;
}
</style>
