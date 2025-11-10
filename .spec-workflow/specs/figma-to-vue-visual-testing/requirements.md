# Requirements Document

## Introduction

本功能旨在建立並驗證「Figma 設計稿轉 Vue 元件 + Playwright 視覺回歸測試」的完整工作流程。透過實作「餐廳預約表單頁面」（預約資料頁/候補/PC）作為首個測試案例，驗證以下流程的可行性與效能：

1. 使用 Figma MCP 從 Figma 設計稿匯出元件結構與樣式
2. 將設計稿轉換為符合專案架構的 Vue 元件
3. 使用 Playwright MCP 進行自動化視覺回歸測試

此功能將作為未來所有 Figma 轉代碼工作流程的範本與參考實作。

**價值主張**:
- 驗證設計與實現的一致性
- 建立自動化視覺測試流程
- 縮短從設計到上線的時間
- 提供可重複使用的工作流程模板

## Alignment with Product Vision

此功能直接對應 `product.md` 中的核心目標：

### 支援的產品原則

1. **設計與開發一致性（Design-Dev Alignment）**
   - Figma MCP 工作流程整合 ✅
   - 視覺回歸測試確保實現品質 ✅
   - 元件化開發與設計系統對齊 ✅

2. **開發者體驗優先（DX First）**
   - 自動化設計稿轉代碼流程
   - 減少手動像素比對工作
   - 即時視覺反饋

3. **企業級代碼品質（Production Ready）**
   - 自動化視覺測試確保 UI 品質
   - 預防視覺回歸問題
   - 可測試性架構驗證

### 對應的 Key Features

- **Figma 轉代碼工作流程**（產品文檔第 6 點）
  - 針對 Figma MCP 優化的元件結構
  - 清晰的元件放置規則
  - Playwright MCP 整合，支援視覺回歸測試

## Requirements

### Requirement 1: Figma 設計稿匯出與分析

**User Story:** 作為開發者，我想從 Figma 匯出設計稿的結構與樣式資訊，以便快速理解設計意圖並準備實作。

#### Acceptance Criteria

1. WHEN 開發者在 Figma Desktop App 中選擇「預約資料頁/候補/PC」frame THEN 系統 SHALL 透過 Figma MCP 的 `get_metadata` 工具取得完整的 frame 結構
2. WHEN 取得 metadata 後 THEN 系統 SHALL 調用 `get_design_context` 工具取得詳細的設計上下文資訊（包含樣式、間距、顏色、文字等）
3. WHEN 設計上下文包含重複的 UI 模式（如 input、dropdown、checkbox）THEN 系統 SHALL 識別這些模式並規劃為可重用元件
4. IF 設計稿包含 Figma Variables/Design Tokens THEN 系統 SHALL 使用 `get_variable_defs` 工具取得變數定義
5. WHEN 設計稿包含 Code Connect 資訊 THEN 系統 SHALL 使用 `get_code_connect_map` 工具取得現有元件對應關係

#### 技術細節

- **Figma Frame ID**: `5006:11441`
- **Frame Name**: `預約資料頁/候補/PC`
- **尺寸**: 1920x2147 (PC Desktop)
- **主要區塊**:
  - Header (Breadcrumb + Navigation)
  - Content Container (預約表單 + 預約詳情卡片)

### Requirement 2: Vue 元件架構設計與實作

**User Story:** 作為開發者，我想將 Figma 設計稿轉換為符合專案 Feature-based 架構的 Vue 元件，以便維持代碼的模組化與可維護性。

#### Acceptance Criteria

1. WHEN 分析 Figma 設計稿結構 THEN 系統 SHALL 依據 `structure.md` 規範決定元件放置位置：
   - 通用 UI 元件（Button、Input、Dropdown、Checkbox）→ `app/shared/components/`
   - 餐廳預約功能專屬元件 → `app/features/restaurant-booking/components/`
   - 完整頁面元件 → `app/features/restaurant-booking/pages/`

2. WHEN 實作 Vue 元件 THEN 元件 SHALL 遵循以下命名規範：
   - PascalCase 命名（如 `ReservationForm.vue`）
   - 清晰的檔案結構（`<script setup>` → `<template>` → `<style>`）
   - TypeScript 型別安全

