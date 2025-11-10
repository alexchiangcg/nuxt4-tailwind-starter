# Visual Regression Testing Guide

## Overview

### 為什麼需要視覺回歸測試？

**視覺回歸測試** (Visual Regression Testing) 確保 UI 元件在代碼修改後仍與設計稿保持一致。

#### 傳統單元測試的局限性

```typescript
// ✅ 單元測試可以驗證邏輯
test('BaseButton emits click event', () => {
  // ...測試事件觸發
})

// ❌ 但無法驗證視覺外觀
// - 按鈕顏色是否正確？
// - padding 和 margin 是否符合設計稿？
// - hover 狀態是否有視覺回饋？
// - 文字大小和字體是否正確？
```

#### 視覺測試的優勢

- ✅ **像素級精確度**: 確保實作與 Figma 設計稿 100% 一致 (±2px 容差)
- ✅ **防止視覺回歸**: 修改 CSS 或元件時立即發現視覺變化
- ✅ **覆蓋所有狀態**: default, hover, focus, active, disabled, error 等
- ✅ **自動化比對**: 無需手動檢查每個元件
- ✅ **持續整合**: 在 CI/CD pipeline 中自動執行

### 本專案的測試策略

我們使用 **Playwright** + **Playwright MCP** 進行視覺回歸測試：

1. **為每個元件建立測試頁面** (`app/pages/test/*.vue`)
2. **撰寫 Playwright 測試** (`__tests__/visual/*.spec.ts`)
3. **使用 Playwright MCP 工具** 擷取截圖和操作瀏覽器
4. **比對截圖與 Figma baseline** (手動或自動化)

---

## Test Structure

### 檔案組織

```
nuxt4-tailwind-starter/
├── app/
│   ├── shared/
│   │   └── components/
│   │       └── form/
│   │           ├── BaseInput.vue
│   │           └── __tests__/
│   │               └── visual/
│   │                   └── BaseInput.spec.ts    # 視覺測試
│   │
│   ├── features/
│   │   └── reservation/
│   │       ├── components/
│   │       │   ├── ReservationForm.vue
│   │       │   └── __tests__/
│   │       │       └── visual/
│   │       │           └── ReservationForm.spec.ts
│   │       └── pages/
│   │           ├── ReservationFormPage.vue
│   │           └── __tests__/
│   │               └── visual/
│   │                   ├── ReservationFormPage.spec.ts
│   │                   └── ReservationFormPage.flow.spec.ts  # 互動流程測試
│   │
│   └── pages/
│       └── test/                              # 測試專用頁面
│           ├── base-input.vue
│           ├── base-button.vue
│           ├── reservation-form.vue
│           └── ...
│
├── screenshots/                               # 截圖目錄
│   ├── baseline/                              # Figma 基準線截圖
│   │   ├── base-input-default.png
│   │   └── ...
│   └── actual/                                # Playwright 實際截圖
│       ├── base-input-default.png
│       └── ...
│
└── playwright.config.ts                       # Playwright 配置
```

### 測試檔案命名規範

- **元件測試**: `ComponentName.spec.ts`
- **頁面測試**: `PageName.spec.ts`
- **流程測試**: `PageName.flow.spec.ts`

### 測試頁面路由

所有測試頁面都放在 `app/pages/test/` 目錄：

| 元件 | 測試頁面 URL |
|------|--------------|
| BaseInput | `http://localhost:3000/test/base-input` |
| BaseButton | `http://localhost:3000/test/base-button` |
| ReservationForm | `http://localhost:3000/test/reservation-form` |
| ReservationFormPage | `http://localhost:3000/test/reservation-form-page` |

**使用 query parameters 切換狀態**:
```
/test/base-input?state=default    # 預設狀態
/test/base-input?state=filled     # 填寫狀態
/test/base-input?state=error      # 錯誤狀態
/test/base-input?state=disabled   # 禁用狀態
```

---

## Running Tests

### 開發環境

#### 1. 啟動 Nuxt dev server

```bash
yarn dev
```

Nuxt 會在 `http://localhost:3000` 啟動開發伺服器。

