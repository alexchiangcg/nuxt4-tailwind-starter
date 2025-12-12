# Requirements Document

## Introduction

初洽單管理（Inquiry Order Management）功能旨在為宴會場館業務團隊提供一套完整的潛在客戶管理系統。此功能讓業務人員能夠記錄、追蹤和管理從客戶初次洽詢到轉換為正式訂席單的整個流程。

### 功能目的
- **簡化業務流程**：集中管理初洽資訊，減少人工記錄錯誤
- **提升轉換率**：透過結構化的資料收集與追蹤，提高初洽轉訂席的成功率
- **數據完整性**：確保客戶資料、宴會需求、場地預計使用等資訊完整記錄
- **狀態可追蹤**：清晰的初洽狀態管理，便於業務人員掌握跟進進度

### 使用者價值
- 業務人員可快速建立初洽記錄，所有資訊集中在單一表單
- 支援多場地、多活動明細的複雜需求記錄
- 一鍵轉換為訂席單，無需重新輸入資料
- 整合設定檔資料（狀態、來源、類別等），確保資料標準化

## Alignment with Product Vision

此功能符合 Nuxt 4 Tailwind Starter 專案的核心原則：

1. **現代化技術堆疊**：使用 Nuxt 4 + Vue 3 + TypeScript 實作，確保型別安全與可維護性
2. **Feature-based 架構**：遵循專案架構規範，將初洽單管理作為獨立 feature 模組（`app/features/inquiry-order/`）
3. **Figma 轉代碼工作流程**：從 Figma 設計稿直接轉換為 Vue 元件，確保設計與實現一致性
4. **Syncfusion UI 元件整合**：優先使用 Syncfusion Vue 元件庫（DataGrid、DatePicker、DropDownList 等），提供企業級 UI 體驗
5. **測試覆蓋**：使用 Playwright MCP 對每個元件進行視覺回歸測試，確保品質
6. **開發者體驗優先**：清晰的元件結構、完整的型別定義、自動導入機制

## Requirements

### Requirement 1: 主檔表單資料輸入

**User Story:** 作為業務人員，我需要一個結構化的表單來記錄初洽單的基本資訊、客戶資料、宴會資料和輔助資訊，以便完整掌握客戶需求。

#### Acceptance Criteria

1. **WHEN** 業務人員進入初洽單新增頁面 **THEN** 系統 **SHALL** 顯示包含四大區塊的表單：
   - 基本資料（Inquire Number, Inquire Status, Inquire Date, Inquire Contact Person, Related Project, Reservation Number, Manual Number, Lead Source）
   - 客戶資料（Customer Name, Contact Person, Contact Phone, Contact Email, City, District, Member Management Button）
   - 宴會資料（Category, Banquet Name, Budget Range, Expected Banquet Dates, Venue Visit DateTime, Venue Visit Sales）
   - 輔助資訊（Visited Competitor Venue, Venue Decision Factor, Booked Competitor Venue, Rejection Reason, Contact Notes）

2. **WHEN** 業務人員開啟既有初洽單 **THEN** 系統 **SHALL** 載入並顯示所有已儲存的欄位值

3. **IF** 欄位標記為「必填」（Required） **THEN** 系統 **SHALL** 在儲存時驗證該欄位不為空，若為空則顯示錯誤訊息

4. **IF** 欄位標記為「新增時唯讀」（Add ReadOnly） **THEN** 系統 **SHALL** 在新增模式下顯示該欄位但不可編輯

5. **IF** 欄位標記為「編輯時唯讀」（Edit ReadOnly） **THEN** 系統 **SHALL** 在編輯模式下顯示該欄位但不可編輯

6. **WHEN** 業務人員選擇「初洽日」（Inquire Date） **THEN** 系統 **SHALL** 預設為當天日期，但允許手動調整

7. **WHEN** 業務人員在「初洽訂席來源」（Lead Source）欄位操作 **THEN** 系統 **SHALL** 提供多選下拉選單，使用假資料（mock data）模擬設定檔資料

8. **WHEN** 業務人員在「初洽狀態」（Inquire Status）欄位操作 **THEN** 系統 **SHALL** 提供單選下拉選單，使用假資料（mock data）模擬設定檔資料

