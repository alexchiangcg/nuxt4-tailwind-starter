# Requirements Document

## Introduction

本規格定義「訂席系統 - 初洽單編輯模式」功能，提供業務人員編輯初洽單（初次接洽客戶的預約單據）的完整表單介面。此功能為 Reservation feature 的核心編輯頁面，需嚴格遵循 Figma 設計稿實作，優先使用 Syncfusion Vue 元件，並透過 Playwright MCP 進行視覺回歸測試。

**功能範圍**：
- 初洽單資料的檢視與編輯
- 包含基本資料、客戶資料、宴會資料、輔助資訊四大區塊
- 表單驗證與狀態管理
- 與訂席單的關聯導航

**核心價值**：
- 提升業務人員資料輸入效率
- 確保初洽資料完整性與正確性
- 建立設計與實作一致性的標準流程

## Alignment with Product Vision

此功能與 `product.md` 的以下目標對齊：

1. **Figma 轉代碼工作流程優化** (product.md:67-70)
   - 使用 Figma MCP 解析設計稿
   - 透過 Playwright MCP 進行視覺回歸測試
   - 確保設計與實作 100% 一致性

2. **設計與開發一致性原則** (product.md:114-119)
   - Figma Component → Syncfusion Vue Component 精確對應
   - 遵循 Tailwind CSS 設計系統
   - 元件化開發與設計系統對齊

3. **Feature-based 架構** (product.md:49-53)
   - 實作於 `app/features/reservation/` 模組
   - 包含 pages、components、composables、store、api、types
   - 符合 structure.md 定義的檔案組織規範

4. **企業級代碼品質** (product.md:102-107)
   - TypeScript 型別安全
   - 統一的程式碼規範
   - 完整的表單驗證

## Requirements

### Requirement 1: 頁面結構與版型

**User Story:** 身為業務人員，我希望看到清晰的頁面結構（Toolbar、Tabs、表單區塊），以便快速定位並編輯所需資訊。

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 顯示頂部 Toolbar，包含：
   - 「轉訂席單」按鈕（左側，灰色邊框，預設禁用狀態）
   - 「取消」按鈕（右側，紅色邊框）
   - 「儲存」按鈕（右側，藍色主按鈕）

2. WHEN 頁面載入 THEN 系統 SHALL 顯示 Tab 導航列，包含：
   - 「主檔」Tab（預設激活狀態，藍色底線）
   - 「預計活動明細」Tab（未激活狀態）

3. WHEN 頁面載入 THEN 系統 SHALL 顯示表單主容器，包含四個標題區塊：
   - 「基本資料」（藍色左側邊條 + 標題文字）
   - 「客戶資料」（藍色左側邊條 + 標題文字）
   - 「宴會資料」（藍色左側邊條 + 標題文字）
   - 「輔助資訊」（藍色左側邊條 + 標題文字）

4. WHEN 視窗寬度為 1115px THEN 系統 SHALL 使用 Flexbox 自動換行佈局（flex-wrap），每行最多 4 個欄位（寬度 251px/250px），欄位間距 16px

### Requirement 2: 基本資料區塊

**User Story:** 身為業務人員，我希望檢視和編輯初洽單的基本資訊，以便記錄初次接洽的關鍵資料。

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 顯示以下欄位（按 Figma 順序）：
   - **初洽單號**：唯讀文字框（禁用狀態，灰色背景），顯示自動產生的單號（例：20240830001）
   - **初洽狀態**：下拉選單（必填，標記紅色 * 號），選項包含「A:待到店」等狀態碼
   - **初洽日**：日期選擇器（必填，標記紅色 * 號），顯示格式 YYYY/MM/DD，附帶日曆圖標
   - **初洽業務**：下拉選單（必填，標記紅色 * 號），選項為業務人員清單（例：S01:顏平）

2. WHEN 頁面載入 THEN 系統 SHALL 顯示以下欄位（第二行）：
   - **初洽配合專案**：下拉選單（非必填），選項為專案清單（例：001:年度尾牙促銷）
   - **訂席單號 + 導航按鈕**：
     - 唯讀文字框（禁用狀態，灰色背景），顯示已關聯的訂席單號（例：20240830120）
     - 藍色箭頭按鈕（→），點擊後導航至對應訂席單頁面
   - **其他兩個欄位**：根據 Figma metadata 存在但未明確標籤（需確認業務需求）

