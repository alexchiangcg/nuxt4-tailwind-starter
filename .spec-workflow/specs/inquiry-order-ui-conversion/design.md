# Design Document

## Overview

本設計文檔定義「初洽單管理系統 UI 切版」的技術架構與實作策略。目標是根據 Figma 設計稿（兩個 frames），從零開始建立使用 Nuxt 4 + Vue 3 + Syncfusion 元件的前端介面。

**專案範圍：**
- **純 UI 切版**：僅實作視覺介面，不包含 API 整合
- **Figma 驅動**：嚴格依照 Figma data-name 屬性選擇 Syncfusion 元件
- **Design System 優先**：所有樣式使用 `app/assets/css/tailwind.css` 定義的 Design Tokens

## Steering Document Alignment

### Technical Standards (tech.md)

**設計系統規範：**
- **Tailwind 切版**：使用 `@theme` 區塊的變數（例如：`bg-primary`, `text-on-surface`）
- **Syncfusion 元件**：使用 `:root` 區塊的 `--color-sf-*` 變數（透過 `e-primary` 等 class 自動綁定）
- **設計 Token 來源**：`app/assets/css/tailwind.css`

**元件選擇策略（根據 requirements.md）：**
1. **IF** Figma 設計稿明確標註 Syncfusion 元件（data-name 屬性）**THEN** 必須使用該元件
2. **IF** Figma 未標註 **THEN** 根據視覺樣式選擇最接近的 Syncfusion 元件
3. **優先級**：Syncfusion 元件 > Tailwind 自訂元件 > 原生 HTML 元素

### Project Structure (structure.md)

**遵循專案的 Feature-based 目錄結構：**
```
app/features/inquiry/          # 新建目錄
├── components/                # UI 元件
│   ├── InquiryToolbar.vue            # 頂部工具列
│   ├── InquiryBasicInfo.vue          # 基本資料區塊
│   ├── InquiryCustomerInfo.vue       # 客戶資料區塊
│   ├── InquiryBanquetInfo.vue        # 宴會資料區塊
│   ├── InquirySupplementInfo.vue     # 輔助資訊區塊
│   └── InquiryActivityDetailsGrid.vue # 活動明細表格
├── pages/
│   └── InquiryFormPage.vue    # 主頁面（包含 Tabs）
├── types/
│   └── inquiry.types.ts       # TypeScript 型別定義
└── mock/
    └── inquiry.mock.ts        # Mock 資料（UI 測試用）
```

**說明：**
- 使用 `inquiry` 而非 `inquiry-order`（更簡潔的命名）
- 所有元件名稱以 `Inquiry` 開頭，清楚標示所屬 feature
- 本階段不建立 `store/` 與 `composables/`（API 整合階段才需要）

## Code Reuse Analysis

### Existing Components to Leverage

✅ **可重用的專案基礎設施：**
- **Syncfusion 元件庫**：專案已配置 `@syncfusion/ej2-vue-*` 套件
- **Iconify**：專案已配置 Iconify 套件
- **Tailwind CSS**：專案已配置完整的 Design System（`app/assets/css/tailwind.css`）
- **Playwright**：專案已配置 Playwright 測試環境

🆕 **本次需新建的元件（共 7 個）：**
1. `InquiryToolbar.vue` - 工具列
2. `InquiryBasicInfo.vue` - 基本資料區塊
3. `InquiryCustomerInfo.vue` - 客戶資料區塊
4. `InquiryBanquetInfo.vue` - 宴會資料區塊
5. `InquirySupplementInfo.vue` - 輔助資訊區塊
6. `InquiryActivityDetailsGrid.vue` - 活動明細表格
7. `InquiryFormPage.vue` - 主頁面

### Integration Points

- **Mock Data**：建立 `inquiry.mock.ts` 提供測試用資料
- **TypeScript Types**：建立 `inquiry.types.ts` 定義資料結構
- **Nuxt Pages**：在 `app/pages/inquiry/` 建立路由頁面

## Architecture

### 整體架構設計原則

```mermaid
graph TD
    A[/inquiry 路由] --> B[InquiryFormPage]
    B --> C[InquiryToolbar]
    B --> D[Syncfusion Tab]
    D --> E[Tab 1: 主檔]
    D --> F[Tab 2: 預計活動明細]
    E --> G[InquiryBasicInfo]
    E --> H[InquiryCustomerInfo]
    E --> I[InquiryBanquetInfo]
    E --> J[InquirySupplementInfo]
    F --> K[InquiryActivityDetailsGrid]

    G --> L[Mock Data]
    H --> L
    I --> L
    J --> L
    K --> L
```

### Modular Design Principles

1. **Single File Responsibility**：每個 `.vue` 檔案對應 Figma 設計稿的一個視覺區塊
2. **Component Isolation**：表單區塊元件（Basic, Customer, Banquet, Supplement）完全獨立，透過 props 傳遞資料
3. **Mock-First Development**：先使用 mock data 完成 UI，確保視覺正確後再整合 API
4. **Style Token Modularity**：所有顏色、間距、圓角值從 `tailwind.css` 取得，避免硬編碼

## Components and Interfaces

### Component 1: InquiryToolbar.vue

**Purpose:** 頂部工具列，包含操作按鈕與檢視模式切換

**Figma 參照：** Frame 1 與 Frame 2 的頂部按鈕列

**Props Interface:**
```typescript
interface InquiryToolbarProps {
  mode?: 'view' | 'edit'  // 檢視模式或編輯模式
}
```

**Emits Interface:**
```typescript
interface InquiryToolbarEmits {
  'mode-change': (mode: 'view' | 'edit') => void  // 模式切換
  delete: () => void     // 刪除
  copy: () => void       // 複製
  add: () => void        // 新增
  convert: () => void    // 轉訂席單
}
```

**Syncfusion 元件使用：**
- `ejs-button` (ButtonComponent) - 所有按鈕
- Iconify icons - 圖標按鈕（delete, content_copy, add）