3. WHEN 實作通用 UI 元件 THEN 元件 SHALL：
   - 為 Dumb Components（無業務邏輯）
   - 透過 Props 接收資料
   - 透過 Emits 發送事件
   - 支援 v-model 雙向綁定（適用於表單元件）

4. WHEN 實作 Feature 元件 THEN 元件 SHALL：
   - 使用 composables 封裝業務邏輯
   - 遵循 Single Responsibility Principle
   - 檔案大小 ≤ 300 行

5. WHEN 使用 Tailwind CSS 實作樣式 THEN 樣式 SHALL：
   - 對齊 Figma Design Tokens（顏色、字體、間距）
   - 使用 `tailwind.config.ts` 中定義的設計系統
   - 支援深色模式（如適用）

#### 需實作的元件清單（初步分析）

**Shared Components** (`app/shared/components/`):
- `BaseInput.vue` - 文字輸入框
- `BaseDropdown.vue` - 下拉選單
- `BaseRadioGroup.vue` - 單選按鈕群組
- `BaseCheckbox.vue` - 核取方塊
- `BaseDatePicker.vue` - 日期選擇器
- `BaseTextarea.vue` - 多行文字輸入
- `BaseButton.vue` - 按鈕
- `BaseChip.vue` - 標籤/晶片

**Feature Components** (`app/features/restaurant-booking/components/`):
- `ReservationForm.vue` - 預約資訊表單
- `SpecialRequestsForm.vue` - 特殊需求表單
- `PaymentMethodSelector.vue` - 付款方式選擇器
- `PaymentTermsAgreement.vue` - 付款條款同意區塊
- `BookingDetailCard.vue` - 預約詳情卡片（右側）

**Feature Page** (`app/features/restaurant-booking/pages/`):
- `ReservationFormPage.vue` - 完整的預約表單頁面

### Requirement 3: Tailwind CSS 設計系統對齊

**User Story:** 作為開發者，我想確保 Vue 元件使用的樣式與 Figma 設計稿一致，以便視覺呈現完全符合設計規格。

#### Acceptance Criteria

1. WHEN 從 Figma 匯出設計稿 THEN 系統 SHALL 提取以下設計屬性：
   - 顏色（背景、文字、邊框）
   - 字體（family、size、weight、line-height）
   - 間距（padding、margin、gap）
   - 圓角（border-radius）
   - 陰影（box-shadow）

2. WHEN 設計稿使用的顏色不在 `tailwind.config.ts` 中 THEN 開發者 SHALL 更新配置檔案添加新顏色定義

3. WHEN 實作元件樣式 THEN 元件 SHALL：
   - 優先使用 Tailwind utility classes
   - 使用 `@apply` 封裝重複的樣式模式（如需要）
   - 避免內聯 `style` 屬性（除非動態計算）

4. WHEN 元件包含響應式設計 THEN 元件 SHALL 使用 Tailwind 響應式前綴（`sm:`、`md:`、`lg:`、`xl:`）

#### Figma 設計 Token 對應

需確認並對齊以下設計屬性：
- **字體**: DM Sans, DM Serif Display, DM Mono（已在 `tailwind.config.ts` 配置）
- **顏色**: 提取設計稿中使用的主色、次色、狀態色
- **間距**: 確認間距系統（4px、8px、16px、24px 等）
- **圓角**: 確認 border-radius 值
- **字體大小**: 確認標題、內文、說明文字的字體大小階層

### Requirement 4: Playwright 視覺回歸測試

**User Story:** 作為開發者，我想使用 Playwright MCP 進行自動化視覺回歸測試，以便確保實作的元件在視覺上與 Figma 設計稿一致。

#### Acceptance Criteria

1. WHEN 完成 Vue 元件實作 THEN 測試 SHALL 包含以下測試案例：
   - 頁面完整截圖測試
   - 個別元件截圖測試
   - 互動狀態測試（hover、focus、active、disabled）
   - 表單驗證狀態測試（valid、invalid、error）

