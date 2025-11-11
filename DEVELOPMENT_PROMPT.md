# Figma 轉 Vue 開發 Prompt

請將以下 prompt 提供給 AI Assistant（如 Claude、ChatGPT 等），讓 AI 協助你完成 Figma 設計稿轉 Vue 元件的工作。

---

## 基礎 Prompt（適用於單一元件）

```
我需要將 Figma 設計稿轉換為 Vue 3 元件。請遵循以下工作流程：

## Phase 0: 使用 Spec Workflow MCP 規劃開發任務（首次必讀）

在開始實際開發前，強烈建議使用 Spec Workflow MCP 工具來規劃和追蹤任務：

### 1. 載入工作流程指南
```typescript
mcp__spec-workflow__spec-workflow-guide()
```
這會載入完整的規格驅動開發流程，幫助你理解如何正確使用 spec-workflow 系統。

### 2. 建立開發規格（適用於複雜功能）
對於多元件功能或完整功能模組：

```typescript
// 先建立 steering documents（專案導向文檔）
mcp__spec-workflow__steering-guide()

// 然後建立功能規格
mcp__spec-workflow__create-spec-doc({
  specName: '[feature-name]',
  type: 'requirements' | 'design' | 'tasks'
})
```

### 3. 管理任務清單
使用 tasks.md 來追蹤實作進度：

```typescript
// 查看任務狀態
mcp__spec-workflow__spec-status({
  specName: '[feature-name]'
})

// 更新任務狀態
mcp__spec-workflow__manage-tasks({
  specName: '[feature-name]',
  taskId: '1.1',
  action: 'update',
  status: 'completed'
})
```

### 4. 實作日誌記錄（完成每個任務後）
**重要：** 每完成一個任務都要記錄，這會建立可搜尋的知識庫：

```typescript
mcp__spec-workflow__log-implementation({
  specName: '[feature-name]',
  taskId: '1.1',
  summary: '實作 BaseInput 元件',
  artifacts: {
    components: [{
      name: 'BaseInput',
      type: 'Vue',
      purpose: '可重用的輸入框元件，支援錯誤狀態和禁用狀態',
      location: 'app/shared/components/form/BaseInput.vue',
      props: 'modelValue, label, placeholder, error, disabled, required',
      exports: ['BaseInput (default)']
    }]
  },
  filesCreated: ['app/shared/components/form/BaseInput.vue'],
  filesModified: [],
  statistics: { linesAdded: 150, linesRemoved: 0 }
})
```

### 5. 查詢已實作的內容（避免重複開發）
在開始新任務前，先查詢是否已有類似實作：

```typescript
mcp__spec-workflow__get-implementation-logs({
  specName: '[feature-name]',
  keyword: 'input'  // 搜尋關鍵字
})
```

### 為什麼要用 Spec Workflow？
- ✅ **避免遺漏任務** - 系統化追蹤每個待辦事項
- ✅ **建立知識庫** - 記錄的 artifacts 可被未來 AI agents 搜尋重用
- ✅ **進度可視化** - 隨時查看完成度和剩餘工作
- ✅ **避免重複開發** - 查詢已實作內容，避免重新造輪子
- ✅ **團隊協作** - 清楚的任務狀態讓多人協作更順暢

---

## 專案背景
- 專案使用 Nuxt 4 + Vue 3 Composition API + TypeScript
- 樣式使用 Tailwind CSS v4
- 採用 Feature-based 架構（參考 .spec-workflow/steering/structure.md）
- 請閱讀 WORKFLOW.md 了解完整的轉換流程

## 我的需求
[描述你要轉換的元件，例如：]
- Figma Frame: [Frame 名稱或 ID]
- 元件類型: [Shared Component / Feature Component / Page]
- 功能說明: [簡述元件用途]

## 請執行以下步驟

### Step 1: 從 Figma 提取設計
1. 我已在 Figma Desktop App 選取該 Frame
2. 請使用 Figma MCP 工具：
   - `get_metadata` - 取得 Frame 結構
   - `get_design_context` - 取得 React + Tailwind 代碼
   - `get_screenshot` - 取得設計稿截圖

### Step 2: 轉換為 Vue 3
1. 將 React 代碼轉換為 Vue 3 Composition API
2. 遵循轉換規則（參考 WORKFLOW.md）：
   - `className` → `class`
   - `useState` → `ref()`
   - `useEffect` → `onMounted()`
   - Props/Events → `defineProps`/`defineEmits`
3. 保留所有 Tailwind CSS classes（不要修改）

### Step 3: 決定元件位置
根據 Feature-based 架構：
- 通用 UI 元件 → `app/shared/components/`
- 功能專屬元件 → `app/features/[feature]/components/`
- 頁面元件 → `app/features/[feature]/pages/`

### Step 4: 實作元件
1. 使用 TypeScript 定義 Props 和 Emits 型別
2. 實作 v-model 支援（表單元件）
3. 添加 `data-name` 屬性方便測試
4. 確保元件符合 Single Responsibility Principle

### Step 5: 建立測試頁面
在 `app/pages/test/` 建立測試頁面：
- 支援多種狀態（使用 query parameters）
- 例: `/test/my-component?state=default|error|disabled`

### Step 6: 檢查常見問題
特別注意：
- 檢查是否有 `.size-full` class（會導致高度問題）
- 如果有，改為 `.w-full`（參考 WORKFLOW.md 「Issue 5」）
- 確認所有 CSS variables 對應的顏色已在 Figma Design Tokens / Variables 中定義

### Step 7: 執行視覺回歸測試（重要！）
使用 Playwright MCP 工具進行視覺驗證：

1. **啟動開發伺服器**
   ```bash
   yarn dev
   ```

2. **使用 Playwright MCP 導航到測試頁面**
   ```typescript
   mcp__playwright__browser_navigate({
     url: 'http://localhost:3000/test/[component-name]'
   })
   ```

3. **擷取不同狀態的截圖**
   ```typescript
   // 預設狀態
   mcp__playwright__browser_take_screenshot({
     filename: '[component]-default.png',
     type: 'png'
   })

   // 錯誤狀態（如有）
   mcp__playwright__browser_navigate({
     url: 'http://localhost:3000/test/[component-name]?state=error'
   })
   mcp__playwright__browser_take_screenshot({
     filename: '[component]-error.png'
   })

   // 禁用狀態（如有）
   mcp__playwright__browser_navigate({
     url: 'http://localhost:3000/test/[component-name]?state=disabled'
   })
   mcp__playwright__browser_take_screenshot({
     filename: '[component]-disabled.png'
   })
   ```

4. **測試互動狀態**（如 hover、focus、filled）
   ```typescript
   // 填寫表單
   mcp__playwright__browser_type({
     element: 'Input field',
     ref: 'input',
     text: '測試文字'
   })
   mcp__playwright__browser_take_screenshot({
     filename: '[component]-filled.png'
   })

   // Hover 狀態
   mcp__playwright__browser_hover({
     element: 'Button',
     ref: '[data-name="BaseButton"]'
   })
   mcp__playwright__browser_take_screenshot({
     filename: '[component]-hover.png'
   })
   ```

5. **比對 Figma baseline 截圖**
   - 將 Playwright 截圖與 Figma 設計稿截圖並排比對
   - 確認視覺差異在 ±2px 容差內
   - 如有差異，調整 Tailwind classes 或樣式

6. **記錄測試結果**
   - 所有狀態都已測試 ✅
   - 視覺與 Figma 一致 ✅
   - 互動功能正常 ✅

### Step 8: 最終驗證
1. 在瀏覽器中手動檢查: `http://localhost:3000/test/[component-name]`
2. 切換不同狀態確認顯示正確
3. 測試互動功能（點擊、輸入、選擇等）
4. 確認與 Figma 設計稿視覺一致

