# 初洽單管理 (Inquiry Order Management)

## Overview 功能概述

初洽單管理功能提供宴會場館業務人員管理潛在客戶初次洽談資料的完整解決方案。此功能包含主檔資料輸入、預計活動明細管理、複製初洽單、轉訂席單等核心業務流程。

### 主要功能
- ✅ **主檔表單**：43 個欄位，分為 4 個區塊（基本資料、客戶資料、宴會資料、輔助資訊）
- ✅ **活動明細管理**：17 個欄位，支援新增/編輯/刪除活動明細
- ✅ **複製初洽單**：快速複製既有初洽單建立新單
- ✅ **草稿自動儲存**：每 30 秒自動儲存至 LocalStorage，防止資料遺失
- ✅ **表單驗證**：必填欄位、Email、手機格式、日期範圍驗證
- ✅ **Tab 切換狀態保持**：使用 Pinia Store 確保 Tab 切換時資料不遺失
- ✅ **Toast 通知**：友善的成功/錯誤訊息提示
- ✅ **效能優化**：DataGrid 虛擬滾動（資料量 > 20 筆時啟用）

## Public API

### Composables

#### `useInquiryOrder()`
主檔業務邏輯封裝

**Returns:**
```typescript
{
  // State
  inquiryOrder: ComputedRef<InquiryOrder>
  isLoading: ComputedRef<boolean>
  errors: ComputedRef<string[]>

  // Computed
  isEditMode: ComputedRef<boolean>
  canConvert: ComputedRef<boolean>

  // Methods
  loadInquiryOrder: (id: string) => Promise<void>
  saveInquiryOrder: () => Promise<boolean>
  validateInquiryOrder: () => boolean
  copyInquiryOrder: () => Promise<void>
  handleInquireContactPersonChange: () => void
  autoSaveDraft: () => void
  loadDraft: () => void
  clearDraft: () => void
}
```

#### `useInquiryOrderDetails()`
活動明細業務邏輯封裝

**Returns:**
```typescript
{
  // State
  currentDetail: ComputedRef<InquiryOrderDetail | null>

  // Methods
  addDetail: (detail: InquiryOrderDetail) => void
  updateDetail: (detail: InquiryOrderDetail) => void
  deleteDetail: (id: string) => void
  validateDetail: (detail: InquiryOrderDetail) => boolean
}
```

### Store

#### `useInquiryOrderStore()`
Pinia Store，管理初洽單狀態

**State:**
```typescript
{
  inquiryOrder: InquiryOrder
  inquiryOrderDetails: InquiryOrderDetail[]
  currentDetail: InquiryOrderDetail | null
  isLoading: boolean
  errors: string[]
}
```

**Getters:**
```typescript
{
  hasDetails: ComputedRef<boolean>
  isValid: ComputedRef<boolean>
}
```

**Actions:**
```typescript
{
  setInquiryOrder: (data: InquiryOrder) => void
  addDetail: (detail: InquiryOrderDetail) => void
  updateDetail: (detail: InquiryOrderDetail) => void
  deleteDetail: (id: string) => void
  resetStore: () => void
}
```

### Pages

- **`InquiryOrderFormPage.vue`**: 主表單頁面（主檔 + 活動明細 Tab）
- **`InquiryOrderDetailEditPage.vue`**: 活動明細編輯頁面

### Components

- **`InquiryBasicInfo.vue`**: 基本資料區塊（8 個欄位）
- **`InquiryCustomerInfo.vue`**: 客戶資料區塊（6 個欄位）
- **`InquiryBanquetInfo.vue`**: 宴會資料區塊（6 個欄位）
- **`InquirySupplementInfo.vue`**: 輔助資訊區塊（5 個欄位）
- **`InquiryOrderDetailsGrid.vue`**: 活動明細列表（Syncfusion DataGrid）

### Types

```typescript
// 主檔
interface InquiryOrder {
  id?: string
  inquiryOrderNo: string              // 後端產生
  status: string                       // 必填
  inquireDate: Date                    // 必填
  inquireContactPerson: string         // 必填
  // ... 40 more fields
  createdBy: string                    // 前端產生
  createdDate: Date | null             // 前端產生
  modifiedBy: string                   // 後端產生
  modifiedDate: Date | null            // 後端產生
}

// 活動明細
interface InquiryOrderDetail {
  id: string
  mainVenue: string                    // 必填
  usageDate: Date | null               // 必填
  startTime: string                    // 必填
  endTime: string                      // 必填
  // ... 13 fields total
}
```