9. **WHEN** 業務人員在「類別」（Category）欄位操作 **THEN** 系統 **SHALL** 提供單選下拉選單，使用假資料（mock data）模擬設定檔資料

10. **WHEN** 業務人員在「已看同業場館」、「決定宴客場地主因」、「下訂同業場館」、「未下定原因」欄位操作 **THEN** 系統 **SHALL** 提供多選下拉選單，使用假資料（mock data）模擬對應的設定檔資料

### Requirement 2: 活動明細列表顯示

**User Story:** 作為業務人員，我需要能夠查看活動明細列表，以便了解客戶預計使用的場地、時間和設備需求。

#### Acceptance Criteria

1. **WHEN** 業務人員切換到「預計活動明細」Tab **THEN** 系統 **SHALL** 顯示 DataGrid 列表（唯讀），包含以下欄位：
   - 預計主場地、預計子場地、使用日期、開始時間、結束時間、活動類別、活動主旨、桌圖、預計設備需求、預訂桌數、預訂人數、備註、修改者、修改日期、新增者、新增日期

2. **WHEN** 活動明細列表為空 **THEN** 系統 **SHALL** 顯示「無任何資料」訊息

3. **WHEN** 業務人員點擊新增按鈕（+ 圖示）或編輯按鈕 **THEN** 系統 **SHALL** 跳轉至活動明細編輯頁面進行新增或編輯操作

4. **WHEN** 業務人員在列表中查看資料 **THEN** 系統 **SHALL** 以唯讀模式顯示所有活動明細，不提供 inline editing 功能

### Requirement 3: 初洽單轉訂席單（UI 原型）

**User Story:** 作為業務人員，我需要看到「轉訂席單」按鈕，以便未來能將初洽單轉換為訂席單。

#### Acceptance Criteria

1. **WHEN** 業務人員查看初洽單頁面 **THEN** 系統 **SHALL** 顯示「轉訂席單」按鈕

2. **WHEN** 業務人員查看「訂席單號」欄位旁 **THEN** 系統 **SHALL** 顯示一個跳轉按鈕（用於未來查看訂席單詳情）

**注意：** 此階段僅實作 UI 外觀，按鈕點擊行為與業務邏輯待後續實作。

### Requirement 4: 初洽單複製

**User Story:** 作為業務人員，我需要能夠複製既有初洽單，以便快速建立相似的初洽記錄。

#### Acceptance Criteria

1. **WHEN** 業務人員點擊「複製初洽單」按鈕 **THEN** 系統 **SHALL** 建立新的初洽單並複製以下欄位：
   - 主檔：所有可複製欄位（特例不複製：客戶姓名、聯絡人、聯絡電話、聯絡Email、初洽訂席來源）
   - 明細：所有活動明細的可複製欄位

2. **WHEN** 複製完成 **THEN** 系統 **SHALL**：
   - 「初洽單號」欄位留空（儲存後由後端 API 生成）
   - 重置「初洽狀態」為預設值
   - 清空「訂席單號」欄位
   - 將「初洽日」設為當天
   - 前端填入「新增者」為當前使用者、「新增日期」為當前時間

### Requirement 5: 自動欄位處理

**User Story:** 作為系統管理員，我需要確保某些欄位由系統自動生成或管理，以保證資料一致性。

#### Acceptance Criteria

1. **WHEN** 業務人員建立新初洽單 **THEN** 系統 **SHALL**：
   - 「初洽單號」欄位留空，儲存後由後端 API 生成並回傳顯示
   - 前端自動填入「新增者」為當前使用者
   - 前端自動填入「新增日期」為當前時間

2. **WHEN** 業務人員編輯既有初洽單並儲存 **THEN** 後端 API **SHALL**：
   - 更新「修改者」為當前使用者
   - 更新「修改日期」為當前時間
   - 前端儲存後重新載入並顯示這些欄位值

3. **WHEN** 業務人員選擇「初洽業務」 **THEN** 系統 **SHALL** 自動將該值帶入「賞廳業務」欄位（但允許再次修改）

**注意：**
- **前端產生**：新增者、新增日期
- **後端產生**：初洽單號、修改者、修改日期

### Requirement 6: Tab 切換與狀態保持

**User Story:** 作為業務人員，我需要能在「主檔」和「預計活動明細」之間切換，且切換時資料不會遺失。

