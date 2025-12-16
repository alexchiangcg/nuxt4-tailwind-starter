# Requirements Document

## Introduction

本規格文檔定義了「初洽單管理系統 UI」的切版需求。目標是將 Figma 設計稿（兩個 frames）轉換為使用 Nuxt 4 + Vue 3 + Syncfusion 元件實作的前端介面。本階段**僅處理 UI 層切版**，不包含 API 整合與資料流處理（將在後續階段處理）。

### 功能範圍

- **Frame 1**: 初洽單主檔表單頁面（包含 4 個分組區塊）
- **Frame 2**: 預計活動明細 DataGrid 表格頁面
- **共通元件**: Toolbar、Tabs、Buttons、Icons

### 設計來源

- Figma URL 1: https://www.figma.com/design/jXU8CU5Q0ca7nP2Opvvzb1/%E8%A8%82%E5%B8%AD_2B--MCP-?node-id=6146-144772
- Figma URL 2: https://www.figma.com/design/jXU8CU5Q0ca7nP2Opvvzb1/%E8%A8%82%E5%B8%AD_2B--MCP-?node-id=6202-301195

## Alignment with Product Vision

此功能為訂席管理系統的核心 UI 模組，透過使用 Syncfusion Vue 元件庫加速開發，確保：
1. **一致性**: 嚴格遵循專案既有的 Design System（定義於 `app/assets/css/tailwind.css`）
   - **Tailwind 切版時**：使用 `@theme` 區塊的變數（例如 `bg-primary`, `text-on-surface`）
   - **Syncfusion 元件時**：使用 `:root` 區塊的 `--color-sf-*` 變數（透過 Syncfusion 的 class 如 `e-primary` 自動綁定）
   - 使用 `--radius-sf-*`、`--gap-sf-*`、`--font-size-sf-*` 等 design tokens
2. **可維護性**: 優先採用現成元件（Syncfusion + Iconify），減少客製化複雜度
3. **可測試性**: 每個元件都有對應的 Playwright 測試

## Requirements

### Requirement 1: 實作初洽單主檔表單頁面

**User Story:** 作為使用者，我希望看到符合設計稿的初洽單主檔表單，以便進行資料檢視與編輯操作

#### Figma 設計稿元件分析

根據 Figma 設計稿（node-id: 6146:144772），以下元件已明確標註：

**表單元件對映（優先使用 Figma 標註）：**
- **TextBox** (Figma data-name: "TextBox") → Syncfusion TextBox
- **Dropdown List** (Figma data-name: "Dropdown List") → Syncfusion DropDownList
- **Date Picker** (Figma data-name: "Date Picker") → Syncfusion DatePicker
- **DateRange Picker** (Figma data-name: "DateRange Picker") → Syncfusion DateRangePicker
- **Date Time Picker** (Figma data-name: "Date Time Picker") → Syncfusion DateTimePicker
- **Text Area** (Figma data-name: "Text Area") → Syncfusion TextBox (multiline mode)

**共通元件對映：**
- **Button** (Figma data-name: "Button") → Syncfusion Button
- **Icon Button** (Figma data-name: "Icon Button") → Syncfusion Button + Iconify
- **Tabs** (Figma data-name: "Atoms / Tabs") → Syncfusion Tab

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 嚴格依照 Figma 設計稿的 data-name 屬性選擇對應的 Syncfusion 元件
2. WHEN 頁面載入 THEN 系統 SHALL 顯示頂部 Toolbar（使用 Syncfusion Button + Iconify icons）
3. WHEN 頁面載入 THEN 系統 SHALL 顯示 Tabs 切換器（使用 Syncfusion Tab，主檔 tab 為預設選中狀態）
4. WHEN 頁面載入 THEN 系統 SHALL 顯示 4 個分組區塊，使用上述 Figma 標註的 Syncfusion 元件：
   - 基本資料（8 個欄位：TextBox, Dropdown List, Date Picker）
   - 客戶資料（5 個欄位：TextBox, Dropdown List）
   - 宴會資料（6 個欄位：Dropdown List, TextBox, DateRange Picker, Date Time Picker）
   - 輔助資訊（5 個欄位：Dropdown List, Text Area）
