# Design Document

## Overview

初洽單管理功能是一個企業級表單應用，採用 Feature-based 架構設計。本設計遵循 "好品味"(Good Taste) 原則：消除特殊情況，讓代碼結構清晰且易於維護。

### 核心設計原則

1. **資料結構優先** - "Good programmers worry about data structures"
   - 明確的 TypeScript 介面定義
   - 清晰的資料流向：Mock Data → Pinia Store → UI Components
   - 單一資料來源 (Single Source of Truth)

2. **消除複雜性**
   - UI 原型階段，移除不必要的 API 整合
   - 使用 Mock Data 簡化資料來源
   - 元件職責單一，避免過度設計

3. **零破壞性**
   - 獨立的 feature 模組 (`app/features/inquiry-order/`)
   - 不依賴其他業務 features
   - 僅依賴 `app/shared/` 通用層

4. **實用主義**
   - 使用 Syncfusion 企業級元件加速開發
   - 從 Figma 設計直接轉換為程式碼
   - 優先完成 UI 外觀，業務邏輯後續迭代

## Steering Document Alignment

### 與 Product Vision 的對齊

**Feature-based 架構** (`product.md:24`)
- 初洽單管理作為獨立 feature 模組：`app/features/inquiry-order/`
- 包含完整的 pages, components, composables, store, api, types 子目錄
- 遵循 Barrel Exports 模式，提供清晰的 Public API

**Figma 轉代碼工作流程** (`product.md:26`)
- 使用 Figma MCP 從設計稿匯出 Vue 元件
- 兩個主要 Figma 設計：
  - 主檔表單 (node-id=6146-113071)
  - 活動明細列表 (node-id=6202-297366)

**Syncfusion UI 元件整合** (`product.md:27`)
- 優先使用 Syncfusion Vue 元件：
  - `ejs-grid` - 活動明細列表
  - `ejs-datepicker` - 日期選擇
  - `ejs-dropdownlist` - 單選下拉
  - `ejs-multiselect` - 多選下拉
  - `ejs-textbox` - 文字輸入

**測試覆蓋** (`product.md:28`)
- 使用 Playwright MCP 對每個元件進行視覺回歸測試

### 與 Tech Stack 的對齊

**技術堆疊** (`tech.md`)
- Nuxt 4.2 + Vue 3.5 Composition API
- TypeScript 5.9+ 完整型別安全
- Tailwind CSS v4.0 樣式管理
- Pinia 狀態管理
- Syncfusion Vue Components

**開發體驗** (`tech.md`)
- Auto-import composables 和 components
- TypeScript 嚴格模式
- ESLint + Prettier 代碼規範

### 與 Structure 的對齊

**目錄結構** (`structure.md:90-136`)
```
app/features/inquiry-order/
├── pages/
│   ├── InquiryOrderFormPage.vue      # 主頁面（包含 Tab 切換）
│   └── InquiryOrderDetailEditPage.vue # 活動明細編輯頁
├── components/
│   ├── InquiryBasicInfo.vue          # 基本資料區塊
│   ├── InquiryCustomerInfo.vue       # 客戶資料區塊
│   ├── InquiryBanquetInfo.vue        # 宴會資料區塊
│   ├── InquirySupplementInfo.vue     # 輔助資訊區塊
│   └── InquiryOrderDetailsGrid.vue   # 活動明細列表
├── composables/
│   ├── useInquiryOrder.ts            # 主檔表單邏輯
│   └── useInquiryOrderDetails.ts     # 明細列表邏輯
├── store/
│   └── inquiry-order.store.ts        # Pinia Store
├── api/
│   └── inquiry-order.api.ts          # API 呼叫（模擬）
├── types/
│   └── inquiry-order.types.ts        # TypeScript 介面
├── mock/
│   └── inquiry-order.mock.ts         # Mock 資料
└── index.ts                          # Barrel exports
```

**命名規範** (`structure.md:196-242`)
- Vue 元件：PascalCase
- Composables：camelCase, `use` 前綴
- Types：PascalCase
- Files：kebab-case

## Code Reuse Analysis

### 專案現有模式分析

檢視現有 features (`app/features/auth/`, `app/features/reservation/`)，發現可重用的模式：

1. **表單元件結構**
   - `app/features/reservation/components/ReservationForm.vue` - 多區塊表單範例
   - 可參考其表單驗證、錯誤處理模式

2. **Pinia Store 模式**
   - `app/features/auth/store/auth.store.ts` - Composition API 風格
   - 使用 `defineStore` + `ref` + `computed`

3. **Composables 模式**
   - `app/features/auth/composables/useAuth.ts` - 封裝業務邏輯
   - 返回 Public API (state, computed, methods)

### 可重用的 Shared 資源

**從專案既有代碼重用**:
- `app/shared/utils/` - 日期格式化、表單驗證工具
- `app/shared/components/` - 通用 UI 元件（如需要）
- `app/shared/composables/` - 通用 composables（如 `useFetch`）

**不重用**:
- 其他 features 的業務邏輯（遵循低耦合原則）

### Syncfusion 元件重用

**已整合的 Syncfusion 元件** (從 `nuxt.config.ts` 或 `package.json` 確認):
- Material 3 主題已配置
- 元件透過 auto-import 或手動註冊

## Architecture

### 高層架構圖

```
┌─────────────────────────────────────────────────────────────┐
│                    Nuxt Pages Layer                          │
│  app/pages/inquiry-order/index.vue                           │
│  app/pages/inquiry-order/details/[id].vue                    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────┐
│              Feature Layer (inquiry-order)                   │
│                                                               │
│  ┌──────────────────┐      ┌──────────────────┐             │
│  │  Pages           │      │  Components      │             │
│  │  - FormPage      │─────▶│  - BasicInfo     │             │
│  │  - DetailEdit    │      │  - CustomerInfo  │             │
│  └──────────────────┘      │  - BanquetInfo   │             │
│           │                │  - SupplementInfo│             │
│           │                │  - DetailsGrid   │             │
│           ↓                └──────────────────┘             │
│  ┌──────────────────┐               ↑                       │
│  │  Composables     │───────────────┘                       │
│  │  - useInquiry... │                                       │
│  └──────────────────┘                                       │
│           │                                                  │
│           ↓                                                  │
│  ┌──────────────────┐      ┌──────────────────┐             │
│  │  Pinia Store     │◀────▶│  Mock Data       │             │
│  │  (State Mgmt)    │      │  (Data Source)   │             │
│  └──────────────────┘      └──────────────────┘             │
│           │                                                  │
│           ↓                                                  │
│  ┌──────────────────┐                                       │
│  │  API Layer       │  (未來連接後端)                        │
│  │  (模擬)          │                                       │
│  └──────────────────┘                                       │
└─────────────────────────────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────┐
│              Shared Layer (app/shared)                       │
│  - Utils (formatDate, validateEmail...)                     │
│  - Composables (useFetch, useModal...)                      │
└─────────────────────────────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────┐
│              External Dependencies                           │
│  - Syncfusion Components (ejs-grid, ejs-datepicker...)      │
│  - Vue 3 + Nuxt 4 + Pinia                                    │
└─────────────────────────────────────────────────────────────┘
```

