# Tasks Document - 初洽單管理系統 UI 切版

## Phase 1: 基礎設定

- [x] 1. 建立 Feature 目錄結構
  - Files: `app/features/inquiry/components/`, `app/features/inquiry/types/`, `app/features/inquiry/mock/`, `app/features/inquiry/pages/`
  - 建立完整的 inquiry feature 目錄結構
  - Purpose: 建立模組化的專案架構，為後續元件開發做準備
  - _Leverage: 專案既有的 Feature-based 目錄結構規範_
  - _Requirements: Requirements 3（Code Architecture and Modularity）_
  - _Prompt: Role: 前端架構師，精通 Nuxt 4 專案結構 | Task: 根據 design.md 的 Project Structure 章節建立完整的 inquiry feature 目錄結構，包含 components, types, mock, pages 資料夾 | Restrictions: 必須遵循專案的 Feature-based 架構，不可修改既有目錄結構，所有元件命名必須以 Inquiry 開頭 | Success: 目錄結構完整建立，符合專案規範，可以順利進行後續元件開發_

- [x] 2. 建立 TypeScript 型別定義
  - File: `app/features/inquiry/types/inquiry.types.ts`
  - 根據 design.md 的 Data Models 章節定義所有 TypeScript interfaces
  - Purpose: 建立型別安全的資料結構，確保元件 Props 與 Emits 的型別正確性
  - _Leverage: design.md Line 1018-1058 的型別定義_
  - _Requirements: Requirements 3.4（Clear Interfaces）_
  - _Prompt: Role: TypeScript 專家，精通型別系統與介面設計 | Task: 建立 InquiryBasicInfo, InquiryCustomerInfo, InquiryBanquetInfo, InquirySupplementInfo, InquiryFormData, InquiryActivityDetail 等 interfaces，必須完全符合 design.md 的 Data Models 定義 | Restrictions: 必須使用 export interface，所有欄位必須加上中文註解，不可使用 any 或 unknown 型別 | Success: 所有型別定義完整且正確，TypeScript 編譯無錯誤，型別安全性達到 100%_

- [x] 3. 建立 Mock 資料
  - File: `app/features/inquiry/mock/inquiry.mock.ts`
  - 建立測試用的 mock data 與 DropDownList 資料源
  - Purpose: 提供 UI 測試用資料，確保元件可以正確渲染
  - _Leverage: design.md Line 1093-1224 的 Mock Data 定義_
  - _Requirements: Requirements 1, 2（UI 切版需求）_
  - _Prompt: Role: 前端開發者，精通 TypeScript 與資料模擬 | Task: 建立 mockFormData, mockActivityDetails 以及所有 DropDownList 資料源（mockInquiryStatus, mockSalesPersons, mockProjects, mockLeadSources, mockCountryCodes, mockCities, mockDistricts, mockBanquetCategories, mockCompetitorVenues, mockDecisionFactors, mockNotBookingReasons），所有資料必須使用 Figma 設計稿的實際值 | Restrictions: Mock data 必須符合 inquiry.types.ts 的型別定義，資料內容必須與 Figma 一致，不可使用假資料 | Success: Mock data 型別檢查通過，資料完整且符合 Figma 設計稿，可以正確提供給元件使用_

- [x] 4. 建立路由頁面
  - File: `app/pages/inquiry/index.vue`
  - 建立 Nuxt 路由頁面，作為 inquiry feature 的進入點
  - Purpose: 提供 `/inquiry` 路由存取點
  - _Leverage: Nuxt 4 的 file-based routing 機制_
  - _Requirements: Requirements 1, 2_
  - _Prompt: Role: Nuxt 開發者，熟悉 Nuxt 4 routing 機制 | Task: 在 app/pages/inquiry/ 建立 index.vue 頁面，並 import InquiryFormPage 元件作為主要內容 | Restrictions: 必須使用 Nuxt 4 的 definePageMeta，不可使用舊版 Nuxt 2 語法 | Success: 路由可正常存取 /inquiry，頁面正確載入 InquiryFormPage 元件_