#### Acceptance Criteria

1. **WHEN** 業務人員點擊「主檔」Tab **THEN** 系統 **SHALL** 顯示主檔表單內容

2. **WHEN** 業務人員點擊「預計活動明細」Tab **THEN** 系統 **SHALL** 顯示活動明細列表

3. **WHEN** 業務人員在任一 Tab 輸入資料後切換到另一 Tab **THEN** 系統 **SHALL** 保留未儲存的輸入資料（client-side state）

4. **WHEN** 業務人員點擊「儲存」按鈕 **THEN** 系統 **SHALL** 同時儲存主檔和活動明細的所有變更

### Requirement 7: 表單驗證與錯誤提示

**User Story:** 作為業務人員，我需要清晰的錯誤提示，以便快速修正輸入錯誤。

#### Acceptance Criteria

1. **WHEN** 業務人員點擊「儲存」但必填欄位為空 **THEN** 系統 **SHALL**：
   - 阻止儲存操作
   - 在空欄位旁顯示紅色錯誤標記
   - 顯示錯誤訊息「請填寫必填欄位」

2. **WHEN** 業務人員輸入的「使用日期」不在「預計宴客日期區間」內 **THEN** 系統 **SHALL**：
   - 在該欄位顯示警告標記
   - 顯示錯誤訊息「使用日期必須在預計宴客日期區間內」
   - 阻止儲存操作

3. **WHEN** 業務人員輸入的「聯絡手機」格式不正確 **THEN** 系統 **SHALL** 顯示錯誤訊息「請輸入有效的手機號碼」

4. **WHEN** 業務人員輸入的「聯絡 E-mail」格式不正確 **THEN** 系統 **SHALL** 顯示錯誤訊息「請輸入有效的電子郵件地址」

### Requirement 8: 會員管理按鈕（UI 原型）

**User Story:** 作為業務人員，我需要看到「會員管理」按鈕，以便未來能快速存取會員資料。

#### Acceptance Criteria

1. **WHEN** 業務人員查看客戶資料區塊 **THEN** 系統 **SHALL** 顯示「會員管理」按鈕

**注意：** 此階段僅實作按鈕 UI，點擊行為待後續定義（可能開啟彈窗或跳轉頁面）。會員資料自動帶入功能暫不實作。

## Non-Functional Requirements

### Code Architecture and Modularity

#### Single Responsibility Principle
- **Feature 模組隔離**：初洽單管理作為獨立 feature (`app/features/inquiry-order/`)，包含 pages、components、composables、store、api、types 子目錄
- **元件職責單一**：
  - `InquiryOrderForm.vue` - 主檔表單容器
  - `InquiryBasicInfo.vue` - 基本資料區塊
  - `InquiryCustomerInfo.vue` - 客戶資料區塊
  - `InquiryBanquetInfo.vue` - 宴會資料區塊
  - `InquirySupplementInfo.vue` - 輔助資訊區塊
  - `InquiryOrderDetailsGrid.vue` - 活動明細列表
- **API 層分離**：所有後端呼叫集中在 `api/inquiry-order.api.ts`
- **狀態管理分離**：使用 Pinia store (`store/inquiry-order.store.ts`) 管理表單狀態

#### Modular Design
- **可重用元件**：優先使用 Syncfusion Vue 元件（`ejs-grid`, `ejs-datepicker`, `ejs-dropdownlist` 等）
- **共享工具**：日期格式化、表單驗證等工具放在 `app/shared/utils/`
- **型別定義**：所有 TypeScript interfaces 定義在 `types/inquiry-order.types.ts`

#### Dependency Management
- **最小化跨 Feature 依賴**：初洽單 feature 不直接依賴其他業務 features
- **僅依賴 Shared 層**：可使用 `app/shared/` 下的通用元件、composables、utils
- **Syncfusion 元件集中管理**：透過 auto-import 或統一的元件註冊

#### Clear Interfaces
- **Props 型別明確**：所有元件 props 使用 TypeScript interface 定義
- **API 回應型別**：定義 `InquiryOrder`, `InquiryOrderDetail`, `ApiResponse<T>` 等型別
- **Store 型別安全**：Pinia store 使用 composition API 風格，完整型別推斷

### Performance

