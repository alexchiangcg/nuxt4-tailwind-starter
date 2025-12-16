<template>
  <div class="inquiry-customer-info">
    <h2 class="section-title">客戶資料</h2>
    <div class="form-grid">
      <!-- 客戶姓名 + Icon Button -->
      <div class="form-field">
        <label>客戶姓名</label>
        <div class="field-with-button">
          <ejs-textbox
            :value="modelValue.customerName"
            @input="updateField('customerName', $event.value)"
          />
          <button
            type="button"
            class="flex items-center justify-center w-10 h-10 p-2.5 border-0 bg-transparent cursor-pointer hover:bg-gray-100"
            @click="$emit('open-customer-detail')"
          >
            <IconMoreHoriz class="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>

      <!-- 聯絡人 -->
      <div class="form-field">
        <label>聯絡人</label>
        <ejs-textbox
          :value="modelValue.contactPerson"
          @input="updateField('contactPerson', $event.value)"
        />
      </div>

      <!-- 聯絡手機：國碼 + 號碼 -->
      <div class="form-field">
        <label>聯絡手機</label>
        <div class="phone-field">
          <ejs-dropdownlist
            :value="modelValue.phoneCountryCode"
            :dataSource="mockCountryCodes"
            :fields="{ text: 'label', value: 'code' }"
            cssClass="country-code-dropdown"
            @change="updateField('phoneCountryCode', $event.value)"
          />
          <ejs-textbox
            :value="modelValue.phoneNumber"
            placeholder="手機號碼"
            @input="updateField('phoneNumber', $event.value)"
          />
        </div>
      </div>

      <!-- 聯絡信箱 -->
      <div class="form-field">
        <label>聯絡信箱</label>
        <ejs-textbox
          :value="modelValue.email"
          type="email"
          @input="updateField('email', $event.value)"
        />
      </div>

      <!-- 居住地：城市 + 區域 -->
      <div class="form-field">
        <label>居住地</label>
        <div class="location-field">
          <ejs-dropdownlist
            :value="modelValue.city"
            :dataSource="mockCities"
            :fields="{ text: 'name', value: 'name' }"
            placeholder="城市"
            @change="updateField('city', $event.value)"
          />
          <ejs-dropdownlist
            :value="modelValue.district"
            :dataSource="mockDistricts"
            :fields="{ text: 'name', value: 'name' }"
            placeholder="區域"
            @change="updateField('district', $event.value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconMoreHoriz from '~icons/material-symbols/more-horiz'
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns'
import type { InquiryCustomerInfo } from '../types/inquiry.types'
import {
  mockCountryCodes,
  mockCities,
  mockDistricts
} from '../mock/inquiry.mock'

interface InquiryCustomerInfoProps {
  modelValue: InquiryCustomerInfo
}

interface InquiryCustomerInfoEmits {
  (e: 'update:modelValue', value: InquiryCustomerInfo): void
  (e: 'open-customer-detail'): void
}

const props = defineProps<InquiryCustomerInfoProps>()
const emit = defineEmits<InquiryCustomerInfoEmits>()

const updateField = (field: keyof InquiryCustomerInfo, value: any) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value
  })
}
</script>

<style scoped>
.inquiry-customer-info {
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
.form-field:nth-child(4) {
  width: 251px;
}

.form-field:nth-child(3) {
  width: 251px;
}

.form-field:nth-child(5) {
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

.field-with-button {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.field-with-button :deep(.e-input-group) {
  flex: 1;
}

.phone-field {
  display: flex;
  gap: 8px;
  align-items: flex-end;
}

.phone-field :deep(.e-ddl) {
  width: 80px;
}

.phone-field :deep(.e-input-group) {
  flex: 1;
}

.location-field {
  display: flex;
  gap: 10px;
  align-items: flex-end;
}

.location-field :deep(.e-ddl) {
  flex: 1;
}

/* Syncfusion 組件樣式覆寫 - 精確匹配 Figma */
:deep(.e-input-group),
:deep(.e-ddl) {
  height: 40px;
}

:deep(.e-input-group input),
:deep(.e-ddl input) {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.24px;
  color: rgb(var(--color-sf-on-surface));
  opacity: 0.7;
  padding-left: 10px;
}

:deep(.e-input-group),
:deep(.e-ddl .e-input-group) {
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