**Figma 按鈕對映（從左到右）：**
1. **轉訂席單** - 主要按鈕（左側）
2. **檢視模式 / 編輯** - 模式切換按鈕（右側區域）
3. **Delete Icon** - 圖標按鈕 (material-symbols:delete-outline)
4. **Copy Icon** - 圖標按鈕 (material-symbols:content-copy)
5. **Add Icon** - 圖標按鈕 (material-symbols:add)

**實作重點：**
```vue
<template>
  <div class="inquiry-toolbar">
    <!-- 左側：轉訂席單按鈕 -->
    <div class="toolbar-left">
      <ejs-button
        content="轉訂席單"
        cssClass="e-outline"
        @click="$emit('convert')"
      />
    </div>

    <!-- 右側：模式切換與操作按鈕 -->
    <div class="toolbar-right">
      <!-- 檢視模式 / 編輯按鈕 -->
      <ejs-button
        :content="mode === 'view' ? '檢視模式' : '編輯'"
        :isPrimary="mode === 'edit'"
        @click="toggleMode"
      />

      <!-- Icon 按鈕群 -->
      <ejs-button
        iconCss="iconify material-symbols--delete-outline"
        cssClass="e-icon-btn"
        @click="$emit('delete')"
      />
      <ejs-button
        iconCss="iconify material-symbols--content-copy"
        cssClass="e-icon-btn"
        @click="$emit('copy')"
      />
      <ejs-button
        iconCss="iconify material-symbols--add"
        cssClass="e-icon-btn"
        @click="$emit('add')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<InquiryToolbarProps>(), {
  mode: 'view'
})

const emit = defineEmits<InquiryToolbarEmits>()

const toggleMode = () => {
  const newMode = props.mode === 'view' ? 'edit' : 'view'
  emit('mode-change', newMode)
}
</script>

<style scoped>
.inquiry-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap-sf-2);
  padding: var(--gap-sf-4);
  background: rgb(var(--color-sf-surface));
  border-bottom: 1px solid rgb(var(--color-sf-outline-variant));
}

.toolbar-left,
.toolbar-right {
  display: flex;
  gap: var(--gap-sf-2);
  align-items: center;
}
</style>
```

---

### Component 2: InquiryBasicInfo.vue

**Purpose:** 基本資料區塊（8 個欄位，4x2 grid）

**Figma 參照：** Frame 1 (6146:144772) - 第一個區塊

**Props Interface:**
```typescript
interface InquiryBasicInfoProps {
  modelValue: {
    inquiryOrderNo: string        // 初洽單號
    status: string                // 初洽狀態
    inquireDate: string           // 初洽日
    inquireContactPerson: string  // 初洽業務
    relatedProject: string        // 初洽配合專案
    reservationNumber: string     // 訂席單號
    manualNumber: string          // 人工單號
    leadSource: string            // 初洽訂席來源（單選）
  }
}
```

**Emits Interface:**
```typescript
interface InquiryBasicInfoEmits {
  'update:modelValue': (value: InquiryBasicInfoProps['modelValue']) => void
  'navigate-to-reservation': (reservationNo: string) => void  // 跳轉到訂席單
}
```

**Figma 元件對映（根據 data-name）：**
1. **初洽單號** - `ejs-textbox` (readonly, value: "20240830001")
2. **初洽狀態** - `ejs-dropdownlist` (value: "A:待到店")
3. **初洽日** - `ejs-datepicker` (value: "2025/08/22")
4. **初洽業務** - `ejs-dropdownlist` (value: "So1:顏平") ⚠️ **必須是 DropDownList**
5. **初洽配合專案** - `ejs-dropdownlist` (value: "001:年度尾牙促銷") ⚠️ **必須是 DropDownList**
6. **訂席單號** - `ejs-textbox` (readonly) + `ejs-button`（Icon Button with arrow_forward icon）
7. **人工單號** - `ejs-textbox` (value: "20240830120")
8. **初洽訂席來源** - `ejs-dropdownlist` (value: "WEB:官方網站") ⚠️ **必須是單選 DropDownList**

**實作重點：**
```vue
<template>
  <div class="inquiry-basic-info">
    <h2 class="section-title">基本資料</h2>
    <div class="form-grid">
      <!-- Row 1 -->
      <div class="form-field">
        <label>初洽單號</label>
        <ejs-textbox
          :value="modelValue.inquiryOrderNo"
          :readonly="true"
          placeholder="系統自動產生"
        />
      </div>
      <div class="form-field">
        <label>初洽狀態 <span class="required">*</span></label>
        <ejs-dropdownlist
          :value="modelValue.status"
          :dataSource="mockInquiryStatus"
          :fields="{ text: 'name', value: 'code' }"
          placeholder="請選擇"
          @change="handleStatusChange"
        />
      </div>
      <div class="form-field">
        <label>初洽日</label>
        <ejs-datepicker
          :value="modelValue.inquireDate"
          :format="'yyyy/MM/dd'"
          @change="handleDateChange"
        />
      </div>
      <div class="form-field">
        <label>初洽業務</label>
        <ejs-dropdownlist
          :value="modelValue.inquireContactPerson"
          :dataSource="mockSalesPersons"
          :fields="{ text: 'name', value: 'code' }"
          placeholder="請選擇"
          @change="handleSalesPersonChange"
        />
      </div>

      <!-- Row 2 -->
      <div class="form-field">
        <label>初洽配合專案</label>
        <ejs-dropdownlist
          :value="modelValue.relatedProject"
          :dataSource="mockProjects"
          :fields="{ text: 'name', value: 'code' }"
          placeholder="請選擇"
          @change="handleProjectChange"
        />
      </div>
      <div class="form-field">
        <label>訂席單號</label>
        <div class="field-with-button">
          <ejs-textbox
            :value="modelValue.reservationNumber"
            :readonly="true"
          />
          <ejs-button
            iconCss="iconify material-symbols--arrow-forward"
            cssClass="e-icon-btn"
            @click="$emit('navigate-to-reservation', modelValue.reservationNumber)"
          />
        </div>
      </div>
      <div class="form-field">
        <label>人工單號</label>
        <ejs-textbox
          :value="modelValue.manualNumber"
          @input="handleManualNumberChange"
        />
      </div>
      <div class="form-field">
        <label>初洽訂席來源</label>
        <ejs-dropdownlist
          :value="modelValue.leadSource"
          :dataSource="mockLeadSources"
          :fields="{ text: 'name', value: 'code' }"
          placeholder="請選擇"
          @change="handleLeadSourceChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  font-size: var(--font-size-sf-lg);
  font-weight: 600;
  margin-bottom: var(--gap-sf-4);
  padding-left: var(--gap-sf-3);
  border-left: 4px solid rgb(var(--color-sf-primary));
  color: rgb(var(--color-sf-on-surface));
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-sf-4);
}

.field-with-button {
  display: flex;
  gap: var(--gap-sf-2);
  align-items: center;
}

.required {
  color: rgb(var(--color-sf-danger));
}
</style>
```