### 資料流向

**新增初洽單流程**:
```
User Input → Component (v-model)
           → Composable (validation)
           → Store (state update)
           → LocalStorage (draft auto-save)
           → API (save - 模擬)
           → Store (update from response)
           → UI Re-render
```

**載入既有初洽單流程**:
```
Page Mount → Composable (fetch)
          → API (get by ID - 模擬)
          → Store (populate state)
          → Components (display data)
```

**Tab 切換流程**:
```
User Click Tab → Local State Update
               → Component Switch (主檔 ↔ 活動明細)
               → Store State 保持不變（未儲存的輸入不會遺失）
```

### 關鍵設計決策

#### 決策 1: 使用 Pinia Store 管理表單狀態

**原因**:
- 跨元件共享狀態（4 個資料區塊 + 活動明細列表）
- Tab 切換時保持狀態
- 支援 LocalStorage 自動儲存草稿

**替代方案**: `provide/inject` - 但 Pinia 提供更好的 TypeScript 支援和 DevTools

#### 決策 2: 活動明細使用獨立頁面編輯

**原因** (`requirements.md:62-76`):
- 使用者反饋要求簡化 DataGrid 為唯讀
- 避免 inline editing 的複雜性
- 編輯頁面可重用於新增和修改

**替代方案**: Inline editing - 已在 Requirements 階段被拒絕

#### 決策 3: 前端產生部分自動欄位

**原因** (`requirements.md:112-126`):
- 「新增者」、「新增日期」在前端產生（當前使用者和時間）
- 「初洽單號」、「修改者」、「修改日期」由後端產生
- UI 原型階段，後端欄位暫時使用 Mock 值

**實作策略**:
```typescript
// 新增時
const createInquiryOrder = () => {
  store.inquiryOrder.createdBy = currentUser.value
  store.inquiryOrder.createdDate = new Date()
  // inquiryOrderNo, modifiedBy, modifiedDate 留空（儲存後由 API 回傳）
}
```

#### 決策 4: Mock Data 策略

**原因** (`requirements.md:54-60`):
- UI 原型階段，不整合真實 API
- 下拉選單資料使用假資料
- 專注於 UI 外觀和互動

**實作**:
```typescript
// mock/inquiry-order.mock.ts
export const MOCK_INQUIRY_STATUS = [
  { id: 1, name: '初洽中' },
  { id: 2, name: '已轉訂' },
  { id: 3, name: '已取消' }
]
```

## Components and Interfaces

### 元件層級結構

```
InquiryOrderFormPage (頁面容器)
├── Tab Navigation (主檔 / 預計活動明細)
├── Tab Panel 1: 主檔
│   ├── InquiryBasicInfo (基本資料)
│   ├── InquiryCustomerInfo (客戶資料)
│   ├── InquiryBanquetInfo (宴會資料)
│   └── InquirySupplementInfo (輔助資訊)
└── Tab Panel 2: 預計活動明細
    └── InquiryOrderDetailsGrid (活動明細列表)
        ├── 新增按鈕 → 跳轉至 InquiryOrderDetailEditPage
        └── 編輯按鈕 → 跳轉至 InquiryOrderDetailEditPage

InquiryOrderDetailEditPage (明細編輯頁)
└── 活動明細表單
    ├── 預計主場地
    ├── 預計子場地
    ├── 使用日期
    ├── 開始時間 / 結束時間
    ├── 活動類別 / 活動主旨
    └── ... (其他欄位)
```

### 主要元件設計

#### 1. InquiryOrderFormPage.vue

**職責**: 主頁面容器，管理 Tab 切換和整體佈局

**Props**: 無（從 URL params 讀取 ID）

**State**:
```typescript
const activeTab = ref<'master' | 'details'>('master')
const mode = ref<'create' | 'edit'>('create') // 從 route query 判斷
```

**Methods**:
- `handleSave()` - 儲存整個初洽單（主檔 + 明細）
- `handleCopy()` - 複製初洽單
- `handleConvert()` - 轉訂席單（UI only）

**Template 結構**:
```vue
<template>
  <div class="inquiry-order-form-page">
    <!-- Header: 標題 + 操作按鈕 -->
    <header>
      <h1>{{ mode === 'create' ? '新增初洽單' : '編輯初洽單' }}</h1>
      <div class="actions">
        <ejs-button :content="'儲存'" :isPrimary="true" @click="handleSave" />
        <ejs-button :content="'複製'" v-if="mode === 'edit'" @click="handleCopy" />
        <ejs-button :content="'轉訂席單'" v-if="mode === 'edit'" @click="handleConvert" />
      </div>
    </header>

    <!-- Syncfusion Tab Component -->
    <ejs-tab>
      <e-tabitems>
        <e-tabitem :header="{ text: '主檔' }">
          <template v-slot:content>
            <div class="tab-panel">
              <InquiryBasicInfo />
              <InquiryCustomerInfo />
              <InquiryBanquetInfo />
              <InquirySupplementInfo />
            </div>
          </template>
        </e-tabitem>
        <e-tabitem :header="{ text: '預計活動明細' }">
          <template v-slot:content>
            <div class="tab-panel">
              <InquiryOrderDetailsGrid />
            </div>
          </template>
        </e-tabitem>
      </e-tabitems>
    </ejs-tab>
  </div>
</template>

<script setup lang="ts">
import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from '@syncfusion/ej2-vue-navigations'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { ref } from 'vue'

const mode = ref<'create' | 'edit'>('create')

const handleSave = () => {
  // 儲存邏輯
}

const handleCopy = () => {
  // 複製邏輯
}

const handleConvert = () => {
  // 轉訂席單邏輯（UI only）
}
</script>
```

#### 2. InquiryBasicInfo.vue

**職責**: 基本資料區塊

**Syncfusion 元件使用**:
- `ejs-textbox` - 初洽單號（唯讀）、手動單號
- `ejs-dropdownlist` - 初洽狀態
- `ejs-datepicker` - 初洽日
- `ejs-textbox` - 初洽業務
- `ejs-textbox` - 相關專案（唯讀）
- `ejs-textbox` + 按鈕 - 訂席單號（唯讀 + 跳轉按鈕）
- `ejs-multiselect` - 初洽訂席來源

**Props**: 無（從 Store 讀取）