#### 2. 手動瀏覽測試頁面

在瀏覽器中開啟測試頁面，肉眼檢查視覺外觀：

```
http://localhost:3000/test/base-input
http://localhost:3000/test/base-button?variant=primary
```

#### 3. 執行 Playwright 測試 (TODO - 需配置)

```bash
# 安裝 Playwright
npm install -D @playwright/test

# 安裝瀏覽器
npx playwright install

# 執行所有測試
npx playwright test

# 執行特定測試檔案
npx playwright test base-input.spec.ts

# 執行測試並顯示瀏覽器 (headed mode)
npx playwright test --headed

# 產生測試報告
npx playwright show-report
```

### CI/CD 環境 (Headless Mode)

在 GitHub Actions 或其他 CI 環境中執行：

```yaml
# .github/workflows/visual-tests.yml
name: Visual Regression Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: yarn install

      - name: Install Playwright Browsers
        run: npx playwright install --with-deps

      - name: Run Nuxt dev server
        run: yarn dev &
        env:
          NODE_ENV: development

      - name: Wait for server
        run: npx wait-on http://localhost:3000

      - name: Run Playwright tests
        run: npx playwright test

      - name: Upload screenshots
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-screenshots
          path: screenshots/
```

---

## Writing New Tests

### 測試範本

#### Step 1: 建立測試頁面

```vue
<!-- app/pages/test/my-component.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import MyComponent from '~/features/my-feature/components/MyComponent.vue'

const route = useRoute()
const state = ref(route.query.state as string || 'default')
const value = ref('')
</script>

<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <MyComponent
      v-model="value"
      :disabled="state === 'disabled'"
      :error="state === 'error' ? '錯誤訊息' : ''"
    />
  </div>
</template>
```

#### Step 2: 撰寫測試

```typescript
// app/features/my-feature/components/__tests__/visual/MyComponent.spec.ts
import { test, expect } from '@playwright/test'

test.describe('MyComponent Visual Tests', () => {
  const baseURL = 'http://localhost:3000'

  test.beforeEach(async ({ page }) => {
    // 設定固定 viewport
    await page.setViewportSize({ width: 1920, height: 1080 })
  })

  test('should match design in default state', async ({ page }) => {
    await page.goto(`${baseURL}/test/my-component?state=default`)

    // 等待頁面完全載入
    await page.waitForLoadState('networkidle')

    // 等待元件出現
    await page.waitForSelector('[data-name="MyComponent"]')

    // 擷取截圖
    await page.screenshot({
      path: 'screenshots/actual/my-component-default.png',
      fullPage: false
    })

    // TODO: 比對 baseline
    // expect(actualScreenshot).toMatchBaseline('my-component-default.png')
  })

  test('should match design in error state', async ({ page }) => {
    await page.goto(`${baseURL}/test/my-component?state=error`)

    await page.waitForLoadState('networkidle')
    await page.waitForSelector('[data-name="MyComponent"]')

    await page.screenshot({
      path: 'screenshots/actual/my-component-error.png'
    })
  })

  test('should match design in disabled state', async ({ page }) => {
    await page.goto(`${baseURL}/test/my-component?state=disabled`)

    await page.waitForLoadState('networkidle')
    await page.waitForSelector('[data-name="MyComponent"]')

    await page.screenshot({
      path: 'screenshots/actual/my-component-disabled.png'
    })
  })
})
```

### 測試互動狀態

#### Hover State

```typescript
test('should match design on hover', async ({ page }) => {
  await page.goto(`${baseURL}/test/base-button`)

  // 找到按鈕
  const button = page.locator('[data-name="BaseButton"]')

  // Hover 到按鈕上
  await button.hover()

  // 等待 hover 動畫完成
  await page.waitForTimeout(300)

  await page.screenshot({
    path: 'screenshots/actual/base-button-hover.png'
  })
})
```

#### Focus State

```typescript
test('should match design on focus', async ({ page }) => {
  await page.goto(`${baseURL}/test/base-input`)

  const input = page.locator('input')

  // 聚焦到 input
  await input.focus()

  await page.screenshot({
    path: 'screenshots/actual/base-input-focus.png'
  })
})
```

