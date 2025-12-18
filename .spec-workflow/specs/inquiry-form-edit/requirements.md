# Requirements Document

## Introduction

本功能為「初洽單編輯頁面」(Inquiry Form Edit)，用於訂席系統中的初次洽談單據編輯與維護。此頁面允許業務人員建立、查看、編輯初洽單資料，包含客戶基本資訊、宴會需求、輔助資訊等，是訂席流程的第一階段關鍵表單。

設計稿來源：Figma Frame "編輯模式（Edit）" (node-id: 6194:206567)

## Alignment with Product Vision

此功能符合 product.md 中的以下原則：

- **設計與開發一致性 (Design-Dev Alignment)**：嚴格遵循 Figma MCP 工作流程，確保 UI 與設計稿 100% 一致
- **企業級代碼品質 (Production Ready)**：使用 Syncfusion Vue 元件庫，確保元件的穩定性與可維護性
- **模組化與可維護性 (Modular & Maintainable)**：採用 Feature-based 架構，將初洽單功能模組化
- **優先使用 Syncfusion 元件**：除非 Syncfusion 無對應元件，否則不自建

## Requirements

### REQ-1: 頁面頂部工具列 (Toolbar)

**User Story:** 身為業務人員，我希望在頁面頂部能快速執行「轉訂席單」、「取消」、「儲存」等操作，以便有效率地管理初洽單流程。

#### Acceptance Criteria

1. WHEN 頁面載入完成 THEN 系統 SHALL 顯示頂部工具列，包含三個按鈕：「轉訂席單」、「取消」、「儲存」
2. WHEN 使用者點擊「轉訂席單」按鈕 THEN 系統 SHALL 驗證表單必填欄位後，將初洽單轉換為訂席單
3. WHEN 使用者點擊「取消」按鈕 THEN 系統 SHALL 放棄當前編輯內容並返回上一頁
4. WHEN 使用者點擊「儲存」按鈕 THEN 系統 SHALL 驗證表單必填欄位後，儲存初洽單資料
5. IF 表單資料未修改 THEN 「轉訂席單」按鈕 SHALL 顯示為 disabled 狀態

#### UI 規格

