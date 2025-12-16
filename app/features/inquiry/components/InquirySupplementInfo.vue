<template>
  <div class="inquiry-supplement-info">
    <h2 class="section-title">輔助資訊</h2>
    <div class="form-grid">
      <!-- 已看同業場館 -->
      <div class="form-field">
        <label>已看同業場館</label>
        <ejs-multiselect
          :value="modelValue.visitedCompetitorVenues"
          :dataSource="mockCompetitorVenues"
          :fields="{ text: 'name', value: 'name' }"
          mode="CheckBox"
          placeholder="請選擇"
          @change="updateField('visitedCompetitorVenues', $event.value)"
        />
      </div>

      <!-- 決定宴客場地主因 -->
      <div class="form-field">
        <label>決定宴客場地主因</label>
        <ejs-multiselect
          :value="modelValue.venueDecisionFactors"
          :dataSource="mockDecisionFactors"
          :fields="{ text: 'name', value: 'name' }"
          mode="CheckBox"
          placeholder="請選擇"
          @change="updateField('venueDecisionFactors', $event.value)"
        />
      </div>

      <!-- 下訂同業場館 -->
      <div class="form-field">
        <label>下訂同業場館</label>
        <ejs-dropdownlist
          :value="modelValue.bookedCompetitorVenue"
          :dataSource="mockCompetitorVenues"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇"
          @change="updateField('bookedCompetitorVenue', $event.value)"
        />
      </div>

      <!-- 未下定原因 -->
      <div class="form-field">
        <label>未下定原因</label>
        <ejs-multiselect
          :value="modelValue.notBookingReasons"
          :dataSource="mockNotBookingReasons"
          :fields="{ text: 'name', value: 'name' }"
          mode="CheckBox"
          placeholder="請選擇"
          @change="updateField('notBookingReasons', $event.value)"
        />
      </div>

      <!-- 接洽紀錄 -->
      <div class="form-field form-field-wide">
        <label>接洽紀錄</label>
        <ejs-textbox
          :value="modelValue.contactNotes"
          :multiline="true"
          :rows="4"
          placeholder="請輸入"
          @input="updateField('contactNotes', $event.value)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { DropDownListComponent as EjsDropdownlist, MultiSelectComponent as EjsMultiselect } from '@syncfusion/ej2-vue-dropdowns'
import type { InquirySupplementInfo } from '../types/inquiry.types'
import {
  mockCompetitorVenues,
  mockDecisionFactors,
  mockNotBookingReasons
} from '../mock/inquiry.mock'

interface InquirySupplementInfoProps {
  modelValue: InquirySupplementInfo
}

interface InquirySupplementInfoEmits {
  (e: 'update:modelValue', value: InquirySupplementInfo): void
}

const props = defineProps<InquirySupplementInfoProps>()
const emit = defineEmits<InquirySupplementInfoEmits>()

const updateField = (field: keyof InquirySupplementInfo, value: any) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value
  })
}
</script>

<style scoped>
.inquiry-supplement-info {
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

.form-field-wide {
  width: 100%;
  min-height: 120px;
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
:deep(.e-multiselect) {
  height: 40px;
}

:deep(.e-input-group input),
:deep(.e-ddl input),
:deep(.e-multiselect input) {
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
:deep(.e-multiselect .e-input-group) {
  border-radius: 4px 4px 0 0;
  border: none;
  border-bottom: 1px solid rgb(var(--color-sf-outline));
  background: transparent;
}

/* Multiline TextBox 的特別樣式 */
:deep(.form-field-wide .e-input-group) {
  height: auto;
  min-height: 120px;
  align-items: flex-start;
}

:deep(.form-field-wide .e-input-group textarea) {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: rgb(var(--color-sf-on-surface));
  opacity: 0.7;
  padding: 10px 8px;
}
</style>