---

## Phase 2: 表單元件實作（Frame 1 - Figma 6146:144772）

- [x] 5. 實作 InquiryToolbar 元件
  - File: `app/features/inquiry/components/InquiryToolbar.vue`
  - 實作頂部工具列，包含 5 個按鈕（轉訂席單、檢視模式/編輯、刪除、複製、新增）
  - Purpose: 提供初洽單的操作工具列
  - _Leverage: Syncfusion Button, Iconify icons, design.md Line 109-218_
  - _Requirements: Requirements 1.2（Toolbar 按鈕可見性）_
  - _Prompt: Role: Vue 3 開發者，精通 Syncfusion 元件與 Composition API | Task: 實作 InquiryToolbar.vue，包含 5 個按鈕（使用 ejs-button）與模式切換邏輯，完全依照 design.md Line 109-218 的規格 | Restrictions: 必須使用 Syncfusion Button 元件，Icon 必須使用 Iconify（material-symbols--delete-outline, material-symbols--content-copy, material-symbols--add），本階段按鈕點擊僅需 emit 事件（console.log），不可實作實際功能 | Success: Toolbar 正確渲染 5 個按鈕，Icon 正確顯示，模式切換功能正常，事件正確 emit_

- [x] 6. 實作 InquiryBasicInfo 元件
  - File: `app/features/inquiry/components/InquiryBasicInfo.vue`
  - 實作基本資料區塊，包含 8 個欄位（4x2 grid）
  - Purpose: 提供初洽單的基本資料輸入介面
  - _Leverage: Syncfusion TextBox, DropDownList, DatePicker, design.md Line 221-377_
  - _Requirements: Requirements 1.4（基本資料區塊顯示）_
  - _Prompt: Role: Vue 3 開發者，精通 Syncfusion Form 元件與 v-model | Task: 實作 InquiryBasicInfo.vue，包含 8 個欄位（初洽單號、初洽狀態、初洽日、初洽業務、初洽配合專案、訂席單號 + Icon Button、人工單號、初洽訂席來源），元件類型必須嚴格依照 design.md Line 251-259 的對映（⚠️ 欄位 4, 5, 8 必須是 DropDownList，欄位 6 必須有 Icon Button） | Restrictions: 必須使用 4x2 grid 佈局，欄位 1, 6 必須為 readonly，欄位 4「初洽業務」必須是 DropDownList（不是 TextBox），欄位 5「初洽配合專案」必須是 DropDownList（不是 TextBox），欄位 8「初洽訂席來源」必須是單選 DropDownList（不是 MultiSelect），所有樣式必須使用 Design Tokens（--gap-sf-*, --color-sf-*） | Success: 8 個欄位正確渲染，元件類型完全符合 Figma 設計稿，v-model 雙向綁定正常，視覺樣式符合 Figma_

- [x] 7. 實作 InquiryCustomerInfo 元件
  - File: `app/features/inquiry/components/InquiryCustomerInfo.vue`
  - 實作客戶資料區塊，包含 5 個欄位
  - Purpose: 提供客戶相關資訊的輸入介面
  - _Leverage: Syncfusion TextBox, DropDownList, Button, design.md Line 381-520_
  - _Requirements: Requirements 1.4（客戶資料區塊顯示）_
  - _Prompt: Role: Vue 3 開發者，精通複合式表單元件設計 | Task: 實作 InquiryCustomerInfo.vue，包含 5 個欄位（客戶姓名 + Icon Button、聯絡人、聯絡手機（國碼 Dropdown + TextBox）、聯絡信箱、居住地（城市 Dropdown + 區域 Dropdown）），元件類型必須嚴格依照 design.md Line 410-415 的對映 | Restrictions: 欄位 1「客戶姓名」必須有 Icon Button (more_horiz icon)，欄位 3「聯絡手機」必須拆分為兩個元件（國碼 Dropdown + 號碼 TextBox），欄位 5「居住地」必須是兩個 Dropdown（城市 + 區域），不可有「客戶類型」和「備註」欄位（Figma 上沒有） | Success: 5 個欄位正確渲染，複合式欄位（聯絡手機、居住地）佈局正確，Icon Button 正確顯示，v-model 雙向綁定正常_