#### Filled State

```typescript
test('should match design when filled', async ({ page }) => {
  await page.goto(`${baseURL}/test/base-input`)

  const input = page.locator('input')

  // 輸入文字
  await input.fill('王小明')

  await page.screenshot({
    path: 'screenshots/actual/base-input-filled.png'
  })
})
```

---

## Playwright MCP Tools

### 可用的 MCP 工具

在 AI Agent 中可以直接使用這些 Playwright MCP 工具：

#### 1. browser_navigate - 導航到 URL

```typescript
mcp__playwright__browser_navigate({
  url: 'http://localhost:3000/test/base-input'
})
```

#### 2. browser_take_screenshot - 擷取截圖

```typescript
// 擷取當前頁面截圖
mcp__playwright__browser_take_screenshot({
  filename: 'base-input-default.png',
  type: 'png'
})

// 擷取特定元素截圖
mcp__playwright__browser_take_screenshot({
  element: 'Input component',
  ref: '[data-name="BaseInput"]',
  filename: 'base-input-component-only.png'
})

// 擷取完整頁面 (包含需滾動的部分)
mcp__playwright__browser_take_screenshot({
  fullPage: true,
  filename: 'reservation-form-page-full.png'
})
```

#### 3. browser_snapshot - 取得可存取性快照

```typescript
// 取得頁面的 accessibility tree
mcp__playwright__browser_snapshot({})
```

**輸出範例**:
```
- heading "預訂人資料"
  - textbox "姓" [required]
  - textbox "名" [required]
  - combobox "稱謂" [required]
  - radio "男生"
  - radio "女生"
```

**用途**: 驗證 ARIA 屬性和語意結構是否正確。

#### 4. browser_click - 點擊元素

```typescript
mcp__playwright__browser_click({
  element: 'Submit button',
  ref: '[data-name="SubmitButton"]'
})

// 雙擊
mcp__playwright__browser_click({
  element: 'Card',
  ref: '.booking-card',
  doubleClick: true
})

// 右鍵點擊
mcp__playwright__browser_click({
  element: 'Context menu trigger',
  ref: '#menu-trigger',
  button: 'right'
})
```

#### 5. browser_type - 輸入文字

```typescript
mcp__playwright__browser_type({
  element: 'Name input',
  ref: '#name',
  text: '王小明',
  submit: false  // true 會在輸入後按 Enter
})

// 逐字輸入 (觸發每個按鍵事件)
mcp__playwright__browser_type({
  element: 'Search input',
  ref: '#search',
  text: 'restaurant',
  slowly: true  // 逐字輸入，觸發 keydown/keyup 事件
})
```

#### 6. browser_fill_form - 填寫多個表單欄位

```typescript
mcp__playwright__browser_fill_form({
  fields: [
    {
      name: '姓',
      type: 'textbox',
      ref: '#lastName',
      value: '王'
    },
    {
      name: '名',
      type: 'textbox',
      ref: '#firstName',
      value: '小明'
    },
    {
      name: '性別',
      type: 'radio',
      ref: '[value="male"]',
      value: 'male'
    },
    {
      name: '同意條款',
      type: 'checkbox',
      ref: '#agree',
      value: 'true'
    }
  ]
})
```

#### 7. browser_select_option - 選擇下拉選項

```typescript
mcp__playwright__browser_select_option({
  element: 'Title dropdown',
  ref: '#title',
  values: ['mr']  // 可以是多個值 (多選)
})
```

#### 8. browser_hover - Hover 到元素

```typescript
mcp__playwright__browser_hover({
  element: 'Primary button',
  ref: '[data-name="PrimaryButton"]'
})
```

#### 9. browser_wait_for - 等待條件

```typescript
// 等待文字出現
mcp__playwright__browser_wait_for({
  text: '提交成功'
})

// 等待文字消失
mcp__playwright__browser_wait_for({
  textGone: '載入中...'
})

// 等待固定時間
mcp__playwright__browser_wait_for({
  time: 2  // 秒
})
```

