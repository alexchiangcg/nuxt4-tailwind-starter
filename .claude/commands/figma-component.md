# /figma-component — Figma MCP → Vue 3 元件（Feature-based）

> 將目前選取的 Figma 節點（Frame 或 Component）轉為 Vue 3 SFC，遵守 Feature-based 路徑與命名規範，並自動生成規格與視覺回歸測試。

## Prompt
使用 Figma MCP 取得我目前在 Figma 選取的節點（Frame 或 Component），輸出為 Vue 3 單檔元件。

**檔名與路徑規範（必須遵守）：**
- `<feature>` 優先取 **Figma 的 Page 名稱**；若 Page 不適合，取節點名以「/」分段後的**第一段**。若仍無法判定，暫用 `samples`，並在檔案頂部以「台灣繁體中文」註解標明需人工調整。
- 元件檔名 **遵照 Figma 節點名稱**：移除非法字元、空白轉 `-`、保持大小寫。例如：`Profile Card` → `Profile-Card.vue`
- **落檔路徑**：`src/features/<feature>/components/<FigmaName>.vue`

**硬性規範：**
- 使用 `<script setup lang="ts">` 與 **Tailwind v4（CSS-first，禁止產生 tailwind.config.js）**
- 不使用任何外部 UI 套件；使用**語意化 HTML**；圖片以 `<img alt="" />` 占位
- **嚴禁使用 inline style、style 屬性**；僅允許 Tailwind utilities 與 `@theme` 變數
- **所有註解一律使用台灣繁體中文**
- **顏色 / 字體 / 間距 / 圓角 / 陰影** 必須對應 **Figma Design Tokens / Variables**
  - 若缺少對應 Token/Variable：**先於 Figma 建立並同步**（請列出 Token 名稱、階層與值），再進行產碼
- 字體使用 `font-sans`（對應 `@theme --font-sans`）；不得硬編碼色碼或像素值

**同時執行：**
1) **Spec Workflow MCP**  
   - 產出本元件的最小規格與任務清單（用途、User Stories、AC、檔案落點/命名、測試範圍），**註解全部使用台灣繁體中文**。
2) **Playwright MCP（視覺回歸）**  
   - 針對 `src/features/<feature>/components/<FigmaName>.vue` 建立測試檔（建議路徑：`src/features/<feature>/tests/visual/<FigmaName>.spec.ts`）  
   - `viewport` 一律採用「**目前選取 Frame 的寬 / 高**」  
   - **第一次建立 baseline**；後續比對差異並回報超標處理建議

**最後回傳：**
- 完整檔內容（依上述路徑）
- **自查清單（台灣繁體中文）**：字體 / 色票 / 間距 / 陰影 / 圓角 / 互動狀態是否匹配、是否零 inline style、是否完全使用 Tokens/Variables