**v-model 綁定**:
```typescript
const store = useInquiryOrderStore()

// 雙向綁定範例
<ejs-textbox v-model="store.inquiryOrder.manualNumber" />
<ejs-dropdownlist
  v-model="store.inquiryOrder.status"
  :dataSource="MOCK_INQUIRY_STATUS"
  :fields="{ text: 'name', value: 'id' }"
/>
```

**驗證規則**:
- 必填欄位: 初洽狀態、初洽日、初洽業務

#### 3. InquiryCustomerInfo.vue

**職責**: 客戶資料區塊

**Syncfusion 元件使用**:
- `ejs-textbox` - 客戶姓名、聯絡人、聯絡手機、聯絡 E-mail
- `ejs-textbox` - 城市、鄉鎮市區
- `ejs-button` - 會員管理（UI only）

**驗證規則**:
- 聯絡手機: 正則驗證 `/^09\d{8}$/`
- 聯絡 E-mail: 正則驗證 `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

#### 4. InquiryBanquetInfo.vue

**職責**: 宴會資料區塊

**Syncfusion 元件使用**:
- `ejs-dropdownlist` - 類別
- `ejs-textbox` - 宴名、預算範圍
- `ejs-datepicker` - 預計宴客日期區間（起迄）
- `ejs-datepicker` - 賞廳日期時間
- `ejs-textbox` - 賞廳業務

**特殊邏輯**:
- 「初洽業務」變更時，自動帶入「賞廳業務」（但允許再次修改）

#### 5. InquirySupplementInfo.vue

**職責**: 輔助資訊區塊

**Syncfusion 元件使用**:
- `ejs-multiselect` - 已看同業場館、決定宴客場地主因、下訂同業場館、未下定原因
- `ejs-textbox` (multiline) - 聯絡備註

#### 6. InquiryOrderDetailsGrid.vue

**職責**: 活動明細列表（唯讀顯示）

**Syncfusion Grid 配置**:
```vue
<template>
  <div class="details-grid-container">
    <div class="toolbar">
      <button @click="handleAdd">
        <span class="icon">+</span> 新增
      </button>
    </div>

    <ejs-grid
      :dataSource="store.inquiryOrderDetails"
      :allowPaging="true"
      :pageSettings="{ pageSize: 20 }"
      :allowSorting="true"
    >
      <e-columns>
        <e-column field="mainVenue" headerText="預計主場地" width="120"></e-column>
        <e-column field="subVenue" headerText="預計子場地" width="120"></e-column>
        <e-column field="usageDate" headerText="使用日期" width="120" type="date" format="yyyy/MM/dd"></e-column>
        <e-column field="startTime" headerText="開始時間" width="100"></e-column>
        <e-column field="endTime" headerText="結束時間" width="100"></e-column>
        <e-column field="activityCategory" headerText="活動類別" width="100"></e-column>
        <e-column field="activitySubject" headerText="活動主旨" width="150"></e-column>
        <e-column field="tableLayout" headerText="桌圖" width="100"></e-column>
        <e-column field="equipmentNeeds" headerText="預計設備需求" width="150"></e-column>
        <e-column field="reservedTables" headerText="預訂桌數" width="100" textAlign="Right"></e-column>
        <e-column field="reservedPeople" headerText="預訂人數" width="100" textAlign="Right"></e-column>
        <e-column field="remarks" headerText="備註" width="150"></e-column>
        <e-column field="modifiedBy" headerText="修改者" width="100"></e-column>
        <e-column field="modifiedDate" headerText="修改日期" width="120" type="date" format="yyyy/MM/dd"></e-column>
        <e-column field="createdBy" headerText="新增者" width="100"></e-column>
        <e-column field="createdDate" headerText="新增日期" width="120" type="date" format="yyyy/MM/dd"></e-column>
        <e-column headerText="操作" width="100" :template="actionTemplate"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup lang="ts">
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-grids'
import { useInquiryOrderStore } from '../store/inquiry-order.store'

const store = useInquiryOrderStore()

const actionTemplate = () => {
  return {
    template: `<button @click="handleEdit">編輯</button>`
  }
}

const handleAdd = () => {
  navigateTo('/inquiry-order/details/new')
}

const handleEdit = (id: string) => {
  navigateTo(`/inquiry-order/details/${id}`)
}
</script>
```

**空資料處理**:
```vue
<div v-if="store.inquiryOrderDetails.length === 0" class="empty-state">
  <p>無任何資料</p>
  <button @click="handleAdd">新增第一筆活動明細</button>
</div>
```

#### 7. InquiryOrderDetailEditPage.vue

**職責**: 活動明細編輯頁（新增 / 編輯共用）

**Props**: 無（從 URL params 讀取 detail ID）

**Syncfusion 元件使用**:
- `ejs-dropdownlist` - 預計主場地、預計子場地、活動類別、桌圖
- `ejs-datepicker` - 使用日期
- `ejs-timepicker` - 開始時間、結束時間
- `ejs-textbox` - 活動主旨、預計設備需求、預訂桌數、預訂人數
- `ejs-textbox` (multiline) - 備註

**驗證規則**:
- 使用日期必須在「預計宴客日期區間」內
- 結束時間必須晚於開始時間

### Composables 設計

#### useInquiryOrder.ts

**職責**: 封裝初洽單主檔的業務邏輯

```typescript
// app/features/inquiry-order/composables/useInquiryOrder.ts

import { computed } from 'vue'
import { useInquiryOrderStore } from '../store/inquiry-order.store'
import type { InquiryOrder } from '../types/inquiry-order.types'