#### 10. browser_evaluate - 執行 JavaScript

```typescript
// 滾動到特定位置
mcp__playwright__browser_evaluate({
  function: "() => { window.scrollTo(0, 500) }"
})

// 對特定元素執行操作
mcp__playwright__browser_evaluate({
  element: 'Terms scrollable box',
  ref: '.terms-box',
  function: "(element) => { element.scrollTop = 100 }"
})

// 取得元素資訊
mcp__playwright__browser_evaluate({
  element: 'Component',
  ref: '[data-name="MyComponent"]',
  function: "(element) => { return { width: element.clientWidth, height: element.clientHeight } }"
})
```

### 實際使用範例

```typescript
// 完整的互動測試流程
test('complete booking flow', async ({ page }) => {
  // 1. 導航到測試頁面
  await page.goto('http://localhost:3000/test/reservation-form-page')

  // 2. 等待頁面載入
  await page.waitForLoadState('networkidle')

  // 3. 填寫姓名
  await page.fill('#lastName', '王')
  await page.fill('#firstName', '小明')

  // 4. 選擇稱謂
  await page.selectOption('#title', 'mr')

  // 5. 選擇性別
  await page.click('[value="male"]')

  // 6. 選擇生日 (如果有日期選擇器)
  await page.click('#birthday')
  await page.click('[data-date="1990-01-01"]')

  // 7. 填寫電話
  await page.fill('#phone', '0912345678')

  // 8. 填寫信箱
  await page.fill('#email', 'test@example.com')

  // 9. 勾選同意條款
  await page.check('#agree')

  // 10. 擷取最終填寫完成的截圖
  await page.screenshot({
    path: 'screenshots/actual/booking-flow-completed.png',
    fullPage: true
  })
})
```

---

## Updating Baselines

### 何時需要更新 Baseline？

#### ✅ 應該更新的情況

1. **設計稿更新**: Figma 設計有意圖性的變更
2. **修正視覺 bug**: 原本實作有誤，現在修正為正確的外觀
3. **功能增強**: 新增功能導致視覺變化 (例如: 新增 tooltip)

#### ❌ 不應該更新的情況

1. **意外的視覺變化**: 修改代碼後無意中改變了外觀
2. **CSS 回歸**: 修改全域樣式導致元件外觀改變
3. **截圖不穩定**: 每次執行測試截圖都不同 (應該修正測試，使其穩定)

### 如何更新 Baseline

#### 方法 1: 手動替換

```bash
# 1. 執行測試產生新的 actual 截圖
npx playwright test

# 2. 檢查 actual 截圖是否正確
# screenshots/actual/base-input-default.png

# 3. 如果正確，替換 baseline
cp screenshots/actual/base-input-default.png screenshots/baseline/base-input-default.png

# 4. Commit 新的 baseline
git add screenshots/baseline/base-input-default.png
git commit -m "test: update BaseInput baseline after design change"
```

#### 方法 2: 使用 Playwright 命令 (如果有配置)

```bash
# 更新所有 baselines
npx playwright test --update-snapshots

# 更新特定測試的 baselines
npx playwright test base-input.spec.ts --update-snapshots
```

### Baseline 版本控制

#### 方案 1: Git LFS (推薦用於大型專案)

```bash
# 安裝 Git LFS
git lfs install

# 追蹤 PNG 檔案
git lfs track "screenshots/baseline/*.png"

# Commit .gitattributes
git add .gitattributes
git commit -m "chore: setup Git LFS for screenshots"
```

#### 方案 2: 直接 commit (小型專案)

```bash
# 直接 commit 截圖檔案
git add screenshots/baseline/
git commit -m "test: add visual regression baselines"
```

#### 方案 3: 外部儲存 (企業級)

將 baseline 截圖存放在 S3、Azure Blob Storage 等雲端服務，測試時下載比對。

---

## Troubleshooting

### Problem 1: 截圖每次都不一樣 (Flaky Tests)

**症狀**: 同一個元件每次執行測試產生的截圖都不同

