<template>
  <div class="inquiry-supplement-info mb-6">
    <h2 class="section-title">輔助資訊</h2>
    <div class="form-grid">
      <!-- Row 1 -->
      <div class="form-field">
        <label>已看同業場館</label>
        <ejs-multiselect
          v-model="store.inquiryOrder.visitedCompetitorVenue"
          :dataSource="MOCK_COMPETITOR_VENUES"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇（可多選）"
          mode="CheckBox"
        />
      </div>
      <div class="form-field">
        <label>決定宴客場地主因</label>
        <ejs-multiselect
          v-model="store.inquiryOrder.venueDecisionFactor"
          :dataSource="MOCK_DECISION_FACTORS"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇（可多選）"
          mode="CheckBox"
        />
      </div>
      <div class="form-field">
        <label>下訂同業場館</label>
        <ejs-multiselect
          v-model="store.inquiryOrder.bookedCompetitorVenue"
          :dataSource="MOCK_BOOKED_VENUES"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇（可多選）"
          mode="CheckBox"
        />
      </div>
      <div class="form-field">
        <label>未下定原因</label>
        <ejs-multiselect
          v-model="store.inquiryOrder.rejectionReason"
          :dataSource="MOCK_REJECTION_REASONS"
          :fields="{ text: 'name', value: 'name' }"
          placeholder="請選擇（可多選）"
          mode="CheckBox"
        />
      </div>

      <!-- Row 2 - Full width -->
      <div class="form-field full-width">
        <label>聯絡備註</label>
        <ejs-textbox
          v-model="store.inquiryOrder.contactNotes"
          :multiline="true"
          :rows="4"
          placeholder="請輸入"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { MultiSelectComponent as EjsMultiselect } from '@syncfusion/ej2-vue-dropdowns'
import { useInquiryOrderStore } from '../store/inquiry-order.store'
import {
  MOCK_COMPETITOR_VENUES,
  MOCK_DECISION_FACTORS,
  MOCK_BOOKED_VENUES,
  MOCK_REJECTION_REASONS
} from '../mock/inquiry-order.mock'

const store = useInquiryOrderStore()
</script>

<style scoped>
.inquiry-supplement-info {
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

.form-field.full-width {
  grid-column: span 4;
}

.form-field label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}
</style>