2. WHEN 執行視覺回歸測試 THEN 測試 SHALL 使用 Playwright MCP 的 `browser_snapshot` 工具：
   - 捕捉可訪問性快照（accessibility snapshot）
   - 驗證元件結構
   - 支援跨瀏覽器測試（Chrome、Firefox、Safari）

3. WHEN 需要截圖比對 THEN 測試 SHALL 使用 `browser_take_screenshot` 工具：
   - 產生基準截圖（baseline）
   - 比對當前實作與基準截圖
   - 標記視覺差異

4. WHEN 測試表單互動 THEN 測試 SHALL 使用 Playwright MCP 的互動工具：
   - `browser_fill_form` - 填寫表單欄位
   - `browser_click` - 點擊按鈕與互動元素
   - `browser_type` - 輸入文字
   - `browser_select_option` - 選擇下拉選項

5. IF 視覺回歸測試失敗 THEN 系統 SHALL：
   - 產生差異截圖（diff screenshot）
   - 提供詳細的失敗報告
   - 標註差異位置與幅度

6. WHEN 視覺回歸測試通過 THEN 系統 SHALL：
   - 更新基準截圖（如需要）
   - 產生測試通過報告
   - 記錄測試覆蓋率

#### 測試場景清單

**元件層級測試**:
1. BaseInput - 預設、focus、filled、disabled、error 狀態
2. BaseDropdown - 關閉、開啟、選中、disabled 狀態
3. BaseCheckbox - 未勾選、已勾選、disabled 狀態
4. BaseDatePicker - 關閉、開啟日曆、選中日期狀態
5. BaseButton - 預設、hover、active、disabled 狀態

**頁面層級測試**:
1. ReservationFormPage - 空白表單狀態
2. ReservationFormPage - 部分填寫狀態
3. ReservationFormPage - 驗證錯誤狀態
4. ReservationFormPage - 完整填寫狀態
5. ReservationFormPage - 捲動測試（頁面高度 2147px）

**互動流程測試**:
1. 完整預約流程 - 從空白表單到提交
2. 表單驗證流程 - 觸發各種驗證錯誤
3. 特殊需求選擇流程 - 選擇不同的特殊需求晶片
4. 付款方式選擇流程 - 選擇不同付款方式

### Requirement 5: 工作流程文檔與範本

**User Story:** 作為團隊成員，我想要有清晰的工作流程文檔與可重用的範本，以便未來能快速複製此流程處理其他 Figma 設計稿。

#### Acceptance Criteria

1. WHEN 完成整個工作流程 THEN 專案 SHALL 包含以下文檔：
   - `README.md` - 工作流程概覽與快速開始指南
   - `WORKFLOW.md` - 詳細的步驟說明與最佳實踐
   - `TESTING.md` - 視覺回歸測試指南

2. WHEN 文檔記錄工作流程 THEN 文檔 SHALL 包含：
   - 從 Figma 匯出到實作的完整步驟
   - Figma MCP 工具使用範例
   - Vue 元件實作範例
   - Playwright MCP 測試範例
   - 常見問題與解決方案

3. WHEN 建立可重用範本 THEN 專案 SHALL 提供：
   - Vue 元件範本（Shared Component、Feature Component、Page）
   - Playwright 測試範本
   - Figma MCP 查詢腳本範本

4. WHEN 記錄實作日誌 THEN 開發者 SHALL 使用 `log-implementation` 工具記錄：
   - 實作的元件清單（artifacts.components）
   - API 端點（如有，artifacts.apiEndpoints）
   - 工具函式（artifacts.functions）
   - 整合模式（artifacts.integrations）
   - 修改/新增的檔案清單
   - 程式碼統計（行數）

## Non-Functional Requirements

### Code Architecture and Modularity

- **Single Responsibility Principle**:
  - 每個元件只負責一個 UI 功能
  - Composables 只封裝一個業務邏輯
  - 測試檔案對應一個元件或功能

- **Modular Design**:
  - Shared components 可跨 feature 重用
  - Feature components 封裝在 feature 目錄內
  - 測試與元件就近放置（`__tests__/`）

- **Dependency Management**:
  - Shared components 不依賴 features
  - Features 可依賴 shared components
  - 使用 barrel exports 控制 public API