- [x] 8. 實作 InquiryBanquetInfo 元件
  - File: `app/features/inquiry/components/InquiryBanquetInfo.vue`
  - 實作宴會資料區塊，包含 6 個欄位（含 DateRangePicker 與 DateTimePicker）
  - Purpose: 提供宴會相關資訊的輸入介面
  - _Leverage: Syncfusion TextBox, DropDownList, DateRangePicker, DateTimePicker, design.md Line 524-646_
  - _Requirements: Requirements 1.4（宴會資料區塊顯示）_
  - _Prompt: Role: Vue 3 開發者，熟悉 Syncfusion Date/Time Pickers | Task: 實作 InquiryBanquetInfo.vue，包含 6 個欄位（類別、宴會名稱、預算範圍、賞廳業務、預計宴客日期區間、預約賞廳時間），元件類型必須嚴格依照 design.md Line 551-557 的對映 | Restrictions: 必須包含「預算範圍」和「賞廳業務」欄位（之前版本漏掉），不可有「預計人數」和「預計桌數」欄位（Figma 上沒有），DateRangePicker 與 DateTimePicker 的日期格式必須為 'yyyy/MM/dd' 與 'yyyy/MM/dd HH:mm' | Success: 6 個欄位正確渲染，DateRangePicker 與 DateTimePicker 功能正常，v-model 正確綁定日期範圍與時間_

- [x] 9. 實作 InquirySupplementInfo 元件
  - File: `app/features/inquiry/components/InquirySupplementInfo.vue`
  - 實作輔助資訊區塊，包含 5 個欄位（多個 multi-select DropDownList + TextArea）
  - Purpose: 提供輔助資訊的輸入介面
  - _Leverage: Syncfusion DropDownList (CheckBox mode), TextBox (multiline), design.md Line 650-767_
  - _Requirements: Requirements 1.4（輔助資訊區塊顯示）_
  - _Prompt: Role: Vue 3 開發者，熟悉 Syncfusion MultiSelect 與 CheckBox mode | Task: 實作 InquirySupplementInfo.vue，包含 5 個欄位（已看同業場館、決定宴客場地主因、下訂同業場館、未下定原因、接洽紀錄），元件類型必須嚴格依照 design.md Line 676-681 的對映（⚠️ 此區塊之前完全錯誤，已全部修正） | Restrictions: 欄位 1, 2, 4 必須使用 DropDownList 的 CheckBox mode（多選），欄位 3 必須是單選 DropDownList，欄位 5「接洽紀錄」必須使用 multiline TextBox，不可有「優先順序」、「標籤」、「內部備註」、「客戶需求」等舊欄位，接洽紀錄欄位必須佔滿整行（grid-column: span 4） | Success: 5 個欄位正確渲染，multi-select 功能正常，接洽紀錄 TextArea 佔滿整行，v-model 正確綁定所有欄位_

---

## Phase 3: DataGrid 元件實作（Frame 2 - Figma 6202:301195）

