# Nuxt 4 + Tailwind CSS 模板

現代化的 Nuxt 4 起始模板，整合 Tailwind CSS v4，專為企業級專案與 Figma 轉代碼工作流程設計。

## 功能特色

- ⚡️ [Nuxt 4](https://nuxt.com/) - 直覺的 Vue 框架
- 🎨 [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS 框架
- 🍍 [Pinia](https://pinia.vuejs.org/) - 狀態管理
- 📱 [@vite-pwa/nuxt](https://vite-pwa-org.netlify.app/) - PWA 支援
- 🌍 [i18n](https://i18n.nuxtjs.org/) - 國際化多語系
- 📦 [VueUse](https://vueuse.org/) - Vue 組合式工具集
- 🎯 TypeScript 支援
- 🎭 [Iconify](https://iconify.design/) - Material Symbols 圖標
- 🌓 深色模式支援
- 📲 裝置偵測
- 🔧 [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components) - 自動導入元件

## 開發工具

- 🔍 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) - 程式碼檢查與格式化
- 🐶 [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/okonet/lint-staged) - Git hooks
- 📦 [Yarn v4](https://yarnpkg.com/) - 套件管理器
- 🎨 [SASS](https://sass-lang.com/) - CSS 預處理器

## 使用方式

### 安裝依賴

```bash
yarn install
```

### 開發模式

```bash
yarn dev
```

開啟瀏覽器前往 http://localhost:3000

### 建置專案

```bash
yarn build
```

### 預覽正式環境建置

```bash
yarn preview
```

### 生成靜態網站

```bash
yarn generate
```

## 程式碼品質

### 檢查程式碼

```bash
yarn lint
```

### 格式化程式碼

```bash
yarn format
```

### 型別檢查

```bash
yarn typecheck
```

## 專案結構

本專案採用 **Feature-based** 架構，依功能模組組織代碼：

```
.
app/
├─ features/
│  ├─ auth/
│  │  ├─ pages/            # route pages (單一或多頁面)
│  │  │  └─ LoginPage.vue
│  │  ├─ components/       # 只給 auth 用的小元件
│  │  │  └─ LoginForm.vue
│  │  ├─ composables/      # feature-specific hooks
│  │  │  └─ useLogin.ts
│  │  ├─ store/            # Pinia module
│  │  │  └─ auth.store.ts
│  │  ├─ api/              # 與後端互動的函式
│  │  │  └─ auth.api.ts
│  │  ├─ types/            # feature 專屬型別
│  │  │  └─ auth.types.ts
│  │  ├─ index.ts          # barrel exports (page, store)
│  │  └─ __tests__/        # feature 單元測試
│  ├─ members/
│  │  ├─ pages/
│  │  │  └─ MemberList.vue
│  │  ├─ components/
│  │  │  └─ MemberCard.vue
│  │  ├─ store/
│  │  │  └─ members.store.ts
│  │  ├─ api/
│  │  │  └─ members.api.ts
│  │  ├─ types/
│  │  │  └─ members.types.ts
│  │  └─ index.ts
│  └─ ...
├─ pages/                   # Nuxt pages (檔案式路由)
│  └─ index.vue
├─ layouts/
│  └─ default.vue
├─ shared/                  # 可跨 feature 重用
│  ├─ components/           # dumb / common components
│  ├─ composables/          # 公共 hooks (useFetch, useModal...)
│  ├─ services/             # api client、auth service、logger
│  ├─ utils/
│  └─ types/                # 全域型別
├─ stores/                  # pinia stores
│  └─ index.ts
├─ config/                  # 配置檔案
├─ constants/               # 常數定義
├─ assets/                  # 靜態資源
└─ app.vue                  # 根元件

```

### Feature 模組範例

每個 feature 模組包含該功能的所有相關代碼：

```
app/features/auth/
├── pages/               # Feature 頁面
│   └── LoginPage.vue
├── components/          # Feature 專屬元件
│   └── LoginForm.vue
├── composables/         # Feature 專屬 Composables
│   └── useAuth.ts
├── store/               # Feature 專屬 Pinia Store
│   └── auth.store.ts
├── api/                 # Feature 專屬 API 呼叫
│   └── auth.api.ts
├── types/               # Feature 專屬型別定義
│   └── auth.types.ts
├── __tests__/           # Feature 測試檔案
├── index.ts             # Barrel exports
└── routes.ts            # Feature 路由定義（選用）
```

### 如何使用 Feature

在 Nuxt pages 中使用 feature：

```vue
<!-- app/pages/login.vue -->
<script setup lang="ts">
import { LoginPage } from '~/features/auth'
</script>

<template>
  <LoginPage />
</template>
```

## Figma 轉代碼工作流程

本模板整合了完整的 **Figma MCP → Vue 3 → Playwright 視覺測試** 工作流程，實現從設計稿到代碼的自動化轉換。

### 工作流程概覽

1. **從 Figma 提取設計** - 使用 Figma MCP 工具從 Figma Desktop App 獲取 React + Tailwind 代碼
2. **轉換為 Vue 3** - 將 React 代碼手動轉換為 Vue 3 Composition API
3. **實作元件** - 遵循 Feature-based 架構放置元件於 `app/shared/components/` 或 `app/features/[feature]/components/`
4. **視覺回歸測試** - 使用 Playwright MCP 建立自動化視覺測試，確保實作與設計稿像素級一致 (±2px)

### 參考實作：Restaurant Booking Feature

本專案包含完整的參考實作 (`app/features/reservation/`)，展示了從 Figma 設計稿到完整 Vue 應用的整個流程：

- ✅ **8 個共用基礎元件** (BaseInput, BaseButton, BaseCheckbox, BaseDropdown, BaseRadioGroup, BaseDatePicker, BaseTextarea, BaseChip)
- ✅ **5 個功能專屬元件** (ReservationForm, SpecialRequestsForm, PaymentMethodSelector, PaymentTermsAgreement, BookingDetailCard)
- ✅ **1 個完整頁面元件** (ReservationFormPage)
- ✅ **~80 個視覺回歸測試** - 涵蓋所有元件的所有狀態

### 詳細文檔

- 📖 **[WORKFLOW.md](./WORKFLOW.md)** - 完整的 Figma 轉 Vue 工作流程指南
  - 如何使用 Figma MCP 提取設計
  - React 到 Vue 3 轉換規則
  - 元件實作最佳實踐
  - 常見問題與解決方案

- 🧪 **[TESTING.md](./TESTING.md)** - Playwright 視覺回歸測試指南
  - 測試結構與組織
  - 如何撰寫視覺測試
  - Playwright MCP 工具使用
  - 測試疑難排解

### 快速開始

```bash
# 1. 啟動開發伺服器
yarn dev

# 2. 在瀏覽器中查看參考實作
http://localhost:3000/restaurant/reservation-form

# 3. 查看測試頁面
http://localhost:3000/test/base-input
http://localhost:3000/test/reservation-form-page
```

詳細步驟請參考 [WORKFLOW.md](./WORKFLOW.md)。

## 授權

MIT
