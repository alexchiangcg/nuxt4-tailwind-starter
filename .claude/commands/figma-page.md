# /figma-page — Figma MCP → Vue 3 頁面（Feature-based）

> 將目前選取的 Figma Frame 轉為 Vue 3 頁面元件，採 Feature-based 路徑，並自動生成規格與視覺回歸測試。

## Prompt
使用 Figma MCP 讀取我目前選取的整個 Frame，輸出為 Vue 3 單檔**頁面**元件。

**檔名與路徑規範（必須遵守）：**
- `<feature>` 優先取 **Figma 的 Page 名稱**；若 Page 不適合，取節點名以「/」分段後的**第一段**。若仍無法判定，暫用 `samples`，並在檔案頂部以「台灣繁體中文」註解標明需人工調整。
- 頁面檔名 **遵照 Figma 節點名稱**：移除非法字元、空白轉 `-`、保持大小寫。例如：`Member Home` → `Member-Home.vue`
- **落檔路徑**：`src/pages/(<feature>)/<FigmaName>.vue`

**硬性規範：**
- `<script setup lang="ts">` + **Tailwind v4（CSS-first，禁止產生 tailwind.config.js）**
- 不使用外部 UI 套件；**語意化 HTML**；圖片以 `<img alt="" />` 占位；簡單 icon 可使用 inline SVG
- 容器需可伸縮，不固定 viewport（路由/版型層控制頁寬）
- **嚴禁 inline style**；僅能使用 Tailwind utilities 與 `@theme` 變數
- **所有註解一律使用台灣繁體中文**
- **顏色 / 字體 / 間距 / 圓角 / 陰影** 必須來源於 **Figma Tokens/Variables**  
  - 若缺少 Token/Variable：**先在 Figma 建立並同步**，再產碼

**同時執行：**
1) **Spec Workflow MCP**  
   - 產出頁面最小規格（路由、區塊切分、User Stories、AC、檔名/落點、測試範圍），**註解使用台灣繁體中文**。
2) **Playwright MCP（視覺回歸）**  
   - 針對 `src/pages/(<feature>)/<FigmaName>.vue` 建立測試檔（建議：`src/features/<feature>/tests/visual/<FigmaName>.spec.ts` 或相同專案測試位置）  
   - `viewport` 採用「**目前選取 Frame 的寬 / 高**」  
   - **第一次建立 baseline**；後續比對差異與處理建議

**最後附上：**
- **版面切分與命名建議（台灣繁體中文註解）**：僅能使用 Tokens/Variables 與 utilities，不得出現 inline style