---

### Component 3: InquiryCustomerInfo.vue

**Purpose:** 客戶資料區塊（5 個欄位）

**Figma 參照：** Frame 1 (6146:144772) - 第二個區塊

**Props Interface:**
```typescript
interface InquiryCustomerInfoProps {
  modelValue: {
    customerName: string      // 客戶姓名
    contactPerson: string     // 聯絡人
    phoneCountryCode: string  // 聯絡手機-國碼
    phoneNumber: string       // 聯絡手機-號碼
    email: string             // 聯絡信箱
    city: string              // 居住地-城市
    district: string          // 居住地-區域
  }
}
```

**Emits Interface:**
```typescript
interface InquiryCustomerInfoEmits {
  'update:modelValue': (value: InquiryCustomerInfoProps['modelValue']) => void
  'open-customer-detail': () => void  // 開啟客戶詳細資訊
}
```

**Figma 元件對映（根據 data-name）：**
1. **客戶姓名** - `ejs-textbox` + `ejs-button` (Icon Button with more_horiz icon) ⚠️ **有 Icon Button**
2. **聯絡人** - `ejs-textbox` (value: "陳秘書")
3. **聯絡手機** - `ejs-dropdownlist` (國碼 "+886") + `ejs-textbox` (號碼 "0912345678") ⚠️ **兩個元件組合**
4. **聯絡信箱** - `ejs-textbox` (value: "athena@mail.com")
5. **居住地** - `ejs-dropdownlist` (城市 "台北市") + `ejs-dropdownlist` (區域 "中山區") ⚠️ **兩個 Dropdown**

**實作範例：**
```vue
<template>
  <div class="inquiry-customer-info">
    <h2 class="section-title">客戶資料</h2>
    <div class="form-grid">
      <!-- 客戶姓名 + Icon Button -->
      <div class="form-field">
        <label>客戶姓名</label>
        <div class="field-with-button">
          <ejs-textbox
            :value="modelValue.customerName"
            @input="handleCustomerNameChange"
          />
          <ejs-button
            iconCss="iconify material-symbols--more-horiz"
            cssClass="e-icon-btn"
            @click="$emit('open-customer-detail')"
          />
        </div>
      </div>

      <!-- 聯絡人 -->
      <div class="form-field">
        <label>聯絡人</label>
        <ejs-textbox
          :value="modelValue.contactPerson"
          @input="handleContactPersonChange"
        />
      </div>

      <!-- 聯絡手機：國碼 + 號碼 -->
      <div class="form-field">
        <label>聯絡手機</label>
        <div class="phone-field">
          <ejs-dropdownlist
            :value="modelValue.phoneCountryCode"
            :dataSource="mockCountryCodes"
            :fields="{ text: 'label', value: 'code' }"
            cssClass="country-code-dropdown"
            @change="handleCountryCodeChange"
          />
          <ejs-textbox
            :value="modelValue.phoneNumber"
            placeholder="手機號碼"
            @input="handlePhoneNumberChange"
          />
        </div>
      </div>

      <!-- 聯絡信箱 -->
      <div class="form-field">
        <label>聯絡信箱</label>
        <ejs-textbox
          :value="modelValue.email"
          type="email"
          @input="handleEmailChange"
        />
      </div>

      <!-- 居住地：城市 + 區域 -->
      <div class="form-field">
        <label>居住地</label>
        <div class="location-field">
          <ejs-dropdownlist
            :value="modelValue.city"
            :dataSource="mockCities"
            :fields="{ text: 'name', value: 'code' }"
            placeholder="城市"
            @change="handleCityChange"
          />
          <ejs-dropdownlist
            :value="modelValue.district"
            :dataSource="mockDistricts"
            :fields="{ text: 'name', value: 'code' }"
            placeholder="區域"
            @change="handleDistrictChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-sf-4);
}

.field-with-button,
.phone-field,
.location-field {
  display: flex;
  gap: var(--gap-sf-2);
  align-items: center;
}

.country-code-dropdown {
  max-width: 120px;
}
</style>
```

---

### Component 4: InquiryBanquetInfo.vue

**Purpose:** 宴會資料區塊（6 個欄位）

**Figma 參照：** Frame 1 (6146:144772) - 第三個區塊

**Props Interface:**
```typescript
interface InquiryBanquetInfoProps {
  modelValue: {
    category: string              // 類別
    banquetName: string           // 宴會名稱
    budgetRange: string           // 預算範圍
    tourSalesPerson: string       // 賞廳業務
    estimatedDateRange: [string, string] // 預計宴客日期區間
    tourDateTime: string          // 預約賞廳時間
  }
}
```

**Emits Interface:**
```typescript
interface InquiryBanquetInfoEmits {
  'update:modelValue': (value: InquiryBanquetInfoProps['modelValue']) => void
}
```

