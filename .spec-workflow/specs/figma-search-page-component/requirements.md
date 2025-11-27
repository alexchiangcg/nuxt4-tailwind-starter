# Requirements Document

## Introduction

本功能旨在提供一個 **Schema-Driven** 的搜尋頁面 Vue 3 組件，能夠將 Figma 設計稿快速轉換為高度可配置的企業級搜尋介面。此組件使用 Syncfusion 元件庫，支援動態欄位生成、表格渲染、分頁、排序等功能，並透過 Props 配置實現零代碼修改的欄位擴展能力。

**核心價值：**
- **加速 Figma 轉代碼流程**：從設計稿到可用組件的時間從數天縮短至數小時
- **高度可復用性**：透過 Schema 配置，一個組件適用於所有搜尋頁面場景
- **降低維護成本**：新增欄位無需修改組件代碼，符合開放封閉原則（OCP）
- **企業級品質**：整合 Syncfusion 元件庫，提供專業的 UI/UX 體驗

## Alignment with Product Vision

此功能直接支援 **product.md** 中定義的核心目標：

### 1. 設計驅動的產品團隊（Target Users #3）
- **痛點解決**：消除「從 Figma 設計稿到代碼實現缺乏自動化流程」的斷層
- **價值對齊**：Figma 轉代碼工作流程優化（Key Features #6）

### 2. Feature-based 架構（Key Features #3）
- 組件遵循專案的 Feature-based 架構標準
- 放置於 `app/features/search/components/` 符合專案結構規範
- 包含完整的 TypeScript 型別定義與 Props interface

### 3. 開發者體驗優化（Key Features #4）
- 自動元件導入：組件可透過 unplugin-vue-components 自動導入
- TypeScript 支援：完整的型別安全與 IDE 自動完成
- 清晰的 API 設計：Props 結構直觀易懂

### 4. 代碼品質保證（Key Features #5）
- 遵循 ESLint + Prettier 規範
- 完整的 TypeScript 型別檢查
- Playwright E2E 測試確保功能正確性

### 5. 業務目標支援（Business Objectives）
- **縮短專案啟動時間**：預建搜尋頁面組件減少重複開發
- **提升開發效率**：Schema-Driven 設計消除樣板代碼
- **確保代碼品質**：型別安全與測試覆蓋
- **加速設計實現**：從 Figma 到 Vue 的標準化流程

## Requirements

### Requirement 1: Schema-Driven 搜尋欄位渲染

**User Story:**
作為一個前端開發者，我希望透過傳遞 `searchFields` Props 來動態生成搜尋表單欄位，而無需修改組件代碼，以便快速適應不同的搜尋頁面需求。

#### Acceptance Criteria

1. **WHEN** 開發者傳入 `searchFields` 配置陣列 **THEN** 組件 **SHALL** 根據 Schema 動態渲染對應的表單欄位
2. **WHEN** `searchFields[i].type` 為 `'text'` **THEN** 組件 **SHALL** 渲染 Syncfusion `TextBoxComponent`
3. **WHEN** `searchFields[i].type` 為 `'dropdown'` **THEN** 組件 **SHALL** 渲染 Syncfusion `DropDownListComponent` 並綁定 `options` 資料
4. **WHEN** `searchFields[i].type` 為 `'daterange'` **THEN** 組件 **SHALL** 渲染 Syncfusion `DateRangePickerComponent`
5. **WHEN** `searchFields[i].width` 有值 **THEN** 組件 **SHALL** 使用 CSS `flex-grow` 設定對應的欄位寬度比例
6. **IF** `searchFields` 為空陣列 **THEN** 組件 **SHALL** 不渲染任何搜尋欄位
7. **WHEN** 使用者修改搜尋欄位 **THEN** 組件 **SHALL** 透過 `v-model` 將值同步到內部 `filters` state

### Requirement 2: 折疊式搜尋區域

**User Story:**
作為一個使用者，我希望搜尋條件區域可以折疊/展開，以便在不需要進階篩選時節省螢幕空間，提升瀏覽體驗。

#### Acceptance Criteria

