# Technology Stack

## Project Type

**Web Application** - 現代化的 Nuxt 4 全端 Web 應用，支援多種渲染模式（SSR、SSG、SPA），專為企業級專案與 Figma 轉代碼工作流程設計。

## Core Technologies

### Primary Language(s)

- **Language**: TypeScript 5.9+
- **Runtime**: Node.js (透過 Nuxt/Nitro)
- **Browser Target**: ES Next（透過 Nitro esbuild 配置）
- **Language-specific tools**:
  - **Package Manager**: Yarn 4.8.0 (Berry)
  - **Type Checker**: vue-tsc 3.1+
  - **Build Tool**: Vite 7.1+ (Nuxt 內建)
  - **Server Engine**: Nitro (Nuxt 伺服器引擎)

### Key Dependencies/Libraries

#### Framework & Core
- **Nuxt 4.2**: 全端 Vue 框架，提供 SSR、SSG、檔案式路由、自動導入等功能
- **Vue 3.5**: 漸進式 JavaScript 框架，提供響應式 UI 開發能力
- **Vue Router 4.5**: 官方路由管理器（Nuxt 自動配置）

#### UI & Styling
- **Tailwind CSS v4.0**: Utility-first CSS 框架
  - 整合方式：`@tailwindcss/postcss` (PostCSS plugin)
  - 配置：`tailwind.config.ts` 定義主題與內容路徑
  - Dark Mode: Class-based (`class` strategy)
  - 自定義字體：DM Sans、DM Serif Display、DM Mono
- **SASS 1.89**: CSS 預處理器，支援進階樣式開發
- **@nuxtjs/color-mode 3.5**: 深色模式管理（class-based）

#### State Management & Utilities
- **Pinia 3.0**: 輕量型狀態管理，完整 TypeScript 支援
  - 整合：`@pinia/nuxt` 自動設置與 auto-imports
- **VueUse 14.0**: 組合式 API 工具集合
  - 整合：`@vueuse/nuxt` 提供自動導入
- **Lodash 4.17**: JavaScript 工具函式庫
- **Day.js 1.11**: 輕量日期時間處理庫

#### PWA & Device Support
- **@vite-pwa/nuxt 1.0**: PWA 支援
  - Service Worker 自動生成
  - Workbox 配置快取策略
  - 支援 App Manifest
  - 開發模式可選啟用 (`VITE_PLUGIN_PWA=true`)
- **@nuxtjs/device 3.2**: 裝置偵測（mobile/tablet/desktop）

#### Internationalization
- **@nuxtjs/i18n 9.5**: 國際化與多語系支援
  - Vue I18n 整合
  - 自動路由本地化
  - SEO 友善的語言切換

#### Icons & Assets
- **unplugin-icons 22.1**: 圖標自動導入
- **@iconify-json/material-symbols 1.2**: Material Symbols 圖標集

#### Auto-imports
- **unplugin-vue-components 28.4**: Vue 元件自動導入

### Application Architecture

**Feature-based Modular Architecture** 結合 Nuxt 檔案式路由系統：

#### 架構特點
- **關注點分離**：UI (components)、邏輯 (composables)、狀態 (store)、API (api) 明確分離
- **模組化設計**：每個 feature 包含其所有相關代碼，降低耦合
- **檔案式路由**：透過 `app/pages/` 目錄自動生成路由
- **自動導入**：元件、composables、utils 無需手動 import
- **型別安全**：全面 TypeScript 支援，包含 typed pages (實驗性功能)

#### 核心層次
1. **Features Layer** (`app/features/`)
   - 功能模組封裝（如 auth、members）
   - 每個模組包含：pages、components、composables、store、api、types、tests

2. **Shared Layer** (`app/shared/`)
   - 跨功能共用程式碼
   - 包含：components、composables、services、utils、types

3. **Pages Layer** (`app/pages/`)
   - Nuxt 檔案式路由頁面
   - 從 features 導入並組合頁面元件

4. **Layouts Layer** (`app/layouts/`)
   - 頁面版型模板

5. **Configuration Layer** (`app/config/`, `app/constants/`)
   - 應用配置與常數定義

### Data Storage

本專案主要作為前端起始模板，不包含後端資料存儲，但支援：

- **Client-side State**: Pinia stores（記憶體存儲）
- **Browser Storage**:
  - LocalStorage/SessionStorage（透過 VueUse）
  - IndexedDB（透過 PWA/Service Worker 快取）
