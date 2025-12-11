<template>
  <div class="search-page-container">
    <!-- 頂部控制區 -->
    <div class="top-controls">
      <div class="query-mode-group">
        <label class="query-mode-label">查詢模式</label>
        <ejs-dropdownlist
          v-model="queryMode"
          :dataSource="['一般查詢', '進階查詢']"
          :fields="{ text: 'text', value: 'text' }"
          placeholder="請選擇"
          cssClass="query-mode-dropdown"
        />
      </div>
      <ejs-button iconCss="e-icons e-settings" cssClass="settings-btn" @click="openSettings" />
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
        <button class="action-btn primary-btn" @click="handleSearch">
          <IconSearch />
        </button>
        <button class="action-btn outline-btn" @click="handleClear">
          <IconDelete />
        </button>
        <button class="action-btn outline-btn" @click="toggleExpand">
          <IconExpandMore :class="{ 'rotate-180': !isExpanded }" />
        </button>
      </div>
    </div>

    <!-- 新增按鈕 -->
    <div v-if="addButtonText" class="add-button-container">
      <button class="add-btn" @click="handleAdd">
        <IconAdd />
        <span>{{ addButtonText }}</span>
      </button>
    </div>

    <!-- 結果表格 -->
    <div class="grid-container">
      <ClientOnly>
        <ejs-grid
          ref="grid"
          :dataSource="gridData"
          :allowPaging="true"
          :allowSorting="true"
          :allowReordering="true"
          :pageSettings="{ pageSize: 20, pageSizes: [10, 20, 50, 100] }"
          @dataBound="onDataBound"
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

    <!-- 設定欄位彈窗 -->
    <ejs-dialog
      ref="settingsDialogRef"
      v-model="showSettingsDialog"
      :visible="showSettingsDialog"
      header="設定欄位"
      :width="400"
      :height="500"
      :isModal="true"
      :showCloseIcon="true"
      :buttons="dialogButtons"
      @close="closeSettingsDialog"
      @open="initSortable"
    >
      <div class="column-settings-content">
        <p class="settings-hint">拖動調整順序，勾選顯示欄位</p>
        <ul ref="sortableListRef" class="column-list">
          <li v-for="col in columnSettingsData" :key="col.id" class="column-item">
            <span class="drag-handle">☰</span>
            <label class="column-checkbox">
              <input type="checkbox" v-model="col.visible" />
              <span>{{ col.name }}</span>
            </label>
          </li>
        </ul>
      </div>
    </ejs-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, provide, nextTick } from 'vue'
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns'
import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars'
import {
  GridComponent as EjsGrid,
  ColumnsDirective as EColumns,
  ColumnDirective as EColumn,
  Page,
  Sort,
  Reorder,
} from '@syncfusion/ej2-vue-grids'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups'
// @ts-expect-error - unplugin-icons virtual modules
import IconSearch from '~icons/material-symbols/search'
// @ts-expect-error - unplugin-icons virtual modules
import IconDelete from '~icons/material-symbols/delete-outline'
// @ts-expect-error - unplugin-icons virtual modules
import IconExpandMore from '~icons/material-symbols/expand-more'
// @ts-expect-error - unplugin-icons virtual modules
import IconAdd from '~icons/material-symbols/add'

// Provide Grid services
provide('grid', [Page, Sort, Reorder])

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
const showSettingsDialog = ref(false)
const columnSettingsData = ref<Array<{ id: string; name: string; visible: boolean }>>([])
const sortableListRef = ref<HTMLElement | null>(null)

// Dialog 按鈕配置
const dialogButtons = [
  {
    click: () => applyColumnSettings(),
    buttonModel: { content: '儲存', isPrimary: true },
  },
  {
    click: () => closeSettingsDialog(),
    buttonModel: { content: '取消' },
  },
]

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

const grid = ref<InstanceType<typeof EjsGrid> | null>(null)

const onDataBound = () => {
  if (grid.value) {
    grid.value.autoFitColumns()
  }
}

const openSettings = () => {
  // 準備列設置數據
  if (grid.value?.ej2Instances) {
    const columns = grid.value.ej2Instances.getColumns()
    columnSettingsData.value = columns
      .filter((col: any) => col.field)
      .map((col: any) => ({
        id: col.field,
        name: col.headerText || col.field,
        visible: col.visible !== false,
      }))
  }
  showSettingsDialog.value = true
}

