<template>
  <div class="inquiry-basic-info">
    <h2 class="section-title">基本資料</h2>
    <div class="form-grid">
      <!-- Row 1 -->
      <div class="form-field">
        <label>初洽單號</label>
        <ejs-textbox
          :value="modelValue.inquiryOrderNo"
          :readonly="true"
          placeholder="系統自動產生"
          @input="updateField('inquiryOrderNo', $event.value)"
        />
      </div>

      <div class="form-field">
        <label>初洽狀態 <span class="required">*</span></label>
        <ejs-dropdownlist
          :value="modelValue.status"
          :dataSource="mockInquiryStatus"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇"
          @change="updateField('status', $event.value)"
        />
      </div>

      <div class="form-field">
        <label>初洽日</label>
        <ejs-datepicker
          :value="modelValue.inquireDate"
          :format="'yyyy/MM/dd'"
          @change="updateField('inquireDate', $event.value)"
        />
      </div>

      <div class="form-field">
        <label>初洽業務</label>
        <ejs-dropdownlist
          :value="modelValue.inquireContactPerson"
          :dataSource="mockSalesPersons"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇"
          @change="updateField('inquireContactPerson', $event.value)"
        />
      </div>

      <!-- Row 2 -->
      <div class="form-field">
        <label>初洽配合專案</label>
        <ejs-dropdownlist
          :value="modelValue.relatedProject"
          :dataSource="mockProjects"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇"
          @change="updateField('relatedProject', $event.value)"
        />
      </div>

      <div class="form-field">
        <label>訂席單號</label>
        <div class="field-with-button">
          <ejs-textbox
            :value="modelValue.reservationNumber"
            :readonly="true"
            @input="updateField('reservationNumber', $event.value)"
          />
          <button
            type="button"
            class="flex items-center justify-center w-10 h-10 p-2.5 border-0 bg-transparent cursor-pointer hover:bg-gray-100"
            @click="$emit('navigate-to-reservation', modelValue.reservationNumber)"
          >
            <IconArrowForward class="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>

      <div class="form-field">
        <label>人工單號</label>
        <ejs-textbox
          :value="modelValue.manualNumber"
          @input="updateField('manualNumber', $event.value)"
        />
      </div>

      <div class="form-field">
        <label>初洽訂席來源</label>
        <ejs-dropdownlist
          :value="modelValue.leadSource"
          :dataSource="mockLeadSources"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇"
          @change="updateField('leadSource', $event.value)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconArrowForward from '~icons/material-symbols/arrow-forward'
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns'
import { DatePickerComponent as EjsDatepicker } from '@syncfusion/ej2-vue-calendars'
import type { InquiryBasicInfo } from '../types/inquiry.types'
import {
  mockInquiryStatus,
  mockSalesPersons,
  mockProjects,
  mockLeadSources
} from '../mock/inquiry.mock'

interface InquiryBasicInfoProps {
  modelValue: InquiryBasicInfo
}

interface InquiryBasicInfoEmits {
  (e: 'update:modelValue', value: InquiryBasicInfo): void
  (e: 'navigate-to-reservation', reservationNo: string): void
}

const props = defineProps<InquiryBasicInfoProps>()
const emit = defineEmits<InquiryBasicInfoEmits>()

const updateField = (field: keyof InquiryBasicInfo, value: any) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value
  })
}
</script>

<style scoped>
.inquiry-basic-info {
  background: rgb(var(--color-sf-surface));
  border: 1px solid rgb(var(--color-sf-outline-variant));
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
.form-field:nth-child(6),
.form-field:nth-child(8) {
  width: 250px;
}

.form-field label {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: rgb(var(--color-sf-on-surface-variant));
  margin-bottom: 2px;
}

.field-with-button {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.field-with-button :deep(.e-input-group) {
  flex: 1;
}

.required {
  color: rgb(var(--color-sf-danger));
}

/* Syncfusion 組件樣式覆寫 - 精確匹配 Figma */
:deep(.e-input-group),
:deep(.e-ddl),
:deep(.e-datepicker) {
  height: 40px;
}

:deep(.e-input-group input),
:deep(.e-ddl input),
:deep(.e-datepicker input) {
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
:deep(.e-datepicker .e-input-group) {
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid rgb(var(--color-sf-outline));
  background: transparent;
}

/* Icon 按鈕樣式 */
:deep(.e-icon-btn) {
  width: 40px;
  height: 40px;
  padding: 10px;
  border: none;
  background: transparent;
}

:deep(.e-icon-btn .e-btn-icon) {
  font-size: 20px;
  color: rgb(var(--color-sf-primary));
}
</style>