- **Server State**:
  - 需整合 API 層（`app/features/*/api/`）
  - 支援 Nuxt Server API routes（`/server/api/`）

### External Integrations

#### API 整合模式
- **RESTful API**: 透過 `app/features/*/api/` 模組封裝
- **GraphQL**: 可整合（需額外配置）
- **WebSocket**: 可透過 VueUse 或自定義服務整合

#### 預期整合點
- **Authentication APIs**: 在 `app/features/auth/api/` 實現
- **Backend Services**: 透過 Nuxt server middleware 或 API routes proxy
- **Third-party Services**: Google Fonts（已配置 PWA 快取）

### Monitoring & Dashboard Technologies

#### Development Environment
- **Nuxt DevTools 3.0 beta**:
  - 即時開發監控
  - 效能分析
  - 元件檢查器
  - Payload 分析

#### Real-time Communication
- **Vite HMR**: Hot Module Replacement 即時模組更新
- **File Watchers**: 自動重新編譯與瀏覽器更新

#### State Management
- **Pinia DevTools**: 狀態追蹤與時間旅行除錯
- **Vue DevTools**: 元件樹與狀態檢查

## Development Environment

### Build & Development Tools

- **Build System**:
  - **Vite 7.1+**: 現代化前端建置工具
    - 極速冷啟動（ES modules）
    - 即時 HMR
    - 優化的生產建置
  - **Nitro**: Nuxt 伺服器引擎
    - Universal deployment
    - API routes
    - Prerendering
    - 多平台輸出（Node.js、Vercel、Netlify 等）

- **Package Management**:
  - **Yarn 4.8.0** (Berry)
    - Plug'n'Play (PnP) 模式
    - Zero-installs 支援
    - Workspace 管理

- **Development Workflow**:
  - **Hot Reload**: Vite HMR 即時更新
  - **Watch Mode**: 自動監聽檔案變更
  - **Dev Server**: `nuxt dev` 啟動開發伺服器（預設 port 3000）
  - **PWA Dev Mode**: 可選啟用 (`yarn dev:pwa`)

### Code Quality Tools

#### Static Analysis
- **ESLint 9.38+**: JavaScript/TypeScript 程式碼檢查
  - **@nuxt/eslint 1.9**: Nuxt 官方 ESLint 配置
  - **typescript-eslint 8.20**: TypeScript 語法檢查
  - **eslint-plugin-prettier 5.2**: Prettier 整合
  - 自定義規則：
    - Import order 排序（按 builtin → external → internal → parent → sibling → index → object → type）
    - Vue 元件命名規則（pages/layouts 可單字）
    - 多行三元運算符允許

#### Formatting
- **Prettier 3.4**: 統一程式碼格式化
  - 整合至 ESLint（`eslint-plugin-prettier`）
  - 支援 TypeScript、Vue、JSON、Markdown、YAML
  - Lint-staged 自動格式化

#### Type Checking
- **TypeScript 5.9+**: 靜態型別檢查
  - **vue-tsc 3.1**: Vue 單檔元件型別檢查
  - 配置：繼承自 `.nuxt/tsconfig.json`（Nuxt 自動生成）
  - **Experimental Features**:
    - `typedPages: true` - 型別安全的頁面路由

#### Testing Framework
*目前未配置，建議整合：*
- **Vitest**: 單元測試（Vite 原生支援）
- **Playwright**: E2E 測試（已有 MCP 整合基礎）
- **@vue/test-utils**: Vue 元件測試

#### Documentation
- **Markdown**: README.md 專案文檔
- **TypeScript JSDoc**: 程式碼內註解
- *建議整合 Storybook 用於元件文檔*

### Version Control & Collaboration

- **VCS**: Git
- **Branching Strategy**: *由團隊決定（建議 GitHub Flow 或 Git Flow）*
- **Code Review Process**:
  - Git Hooks 自動化檢查（透過 Husky）
  - Pre-commit hooks（lint-staged）：
    - `*.{js,ts,vue}` → ESLint auto-fix
    - `*.{json,md,yml,yaml}` → Prettier format

#### Git Hooks (Husky 9.1 + lint-staged 15.5)
```
Pre-commit:
1. 對暫存的 JS/TS/Vue 檔案執行 ESLint --fix
2. 對暫存的 JSON/Markdown/YAML 執行 Prettier --write
3. 只有通過檢查才允許提交
```

### Dashboard Development

#### Live Reload
- **Vite HMR**: 毫秒級模組熱替換
- **Nuxt Auto-reload**: 配置變更自動重啟