**可能原因**:
- ❌ 動畫未完成就截圖
- ❌ 字體尚未載入
- ❌ 圖片尚未載入完成
- ❌ Viewport 大小不固定

**解決方案**:

```typescript
test('stable screenshot', async ({ page }) => {
  // 1. 設定固定 viewport
  await page.setViewportSize({ width: 1920, height: 1080 })

  // 2. 禁用動畫
  await page.emulateMedia({ reducedMotion: 'reduce' })

  await page.goto('http://localhost:3000/test/my-component')

  // 3. 等待網路請求完成
  await page.waitForLoadState('networkidle')

  // 4. 等待字體載入 (如果有自訂字體)
  await page.evaluate(() => document.fonts.ready)

  // 5. 等待特定元素出現
  await page.waitForSelector('[data-name="MyComponent"]', { state: 'visible' })

  // 6. 額外等待動畫完成
  await page.waitForTimeout(500)

  // 7. 截圖
  await page.screenshot({ path: 'screenshot.png' })
})
```

### Problem 2: Playwright 找不到元素

**症狀**: `Error: Element not found: [data-name="MyComponent"]`

**解決方案**:

```typescript
// ❌ 錯誤: 元素可能尚未渲染
await page.click('[data-name="MyButton"]')

// ✅ 正確: 等待元素出現
await page.waitForSelector('[data-name="MyButton"]')
await page.click('[data-name="MyButton"]')

// ✅ 更好: 使用 locator 自動等待
const button = page.locator('[data-name="MyButton"]')
await button.click()
```

### Problem 3: 截圖太大或太小

**問題**: 截圖沒有包含完整元件，或包含過多空白

**解決方案**:

```typescript
// 方案 1: 只截取特定元素
await page.locator('[data-name="MyComponent"]').screenshot({
  path: 'component-only.png'
})

// 方案 2: 完整頁面截圖 (包含需滾動的部分)
await page.screenshot({
  path: 'full-page.png',
  fullPage: true
})

// 方案 3: 調整 viewport 大小
await page.setViewportSize({ width: 1920, height: 3000 })
await page.screenshot({ path: 'tall-page.png' })
```

### Problem 4: 字體渲染不一致

**問題**: 在不同機器上截圖的字體不同

**原因**: 本地環境和 CI 環境的字體不同

**解決方案**:

```typescript
// playwright.config.ts
export default {
  use: {
    // 使用 web fonts (確保 Figma 設計稿也使用相同字體)
    // 等待 fonts.ready
  }
}
```

```typescript
// 測試中等待字體載入
test('with fonts loaded', async ({ page }) => {
  await page.goto('http://localhost:3000/test/my-component')

  // 等待字體載入完成
  await page.evaluate(() => document.fonts.ready)

  await page.screenshot({ path: 'screenshot.png' })
})
```

### Problem 5: Hover 狀態截圖失敗

**問題**: Hover 後截圖仍顯示 default 狀態

**解決方案**:

```typescript
test('hover state', async ({ page }) => {
  await page.goto('http://localhost:3000/test/base-button')

  const button = page.locator('[data-name="BaseButton"]')

  // Hover 到元素
  await button.hover()

  // 等待 CSS transition 完成 (根據實際動畫時間調整)
  await page.waitForTimeout(300)

  // 截圖
  await page.screenshot({ path: 'button-hover.png' })
})
```

---

## Best Practices

### 1. 測試組織

✅ **Do**:
- 每個元件都有對應的測試檔案
- 測試檔案放在元件旁邊的 `__tests__/visual/` 目錄
- 使用 `test.describe()` 將相關測試分組
- 使用清晰的測試名稱 (例如: `should match design in error state`)

❌ **Don't**:
- 將所有測試放在一個檔案裡
- 使用模糊的測試名稱 (例如: `test 1`, `works`)

### 2. 選擇器策略

✅ **Do**:
- 優先使用 `data-name` 屬性
- 使用語意化選擇器 (`role`, `aria-label`)
- 使用穩定的 ID

❌ **Don't**:
- 依賴 class names (可能會改變)
- 依賴文字內容 (可能會翻譯)
- 依賴元素順序 (不穩定)