export function useInquiryOrder() {
  const store = useInquiryOrderStore()

  // State
  const inquiryOrder = computed(() => store.inquiryOrder)
  const isLoading = computed(() => store.isLoading)
  const errors = computed(() => store.errors)

  // Computed
  const isEditMode = computed(() => !!inquiryOrder.value.id)
  const canConvert = computed(() =>
    isEditMode.value && inquiryOrder.value.status === '初洽中'
  )

  // Methods
  async function loadInquiryOrder(id: string) {
    store.isLoading = true
    try {
      // 模擬 API 呼叫
      const data = await mockApi.getInquiryOrder(id)
      store.setInquiryOrder(data)
    } catch (error) {
      store.errors = ['載入初洽單失敗']
    } finally {
      store.isLoading = false
    }
  }

  async function saveInquiryOrder() {
    // 1. 驗證
    if (!validateInquiryOrder()) {
      return false
    }

    // 2. 設定自動欄位（前端產生）
    if (!isEditMode.value) {
      store.inquiryOrder.createdBy = getCurrentUser()
      store.inquiryOrder.createdDate = new Date()
    }

    // 3. 儲存
    store.isLoading = true
    try {
      const data = await mockApi.saveInquiryOrder(store.inquiryOrder)
      store.setInquiryOrder(data) // 更新後端產生的欄位
      return true
    } catch (error) {
      store.errors = ['儲存失敗']
      return false
    } finally {
      store.isLoading = false
    }
  }

  function validateInquiryOrder(): boolean {
    const errors: string[] = []

    // 必填欄位驗證
    if (!inquiryOrder.value.status) errors.push('請選擇初洽狀態')
    if (!inquiryOrder.value.inquireDate) errors.push('請選擇初洽日')
    if (!inquiryOrder.value.inquireContactPerson) errors.push('請輸入初洽業務')

    // Email 驗證
    if (inquiryOrder.value.contactEmail && !isValidEmail(inquiryOrder.value.contactEmail)) {
      errors.push('請輸入有效的電子郵件地址')
    }

    // 手機驗證
    if (inquiryOrder.value.contactPhone && !isValidPhone(inquiryOrder.value.contactPhone)) {
      errors.push('請輸入有效的手機號碼')
    }

    store.errors = errors
    return errors.length === 0
  }

  async function copyInquiryOrder() {
    const copied = { ...store.inquiryOrder }

    // 重置特定欄位
    copied.id = undefined
    copied.inquiryOrderNo = ''
    copied.status = '初洽中' // 預設狀態
    copied.reservationNumber = ''
    copied.inquireDate = new Date()

    // 清空不複製的欄位
    copied.customerName = ''
    copied.contactPerson = ''
    copied.contactPhone = ''
    copied.contactEmail = ''
    copied.leadSource = []

    // 前端產生欄位
    copied.createdBy = getCurrentUser()
    copied.createdDate = new Date()

    store.setInquiryOrder(copied)
    navigateTo('/inquiry-order/new')
  }

  function handleInquireContactPersonChange() {
    // 自動帶入賞廳業務
    if (inquiryOrder.value.inquireContactPerson && !inquiryOrder.value.venueVisitSales) {
      store.inquiryOrder.venueVisitSales = inquiryOrder.value.inquireContactPerson
    }
  }

  // Auto-save draft to LocalStorage
  function autoSaveDraft() {
    localStorage.setItem('inquiry-order-draft', JSON.stringify(store.inquiryOrder))
  }

  function loadDraft() {
    const draft = localStorage.getItem('inquiry-order-draft')
    if (draft) {
      store.setInquiryOrder(JSON.parse(draft))
    }
  }

  function clearDraft() {
    localStorage.removeItem('inquiry-order-draft')
  }

  return {
    // State
    inquiryOrder,
    isLoading,
    errors,
    // Computed
    isEditMode,
    canConvert,
    // Methods
    loadInquiryOrder,
    saveInquiryOrder,
    copyInquiryOrder,
    handleInquireContactPersonChange,
    autoSaveDraft,
    loadDraft,
    clearDraft
  }
}

// Helper functions
function getCurrentUser(): string {
  // UI 原型階段，返回固定值
  return 'Demo User'
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone: string): boolean {
  return /^09\d{8}$/.test(phone)
}
```

#### useInquiryOrderDetails.ts

**職責**: 封裝活動明細列表的業務邏輯

```typescript
// app/features/inquiry-order/composables/useInquiryOrderDetails.ts

import { computed } from 'vue'
import { useInquiryOrderStore } from '../store/inquiry-order.store'
import type { InquiryOrderDetail } from '../types/inquiry-order.types'

export function useInquiryOrderDetails() {
  const store = useInquiryOrderStore()

  // State
  const details = computed(() => store.inquiryOrderDetails)
  const currentDetail = computed(() => store.currentDetail)

  // Methods
  function addDetail() {
    const newDetail: InquiryOrderDetail = {
      id: generateTempId(),
      mainVenue: '',
      subVenue: '',
      usageDate: null,
      startTime: '',
      endTime: '',
      activityCategory: '',
      activitySubject: '',
      tableLayout: '',
      equipmentNeeds: '',
      reservedTables: 0,
      reservedPeople: 0,
      remarks: '',
      createdBy: getCurrentUser(),
      createdDate: new Date(),
      modifiedBy: '',
      modifiedDate: null
    }

    store.setCurrentDetail(newDetail)
  }

  function editDetail(id: string) {
    const detail = details.value.find(d => d.id === id)
    if (detail) {
      store.setCurrentDetail({ ...detail })
    }
  }

  function saveDetail() {
    if (!validateDetail()) {
      return false
    }

    if (currentDetail.value.id.startsWith('temp-')) {
      // 新增
      store.addDetail(currentDetail.value)
    } else {
      // 編輯
      store.updateDetail(currentDetail.value)
    }

    return true
  }

  function deleteDetail(id: string) {
    if (confirm('確定要刪除此活動明細嗎？')) {
      store.deleteDetail(id)
    }
  }

  function validateDetail(): boolean {
    const errors: string[] = []
    const detail = currentDetail.value
    const inquiryOrder = store.inquiryOrder

    // 必填驗證
    if (!detail.mainVenue) errors.push('請選擇預計主場地')
    if (!detail.usageDate) errors.push('請選擇使用日期')
    if (!detail.startTime) errors.push('請輸入開始時間')
    if (!detail.endTime) errors.push('請輸入結束時間')

    // 日期範圍驗證
    if (detail.usageDate && inquiryOrder.expectedBanquetDateStart && inquiryOrder.expectedBanquetDateEnd) {
      const usageDate = new Date(detail.usageDate)
      const startDate = new Date(inquiryOrder.expectedBanquetDateStart)
      const endDate = new Date(inquiryOrder.expectedBanquetDateEnd)

      if (usageDate < startDate || usageDate > endDate) {
        errors.push('使用日期必須在預計宴客日期區間內')
      }
    }

    // 時間驗證
    if (detail.startTime && detail.endTime && detail.startTime >= detail.endTime) {
      errors.push('結束時間必須晚於開始時間')
    }

    store.errors = errors
    return errors.length === 0
  }

  return {
    // State
    details,
    currentDetail,
    // Methods
    addDetail,
    editDetail,
    saveDetail,
    deleteDetail
  }
}

// Helper functions
function generateTempId(): string {
  return `temp-${Date.now()}`
}

function getCurrentUser(): string {
  return 'Demo User'
}
```

### Pinia Store 設計

```typescript
// app/features/inquiry-order/store/inquiry-order.store.ts

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { InquiryOrder, InquiryOrderDetail } from '../types/inquiry-order.types'

