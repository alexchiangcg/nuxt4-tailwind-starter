# /figma-design-token — 萃取 Tokens 並產出 @theme 片段

> 從目前選取的設計萃取色票/字級/半徑/陰影/Spacing，產出可貼入 `src/assets/main.css` 的 Tailwind v4 `@theme` 片段，並建立回歸計畫。

## Prompt
萃取我目前選取的設計 Tokens（**色票、字級、半徑、陰影、Spacing**），輸出可直接貼入 `src/assets/main.css` 的 **Tailwind v4 `@theme` 建議片段**。

**硬性規範：**
- 採語義命名：`--color-brand-500`、`--radius-5xl`、`--font-sans`、`--space-4`、`--shadow-2` …
- 每條以「**台灣繁體中文註解**」標註 **原 Figma 名稱 / Token 名 / 值**
- **不得使用 inline style**；僅提供 `@theme` 與 utilities 映射
- 若 Figma 尚未建立對應 Tokens/Variables：**請先列出需補齊清單並於 Figma 建立**（列明名稱/階層/值），完成後再輸出對應 `@theme`
