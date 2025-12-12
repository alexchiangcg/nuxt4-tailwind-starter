<template>
  <div class="inquiry-customer-info mb-6">
    <h2 class="section-title">客戶資料</h2>
    <div class="form-grid">
      <!-- Row 1 -->
      <div class="form-field">
        <label>客戶姓名</label>
        <div class="flex gap-2">
          <ejs-textbox
            v-model="store.inquiryOrder.customerName"
            placeholder="請輸入"
            class="flex-1"
          />
          <ejs-button
            :content="'會員管理'"
            @click="openMemberManagement"
          />
        </div>
      </div>
      <div class="form-field">
        <label>聯絡人</label>
        <ejs-textbox
          v-model="store.inquiryOrder.contactPerson"
          placeholder="請輸入"
        />
      </div>
      <div class="form-field">
        <label>聯絡手機</label>
        <ejs-textbox
          v-model="store.inquiryOrder.contactPhone"
          placeholder="0912345678"
        />
      </div>
      <div class="form-field">
        <label>聯絡 E-mail</label>
        <ejs-textbox
          v-model="store.inquiryOrder.contactEmail"
          placeholder="example@email.com"
          type="email"
        />
      </div>

      <!-- Row 2 -->
      <div class="form-field">
        <label>城市 / 鄉鎮市區</label>
        <div class="flex gap-2">
          <ejs-textbox
            v-model="store.inquiryOrder.city"
            placeholder="城市"
            class="flex-1"
          />
          <ejs-textbox
            v-model="store.inquiryOrder.district"
            placeholder="鄉鎮市區"
            class="flex-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { useInquiryOrderStore } from '../store/inquiry-order.store'

const store = useInquiryOrderStore()

const openMemberManagement = () => {
  // TODO: UI only - 開啟會員管理
  console.log('開啟會員管理')
}
</script>

<style scoped>
.inquiry-customer-info {
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