3. IF 欄位標記為必填（*）THEN 系統 SHALL 在儲存時驗證該欄位不為空

4. WHEN 使用者點擊「訂席單號」旁的箭頭按鈕 THEN 系統 SHALL 導航至該訂席單的編輯頁面（如果訂席單號存在）

### Requirement 3: 客戶資料區塊

**User Story:** 身為業務人員，我希望輸入和編輯客戶的聯絡資訊，以便後續聯繫與服務追蹤。

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 顯示客戶資料區塊（「客戶資料」標題），包含約 6 個欄位

2. WHEN 頁面載入 THEN 系統 SHALL 顯示以下欄位類型（根據 Figma metadata）：
   - **客戶搜尋/選擇欄位**：文字框 + 圖標按鈕（Frame 17894），用於搜尋或選擇現有客戶
   - **客戶姓名**：文字框
   - **電話號碼**：下拉選單（區碼）+ 文字框（號碼）組合（Frame 17895）
   - **Email 或地址**：文字框
   - **地區/分類欄位**：雙下拉選單組合（Frame 17950），可能為縣市 + 區域選擇

3. IF 客戶為新客戶 THEN 系統 SHALL 允許手動輸入所有欄位

4. IF 客戶為現有客戶 THEN 系統 SHALL 自動填入該客戶的歷史資料

### Requirement 4: 宴會資料區塊

**User Story:** 身為業務人員，我希望記錄宴會的關鍵資訊（日期、時段、桌數、類型），以便安排場地與資源。

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 顯示宴會資料區塊（「宴會資料」標題），包含 6 個欄位

2. WHEN 頁面載入 THEN 系統 SHALL 顯示以下欄位類型（根據 Figma metadata）：
   - **宴會類型**：下拉選單（可能為婚宴、尾牙、春酒等）
   - **預計桌數**：數字文字框
   - **預計人數**：數字文字框
   - **時段/場地**：下拉選單
   - **宴會日期範圍**：日期範圍選擇器（DateRange Picker），選擇起始與結束日期
   - **宴會時間**：日期時間選擇器（Date Time Picker），選擇具體時段

3. IF 宴會日期範圍跨越多天 THEN 系統 SHALL 允許選擇多日區間

4. WHEN 使用者選擇宴會時間 THEN 系統 SHALL 提供時段選擇（例如：午宴 11:30、晚宴 18:00）

### Requirement 5: 輔助資訊區塊

**User Story:** 身為業務人員，我希望記錄額外的參考資訊與備註，以便保存特殊需求或注意事項。

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 顯示輔助資訊區塊（「輔助資訊」標題），包含 5 個欄位

2. WHEN 頁面載入 THEN 系統 SHALL 顯示以下欄位類型（根據 Figma metadata）：
   - **4 個下拉選單欄位**：可能包含來源管道、優惠方案、付款方式等輔助資訊
   - **備註欄位**：多行文字區域（Text Area），高度 120px，寬度跨越整行（1051px）

3. WHEN 使用者輸入備註內容 THEN 系統 SHALL 允許換行與長文本輸入（無字數限制）

4. IF 輔助資訊欄位為選填 THEN 系統 SHALL 不強制驗證這些欄位

### Requirement 6: 表單操作與狀態管理

**User Story:** 身為業務人員，我希望儲存或取消編輯操作，並獲得明確的操作反饋，以便安全地管理資料變更。

#### Acceptance Criteria

1. WHEN 使用者點擊「儲存」按鈕 THEN 系統 SHALL：
   - 驗證所有必填欄位（標記 * 的欄位）已填寫
   - IF 驗證失敗 THEN 顯示錯誤提示訊息，標記未填寫的必填欄位
   - IF 驗證成功 THEN 呼叫 API 儲存資料，並顯示「儲存成功」訊息

2. WHEN 使用者點擊「取消」按鈕 THEN 系統 SHALL：
   - IF 表單資料已修改 THEN 顯示確認對話框「您有未儲存的變更，確定要離開嗎？」
   - IF 使用者確認 THEN 放棄變更，返回上一頁或列表頁
   - IF 使用者取消 THEN 保持在當前頁面

3. WHEN 使用者修改任何欄位 THEN 系統 SHALL 標記表單為「已變更」狀態（用於取消確認判斷）

4. WHEN 頁面載入現有初洽單資料 THEN 系統 SHALL 從 API 取得資料並填入所有欄位

