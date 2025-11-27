<template>
  <div class="test-page-container">
    <h1 class="page-title">Schema-Driven 搜尋頁面範例</h1>

    <SearchPage
      :searchFields="searchFieldsConfig"
      :gridColumns="gridColumnsConfig"
      :gridData="mockGridData"
      addButtonText="新增預約"
      @search="handleSearch"
      @add="handleAdd"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchPage from '~/features/search/components/SearchPage.vue'
import type { SearchFieldSchema, GridColumnSchema } from '~/features/search/components/SearchPage.vue'

// Import Syncfusion CSS
import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-inputs/styles/material.css'
import '@syncfusion/ej2-dropdowns/styles/material.css'
import '@syncfusion/ej2-calendars/styles/material.css'
import '@syncfusion/ej2-grids/styles/material.css'

// ============================================
// Search Fields Configuration
// ============================================
const searchFieldsConfig = ref<SearchFieldSchema[]>([
  // 第一排欄位
  {
    key: 'queryProgress',
    label: '預約進度',
    type: 'dropdown',
    options: ['使用者可自訂', '接洽中', '已取消', '候補'],
    placeholder: '請選擇',
    width: 1,
    row: 1,
  },
  {
    key: 'queryStatus',
    label: '預約狀態',
    type: 'dropdown',
    options: ['正常', '已取消', '候補'],
    placeholder: '請選擇',
    width: 1,
    row: 1,
  },
  {
    key: 'queryCategory',
    label: '預約類別',
    type: 'dropdown',
    options: ['公司活動', '婚禮', '產品發表會'],
    placeholder: '請選擇',
    width: 1,
    row: 1,
  },
  {
    key: 'querySales',
    label: '業務員',
    type: 'dropdown',
    options: ['林小姐', '林先生', '張小姐'],
    placeholder: '請選擇',
    width: 1,
    row: 1,
  },
  {
    key: 'queryName',
    label: '預約名稱',
    type: 'text',
    placeholder: '請輸入',
    width: 2,
    row: 1,
  },
  {
    key: 'queryCenterNo',
    label: '預約中心編號',
    type: 'dropdown',
    options: ['CRS000151', 'CRS000152', 'CRS000153'],
    placeholder: '請輸入',
    width: 2,
    row: 1,
  },
  // 第二排欄位（可折疊）
  {
    key: 'queryStartDate',
    label: '開始日期',
    type: 'daterange',
    placeholder: '選擇日期範圍',
    width: 2,
    row: 2,
  },
  {
    key: 'queryEndDate',
    label: '結束日期',
    type: 'daterange',
    placeholder: '選擇日期範圍',
    width: 2,
    row: 2,
  },
  {
    key: 'queryCancelDate',
    label: '取消日期',
    type: 'daterange',
    placeholder: '選擇日期範圍',
    width: 2,
    row: 2,
  },
  {
    key: 'queryAddDate',
    label: '新增日期',
    type: 'daterange',
    placeholder: '選擇日期範圍',
    width: 2,
    row: 2,
  },
  {
    key: 'querySource',
    label: '預約來源',
    type: 'dropdown',
    options: ['業務開發', '客戶推薦', '網路查詢'],
    placeholder: '請選擇',
    width: 1,
    row: 2,
  },
  {
    key: 'queryCreator',
    label: '新增者',
    type: 'dropdown',
    options: ['林小姐', '張先生', '王小姐'],
    placeholder: '請選擇',
    width: 1,
    row: 2,
  },
  {
    key: 'queryCanceler',
    label: '取消者',
    type: 'dropdown',
    options: ['林小姐', '張先生', '王小姐'],
    placeholder: '請選擇',
    width: 1,
    row: 2,
  },
])