1. **WHEN** `searchFields[i].row` 為 `1` 或 `undefined` **THEN** 該欄位 **SHALL** 顯示在第一排（預設可見）
2. **WHEN** `searchFields[i].row` 為 `2` **THEN** 該欄位 **SHALL** 顯示在第二排（折疊狀態）
3. **WHEN** 頁面初次載入 **THEN** 第二排欄位 **SHALL** 預設隱藏
4. **WHEN** 使用者點擊展開按鈕 **THEN** 組件 **SHALL** 顯示第二排欄位，並將圖示從 `chevron-down` 改為 `chevron-up`
5. **WHEN** 使用者再次點擊收起按鈕 **THEN** 組件 **SHALL** 隱藏第二排欄位，並將圖示從 `chevron-up` 改為 `chevron-down`
6. **IF** 所有 `searchFields` 的 `row` 都為 `1` **THEN** 展開按鈕 **SHALL** 仍然顯示但無實際作用

### Requirement 3: Schema-Driven 表格欄位渲染

**User Story:**
作為一個前端開發者，我希望透過傳遞 `gridColumns` Props 來動態生成表格欄位，而無需修改組件代碼，以便快速適應不同的資料結構。

#### Acceptance Criteria

1. **WHEN** 開發者傳入 `gridColumns` 配置陣列 **THEN** 組件 **SHALL** 根據 Schema 動態渲染 Syncfusion Grid 欄位
2. **WHEN** `gridColumns[i].field` 有值 **THEN** 組件 **SHALL** 將該欄位綁定到 Grid 的 `field` 屬性
3. **WHEN** `gridColumns[i].headerText` 有值 **THEN** 組件 **SHALL** 顯示對應的表頭文字
4. **WHEN** `gridColumns[i].width` 有值 **THEN** 組件 **SHALL** 設定欄位寬度
5. **WHEN** `gridColumns[i].textAlign` 為 `'Right'` **THEN** 組件 **SHALL** 將欄位內容靠右對齊
6. **WHEN** `gridColumns[i].isLink` 為 `true` **THEN** 組件 **SHALL** 將該欄位渲染為超連結樣式（藍色文字 + 底線）
7. **IF** `gridColumns` 為空陣列 **THEN** 組件 **SHALL** 不渲染任何表格欄位

### Requirement 4: 表格資料顯示與分頁

**User Story:**
作為一個使用者，我希望在表格中看到搜尋結果，並能透過分頁瀏覽大量資料，以便有效率地查找所需資訊。

#### Acceptance Criteria

1. **WHEN** 開發者傳入 `gridData` Props **THEN** 組件 **SHALL** 在 Syncfusion Grid 中顯示資料
2. **WHEN** `gridData` 包含超過 20 筆資料 **THEN** 組件 **SHALL** 自動啟用分頁功能
3. **WHEN** 分頁器顯示 **THEN** 組件 **SHALL** 提供「首頁」、「上一頁」、「下一頁」、「末頁」按鈕
4. **WHEN** 分頁器顯示 **THEN** 組件 **SHALL** 顯示當前頁碼和總頁數（例如：「1 之 5 頁」）
5. **WHEN** 使用者點擊「下一頁」 **THEN** 組件 **SHALL** 切換到下一頁資料
6. **WHEN** 使用者選擇每頁筆數（10/20/50/100） **THEN** 組件 **SHALL** 重新計算分頁並顯示對應筆數
7. **IF** `gridData` 為空陣列 **THEN** 組件 **SHALL** 顯示空白表格（無錯誤訊息）

### Requirement 5: 搜尋與清除功能

**User Story:**
作為一個使用者，我希望能夠執行搜尋並清除搜尋條件，以便快速找到所需資料或重置篩選狀態。

#### Acceptance Criteria

1. **WHEN** 使用者填寫搜尋條件並點擊搜尋按鈕 **THEN** 組件 **SHALL** 觸發 `@search` 事件，並傳遞當前的 `filters` 物件
2. **WHEN** `@search` 事件被觸發 **THEN** 父組件 **SHALL** 接收到完整的搜尋條件（包含所有欄位的 key-value pairs）
3. **WHEN** 使用者點擊清除按鈕 **THEN** 組件 **SHALL** 將所有 `filters` 重置為空值
4. **WHEN** 清除按鈕被點擊 **THEN** 所有搜尋欄位 **SHALL** 顯示為初始狀態（空白或 placeholder）
5. **IF** 使用者未填寫任何搜尋條件並點擊搜尋 **THEN** 組件 **SHALL** 仍然觸發 `@search` 事件，並傳遞空物件 `{}`
6. **WHEN** 搜尋按鈕被點擊 **THEN** 組件 **SHALL** 不執行任何內建的資料篩選邏輯（資料處理由父組件負責）

