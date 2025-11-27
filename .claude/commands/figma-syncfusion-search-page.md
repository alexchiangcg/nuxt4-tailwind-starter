# ⚡️ Figma Frame to Vue 3 Component Command - 搜尋頁面範本

> **目標：** 將特定的 Figma 搜尋頁面 Frame 轉換為高質量的 Vue 3 **Schema-Driven** 組件。組件必須具備高度可配置性，能通過 Props 動態產生搜尋條件欄位和 Syncfusion Grid 結果欄位。

---

## 🛠️ 執行環境與流程

* **UI 框架：** Vue 3 (Composition API / `<script setup>`)
* **UI 元件庫：** 嚴格使用 **Syncfusion Vue 元件**。
* **設計模式：** **Schema-Driven Component** (由外部配置數據決定元件的結構)。
* **任務拆解方法：** 遵循 **Space-Workflow** (Structure, Plan, Action, Check, Evaluation)。
* **轉換準則：** 遵循 **Figma MCP** (Model, Component, Properties) 準則進行精確轉換。
* **回歸測試：** 使用 **Playwright Map** 模式編寫 E2E 測試。

---

## 📌 必填參數 (請在執行前填寫)

| 參數名稱 | 說明 | 範例/內容 |
| :--- | :--- | :--- |
| **Figma Frame 描述/截圖** | 提供 Figma Frame 的 **完整截圖** 或 **詳細的文字描述**（包括顏色、佈局、間距等）。 | [在此貼上截圖] 或 "一個分為上下兩部分的搜尋頁面：上方是折疊的搜尋條件區，下方是數據表格。" |
| **🔍 搜尋條件配置 (Props Schema)** | 用來動態生成搜尋表單欄位的配置陣列。請定義每個欄位的 `key`、`label`、`type` (例如: 'text', 'dropdown', 'date')。 **這是組件的 `props.searchFields` 來源。** | ```json\n[\n  { "key": "queryName", "label": "名稱", "type": "text" },\n  { "key": "queryStatus", "label": "狀態", "type": "dropdown", "options": ["Active", "Inactive"] }\n]\n``` |
| **📊 結果欄位配置 (Grid Schema)** | 用來動態生成 Syncfusion Grid 欄位的配置陣列。請定義每個欄位的 `field`、`headerText`、`textAlign` 等 Syncfusion Grid 屬性。 **這是組件的 `props.gridColumns` 來源。** | ```json\n[\n  { "field": "OrderID", "headerText": "訂單編號", "width": "120" },\n  { "field": "CustomerName", "headerText": "客戶名稱", "width": "150" }\n]\n``` |
| **數據模型 (Mock Data)** | 提供模擬的 JSON 陣列，用於填充 Syncfusion Grid。 | ```json\n[ { "OrderID": 10248, "CustomerName": "Vins Ltd" }, ... ]\n``` |

---

## 🚀 Space-Workflow 執行步驟

請依序執行以下步驟，確保代碼遵循 **Schema-Driven** 設計：

1.  **S (Structure - 結構分析)**: 分析 Figma Frame，確認搜尋區和結果區的佈局。
2.  **P (Plan - 規劃)**:
    * **搜尋區**: 規劃如何遍歷 `props.searchFields` 陣列，動態渲染對應的 **Syncfusion Input/Dropdown 元件**。
    * **結果區**: 規劃如何將 `props.gridColumns` 綁定到 **Syncfusion Grid** 的 `columns` 屬性。
3.  **A (Action - 編寫)**:
    * 編寫 Vue 3 **單一元件**，接收 `searchFields` 和 `gridColumns` 兩個 Props。
    * 使用 `v-for` 和條件渲染來實現動態欄位生成。
    * 實現基本的搜尋邏輯（例如：點擊搜尋按鈕，模擬數據篩選）。
4.  **C (Check - 測試)**: 使用 Playwright 編寫 E2E 回歸測試腳本：
    * 驗證組件是否根據傳入的 `props.gridColumns` 正確渲染出標題欄位。
    * 驗證組件是否根據傳入的 `props.searchFields` 正確渲染出搜尋輸入框。
5.  **E (Evaluation - 評估)**: 輸出完整的代碼和實施說明。

---

## 📦 期望輸出格式 (Output Format)

請將所有代碼和說明分為以下三個區塊輸出：

### 1. 🖼️ Vue 3 組件代碼 (`<ComponentFileName>.vue`)

-   **組件必須接受 `searchFields` 和 `gridColumns` 兩個 Props。**
-   包含完整的 `<template>`, `<script setup>`, 和 `<style>` (使用 Scoped CSS)。
-   所有 UI 元素必須使用 Syncfusion 元件。

### 2. 🧪 Playwright 回歸測試腳本 (`<ComponentFileName>.spec.js/ts`)

-   測試腳本必須包含動態檢查渲染的邏輯。

### 3. 📝 實施說明 (Implementation Notes)

-   總結使用的主要 Syncfusion 元件（例如：`GridComponent`, `TextBox`, `DropdownListComponent`）。
-   說明代碼如何處理 `searchFields` 和 `gridColumns` 實現動態生成。
-   說明 Playwright 腳本如何驗證動態生成的元素。/