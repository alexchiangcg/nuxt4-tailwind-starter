<template>
  <div class="inquiry-banquet-info mb-6">
    <h2 class="section-title">宴會資料</h2>
    <div class="form-grid">
      <!-- Row 1 -->
      <div class="form-field">
        <label>類別</label>
        <ejs-dropdownlist
          v-model="store.inquiryOrder.category"
          :dataSource="MOCK_CATEGORY"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇"
        />
      </div>
      <div class="form-field">
        <label>宴名</label>
        <ejs-textbox
          v-model="store.inquiryOrder.banquetName"
          placeholder="請輸入"
        />
      </div>
      <div class="form-field">
        <label>預算範圍</label>
        <ejs-textbox
          v-model="store.inquiryOrder.budgetRange"
          placeholder="請輸入"
        />
      </div>
      <div class="form-field">
        <label>賞廳業務</label>
        <ejs-textbox
          v-model="store.inquiryOrder.venueVisitSales"
          placeholder="請輸入"
        />
      </div>

      <!-- Row 2 -->
      <div class="form-field">
        <label>預計宴客日期（起迄）</label>
        <div class="flex gap-2">
          <ejs-datepicker
            v-model="store.inquiryOrder.expectedBanquetDateStart"
            :format="'yyyy/MM/dd'"
            placeholder="開始日期"
            class="flex-1"
          />
          <span class="self-center">~</span>
          <ejs-datepicker
            v-model="store.inquiryOrder.expectedBanquetDateEnd"
            :format="'yyyy/MM/dd'"
            placeholder="結束日期"
            class="flex-1"
          />
        </div>
      </div>
      <div class="form-field">
        <label>賞廳日期時間</label>
        <ejs-datetimepicker
          v-model="store.inquiryOrder.venueVisitDateTime"
          :format="'yyyy/MM/dd HH:mm'"
          placeholder="請選擇"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns'
import { DatePickerComponent as EjsDatepicker, DateTimePickerComponent as EjsDatetimepicker } from '@syncfusion/ej2-vue-calendars'
import { useInquiryOrderStore } from '../store/inquiry-order.store'
import { MOCK_CATEGORY } from '../mock/inquiry-order.mock'

const store = useInquiryOrderStore()
</script>

<style scoped>
.inquiry-banquet-info {
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
</style>
