# Figma to Vue Workflow Guide

## Overview

本文檔說明如何使用 **Figma MCP** 和 **Playwright MCP** 將 Figma 設計稿轉換為 Vue 3 元件，並建立視覺回歸測試。

### 我們建立了什麼

在本專案的 `restaurant-booking` (預約訂位) 功能中，我們成功實現了：

- **8 個共用基礎元件** (Shared Components): BaseInput, BaseButton, BaseCheckbox, BaseDropdown, BaseRadioGroup, BaseDatePicker, BaseTextarea, BaseChip
- **5 個功能專屬元件** (Feature Components): ReservationForm, SpecialRequestsForm, PaymentMethodSelector, PaymentTermsAgreement, BookingDetailCard
- **1 個完整頁面元件** (Page Component): ReservationFormPage
- **~80 個視覺回歸測試** - 覆蓋所有元件的所有狀態
- **2 個 Composables**: useReservationForm, useFormValidation
- **完整的 TypeScript 型別定義**

所有元件都與 Figma 設計稿達到 **像素級一致性 (±2px 容差)**。

---

## Prerequisites

### 必要工具

1. **Figma Desktop App** (必須安裝桌面版，不能用網頁版)
   - 下載: https://www.figma.com/downloads/

2. **Figma MCP Server**
   - 已配置在 `.mcp.json`
   - 提供 `get_metadata`, `get_design_context`, `get_screenshot` 工具

3. **Playwright MCP Server**
   - 已配置在 `.mcp.json`
   - 提供 `browser_take_screenshot`, `browser_snapshot`, `browser_click` 等工具

4. **專案技術堆疊**
   - Nuxt 4
   - Vue 3 (Composition API)
   - Tailwind CSS v4 (使用 @tailwindcss/postcss)
   - TypeScript

---

## Step-by-Step Workflow

### Phase 1: 從 Figma 提取設計資訊

#### 1.1 在 Figma Desktop App 中選取 Frame

1. 打開 Figma Desktop App
2. 開啟包含設計稿的檔案
3. 在左側圖層面板中**點選要轉換的 Frame** (例如: "預約資料頁/候補/PC")
4. 確保 Frame 已被選取 (藍色框線)

#### 1.2 使用 get_metadata 獲取 Frame 資訊

```typescript
// AI Agent 執行
mcp__figma-dev-mode__get_metadata({
  nodeId: "", // 留空會自動使用當前選取的 Frame
  clientLanguages: "typescript,vue",
  clientFrameworks: "nuxt,vue"
})
```

**輸出**: Frame 的 XML 結構，包含所有子節點的 ID、類型、名稱、位置、尺寸。

**用途**: 了解設計稿結構，找到需要轉換的子元件的 node ID。

#### 1.3 使用 get_design_context 獲取 React 代碼

```typescript
mcp__figma-dev-mode__get_design_context({
  nodeId: "5006:11441", // 可指定特定 node ID，或留空使用選取的 Frame
  clientLanguages: "typescript,vue",
  clientFrameworks: "nuxt,vue"
})
```

**輸出**:
- React + TypeScript + Tailwind CSS 代碼
- 包含完整的 component 結構、props、樣式
- 所有 Tailwind classes (支援 Tailwind v4)

**重要**: Figma MCP 目前只能輸出 React 代碼，需要手動轉換為 Vue。

#### 1.4 使用 get_screenshot 獲取設計稿截圖

```typescript
mcp__figma-dev-mode__get_screenshot({
  nodeId: "5006:11441",
  clientLanguages: "typescript,vue",
  clientFrameworks: "nuxt,vue"
})
```

**輸出**: 設計稿的高解析度截圖 (PNG)

**用途**: 作為視覺回歸測試的 baseline (基準線)

---

### Phase 2: 將 React 代碼轉換為 Vue 3

#### 2.1 轉換規則總覽