#### 初始載入效能
- **Bundle Size**：初洽單 feature 的 JavaScript bundle < 150KB (gzipped)
- **首次內容繪製 (FCP)**：< 1.5 秒（在 3G 網路環境）
- **首次輸入延遲 (FID)**：< 100ms

#### 運行時效能
- **表單輸入回應時間**：< 50ms（輸入框 onChange 到畫面更新）
- **Tab 切換時間**：< 100ms（主檔 ↔ 活動明細切換）
- **DataGrid 渲染**：< 200ms（顯示 50 筆活動明細）
- **下拉選單開啟**：< 100ms（選項數 < 100 時）

#### 資料載入優化
- **Lazy Loading**：活動明細列表使用虛擬滾動（Syncfusion Grid virtualization）
- **避免過度請求**：使用 debounce 處理搜尋輸入（300ms）

### Security

#### 輸入驗證
- **Client-side 驗證**：所有使用者輸入在前端進行基本格式驗證（email、phone、date range）
- **Server-side 驗證**：後端 API 必須再次驗證所有輸入，不信任前端資料
- **XSS 防護**：所有使用者輸入透過 Vue 自動 escaping，避免 XSS 攻擊

#### 資料保護
- **敏感資料處理**：客戶手機、Email 等個人資料需遵循 GDPR/隱私法規
- **HTTPS 傳輸**：所有 API 呼叫使用 HTTPS
- **Token 驗證**：API 請求需帶入有效的 JWT token

### Reliability

#### 錯誤處理
- **API 錯誤處理**：所有 API 呼叫需包含 try-catch，顯示友善錯誤訊息
- **網路斷線處理**：顯示「網路連線失敗」提示，允許使用者重試
- **表單自動儲存**：每 30 秒或欄位 blur 時自動儲存草稿至 LocalStorage（防止資料遺失）

#### 測試覆蓋
- **單元測試**：Composables、utils 函式覆蓋率 > 80%
- **元件測試**：所有表單元件需有 Vitest 測試
- **E2E 測試**：使用 Playwright 測試完整的「新增初洽單 → 儲存 → 轉訂席單」流程
- **視覺回歸測試**：使用 Playwright MCP 對每個元件進行截圖對比

### Usability

#### 使用者體驗
- **響應式設計**：支援桌面（1920x1080、1366x768）、平板（768x1024）、手機（375x667）
- **Dark Mode**：支援深色模式切換（透過 `@nuxtjs/color-mode`）
- **Keyboard Navigation**：所有表單元件支援鍵盤操作（Tab、Enter、Esc）
- **載入狀態**：所有非同步操作顯示 loading indicator

#### 無障礙 (Accessibility)
- **ARIA 標籤**：所有表單元件包含正確的 `aria-label`、`aria-required` 等屬性
- **鍵盤存取**：所有互動元件可透過鍵盤操作
- **螢幕閱讀器**：表單欄位標籤與錯誤訊息可被螢幕閱讀器識別
- **顏色對比**：文字與背景對比度符合 WCAG 2.1 AA 標準（4.5:1）

#### 國際化 (i18n)
- **多語系支援**：所有靜態文字使用 i18n 鍵值（繁體中文、簡體中文、英文）
- **日期格式**：根據使用者語系顯示日期格式（zh-TW: YYYY/MM/DD, en-US: MM/DD/YYYY）
- **數字格式**：金額、數量等數字根據語系格式化

#### 錯誤訊息
- **清晰具體**：錯誤訊息明確指出問題所在（例如：「聯絡手機格式不正確，請輸入 10 碼數字」）
- **可操作**：提供解決方案（例如：「初洽單號已存在，請點擊『查看』開啟現有單據」）
- **位置醒目**：錯誤訊息顯示在出錯欄位旁邊或表單頂部

### Browser Compatibility

- **支援瀏覽器**：
  - Chrome/Edge 90+
  - Firefox 88+
  - Safari 14+
- **不支援**：Internet Explorer 11（已淘汰）

### Documentation

- **Component Documentation**：每個元件包含 JSDoc 註解，說明 props、emits、slots
- **API Documentation**：API 函式包含參數、返回值、異常情況說明
- **Usage Examples**：主要元件提供使用範例（可整合 Storybook）
- **README**：Feature 目錄包含 README.md，說明模組結構、使用方式、測試指令