**Figma 元件對映（根據 data-name）：**
1. **類別** - `ejs-dropdownlist` (value: "05:尾牙")
2. **宴會名稱** - `ejs-textbox` (value: "陳府喜宴")
3. **預算範圍** - `ejs-textbox` (value: "50,000–100,000") ⚠️ **此欄位之前漏掉**
4. **賞廳業務** - `ejs-dropdownlist` (value: "S01:顏平") ⚠️ **此欄位之前漏掉**
5. **預計宴客日期區間** - `ejs-daterangepicker` (value: "2025/12/18 - 2025/12/21") ⚠️ **重要元件**
6. **預約賞廳時間** - `ejs-datetimepicker` (value: "2025/12/01 14:00") ⚠️ **重要元件**

**Syncfusion 元件引入：**
```typescript
import { DateRangePickerComponent as EjsDaterangepicker } from '@syncfusion/ej2-vue-calendars'
import { DateTimePickerComponent as EjsDatetimepicker } from '@syncfusion/ej2-vue-calendars'
```

**實作範例：**
```vue
<template>
  <div class="inquiry-banquet-info">
    <h2 class="section-title">宴會資料</h2>
    <div class="form-grid">
      <!-- 類別 -->
      <div class="form-field">
        <label>類別</label>
        <ejs-dropdownlist
          :value="modelValue.category"
          :dataSource="mockBanquetCategories"
          :fields="{ text: 'name', value: 'code' }"
          placeholder="請選擇"
          @change="handleCategoryChange"
        />
      </div>

      <!-- 宴會名稱 -->
      <div class="form-field">
        <label>宴會名稱</label>
        <ejs-textbox
          :value="modelValue.banquetName"
          @input="handleBanquetNameChange"
        />
      </div>

      <!-- 預算範圍 -->
      <div class="form-field">
        <label>預算範圍</label>
        <ejs-textbox
          :value="modelValue.budgetRange"
          placeholder="例如：50,000–100,000"
          @input="handleBudgetRangeChange"
        />
      </div>

      <!-- 賞廳業務 -->
      <div class="form-field">
        <label>賞廳業務</label>
        <ejs-dropdownlist
          :value="modelValue.tourSalesPerson"
          :dataSource="mockSalesPersons"
          :fields="{ text: 'name', value: 'code' }"
          placeholder="請選擇"
          @change="handleTourSalesPersonChange"
        />
      </div>

      <!-- 預計宴客日期區間 -->
      <div class="form-field">
        <label>預計宴客日期區間</label>
        <ejs-daterangepicker
          :value="modelValue.estimatedDateRange"
          :format="'yyyy/MM/dd'"
          placeholder="請選擇"
          @change="handleDateRangeChange"
        />
      </div>

      <!-- 預約賞廳時間 -->
      <div class="form-field">
        <label>預約賞廳時間</label>
        <ejs-datetimepicker
          :value="modelValue.tourDateTime"
          :format="'yyyy/MM/dd HH:mm'"
          placeholder="請選擇"
          @change="handleDateTimeChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-sf-4);
}
</style>
```

---

### Component 5: InquirySupplementInfo.vue

**Purpose:** 輔助資訊區塊（5 個欄位） ⚠️ **完全重新對齊 Figma**

**Figma 參照：** Frame 1 (6146:144772) - 第四個區塊

**Props Interface:**
```typescript
interface InquirySupplementInfoProps {
  modelValue: {
    visitedCompetitorVenues: string[]   // 已看同業場館（多選）
    venueDecisionFactors: string[]      // 決定宴客場地主因（多選）
    bookedCompetitorVenue: string       // 下訂同業場館（單選）
    notBookingReasons: string[]         // 未下定原因（多選）
    contactNotes: string                // 接洽紀錄（多行文字）
  }
}
```

**Emits Interface:**
```typescript
interface InquirySupplementInfoEmits {
  'update:modelValue': (value: InquirySupplementInfoProps['modelValue']) => void
}
```

**Figma 元件對映（根據 data-name）：** ⚠️ **之前完全錯誤，已全部修正**
1. **已看同業場館** - `ejs-dropdownlist` with multi-select (value: "B01:東區歐式婚宴館, F01:凱西酒店")
2. **決定宴客場地主因** - `ejs-dropdownlist` with multi-select (value: "A:交通便利, B:價格合理")
3. **下訂同業場館** - `ejs-dropdownlist` single-select (value: "B01:東區歐式婚宴館")
4. **未下定原因** - `ejs-dropdownlist` with multi-select (value: "Z:價格超出預算, D:無場地")
5. **接洽紀錄** - `ejs-textbox` multiline mode (value: "等待回覆")

**實作範例：**
```vue
<template>
  <div class="inquiry-supplement-info">
    <h2 class="section-title">輔助資訊</h2>
    <div class="form-grid">
      <!-- 已看同業場館 -->
      <div class="form-field">
        <label>已看同業場館</label>
        <ejs-dropdownlist
          :value="modelValue.visitedCompetitorVenues"
          :dataSource="mockCompetitorVenues"
          :fields="{ text: 'name', value: 'code' }"
          mode="CheckBox"
          placeholder="請選擇"
          @change="handleVisitedVenuesChange"
        />
      </div>

      <!-- 決定宴客場地主因 -->
      <div class="form-field">
        <label>決定宴客場地主因</label>
        <ejs-dropdownlist
          :value="modelValue.venueDecisionFactors"
          :dataSource="mockDecisionFactors"
          :fields="{ text: 'name', value: 'code' }"
          mode="CheckBox"
          placeholder="請選擇"
          @change="handleDecisionFactorsChange"
        />
      </div>

      <!-- 下訂同業場館 -->
      <div class="form-field">
        <label>下訂同業場館</label>
        <ejs-dropdownlist
          :value="modelValue.bookedCompetitorVenue"
          :dataSource="mockCompetitorVenues"
          :fields="{ text: 'name', value: 'code' }"
          placeholder="請選擇"
          @change="handleBookedVenueChange"
        />
      </div>

      <!-- 未下定原因 -->
      <div class="form-field">
        <label>未下定原因</label>
        <ejs-dropdownlist
          :value="modelValue.notBookingReasons"
          :dataSource="mockNotBookingReasons"
          :fields="{ text: 'name', value: 'code' }"
          mode="CheckBox"
          placeholder="請選擇"
          @change="handleNotBookingReasonsChange"
        />
      </div>

      <!-- 接洽紀錄 -->
      <div class="form-field form-field-wide">
        <label>接洽紀錄</label>
        <ejs-textbox
          :value="modelValue.contactNotes"
          :multiline="true"
          :rows="4"
          placeholder="請輸入"
          @input="handleContactNotesChange"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-sf-4);
}

.form-field-wide {
  grid-column: span 4;  /* 接洽紀錄欄位佔滿整行 */
}
</style>
```