export const useInquiryOrderStore = defineStore('inquiry-order', () => {
  // State
  const inquiryOrder = ref<InquiryOrder>({
    id: undefined,
    inquiryOrderNo: '',
    status: '',
    inquireDate: new Date(),
    inquireContactPerson: '',
    relatedProject: '',
    reservationNumber: '',
    manualNumber: '',
    leadSource: [],
    customerName: '',
    contactPerson: '',
    contactPhone: '',
    contactEmail: '',
    city: '',
    district: '',
    category: '',
    banquetName: '',
    budgetRange: '',
    expectedBanquetDateStart: null,
    expectedBanquetDateEnd: null,
    venueVisitDateTime: null,
    venueVisitSales: '',
    visitedCompetitorVenue: [],
    venueDecisionFactor: [],
    bookedCompetitorVenue: [],
    rejectionReason: [],
    contactNotes: '',
    createdBy: '',
    createdDate: null,
    modifiedBy: '',
    modifiedDate: null
  })

  const inquiryOrderDetails = ref<InquiryOrderDetail[]>([])
  const currentDetail = ref<InquiryOrderDetail | null>(null)
  const isLoading = ref(false)
  const errors = ref<string[]>([])

  // Getters
  const hasDetails = computed(() => inquiryOrderDetails.value.length > 0)
  const isValid = computed(() => errors.value.length === 0)

  // Actions
  function setInquiryOrder(data: InquiryOrder) {
    inquiryOrder.value = data
  }

  function setInquiryOrderDetails(data: InquiryOrderDetail[]) {
    inquiryOrderDetails.value = data
  }

  function setCurrentDetail(data: InquiryOrderDetail | null) {
    currentDetail.value = data
  }

  function addDetail(detail: InquiryOrderDetail) {
    inquiryOrderDetails.value.push(detail)
  }

  function updateDetail(detail: InquiryOrderDetail) {
    const index = inquiryOrderDetails.value.findIndex(d => d.id === detail.id)
    if (index !== -1) {
      inquiryOrderDetails.value[index] = detail
    }
  }

  function deleteDetail(id: string) {
    inquiryOrderDetails.value = inquiryOrderDetails.value.filter(d => d.id !== id)
  }

  function resetStore() {
    inquiryOrder.value = {} as InquiryOrder
    inquiryOrderDetails.value = []
    currentDetail.value = null
    errors.value = []
  }

  return {
    // State
    inquiryOrder,
    inquiryOrderDetails,
    currentDetail,
    isLoading,
    errors,
    // Getters
    hasDetails,
    isValid,
    // Actions
    setInquiryOrder,
    setInquiryOrderDetails,
    setCurrentDetail,
    addDetail,
    updateDetail,
    deleteDetail,
    resetStore
  }
})
```

## Data Models

### TypeScript 介面定義

```typescript
// app/features/inquiry-order/types/inquiry-order.types.ts

/**
 * 初洽單主檔
 */
export interface InquiryOrder {
  // 基本資料
  id?: string
  inquiryOrderNo: string                    // 初洽單號（後端產生）
  status: string                            // 初洽狀態（必填）
  inquireDate: Date                         // 初洽日（必填，預設今天）
  inquireContactPerson: string              // 初洽業務（必填）
  relatedProject: string                    // 相關專案（唯讀）
  reservationNumber: string                 // 訂席單號（唯讀）
  manualNumber: string                      // 手動單號
  leadSource: string[]                      // 初洽訂席來源（多選）

  // 客戶資料
  customerName: string                      // 客戶姓名
  contactPerson: string                     // 聯絡人
  contactPhone: string                      // 聯絡手機
  contactEmail: string                      // 聯絡 E-mail
  city: string                              // 城市
  district: string                          // 鄉鎮市區

  // 宴會資料
  category: string                          // 類別
  banquetName: string                       // 宴名
  budgetRange: string                       // 預算範圍
  expectedBanquetDateStart: Date | null     // 預計宴客日期（起）
  expectedBanquetDateEnd: Date | null       // 預計宴客日期（迄）
  venueVisitDateTime: Date | null           // 賞廳日期時間
  venueVisitSales: string                   // 賞廳業務

  // 輔助資訊
  visitedCompetitorVenue: string[]          // 已看同業場館（多選）
  venueDecisionFactor: string[]             // 決定宴客場地主因（多選）
  bookedCompetitorVenue: string[]           // 下訂同業場館（多選）
  rejectionReason: string[]                 // 未下定原因（多選）
  contactNotes: string                      // 聯絡備註

  // 系統欄位
  createdBy: string                         // 新增者（前端產生）
  createdDate: Date | null                  // 新增日期（前端產生）
  modifiedBy: string                        // 修改者（後端產生）
  modifiedDate: Date | null                 // 修改日期（後端產生）
}

/**
 * 活動明細
 */
export interface InquiryOrderDetail {
  id: string
  inquiryOrderId?: string                   // 所屬初洽單 ID
  mainVenue: string                         // 預計主場地（必填）
  subVenue: string                          // 預計子場地
  usageDate: Date | null                    // 使用日期（必填）
  startTime: string                         // 開始時間（必填）
  endTime: string                           // 結束時間（必填）
  activityCategory: string                  // 活動類別
  activitySubject: string                   // 活動主旨
  tableLayout: string                       // 桌圖
  equipmentNeeds: string                    // 預計設備需求
  reservedTables: number                    // 預訂桌數
  reservedPeople: number                    // 預訂人數
  remarks: string                           // 備註

  // 系統欄位
  createdBy: string                         // 新增者（前端產生）
  createdDate: Date                         // 新增日期（前端產生）
  modifiedBy: string                        // 修改者（後端產生）
  modifiedDate: Date | null                 // 修改日期（後端產生）
}

/**
 * 下拉選單選項
 */
export interface DropdownOption {
  id: string | number
  name: string
}

/**
 * API 回應格式
 */
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  errors?: string[]
}

/**
 * 儲存初洽單請求
 */
export interface SaveInquiryOrderRequest {
  master: InquiryOrder
  details: InquiryOrderDetail[]
}

/**
 * 儲存初洽單回應
 */
export interface SaveInquiryOrderResponse {
  master: InquiryOrder                      // 包含後端產生的欄位
  details: InquiryOrderDetail[]
}
```

### Mock Data 結構

```typescript
// app/features/inquiry-order/mock/inquiry-order.mock.ts

import type { DropdownOption, InquiryOrder, InquiryOrderDetail } from '../types/inquiry-order.types'

/**
 * 初洽狀態選項
 */
export const MOCK_INQUIRY_STATUS: DropdownOption[] = [
  { id: 1, name: '初洽中' },
  { id: 2, name: '已轉訂' },
  { id: 3, name: '已取消' },
  { id: 4, name: '未成交' }
]

/**
 * 初洽訂席來源選項
 */
export const MOCK_LEAD_SOURCE: DropdownOption[] = [
  { id: 1, name: '電話洽詢' },
  { id: 2, name: '網路預約' },
  { id: 3, name: '現場洽詢' },
  { id: 4, name: '轉介紹' },
  { id: 5, name: '展覽' },
  { id: 6, name: '廣告' }
]

/**
 * 類別選項
 */
export const MOCK_CATEGORY: DropdownOption[] = [
  { id: 1, name: '婚宴' },
  { id: 2, name: '尾牙' },
  { id: 3, name: '春酒' },
  { id: 4, name: '會議' },
  { id: 5, name: '活動' }
]