5. WHEN 使用者點擊 Tabs 的「預計活動明細」 THEN 系統 SHALL 切換到 Frame 2 的 DataGrid 頁面
6. IF Figma 設計稿中明確標註 Syncfusion 元件 THEN 系統 **MUST** 使用該 Syncfusion Vue 元件
7. IF Figma 設計稿中未標註元件類型 THEN 系統 SHALL 根據視覺樣式選擇最接近的 Syncfusion 元件
8. WHEN 表單渲染完成 THEN 所有視覺樣式 SHALL 完全符合 Figma 設計稿（顏色、字型、間距、邊框）

### Requirement 2: 實作預計活動明細 DataGrid 頁面

**User Story:** 作為使用者，我希望看到符合設計稿的活動明細表格，以便檢視與管理多筆活動資料

#### Figma 設計稿元件分析

根據 Figma 設計稿（node-id: 6202:301195），以下元件已明確標註：

**DataGrid 元件對映：**
- **Table/DataGrid** (Figma data-name: "<dataGrid>/初洽單_tab_預計活動明細") → **Syncfusion Grid**
- **Pagination** (Figma data-name: "Pager") → Syncfusion Grid 內建分頁器
- **Atom / Data Cell** (Figma data-name: "Atom / Data Cell") → Syncfusion Grid Cell Template

**特殊欄位元件：**
- **第一欄** (Figma data-name: "OpenPOPUP*") → Icon Button（文件圖標）
- **More 按鈕** (Figma data-name: "<iconBtn>/more") → Syncfusion Button + Iconify

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 嚴格依照 Figma 設計稿使用 **Syncfusion Grid** 元件
2. WHEN 頁面載入 THEN 系統 SHALL 顯示相同的頂部 Toolbar（與 Frame 1 一致，使用 Syncfusion Button）
3. WHEN 頁面載入 THEN 系統 SHALL 顯示 Tabs 切換器（使用 Syncfusion Tab，預計活動明細 tab 為選中狀態）
4. WHEN Grid 渲染 THEN 系統 SHALL 使用 Figma 標註的欄位順序與樣式：
   - 第一欄：OpenPOPUP* 按鈕（使用 Syncfusion Button + Iconify `material-symbols:description-outline`）
   - 預計主場地（Text Cell）
   - 預計子場地（Text Cell + More 按鈕）
   - 使用日期（Date Cell）
   - 開始時間（Time Cell）
   - 結束時間（Time Cell）
   - 活動類別（Text Cell）
   - 活動主旨（Text Cell）
   - 桌圖（Text Cell）
   - 預計設備需求（Text Cell + More 按鈕）
   - 預訂桌數（Number Cell，右對齊）
   - 預訂人數（Number Cell，右對齊）
   - 備註（Text Cell）
   - 修改者、修改日期、新增者、新增日期（Text/Date Cells）
5. WHEN 表格載入 THEN 系統 SHALL 使用 Syncfusion Grid 內建的分頁器（Pager）於表格底部
6. WHEN Grid Header 渲染 THEN 系統 SHALL 使用 Figma 標註的 Header Cell 背景色（`--color-primary-opacity-5`）
7. WHEN Grid Row 渲染 THEN 系統 SHALL 使用 Figma 標註的交替行背景色（偶數行使用 `--color-on-surface-opacity4`）
8. WHEN 表格渲染完成 THEN 所有視覺樣式 SHALL 完全符合 Figma 設計稿
9. WHEN 使用者點擊 Tabs 的「主檔」 THEN 系統 SHALL 切換回 Frame 1 的表單頁面

### Requirement 3: 實作共通元件與樣式