#### Port Management
- **Default Port**: 3000
- **Configurable**: 可透過環境變數或 `nuxt.config.ts` 調整

#### Multi-Instance Support
- 支援同時運行多個 Nuxt 專案（不同 port）
- Nuxt DevTools 可管理多個實例

## Deployment & Distribution

### Target Platform(s)

#### 多種部署模式（由 Nitro 提供）
1. **Universal (SSR)**: 伺服器端渲染
   - 平台：Node.js、Vercel、Netlify、CloudFlare Workers
   - 優點：SEO 友善、首屏載入快

2. **Static (SSG)**: 靜態網站生成
   - 指令：`yarn generate`
   - 平台：任何靜態託管（Netlify、Vercel、GitHub Pages、S3）
   - 優點：極速載入、低成本、高安全性

3. **SPA**: 單頁應用
   - 配置：`ssr: false`
   - 平台：任何 Web 伺服器

4. **Hybrid**: 混合渲染（部分 SSR、部分靜態）
   - Route Rules 配置個別頁面策略

### Distribution Method

- **Development**: `yarn dev` - 本地開發伺服器
- **Preview**: `yarn preview` - 預覽生產建置
- **Production Build**:
  - `yarn build` - Universal 建置
  - `yarn generate` - 靜態生成
- **Deployment**:
  - 一鍵部署至 Vercel/Netlify（透過 Git integration）
  - Docker 容器化（需自行配置）
  - 傳統伺服器（Node.js 環境）

### Installation Requirements

#### Development
- **Node.js**: 18.x+ 或 20.x+
- **Package Manager**: Yarn 4.8.0（或 npm/pnpm）
- **OS**: macOS、Linux、Windows（WSL 建議）

#### Production
- **Node.js**: 18.x+ (Universal mode)
- **Static Hosting**: 任何 Web 伺服器（SSG mode）
- **Browser Support**: 現代瀏覽器（ES2020+）

### Update Mechanism

- **PWA Updates**:
  - `registerType: 'autoUpdate'` - 自動更新 Service Worker
  - `cleanupOutdatedCaches: true` - 清理舊快取
- **Dependency Updates**: 透過 Yarn 管理
- **Resolutions**: 鎖定關鍵套件版本（`package.json` resolutions 欄位）

## Technical Requirements & Constraints

### Performance Requirements

- **開發模式啟動時間**: < 10 秒（冷啟動）
- **HMR 更新時間**: < 100ms（單模組）
- **生產建置時間**: < 2 分鐘（中小型專案）
- **首次內容繪製 (FCP)**: < 1.5 秒
- **最大內容繪製 (LCP)**: < 2.5 秒
- **累積版面配置位移 (CLS)**: < 0.1
- **首次輸入延遲 (FID)**: < 100ms
- **Bundle Size**: 初始 JS < 200KB (gzipped)

### Compatibility Requirements

#### Platform Support
- **Browsers**:
  - Chrome/Edge 90+
  - Firefox 88+
  - Safari 14+
  - iOS Safari 14+
  - Chrome Android
- **Node.js**: 18.x, 20.x, 22.x
- **Operating Systems**:
  - macOS (Apple Silicon & Intel)
  - Linux (Ubuntu 20.04+, Debian 11+)
  - Windows 10/11 (WSL2 建議)

#### Dependency Versions
- **Nuxt**: 4.2.0（鎖定在 resolutions）
- **Vue**: 3.5+
- **TypeScript**: 5.9+
- **Tailwind CSS**: 4.x
- **Vite**: 7.1+（透過 resolutions 鎖定）

#### Standards Compliance
- **ECMAScript**: ES2020+ (target: esnext)
- **CSS**: CSS3、CSS Grid、Flexbox
- **HTML**: HTML5
- **PWA**: Web App Manifest、Service Worker API
- **Accessibility**: WCAG 2.1（建議遵循）

### Security & Compliance

#### Security Requirements
- **CSP (Content Security Policy)**: 可透過 Nuxt config 配置
- **HTTPS**: 生產環境必須
- **Environment Variables**:
  - 敏感資料使用 `.env`（已在 `.gitignore`）
  - 公開變數使用 `NUXT_PUBLIC_` 前綴
- **Dependency Security**:
  - Yarn audit 定期掃描
  - Dependabot alerts 監控

#### Compliance Standards
*由具體專案需求決定，模板提供基礎支援：*
- **GDPR**: Cookie consent 需自行實現
- **Privacy**: i18n 支援隱私政策多語系
- **Accessibility**: 需遵循 WCAG 2.1 AA 標準