### Requirement 6: 新增按鈕與事件轉發

**User Story:**
作為一個使用者，我希望能夠透過按鈕快速新增資料，以便在搜尋頁面直接進入新增流程。

#### Acceptance Criteria

1. **WHEN** 開發者傳入 `addButtonText` Props **THEN** 組件 **SHALL** 顯示新增按鈕並使用該文字作為按鈕標籤
2. **WHEN** 使用者點擊新增按鈕 **THEN** 組件 **SHALL** 觸發 `@add` 事件
3. **IF** `addButtonText` 為空字串或 `undefined` **THEN** 組件 **SHALL** 不顯示新增按鈕
4. **WHEN** 新增按鈕被點擊 **THEN** 組件 **SHALL** 不執行任何內建的導航或彈窗邏輯（由父組件處理）

### Requirement 7: 表格排序功能

**User Story:**
作為一個使用者，我希望能夠點擊表格表頭來排序資料，以便依照特定欄位查看排序後的結果。

#### Acceptance Criteria

1. **WHEN** 使用者點擊任意表格表頭 **THEN** 組件 **SHALL** 啟用該欄位的升序排序
2. **WHEN** 使用者再次點擊相同表頭 **THEN** 組件 **SHALL** 切換為降序排序
3. **WHEN** 使用者第三次點擊相同表頭 **THEN** 組件 **SHALL** 取消排序（恢復原始順序）
4. **WHEN** 排序被啟用 **THEN** 表頭 **SHALL** 顯示排序圖示（升序 ↑ 或降序 ↓）
5. **IF** `gridColumns[i].type` 為 `'number'` **THEN** 排序 **SHALL** 按數值大小排序
6. **IF** `gridColumns[i].type` 為 `'date'` **THEN** 排序 **SHALL** 按日期時間排序
7. **IF** `gridColumns[i].type` 為 `'string'` 或 `undefined` **THEN** 排序 **SHALL** 按字母順序排序

### Requirement 8: TypeScript 型別安全

**User Story:**
作為一個前端開發者，我希望組件提供完整的 TypeScript 型別定義，以便在開發時獲得 IDE 自動完成和型別檢查，減少錯誤。

#### Acceptance Criteria

1. **WHEN** 開發者導入組件 **THEN** 組件 **SHALL** 匯出 `SearchFieldSchema` interface
2. **WHEN** 開發者導入組件 **THEN** 組件 **SHALL** 匯出 `GridColumnSchema` interface
3. **WHEN** 開發者在 IDE 中輸入 Props **THEN** IDE **SHALL** 顯示自動完成建議（包含所有欄位與型別）
4. **WHEN** 開發者傳入錯誤的 Props 型別 **THEN** TypeScript **SHALL** 在編譯時報錯
5. **WHEN** 執行 `yarn typecheck` **THEN** 組件 **SHALL** 通過型別檢查，無任何錯誤
6. **IF** 組件內部有任何 `any` 型別 **THEN** 必須有明確的註解說明原因

### Requirement 9: Playwright E2E 測試覆蓋

**User Story:**
作為一個品質保證工程師，我希望組件有完整的 E2E 測試，以便驗證 Schema-Driven 動態渲染的正確性，確保功能穩定。

#### Acceptance Criteria

1. **WHEN** 測試執行 **THEN** 測試 **SHALL** 驗證第一排搜尋欄位是否根據 `searchFields` 正確渲染
2. **WHEN** 測試執行 **THEN** 測試 **SHALL** 驗證折疊/展開功能是否正常工作
3. **WHEN** 測試執行 **THEN** 測試 **SHALL** 驗證表格欄位是否根據 `gridColumns` 正確渲染
4. **WHEN** 測試執行 **THEN** 測試 **SHALL** 驗證表格資料是否正確顯示
5. **WHEN** 測試執行 **THEN** 測試 **SHALL** 驗證搜尋按鈕觸發事件
6. **WHEN** 測試執行 **THEN** 測試 **SHALL** 驗證清除按鈕重置搜尋條件
7. **WHEN** 測試執行 **THEN** 測試 **SHALL** 驗證分頁功能正常工作
8. **WHEN** 測試執行 **THEN** 測試 **SHALL** 驗證新增按鈕觸發事件
9. **WHEN** 測試執行 **THEN** 測試 **SHALL** 驗證響應式設計（1440px/768px/375px）
10. **IF** 任何測試失敗 **THEN** CI/CD pipeline **SHALL** 阻止部署