- [x] 10. 實作 InquiryActivityDetailsGrid 元件
  - File: `app/features/inquiry/components/InquiryActivityDetailsGrid.vue`
  - 實作預計活動明細 DataGrid 表格，包含 17 個欄位
  - Purpose: 提供活動明細的表格檢視介面
  - _Leverage: Syncfusion Grid, Button, design.md Line 770-926_
  - _Requirements: Requirements 2（DataGrid 頁面需求）_
  - _Prompt: Role: Vue 3 開發者，精通 Syncfusion Grid 元件與 Custom Templates | Task: 實作 InquiryActivityDetailsGrid.vue，包含 17 個欄位（OpenPOPUP* 按鈕、預計主場地、預計子場地 + More 按鈕、使用日期、開始時間、結束時間、活動類別、活動主旨、桌圖、預計設備需求 + More 按鈕、預訂桌數、預訂人數、備註、修改者、修改日期、新增者、新增日期），必須完全依照 design.md Line 396-539 的 Grid 定義與 Figma 欄位順序 | Restrictions: 第 1 欄必須使用 Custom Template 渲染 Icon Button（description-outline icon），第 3, 10 欄必須包含 More 按鈕的 Custom Template，第 11, 12 欄（預訂桌數、預訂人數）必須設定 textAlign="Right"，必須啟用 Pager（pageSize: 50），Header 背景色必須使用 `--color-sf-primary` opacity 5%，交替行背景色必須使用 `--color-sf-on-surface` opacity 4% | Success: Grid 正確渲染 17 個欄位，欄位順序完全符合 Figma，Custom Templates 正常運作，分頁器功能正常，視覺樣式符合設計稿_

---

## Phase 4: 主頁面整合

- [x] 11. 實作 InquiryFormPage 主頁面
  - File: `app/features/inquiry/pages/InquiryFormPage.vue`
  - 整合所有元件與 Syncfusion Tab 切換功能
  - Purpose: 提供完整的初洽單管理介面
  - _Leverage: Syncfusion Tab, 所有已實作的元件, design.md Line 930-1009_
  - _Requirements: Requirements 1.5, 2.9（Tab 切換功能）_
  - _Prompt: Role: Vue 3 開發者，精通 Syncfusion Tab 與元件整合 | Task: 實作 InquiryFormPage.vue，整合 InquiryToolbar、Syncfusion Tab（包含兩個 tab: 主檔與預計活動明細）、所有表單區塊元件（InquiryBasicInfo, InquiryCustomerInfo, InquiryBanquetInfo, InquirySupplementInfo）與 InquiryActivityDetailsGrid，必須完全依照 design.md Line 936-1009 的結構 | Restrictions: 必須使用 Syncfusion Tab 元件（不是原生 HTML tab），主檔 tab 預設為選中狀態（selectedItem: 0），Toolbar 事件處理本階段僅需 console.log，表單資料必須使用 mockFormData，活動明細必須使用 mockActivityDetails | Success: 主頁面正確整合所有元件，Tab 切換功能正常，預設顯示主檔 tab，所有元件正確渲染且資料綁定正常_

---

## Phase 5: Playwright E2E 測試

- [x] 12. 建立 Playwright 測試環境設定
  - File: `tests/e2e/inquiry/setup.ts`
  - 設定 Playwright 測試環境與共用 fixtures
  - Purpose: 提供測試基礎設施
  - _Leverage: Playwright Test Framework, 專案既有的 Playwright 設定_
  - _Requirements: Requirements 4（Playwright 測試覆蓋）_
  - _Prompt: Role: QA 自動化工程師，精通 Playwright 測試框架 | Task: 建立 Playwright 測試環境設定，包含共用的 fixtures（如 baseURL, 測試資料等）與 helper functions | Restrictions: 必須使用專案既有的 Playwright 設定（如已存在），不可修改全域 Playwright config，測試必須能獨立運行 | Success: 測試環境正確設定，fixtures 可正常使用，測試可以順利啟動瀏覽器並存取 /inquiry 頁面_

- [x] 13. 實作 Toolbar 測試
  - File: `tests/e2e/inquiry/inquiry-toolbar.spec.ts`
  - 測試 Toolbar 所有按鈕的可見性與點擊功能
  - Purpose: 確保 Toolbar 元件正常運作
  - _Leverage: design.md Line 817-827 的測試案例_
  - _Requirements: Requirements 4.1（Toolbar 按鈕可見性測試）_
  - _Prompt: Role: QA 自動化工程師，精通 Playwright 與 UI 測試 | Task: 實作 Toolbar 測試，驗證 5 個按鈕（轉訂席單、檢視模式/編輯、刪除、複製、新增）的可見性與點擊功能，完全依照 design.md Line 817-827 | Restrictions: 必須使用 Playwright 的 locator API，按鈕定位必須使用語義化的 selector（如 button:has-text, role），不可使用 CSS class 或 id，本階段僅驗證按鈕可見性與可點擊性（不驗證實際功能） | Success: 測試通過，5 個按鈕都能正確定位並驗證可見性_