#### Threat Model
- **XSS 防護**: Vue 自動 HTML escaping
- **CSRF**: 需整合 backend CSRF token
- **依賴漏洞**: Yarn audit + GitHub Dependabot
- **Secrets 洩漏**: `.env` 已加入 `.gitignore`

### Scalability & Reliability

#### Expected Load
*前端起始模板，實際負載由部署方式決定：*
- **SSG Mode**: 可處理極高流量（靜態檔案）
- **SSR Mode**: 依伺服器配置（建議使用 CDN + Edge caching）
- **Client-side**: 記憶體使用 < 50MB（初始狀態）

#### Availability Requirements
- **Static Mode**: 99.9%+（依託管平台）
- **SSR Mode**: 需配置 load balancing 與 health checks

#### Growth Projections
- **Code Splitting**: 自動按路由分割
- **Lazy Loading**: 支援元件與路由懶載入
- **Asset Optimization**: 圖片壓縮、tree-shaking、minification
- **CDN**: 建議使用 CDN 加速靜態資源

## Technical Decisions & Rationale

### Decision Log

1. **選擇 Nuxt 4 而非 Next.js**
   - **理由**:
     - Vue 生態系更符合團隊技術棧
     - Nuxt 提供更簡潔的配置體驗
     - 內建 SSR/SSG/SPA 多模式切換
     - 檔案式路由自動化
   - **替代方案**: Next.js (React)、SvelteKit
   - **權衡**:
     - 優點：開發體驗佳、學習曲線平緩
     - 缺點：社群相對 React 生態較小

2. **採用 Tailwind CSS v4 而非 v3**
   - **理由**:
     - 使用最新 PostCSS 整合（`@tailwindcss/postcss`）
     - 更好的效能與開發體驗
     - 簡化配置檔案
   - **替代方案**: Tailwind v3、UnoCSS、Windi CSS
   - **權衡**:
     - 優點：最新特性、未來保障
     - 缺點：生態系插件可能尚未完全支援 v4

3. **Feature-based 架構而非傳統 MVC**
   - **理由**:
     - 功能模組高內聚、低耦合
     - 易於團隊協作（功能邊界清晰）
     - 支援 Figma 轉代碼工作流程（元件就近放置）
     - 易於測試與維護
   - **替代方案**: MVC、分層架構、Atomic Design
   - **權衡**:
     - 優點：可維護性高、擴展性強
     - 缺點：小型專案可能過度設計

4. **選擇 Pinia 而非 Vuex**
   - **理由**:
     - 官方推薦（Vue 3 時代）
     - TypeScript 支援更佳
     - API 更簡潔（無 mutations）
     - 更好的 DevTools 整合
   - **替代方案**: Vuex 4、直接使用 Composition API
   - **權衡**:
     - 優點：輕量、型別安全、開發體驗佳
     - 缺點：Vuex 舊專案遷移成本

5. **使用 Yarn 4 (Berry) 而非 npm/pnpm**
   - **理由**:
     - Plug'n'Play 模式提升安裝速度
     - Workspace 管理能力強
     - 更好的 monorepo 支援（未來擴展）
   - **替代方案**: npm、pnpm
   - **權衡**:
     - 優點：效能佳、功能豐富
     - 缺點：部分 IDE 需額外配置（PnP SDK）

6. **整合 PWA 支援**
   - **理由**:
     - 提升使用者體驗（離線存取、快速載入）
     - App-like 體驗（可安裝）
     - 未來移動端擴展基礎
   - **替代方案**: 純 Web App
   - **權衡**:
     - 優點：增強功能、更好的快取控制
     - 缺點：增加複雜度、需額外測試

7. **使用 Husky + lint-staged 自動化程式碼品質**
   - **理由**:
     - Pre-commit 自動檢查避免低品質提交
     - 團隊統一程式碼風格
     - CI/CD 失敗率降低
   - **替代方案**: 手動 lint、CI-only 檢查
   - **權衡**:
     - 優點：即時反饋、強制品質
     - 缺點：提交速度略慢（毫秒級）

8. **啟用 Nuxt 實驗性功能**
   - **`typedPages: true`**: 型別安全路由
   - **`renderJsonPayloads: true`**: 優化 payload 渲染
   - **`payloadExtraction: false`**: 修復 SSG 離線問題
   - **理由**: 提前採用未來標準功能
   - **風險**: API 可能變更（需追蹤 Nuxt 更新）