const initSortable = async () => {
  // 彈窗打開後初始化拖放功能
  await nextTick()
  if (sortableListRef.value) {
    // 使用原生 HTML5 拖放 API 實現簡單的拖放
    const items = sortableListRef.value.querySelectorAll('.column-item')
    items.forEach((item) => {
      item.setAttribute('draggable', 'true')

      item.addEventListener('dragstart', (e: any) => {
        e.target.classList.add('dragging')
      })

      item.addEventListener('dragend', (e: any) => {
        e.target.classList.remove('dragging')
      })
    })

    sortableListRef.value.addEventListener('dragover', (e: any) => {
      e.preventDefault()
      const afterElement = getDragAfterElement(sortableListRef.value!, e.clientY)
      const dragging = document.querySelector('.dragging')
      if (dragging && sortableListRef.value) {
        if (afterElement == null) {
          sortableListRef.value.appendChild(dragging)
        } else {
          sortableListRef.value.insertBefore(dragging, afterElement)
        }
      }
    })
  }
}

const getDragAfterElement = (container: HTMLElement, y: number) => {
  const draggableElements = [...container.querySelectorAll('.column-item:not(.dragging)')]

  return draggableElements.reduce((closest: any, child: any) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2

    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

const applyColumnSettings = () => {
  if (!grid.value?.ej2Instances) return

  const gridInstance = grid.value.ej2Instances

  // 獲取拖放後的列順序
  if (sortableListRef.value) {
    const items = sortableListRef.value.querySelectorAll('.column-item')
    const newOrder: Array<{ id: string; name: string; visible: boolean }> = []

    items.forEach((item) => {
      const checkbox = item.querySelector('input[type="checkbox"]') as HTMLInputElement
      const label = item.querySelector('label span')?.textContent || ''
      const colData = columnSettingsData.value.find((c) => c.name === label)
      if (colData) {
        newOrder.push({
          ...colData,
          visible: checkbox.checked,
        })
      }
    })

    // 應用列可見性
    newOrder.forEach((item) => {
      const column = gridInstance.getColumnByField(item.id)
      if (column) {
        column.visible = item.visible
      }
    })

    // 應用列順序
    newOrder.forEach((item, targetIndex) => {
      const currentIndex = gridInstance.getColumnIndexByField(item.id)
      if (currentIndex !== -1 && currentIndex !== targetIndex) {
        const targetField = gridInstance.columns[targetIndex]?.field
        if (targetField) {
          gridInstance.reorderColumns(item.id, targetField)
        }
      }
    })

    gridInstance.refreshColumns()
  }

  showSettingsDialog.value = false
}

const closeSettingsDialog = () => {
  showSettingsDialog.value = false
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
  max-width: 1406px;
  min-height: 100vh;
  background-color: #f8fafc;
}

/* ============================================
   Top Controls - 符合 Figma 設計
   ============================================ */
.top-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
}

.query-mode-group {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

.query-mode-label {
  font-size: 16px;
  color: #333333;
  font-weight: 400;
  line-height: 24px;
  white-space: nowrap;
}

.settings-btn {
  width: 40px;
  height: 40px;
  border: 1px solid #2877ee;
  border-radius: 4px;
  background: transparent;
}

.settings-btn :deep(.e-btn-icon) {
  color: #2877ee;
}

/* ============================================
   Search Form - 符合 Figma 設計
   ============================================ */
.search-form-container {
  display: flex;
  gap: 20px;
  align-items: flex-end;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #d7dae0;
  border-radius: 4px;
  height: auto;
}

.search-fields-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: visible;
}

.search-fields-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-end;
}

.search-field {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 132px;
}

.field-label {
  font-size: 14px;
  color: #3c4a5b;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.1px;
}

/* ============================================
   Button Group - 符合 Figma 設計
   ============================================ */
.button-group {
  display: flex;
  gap: 5px;
  align-items: flex-end;
  padding-bottom: 0;
}

.action-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  padding: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn :deep(svg) {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.2s ease;
}

.primary-btn {
  background-color: #2877ee;
  border: 1px solid #2877ee;
  color: #ffffff;
}