- [x] 14. 實作主檔 Tab 表單測試
  - File: `tests/e2e/inquiry/inquiry-form-master.spec.ts`
  - 測試主檔 tab 的 4 個表單區塊與所有欄位
  - Purpose: 確保主檔表單元件正常運作
  - _Leverage: design.md Line 830-845 的測試案例_
  - _Requirements: Requirements 4.1（所有表單欄位可見性測試）_
  - _Prompt: Role: QA 自動化工程師，熟悉表單測試與 Syncfusion 元件 | Task: 實作主檔 tab 測試，驗證 4 個表單區塊標題（基本資料、客戶資料、宴會資料、輔助資訊）的可見性，以及所有 Syncfusion 元件（ejs-textbox, ejs-dropdownlist, ejs-datepicker, ejs-daterangepicker, ejs-datetimepicker）的正確渲染，完全依照 design.md Line 830-845 | Restrictions: 必須驗證 4 個區塊標題（使用 h2:has-text），必須驗證各類 Syncfusion 元件的存在（使用 .e-textbox, .e-dropdownlist 等 class selector），必須驗證欄位數量正確（基本資料 8 個、客戶資料 5 個、宴會資料 6 個、輔助資訊 5 個） | Success: 測試通過，4 個區塊標題正確顯示，所有欄位正確渲染，Syncfusion 元件可正常定位_

- [x] 15. 實作 Tab 切換測試
  - File: `tests/e2e/inquiry/inquiry-tab-switching.spec.ts`
  - 測試 Tabs 切換功能與 Grid 顯示
  - Purpose: 確保 Tab 切換與 DataGrid 正常運作
  - _Leverage: design.md Line 848-862 的測試案例_
  - _Requirements: Requirements 4.1, 4.2（Tab 切換與 Grid 測試）_
  - _Prompt: Role: QA 自動化工程師，熟悉互動式 UI 測試 | Task: 實作 Tab 切換測試，驗證預設顯示主檔 tab，點擊「預計活動明細」後正確切換，Grid 元件正確顯示，完全依照 design.md Line 848-862 | Restrictions: 必須驗證預設的 active tab 狀態（.e-tab-header .e-active:has-text("主檔")），必須使用 click() 觸發 tab 切換，切換後必須驗證 Grid 可見（.e-grid），必須測試雙向切換（主檔 ↔ 預計活動明細） | Success: 測試通過，Tab 切換功能正常，Grid 在切換後正確顯示_

- [x] 16. 實作 DataGrid 測試
  - File: `tests/e2e/inquiry/inquiry-activity-grid.spec.ts`
  - 測試 DataGrid 的欄位順序、分頁器與視覺樣式
  - Purpose: 確保 DataGrid 完全符合 Figma 設計稿
  - _Leverage: design.md Line 865-905 的測試案例_
  - _Requirements: Requirements 4.2（DataGrid 測試）_
  - _Prompt: Role: QA 自動化工程師，精通 Grid 元件測試 | Task: 實作 DataGrid 測試，驗證 17 個欄位的 header 順序（預計主場地、預計子場地...新增日期）、分頁器可見性，完全依照 design.md Line 865-905 | Restrictions: 必須驗證所有 17 個 header cells 的存在與順序（使用 .e-headercell:has-text），必須驗證分頁器（.e-pager）的可見性，必須驗證 Grid 的基本功能（如行數、資料載入） | Success: 測試通過，17 個欄位順序完全符合 Figma，分頁器正確顯示_