## Known Limitations

### 1. Tailwind CSS v4 生態系相容性
- **描述**: 部分 Tailwind v3 插件尚未支援 v4
- **影響**:
  - `@tailwindcss/forms`、`@tailwindcss/typography` 等官方插件需等待更新
  - 第三方 UI 函式庫可能需要額外配置
- **解決方案**:
  - 追蹤官方 roadmap
  - 需要時使用自定義 CSS 或回退至 v3
- **預計解決時間**: 2025 Q1-Q2

### 2. 缺少測試框架配置
- **描述**: 未預配置單元測試與 E2E 測試
- **影響**:
  - 團隊需自行整合 Vitest/Jest
  - 缺少測試範例與最佳實踐
- **解決方案**:
  - 整合 Vitest + @vue/test-utils
  - 整合 Playwright (已有 MCP 基礎)
  - 建立測試模板與文檔
- **預計解決時間**: 未來版本

### 3. 無後端 API 層實現
- **描述**: 僅提供前端模板，API 層需自行實現
- **影響**:
  - `app/features/*/api/` 僅為空架構
  - 需團隊根據後端技術自行實現
- **解決方案**:
  - 提供 API 層範例（fetch/axios）
  - 整合 Nuxt Server API routes
  - 文檔說明 API 整合最佳實踐
- **預計解決時間**: 依專案需求

### 4. i18n 配置需額外設置
- **描述**: 雖已安裝 @nuxtjs/i18n，但未提供語言檔案與完整配置
- **影響**:
  - 多語系功能需額外配置才能使用
  - 缺少語言切換 UI 範例
- **解決方案**:
  - 建立 `locales/` 目錄結構
  - 提供語言檔案範例（en、zh-TW）
  - 建立語言切換元件
- **預計解決時間**: 未來版本

### 5. PWA 圖標需手動生成
- **描述**: PWA manifest 已配置，但圖標檔案需手動準備
- **影響**:
  - `pwa-192x192.png`、`pwa-512x512.png`、`maskable-icon.png` 需自行生成
  - 開發時會有 404 錯誤（不影響功能）
- **解決方案**:
  - 使用 PWA Asset Generator 工具
  - 提供預設佔位圖標
- **預計解決時間**: 未來版本

### 6. Nuxt 4 處於 Beta 階段
- **描述**: Nuxt 4 仍在快速迭代中，API 可能變更
- **影響**:
  - Breaking changes 風險
  - 部分功能文檔不完整
  - 第三方模組相容性問題
- **解決方案**:
  - 透過 `resolutions` 鎖定版本
  - 追蹤官方 changelog 與 migration guide
  - 謹慎升級，充分測試
- **預計解決時間**: Nuxt 4 正式版發布（2025 H1 預期）

### 7. 缺少 CI/CD 配置
- **描述**: 未提供 GitHub Actions、GitLab CI 等 workflow 檔案
- **影響**:
  - 團隊需自行建立 CI/CD pipeline
  - 缺少自動化測試、建置、部署流程
- **解決方案**:
  - 提供 GitHub Actions workflow 範例
  - 整合 Vercel/Netlify 自動部署
  - 文檔說明 CI/CD 最佳實踐
- **預計解決時間**: 未來版本

### 8. Accessibility 需額外實作
- **描述**: 未強制執行無障礙標準（WCAG）
- **影響**:
  - 需手動確保 ARIA 標籤、鍵盤導航等
  - 缺少 a11y 檢查工具
- **解決方案**:
  - 整合 eslint-plugin-vuejs-accessibility
  - 整合 axe-core 或 Pa11y
  - 提供無障礙元件範例
- **預計解決時間**: 依專案需求

### 9. 環境變數管理需規範
- **描述**: 未提供 `.env.example` 檔案
- **影響**:
  - 團隊成員不清楚需要哪些環境變數
  - 缺少環境變數命名規範
- **解決方案**:
  - 建立 `.env.example`
  - 文檔說明 Nuxt 環境變數規則（`NUXT_PUBLIC_` 前綴）
- **預計解決時間**: 未來版本

### 10. 效能監控工具未整合
- **描述**: 缺少 Web Vitals 追蹤、錯誤監控（Sentry）
- **影響**:
  - 無法追蹤生產環境效能
  - 錯誤難以追溯
- **解決方案**:
  - 整合 @nuxtjs/web-vitals
  - 整合 Sentry/LogRocket
  - 提供分析工具整合範例
- **預計解決時間**: 依專案需求