## Usage Example 使用範例

### 1. 在頁面中使用主檔表單

```vue
<template>
  <InquiryOrderFormPage />
</template>

<script setup lang="ts">
import InquiryOrderFormPage from '~/features/inquiry-order/pages/InquiryOrderFormPage.vue'
</script>
```

### 2. 使用 Composable 管理業務邏輯

```vue
<script setup lang="ts">
import { useInquiryOrder } from '~/features/inquiry-order/composables/useInquiryOrder'

const {
  inquiryOrder,
  isLoading,
  errors,
  isEditMode,
  saveInquiryOrder,
  validateInquiryOrder,
  copyInquiryOrder
} = useInquiryOrder()

// 儲存初洽單
async function handleSave() {
  const success = await saveInquiryOrder()
  if (success) {
    console.log('儲存成功')
  } else {
    console.error('儲存失敗', errors.value)
  }
}

// 複製初洽單
async function handleCopy() {
  await copyInquiryOrder()
  // 自動導航至新增頁面，特定欄位已清空
}
</script>
```

### 3. 直接使用 Store

```vue
<script setup lang="ts">
import { useInquiryOrderStore } from '~/features/inquiry-order/store/inquiry-order.store'

const store = useInquiryOrderStore()

// 直接修改資料
store.inquiryOrder.status = '初洽中'
store.inquiryOrder.inquireDate = new Date()

// 新增活動明細
store.addDetail({
  id: 'temp-' + Date.now(),
  mainVenue: '宴會廳 A',
  usageDate: new Date(),
  startTime: '18:00',
  endTime: '22:00',
  // ... 其他欄位
})

// 重置所有資料
store.resetStore()
</script>
```

### 4. 自定義表單區塊

```vue
<template>
  <div class="custom-form">
    <InquiryBasicInfo />
    <InquiryCustomerInfo />
    <!-- 只使用部分區塊 -->
  </div>
</template>

<script setup lang="ts">
import InquiryBasicInfo from '~/features/inquiry-order/components/InquiryBasicInfo.vue'
import InquiryCustomerInfo from '~/features/inquiry-order/components/InquiryCustomerInfo.vue'
</script>
```

## Dependencies 依賴套件

### Syncfusion Components
```json
{
  "@syncfusion/ej2-vue-grids": "^27.x",
  "@syncfusion/ej2-vue-inputs": "^27.x",
  "@syncfusion/ej2-vue-dropdowns": "^27.x",
  "@syncfusion/ej2-vue-calendars": "^27.x",
  "@syncfusion/ej2-vue-buttons": "^27.x",
  "@syncfusion/ej2-vue-notifications": "^27.x"
}
```

### Framework
- **Nuxt 4**: Vue 3 應用框架
- **Pinia**: 狀態管理
- **TypeScript**: 型別安全
- **Tailwind CSS**: 樣式框架

## Testing 測試

### 執行所有測試
```bash
# 單元測試
yarn test

# E2E 測試
yarn test:e2e

# 視覺回歸測試
yarn test:visual
```

### 執行特定測試
```bash
# 測試 composables
yarn test app/features/inquiry-order/composables

# 測試 E2E
npx playwright test tests/e2e/inquiry-order-full-flow.spec.ts
```

### 測試覆蓋率
```bash
yarn test:coverage
```

## Architecture 架構說明

### 目錄結構
```
app/features/inquiry-order/
├── pages/                          # 頁面元件
│   ├── InquiryOrderFormPage.vue       # 主表單頁面
│   └── InquiryOrderDetailEditPage.vue # 明細編輯頁面
├── components/                     # UI 元件
│   ├── InquiryBasicInfo.vue           # 基本資料區塊
│   ├── InquiryCustomerInfo.vue        # 客戶資料區塊
│   ├── InquiryBanquetInfo.vue         # 宴會資料區塊
│   ├── InquirySupplementInfo.vue      # 輔助資訊區塊
│   └── InquiryOrderDetailsGrid.vue    # 活動明細列表
├── composables/                    # 業務邏輯
│   ├── useInquiryOrder.ts             # 主檔邏輯
│   └── useInquiryOrderDetails.ts      # 明細邏輯
├── store/                          # 狀態管理
│   └── inquiry-order.store.ts         # Pinia Store
├── types/                          # 型別定義
│   └── inquiry-order.types.ts         # TypeScript 介面
├── mock/                           # Mock 資料
│   └── inquiry-order.mock.ts          # 測試資料與 API
├── api/                            # API 整合 (未來)
│   └── inquiry-order.api.ts           # 真實 API 呼叫
└── index.ts                        # Barrel 匯出

app/pages/inquiry-order/            # Nuxt 路由頁面
├── index.vue                          # /inquiry-order
└── details/
    └── [id].vue                       # /inquiry-order/details/:id
```