---

### Component 6: InquiryActivityDetailsGrid.vue

**Purpose:** 預計活動明細 DataGrid 表格（Frame 2 的核心元件）

**Figma 參照：** Frame 2 (6202:301195)

**Props Interface:**
```typescript
interface InquiryActivityDetailsGridProps {
  dataSource: InquiryActivityDetail[]  // 活動明細陣列
}
```

**Figma 元件對映（根據 data-name）：**
- **Table/DataGrid** → `ejs-grid` (Syncfusion Grid)
- **Pagination** → Grid 內建 `Pager`
- **OpenPOPUP*** → 第一欄的 Icon Button（文件圖標）
- **More 按鈕** → 預計子場地、預計設備需求欄位的 More 按鈕

**欄位定義（完全依照 Figma 順序）：**
```vue
<ejs-grid
  :dataSource="dataSource"
  :allowPaging="true"
  :pageSettings="{ pageSize: 50 }"
  :allowSorting="true"
  :height="500"
>
  <e-columns>
    <!-- 第 1 欄：OpenPOPUP* 按鈕 -->
    <e-column
      headerText=""
      width="60"
      :template="openPopupTemplate"
    />

    <!-- 第 2 欄：預計主場地 -->
    <e-column
      field="mainVenue"
      headerText="預計主場地"
      width="120"
    />

    <!-- 第 3 欄：預計子場地 + More 按鈕 -->
    <e-column
      field="subVenue"
      headerText="預計子場地"
      width="150"
      :template="subVenueTemplate"
    />

    <!-- 第 4 欄：使用日期 -->
    <e-column
      field="usageDate"
      headerText="使用日期"
      width="120"
      type="date"
      :format="{ type: 'date', format: 'yyyy/MM/dd' }"
    />

    <!-- 第 5-6 欄：時間 -->
    <e-column field="startTime" headerText="開始時間" width="100" />
    <e-column field="endTime" headerText="結束時間" width="100" />

    <!-- 第 7-8 欄：活動資訊 -->
    <e-column field="activityCategory" headerText="活動類別" width="100" />
    <e-column field="activitySubject" headerText="活動主旨" width="150" />

    <!-- 第 9 欄：桌圖 -->
    <e-column field="tableLayout" headerText="桌圖" width="100" />

    <!-- 第 10 欄：預計設備需求 + More 按鈕 -->
    <e-column
      field="equipmentNeeds"
      headerText="預計設備需求"
      width="150"
      :template="equipmentTemplate"
    />

    <!-- 第 11-12 欄：數量（右對齊） -->
    <e-column
      field="reservedTables"
      headerText="預訂桌數"
      width="100"
      textAlign="Right"
    />
    <e-column
      field="reservedPeople"
      headerText="預訂人數"
      width="100"
      textAlign="Right"
    />

    <!-- 第 13 欄：備註 -->
    <e-column field="remarks" headerText="備註" width="150" />

    <!-- 第 14-17 欄：稽核欄位 -->
    <e-column field="modifiedBy" headerText="修改者" width="100" />
    <e-column
      field="modifiedDate"
      headerText="修改日期"
      width="120"
      type="date"
      :format="{ type: 'date', format: 'yyyy/MM/dd' }"
    />
    <e-column field="createdBy" headerText="新增者" width="100" />
    <e-column
      field="createdDate"
      headerText="新增日期"
      width="120"
      type="date"
      :format="{ type: 'date', format: 'yyyy/MM/dd' }"
    />
  </e-columns>
</ejs-grid>
```

**Template Functions（Custom Cell Rendering）：**
```typescript
const openPopupTemplate = {
  template: `
    <ejs-button
      iconCss="iconify material-symbols:description-outline"
      cssClass="e-icon-btn"
      @click="handleOpenPopup"
    />
  `
}

const subVenueTemplate = {
  template: `
    <div class="cell-with-more">
      <span>{{data.subVenue}}</span>
      <ejs-button
        content="..."
        cssClass="e-small"
        @click="handleShowMore"
      />
    </div>
  `
}
```

**Grid 樣式設定（根據 Figma）：**
```vue
<style scoped>
/* Header 背景色 */
:deep(.e-grid .e-headercell) {
  background: rgb(var(--color-sf-primary) / 0.05); /* --color-primary-opacity-5 */
}

/* 交替行背景色 */
:deep(.e-grid .e-row:nth-child(even)) {
  background: rgb(var(--color-sf-on-surface) / 0.04); /* --color-on-surface-opacity4 */
}
</style>
```

---

### Component 7: InquiryFormPage.vue

**Purpose:** 主頁面，整合所有元件與 Syncfusion Tab 切換

**Figma 參照：** Frame 1 與 Frame 2 的整體佈局

