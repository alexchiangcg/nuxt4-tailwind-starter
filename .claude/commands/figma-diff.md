# /figma-diff — 只做差異修正（最小必要變更）

> 比對目前選取的 Figma 設計與既有檔案之差異，只輸出最小必要變更，並更新規格與視覺回歸。

## Prompt
比對我在 Figma 選取的設計與**既有檔案**的差異，僅輸出「**最小必要變更**」。

**定位既有檔案（必須遵守）：**
- 依 **Figma 的 Page 名稱**推導 `<feature>`；依 **Figma 節點名稱**推導 `<FigmaName>`
- 若是「元件」：`src/features/<feature>/components/<FigmaName>.vue`
- 若是「整頁」：`src/pages/(<feature>)/<FigmaName>.vue`

**硬性規範：**
- **優先保留 DOM 結構**；僅調整 class（Tailwind utilities）或替換為對應的 `@theme` 變數
- **嚴禁使用 inline style**；不得新增 `style` 屬性或 `<style>` 內聯寫法
- **所有註解一律使用台灣繁體中文**
- 色 / 字 / 距 / 角 / 陰影 一律對應 **Figma Tokens/Variables**；若缺失，**先建立 Token 再更新**

**輸出格式：**
- 以 **diff** 說明變更段落（台灣繁體中文註解）
- 附上 **更新後完整檔**（依推導路徑）
- 列出差異原因（字級 / 行高 / 間距 / 顏色 / 圓角 / 陰影）與對應 Tailwind class / `@theme` 變數

**同時執行：**
1) **Spec Workflow MCP**：更新變更紀錄與 AC（只列出受影響條目；中文註解）。
2) **Playwright MCP**：以「**目前選取 Frame 的寬 / 高**」重新進行視覺回歸；回傳差異快照摘要與是否更新 baseline 的建議（中文說明）。
