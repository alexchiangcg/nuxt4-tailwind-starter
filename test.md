# Tailwind CSS 設計系統顏色變數整合指南

## 概述

本文檔說明如何將設計系統的 CSS 變數（`--color-sf-*`）映射到 Tailwind CSS 的 `@theme` 區塊，讓 Tailwind 能夠使用更簡潔的類名存取設計系統的顏色。

## 轉換規則

### 命名規則

```
原始變數：--color-sf-{name}
Tailwind 變數：--color-{name}
```

**範例：**
- `--color-sf-blue` → `--color-blue`
- `--color-sf-primary` → `--color-primary`
- `--color-sf-series-1` → `--color-series-1`

### 值的引用方式

所有 Tailwind 變數都使用 `rgb()` 包裝原始變數的引用：

```css
--color-{name}: rgb(var(--color-sf-{name}));
```

**重要：** 值不是直接複製 RGB 數值，而是引用 `:root` 中的原始變數，確保單一真實來源（Single Source of Truth）。

## 實際範例代碼

### 轉換前後對比

**:root 定義（保持不變）：**
```css
:root {
  --color-sf-blue: 0, 133, 255;
  --color-sf-primary: 40, 119, 238;
  --color-sf-series-1: var(--color-sf-surface-variant);
}
```

**Tailwind @theme 映射：**
```css
@theme {
  /* 基礎顏色 - RGB 值 */
  --color-blue: rgb(var(--color-sf-blue));

  /* 語義顏色 - RGB 值 */
  --color-primary: rgb(var(--color-sf-primary));

  /* 引用其他變數的情況 */
  --color-series-1: rgb(var(--color-sf-series-1));
}
```

### 特殊情況處理

**1. 帶 opacity 的顏色：**
```css
/* :root */
--color-sf-danger-opacity12: 244, 73, 62 / 0.12;

/* @theme */
--color-danger-opacity12: rgb(var(--color-sf-danger-opacity12));
```

**2. 引用其他變數的顏色：**
```css
/* :root */
--color-sf-background: var(--color-sf-surface);

/* @theme */
--color-background: rgb(var(--color-sf-background));
```

## 使用方式說明

### 在 Tailwind 類名中使用

轉換後，您可以在 Tailwind 類名中使用簡潔的顏色名稱：

```vue
<template>
  <!-- 背景色 -->
  <div class="bg-blue">藍色背景</div>
  <div class="bg-primary">主色背景</div>

  <!-- 文字顏色 -->
  <p class="text-danger">錯誤訊息</p>
  <p class="text-success">成功訊息</p>

  <!-- 邊框顏色 -->
  <button class="border-2 border-outline">按鈕</button>

  <!-- 圖表系列色 -->
  <div class="bg-series-1">系列 1</div>
  <div class="bg-series-2">系列 2</div>
</template>
```

### 設計系統主題切換

當需要切換主題時，只需修改 `:root` 中的原始變數值，Tailwind 會自動繼承變更：

```css
:root[data-theme="dark"] {
  --color-sf-primary: 100, 150, 255; /* 深色模式的主色 */
}
```

Tailwind 的 `--color-primary` 會自動使用新值，無需額外修改。

## 維護指引

### 新增顏色變數

**步驟 1：在 :root 中定義原始變數**
```css
:root {
  --color-sf-new-color: 100, 200, 150;
}
```

**步驟 2：在 @theme 中映射變數**
```css
@theme {
  --color-new-color: rgb(var(--color-sf-new-color));
}
```

**步驟 3：在程式碼中使用**
```html
<div class="bg-new-color">新顏色</div>
```

### 修改現有顏色

**只需修改 :root 中的定義：**
```css
:root {
  --color-sf-primary: 50, 130, 250; /* 修改主色 */
}
```

所有使用 `bg-primary`、`text-primary` 的地方會自動更新。

### 命名規範

1. **基礎顏色**：直接使用顏色名稱
   - `--color-blue`, `--color-red`, `--color-green`

2. **語義顏色**：使用功能性命名
   - `--color-primary`, `--color-secondary`, `--color-danger`

3. **帶 opacity 的顏色**：在名稱後加上 opacity 值
   - `--color-primary-opacity12` (12% opacity)
   - `--color-danger-opacity8` (8% opacity)

4. **系列顏色**：使用數字編號
   - `--color-series-1`, `--color-series-2`, ...

### 檔案結構

```
app/assets/css/tailwind.css
├── :root { }              ← 設計系統原始定義
├── @theme { }             ← Tailwind 變數映射
└── 其他 Tailwind 樣式
```

## 優點

1. **單一真實來源**：顏色值只在 `:root` 定義一次
2. **簡潔的類名**：使用 `bg-primary` 而非 `bg-sf-primary`
3. **易於維護**：修改 `:root` 自動套用到所有 Tailwind 類名
4. **主題切換**：支援動態主題切換（Dark Mode 等）
5. **類型安全**：Tailwind IntelliSense 可以自動補全顏色類名
