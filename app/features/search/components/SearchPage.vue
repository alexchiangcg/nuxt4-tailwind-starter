<template>
  <div class="search-page-container">
    <!-- 頂部控制區 -->
    <div class="top-controls">
      <div class="query-mode-selector">
        <label class="text-sm text-gray-700">查詢模式</label>
        <ejs-dropdownlist
          v-model="queryMode"
          :dataSource="['一般查詢', '進階查詢']"
          :fields="{ text: 'text', value: 'text' }"
          placeholder="請選擇"
          cssClass="custom-dropdown"
        />
      </div>
      <ejs-button iconCss="e-icons e-settings" cssClass="e-outline" />
    </div>

    <!-- 搜尋條件區 -->
    <div class="search-form-container">
      <div class="search-fields-wrapper">
        <!-- 第一排欄位（始終顯示） -->
        <div class="search-fields-row">
          <template v-for="field in firstRowFields" :key="field.key">
            <!-- Text Input -->
            <div
              v-if="field.type === 'text'"
              class="search-field"
              :style="{ flexGrow: field.width || 1 }"
            >
              <label class="field-label">{{ field.label }}</label>
              <ejs-textbox
                v-model="filters[field.key]"
                :placeholder="field.placeholder || '請輸入'"
                cssClass="custom-textbox"
              />
            </div>

            <!-- Dropdown -->
            <div
              v-else-if="field.type === 'dropdown'"
              class="search-field"
              :style="{ flexGrow: field.width || 1 }"
            >
              <label class="field-label">{{ field.label }}</label>
              <ejs-dropdownlist
                v-model="filters[field.key]"
                :dataSource="field.options"
                :placeholder="field.placeholder || '請選擇'"
                cssClass="custom-dropdown"
              />
            </div>

            <!-- Date Range -->
            <div
              v-else-if="field.type === 'daterange'"
              class="search-field"
              :style="{ flexGrow: field.width || 1 }"
            >
              <label class="field-label">{{ field.label }}</label>
              <ejs-daterangepicker
                v-model="filters[field.key]"
                :placeholder="field.placeholder || '選擇日期範圍'"
                format="yyyy/MM/dd"
                cssClass="custom-daterange"
              />
            </div>
          </template>
        </div>

        <!-- 第二排欄位（可折疊） -->
        <div v-if="isExpanded && secondRowFields.length > 0" class="search-fields-row">
          <template v-for="field in secondRowFields" :key="field.key">
            <!-- Text Input -->
            <div
              v-if="field.type === 'text'"
              class="search-field"
              :style="{ flexGrow: field.width || 1 }"
            >
              <label class="field-label">{{ field.label }}</label>
              <ejs-textbox
                v-model="filters[field.key]"
                :placeholder="field.placeholder || '請輸入'"
                cssClass="custom-textbox"
              />
            </div>

            <!-- Dropdown -->
            <div
              v-else-if="field.type === 'dropdown'"
              class="search-field"
              :style="{ flexGrow: field.width || 1 }"
            >
              <label class="field-label">{{ field.label }}</label>
              <ejs-dropdownlist
                v-model="filters[field.key]"
                :dataSource="field.options"
                :placeholder="field.placeholder || '請選擇'"
                cssClass="custom-dropdown"
              />
            </div>

            <!-- Date Range -->
            <div
              v-else-if="field.type === 'daterange'"
              class="search-field"
              :style="{ flexGrow: field.width || 1 }"
            >
              <label class="field-label">{{ field.label }}</label>
              <ejs-daterangepicker
                v-model="filters[field.key]"
                :placeholder="field.placeholder || '選擇日期範圍'"
                format="yyyy/MM/dd"
                cssClass="custom-daterange"
              />
            </div>
          </template>
        </div>
      </div>

      <!-- 按鈕組 -->
      <div class="button-group">
        <ejs-button iconCss="e-icons e-search" isPrimary @click="handleSearch" />
        <ejs-button iconCss="e-icons e-delete" cssClass="e-outline" @click="handleClear" />
        <ejs-button
          :iconCss="isExpanded ? 'e-icons e-chevron-up' : 'e-icons e-chevron-down'"
          cssClass="e-outline"
          @click="toggleExpand"
        />
      </div>
    </div>

    <!-- 新增按鈕 -->
    <div v-if="addButtonText" class="add-button-container">
      <ejs-button :content="addButtonText" iconCss="e-icons e-plus" isPrimary @click="handleAdd" />
    </div>

    <!-- 結果表格 -->
    <div class="grid-container">
      <ClientOnly>
        <ejs-grid
          :dataSource="gridData"
          :allowPaging="true"
          :allowSorting="true"
          :pageSettings="{ pageSize: 20, pageSizes: [10, 20, 50, 100] }"
        >
          <e-columns>
            <e-column
              v-for="col in gridColumns"
              :key="col.field"
              :field="col.field"
              :headerText="col.headerText"
              :width="col.width"
              :textAlign="col.textAlign || 'Left'"
              :type="col.type"
            >
              <template v-if="col.isLink" #template="{ data }">
                <a href="#" class="grid-link">{{ data[col.field] }}</a>
              </template>
            </e-column>
          </e-columns>
        </ejs-grid>
        <template #fallback>
          <div style="padding: 20px; text-align: center;">載入表格中...</div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, watch, defineEmits } from 'vue'
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns'
import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars'
import {
  GridComponent as EjsGrid,
  ColumnsDirective as EColumns,
  ColumnDirective as EColumn,
  Page,
  Sort,
  Toolbar,
} from '@syncfusion/ej2-vue-grids'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'