| React                          | Vue 3 Composition API                     |
|--------------------------------|-------------------------------------------|
| `className`                    | `class`                                   |
| `{variable}`                   | `{{ variable }}`                          |
| `onClick={handler}`            | `@click="handler"`                        |
| `onChange={handler}`           | `@update:modelValue="handler"`            |
| `useState(initial)`            | `ref(initial)`                            |
| `useEffect(() => {...}, [])`   | `onMounted(() => {...})`                  |
| `props.value`                  | `defineProps<Props>()` + `props.value`    |
| `{children}`                   | `<slot />`                                |
| `htmlFor`                      | `for`                                     |
| `defaultValue`                 | `v-model` 或 `:value`                     |

#### 2.2 實際範例：BaseInput 元件

**Figma 輸出 (React)**:
```tsx
export default function BaseInput() {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="text-base font-medium">
        姓名 <span className="text-error">*</span>
      </label>
      <input
        id="input"
        type="text"
        className="h-12 rounded-lg border-2 border-outline-variant px-4"
        placeholder="請輸入"
      />
    </div>
  )
}
```

**轉換為 Vue 3**:
```vue
<script setup lang="ts">
interface Props {
  modelValue: string
  label: string
  placeholder?: string
  required?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <label for="input" class="text-base font-medium">
      {{ label }} <span v-if="required" class="text-error">*</span>
    </label>
    <input
      id="input"
      type="text"
      class="h-12 rounded-lg border-2 border-outline-variant px-4"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>
```

**關鍵轉換點**:
1. ✅ `className` → `class`
2. ✅ 新增 `defineProps` 和 `defineEmits`
3. ✅ 實作 `v-model` 支援 (modelValue prop + update:modelValue emit)
4. ✅ 使用 `{{ }}` 插值語法
5. ✅ 事件綁定改為 `@input`
6. ✅ 條件渲染改為 `v-if`

#### 2.3 保留所有 Tailwind Classes

**重要**: Figma 產生的 Tailwind classes **必須完全保留**，不要修改！

Figma 使用的 CSS variables (例如: `var(--surface, #ffffff)`) 已經在 `tailwind.config.ts` 中定義為對應的 Tailwind colors。

例如:
```vue
<!-- Figma 輸出 -->
<div className="bg-[var(--surface,#ffffff)]">

<!-- Vue 轉換 - 保持不變 -->
<div class="bg-[var(--surface,#ffffff)]">
```

**如果需要使用 Tailwind 預設 color**:
```typescript
// tailwind.config.ts 中已定義
colors: {
  'surface': '#ffffff',
  'primary': '#2877ee',
  // ...
}
```

```vue
<!-- 可以這樣使用 -->
<div class="bg-surface">
<div class="text-primary">
```

---

### Phase 3: 實作元件並遵循專案架構

#### 3.1 決定元件放置位置

根據 **Feature-based 架構** ([structure.md](/Users/athena/Downloads/nuxt4-tailwind-starter/.spec-workflow/steering/structure.md))：

**Shared Components** (跨功能共用的基礎元件):
```
app/shared/components/form/
├── BaseInput.vue
├── BaseButton.vue
├── BaseCheckbox.vue
└── ...
```

**Feature Components** (功能專屬元件):
```
app/features/restaurant-booking/
├── components/
│   ├── ReservationForm.vue
│   ├── PaymentMethodSelector.vue
│   └── ...
├── pages/
│   └── ReservationFormPage.vue
├── composables/
│   ├── useReservationForm.ts
│   └── useFormValidation.ts
├── types/
│   └── reservation.types.ts
└── index.ts (barrel exports)
```

#### 3.2 命名規範

- **元件檔名**: PascalCase (例如: `BaseInput.vue`, `ReservationForm.vue`)
- **Props/Variables**: camelCase (例如: `modelValue`, `isDisabled`)
- **Types/Interfaces**: PascalCase (例如: `ReservationData`, `ValidationErrors`)
- **Composables**: camelCase with `use` prefix (例如: `useReservationForm`)

#### 3.3 TypeScript 型別定義

所有元件都必須定義 **Props** 和 **Emits** 型別：

```vue
<script setup lang="ts">
interface Props {
  modelValue: string
  label: string
  required?: boolean
  disabled?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'blur'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>
```

#### 3.4 v-model 支援