**實作結構：**
```vue
<template>
  <div class="inquiry-form-page">
    <!-- Toolbar -->
    <InquiryToolbar
      @save="handleSave"
      @copy="handleCopy"
      @convert="handleConvert"
    />

    <!-- Syncfusion Tab -->
    <ejs-tab ref="tabInstance" :selectedItem="0">
      <e-tabitems>
        <!-- Tab 1: 主檔 -->
        <e-tabitem :header="{ text: '主檔' }">
          <template v-slot:content>
            <div class="tab-content">
              <InquiryBasicInfo v-model="formData.basic" />
              <InquiryCustomerInfo v-model="formData.customer" />
              <InquiryBanquetInfo v-model="formData.banquet" />
              <InquirySupplementInfo v-model="formData.supplement" />
            </div>
          </template>
        </e-tabitem>

        <!-- Tab 2: 預計活動明細 -->
        <e-tabitem :header="{ text: '預計活動明細' }">
          <template v-slot:content>
            <div class="tab-content">
              <InquiryActivityDetailsGrid :dataSource="mockActivityDetails" />
            </div>
          </template>
        </e-tabitem>
      </e-tabitems>
    </ejs-tab>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TabComponent as EjsTab, TabItemsDirective as ETabitems, TabItemDirective as ETabitem } from '@syncfusion/ej2-vue-navigations'
import InquiryToolbar from '../components/InquiryToolbar.vue'
import InquiryBasicInfo from '../components/InquiryBasicInfo.vue'
import InquiryCustomerInfo from '../components/InquiryCustomerInfo.vue'
import InquiryBanquetInfo from '../components/InquiryBanquetInfo.vue'
import InquirySupplementInfo from '../components/InquirySupplementInfo.vue'
import InquiryActivityDetailsGrid from '../components/InquiryActivityDetailsGrid.vue'
import { mockFormData, mockActivityDetails } from '../mock/inquiry.mock'

// 表單資料（使用 mock data）
const formData = ref(mockFormData)

// 事件處理（本階段僅 console.log）
const handleSave = () => console.log('Save:', formData.value)
const handleCopy = () => console.log('Copy')
const handleConvert = () => console.log('Convert to Reservation')
</script>

<style scoped>
.inquiry-form-page {
  padding: var(--gap-sf-4);
  max-width: 1400px;
  margin: 0 auto;
}

.tab-content {
  padding: var(--gap-sf-4);
  display: flex;
  flex-direction: column;
  gap: var(--gap-sf-6);
}
</style>
```

## Data Models

### InquiryFormData（主檔表單資料）

```typescript
// app/features/inquiry/types/inquiry.types.ts

export interface InquiryBasicInfo {
  inquiryOrderNo: string        // 初洽單號
  status: string                // 初洽狀態
  inquireDate: string           // 初洽日
  inquireContactPerson: string  // 初洽業務
  relatedProject: string        // 初洽配合專案
  reservationNumber: string     // 訂席單號
  manualNumber: string          // 人工單號
  leadSource: string            // 初洽訂席來源（單選）
}

export interface InquiryCustomerInfo {
  customerName: string      // 客戶姓名
  contactPerson: string     // 聯絡人
  phoneCountryCode: string  // 聯絡手機-國碼
  phoneNumber: string       // 聯絡手機-號碼
  email: string             // 聯絡信箱
  city: string              // 居住地-城市
  district: string          // 居住地-區域
}

export interface InquiryBanquetInfo {
  category: string              // 類別
  banquetName: string           // 宴會名稱
  budgetRange: string           // 預算範圍
  tourSalesPerson: string       // 賞廳業務
  estimatedDateRange: [string, string] // 預計宴客日期區間
  tourDateTime: string          // 預約賞廳時間
}

export interface InquirySupplementInfo {
  visitedCompetitorVenues: string[]   // 已看同業場館（多選）
  venueDecisionFactors: string[]      // 決定宴客場地主因（多選）
  bookedCompetitorVenue: string       // 下訂同業場館（單選）
  notBookingReasons: string[]         // 未下定原因（多選）
  contactNotes: string                // 接洽紀錄（多行文字）
}

export interface InquiryFormData {
  basic: InquiryBasicInfo
  customer: InquiryCustomerInfo
  banquet: InquiryBanquetInfo
  supplement: InquirySupplementInfo
}
```

### InquiryActivityDetail（活動明細資料）

```typescript
export interface InquiryActivityDetail {
  id: string
  mainVenue: string
  subVenue: string
  usageDate: string
  startTime: string
  endTime: string
  activityCategory: string
  activitySubject: string
  tableLayout: string
  equipmentNeeds: string
  reservedTables: number
  reservedPeople: number
  remarks: string
  modifiedBy: string
  modifiedDate: string
  createdBy: string
  createdDate: string
}
```

### Mock Data（測試用資料）