// Provide Grid services
provide('grid', [Page, Sort, Toolbar])

// ============================================
// Types
// ============================================
export interface SearchFieldSchema {
  key: string
  label: string
  type: 'text' | 'dropdown' | 'daterange'
  placeholder?: string
  options?: string[]
  width?: number
  row?: 1 | 2
}

export interface GridColumnSchema {
  field: string
  headerText: string
  width?: string
  textAlign?: 'Left' | 'Center' | 'Right'
  type?: 'string' | 'number' | 'date'
  isLink?: boolean
}

interface Props {
  searchFields: SearchFieldSchema[]
  gridColumns: GridColumnSchema[]
  gridData: any[]
  addButtonText?: string
  onSearch?: (filters: Record<string, any>) => void
  onAdd?: () => void
}

// ============================================
// Props & Emits
// ============================================
const props = withDefaults(defineProps<Props>(), {
  searchFields: () => [],
  gridColumns: () => [],
  gridData: () => [],
  addButtonText: '',
})

const emit = defineEmits<{
  search: [filters: Record<string, any>]
  add: []
}>()

// ============================================
// State
// ============================================
const queryMode = ref('一般查詢')
const isExpanded = ref(false)
const filters = ref<Record<string, any>>({})

// 調試：檢查數據
watch(() => props.gridData, (newVal) => {
  console.log('SearchPage - gridData changed:', newVal?.length, newVal)
}, { immediate: true })

// ============================================
// Computed
// ============================================
const firstRowFields = computed(() =>
  props.searchFields.filter((field) => field.row === 1 || !field.row)
)

const secondRowFields = computed(() =>
  props.searchFields.filter((field) => field.row === 2)
)

// ============================================
// Methods
// ============================================
const handleSearch = () => {
  if (props.onSearch) {
    props.onSearch(filters.value)
  }
  emit('search', filters.value)
}

const handleClear = () => {
  filters.value = {}
}

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const handleAdd = () => {
  if (props.onAdd) {
    props.onAdd()
  }
  emit('add')
}
</script>

<style scoped>
/* ============================================
   Container
   ============================================ */
.search-page-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

/* ============================================
   Top Controls
   ============================================ */
.top-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.query-mode-selector {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 200px;
}

.query-mode-selector label {
  font-size: 14px;
  color: #333;
}

/* ============================================
   Search Form
   ============================================ */
.search-form-container {
  display: flex;
  gap: 20px;
  align-items: flex-end;
  padding: 16px;
  background-color: #f5f5f5;
  border: 1px solid #d7dae0;
  border-radius: 4px;
}

.search-fields-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.search-fields-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.search-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 132px;
}

.field-label {
  font-size: 14px;
  color: #3c4a5b;
  font-weight: 400;
}

/* ============================================
   Button Group
   ============================================ */
.button-group {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  padding-bottom: 2px;
}

/* ============================================
   Add Button
   ============================================ */
.add-button-container {
  display: flex;
  justify-content: flex-start;
}

/* ============================================
   Grid
   ============================================ */
.grid-container {
  border: 1px solid #d7dae0;
  border-radius: 4px;
  overflow: hidden;
}

/* ============================================
   Syncfusion Customization
   ============================================ */
:deep(.custom-textbox),
:deep(.custom-dropdown),
:deep(.custom-daterange) {
  background-color: #e5eaf3;
  border-bottom: 1px solid #7f8996;
  border-radius: 4px 4px 0 0;
  height: 40px;
}

:deep(.e-input-group),
:deep(.e-ddl) {
  height: 40px;
}

:deep(.e-input-group input) {
  font-size: 16px;
  color: #7f8996;
}

:deep(.e-grid .e-headercell) {
  background: linear-gradient(
    90deg,
    rgba(40, 119, 238, 0.05) 0%,
    rgba(40, 119, 238, 0.05) 100%
  );
  font-weight: 500;
  font-size: 14px;
  color: #0f172a;
}

:deep(.e-grid .e-row:nth-child(even)) {
  background-color: rgba(15, 23, 42, 0.04);
}

:deep(.grid-link) {
  color: #0f172a;
  text-decoration: underline;
}

:deep(.grid-link:hover) {
  color: #2877ee;
}
</style>