所有表單元件都應支援 `v-model`:

```vue
<!-- Parent component -->
<BaseInput v-model="formData.name" label="姓名" />

<!-- BaseInput.vue implementation -->
<script setup lang="ts">
interface Props {
  modelValue: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
```

#### 3.5 data-name 屬性 (用於 Playwright 測試)

在根元素添加 `data-name` 屬性，方便 Playwright 測試定位：

```vue
<template>
  <div
    class="..."
    data-name="ReservationForm"
  >
    <!-- content -->
  </div>
</template>
```

---

### Phase 4: 建立 Playwright 視覺回歸測試

#### 4.1 創建測試頁面

為每個元件創建獨立的測試頁面 (放在 `app/pages/test/`):

```vue
<!-- app/pages/test/base-input.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '~/shared/components/form/BaseInput.vue'

const route = useRoute()
const state = ref(route.query.state as string || 'default')
const value = ref('')
</script>

<template>
  <div class="p-8">
    <BaseInput
      v-model="value"
      label="姓名"
      placeholder="請輸入"
      :required="state === 'required'"
      :disabled="state === 'disabled'"
      :error="state === 'error' ? '此欄位為必填' : ''"
    />
  </div>
</template>
```

**URL 存取**: `http://localhost:3000/test/base-input?state=default`

#### 4.2 撰寫 Playwright 測試

```typescript
// app/shared/components/form/__tests__/visual/BaseInput.spec.ts
import { test, expect } from '@playwright/test'

test.describe('BaseInput Visual Tests', () => {
  test('default state', async ({ page }) => {
    await page.goto('http://localhost:3000/test/base-input?state=default')

    // 使用 Playwright MCP: browser_take_screenshot
    await page.screenshot({
      path: 'screenshots/base-input-default.png',
      fullPage: false
    })
  })

  test('filled state', async ({ page }) => {
    await page.goto('http://localhost:3000/test/base-input?state=default')

    // 使用 Playwright MCP: browser_type
    await page.fill('input', '王小明')

    await page.screenshot({
      path: 'screenshots/base-input-filled.png'
    })
  })

  test('error state', async ({ page }) => {
    await page.goto('http://localhost:3000/test/base-input?state=error')

    await page.screenshot({
      path: 'screenshots/base-input-error.png'
    })
  })
})
```

#### 4.3 使用 Playwright MCP 工具

在 AI Agent 中可以直接使用 MCP 工具：

```typescript
// 導航到測試頁面
mcp__playwright__browser_navigate({ url: 'http://localhost:3000/test/base-input' })

// 擷取截圖
mcp__playwright__browser_take_screenshot({
  filename: 'base-input-default.png',
  type: 'png'
})

// 點擊元素
mcp__playwright__browser_click({
  element: 'Submit button',
  ref: '[data-name="SubmitButton"]'
})

// 填寫表單
mcp__playwright__browser_fill_form({
  fields: [
    { name: '姓名', type: 'textbox', ref: '#name', value: '王小明' },
    { name: '同意條款', type: 'checkbox', ref: '#agree', value: 'true' }
  ]
})

// 輸入文字
mcp__playwright__browser_type({
  element: 'Name input',
  ref: '#name',
  text: '王小明',
  submit: false
})
```

#### 4.4 比對 Figma 截圖與實作

1. 將 Figma 截圖放在 `screenshots/baseline/` 目錄
2. 將 Playwright 截圖放在 `screenshots/actual/` 目錄
3. 使用圖像比對工具 (例如: `pixelmatch`) 或肉眼比對
4. 確保視覺差異在 **±2px 容差** 內

---

## React to Vue Conversion Rules

### 完整轉換對照表

#### 1. JSX 語法 → Vue Template 語法

| React JSX                       | Vue Template                      |
|---------------------------------|-----------------------------------|
| `<div className="...">`         | `<div class="...">`               |
| `{variable}`                    | `{{ variable }}`                  |
| `{condition && <div />}`        | `<div v-if="condition" />`        |
| `{condition ? <A /> : <B />}`   | `<A v-if="condition" /> <B v-else />` |
| `{items.map(item => <li />)}`   | `<li v-for="item in items" :key="item.id" />` |