```typescript
// app/features/inquiry/mock/inquiry.mock.ts

export const mockFormData: InquiryFormData = {
  basic: {
    inquiryOrderNo: '20240830001',
    status: 'A:待到店',
    inquireDate: '2025/08/22',
    inquireContactPerson: 'So1:顏平',
    relatedProject: '001:年度尾牙促銷',
    reservationNumber: '',
    manualNumber: '20240830120',
    leadSource: 'WEB:官方網站'
  },
  customer: {
    customerName: '',
    contactPerson: '陳秘書',
    phoneCountryCode: '+886',
    phoneNumber: '0912345678',
    email: 'athena@mail.com',
    city: '台北市',
    district: '中山區'
  },
  banquet: {
    category: '05:尾牙',
    banquetName: '陳府喜宴',
    budgetRange: '50,000–100,000',
    tourSalesPerson: 'S01:顏平',
    estimatedDateRange: ['2025/12/18', '2025/12/21'],
    tourDateTime: '2025/12/01 14:00'
  },
  supplement: {
    visitedCompetitorVenues: ['B01:東區歐式婚宴館', 'F01:凱西酒店'],
    venueDecisionFactors: ['A:交通便利', 'B:價格合理'],
    bookedCompetitorVenue: 'B01:東區歐式婚宴館',
    notBookingReasons: ['Z:價格超出預算', 'D:無場地'],
    contactNotes: '等待回覆'
  }
}

export const mockActivityDetails: InquiryActivityDetail[] = [
  {
    id: '1',
    mainVenue: '大宴會廳',
    subVenue: 'A 廳',
    usageDate: '2025/02/01',
    startTime: '18:00',
    endTime: '21:00',
    activityCategory: '尾牙',
    activitySubject: '晚宴',
    tableLayout: '圓桌 10 人',
    equipmentNeeds: '投影機、音響',
    reservedTables: 20,
    reservedPeople: 200,
    remarks: '',
    modifiedBy: '王小明',
    modifiedDate: '2025/01/15',
    createdBy: '王小明',
    createdDate: '2025/01/15'
  }
  // ... 可新增更多測試資料
]

// DropDownList 資料源（基本資料）
export const mockInquiryStatus = [
  { code: 'A', name: 'A:待到店' },
  { code: 'B', name: 'B:已到店' },
  { code: 'C', name: 'C:已下訂' }
]

export const mockSalesPersons = [
  { code: 'So1', name: 'So1:顏平' },
  { code: 'So2', name: 'So2:陳小明' },
  { code: 'So3', name: 'So3:李美麗' }
]

export const mockProjects = [
  { code: '001', name: '001:年度尾牙促銷' },
  { code: '002', name: '002:春酒專案' },
  { code: '003', name: '003:婚宴優惠' }
]

export const mockLeadSources = [
  { code: 'WEB', name: 'WEB:官方網站' },
  { code: 'TEL', name: 'TEL:電話' },
  { code: 'FB', name: 'FB:臉書' },
  { code: 'REF', name: 'REF:轉介紹' }
]

// DropDownList 資料源（客戶資料）
export const mockCountryCodes = [
  { code: '+886', label: '+886' },
  { code: '+86', label: '+86' },
  { code: '+1', label: '+1' }
]

export const mockCities = [
  { code: 'TPE', name: '台北市' },
  { code: 'TPH', name: '新北市' },
  { code: 'TXG', name: '台中市' }
]

export const mockDistricts = [
  { code: 'ZS', name: '中山區' },
  { code: 'DA', name: '大安區' },
  { code: 'XY', name: '信義區' }
]

// DropDownList 資料源（宴會資料）
export const mockBanquetCategories = [
  { code: '01', name: '01:婚宴' },
  { code: '02', name: '02:謝師宴' },
  { code: '05', name: '05:尾牙' }
]

// DropDownList 資料源（輔助資訊）
export const mockCompetitorVenues = [
  { code: 'B01', name: 'B01:東區歐式婚宴館' },
  { code: 'F01', name: 'F01:凱西酒店' },
  { code: 'G01', name: 'G01:皇家宴會廳' }
]

export const mockDecisionFactors = [
  { code: 'A', name: 'A:交通便利' },
  { code: 'B', name: 'B:價格合理' },
  { code: 'C', name: 'C:場地氣氛' },
  { code: 'D', name: 'D:服務品質' }
]

export const mockNotBookingReasons = [
  { code: 'Z', name: 'Z:價格超出預算' },
  { code: 'D', name: 'D:無場地' },
  { code: 'E', name: 'E:檔期不符' },
  { code: 'F', name: 'F:其他考量' }
]
```

## Error Handling

### Error Scenarios

1. **Scenario 1: Syncfusion 元件載入失敗**
   - **Handling:** 在瀏覽器 Console 檢查是否正確引入 `@syncfusion/ej2-vue-*` 套件
   - **User Impact:** 頁面空白或元件無法顯示

2. **Scenario 2: Design Token 變數未定義**
   - **Handling:** 檢查 `app/assets/css/tailwind.css` 是否正確載入
   - **User Impact:** 樣式異常（顏色、間距錯誤）

3. **Scenario 3: Mock Data 格式錯誤**
   - **Handling:** 使用 TypeScript 型別檢查，確保 mock data 符合介面定義
   - **User Impact:** Grid 無法顯示或表單欄位異常

## Testing Strategy

### Unit Testing

**測試框架:** Vitest

**測試範圍（本階段不實作，僅規劃）:**
- 每個元件的 props 驗證
- v-model 雙向綁定測試
- emit 事件觸發測試

### Integration Testing

**測試框架:** Vitest + @vue/test-utils

**測試範圍（本階段不實作，僅規劃）:**
- InquiryFormPage 整合測試
- Tab 切換功能測試

### End-to-End Testing

**測試框架:** Playwright

**測試檔案位置:** `tests/e2e/inquiry/inquiry-form.spec.ts`

#### Test Case 1: 頁面載入與 Toolbar 可見性
```typescript
import { test, expect } from '@playwright/test'

test('應顯示 Toolbar 與所有按鈕', async ({ page }) => {
  await page.goto('/inquiry')

  // 驗證 Toolbar 按鈕
  await expect(page.locator('button:has-text("儲存")')).toBeVisible()
  await expect(page.locator('button:has-text("複製")')).toBeVisible()
  await expect(page.locator('button:has-text("轉訂席單")')).toBeVisible()
})
```

#### Test Case 2: 主檔 Tab 顯示所有表單區塊
```typescript
test('主檔 tab 應顯示 4 個表單區塊', async ({ page }) => {
  await page.goto('/inquiry')

  // 驗證區塊標題
  await expect(page.locator('h2:has-text("基本資料")')).toBeVisible()
  await expect(page.locator('h2:has-text("客戶資料")')).toBeVisible()
  await expect(page.locator('h2:has-text("宴會資料")')).toBeVisible()
  await expect(page.locator('h2:has-text("輔助資訊")')).toBeVisible()

  // 驗證 Syncfusion 元件
  await expect(page.locator('.e-textbox').first()).toBeVisible()
  await expect(page.locator('.e-dropdownlist').first()).toBeVisible()
  await expect(page.locator('.e-datepicker').first()).toBeVisible()
})
```