- [x] 17. 實作視覺回歸測試
  - File: `tests/e2e/inquiry/inquiry-visual-regression.spec.ts`
  - 使用 Playwright 截圖比對功能驗證視覺樣式
  - Purpose: 確保 UI 完全符合 Figma 設計稿
  - _Leverage: Playwright toHaveScreenshot API, design.md Line 908-927_
  - _Requirements: Requirements 4.2（視覺回歸測試）_
  - _Prompt: Role: QA 自動化工程師，熟悉視覺回歸測試 | Task: 實作視覺回歸測試，對主檔 tab 與活動明細 tab 進行全頁截圖比對，完全依照 design.md Line 908-927 | Restrictions: 必須使用 toHaveScreenshot API，截圖必須為 fullPage: true，允許最大像素差異 maxDiffPixels: 100，截圖檔名必須為 inquiry-form-master.png 與 inquiry-form-details.png，首次執行會建立 baseline，後續執行會比對差異 | Success: 測試通過，截圖與 Figma 設計稿視覺一致，像素差異在容許範圍內_

---

## Phase 6: 視覺調整與驗證

- [ ] 18. 對照 Figma 調整所有樣式
  - Files: 所有 `.vue` 元件檔案
  - 根據 Figma 設計稿調整顏色、字型、間距、邊框等細節
  - Purpose: 確保視覺樣式 100% 符合設計稿
  - _Leverage: Figma 設計稿（6146:144772, 6202:301195）, app/assets/css/tailwind.css Design Tokens_
  - _Requirements: Requirements 1.8, 2.8（視覺樣式符合 Figma）_
  - _Prompt: Role: 前端開發者，精通 CSS 與 Design System | Task: 對照 Figma 設計稿調整所有元件的視覺樣式，包含顏色、字型、間距、邊框、圓角等細節，必須使用 tailwind.css 定義的 Design Tokens（--gap-sf-*, --color-sf-*, --radius-sf-*, --font-size-sf-*） | Restrictions: 不可使用 hard-coded 色碼或數值，所有樣式必須來自 Design Tokens，Tailwind 切版時使用 @theme 變數（如 bg-primary），Syncfusion 元件時使用 :root 變數（如 --color-sf-primary），不可修改 tailwind.css 檔案 | Success: 所有元件視覺樣式完全符合 Figma 設計稿，Design Tokens 使用正確，無 hard-coded 樣式_

- [ ] 19. 確認所有 Design Token 正確使用
  - Files: 所有 `.vue` 元件檔案
  - 檢查所有元件的樣式是否正確使用 Design Tokens
  - Purpose: 確保樣式系統的一致性與可維護性
  - _Leverage: app/assets/css/tailwind.css 的 Design Tokens 定義_
  - _Requirements: Requirements 3.4, 3.5（Design Token 使用規範）_
  - _Prompt: Role: 前端架構師，精通 Design System 與樣式規範 | Task: 檢查所有元件的 <style> 區塊，確認所有顏色、間距、圓角、字型大小都使用 Design Tokens，沒有 hard-coded 值 | Restrictions: 必須區分 Tailwind 切版（使用 @theme 變數）與 Syncfusion 元件（使用 :root 變數）的使用情境，不可混用，必須使用 CSS 變數語法（var(--gap-sf-4)），不可直接使用色碼或 px 值 | Success: 所有元件樣式 100% 使用 Design Tokens，無 hard-coded 值，Tailwind 與 Syncfusion 變數使用正確_