5. IF 「轉訂席單」按鈕啟用狀態 WHEN 使用者點擊 THEN 系統 SHALL 將初洽單轉換為正式訂席單，並導航至訂席單編輯頁面

### Requirement 7: Syncfusion 元件對應規範

**User Story:** 身為開發人員，我希望根據 Figma 設計精確選擇 Syncfusion 元件，以便實現設計一致性並減少自建元件。

#### Acceptance Criteria

1. WHEN 實作表單欄位 THEN 系統 SHALL 優先使用以下 Syncfusion 元件：
   - **文字框（TextBox）**：`@syncfusion/ej2-vue-inputs` 的 `TextBoxComponent`
   - **下拉選單（Dropdown List）**：`@syncfusion/ej2-vue-dropdowns` 的 `DropDownListComponent`
   - **日期選擇器（Date Picker）**：`@syncfusion/ej2-vue-calendars` 的 `DatePickerComponent`
   - **日期範圍選擇器（DateRange Picker）**：`@syncfusion/ej2-vue-calendars` 的 `DateRangePickerComponent`
   - **日期時間選擇器（Date Time Picker）**：`@syncfusion/ej2-vue-calendars` 的 `DateTimePickerComponent`
   - **多行文字區域（Text Area）**：`@syncfusion/ej2-vue-inputs` 的 `TextAreaComponent`

2. WHEN 實作 Toolbar 按鈕 THEN 系統 SHALL 優先使用以下 Syncfusion 元件：
   - **按鈕（Button）**：`@syncfusion/ej2-vue-buttons` 的 `ButtonComponent`
   - **圖標按鈕（Icon Button）**：`ButtonComponent` 配合 `iconCss` 屬性

3. WHEN 實作 Tabs 導航 THEN 系統 SHALL 優先使用：
   - **Tab 元件**：`@syncfusion/ej2-vue-navigations` 的 `TabComponent`

4. IF Syncfusion 無對應元件或功能不符 THEN 系統 SHALL：
   - 在 Design 文件中明確說明原因
   - 使用 Tailwind CSS + Vue 3 Composition API 自建元件
   - 記錄於元件對應表（Design 階段產出）

5. WHEN 使用 Syncfusion 元件 THEN 系統 SHALL 透過 Syncfusion MCP 查詢 API 文檔，不可自行臆測 API

### Requirement 8: Playwright MCP 視覺回歸測試

**User Story:** 身為開發人員，我希望使用 Playwright MCP 自動化測試頁面與 Figma 設計的一致性，以便確保實作品質。

#### Acceptance Criteria

1. WHEN 頁面實作完成 THEN 系統 SHALL 執行 Playwright MCP 測試，包含：
   - 頁面完整渲染測試（所有欄位可見）
   - 截圖對比測試（與 Figma 設計稿比對）
   - 表單互動測試（點擊、輸入、選擇）

2. WHEN Playwright MCP 測試執行 THEN 系統 SHALL 驗證以下項目：
   - 所有標題區塊顯示正確（基本資料、客戶資料、宴會資料、輔助資訊）
   - 所有必填欄位標記 * 號
   - 按鈕文字與樣式正確（轉訂席單、取消、儲存）
   - Tab 導航正常切換

3. IF 視覺測試失敗（與 Figma 差異超過閾值）THEN 系統 SHALL 產生差異報告，標記不一致區域

## Non-Functional Requirements

### Code Architecture and Modularity

**遵循 `structure.md` 的 Feature-based 架構原則：**

1. **Single Responsibility Principle** (structure.md:660-680)
   - **頁面元件**（`app/features/reservation/pages/EditReservationPage.vue`）：只負責組合子元件與路由整合
   - **表單區塊元件**（`app/features/reservation/components/BasicInfoSection.vue` 等）：只負責該區塊的 UI 渲染
   - **Composables**（`app/features/reservation/composables/useReservationForm.ts`）：只負責表單邏輯與驗證
   - **Store**（`app/features/reservation/store/reservation.store.ts`）：只負責狀態管理
   - **API 模組**（`app/features/reservation/api/reservation.api.ts`）：只負責 API 呼叫

2. **Modular Design** (structure.md:685-689)
   - 元件之間透過 Props 傳遞資料，透過 Emits 回傳事件
   - Syncfusion 元件封裝於 `app/shared/components/` 或 `app/features/reservation/components/`
   - 共用邏輯抽取至 `app/shared/composables/`（如表單驗證、錄）