**User Story:** 作為開發者，我希望共通元件可重用，以便維護一致性與提升開發效率

#### Acceptance Criteria

1. WHEN 實作 Toolbar 元件 THEN 系統 SHALL 建立可重用的 `InquiryToolbar.vue` 元件
2. WHEN 實作按鈕 THEN 系統 SHALL 優先使用 Syncfusion Button 元件
3. WHEN 實作 Icon 按鈕 THEN 系統 SHALL 使用 Iconify 套件（依據 Figma data-name 查找對應 icon）
4. WHEN 套用樣式 THEN 系統 SHALL 根據實作方式選擇對應的變數來源（定義於 `app/assets/css/tailwind.css`）：
   - **IF 使用 Tailwind 類別** THEN 使用 `@theme` 區塊的變數（例如：`bg-primary`, `text-on-surface`）
   - **IF 使用 Syncfusion 元件** THEN 使用 `:root` 區塊的 `--color-sf-*` 變數（透過 `e-primary` 等 class 自動綁定）
   - 避免直接使用 hex 色碼，必須使用 design tokens
5. IF 設計稿使用特定字型 THEN 系統 SHALL 使用專案既有的字型設定（Roboto 與 Noto Sans TC）
6. WHEN 元件完成 THEN 系統 SHALL 確保所有 spacing、border-radius、opacity 值與 Figma 一致

### Requirement 4: Playwright 測試覆蓋

**User Story:** 作為 QA，我希望每個元件都有自動化測試，以便確保 UI 穩定性

#### Acceptance Criteria

1. WHEN 完成表單頁面 THEN 系統 SHALL 建立 Playwright 測試檔案驗證：
   - Toolbar 按鈕可見性
   - 所有表單欄位可見性
   - Tabs 切換功能
2. WHEN 完成 DataGrid 頁面 THEN 系統 SHALL 建立 Playwright 測試檔案驗證：
   - 表格欄位正確渲染
   - 分頁器功能
   - Tabs 切換功能
3. WHEN 完成共通元件 THEN 系統 SHALL 建立獨立的元件測試
4. WHEN 所有測試執行 THEN 測試 SHALL 通過並截圖比對（可選）

## Non-Functional Requirements

### Code Architecture and Modularity

- **Single Responsibility Principle**: 每個 Vue 元件只負責一個 UI 功能區塊
- **Modular Design**:
  - `components/inquiry/` - 初洽單相關元件
  - `components/common/` - 共通元件（Toolbar, Tabs）
- **Dependency Management**: 最小化元件間的耦合，透過 props 與 events 傳遞資料
- **Clear Interfaces**: 使用 TypeScript 定義 Props 與 Emits 型別

### Performance

- **初次渲染時間**: 表單頁面應在 2 秒內完成渲染
- **Tab 切換延遲**: 切換 Tabs 應在 300ms 內完成
- **DataGrid 渲染**: 表格應使用虛擬滾動處理大量資料（如超過 100 筆）

### Security

- **XSS 防護**: 所有使用者輸入欄位應經過 sanitize（本階段為 mock data，後續整合時處理）
- **CSRF Token**: 表單提交應包含 CSRF token（後續 API 整合時處理）

### Reliability

- **錯誤處理**: 若 Syncfusion 元件載入失敗，應顯示 fallback UI
- **瀏覽器相容性**: 支援 Chrome 90+, Firefox 88+, Safari 14+

### Usability

- **響應式設計**: 目前僅需支援桌面版（1024px 以上），符合 Figma 設計稿尺寸
- **鍵盤導航**: 表單欄位應支援 Tab 鍵導航
- **載入狀態**: DataGrid 載入時應顯示 Syncfusion 的 Spinner 元件

## Out of Scope (本階段不包含)

- ❌ API 整合與資料綁定
- ❌ 表單驗證邏輯
- ❌ 資料儲存與提交功能
- ❌ 權限控制
- ❌ 多語系支援
- ❌ 行動裝置 RWD