- 「轉訂席單」：Secondary button (border style, disabled 狀態)
- 「取消」：Danger button (紅色 border, #f4493e)
- 「儲存」：Primary button (藍色背景, #2877ee)

### REQ-2: 頁籤導航 (Tabs Navigation)

**User Story:** 身為業務人員，我希望透過頁籤切換不同資料區塊，以便分類檢視與編輯資料。

#### Acceptance Criteria

1. WHEN 頁面載入完成 THEN 系統 SHALL 顯示兩個頁籤：「主檔」、「預計活動明細」
2. WHEN 頁面初始載入 THEN「主檔」頁籤 SHALL 預設為 active 狀態
3. WHEN 使用者點擊「預計活動明細」頁籤 THEN 系統 SHALL 切換至對應內容區塊
4. WHEN 頁籤為 active 狀態 THEN 該頁籤 SHALL 顯示藍色底線與藍色文字 (#2877ee)
5. WHEN 頁籤為 inactive 狀態 THEN 該頁籤 SHALL 顯示灰色文字 (#3c4a5b)

### REQ-3: 基本資料區塊 (Basic Info Section)

**User Story:** 身為業務人員，我希望填寫初洽單的基本資料，包含初洽單號、狀態、日期、業務等資訊，以便建立初洽紀錄。

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 顯示「基本資料」區塊標題，包含藍色左側邊線與藍色文字
2. WHEN 頁面載入 THEN 系統 SHALL 顯示以下欄位（排列為 4 欄式網格）：
   - 初洽單號 (唯讀, 系統自動產生, 格式: YYYYMMDDXXX)
   - 初洽狀態 (必填*, Dropdown, 選項: A:待到店, B:已到店, C:已下訂等)
   - 初洽日 (必填*, Date Picker, 格式: YYYY/MM/DD)
   - 初洽業務 (必填*, Dropdown, 格式: 代碼:姓名)
   - 初洽配合專案 (Dropdown, 格式: 代碼:專案名稱)
   - 訂席單號 (唯讀, 帶有前往按鈕 →)
   - 人工單號 (TextBox)
   - 初洽訂席來源 (Dropdown, 格式: 代碼:來源名稱)

3. WHEN 使用者點擊「訂席單號」旁的「→」按鈕 THEN 系統 SHALL 導航至對應訂席單詳情頁
4. IF 欄位標記為「必填*」AND 欄位為空 THEN 系統 SHALL 於儲存時顯示驗證錯誤訊息
5. IF 欄位標記為「唯讀」THEN 該欄位 SHALL 顯示為 disabled 狀態且背景色為 #e5eaf3

### REQ-4: 客戶資料區塊 (Customer Info Section)

**User Story:** 身為業務人員，我希望記錄客戶的基本聯絡資訊，以便後續追蹤與聯繫。

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 顯示「客戶資料」區塊標題
2. WHEN 頁面載入 THEN 系統 SHALL 顯示以下欄位：
   - 客戶姓名 (必填*, TextBox, 帶有「...」按鈕開啟客戶選擇器)
   - 聯絡人 (必填*, TextBox, 唯讀)
   - 聯絡手機 (必填*, 分為兩部分：國碼 Dropdown + 電話號碼 TextBox)
   - 聯絡信箱 (必填*, TextBox)
   - 居住地 (兩個 Dropdown：縣市 + 行政區)

3. WHEN 使用者點擊「客戶姓名」旁的「...」按鈕 THEN 系統 SHALL 開啟客戶選擇器彈窗
4. WHEN 使用者從客戶選擇器選擇客戶 THEN 系統 SHALL 自動填入「聯絡人」欄位
5. WHEN 使用者選擇「居住地」縣市 THEN 系統 SHALL 更新行政區 Dropdown 選項
6. IF 聯絡信箱格式不正確 THEN 系統 SHALL 顯示驗證錯誤訊息

### REQ-5: 宴會資料區塊 (Banquet Info Section)

**User Story:** 身為業務人員，我希望記錄客戶的宴會需求，包含類別、名稱、預算、日期等，以便規劃宴會服務。

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 顯示「宴會資料」區塊標題
2. WHEN 頁面載入 THEN 系統 SHALL 顯示以下欄位：
   - 類別 (必填*, Dropdown, 選項: 01:婚宴, 02:尾牙, 03:春酒等)
   - 宴會名稱 (必填*, TextBox)
   - 預算範圍 (TextBox, 格式: 50,000–100,000)
   - 賞廳業務 (Dropdown)
   - 預計宴客日期區間 (DateRange Picker, 格式: YYYY/MM/DD - YYYY/MM/DD)
   - 預約賞廳日期時間 (DateTime Picker, 格式: YYYY/MM/DD HH:mm)

3. WHEN 使用者選擇「預計宴客日期區間」THEN 系統 SHALL 驗證結束日期不得早於開始日期
4. WHEN 使用者選擇「預約賞廳日期時間」THEN 系統 SHALL 確保時間為營業時間內
5. IF「類別」為必填且未選擇 THEN 系統 SHALL 於儲存時顯示驗證錯誤訊息

### REQ-6: 輔助資訊區塊 (Additional Info Section)

**User Story:** 身為業務人員，我希望記錄客戶的競業資訊與洽談紀錄，以便分析客戶需求與追蹤進度。

#### Acceptance Criteria

1. WHEN 頁面載入 THEN 系統 SHALL 顯示「輔助資訊」區塊標題
2. WHEN 頁面載入 THEN 系統 SHALL 顯示以下欄位：
   - 已看同業場館 (MultiSelect Dropdown, 顯示格式: 代碼:場館名稱)
   - 決定宴客場地主因 (MultiSelect Dropdown, 顯示格式: 代碼:原因)
   - 下訂同業場館 (Dropdown)
   - 未下定原因 (MultiSelect Dropdown)
   - 接洽紀錄 (TextArea, 可調整大小)

3. WHEN 使用者輸入「接洽紀錄」THEN 系統 SHALL 允許多行文字輸入
4. WHEN 使用者拖曳「接洽紀錄」右下角 THEN 系統 SHALL 調整 TextArea 高度
5. IF MultiSelect Dropdown 有多個選項被選擇 THEN 系統 SHALL 以逗號分隔顯示

## Non-Functional Requirements

### Code Architecture and Modularity

- **Feature-based 架構**：將初洽單功能放置於 `app/features/inquiry/` 目錄
- **元件分層**：
  - Pages: `app/features/inquiry/pages/InquiryEditPage.vue`
  - Components: `app/features/inquiry/components/` (BasicInfoSection.vue, CustomerInfoSection.vue 等)
  - Composables: `app/features/inquiry/composables/useInquiryForm.ts`
  - Types: `app/features/inquiry/types/inquiry.types.ts`
- **Syncfusion 優先原則**：100% 使用 Syncfusion Vue 元件，不自建表單控制項
- **設計一致性**：UI 實作必須與 Figma 設計稿 pixel-perfect 一致

### Performance

- **頁面載入時間**：初次載入 < 2 秒
- **表單操作回應**：Dropdown 展開、DatePicker 選擇等操作回應 < 100ms
- **儲存操作**：提交表單到完成儲存 < 1 秒

### Security

- **欄位驗證**：所有必填欄位皆需前端與後端雙重驗證
- **SQL Injection 防護**：所有輸入欄位需進行 SQL Injection 防護
- **XSS 防護**：所有文字輸入需進行 HTML encode

### Reliability

- **表單自動儲存**：每 5 分鐘自動儲存草稿至 LocalStorage
- **錯誤處理**：網路錯誤時需顯示友善錯誤訊息並允許重試
- **資料完整性**：儲存前驗證所有必填欄位與格式

### Usability

- **必填提示**：必填欄位以「*」標記，顏色為 #f4493e
- **唯讀欄位**：唯讀欄位背景色為 #e5eaf3，並顯示 opacity 0.55
- **錯誤訊息**：驗證錯誤需在對應欄位下方顯示紅色錯誤文字
- **鍵盤導航**：支援 Tab 鍵在欄位間移動
- **響應式設計**：支援 1920x1080 以上桌面解析度