3. **Clear Interfaces** (structure.md:717-771)
   - 所有 TypeScript interfaces 定義於 `app/features/reservation/types/reservation.types.ts`
   - Pinia Store 提供明確的 actions 與 getters
   - API 模組回傳標準化的 Response 型別

4. **Figma 元件放置規則** (structure.md:1042-1167)
   - **Feature 專屬元件**（BasicInfoSection、CustomerInfoSection 等）→ `app/features/reservation/components/`
   - **通用 Syncfusion 封裝元件**（如果可重用）→ `app/shared/components/`
   - **頁面元件**（EditReservationPage）→ `app/features/reservation/pages/`

### Performance

- **初次載入時間**：< 1.5 秒（包含資料 API 請求）
- **表單輸入響應**：< 100ms（即時驗證反饋）
- **儲存操作**：< 2 秒（API 請求 + 成功提示）
- **Syncfusion 元件懶載入**：按需載入，減少初始 bundle 大小

### Security

- **XSS 防護**：所有使用者輸入透過 Vue 自動 HTML escaping
- **CSRF 防護**：API 請求需整合 backend CSRF token（未來實作）
- **權限驗證**：確認使用者具備「編輯初洽單」權限（需整合 auth feature）
- **敏感資料**：客戶電話、Email 不記錄於前端 localStorage，僅暫存於 Pinia store

### Reliability

- **錯誤處理**：
  - API 請求失敗顯示友善錯誤訊息（例：「儲存失敗，請稍後再試」）
  - 網路斷線時提示使用者檢查連線
  - 必填欄位驗證失敗時，明確標記錯誤欄位

- **資料一致性**：
  - 儲存前驗證所有必填欄位
  - 並發編輯檢測（樂觀鎖機制，需 backend 支援）

- **狀態恢復**：
  - 使用者意外離開頁面時，提示「未儲存變更」警告
  - 不實作自動儲存草稿功能（避免複雜度）

### Usability

- **表單友善性**：
  - Tab 鍵順序符合視覺排列順序（由左至右、由上至下）
  - Enter 鍵在文字框內不觸發表單提交（避免誤操作）
  - 下拉選單支援鍵盤搜尋（Syncfusion 預設功能）

- **視覺反饋**：
  - 儲存中顯示 Loading 動畫（按鈕 disabled + Spinner）
  - 必填欄位未填寫時，顯示紅色邊框 + 錯誤訊息
  - 儲存成功顯示 Toast 通知（自動消失）

- **響應式設計**：
  - 固定寬度 1115px（根據 Figma 設計）
  - 不實作 RWD（此為內部管理系統，固定桌面版）

- **無障礙**：
  - 所有表單欄位包含 `<label>` 元素
  - 錯誤訊息透過 `aria-describedby` 關聯至對應欄位
  - Syncfusion 元件預設支援鍵盤導航

---

## 附錄：Figma 設計結構摘要

根據 Figma MCP 解析結果（Node ID: 6194:206567），頁面結構如下：

```
<container>/初洽單_tab_基本資料
├── <toolbar>/初洽單
│   ├── Button: 轉訂席單
│   └── Toolbar Actions
│       ├── Button: 取消 (紅色)
│       └── Button: 儲存 (藍色主按鈕)
├── Tabs
│   ├── 主檔 (active, 藍色底線)
│   └── 預計活動明細
└── <singleFieldModel>/初洽單_tab_基本資料
    ├── BasicInfoTitle: 基本資料
    ├── BasicInfo (8 fields, 2 rows, flex-wrap)
    ├── CustomerInfoTitle: 客戶資料
    ├── CustomerInfo (6 fields, 2 rows)
    ├── BanquetInfoTitle: 宴會資料
    ├── BanquetInfo (6 fields, 2 rows)
    ├── AdditionalInfoTitle: 輔助資訊
    └── AdditionalInfo (5 fields: 4x Dropdown + 1x Text Area)
```

**欄位寬度規範**：
- 單欄寬度：250px ~ 251px
- 欄位間距：16px (gap)
- 每行最多 4 欄（總寬度約 1051px）

**必填欄位標記**：
- 初洽狀態 *
- 初洽日 *
- 初洽業務 *

**特殊欄位組合**：
- 訂席單號 + 箭頭按鈕（Frame 17899）
- 客戶搜尋 + 圖標按鈕（Frame 17894）
- 電話區碼 + 號碼（Frame 17895）
- 縣市 + 區域雙下拉（Frame 17950）
