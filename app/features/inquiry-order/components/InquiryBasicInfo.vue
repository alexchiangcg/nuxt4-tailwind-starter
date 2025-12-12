<template>
  <div class="inquiry-basic-info mb-6">
    <h2 class="section-title">基本資料</h2>
    <div class="form-grid">
      <!-- Row 1 -->
      <div class="form-field">
        <label>初洽單號</label>
        <ejs-textbox
          v-model="store.inquiryOrder.inquiryOrderNo"
          :readonly="true"
          placeholder="系統自動產生"
        />
      </div>
      <div class="form-field">
        <label>初洽狀態 <span class="required">*</span></label>
        <ejs-dropdownlist
          v-model="store.inquiryOrder.status"
          :dataSource="MOCK_INQUIRY_STATUS"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇"
        />
      </div>
      <div class="form-field">
        <label>初洽日 <span class="required">*</span></label>
        <ejs-datepicker
          v-model="store.inquiryOrder.inquireDate"
          :format="'yyyy/MM/dd'"
        />
      </div>
      <div class="form-field">
        <label>初洽業務 <span class="required">*</span></label>
        <ejs-textbox
          v-model="store.inquiryOrder.inquireContactPerson"
          placeholder="請輸入"
        />
      </div>

      <!-- Row 2 -->
      <div class="form-field">
        <label>相關專案</label>
        <ejs-textbox
          v-model="store.inquiryOrder.relatedProject"
          :readonly="true"
          placeholder="唯讀"
        />
      </div>
      <div class="form-field">
        <label>訂席單號</label>
        <div class="flex gap-2">
          <ejs-textbox
            v-model="store.inquiryOrder.reservationNumber"
            :readonly="true"
            placeholder="唯讀"
            class="flex-1"
          />
          <ejs-button
            :content="'跳轉'"
            :iconCss="'e-icons e-arrow-right'"
            @click="navigateToReservation"
          />
        </div>
      </div>
      <div class="form-field">
        <label>手動單號</label>
        <ejs-textbox
          v-model="store.inquiryOrder.manualNumber"
          placeholder="請輸入"
        />
      </div>
      <div class="form-field">
        <label>初洽訂席來源</label>
        <ejs-multiselect
          v-model="store.inquiryOrder.leadSource"
          :dataSource="MOCK_LEAD_SOURCE"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇（可多選）"
          mode="CheckBox"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { DropDownListComponent as EjsDropdownlist, MultiSelectComponent as EjsMultiselect } from '@syncfusion/ej2-vue-dropdowns'
import { DatePickerComponent as EjsDatepicker } from '@syncfusion/ej2-vue-calendars'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { useInquiryOrderStore } from '../store/inquiry-order.store'
import { MOCK_INQUIRY_STATUS, MOCK_LEAD_SOURCE } from '../mock/inquiry-order.mock'

const store = useInquiryOrderStore()

const navigateToReservation = () => {
  // TODO: 跳轉至訂席單頁面
  console.log('跳轉至訂席單:', store.inquiryOrder.reservationNumber)
}
</script>

<style scoped>
.inquiry-basic-info {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-left: 0.75rem;
  border-left: 4px solid #3b82f6;
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

.form-field label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.required {
  color: #ef4444;
}
</style>