#### 2. Props 定義

**React**:
```tsx
interface Props {
  name: string
  age?: number
}

function Component({ name, age = 18 }: Props) {
  return <div>{name}</div>
}
```

**Vue**:
```vue
<script setup lang="ts">
interface Props {
  name: string
  age?: number
}

const props = withDefaults(defineProps<Props>(), {
  age: 18
})
</script>

<template>
  <div>{{ name }}</div>
</template>
```

#### 3. 事件處理

**React**:
```tsx
<button onClick={() => console.log('clicked')}>Click</button>
<input onChange={(e) => setValue(e.target.value)} />
```

**Vue**:
```vue
<button @click="console.log('clicked')">Click</button>
<input @input="setValue(($event.target as HTMLInputElement).value)" />
```

#### 4. State 管理

**React**:
```tsx
const [count, setCount] = useState(0)
const increment = () => setCount(count + 1)
```

**Vue**:
```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const increment = () => { count.value++ }
</script>
```

#### 5. 生命週期

**React**:
```tsx
useEffect(() => {
  console.log('mounted')
  return () => console.log('unmounted')
}, [])
```

**Vue**:
```vue
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

onMounted(() => console.log('mounted'))
onUnmounted(() => console.log('unmounted'))
</script>
```

#### 6. Refs (DOM 引用)

**React**:
```tsx
const inputRef = useRef<HTMLInputElement>(null)
<input ref={inputRef} />
```

**Vue**:
```vue
<script setup lang="ts">
import { ref } from 'vue'

const inputRef = ref<HTMLInputElement>()
</script>

<template>
  <input ref="inputRef" />
</template>
```

---

## Common Issues and Solutions

### Issue 1: Figma 產生的 className 包含 CSS variables

**問題**:
```tsx
<div className="bg-[var(--surface,#ffffff)]">
```

**解決方案**:
1. **保留不變** - Tailwind v4 支援 arbitrary values with CSS variables
2. 或在 `tailwind.config.ts` 定義對應的 color:
   ```typescript
   colors: {
     'surface': '#ffffff'
   }
   ```
   然後使用: `<div class="bg-surface">`

### Issue 2: Figma 產生的 font-family 不存在

**問題**:
```tsx
<p className="font-['Noto_Sans_CJK_TC:Medium',sans-serif]">
```

**解決方案**:
在 `tailwind.config.ts` 添加字體：
```typescript
fontFamily: {
  'noto-sans-tc': ['Noto Sans CJK TC', 'sans-serif']
}
```

然後使用: `<p class="font-noto-sans-tc">`

### Issue 3: v-model 不起作用

**問題**: Parent component 使用 `v-model` 但 child component 沒有正確實作

**解決方案**:
確保 child component 有定義 `modelValue` prop 和 `update:modelValue` emit:
```vue
<script setup lang="ts">
interface Props {
  modelValue: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
</script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
```

### Issue 4: Playwright 測試截圖不穩定 (flaky)

**問題**: 每次測試截圖結果不同

**解決方案**:
1. 等待頁面完全載入: `await page.waitForLoadState('networkidle')`
2. 等待特定元素出現: `await page.waitForSelector('[data-name="Component"]')`
3. 使用固定 viewport: `await page.setViewportSize({ width: 1920, height: 1080 })`
4. 禁用動畫: `page.emulateMedia({ reducedMotion: 'reduce' })`

### Issue 5: .size-full 導致元件高度異常

**問題**: Figma Auto Layout 設定為 "Fill container" 導致元件使用 `.size-full` class，強制元件高度為 100%

**實際案例**:
```vue
<!-- ❌ 錯誤 - 元件會被拉高填滿父容器 -->
<div class="size-full">

<!-- ✅ 正確 - 元件高度根據內容自動調整 -->
<div class="w-full">
```

**解決方案**:
1. **代碼修正**: 將 `.size-full` 改為 `.w-full` (只設定寬度，讓高度自動適應內容)
2. **通知設計師在 Figma 修正**:
   - 選取元件的最外層 Frame
   - 在右側面板找到 **Auto layout** > **Resizing**
   - 確保設定為:
     - Horizontal: Fill container ✅
     - Vertical: **Hug contents** ✅ (不要用 Fill container)