/**
 * 已看同業場館選項
 */
export const MOCK_COMPETITOR_VENUES: DropdownOption[] = [
  { id: 1, name: 'A 飯店' },
  { id: 2, name: 'B 餐廳' },
  { id: 3, name: 'C 會館' },
  { id: 4, name: 'D 宴會廳' }
]

/**
 * 決定宴客場地主因選項
 */
export const MOCK_DECISION_FACTORS: DropdownOption[] = [
  { id: 1, name: '價格' },
  { id: 2, name: '地點' },
  { id: 3, name: '服務' },
  { id: 4, name: '菜色' },
  { id: 5, name: '場地' }
]

/**
 * 下訂同業場館選項
 */
export const MOCK_BOOKED_VENUES: DropdownOption[] = [
  { id: 1, name: 'A 飯店' },
  { id: 2, name: 'B 餐廳' },
  { id: 3, name: 'C 會館' }
]

/**
 * 未下定原因選項
 */
export const MOCK_REJECTION_REASONS: DropdownOption[] = [
  { id: 1, name: '價格太高' },
  { id: 2, name: '日期不合' },
  { id: 3, name: '場地不合' },
  { id: 4, name: '菜色不合' },
  { id: 5, name: '其他' }
]

/**
 * 預計主場地選項
 */
export const MOCK_MAIN_VENUES: DropdownOption[] = [
  { id: 1, name: '一樓宴會廳' },
  { id: 2, name: '二樓宴會廳' },
  { id: 3, name: '三樓宴會廳' }
]

/**
 * 預計子場地選項
 */
export const MOCK_SUB_VENUES: DropdownOption[] = [
  { id: 1, name: 'A 廳' },
  { id: 2, name: 'B 廳' },
  { id: 3, name: 'C 廳' }
]

/**
 * 活動類別選項
 */
export const MOCK_ACTIVITY_CATEGORIES: DropdownOption[] = [
  { id: 1, name: '文定' },
  { id: 2, name: '迎娶' },
  { id: 3, name: '宴客' },
  { id: 4, name: '會議' }
]

/**
 * 桌圖選項
 */
export const MOCK_TABLE_LAYOUTS: DropdownOption[] = [
  { id: 1, name: '圓桌 10 人' },
  { id: 2, name: '圓桌 12 人' },
  { id: 3, name: '方桌 8 人' }
]

/**
 * Mock API - 取得初洽單
 */
export async function mockGetInquiryOrder(id: string): Promise<InquiryOrder> {
  // 模擬 API 延遲
  await new Promise(resolve => setTimeout(resolve, 500))

  return {
    id,
    inquiryOrderNo: 'INQ20250101001',
    status: '初洽中',
    inquireDate: new Date('2025-01-01'),
    inquireContactPerson: 'Demo User',
    relatedProject: '',
    reservationNumber: '',
    manualNumber: '',
    leadSource: ['電話洽詢', '網路預約'],
    customerName: '王小明',
    contactPerson: '王小明',
    contactPhone: '0912345678',
    contactEmail: 'test@example.com',
    city: '台北市',
    district: '中正區',
    category: '婚宴',
    banquetName: '世紀婚禮',
    budgetRange: '100-150 萬',
    expectedBanquetDateStart: new Date('2025-06-01'),
    expectedBanquetDateEnd: new Date('2025-06-30'),
    venueVisitDateTime: new Date('2025-01-15T14:00:00'),
    venueVisitSales: 'Demo User',
    visitedCompetitorVenue: ['A 飯店'],
    venueDecisionFactor: ['價格', '地點'],
    bookedCompetitorVenue: [],
    rejectionReason: [],
    contactNotes: '客戶希望場地寬敞明亮',
    createdBy: 'Demo User',
    createdDate: new Date('2025-01-01'),
    modifiedBy: 'System',
    modifiedDate: new Date('2025-01-02')
  }
}

/**
 * Mock API - 取得活動明細列表
 */
export async function mockGetInquiryOrderDetails(inquiryOrderId: string): Promise<InquiryOrderDetail[]> {
  await new Promise(resolve => setTimeout(resolve, 300))

  return [
    {
      id: '1',
      inquiryOrderId,
      mainVenue: '一樓宴會廳',
      subVenue: 'A 廳',
      usageDate: new Date('2025-06-15'),
      startTime: '18:00',
      endTime: '22:00',
      activityCategory: '宴客',
      activitySubject: '晚宴',
      tableLayout: '圓桌 10 人',
      equipmentNeeds: '投影機、音響',
      reservedTables: 30,
      reservedPeople: 300,
      remarks: '',
      createdBy: 'Demo User',
      createdDate: new Date('2025-01-01'),
      modifiedBy: 'System',
      modifiedDate: new Date('2025-01-02')
    }
  ]
}

/**
 * Mock API - 儲存初洽單
 */
export async function mockSaveInquiryOrder(data: InquiryOrder): Promise<InquiryOrder> {
  await new Promise(resolve => setTimeout(resolve, 800))

  // 模擬後端產生欄位
  if (!data.id) {
    data.id = `temp-${Date.now()}`
    data.inquiryOrderNo = `INQ${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${Math.floor(Math.random() * 1000)}`
  }

  data.modifiedBy = 'System'
  data.modifiedDate = new Date()

  return data
}
```

## Error Handling

### 錯誤分類

**1. 表單驗證錯誤**
- 必填欄位未填
- 格式錯誤（Email, Phone）
- 日期範圍錯誤

**處理方式**:
- 前端即時驗證
- 紅色錯誤標記在欄位旁
- 彙總錯誤訊息顯示在表單頂部

**2. API 錯誤（模擬）**
- 網路錯誤
- 伺服器錯誤
- 資料衝突

**處理方式**:
- Try-catch 包裝所有 API 呼叫
- 顯示 Toast 通知
- 提供重試按鈕

**3. 系統錯誤**
- JavaScript 執行錯誤
- 元件渲染錯誤

**處理方式**:
- Vue ErrorBoundary
- 全域錯誤處理器
- 錯誤日誌記錄

### 錯誤處理實作

```typescript
// app/shared/composables/useErrorHandler.ts

import { ref } from 'vue'

export function useErrorHandler() {
  const errors = ref<string[]>([])

  function handleError(error: unknown, context: string = '') {
    console.error(`[Error] ${context}:`, error)

    let message = '發生未知錯誤'

    if (error instanceof Error) {
      message = error.message
    } else if (typeof error === 'string') {
      message = error
    }

    errors.value.push(message)

    // 顯示 Toast 通知（可使用 Syncfusion Notification 元件）
    showToast(message, 'error')
  }

  function clearErrors() {
    errors.value = []
  }

  return {
    errors,
    handleError,
    clearErrors
  }
}

