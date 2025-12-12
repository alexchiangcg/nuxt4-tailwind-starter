<template>
  <div class="inquiry-order-details-grid">
    <div class="toolbar mb-4">
      <ejs-button
        :content="'+ 新增'"
        :isPrimary="true"
        @click="handleAdd"
      />
    </div>

    <div v-if="store.inquiryOrderDetails.length === 0" class="empty-state">
      <p class="text-gray-500">無任何資料</p>
      <ejs-button
        :content="'新增第一筆活動明細'"
        @click="handleAdd"
      />
    </div>

    <ejs-grid
      v-else
      ref="gridInstance"
      :dataSource="store.inquiryOrderDetails"
      :allowPaging="true"
      :pageSettings="{ pageSize: 50 }"
      :allowSorting="true"
      :enableVirtualization="shouldEnableVirtualization"
      :height="400"
    >
      <e-columns>
        <e-column field="mainVenue" headerText="預計主場地" width="120" />
        <e-column field="subVenue" headerText="預計子場地" width="120" />
        <e-column field="usageDate" headerText="使用日期" width="120" type="date" :format="{ type: 'date', format: 'yyyy/MM/dd' }" />
        <e-column field="startTime" headerText="開始時間" width="100" />
        <e-column field="endTime" headerText="結束時間" width="100" />
        <e-column field="activityCategory" headerText="活動類別" width="100" />
        <e-column field="activitySubject" headerText="活動主旨" width="150" />
        <e-column field="tableLayout" headerText="桌圖" width="100" />
        <e-column field="equipmentNeeds" headerText="預計設備需求" width="150" />
        <e-column field="reservedTables" headerText="預訂桌數" width="100" textAlign="Right" />
        <e-column field="reservedPeople" headerText="預訂人數" width="100" textAlign="Right" />
        <e-column field="remarks" headerText="備註" width="150" />
        <e-column field="modifiedBy" headerText="修改者" width="100" />
        <e-column field="modifiedDate" headerText="修改日期" width="120" type="date" :format="{ type: 'date', format: 'yyyy/MM/dd' }" />
        <e-column field="createdBy" headerText="新增者" width="100" />
        <e-column field="createdDate" headerText="新增日期" width="120" type="date" :format="{ type: 'date', format: 'yyyy/MM/dd' }" />
        <e-column headerText="操作" width="100" :template="actionTemplate" />
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Page, Sort, VirtualScroll } from '@syncfusion/ej2-vue-grids'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { useInquiryOrderStore } from '../store/inquiry-order.store'

const router = useRouter()
const store = useInquiryOrderStore()
const gridInstance = ref()

// 只在資料量 > 20 筆時啟用虛擬滾動
const shouldEnableVirtualization = computed(() => store.inquiryOrderDetails.length > 20)

// 操作按鈕模板
const actionTemplate = () => {
  return {
    template: `
      <div class="flex gap-2">
        <ejs-button content="編輯" cssClass="e-small" />
      </div>
    `
  }
}

const handleAdd = () => {
  navigateTo('/inquiry-order/details/new')
}

const handleEdit = (id: string) => {
  navigateTo(`/inquiry-order/details/${id}`)
}
</script>

<style scoped>
.inquiry-order-details-grid {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.toolbar {
  display: flex;
  justify-content: flex-start;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  gap: 1rem;
}
</style>