#### Test Case 3: Tab 切換功能
```typescript
test('應能正確切換到預計活動明細 tab', async ({ page }) => {
  await page.goto('/inquiry')

  // 預設應在主檔 tab
  await expect(page.locator('.e-tab-header .e-active:has-text("主檔")')).toBeVisible()

  // 切換到預計活動明細
  await page.locator('.e-tab-header:has-text("預計活動明細")').click()

  // 驗證 Grid 可見
  await expect(page.locator('.e-grid')).toBeVisible()
})
```

#### Test Case 4: DataGrid 欄位渲染
```typescript
test('DataGrid 應顯示正確的欄位順序', async ({ page }) => {
  await page.goto('/inquiry')
  await page.locator('.e-tab-header:has-text("預計活動明細")').click()

  // 驗證 header cells（按 Figma 順序）
  const headers = [
    '預計主場地',
    '預計子場地',
    '使用日期',
    '開始時間',
    '結束時間',
    '活動類別',
    '活動主旨',
    '桌圖',
    '預計設備需求',
    '預訂桌數',
    '預訂人數',
    '備註',
    '修改者',
    '修改日期',
    '新增者',
    '新增日期'
  ]

  for (const header of headers) {
    await expect(page.locator(`.e-headercell:has-text("${header}")`)).toBeVisible()
  }
})
```

#### Test Case 5: 分頁器功能
```typescript
test('分頁器應正確顯示', async ({ page }) => {
  await page.goto('/inquiry')
  await page.locator('.e-tab-header:has-text("預計活動明細")').click()

  // 驗證 Pager 存在
  await expect(page.locator('.e-pager')).toBeVisible()
})
```

#### Test Case 6: 視覺回歸測試（截圖比對）
```typescript
test('視覺樣式應符合 Figma 設計稿', async ({ page }) => {
  await page.goto('/inquiry')

  // 主檔 tab 截圖
  await expect(page).toHaveScreenshot('inquiry-form-master.png', {
    fullPage: true,
    maxDiffPixels: 100
  })

  // 切換到活動明細 tab
  await page.locator('.e-tab-header:has-text("預計活動明細")').click()

  // 活動明細 tab 截圖
  await expect(page).toHaveScreenshot('inquiry-form-details.png', {
    fullPage: true,
    maxDiffPixels: 100
  })
})
```

## Implementation Checklist

### Phase 1: 基礎設定
- [ ] 建立目錄結構 `app/features/inquiry/`
- [ ] 建立 TypeScript 型別定義 `inquiry.types.ts`
- [ ] 建立 Mock 資料 `inquiry.mock.ts`
- [ ] 建立路由頁面 `app/pages/inquiry/index.vue`

### Phase 2: 表單元件實作（Frame 1）
- [ ] 實作 `InquiryToolbar.vue`
- [ ] 實作 `InquiryBasicInfo.vue` - 8 個欄位
- [ ] 實作 `InquiryCustomerInfo.vue` - 5 個欄位
- [ ] 實作 `InquiryBanquetInfo.vue` - 6 個欄位（包含 DateRangePicker, DateTimePicker）
- [ ] 實作 `InquirySupplementInfo.vue` - 4 個欄位

### Phase 3: DataGrid 元件實作（Frame 2）
- [ ] 實作 `InquiryActivityDetailsGrid.vue` - 17 個欄位
- [ ] 實作 OpenPOPUP* 按鈕 template
- [ ] 實作 More 按鈕 template（子場地、設備需求）
- [ ] 套用 Grid 樣式（Header 背景色、交替行背景色）

### Phase 4: 主頁面整合
- [ ] 實作 `InquiryFormPage.vue`
- [ ] 整合 Syncfusion Tab 元件
- [ ] 整合所有表單區塊元件
- [ ] 整合 DataGrid 元件

### Phase 5: Playwright 測試
- [ ] 建立 `tests/e2e/inquiry/inquiry-form.spec.ts`
- [ ] 實作 Test Case 1-6
- [ ] 執行測試並建立截圖 baseline
- [ ] 修正所有測試錯誤

### Phase 6: 視覺調整與驗證
- [ ] 對照 Figma 設計稿調整所有樣式
- [ ] 確認所有 Design Token 正確使用
- [ ] 執行視覺回歸測試（截圖比對）
- [ ] 最終驗收

## 技術風險評估（Linus 視角）

### 🟢 低風險（好品味設計）
- **Mock-First Development**：先完成 UI，不碰 API，職責清晰
- **Figma data-name 強制對映**：消除元件選擇的模糊性
- **Design Token 系統**：統一管理樣式，避免魔術數字

### 🟡 中風險（需驗證）
- **Syncfusion 元件學習曲線**：團隊需熟悉 `ejs-*` 元件的 API
- **DateRangePicker / DateTimePicker**：較少使用的元件，需確認文檔

### 🔴 高風險（潛在問題）
- **Grid Template Rendering**：Custom template 可能與 Grid 生命週期衝突
  - **緩解策略**：優先使用 Syncfusion 內建功能，減少自訂 template
- **Design Token 命名不一致**：Figma 變數名稱可能與 `tailwind.css` 不完全匹配
  - **緩解策略**：建立對照表，明確定義每個 Figma token 對應的 CSS 變數

## 結論

本設計文檔定義了一套**從零開始**的 UI 切版策略：

1. **純 UI 導向**：本階段不碰 API、Pinia Store、Composables
2. **Figma 驅動**：100% 依照 Figma data-name 選擇元件
3. **Design Token 優先**：所有樣式從 `tailwind.css` 取得
4. **測試完整**：6 個 Playwright E2E 測試 + 視覺回歸測試

**Linus 式評分：🟢 好品味**
- 資料結構簡單清晰（Mock data 先行）
- 元件職責單一（每個 `.vue` 對應一個視覺區塊）
- 不過度設計（不預先建立用不到的 store/composables）
- 可測試性高（完整的 Playwright 測試計畫）