### 資料流向

```
使用者操作 → Component (v-model) → Pinia Store → Composable (業務邏輯) → Mock API
                                         ↓
                                    驗證 & 錯誤處理
                                         ↓
                                    Toast 通知 & 導航
```

### 狀態管理流程

1. **初始化**: `onMounted` → `loadDraft()` 或 `loadInquiryOrder(id)`
2. **輸入資料**: Component `v-model` → Store 直接更新
3. **自動儲存**: 每 30 秒 → `autoSaveDraft()` → LocalStorage
4. **儲存**: 點擊儲存按鈕 → `saveInquiryOrder()` → 驗證 → API → 清除草稿 → Toast
5. **複製**: 點擊複製按鈕 → `copyInquiryOrder()` → 清空特定欄位 → 導航

### 表單驗證規則

| 欄位類型 | 驗證規則 | 錯誤訊息 |
|---------|---------|---------|
| 必填欄位 | `value !== null && value !== ''` | `請選擇/輸入 {欄位名稱}` |
| Email | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` | `請輸入有效的電子郵件地址` |
| 手機 | `/^09\d{8}$/` | `請輸入有效的手機號碼` |
| 日期範圍 | `startDate <= endDate` | `結束日期必須晚於開始日期` |
| 時間範圍 | `startTime < endTime` | `結束時間必須晚於開始時間` |
| 明細日期 | `usageDate 在主檔日期範圍內` | `使用日期必須在預計宴客日期區間內` |

## Performance 效能考量

### DataGrid 虛擬滾動
- 資料量 > 20 筆時自動啟用虛擬滾動
- PageSize: 50 筆
- 固定高度: 400px

### LocalStorage 草稿
- 每 30 秒自動儲存（僅新增模式）
- 儲存大小限制: ~5MB（瀏覽器預設）
- 草稿過期時間: 24 小時（可設定）

### Pinia Store 最佳化
- 使用 `computed` 避免重複計算
- 直接修改 `ref` 而非 `reactive`，效能更好
- 不使用深層巢狀結構

## Troubleshooting 疑難排解

### 問題 1: Tab 內容空白
**原因**: Syncfusion Tab 元件與 Nuxt 4 不相容
**解決**: 已替換為原生 HTML tabs + `v-show`
**檔案**: `InquiryOrderFormPage.vue:18-42`

### 問題 2: 草稿未自動儲存
**檢查**:
1. 是否為新增模式（編輯模式不自動儲存草稿）
2. `hasUnsavedChanges` 是否為 `true`
3. Console 是否有「Auto-saved draft」訊息

### 問題 3: 驗證錯誤不顯示
**檢查**:
1. Store 的 `errors` 陣列是否有內容
2. Toast 元件是否正確掛載（`toastRef.value` 是否存在）
3. Syncfusion Toast CSS 是否正確載入

### 問題 4: 型別錯誤
**解決**: 確保所有欄位符合 `InquiryOrder` 和 `InquiryOrderDetail` 介面定義

## Contributing 貢獻指南

### 新增欄位
1. 更新 `types/inquiry-order.types.ts` 介面
2. 更新 `mock/inquiry-order.mock.ts` 測試資料
3. 更新 `store/inquiry-order.store.ts` 預設值
4. 在對應的 Component 中加入欄位
5. 更新驗證邏輯（如需要）

### 新增驗證規則
在 `useInquiryOrder.validateInquiryOrder()` 中加入新規則：
```typescript
// 範例：驗證預算範圍
if (inquiryOrder.value.budgetRange) {
  const [min, max] = inquiryOrder.value.budgetRange.split('-').map(Number)
  if (min > max) {
    errors.push('預算範圍不正確')
  }
}
```

## License

此功能為專案內部使用，遵循專案整體 License。

---

**版本**: 1.0.0
**最後更新**: 2024-12-12
**維護者**: Development Team