// ============================================
// Grid Columns Configuration
// ============================================
const gridColumnsConfig = ref<GridColumnSchema[]>([
  {
    field: 'centerNo',
    headerText: '預約中心編號',
    width: '114',
    textAlign: 'Left',
    type: 'string',
    isLink: true,
  },
  {
    field: 'progress',
    headerText: '預約進度',
    width: '107',
    textAlign: 'Left',
    type: 'string',
  },
  {
    field: 'status',
    headerText: '預約狀態',
    width: '72',
    textAlign: 'Left',
    type: 'string',
  },
  {
    field: 'category',
    headerText: '預約類別',
    width: '148',
    textAlign: 'Left',
    type: 'string',
  },
  {
    field: 'name',
    headerText: '預約名稱',
    width: '168',
    textAlign: 'Left',
    type: 'string',
  },
  {
    field: 'source',
    headerText: '預約來源',
    width: '104',
    textAlign: 'Left',
    type: 'string',
  },
  {
    field: 'sales',
    headerText: '業務員',
    width: '85',
    textAlign: 'Left',
    type: 'string',
  },
  {
    field: 'amount',
    headerText: '預約金額',
    width: '88',
    textAlign: 'Right',
    type: 'number',
  },
  {
    field: 'addDate',
    headerText: '新增日期',
    width: '100',
    textAlign: 'Left',
    type: 'date',
  },
  {
    field: 'cancelDate',
    headerText: '取消日期',
    width: '100',
    textAlign: 'Left',
    type: 'date',
  },
  {
    field: 'startDate',
    headerText: '開始日期',
    width: '100',
    textAlign: 'Left',
    type: 'date',
  },
  {
    field: 'endDate',
    headerText: '結束日期',
    width: '100',
    textAlign: 'Left',
    type: 'date',
  },
  {
    field: 'creator',
    headerText: '新增者',
    width: '80',
    textAlign: 'Left',
    type: 'string',
  },
  {
    field: 'canceler',
    headerText: '取消者',
    width: '80',
    textAlign: 'Left',
    type: 'string',
  },
])

// ============================================
// Mock Grid Data (根據 Figma 截圖)
// ============================================
const mockGridData = ref([
  {
    centerNo: 'CRS000151',
    progress: '使用者可自訂',
    status: '正常',
    category: '公司活動',
    name: '產品發表會',
    source: '業務開發',
    sales: '林小姐',
    amount: 6000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '正常',
    category: '婚禮',
    name: '陳李府喜宴',
    source: '業務開發',
    sales: '林先生',
    amount: 21000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '已取消',
    category: '婚禮',
    name: '陳李府喜宴',
    source: '業務開發',
    sales: '林小姐',
    amount: 33000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '候補',
    category: '婚禮',
    name: '陳李府喜宴',
    source: '業務開發',
    sales: '林小姐',
    amount: 57000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '未付訂金',
    status: '候補',
    category: '婚禮',
    name: '陳李府喜宴',
    source: '業務開發',
    sales: '林小姐',
    amount: 21000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '正常',
    category: '婚禮',
    name: '陳李府喜宴',
    source: '業務開發',
    sales: '林小姐',
    amount: 82000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '已取消',
    category: '產品發表會',
    name: 'IBM2025經銷商大會',
    source: '業務開發',
    sales: '林小姐',
    amount: 37000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '候補',
    category: '產品發表會',
    name: 'IBM2025經銷商大會',
    source: '業務開發',
    sales: '林小姐',
    amount: 57000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '候補',
    category: '公司活動',
    name: '德安2025Team building',
    source: '業務開發',
    sales: '林小姐',
    amount: 21000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '正常',
    category: '公司活動',
    name: '德安2025Team building',
    source: '業務開發',
    sales: '林小姐',
    amount: 82000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '已取消',
    category: '公司活動',
    name: '德安2025Team building',
    source: '業務開發',
    sales: '林小姐',
    amount: 37000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '候補',
    category: '公司活動',
    name: '德安2025Team building',
    source: '業務開發',
    sales: '林小姐',
    amount: 57000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '候補',
    category: '公司活動',
    name: '2025Team building',
    source: '業務開發',
    sales: '林小姐',
    amount: 21000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '正常',
    category: '產品發表會',
    name: 'IBM2025經銷商大會',
    source: '業務開發',
    sales: '林小姐',
    amount: 82000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
  {
    centerNo: 'CRS000151',
    progress: '接洽中',
    status: '已取消',
    category: '產品發表會',
    name: 'IBM2025經銷商大會',
    source: '業務開發',
    sales: '林小姐',
    amount: 37000,
    addDate: '2025/03/08',
    cancelDate: '2025/03/08',
    startDate: '2025/03/08',
    endDate: '2025/03/08',
    creator: '林小姐',
    canceler: '林小姐',
  },
])

// ============================================
// Event Handlers
// ============================================
const handleSearch = (filters: Record<string, any>) => {
  console.log('搜尋條件:', filters)
  // 這裡可以呼叫 API 或執行前端篩選
}

const handleAdd = () => {
  console.log('新增預約')
  // 導航到新增頁面或開啟 Modal
}
</script>

<style scoped>
.test-page-container {
  padding: 24px;
  max-width: 1440px;
  margin: 0 auto;
}

.page-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
}
</style>