function showToast(message: string, type: 'success' | 'error' | 'warning') {
  // 使用 Syncfusion Toast 或其他通知元件
  console.log(`[${type.toUpperCase()}] ${message}`)
}
```

```vue
<!-- 元件中使用 -->
<script setup lang="ts">
import { useErrorHandler } from '~/shared/composables/useErrorHandler'

const { errors, handleError, clearErrors } = useErrorHandler()

async function handleSave() {
  clearErrors()

  try {
    await saveInquiryOrder()
  } catch (error) {
    handleError(error, 'Save Inquiry Order')
  }
}
</script>

<template>
  <div>
    <!-- 錯誤訊息顯示 -->
    <div v-if="errors.length > 0" class="error-banner">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <!-- 表單內容 -->
    <form @submit.prevent="handleSave">
      <!-- ... -->
    </form>
  </div>
</template>
```

### 網路錯誤處理

```typescript
// app/features/inquiry-order/api/inquiry-order.api.ts

import type { InquiryOrder, ApiResponse } from '../types/inquiry-order.types'

export const inquiryOrderApi = {
  async getInquiryOrder(id: string): Promise<InquiryOrder> {
    try {
      // UI 原型階段使用 Mock API
      const data = await mockGetInquiryOrder(id)
      return data
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('網路連線失敗，請檢查您的網路連線')
      }
      throw new Error('載入初洽單失敗')
    }
  },

  async saveInquiryOrder(data: InquiryOrder): Promise<InquiryOrder> {
    try {
      const response = await mockSaveInquiryOrder(data)
      return response
    } catch (error) {
      throw new Error('儲存初洽單失敗，請稍後再試')
    }
  }
}
```

## Testing Strategy

### 測試金字塔

```
         E2E Tests (10%)
    ┌───────────────────────┐
    │  Playwright MCP       │
    │  視覺回歸測試         │
    └───────────────────────┘
            ▲
            │
    Component Tests (30%)
    ┌───────────────────────┐
    │  Vitest + VTU         │
    │  元件互動測試         │
    └───────────────────────┘
            ▲
            │
    Unit Tests (60%)
    ┌───────────────────────┐
    │  Vitest               │
    │  Composables, Utils   │
    └───────────────────────┘
```

### 單元測試 (Unit Tests)

**測試對象**: Composables, Utils, Store

**工具**: Vitest

**範例**:
```typescript
// app/features/inquiry-order/composables/__tests__/useInquiryOrder.test.ts

import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useInquiryOrder } from '../useInquiryOrder'

describe('useInquiryOrder', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('應該正確初始化', () => {
    const { inquiryOrder, isEditMode } = useInquiryOrder()

    expect(inquiryOrder.value).toBeDefined()
    expect(isEditMode.value).toBe(false)
  })

  it('應該驗證必填欄位', () => {
    const { saveInquiryOrder } = useInquiryOrder()

    const result = saveInquiryOrder()

    expect(result).toBe(false)
    // 驗證 errors 包含必填欄位錯誤訊息
  })

  it('應該驗證 Email 格式', () => {
    const { inquiryOrder, saveInquiryOrder } = useInquiryOrder()

    inquiryOrder.value.contactEmail = 'invalid-email'
    const result = saveInquiryOrder()

    expect(result).toBe(false)
  })

  it('應該正確處理複製功能', () => {
    const { inquiryOrder, copyInquiryOrder } = useInquiryOrder()

    inquiryOrder.value.id = '123'
    inquiryOrder.value.inquiryOrderNo = 'INQ001'
    inquiryOrder.value.customerName = 'Test'

    copyInquiryOrder()

    expect(inquiryOrder.value.id).toBeUndefined()
    expect(inquiryOrder.value.inquiryOrderNo).toBe('')
    expect(inquiryOrder.value.customerName).toBe('') // 不複製
  })
})
```

### 元件測試 (Component Tests)

**測試對象**: Vue 元件

**工具**: Vitest + Vue Test Utils

**範例**:
```typescript
// app/features/inquiry-order/components/__tests__/InquiryBasicInfo.test.ts

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import InquiryBasicInfo from '../InquiryBasicInfo.vue'

describe('InquiryBasicInfo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('應該正確渲染必填欄位標記', () => {
    const wrapper = mount(InquiryBasicInfo)

    // 查找必填欄位標記（*）
    expect(wrapper.text()).toContain('初洽狀態 *')
    expect(wrapper.text()).toContain('初洽日 *')
  })

  it('應該正確綁定 v-model', async () => {
    const wrapper = mount(InquiryBasicInfo)

    // 模擬使用者輸入
    const input = wrapper.find('[data-testid="manual-number"]')
    await input.setValue('TEST001')

    // 驗證 store 更新
    // expect(store.inquiryOrder.manualNumber).toBe('TEST001')
  })
})
```

### E2E 測試 (End-to-End Tests)

**測試對象**: 完整使用者流程

**工具**: Playwright MCP

**測試場景**:

1. **新增初洽單完整流程**
   ```typescript
   test('應該能完成新增初洽單流程', async ({ page }) => {
     // 1. 進入新增頁面
     await page.goto('/inquiry-order/new')

     // 2. 填寫主檔資料
     await page.selectOption('[data-testid="inquiry-status"]', '初洽中')
     await page.fill('[data-testid="inquire-contact-person"]', 'Demo User')

     // 3. 切換到活動明細 Tab
     await page.click('text=預計活動明細')

     // 4. 新增活動明細
     await page.click('text=新增')
     await page.selectOption('[data-testid="main-venue"]', '一樓宴會廳')
     await page.fill('[data-testid="usage-date"]', '2025-06-15')
     await page.click('text=儲存')

     // 5. 儲存初洽單
     await page.click('text=儲存')

     // 6. 驗證成功訊息
     await expect(page.locator('text=儲存成功')).toBeVisible()
   })
   ```

2. **複製初洽單流程**
   ```typescript
   test('應該能複製既有初洽單', async ({ page }) => {
     // 1. 開啟既有初洽單
     await page.goto('/inquiry-order/123')

     // 2. 點擊複製按鈕
     await page.click('text=複製')

     // 3. 驗證特定欄位已清空
     await expect(page.locator('[data-testid="inquiry-order-no"]')).toHaveValue('')
     await expect(page.locator('[data-testid="customer-name"]')).toHaveValue('')

     // 4. 驗證初洽日更新為今天
     const today = new Date().toISOString().slice(0, 10)
     await expect(page.locator('[data-testid="inquire-date"]')).toHaveValue(today)
   })
   ```

3. **表單驗證測試**
   ```typescript
   test('應該顯示必填欄位錯誤', async ({ page }) => {
     await page.goto('/inquiry-order/new')

     // 直接點擊儲存（未填寫必填欄位）
     await page.click('text=儲存')

     // 驗證錯誤訊息
     await expect(page.locator('text=請選擇初洽狀態')).toBeVisible()
     await expect(page.locator('text=請輸入初洽業務')).toBeVisible()
   })
   ```

### 視覺回歸測試 (Visual Regression Tests)

**工具**: Playwright MCP

**測試策略**:

1. **每個元件的基線截圖**
   ```typescript
   test('InquiryBasicInfo 視覺回歸', async ({ page }) => {
     await page.goto('/inquiry-order/new')

     // 截圖基本資料區塊
     const basicInfo = page.locator('[data-testid="inquiry-basic-info"]')
     await expect(basicInfo).toHaveScreenshot('inquiry-basic-info.png')
   })
   ```

2. **不同狀態的截圖**
   ```typescript
   test('表單驗證錯誤狀態視覺回歸', async ({ page }) => {
     await page.goto('/inquiry-order/new')
     await page.click('text=儲存') // 觸發驗證錯誤

     await expect(page).toHaveScreenshot('form-validation-errors.png')
   })
   ```

3. **響應式設計測試**
   ```typescript
   test('手機版視覺回歸', async ({ page }) => {
     await page.setViewportSize({ width: 375, height: 667 })
     await page.goto('/inquiry-order/new')

     await expect(page).toHaveScreenshot('mobile-inquiry-form.png')
   })
   ```

### 測試覆蓋率目標

| 類型 | 目標覆蓋率 | 檢查工具 |
|-----|----------|---------|
| **Composables** | > 80% | Vitest coverage |
| **Utils** | > 90% | Vitest coverage |
| **Components** | > 70% | Vitest coverage |
| **E2E 關鍵流程** | 100% | Playwright tests |

### CI/CD 整合

**測試執行順序**:
```bash
# 1. 單元測試 (快速)
yarn test:unit