這樣未來從 Figma 產生的代碼就會是 `w-full` 而不是 `size-full`。

---

## Best Practices

### 1. 組件化原則

- ✅ **單一職責**: 每個元件只負責一個功能
- ✅ **可重用性**: Shared components 不應包含業務邏輯
- ✅ **Props down, Events up**: 資料向下傳遞，事件向上冒泡

### 2. TypeScript 使用

- ✅ 所有 Props 和 Emits 都要定義型別
- ✅ 避免使用 `any`，使用 `unknown` 或具體型別
- ✅ 使用 Type Guards 進行型別檢查

### 3. Tailwind CSS

- ✅ 保留 Figma 產生的所有 classes
- ✅ 避免自訂 CSS，優先使用 Tailwind utilities
- ✅ 使用 `@apply` 僅當多個元件共用相同樣式組合時

### 4. 可存取性 (Accessibility)

- ✅ 所有表單元素都要有 `<label>`
- ✅ 使用語意化 HTML (`<button>` 而非 `<div @click>`)
- ✅ 確保鍵盤導航可用 (tab, enter, space, escape)
- ✅ 適當的 ARIA 屬性 (`aria-label`, `aria-required`, etc.)

### 5. 測試策略

- ✅ 每個元件都要有視覺回歸測試
- ✅ 測試所有狀態 (default, hover, active, focus, disabled, error)
- ✅ 測試響應式設計 (不同 viewport sizes)
- ✅ 使用 `data-name` 屬性作為測試選擇器

### 6. Git Commit 規範

- ✅ 一個元件一個 commit (例如: `feat: add BaseInput component`)
- ✅ 視覺測試與元件實作分開 commit (例如: `test: add BaseInput visual tests`)
- ✅ 使用 Conventional Commits 格式:
  - `feat:` 新功能
  - `fix:` 修復 bug
  - `test:` 新增測試
  - `docs:` 文檔更新
  - `refactor:` 重構代碼

---

## Workflow Summary

```
1. Figma Desktop App 選取 Frame
   ↓
2. get_metadata → 取得結構資訊
   ↓
3. get_design_context → 取得 React 代碼
   ↓
4. get_screenshot → 取得設計稿截圖
   ↓
5. 手動轉換 React → Vue 3
   ↓
6. 遵循 Feature-based 架構放置元件
   ↓
7. 實作 TypeScript 型別定義
   ↓
8. 實作 v-model 支援 (表單元件)
   ↓
9. 創建測試頁面 (app/pages/test/)
   ↓
10. 撰寫 Playwright 視覺回歸測試
    ↓
11. 使用 Playwright MCP 擷取截圖
    ↓
12. 比對 Figma 截圖 vs 實作截圖 (±2px)
    ↓
13. 調整樣式直到視覺一致
    ↓
14. Commit 代碼 ✅
```

---

## Reference Links

- **專案架構**: [.spec-workflow/steering/structure.md](/.spec-workflow/steering/structure.md)
- **技術規範**: [.spec-workflow/steering/tech.md](/.spec-workflow/steering/tech.md)
- **設計文檔**: [.spec-workflow/specs/figma-to-vue-visual-testing/design.md](/.spec-workflow/specs/figma-to-vue-visual-testing/design.md)
- **任務列表**: [.spec-workflow/specs/figma-to-vue-visual-testing/tasks.md](/.spec-workflow/specs/figma-to-vue-visual-testing/tasks.md)
- **測試指南**: [TESTING.md](/TESTING.md) (待建立)

---

## 範例專案: Restaurant Booking

完整實作範例請參考:
- **Feature 目錄**: `app/features/reservation/`
- **Shared Components**: `app/shared/components/form/`
- **測試頁面**: `app/pages/test/`
- **視覺測試**: `__tests__/visual/*.spec.ts`

這個功能展示了從 Figma 設計稿到完整 Vue 應用的整個流程。