## 輸出格式
請依序輸出：
1. 元件代碼 (*.vue 檔案)
2. 測試頁面代碼 (app/pages/test/*.vue)
3. Tailwind config 變更（如有）
4. 元件放置位置說明
5. 遇到的問題與解決方案

## 重要提醒
- 請閱讀 WORKFLOW.md 了解詳細轉換規則
- 遇到問題請參考 WORKFLOW.md 「Common Issues」章節
- 保留所有 Figma 產生的 Tailwind classes
- 不要修改 .size-full 以外的 Tailwind classes
```

---

## 完整專案 Prompt（適用於多元件功能）

```
我需要將完整的 Figma 設計稿轉換為 Vue 功能模組。請遵循以下工作流程：

## Phase 0: 使用 Spec Workflow MCP 建立開發規格（必須執行）

完整功能模組開發**必須**使用 Spec Workflow 來管理：

### Step 0.1: 載入 Spec Workflow 指南
```typescript
mcp__spec-workflow__spec-workflow-guide()
```

### Step 0.2: 建立功能規格文檔
按照以下順序建立完整的開發規格：

```typescript
// 1. 建立 Requirements 文檔
mcp__spec-workflow__create-spec-doc({
  specName: '[feature-name]',
  type: 'requirements'
})
// 內容包括：功能目標、使用者故事、成功標準

// 2. 建立 Design 文檔
mcp__spec-workflow__create-spec-doc({
  specName: '[feature-name]',
  type: 'design'
})
// 內容包括：元件架構、資料流、Figma Design Tokens

// 3. 建立 Tasks 文檔（最重要）
mcp__spec-workflow__create-spec-doc({
  specName: '[feature-name]',
  type: 'tasks'
})
// 這會生成詳細的任務分解，包括：
// - Phase 1: Figma 設計提取
// - Phase 2: Shared Components 實作
// - Phase 3: Feature Components 實作
// - Phase 4: Page Integration
// - Phase 5: Testing & Documentation
```

### Step 0.3: 在開始每個 Task 前查詢已有實作
```typescript
mcp__spec-workflow__get-implementation-logs({
  specName: '[feature-name]',
  keyword: '[component-type]'  // 例如: 'input', 'button', 'form'
})
```

### Step 0.4: 完成每個 Task 後記錄實作
```typescript
mcp__spec-workflow__log-implementation({
  specName: '[feature-name]',
  taskId: '[phase.task]',  // 例如: '2.1', '3.4'
  summary: '[簡述完成內容]',
  artifacts: {
    components: [/* 元件列表 */],
    functions: [/* 函數列表 */],
    integrations: [/* 整合說明 */]
  },
  filesCreated: [/* 新建檔案 */],
  filesModified: [/* 修改檔案 */],
  statistics: { linesAdded: 0, linesRemoved: 0 }
})
```

### Step 0.5: 定期檢查專案進度
```typescript
mcp__spec-workflow__spec-status({
  specName: '[feature-name]'
})
```

### 為什麼完整專案必須用 Spec Workflow？
- 🎯 **任務分解** - 自動將大型功能拆分為可管理的小任務
- 📊 **進度追蹤** - 清楚知道完成了多少、還剩多少
- 🔍 **避免重複** - 查詢已實作內容，重用現有元件
- 📝 **知識沉澱** - 建立可搜尋的實作知識庫
- 👥 **團隊協作** - 多人開發時任務狀態一目了然
- ✅ **品質保證** - 每個 Phase 都有明確的完成標準

---

## 專案背景
- 專案使用 Nuxt 4 + Vue 3 Composition API + TypeScript
- 樣式使用 Tailwind CSS v4
- 採用 Feature-based 架構
- 參考實作: `app/features/reservation/`（餐廳預約功能）
- 請詳細閱讀以下文檔：
  - WORKFLOW.md - 完整工作流程
  - TESTING.md - 視覺測試指南
  - .spec-workflow/steering/structure.md - 專案架構

## 我的需求
功能名稱: [例如: user-profile / product-catalog / shopping-cart]
Figma Frame: [Frame 名稱或 ID]
功能說明: [描述這個功能的用途]

預期元件清單:
- Shared Components: [列出可重用的基礎元件]
- Feature Components: [列出功能專屬元件]
- Page Components: [列出頁面元件]

## 請遵循 5 個 Phase 執行（Phase 0 已完成規格建立）

### Phase 1: Figma 設計提取與分析 (~15 分鐘)
1. 使用 Figma MCP 工具提取設計：
   - `get_metadata` - 分析 Frame 結構
   - `get_design_context` - 取得所有子元件的 React 代碼
   - `get_screenshot` - 取得完整頁面截圖

2. 分析設計稿，識別：
   - 哪些是可重用的基礎元件（Shared）
   - 哪些是功能專屬元件（Feature）
   - 元件之間的依賴關係

3. 規劃實作順序：
   - 先實作 Shared Components（被依賴的基礎元件）
   - 再實作 Feature Components（使用基礎元件）
   - 最後實作 Page Components（整合所有元件）

### Phase 2: Shared Components 實作 (~2-3 小時)
對於每個 Shared Component：

1. 轉換 React → Vue 3（參考 WORKFLOW.md 轉換規則）
2. 放置於 `app/shared/components/[category]/`
3. 實作 Props 和 Emits 型別定義
4. 實作 v-model 支援（表單元件）
5. 建立測試頁面 `app/pages/test/[component].vue`
6. 檢查 `.size-full` 問題並修正

範例元件:
- BaseInput, BaseButton, BaseCheckbox, BaseDropdown
- BaseRadioGroup, BaseDatePicker, BaseTextarea, BaseChip

### Phase 3: Feature Components 實作 (~2-3 小時)
對於每個 Feature Component：

1. 建立 feature 目錄結構：
```
app/features/[feature-name]/
├── components/       # Feature 專屬元件
├── composables/      # 業務邏輯封裝
├── types/            # TypeScript 型別
├── pages/            # 頁面元件
└── index.ts          # Barrel exports
```

2. 轉換並實作每個元件
3. 建立 composables 封裝業務邏輯
4. 定義 TypeScript 型別（interfaces, types）
5. 建立測試頁面

### Phase 4: Page Integration (~1-2 小時)
1. 建立完整頁面元件 `app/features/[feature]/pages/[PageName].vue`
2. 整合所有 Feature Components
3. 處理元件間的資料流和事件通信
4. 建立 Nuxt route `app/pages/[route].vue`
5. 建立頁面測試頁面
6. 驗證完整功能流程

### Phase 5: 文檔與最佳化 (~1 小時)
1. 更新 Tailwind config（新增顏色、字體）
2. 建立 barrel exports (`index.ts`)
3. 驗證所有元件在瀏覽器中正常運作
4. 記錄遇到的問題與解決方案

## 特別注意事項

### ⚠️ 必須檢查的問題
1. **`.size-full` 問題** (最常見)
   - 現象: 元件高度異常，被強制拉高
   - 解決: 改為 `.w-full`
   - 原因: Figma Auto Layout "Vertical Resizing" 設為 "Fill container"

2. **CSS Variables 未定義**
   - 檢查 `bg-[var(--surface,#ffffff)]` 等是否正常顯示
   - 如需要，在 `tailwind.config.ts` 添加對應顏色

3. **v-model 實作**
   - 所有表單元件都要支援 v-model
   - Props: `modelValue`
   - Emits: `update:modelValue`

4. **TypeScript 型別定義**
   - 所有 Props 和 Emits 都要定義型別
   - 使用 `interface` 定義複雜型別

### 📋 架構規範 Checklist
- [ ] Shared components 放在 `app/shared/components/`
- [ ] Feature components 放在 `app/features/[feature]/components/`
- [ ] 使用 PascalCase 命名元件檔案
- [ ] 每個元件都有 `data-name` 屬性
- [ ] 每個元件都有對應的測試頁面
- [ ] 保留所有 Figma 的 Tailwind classes
- [ ] 實作 v-model 支援（表單元件）
- [ ] 定義 TypeScript 型別
- [ ] 建立 barrel exports

### 🎯 成功驗證標準
1. 所有元件可在 `http://localhost:3000/test/[component]` 查看
2. 完整頁面可在 `http://localhost:3000/[route]` 存取
3. 視覺外觀與 Figma 設計稿一致（±2px 容差）
4. 所有表單元件的 v-model 正常運作
5. TypeScript 無型別錯誤
6. Yarn dev 運行無錯誤

## 輸出格式

請依照以下格式逐一輸出：

### 1. 元件清單
列出所有建立的元件及其位置：
```
Shared Components:
- BaseInput (app/shared/components/form/BaseInput.vue)
- BaseButton (app/shared/components/form/BaseButton.vue)
...

Feature Components:
- UserProfileForm (app/features/user-profile/components/UserProfileForm.vue)
...
```

### 2. 檔案結構
展示完整的目錄結構

### 3. 關鍵代碼片段
展示重要的元件實作（挑 2-3 個代表性元件）

### 4. Tailwind Config 變更
如有新增顏色或字體，展示變更內容

### 5. 遇到的問題與解決方案
記錄所有遇到的問題及如何解決

### 6. 測試驗證
提供測試頁面 URL 清單

### 7. 下一步建議
後續可以改進或擴展的方向

## 重要文檔參考
開始前請務必閱讀：
- WORKFLOW.md (第 60-220 行) - React 轉 Vue 轉換規則
- WORKFLOW.md (第 350-450 行) - 常見問題與解決方案
- TESTING.md - 如何建立測試頁面
- .spec-workflow/steering/structure.md - Feature-based 架構說明

參考實作範例：
- `app/features/reservation/` - 完整的餐廳預約功能
- `app/shared/components/form/` - 8 個基礎表單元件
```

---

## Quick Start 精簡版 Prompt（5 分鐘快速開始）

```
快速任務：將 Figma 元件轉為 Vue

Phase 0: 規劃任務
1. 載入 Spec Workflow: mcp__spec-workflow__spec-workflow-guide()
2. 記錄實作: mcp__spec-workflow__log-implementation()

Phase 1: Figma 提取
3. 我已在 Figma Desktop App 選取 [Frame 名稱]
4. 使用 Figma MCP: get_design_context 取得代碼

Phase 2: 轉換實作
5. 轉換 React → Vue 3 (className→class, useState→ref)
6. 保留所有 Tailwind classes，但將 .size-full 改為 .w-full
7. 放置於 app/[shared|features]/components/
8. 建立測試頁面 app/pages/test/

Phase 3: 視覺驗證
9. 啟動 yarn dev
10. 使用 Playwright MCP 驗證:
    - mcp__playwright__browser_navigate({ url: 'http://localhost:3000/test/[component]' })
    - mcp__playwright__browser_take_screenshot({ filename: '[component].png' })
    - 比對 Figma 截圖，確認 ±2px 一致

參考: WORKFLOW.md (完整步驟)
架構: app/features/reservation/ (範例)
```

---

## 版本記錄

- v1.0 (2025-11-10) - 初版發布，基於 reservation feature 實作經驗