### Requirement 10: 組件可配置性與擴展性

**User Story:**
作為一個前端開發者，我希望組件能夠輕鬆擴展新的欄位類型和功能，而不需要修改組件核心代碼，以便保持代碼的可維護性。

#### Acceptance Criteria

1. **WHEN** 需要新增新的搜尋欄位類型（例如 `'checkbox'`） **THEN** 開發者 **SHALL** 只需在 `SearchFieldSchema` 擴展 `type` 並在 template 新增條件渲染
2. **WHEN** 需要新增新的 Grid 欄位功能（例如自訂 template） **THEN** 開發者 **SHALL** 透過 `GridColumnSchema` 擴展欄位
3. **IF** 新增欄位類型 **THEN** 現有的搜尋欄位 **SHALL** 不受影響（向後相容）
4. **IF** 修改 `SearchFieldSchema` interface **THEN** TypeScript **SHALL** 在編譯時檢查所有使用處
5. **WHEN** 組件更新 **THEN** 現有使用該組件的頁面 **SHALL** 不需要修改代碼（除非主動使用新功能）

## Non-Functional Requirements

### Code Architecture and Modularity

- **Single Responsibility Principle**:
  - 組件只負責 UI 渲染和事件轉發，不處理商業邏輯
  - 搜尋邏輯、資料篩選、API 呼叫由父組件負責

- **Modular Design**:
  - 組件放置於 `app/features/search/components/SearchPage.vue`
  - 型別定義使用 TypeScript interface，可匯出供其他模組使用
  - 遵循 Feature-based 架構標準

- **Dependency Management**:
  - 只依賴 Syncfusion 元件庫（已在 `package.json` 中安裝）
  - 不引入額外的第三方套件
  - 使用 Vue 3 Composition API（`<script setup>`）

- **Clear Interfaces**:
  - Props 定義清晰：`searchFields`, `gridColumns`, `gridData`, `addButtonText`
  - Events 定義清晰：`@search`, `@add`
  - 完整的 TypeScript 型別標註

### Performance

- **初次渲染時間**: < 100ms（包含 50 個表格列）
- **欄位新增效能**: 新增 1 個搜尋欄位 < 10ms（動態渲染）
- **表格排序效能**: 排序 1000 筆資料 < 200ms
- **分頁切換效能**: 切換頁碼 < 50ms
- **記憶體使用**: 組件實例 < 5MB（不包含 gridData）
- **Bundle Size**: 組件代碼 < 50KB（不含 Syncfusion 套件）

### Security

- **XSS 防護**:
  - 使用 Vue 3 的自動 HTML escaping
  - 不使用 `v-html` 渲染使用者輸入

- **資料驗證**:
  - 在父組件層進行輸入驗證（組件不驗證）
  - 遵循 "Never trust client-side validation" 原則

- **敏感資料**:
  - 組件不處理敏感資料（密碼、金鑰等）
  - 如需處理，應在父組件加密後再傳入

### Reliability

- **錯誤處理**:
  - Props 型別錯誤時，TypeScript 編譯時報錯
  - Runtime 錯誤時，組件不應崩潰（Vue error boundary）

- **邊界情況**:
  - 空陣列 `searchFields: []` 正常渲染（無欄位）
  - 空陣列 `gridData: []` 正常渲染（空表格）
  - 缺少必填 Props 時，提供合理的預設值

- **可測試性**:
  - 100% Playwright E2E 測試覆蓋核心功能
  - 所有 Acceptance Criteria 都有對應的測試案例

### Usability

- **易用性**:
  - Props API 設計直觀，開發者無需閱讀文檔即可理解基本用法
  - 提供完整的使用範例（`/app/pages/test/search-page.vue`）

- **無障礙性 (Accessibility)**:
  - 表單欄位使用 `<label>` 標籤
  - 按鈕使用語義化的 `<button>` 元素
  - 支援鍵盤導航（Tab、Enter）
  - ARIA 標籤（由 Syncfusion 元件提供）

- **響應式設計**:
  - 支援桌面尺寸（1440px）
  - 支援平板尺寸（768px）
  - 支援手機尺寸（375px）
  - 使用 Flexbox 實現自適應佈局

- **國際化 (i18n)**:
  - 組件本身不包含硬編碼文字（除 placeholder）
  - 所有顯示文字透過 Props 傳入（支援多語系）
  - 日期格式支援 locale 配置（透過 Syncfusion DatePicker）
