# spec-workflow：Figma → Syncfusion → Playwright 實作流程

## 目標
- 使用 spec-workflow MCP 安排並執行任務要遵守 Steering Documents
- 以 Figma 設計為最高準則，不自行發揮
- Figma Frame 需轉換並實作
- 優先使用 Syncfusion 元件
- 最後做 Playwright mcp 回歸測試

---

## Figma 來源（必須使用 Figma MCP）

### Frame：編輯模式（Edit）
- URL  
  https://www.figma.com/design/jXU8CU5Q0ca7nP2Opvvzb1/訂席_2B--MCP-?node-id=6194-206567&m=dev

規則：
- frame 都要透過 figma mcp 解析
- Layout、spacing、字級、顏色需與 Figma 一致

---

## 實作原則

- UI 元件：
  - 優先使用 Syncfusion 元件
  - 僅在「Syncfusion 無對應元件」時，才允許自建元件
- Syncfusion 元件：
  - 必須透過 Syncfusion MCP 查詢、使用
  - 不允許自行猜 API 或 props
- 不做設計調整、不補設計、不優化 UX
- 只做「如實轉換」

---

## 任務流程（spec-workflow）

### Step 1：解析 Figma
- 使用 figma mcp
- 解析 Frame
- 列出：
  - Frame 結構
  - Component 清單

---

### Step 2：元件對應表
- 對每一個 Figma Component：
  - 嘗試對應 Syncfusion 元件
  - 標註：
    - 使用的 Syncfusion 套件
    - Component 名稱
- 若無對應：
  - 明確標註為「自建元件」
  - 說明原因（Syncfusion 無此類型）

---

### Step 3：逐一實作元件
- 每個元件獨立實作
- 不合併、不偷省

---

### Step 4：Playwright 測試（必要）
- 使用 playwright mcp 整頁跟 figma 設計比對
- 測試至少包含：
  - 是否正常 render

---

## 驗收標準

- Figma Frame 已實作
- UI 與 Figma 視覺一致
- Syncfusion 使用合理且可追溯
- 整頁做 Playwright MCP 測試
- 無未說明的自建元件

---

## 禁止事項

- 不可跳過 figma mcp
- 不可自行臆測設計
- 不可省略測試
- 不可用非 Syncfusion 元件卻未說明原因