.primary-btn:hover {
  background-color: #1a5fc9;
  border-color: #1a5fc9;
}

.outline-btn {
  background-color: transparent;
  border: 1px solid #2877ee;
  color: #2877ee;
}

.outline-btn:hover {
  background-color: rgba(40, 119, 238, 0.05);
}

/* ============================================
   Add Button - 符合 Figma 設計
   ============================================ */
.add-button-container {
  display: flex;
  justify-content: flex-start;
}

.add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #2877ee;
  border: 1px solid #2877ee;
  color: #ffffff;
  border-radius: 4px;
  height: 40px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-btn:hover {
  background-color: #1a5fc9;
  border-color: #1a5fc9;
}

.add-btn :deep(svg) {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* ============================================
   Grid - 符合 Figma 設計
   ============================================ */
.grid-container {
  border: 1px solid #d7dae0;
  border-radius: 4px;
  overflow: hidden;
}

/* ============================================
   Syncfusion Customization - 符合 Figma 設計
   ============================================ */
:deep(.query-mode-dropdown .e-input-group) {
  background-color: #ffffff;
  border-bottom: 1px solid #183e81;
  border-radius: 0;
  height: 40px;
}

:deep(.custom-textbox .e-input-group),
:deep(.custom-dropdown .e-input-group),
:deep(.custom-daterange .e-input-group) {
  background-color: #e5eaf3;
  border-bottom: 1px solid #7f8996;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 4px 4px 0 0;
  height: 40px;
}

:deep(.e-input-group input),
:deep(.e-ddl input) {
  font-size: 16px;
  color: #333333;
  line-height: 24px;
  padding: 8px 10px;
}

:deep(.e-input-group input::placeholder) {
  color: #7f8996;
}

/* Grid Header */
:deep(.e-grid .e-headercell) {
  background: rgba(40, 119, 238, 0.05);
  border-top: 1px solid #d7dae0;
  border-bottom: none;
  font-weight: 500;
  font-size: 14px;
  color: #0f172a;
  padding: 8px;
  height: 40px;
  line-height: 20px;
}

/* Grid Rows */
:deep(.e-grid .e-row) {
  border-bottom: 1px solid #d7dae0;
  height: 36px;
}

:deep(.e-grid .e-row:nth-child(even)) {
  background-color: rgba(15, 23, 42, 0.04);
}

:deep(.e-grid .e-row:nth-child(odd)) {
  background-color: #ffffff;
}

:deep(.e-grid .e-rowcell) {
  font-size: 14px;
  color: #0f172a;
  padding: 8px;
  line-height: 20px;
}

/* Grid Links */
:deep(.grid-link) {
  color: #0f172a;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
}

:deep(.grid-link:hover) {
  color: #2877ee;
}

/* Pager */
:deep(.e-pager) {
  background-color: #ffffff;
  border-top: 1px solid #d4d4d4;
  padding: 16px 30px;
  border-radius: 0 0 4px 4px;
}

:deep(.e-pager .e-numericitem),
:deep(.e-pager .e-currentitem) {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 16px;
  color: #333333;
  line-height: 24px;
  min-width: 24px;
}

:deep(.e-pager .e-currentitem.e-active) {
  background-color: #2877ee;
  color: #ffffff;
}

:deep(.e-pager .e-pagercontainer) {
  font-size: 16px;
  color: #0f172a;
}

/* ============================================
   Column Settings Dialog
   ============================================ */
.column-settings-content {
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.settings-hint {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #7f8996;
}

/* 列設置列表 */
.column-list {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  max-height: 350px;
}

.column-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid #e5eaf3;
  background-color: #fff;
  cursor: move;
  transition: background-color 0.2s;
}

.column-item:hover {
  background-color: rgba(40, 119, 238, 0.05);
}

.column-item.dragging {
  opacity: 0.5;
  background-color: rgba(40, 119, 238, 0.1);
}

.drag-handle {
  font-size: 18px;
  color: #7f8996;
  cursor: grab;
  user-select: none;
}

.drag-handle:active {
  cursor: grabbing;
}

.column-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  cursor: pointer;
  user-select: none;
}

.column-checkbox input[type='checkbox'] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.column-checkbox span {
  font-size: 14px;
  color: #333333;
}

</style>