- [ ] 20. 執行視覺回歸測試
  - Files: `tests/e2e/inquiry/inquiry-visual-regression.spec.ts`
  - 執行 Playwright 視覺回歸測試並比對截圖
  - Purpose: 驗證視覺樣式的最終正確性
  - _Leverage: Playwright toHaveScreenshot API, 已建立的 baseline 截圖_
  - _Requirements: Requirements 4.2（視覺回歸測試）_
  - _Prompt: Role: QA 自動化工程師，負責視覺回歸測試 | Task: 執行 npx playwright test inquiry-visual-regression.spec.ts，比對截圖與 baseline 的差異，如有差異則分析原因並修正 | Restrictions: 如果是樣式調整導致的正當差異，需要更新 baseline（刪除舊截圖重新執行），如果是非預期差異則必須修正程式碼，像素差異必須在 maxDiffPixels: 100 以內 | Success: 視覺回歸測試通過，截圖與 Figma 設計稿視覺一致_

- [ ] 21. 執行所有 Playwright 測試並修正錯誤
  - Files: `tests/e2e/inquiry/*.spec.ts`
  - 執行完整的 Playwright 測試套件並修正所有錯誤
  - Purpose: 確保所有功能與視覺測試通過
  - _Leverage: 所有已建立的 Playwright 測試檔案_
  - _Requirements: Requirements 4（Playwright 測試覆蓋）_
  - _Prompt: Role: QA 自動化工程師，負責測試執行與錯誤修正 | Task: 執行 npx playwright test tests/e2e/inquiry/ --headed，檢查所有測試是否通過，如有失敗則分析錯誤並修正元件程式碼或測試腳本 | Restrictions: 測試失敗時必須先分析是元件問題還是測試腳本問題，不可為了通過測試而降低測試標準，所有測試都必須真正驗證功能正確性 | Success: 所有 Playwright 測試通過（Toolbar, 主檔表單, Tab 切換, DataGrid, 視覺回歸），無錯誤或警告_

- [ ] 22. 最終驗收與文檔更新
  - Files: README.md, 專案文檔
  - 進行最終驗收，更新專案文檔
  - Purpose: 確保專案完整性與可維護性
  - _Leverage: 專案既有的文檔規範_
  - _Requirements: All（所有需求）_
  - _Prompt: Role: 專案經理 + 技術文檔撰寫者 | Task: 進行最終驗收檢查，確認所有 Requirements 都已實作且測試通過，更新專案文檔（如 README.md）記錄 inquiry feature 的使用方式與元件說明 | Restrictions: 驗收必須對照 requirements.md 的所有 Acceptance Criteria 逐一檢查，文檔必須包含 feature 的完整說明、元件列表、使用範例、測試執行方式 | Success: 所有 Requirements 的 Acceptance Criteria 都滿足，專案文檔完整且清晰，其他開發者可以根據文檔快速理解與使用 inquiry feature_

---

## Definition of Done

- [ ] 23. 所有 22 個 Tasks 都已完成並標記為 [x]
- [ ] 24. 所有 Playwright 測試通過（npx playwright test tests/e2e/inquiry/）
- [ ] 25. 視覺樣式 100% 符合 Figma 設計稿（通過視覺回歸測試）
- [ ] 26. 所有樣式使用 Design Tokens，無 hard-coded 值
- [ ] 27. TypeScript 編譯無錯誤（npm run typecheck）
- [ ] 28. 專案文檔已更新
- [ ] 29. 程式碼已通過 Code Review（如適用）
- [ ] 30. 所有 Requirements 的 Acceptance Criteria 都已滿足

---

## Notes

- 本專案為**純 UI 切版**，不包含 API 整合、資料儲存、表單驗證等後端功能
- 所有按鈕點擊事件本階段僅需 console.log，不實作實際功能
- Mock data 使用 Figma 設計稿的實際值，確保 UI 渲染正確
- Syncfusion 元件的選擇**必須嚴格依照 Figma data-name 屬性**，不可隨意替換
- Design Tokens 使用規則：
  - Tailwind 切版時使用 `@theme` 變數（如 `bg-primary`）
  - Syncfusion 元件時使用 `:root` 變數（如 `--color-sf-primary`）
- Playwright 測試執行指令：`npx playwright test tests/e2e/inquiry/`
- TypeScript 型別檢查指令：`npm run typecheck`