```typescript
// ✅ Good
page.locator('[data-name="SubmitButton"]')
page.locator('button[type="submit"]')
page.locator('role=button[name="Submit"]')

// ❌ Bad
page.locator('.btn-primary')  // class 可能改變
page.locator('button:nth-child(3)')  // 順序可能改變
page.locator('text=提交')  // 文字可能翻譯
```

### 3. 等待策略

✅ **Do**:
- 使用 `waitForLoadState('networkidle')`
- 使用 `waitForSelector()` 等待特定元素
- 使用自動等待的 `locator.click()` 而非 `page.click()`

❌ **Don't**:
- 過度使用 `waitForTimeout()` (magic numbers)
- 假設頁面已載入完成

```typescript
// ✅ Good
await page.waitForLoadState('networkidle')
await page.waitForSelector('[data-name="MyComponent"]')
const button = page.locator('button')
await button.click()  // 自動等待元素可點擊

// ❌ Bad
await page.waitForTimeout(3000)  // magic number
await page.click('button')  // 可能元素尚未渲染
```

### 4. 截圖命名

✅ **Do**:
- 使用描述性名稱: `component-state.png`
- 包含元件名稱和狀態: `base-input-error.png`
- 使用 kebab-case

❌ **Don't**:
- 使用序號: `screenshot-1.png`
- 使用空格: `Base Input Error.png`

### 5. 測試獨立性

✅ **Do**:
- 每個測試都應該可以獨立執行
- 不依賴其他測試的執行結果
- 每個測試都重新導航到頁面

❌ **Don't**:
- 測試之間共享狀態
- 假設測試執行順序

```typescript
// ✅ Good
test('state 1', async ({ page }) => {
  await page.goto('http://localhost:3000/test/my-component')
  // ...test
})

test('state 2', async ({ page }) => {
  await page.goto('http://localhost:3000/test/my-component')
  // ...test
})

// ❌ Bad
test('state 1', async ({ page }) => {
  await page.goto('http://localhost:3000/test/my-component')
  // ...test
})

test('state 2', async ({ page }) => {
  // 假設還在同一頁面 - 不好！
  // ...test
})
```

### 6. Viewport 一致性

✅ **Do**:
- 在 `playwright.config.ts` 設定預設 viewport
- 或在每個測試的 `beforeEach` 設定

```typescript
// playwright.config.ts
export default {
  use: {
    viewport: { width: 1920, height: 1080 }
  }
}

// 或在測試中
test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 })
})
```

### 7. 可存取性驗證

✅ **Do**:
- 除了視覺測試外，也檢查 accessibility tree

```typescript
test('has correct accessibility structure', async ({ page }) => {
  await page.goto('http://localhost:3000/test/reservation-form')

  // 使用 Playwright MCP: browser_snapshot
  const snapshot = await page.locator('[data-name="ReservationForm"]').ariaSnapshot()

  // 驗證結構
  expect(snapshot).toContain('heading "預訂人資料"')
  expect(snapshot).toContain('textbox "姓" [required]')
  expect(snapshot).toContain('textbox "名" [required]')
})
```

---

## Reference

- **Playwright 官方文檔**: https://playwright.dev/
- **Playwright Best Practices**: https://playwright.dev/docs/best-practices
- **Visual Testing Guide**: https://playwright.dev/docs/test-screenshots
- **專案工作流程**: [WORKFLOW.md](/WORKFLOW.md)
- **專案架構**: [.spec-workflow/steering/structure.md](/.spec-workflow/steering/structure.md)

---

## Summary

```
1. 為每個元件建立測試頁面 (app/pages/test/)
2. 撰寫 Playwright 測試 (__tests__/visual/*.spec.ts)
3. 使用 Playwright MCP 工具擷取截圖和操作瀏覽器
4. 比對截圖與 Figma baseline (±2px 容差)
5. 持續整合: 在 CI/CD 中自動執行測試
6. 當設計稿更新時，更新 baseline 截圖
```

本專案的 `reservation` feature 包含完整的視覺測試範例，涵蓋 ~80 個測試案例，可作為參考實作。