# 2. 元件測試
yarn test:component

# 3. E2E 測試 (耗時)
yarn test:e2e

# 4. 視覺回歸測試
yarn test:visual
```

**失敗處理**:
- 單元測試失敗 → 阻擋 commit
- E2E 測試失敗 → 阻擋 merge
- 視覺回歸失敗 → 需人工審核

## Implementation Plan

### Phase 1: 基礎設施 (1-2 days)

**任務**:
1. 建立 feature 目錄結構
2. 定義 TypeScript 介面
3. 建立 Mock Data
4. 設定 Pinia Store
5. 建立 Barrel Exports

### Phase 2: 主檔表單 (3-4 days)

**任務**:
1. 從 Figma 匯出主檔表單設計
2. 實作 InquiryOrderFormPage (容器)
3. 實作 4 個資料區塊元件
4. 整合 Syncfusion 元件
5. 實作表單驗證
6. 實作自動欄位邏輯
7. Playwright 視覺測試

### Phase 3: 活動明細 (2-3 days)

**任務**:
1. 從 Figma 匯出活動明細設計
2. 實作 InquiryOrderDetailsGrid (唯讀列表)
3. 實作 InquiryOrderDetailEditPage (編輯頁)
4. 整合 Syncfusion Grid
5. 實作新增/編輯/刪除邏輯
6. 實作日期範圍驗證
7. Playwright 視覺測試

### Phase 4: 整合與優化 (1-2 days)

**任務**:
1. Tab 切換邏輯
2. 儲存功能整合
3. 複製功能
4. LocalStorage 自動儲存
5. 錯誤處理完善
6. 效能優化
7. 完整 E2E 測試

### Phase 5: 測試與文檔 (1 day)

**任務**:
1. 單元測試補充
2. 元件測試補充
3. E2E 測試覆蓋
4. 視覺回歸測試基線
5. Feature README 文檔
6. API 文檔（JSDoc）

---

## Appendix

### Syncfusion 元件使用參考

**Tab**:
```vue
<ejs-tab>
  <e-tabitems>
    <e-tabitem :header="{ text: '主檔' }">
      <template v-slot:content>
        <div>主檔內容</div>
      </template>
    </e-tabitem>
    <e-tabitem :header="{ text: '預計活動明細' }">
      <template v-slot:content>
        <div>活動明細內容</div>
      </template>
    </e-tabitem>
  </e-tabitems>
</ejs-tab>

<!-- Import -->
<script setup>
import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from '@syncfusion/ej2-vue-navigations'
</script>
```

**Button**:
```vue
<!-- 基本按鈕 -->
<ejs-button :content="'儲存'" @click="handleSave" />

<!-- Primary 按鈕 -->
<ejs-button :content="'確認'" :isPrimary="true" @click="handleConfirm" />

<!-- 帶圖示的按鈕 -->
<ejs-button :content="'新增'" :iconCss="'e-icons e-plus'" @click="handleAdd" />

<!-- Import -->
<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
</script>
```

**DatePicker**:
```vue
<ejs-datepicker
  v-model="store.inquiryOrder.inquireDate"
  :value="new Date()"
  format="yyyy/MM/dd"
  :readonly="isEditMode"
/>
```

**DropDownList**:
```vue
<ejs-dropdownlist
  v-model="store.inquiryOrder.status"
  :dataSource="MOCK_INQUIRY_STATUS"
  :fields="{ text: 'name', value: 'id' }"
  placeholder="請選擇"
/>
```

**MultiSelect**:
```vue
<ejs-multiselect
  v-model="store.inquiryOrder.leadSource"
  :dataSource="MOCK_LEAD_SOURCE"
  :fields="{ text: 'name', value: 'id' }"
  placeholder="請選擇（可多選）"
  mode="CheckBox"
/>
```

**Grid**:
```vue
<ejs-grid
  :dataSource="store.inquiryOrderDetails"
  :allowPaging="true"
  :pageSettings="{ pageSize: 20 }"
  :allowSorting="true"
>
  <e-columns>
    <e-column field="mainVenue" headerText="預計主場地" width="120"></e-column>
    <!-- 其他欄位 -->
  </e-columns>
</ejs-grid>
```

### Figma 設計連結

- **主檔表單**: node-id=6146-113071
- **活動明細列表**: node-id=6202-297366

### 依賴套件

```json
{
  "dependencies": {
    "@syncfusion/ej2-vue-grids": "^26.x.x",
    "@syncfusion/ej2-vue-calendars": "^26.x.x",
    "@syncfusion/ej2-vue-dropdowns": "^26.x.x",
    "@syncfusion/ej2-vue-inputs": "^26.x.x",
    "@syncfusion/ej2-vue-navigations": "^26.x.x",
    "@syncfusion/ej2-vue-buttons": "^26.x.x",
    "pinia": "^2.x.x"
  }
}
```

---

**設計文檔版本**: 1.0
**最後更新**: 2025-01-XX
**作者**: Claude Code with Linus Torvalds Perspective
