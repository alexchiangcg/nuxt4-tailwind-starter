# spec-workflow：Figma → Syncfusion → Playwright 實作流程

## 目標
- 使用 spec-workflow 安排並執行任務
- 以 Figma 設計為最高準則，不自行發揮
- 兩個 Figma Frame 皆需轉換並實作
- 優先使用 Syncfusion 元件
- 每一個「單一元件」都必須有 Playwright 測試

---

## Figma 來源（必須使用 Figma MCP）

### Frame 1：檢視模式（View）
- URL  
  https://www.figma.com/design/jXU8CU5Q0ca7nP2Opvvzb1/訂席_2B--MCP-?node-id=6194-190750&m=dev

### Frame 2：編輯模式（Edit）
- URL  
  https://www.figma.com/design/jXU8CU5Q0ca7nP2Opvvzb1/訂席_2B--MCP-?node-id=6194-206567&m=dev

規則：
- 兩個 frame 都要透過 figma mcp 解析
- 不可只實作其中一個
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
- 分別解析：
  - 檢視模式 Frame
  - 編輯模式 Frame
- 列出：
  - Frame 結構
  - Component 清單
  - 元件狀態差異（View vs Edit）

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
- 保持元件可被單獨測試

---

### Step 4：Playwright 測試（必要）
- 每一個「單一元件」都要有測試
- 使用 playwright mcp
- 測試至少包含：
  - 是否正常 render
  - 基本互動（click / input / toggle）
- 不允許「只測整頁」

---

## 驗收標準

- 兩個 Figma Frame 皆已實作
- UI 與 Figma 視覺一致
- Syncfusion 使用合理且可追溯
- 所有元件皆有 Playwright 測試
- 無未說明的自建元件

---

## 禁止事項

- 不可跳過 figma mcp
- 不可自行臆測設計
- 不可省略測試
- 不可用非 Syncfusion 元件卻未說明原因