- **Clear Interfaces**:
  - Props 使用 TypeScript interface 定義
  - Emits 使用 TypeScript 型別約束
  - Composables 返回明確的 API

### Performance

- **頁面載入效能**:
  - 初始渲染時間 < 1 秒
  - Time to Interactive (TTI) < 2 秒
  - First Contentful Paint (FCP) < 1.5 秒

- **元件渲染效能**:
  - 表單元件輸入響應時間 < 16ms（60fps）
  - Dropdown 開啟動畫流暢（無掉幀）
  - 日期選擇器渲染時間 < 100ms

- **測試執行效能**:
  - 單一元件視覺測試 < 5 秒
  - 完整頁面視覺測試 < 15 秒
  - 互動流程測試 < 30 秒

### Security

- **表單安全**:
  - 所有使用者輸入須經過驗證
  - 防止 XSS 攻擊（Vue 自動 HTML escaping）
  - 敏感資料（如電話、信用卡）不記錄於 console

- **資料傳輸**:
  - 表單提交使用 HTTPS（生產環境）
  - 不在 URL 參數中傳遞敏感資料

### Reliability

- **元件穩定性**:
  - 表單驗證邏輯覆蓋所有邊界情況
  - 元件在 props 缺失時有合理的預設值
  - 錯誤狀態有明確的使用者提示

- **測試覆蓋率**:
  - 視覺回歸測試覆蓋所有元件狀態
  - 互動測試覆蓋主要使用者流程
  - 邊界條件測試（空值、超長文字、特殊字元）

- **瀏覽器相容性**:
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+

### Usability

- **可訪問性 (A11y)**:
  - 所有表單欄位有 `<label>` 或 `aria-label`
  - 錯誤訊息使用 `aria-describedby` 關聯
  - 鍵盤導航支援（Tab、Enter、Space、Escape）
  - Focus 狀態明顯可見
  - 色彩對比符合 WCAG 2.1 AA 標準

- **使用者體驗**:
  - 表單欄位有清晰的 placeholder 或說明文字
  - 驗證錯誤即時顯示（不等到提交）
  - Loading 狀態有視覺反饋
  - 必填欄位有明確標示（*）

- **響應式設計**:
  - PC 桌面版（1920px，本次實作重點）
  - 平板版（768px - 1024px，未來擴展）
  - 行動版（< 768px，未來擴展）

### Maintainability

- **程式碼品質**:
  - ESLint 無錯誤
  - TypeScript 型別檢查通過
  - Prettier 格式化一致

- **文檔完整性**:
  - 所有 public API 有 JSDoc 註解
  - 複雜邏輯有內聯註解
  - README 說明元件用法

- **測試維護**:
  - 測試命名清晰（描述測試目的）
  - 基準截圖版本控制
  - 測試失敗時有明確的錯誤訊息

## Success Criteria

本功能完成的標準：

1. ✅ 成功從 Figma 匯出「預約資料頁/候補/PC」設計稿
2. ✅ 完成所有通用 UI 元件實作（8 個 shared components）
3. ✅ 完成所有 Feature 元件實作（5 個 feature components）
4. ✅ 完成 ReservationFormPage 頁面整合
5. ✅ 所有元件通過 Playwright 視覺回歸測試
6. ✅ 測試覆蓋率達到 100%（所有元件狀態）
7. ✅ 文檔完整（README、WORKFLOW、TESTING）
8. ✅ 程式碼品質檢查通過（ESLint、TypeScript、Prettier）
9. ✅ 頁面在真實瀏覽器中與 Figma 設計稿視覺一致（允許 < 2px 誤差）
10. ✅ 實作日誌已使用 `log-implementation` 工具記錄

## Out of Scope

本次實作**不包含**：

- ❌ 後端 API 整合（表單提交僅為前端驗證）
- ❌ 真實的付款流程串接
- ❌ 使用者認證與授權
- ❌ 多語系支援（i18n）
- ❌ 平板與行動版響應式設計（僅 PC 版）
- ❌ 效能優化（如虛擬捲動、lazy loading）
- ❌ 單元測試（僅視覺回歸測試）
- ❌ E2E 測試（完整業務流程）
- ❌ 真實資料整合（使用 mock data）
