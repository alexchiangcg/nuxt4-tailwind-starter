# Tasks Document - 訂席系統初洽單編輯模式

## Phase 1: 基礎架構建立 (Foundation Setup)

- [ ] 1. 建立 Feature 目錄結構
  - Files:
    - `app/features/reservation/` (新建目錄)
    - `app/features/reservation/pages/`
    - `app/features/reservation/components/`
    - `app/features/reservation/composables/`
    - `app/features/reservation/store/`
    - `app/features/reservation/api/`
    - `app/features/reservation/types/`
  - Description: 根據 Feature-based 架構建立完整的目錄結構
  - Purpose: 為整個 reservation feature 建立組織良好的資料夾架構，確保符合專案的 Single Responsibility 原則
  - _Leverage: structure.md:660-771 (Feature-based 架構規範)_
  - _Requirements: 全部（架構基礎）_
  - _Prompt: Role: DevOps Engineer 專精於專案架構設計 | Task: 根據 structure.md 的 Feature-based 架構規範 (660-771)，在 app/features/ 下建立完整的 reservation feature 目錄結構，包含 pages/, components/, composables/, store/, api/, types/ 子目錄 | Restrictions: 必須遵循專案既有的目錄命名慣例，不可偏離 structure.md 定義的架構模式，確保每個子目錄都有明確的職責定義 | Success: 目錄結構完整建立，符合 Feature-based 架構規範，每個子目錄職責明確且與 auth feature 架構一致_

- [ ] 2. 定義 TypeScript 型別介面
  - File: `app/features/reservation/types/reservation.types.ts`
  - Description: 定義所有表單資料結構的 TypeScript interfaces，包含 ReservationFormData、BasicInfoData、CustomerInfoData、BanquetInfoData、AdditionalInfoData、ValidationErrors、ReservationState
  - Purpose: 建立型別安全的資料結構定義，確保整個 feature 的型別一致性
  - _Leverage: app/features/auth/types/auth.types.ts (型別定義模式), design.md:950-1040 (資料模型定義)_
  - _Requirements: Requirement 1 (頁面結構), Requirement 2-5 (各區塊欄位定義)_
  - _Prompt: Role: TypeScript Developer 專精於型別系統與介面設計 | Task: 參考 auth.types.ts 的型別定義模式與 design.md:950-1040 的資料模型規格，創建完整的 reservation.types.ts，包含 7 個主要 interfaces (ReservationFormData, BasicInfoData, CustomerInfoData, BanquetInfoData, AdditionalInfoData, ValidationErrors, ReservationState)，確保所有欄位都有明確的型別標註（string, number, Date | null, optional 欄位使用 ?）| Restrictions: 必須與 Figma 設計的欄位完全對應，必填欄位不可標記為 optional，Date 類型欄位必須允許 null（DatePicker 初始狀態），遵循 auth.types.ts 的命名慣例 | Success: 所有 interfaces 編譯無誤，型別定義完整覆蓋所有表單欄位，與 design.md 的資料模型 100% 一致，可被其他模組正確 import_

- [ ] 3. 建立 Pinia Store
  - File: `app/features/reservation/store/reservation.store.ts`
  - Description: 使用 Pinia Options API 建立 reservation store，包含 state (currentReservation, isLoading, error), actions (loadReservation, saveReservation, deleteReservation, resetForm), getters (isNewReservation, hasUnsavedChanges)
  - Purpose: 集中管理初洽單的全域狀態、API 呼叫協調與載入狀態
  - _Leverage: app/features/auth/store/auth.store.ts (Store 架構模式), design.md:1055-1131 (Store 設計規格)_
  - _Requirements: Requirement 7 (資料持久化), Requirement 8 (Syncfusion 元件對應)_
  - _Prompt: Role: Vue 3 State Management Engineer 專精於 Pinia 與狀態管理模式 | Task: 參考 auth.store.ts 的 Options API 風格與錯誤處理模式，實作 reservation.store.ts，包含 ReservationState (currentReservation, isLoading, error), 4 個 actions (loadReservation 從 API 載入資料, saveReservation 儲存至 API, deleteReservation 刪除, resetForm 重置表單), 2 個 getters (isNewReservation 判斷是否為新建模式, hasUnsavedChanges 判斷是否有未儲存變更) | Restrictions: 必須使用 Pinia Options API (與 auth.store.ts 一致)，所有 async actions 必須包含 try-catch-finally 錯誤處理，isLoading 狀態必須正確管理（try 前設為 true，finally 中設為 false），必須整合 reservation.api.ts 進行 API 呼叫，不可在 store 中直接寫 HTTP 請求邏輯 | Success: Store 正確定義並可被 Vue 元件使用，所有 actions 包含完整錯誤處理，isLoading 狀態正確切換，getters 邏輯正確，與 auth.store.ts 架構模式一致_

- [ ] 4. 建立 API 模組
  - File: `app/features/reservation/api/reservation.api.ts`
  - Description: 封裝所有 reservation 相關的 HTTP 請求，包含 get(id)、save(data)、update(id, data)、delete(id) 方法，返回型別化的 Response
  - Purpose: 抽象化 HTTP 請求邏輯，提供型別安全的 API 呼叫介面
  - _Leverage: design.md:1133-1176 (API 模組設計), reservation.types.ts (型別定義)_
  - _Requirements: Requirement 7 (資料持久化)_
  - _Prompt: Role: Backend Integration Engineer 專精於 API 封裝與 HTTP 請求處理 | Task: 根據 design.md:1133-1176 的 API 模組規格，創建 reservation.api.ts，實作 4 個方法：get(id: string) 返回 Promise<ReservationFormData>, save(data: ReservationFormData) 返回 Promise<{ id: string }>, update(id: string, data: ReservationFormData) 返回 Promise<void>, delete(id: string) 返回 Promise<void>，使用 $fetch (Nuxt 內建) 或 axios 進行 HTTP 請求 | Restrictions: 所有方法必須返回 Promise 並包含正確的型別標註，API endpoints 使用 /api/reservations 作為 base path (GET /api/reservations/:id, POST /api/reservations, PUT /api/reservations/:id, DELETE /api/reservations/:id)，錯誤處理必須拋出有意義的 Error 物件，不可在此層進行 UI 相關邏輯（如 toast 通知）| Success: 所有 API 方法型別正確且可被 store 呼叫，HTTP 請求格式符合 RESTful 規範，錯誤處理完善，返回資料結構與 ReservationFormData interface 匹配_

- [ ] 5. 建立 Barrel Exports
  - File: `app/features/reservation/index.ts`
  - Description: 建立統一的匯出點，匯出 composables、store、api、types，遵循 Barrel Exports 模式
  - Purpose: 提供乾淨的 import 路徑，簡化其他模組對 reservation feature 的引用
  - _Leverage: app/features/auth/index.ts (Barrel exports 模式), structure.md:245-270 (Barrel Exports 規範)_
  - _Requirements: 全部（架構完整性）_
  - _Prompt: Role: Module Architecture Specialist 專精於模組化設計與匯出管理 | Task: 參考 auth/index.ts 的 Barrel Exports 模式與 structure.md:245-270 規範，創建 reservation feature 的統一匯出點 index.ts，匯出 useReservationForm, useFormValidation (composables), useReservationStore (store), reservationApi (api), 所有 types (使用 export type * from './types/reservation.types'), EditReservationPage (default export from pages) | Restrictions: 必須遵循 structure.md 的 Import 順序規範 (290-323)，type-only exports 必須使用 export type *，不可匯出內部實作細節（如 store 內部的 helper functions），確保匯出的命名與原始模組一致 | Success: 所有公開 API 正確匯出，其他模組可透過 @/features/reservation 統一 import，型別匯出正確（type-only exports），符合專案的 Barrel Exports 規範_

## Phase 2: Composables 開發 (Business Logic Layer)

- [ ] 6. 實作 useReservationForm Composable
  - File: `app/features/reservation/composables/useReservationForm.ts`
  - Description: 封裝表單狀態管理、驗證邏輯、儲存/取消操作，整合 useReservationStore 與 useFormValidation
  - Purpose: 提供集中的表單邏輯，避免頁面元件直接操作 store，實現業務邏輯與 UI 的分離
  - _Leverage: reservation.store.ts, useFormValidation.ts, design.md:743-798 (Composable 設計)_
  - _Requirements: Requirement 1 (頁面結構), Requirement 7 (資料持久化)_
  - _Prompt: Role: Vue 3 Composition API Expert 專精於 composables 設計與狀態管理 | Task: 根據 design.md:743-798 的規格，實作 useReservationForm composable，返回 { formData (reactive ReservationFormData), isLoading (computed from store), isDirty (ref, 追蹤表單變更), errors (reactive ValidationErrors), saveForm (async function, 驗證並儲存), cancelForm (function, 檢查 isDirty 並導航), loadReservation (async function, 從 store 載入資料), resetForm (function, 重置表單) }，使用 useReservationStore() 整合 store，使用 useFormValidation() 進行驗證 | Restrictions: 必須使用 Vue 3 Composition API (ref, reactive, computed, watch)，formData 必須是 reactive 以支援雙向綁定，saveForm 必須先呼叫 validateForm() 確認無誤後才呼叫 store.saveReservation()，cancelForm 必須檢查 isDirty，如為 true 則顯示確認對話框（可先使用 window.confirm，後續整合 shared utilities），不可在 composable 中直接操作 DOM 或執行 router 導航（返回 callbacks 讓頁面元件處理）| Success: Composable 正確封裝表單邏輯，所有返回值型別正確，可被頁面元件無縫使用，驗證邏輯正確執行，與 store 整合順暢，isDirty 追蹤準確_

- [ ] 7. 實作 useFormValidation Composable
  - File: `app/features/reservation/composables/useFormValidation.ts`
  - Description: 封裝表單驗證邏輯，提供 validateRequired、validateEmail、validatePhone、validateDate、validateForm 方法
  - Purpose: 集中管理驗證規則，確保資料完整性與格式正確性
  - _Leverage: design.md:800-828 (驗證邏輯設計), reservation.types.ts (ValidationErrors 型別)_
  - _Requirements: Requirement 2 (基本資料驗證), Requirement 3 (客戶資料驗證), Requirement 4 (宴會資料驗證)_
  - _Prompt: Role: Form Validation Specialist 專精於前端表單驗證與資料格式檢查 | Task: 根據 design.md:800-828 規格，實作 useFormValidation composable，提供 5 個驗證方法：validateRequired(value, fieldName) 檢查必填欄位返回錯誤訊息或 null, validateEmail(value) 驗證 Email 格式, validatePhone(value) 驗證電話號碼格式 (台灣手機或市話), validateDate(value) 檢查日期是否有效, validateForm(data: ReservationFormData) 完整驗證表單返回 ValidationErrors 物件 | Restrictions: 必填欄位驗證必須涵蓋 basicInfo.status, basicInfo.reservationDate, basicInfo.salesPerson (參考 requirements.md 的必填欄位定義)，Email 驗證使用正規表示式 /^[^\s@]+@[^\s@]+\.[^\s@]+$/，電話驗證需支援台灣格式 (09\d{8} 或 0\d-\d{7,8})，validateForm 必須返回結構化的錯誤物件（key 為欄位路徑如 'basicInfo.status'，value 為錯誤訊息），不可在驗證邏輯中執行任何副作用（如顯示 toast）| Success: 所有驗證方法正確實作，validateForm 返回完整的錯誤物件，必填欄位驗證涵蓋所有 requirements.md 定義的必填欄位，格式驗證邏輯正確（Email, Phone, Date），可被 useReservationForm 正確呼叫_

## Phase 3: UI 元件開發 (Presentation Layer)

- [ ] 8. 實作 BasicInfoSection 元件
  - File: `app/features/reservation/components/BasicInfoSection.vue`
  - Description: 渲染基本資料區塊，包含 8 個表單欄位（初洽單號、初洽狀態、初洽日、初洽業務、初洽配合專案、訂席單號、其他兩個欄位），使用 Syncfusion TextBox、DropDownList、DatePicker、Button 元件
  - Purpose: 提供基本資料輸入介面，透過 v-model 雙向綁定與父元件同步
  - _Leverage: design.md:432-742 (BasicInfoSection 實作範例), design.md:829-849 (Figma → Syncfusion 對應表)_
  - _Requirements: Requirement 2 (基本資料區塊)_
  - _Prompt: Role: Vue 3 Frontend Developer 專精於 Syncfusion Vue 元件整合與表單設計 | Task: 根據 design.md:432-742 的完整實作範例與 design.md:829-849 的元件對應表，實作 BasicInfoSection.vue 元件，使用 Syncfusion 元件渲染 8 個欄位：TextBoxComponent (初洽單號, enabled:false), DropDownListComponent (初洽狀態, 必填), DatePickerComponent (初洽日, 必填, format:"yyyy/MM/dd"), DropDownListComponent (初洽業務, 必填), DropDownListComponent (初洽配合專案), TextBoxComponent (訂席單號, enabled:false), ButtonComponent (箭頭按鈕, iconCss:"e-icons e-arrow-right"), 以及其他兩個欄位（待確認），接收 Props { modelValue: BasicInfoData, errors?: Record<string, string> }，emit update:modelValue 事件 | Restrictions: 必須使用 Syncfusion Vue 元件（從 @syncfusion/ej2-vue-inputs, @syncfusion/ej2-vue-dropdowns, @syncfusion/ej2-vue-calendars, @syncfusion/ej2-vue-buttons 引入），必須實作雙向綁定（使用 localValue + watch pattern 如 design.md:449-461 所示），必填欄位必須顯示紅色星號 (*) 與錯誤訊息（如 props.errors 存在），唯讀欄位（初洽單號、訂席單號）必須設定 enabled:false 與灰色背景 cssClass:"e-disabled"，遵循 Figma 設計的欄位順序與佈局（使用 Tailwind grid），不可在元件內直接呼叫 store 或 API | Success: 元件正確渲染所有欄位，v-model 雙向綁定正常運作，必填欄位顯示星號與錯誤訊息，唯讀欄位正確禁用，Syncfusion 元件樣式與 Material 3 Theme 一致，符合 Figma 設計稿_

- [ ] 9. 實作 CustomerInfoSection 元件
  - File: `app/features/reservation/components/CustomerInfoSection.vue`
  - Description: 渲染客戶資料區塊，包含 7 個表單欄位（客戶搜尋/選擇、客戶姓名、電話區碼 + 號碼、Email/地址、縣市、區域），使用 Syncfusion TextBox、DropDownList、Button 元件
  - Purpose: 提供客戶資料輸入介面，支援客戶搜尋與級聯下拉選單（縣市 → 區域）
  - _Leverage: design.md:851-861 (CustomerInfoSection 對應表), BasicInfoSection.vue (元件實作模式)_
  - _Requirements: Requirement 3 (客戶資料區塊)_
  - _Prompt: Role: Vue 3 Frontend Developer 專精於 Syncfusion 元件與複雜表單邏輯 | Task: 參考 BasicInfoSection.vue 的實作模式與 design.md:851-861 的元件對應表，實作 CustomerInfoSection.vue，包含 7 個欄位：TextBoxComponent + ButtonComponent (客戶搜尋組合, Button iconCss:"e-icons e-search"), TextBoxComponent (客戶姓名), DropDownListComponent (電話區碼, dataSource:['02','03','04',...]), TextBoxComponent (電話號碼, type:"tel"), TextBoxComponent (Email/地址), DropDownListComponent (縣市, dataSource 待定), DropDownListComponent (區域, 級聯下拉根據縣市動態載入), 接收 Props { modelValue: CustomerInfoData, errors?: Record<string, string> }，emit update:modelValue | Restrictions: 必須實作縣市→區域的級聯邏輯（watch modelValue.city，當變更時清空 modelValue.district 並更新區域 dataSource），客戶搜尋按鈕點擊時應 emit 'search-customer' 事件（留待父元件處理），電話號碼欄位必須限制只能輸入數字（可使用 input type="tel" 或 Syncfusion 的 maskInput），遵循 BasicInfoSection 的雙向綁定模式與錯誤顯示邏輯，不可在元件內寫死縣市區域資料（應從 props 或 composable 取得）| Success: 元件正確渲染所有欄位，級聯下拉邏輯正確（選擇縣市後區域選單動態更新），客戶搜尋功能透過 emit 事件對外通知，電話輸入限制正確，與 BasicInfoSection 架構一致_

- [ ] 10. 實作 BanquetInfoSection 元件
  - File: `app/features/reservation/components/BanquetInfoSection.vue`
  - Description: 渲染宴會資料區塊，包含 6 個表單欄位（宴會類型、預計桌數、預計人數、時段/場地、宴會日期範圍、宴會時間），使用 Syncfusion DropDownList、TextBox、DateRangePicker、DateTimePicker 元件
  - Purpose: 提供宴會資訊輸入介面，支援日期範圍選擇與日期時間選擇
  - _Leverage: design.md:863-872 (BanquetInfoSection 對應表), BasicInfoSection.vue (元件實作模式)_
  - _Requirements: Requirement 4 (宴會資料區塊)_
  - _Prompt: Role: Vue 3 Frontend Developer 專精於 Syncfusion 日期元件與數值輸入 | Task: 參考 BasicInfoSection.vue 的實作模式與 design.md:863-872 的元件對應表，實作 BanquetInfoSection.vue，包含 6 個欄位：DropDownListComponent (宴會類型, dataSource:['婚宴','尾牙','春酒','生日宴',...]), TextBoxComponent (預計桌數, type:"number", min:0), TextBoxComponent (預計人數, type:"number", min:0), DropDownListComponent (時段/場地), DateRangePickerComponent (宴會日期範圍, format:"yyyy/MM/dd", startDate & endDate 綁定至 modelValue.dateRange.startDate 與 endDate), DateTimePickerComponent (宴會時間, format:"yyyy/MM/dd HH:mm", step:30 分鐘間隔), 接收 Props { modelValue: BanquetInfoData, errors?: Record<string, string> } | Restrictions: 必須使用 @syncfusion/ej2-vue-calendars 的 DateRangePickerComponent 與 DateTimePickerComponent，DateRangePicker 的 startDate/endDate 必須分別綁定至 modelValue.dateRange.startDate 與 modelValue.dateRange.endDate（需額外處理綁定邏輯），數值欄位（桌數、人數）必須限制為正整數（min:0），時段/場地 dataSource 待確認（可先使用 placeholder 資料），DateTimePicker 的 step 設為 30（分鐘間隔），遵循雙向綁定與錯誤顯示模式 | Success: 元件正確渲染所有欄位，DateRangePicker 正確綁定起始與結束日期，DateTimePicker 時間間隔為 30 分鐘，數值輸入限制正確，與其他 Section 元件架構一致_

- [ ] 11. 實作 AdditionalInfoSection 元件
  - File: `app/features/reservation/components/AdditionalInfoSection.vue`
  - Description: 渲染輔助資訊區塊，包含 5 個表單欄位（4 個下拉選單 + 1 個備註文字區域），使用 Syncfusion DropDownList、TextArea 元件
  - Purpose: 提供額外輔助資訊輸入介面，包含多行文字備註欄位
  - _Leverage: design.md:874-882 (AdditionalInfoSection 對應表), BasicInfoSection.vue (元件實作模式)_
  - _Requirements: Requirement 5 (輔助資訊區塊)_
  - _Prompt: Role: Vue 3 Frontend Developer 專精於 Syncfusion TextArea 與下拉選單 | Task: 參考 BasicInfoSection.vue 的實作模式與 design.md:874-882 的元件對應表，實作 AdditionalInfoSection.vue，包含 5 個欄位：DropDownListComponent x4 (輔助欄位 1-4, 欄位標籤待確認, 可先使用 "輔助資訊 1" 等 placeholder), TextAreaComponent (備註, rows:6, cssClass 設定 width:1051px 符合 Figma 設計, placeholder:"請輸入備註..."), 接收 Props { modelValue: AdditionalInfoData, errors?: Record<string, string> } | Restrictions: 必須使用 @syncfusion/ej2-vue-inputs 的 TextAreaComponent，備註欄位必須設定 rows:6 與 width:1051px（透過 cssClass 或 style），4 個下拉選單的 dataSource 與欄位標籤待確認（可先使用 placeholder 資料），遵循雙向綁定模式，不可省略任何欄位（即使欄位用途待確認）| Success: 元件正確渲染 4 個下拉選單與 1 個備註文字區域，TextArea 尺寸符合 Figma 設計（rows:6, width:1051px），雙向綁定正常運作，與其他 Section 元件架構一致_

- [ ] 12. 實作 EditReservationPage 主頁面
  - File: `app/features/reservation/pages/EditReservationPage.vue`
  - Description: 組合所有 Section 元件，整合 Toolbar（轉訂席單、取消、儲存按鈕）、Tabs 導航（主檔、預計活動明細）、表單容器，使用 useReservationForm composable 管理狀態
  - Purpose: 提供完整的初洽單編輯頁面，協調所有子元件與業務邏輯
  - _Leverage: design.md:335-430 (EditReservationPage 實作範例), design.md:884-891 (Toolbar & Tabs 對應表)_
  - _Requirements: Requirement 1 (頁面結構與佈局)_
  - _Prompt: Role: Vue 3 Senior Frontend Developer 專精於頁面架構與元件組合 | Task: 根據 design.md:335-430 的完整實作範例與 design.md:884-891 的 Toolbar/Tabs 對應表，實作 EditReservationPage.vue 主頁面，包含 3 個主要區塊：1) Toolbar (ButtonComponent x3: "轉訂席單" disabled:true cssClass:"e-outline", "取消" cssClass:"e-danger" @click:cancelForm, "儲存" cssClass:"e-primary" isPrimary:true @click:saveForm disabled:isLoading), 2) Tabs (TabComponent 包含兩個 TabItem: "主檔" 激活狀態, "預計活動明細" 未實作), 3) Form Container (組合 BasicInfoSection, CustomerInfoSection, BanquetInfoSection, AdditionalInfoSection，透過 v-model 綁定 formData 的各個子物件)，使用 useReservationForm() 取得 formData, isLoading, isDirty, errors, saveForm, cancelForm, loadReservation，onMounted 時從 route.params.id 獲取 reservationId 並呼叫 loadReservation(id) | Restrictions: 必須使用 @syncfusion/ej2-vue-navigations 的 TabComponent 與 ButtonComponent，Toolbar 按鈕必須按照 Figma 設計排列（左側"轉訂席單"，右側"取消"+"儲存"），"轉訂席單"按鈕必須預設禁用（disabled:true），所有 Section 元件必須透過 v-model 雙向綁定對應的 formData 子物件（如 v-model="formData.basicInfo"），必須在 onMounted hook 中呼叫 loadReservation() 載入資料（如果 route.params.id 存在），頁面元件不可包含業務邏輯（所有邏輯應在 useReservationForm 中），不可直接操作 store（應透過 composable）| Success: 頁面正確渲染 Toolbar, Tabs, Form Container，所有 Section 元件正確組合且資料雙向綁定正常，儲存/取消按鈕功能正確觸發 composable 方法，載入流程正確執行（onMounted → loadReservation），符合 Figma 設計的佈局與樣式_

## Phase 4: Syncfusion 元件整合 (Component Integration)

- [ ] 13. 透過 Syncfusion MCP 驗證元件 API
  - Files: 所有 Section 元件 (BasicInfoSection.vue, CustomerInfoSection.vue, BanquetInfoSection.vue, AdditionalInfoSection.vue)
  - Description: 針對每個使用到的 Syncfusion 元件（TextBox, DropDownList, DatePicker, DateRangePicker, DateTimePicker, Button, Tab, TextArea），透過 Syncfusion MCP 查詢確切的 props、events、methods，確保 API 使用正確
  - Purpose: 避免臆測 API，確保 Syncfusion 元件整合的正確性與完整性
  - _Leverage: Syncfusion MCP (SyncfusionVueAssistant tool), design.md:829-948 (元件對應表與配置)_
  - _Requirements: Requirement 6 (Syncfusion 元件對應), Requirement 8 (Syncfusion 元件對應)_
  - _Prompt: Role: Syncfusion Vue Integration Specialist 專精於 Syncfusion EJ2 元件 API 與最佳實踐 | Task: 使用 Syncfusion MCP (SyncfusionVueAssistant tool) 查詢以下元件的 Vue 3 API 文檔：TextBoxComponent (確認 enabled, cssClass, value, change event), DropDownListComponent (確認 dataSource, fields, placeholder, value, change event, 級聯下拉模式), DatePickerComponent (確認 format, value, change event), DateRangePickerComponent (確認 startDate, endDate, format, change event), DateTimePickerComponent (確認 format, step, value, change event), ButtonComponent (確認 cssClass, isPrimary, disabled, iconCss, click event), TabComponent (確認 selectedItem, items, select event), TextAreaComponent (確認 rows, value, cssClass, input event)，針對每個元件驗證 design.md 中使用的 props 是否正確，如有差異則更新元件實作 | Restrictions: 必須使用 Syncfusion MCP 工具查詢官方文檔，不可臆測 API，查詢時必須指定 "Vue 3 Composition API" 與版本 "v30.0.0"，如發現 design.md 中的 API 使用有誤（如 prop 名稱錯誤、event 名稱錯誤），必須記錄並在對應元件中修正，確保所有元件都使用 v-model 或 :value + @change 的正確綁定方式 | Success: 所有 Syncfusion 元件 API 已透過 MCP 驗證，元件實作中的 props 與 events 名稱正確，雙向綁定方式符合 Syncfusion Vue 3 最佳實踐，無臆測 API 的情況_

- [ ] 14. 配置 Syncfusion Material 3 Theme
  - Files: `nuxt.config.ts` (確認配置), `app.vue` 或 global CSS (如需調整)
  - Description: 確認 Syncfusion Material 3 主題 CSS 已正確引入，確保 Syncfusion 樣式不覆蓋 Tailwind 設定
  - Purpose: 確保 UI 一致性，避免樣式衝突
  - _Leverage: tech.md:32-34 (Syncfusion Material 3 Theme 配置說明), design.md:895-913 (Theme 整合規範)_
  - _Requirements: Requirement 8 (Syncfusion 元件對應與樣式)_
  - _Prompt: Role: Frontend Theme Integration Engineer 專精於 CSS 架構與主題系統 | Task: 根據 tech.md:32-34 與 design.md:895-913 的 Theme 整合規範，確認 nuxt.config.ts 中已正確引入 Syncfusion Material 3 主題 CSS（@syncfusion/ej2-base/styles/material3.css, @syncfusion/ej2-vue-inputs/styles/material3.css, @syncfusion/ej2-vue-buttons/styles/material3.css, @syncfusion/ej2-vue-dropdowns/styles/material3.css, @syncfusion/ej2-vue-calendars/styles/material3.css, @syncfusion/ej2-vue-navigations/styles/material3.css），驗證 Syncfusion 樣式不會覆蓋 Tailwind 設定（特別是 color variables），如有衝突則調整 CSS 引入順序或使用 cssClass 隔離 | Restrictions: Syncfusion CSS 必須在 Tailwind CSS 之前引入（確保 Tailwind utilities 具有更高優先級），不可修改 Syncfusion 原始 CSS 檔案，如需客製化樣式應透過 cssClass prop 添加 Tailwind utilities 或建立 scoped style，確保專案既有的 Tailwind color variables 不被 Syncfusion 覆蓋（參考 tech.md:32-34 已解決的衝突問題）| Success: Syncfusion Material 3 主題正確載入，所有 Syncfusion 元件樣式一致且符合 Material 3 設計規範，Tailwind CSS utilities 正常運作未被覆蓋，無樣式衝突_

- [ ] 15. 整合 Tailwind CSS 與 Syncfusion 樣式
  - Files: 所有 Section 元件的 `<style>` 區塊與 template 中的 cssClass
  - Description: 在 Syncfusion 元件上使用 cssClass prop 添加 Tailwind utilities，確保佈局、間距、顏色符合設計稿
  - Purpose: 結合 Syncfusion 元件功能與 Tailwind CSS 的快速樣式調整能力
  - _Leverage: design.md:906-913 (Tailwind Variables 整合), design.md:926-948 (必填欄位與錯誤訊息樣式)_
  - _Requirements: Requirement 1 (頁面佈局), Requirement 8 (Syncfusion 元件樣式)_
  - _Prompt: Role: CSS Integration Specialist 專精於 Tailwind CSS 與元件庫樣式整合 | Task: 根據 design.md:906-913 與 design.md:926-948 的樣式整合規範，在所有 Syncfusion 元件上透過 cssClass prop 添加 Tailwind utilities 以符合 Figma 設計，包含：1) 使用 Tailwind grid 系統建立表單佈局（如 grid grid-cols-2 gap-4），2) 在唯讀欄位上添加灰色背景（如 bg-[var(--color-variables/surface-variant)]），3) 必填欄位的星號使用 text-[var(--color-variables/danger)]，4) 錯誤訊息使用 text-[var(--color-variables/danger)] text-xs，5) 確保各 Section 的標題列樣式一致（藍色垂直線 + h3 標題）| Restrictions: 必須透過 cssClass prop 添加 Tailwind classes，不可直接修改 Syncfusion 元件內部樣式，顏色變數必須使用 Tailwind CSS v4 的 var(--color-variables/xxx) 格式（不可使用舊版 bg-blue-500 等），表單佈局必須使用 Tailwind grid 系統（不可使用固定寬度如 width:1051px，除非 Figma 明確指定），確保 RWD 響應式設計（grid 在小螢幕應切換為 grid-cols-1）| Success: 所有 Syncfusion 元件成功整合 Tailwind utilities，佈局符合 Figma 設計（使用 grid 系統），顏色使用正確的 CSS variables，必填星號與錯誤訊息樣式正確，響應式設計正常運作_

## Phase 5: 路由與頁面整合 (Routing Integration)

- [ ] 16. 建立 Nuxt 頁面路由檔案
  - Files:
    - `app/pages/reservations/[id]/edit.vue`
    - `app/pages/reservations/new.vue`
  - Description: 在 Nuxt 的 pages/ 目錄下建立路由檔案，引入 EditReservationPage 元件
  - Purpose: 啟用檔案式路由，使頁面可透過 URL 存取
  - _Leverage: Nuxt 4 檔案式路由機制, design.md:142-146 (路由整合說明)_
  - _Requirements: Requirement 1 (頁面存取)_
  - _Prompt: Role: Nuxt Framework Specialist 專精於 Nuxt 4 路由系統與頁面組織 | Task: 根據 Nuxt 4 的檔案式路由規範與 design.md:142-146 的路由整合說明，在 app/pages/ 下建立兩個路由檔案：1) app/pages/reservations/[id]/edit.vue（編輯現有初洽單，動態路由參數 id），2) app/pages/reservations/new.vue（建立新初洽單），兩個檔案都僅需 import EditReservationPage 並渲染該元件（<template><EditReservationPage /></template>），使用 <script setup> 語法 | Restrictions: 必須遵循 Nuxt 4 的檔案式路由規範（[id] 表示動態參數），路由檔案不應包含業務邏輯（所有邏輯在 EditReservationPage 與 composables 中），確保動態路由檔案位於正確的巢狀目錄（app/pages/reservations/[id]/edit.vue），不可手動配置 vue-router（Nuxt 自動處理）| Success: 路由檔案正確建立，可透過 /reservations/:id/edit 與 /reservations/new 存取頁面，動態參數 id 可透過 useRoute().params.id 正確獲取，EditReservationPage 正確渲染_

- [ ] 17. 配置動態路由與導航守衛（未來擴展）
  - Files: `app/middleware/auth.ts` (如需建立), `app/pages/reservations/[id]/edit.vue` (添加 middleware)
  - Description: 為路由添加權限驗證（未來整合 auth feature），確保只有授權使用者可存取編輯頁面
  - Purpose: 保護敏感資料，確保系統安全性
  - _Leverage: design.md:139-141 (Auth Feature 整合), Nuxt 4 middleware 機制_
  - _Requirements: 未來需求（目前標記為 TODO）_
  - _Prompt: Role: Full-stack Security Engineer 專精於 Nuxt middleware 與權限控制 | Task: 根據 design.md:139-141 的 Auth Feature 整合規劃，為 EditReservationPage 路由添加權限驗證 middleware，步驟：1) 檢查專案中是否已存在 app/middleware/auth.ts（如不存在則建立），2) 在 auth.ts 中實作 middleware 邏輯：從 useAuthStore() 獲取 user 與 isAuthenticated，檢查使用者是否具備「編輯初洽單」權限（可先簡化為檢查 isAuthenticated），如未授權則 redirect 至 /login，3) 在 app/pages/reservations/[id]/edit.vue 與 new.vue 中添加 definePageMeta({ middleware: 'auth' })| Restrictions: 目前 auth feature 可能尚未完整實作權限系統，可先簡化為檢查 isAuthenticated（後續擴展為 role-based 權限），middleware 必須使用 Nuxt 4 的 defineNuxtRouteMiddleware 語法，redirect 邏輯必須使用 navigateTo() helper，不可在 middleware 中執行複雜業務邏輯（僅驗證權限）| Success: Middleware 正確建立並應用至路由，未授權使用者存取 /reservations/:id/edit 時正確 redirect 至 /login，已授權使用者可正常存取頁面，middleware 邏輯簡潔且高效_

## Phase 6: 測試 (Testing with Playwright MCP)

- [ ] 18. 使用 Playwright MCP 進行視覺回歸測試
  - Files: 新建測試檔案（建議位置：`tests/e2e/reservation-edit.spec.ts`）
  - Description: 使用 Playwright MCP 工具截圖比對 EditReservationPage 與 Figma 設計稿，確保 UI 100% 一致
  - Purpose: 驗證實作結果與設計稿的視覺一致性
  - _Leverage: Playwright MCP tools (browser_navigate, browser_snapshot, browser_take_screenshot), design.md:1364-1404 (Playwright MCP 測試策略)_
  - _Requirements: Requirement 8 (Playwright MCP 進行視覺回歸測試)_
  - _Prompt: Role: QA Automation Engineer 專精於 Playwright 視覺回歸測試 | Task: 使用 Playwright MCP 工具建立 EditReservationPage 的視覺回歸測試，步驟：1) 使用 browser_navigate 導航至 /reservations/new，2) 使用 browser_take_screenshot 截取完整頁面（fullPage:true），3) 儲存截圖至 tests/screenshots/reservation-edit-baseline.png，4) 針對每個 Section（BasicInfoSection, CustomerInfoSection, BanquetInfoSection, AdditionalInfoSection）分別截圖，5) 與 Figma 設計稿手動比對（自動化視覺比對需額外工具如 Percy），6) 記錄任何視覺差異（如間距、顏色、字型大小）| Restrictions: 必須使用 Playwright MCP 工具（browser_navigate, browser_snapshot, browser_take_screenshot），截圖必須在一致的瀏覽器環境下進行（建議使用 Chromium, viewport 設為 1920x1080），測試前確保 dev server 運行（npm run dev），截圖檔案必須儲存至 tests/screenshots/ 並加入 .gitignore（避免污染版本控制），視覺比對目前為手動（後續可整合 Percy 或 Chromatic）| Success: 所有頁面與 Section 截圖完成並儲存，與 Figma 設計稿比對結果記錄（可使用 checklist 或文件），發現的視覺差異已記錄並分類（critical / minor），測試腳本可重複執行_

- [ ] 19. 驗證所有表單欄位可正常互動
  - Files: `tests/e2e/reservation-edit.spec.ts` (擴展測試)
  - Description: 使用 Playwright MCP 測試所有表單欄位的互動功能，包含輸入、選擇、日期選擇、按鈕點擊
  - Purpose: 確保所有 Syncfusion 元件的雙向綁定與事件處理正常運作
  - _Leverage: Playwright MCP tools (browser_click, browser_type, browser_select_option, browser_fill_form), design.md:1406-1475 (Integration Testing 策略)_
  - _Requirements: Requirement 1-5 (所有區塊的欄位互動), Requirement 6 (Syncfusion 元件整合)_
  - _Prompt: Role: QA Integration Test Engineer 專精於 E2E 測試與表單驗證 | Task: 使用 Playwright MCP 工具擴展測試腳本，驗證 EditReservationPage 所有表單欄位的互動功能，測試項目：1) BasicInfoSection：輸入初洽狀態下拉選單（browser_select_option），選擇初洽日（browser_click + 日期選擇），驗證唯讀欄位無法編輯（初洽單號、訂席單號），2) CustomerInfoSection：輸入客戶姓名（browser_type），選擇電話區碼，輸入電話號碼，驗證級聯下拉（選擇縣市後區域選單更新），3) BanquetInfoSection：輸入預計桌數/人數（數值驗證），選擇日期範圍與時間，4) AdditionalInfoSection：選擇下拉選單，輸入備註文字，5) 驗證所有欄位的 v-model 雙向綁定正常（輸入後 formData 狀態正確更新）| Restrictions: 必須使用 Playwright MCP 工具進行互動測試（不可使用原始 Playwright API），測試必須包含正向測試（正常輸入）與邊界測試（如數值欄位輸入負數、日期欄位輸入無效日期），驗證唯讀欄位時需確認元素 disabled 屬性為 true，級聯下拉測試必須驗證第二個下拉選單的選項確實隨第一個選單變更，不可省略任何欄位的測試 | Success: 所有表單欄位互動測試通過，正向與邊界測試案例完整，唯讀欄位正確禁用，級聯下拉邏輯正確，雙向綁定驗證通過，測試結果記錄完整_

- [ ] 20. 驗證表單驗證邏輯
  - Files: `tests/e2e/reservation-edit.spec.ts` (擴展測試)
  - Description: 測試必填欄位驗證、格式驗證（Email, Phone）、錯誤訊息顯示
  - Purpose: 確保 useFormValidation 的驗證邏輯正確執行，使用者無法提交無效資料
  - _Leverage: Playwright MCP tools (browser_click, browser_type, browser_snapshot), design.md:1477-1535 (Error Handling 策略)_
  - _Requirements: Requirement 2 (基本資料驗證), Requirement 3 (客戶資料驗證), Requirement 4 (宴會資料驗證)_
  - _Prompt: Role: QA Validation Test Specialist 專精於表單驗證與錯誤處理測試 | Task: 使用 Playwright MCP 工具測試 EditReservationPage 的表單驗證邏輯，測試場景：1) 必填欄位驗證：不填寫「初洽狀態」「初洽日」「初洽業務」，點擊「儲存」，驗證錯誤訊息顯示（使用 browser_snapshot 截圖錯誤狀態），2) Email 格式驗證：輸入無效 Email（如 "test@"），驗證錯誤訊息，3) 電話格式驗證：輸入無效電話號碼（如 "abc"），驗證錯誤訊息，4) 日期驗證：測試 DatePicker 是否阻擋無效日期輸入，5) 正向測試：填寫所有必填欄位，驗證無錯誤訊息且可成功儲存 | Restrictions: 必須使用 Playwright MCP 進行測試，驗證錯誤訊息時需檢查對應欄位下方是否顯示紅色錯誤文字（使用 browser_snapshot 或元素查詢），測試必須涵蓋所有 requirements.md 定義的必填欄位（basicInfo.status, basicInfo.reservationDate, basicInfo.salesPerson），格式驗證需測試多種無效格式案例，正向測試需確認 saveForm 方法被成功觸發（可透過 console.log 或 API 請求監控）| Success: 所有必填欄位驗證測試通過，格式驗證正確阻擋無效輸入，錯誤訊息正確顯示在對應欄位下方，正向測試確認無錯誤可成功儲存，測試覆蓋所有驗證場景_

- [ ] 21. 驗證儲存/取消流程
  - Files: `tests/e2e/reservation-edit.spec.ts` (擴展測試)
  - Description: 測試儲存流程（表單提交 → API 呼叫 → 成功回饋）與取消流程（isDirty 檢查 → 確認對話框 → 導航）
  - Purpose: 確保完整的使用者操作流程正常運作
  - _Leverage: Playwright MCP tools (browser_click, browser_handle_dialog, browser_network_requests), design.md:260-292 (儲存/取消/載入流程)_
  - _Requirements: Requirement 7 (資料持久化), Requirement 1 (取消與儲存按鈕功能)_
  - _Prompt: Role: E2E Flow Test Engineer 專精於完整使用者流程測試 | Task: 使用 Playwright MCP 工具測試 EditReservationPage 的儲存與取消流程，測試場景：1) 儲存流程：填寫所有必填欄位，點擊「儲存」按鈕，使用 browser_network_requests 驗證 POST/PUT 請求發送至 /api/reservations，驗證成功後頁面狀態（可能顯示成功提示或導航至列表頁），2) 取消流程（有變更）：修改任一欄位（觸發 isDirty），點擊「取消」按鈕，驗證確認對話框彈出（使用 browser_handle_dialog），點擊「確定」後導航回上一頁或列表頁，3) 取消流程（無變更）：不修改任何欄位，點擊「取消」按鈕，驗證無確認對話框直接導航，4) 載入流程：導航至 /reservations/123/edit，使用 browser_network_requests 驗證 GET 請求發送至 /api/reservations/123，驗證表單欄位填入 API 返回的資料 | Restrictions: 必須使用 Playwright MCP 工具，儲存流程測試需監控 network requests（使用 browser_network_requests）確認 API 呼叫，取消流程需驗證 isDirty 邏輯（透過修改/不修改欄位觸發不同分支），確認對話框測試需使用 browser_handle_dialog 處理瀏覽器原生 confirm dialog，載入流程需驗證路由參數正確傳遞且 API 正確呼叫 | Success: 儲存流程測試通過（API 請求發送且成功處理），取消流程測試通過（isDirty 邏輯正確、確認對話框行為正確），載入流程測試通過（路由參數正確、資料正確填入表單），所有流程的網路請求監控正常_

## Phase 7: 完善與優化 (Enhancement & Optimization)

- [ ] 22. 整合 Auth Feature（未來擴展）
  - Files: `app/features/reservation/composables/useReservationForm.ts`, `app/pages/reservations/[id]/edit.vue`
  - Description: 整合 useAuthStore 取得當前使用者資訊，自動填入「初洽業務」欄位，檢查使用者權限
  - Purpose: 提供個人化體驗，確保資料安全
  - _Leverage: app/features/auth/store/auth.store.ts, design.md:139-141 (Auth Feature 整合)_
  - _Requirements: 未來需求（權限管理）_
  - _Prompt: Role: Full-stack Integration Engineer 專精於跨 feature 整合與權限管理 | Task: 根據 design.md:139-141 的 Auth Feature 整合規劃，在 reservation feature 中整合 auth feature，步驟：1) 在 useReservationForm.ts 中 import useAuthStore，2) 在 composable 初始化時從 useAuthStore().user 獲取當前使用者資訊，3) 如果是新建模式（無 reservationId），自動將 formData.basicInfo.salesPerson 設為當前使用者姓名，4) 在 EditReservationPage.vue 中檢查使用者是否具備「編輯初洽單」權限（可透過 useAuthStore().user.permissions 或簡化為 isAuthenticated 檢查），5) 如無權限則顯示錯誤訊息並禁用表單（或 redirect）| Restrictions: 整合時必須確保 auth feature 已完整實作（如尚未實作則此任務可暫時跳過或使用 mock 資料），不可破壞 reservation feature 的獨立性（即使沒有 auth，reservation 也應可單獨運作），自動填入業務人員邏輯僅適用於新建模式（編輯現有初洽單時應保留原業務人員），權限檢查應在頁面 onMounted 時執行，不可在每次操作時重複檢查 | Success: 新建初洽單時業務人員欄位自動填入當前使用者姓名，權限檢查邏輯正確（無權限時禁用表單或 redirect），整合不破壞 reservation feature 的獨立性，當 auth feature 未完整實作時 reservation 仍可正常運作_

- [ ] 23. 建立 Shared Utilities（未來擴展）
  - Files:
    - `app/shared/composables/useToast.ts` (新建)
    - `app/shared/composables/useConfirm.ts` (新建)
  - Description: 將 Toast 通知與確認對話框邏輯抽離為 shared composables，供多個 features 重用
  - Purpose: 提高程式碼重用性，標準化使用者反饋機制
  - _Leverage: design.md:158-162 (Shared Utilities 規劃)_
  - _Requirements: 未來需求（使用者體驗優化）_
  - _Prompt: Role: Frontend Utilities Developer 專精於可重用元件與 composables 設計 | Task: 根據 design.md:158-162 的 Shared Utilities 規劃，建立兩個 shared composables：1) useToast.ts：提供 showSuccess(message), showError(message), showWarning(message) 方法，使用 Syncfusion Toast 元件或第三方 toast 庫（如 vue-toastification），2) useConfirm.ts：提供 confirm(message, options) 方法，返回 Promise<boolean>，使用 Syncfusion Dialog 元件或瀏覽器原生 confirm 的封裝，建立後在 reservation feature 中整合這兩個 composables（取代 window.confirm 與直接的 console.log）| Restrictions: Shared composables 必須位於 app/shared/composables/（不可放在 features/ 下），必須設計為無狀態且可重用（不可依賴特定 feature 的 store），Toast 元件應全域註冊或透過 Teleport 渲染至 body，Confirm dialog 應支援自訂標題、訊息、按鈕文字（透過 options 參數），整合至 reservation 時必須取代現有的 window.confirm（在 useReservationForm.ts 的 cancelForm 中）與 console.log（在 store 的 error handling 中）| Success: useToast 與 useConfirm composables 建立完成，API 設計合理且易用，Toast 通知與 Confirm dialog 可在專案任何位置使用，reservation feature 成功整合這兩個 composables（不再使用 window.confirm），使用者體驗提升（美觀的 toast 與 dialog）_

- [ ] 24. 效能優化
  - Files: `nuxt.config.ts`, 所有 Section 元件
  - Description: 實施 Syncfusion 元件懶載入（lazy loading）、程式碼分割（code splitting）、圖片最佳化
  - Purpose: 減少初始載入時間，提升頁面效能
  - _Leverage: tech.md:44-49 (PWA 與效能優化)_
  - _Requirements: 非功能需求（效能）_
  - _Prompt: Role: Performance Optimization Engineer 專精於前端效能調校與 bundle 最佳化 | Task: 根據 tech.md:44-49 的效能優化原則，對 reservation feature 進行效能優化，步驟：1) 確認 Syncfusion 元件已啟用 tree-shaking（僅引入使用到的元件，未使用的不打包），2) 使用 Nuxt 的 lazy component 功能將 Section 元件改為懶載入（在 EditReservationPage 中使用 defineAsyncComponent 或 <ClientOnly>），3) 檢查 bundle size（使用 nuxi analyze）確認 Syncfusion 未打包未使用的元件，4) 如有大型資料（如縣市區域清單），考慮使用動態 import 或 API 載入，5) 確認 Nuxt 自動 code splitting 正常運作（route-based splitting）| Restrictions: 懶載入不可影響首屏渲染（EditReservationPage 仍應快速顯示），不可過度拆分導致 HTTP 請求數暴增（需平衡 bundle size 與請求數），tree-shaking 檢查需確認 package.json 中的 Syncfusion 套件使用 ESM 格式（支援 tree-shaking），bundle 分析需在 production build 下執行（npm run build && nuxi analyze），優化前後需測量 Lighthouse 分數（Performance, FCP, LCP）並記錄改善幅度 | Success: Syncfusion 元件 tree-shaking 生效（未使用的元件不在 bundle 中），Section 元件懶載入正常運作，bundle size 相比優化前減少（具體數據記錄），Lighthouse Performance 分數提升，首屏載入時間縮短_

- [ ] 25. 錯誤處理完善
  - Files: `app/features/reservation/store/reservation.store.ts`, `app/features/reservation/api/reservation.api.ts`, `app/features/reservation/composables/useReservationForm.ts`
  - Description: 完善所有錯誤處理邏輯，包含 API 錯誤、網路錯誤、驗證錯誤，提供有意義的錯誤訊息給使用者
  - Purpose: 提升系統穩健性，改善錯誤狀態下的使用者體驗
  - _Leverage: design.md:1477-1535 (Error Handling 策略)_
  - _Requirements: Requirement 7 (資料持久化錯誤處理)_
  - _Prompt: Role: Error Handling & Resilience Engineer 專精於錯誤處理與系統穩健性設計 | Task: 根據 design.md:1477-1535 的 Error Handling 策略，完善 reservation feature 的錯誤處理，步驟：1) 在 reservation.api.ts 中捕獲 HTTP 錯誤並拋出結構化的 Error 物件（包含 status code, message, data），2) 在 reservation.store.ts 的 actions 中捕獲 API 錯誤，將錯誤訊息存入 state.error（如 "儲存失敗：網路連線錯誤"），3) 在 useReservationForm.ts 中監聽 store.error，當錯誤發生時透過 useToast.showError() 顯示錯誤訊息，4) 處理 7 種錯誤場景：API 連線失敗、401 未授權、403 無權限、404 資源不存在、422 驗證錯誤、500 伺服器錯誤、網路逾時，5) 確保所有 async 函數都有 try-catch 包裹，finally 中正確釋放資源（如設定 isLoading = false）| Restrictions: 錯誤處理不可吞掉錯誤（silent fail），必須透過 toast 或 UI 反饋告知使用者，錯誤訊息必須使用者友善（避免顯示原始技術錯誤如 "TypeError: Cannot read property..."），401/403 錯誤應考慮 redirect 至登入頁或顯示權限不足提示，422 驗證錯誤應將後端返回的欄位錯誤對應至前端 ValidationErrors 物件，500 錯誤應顯示通用訊息如 "系統錯誤，請稍後再試"，網路逾時應提供重試機制（可整合至 useToast），不可在多個層級重複處理同一錯誤（遵循單一錯誤處理點原則）| Success: 所有錯誤場景都有對應的處理邏輯，錯誤訊息使用者友善且準確，Toast 通知正確顯示錯誤，401/403 錯誤正確 redirect 或提示，422 驗證錯誤正確對應至表單欄位，500 錯誤與網路錯誤提供重試機制，系統在各種錯誤狀態下保持穩定不崩潰_

---

## Definition of Done

當所有 25 個任務完成後，「訂席系統初洽單編輯模式」feature 應達到以下標準：

### 功能完整性
- 所有 8 個基本資料欄位可正常輸入/選擇
- 所有 7 個客戶資料欄位可正常輸入，級聯下拉正常運作
- 所有 6 個宴會資料欄位可正常輸入/選擇
- 所有 5 個輔助資訊欄位可正常輸入
- 儲存按鈕可觸發表單驗證與 API 呼叫
- 取消按鈕可檢查 isDirty 並導航
- 編輯模式可從 API 載入資料並填入表單
- 新建模式可建立空白表單

### 視覺與設計
- UI 100% 符合 Figma 設計稿（透過 Playwright MCP 視覺回歸測試驗證）
- 所有 Syncfusion 元件使用 Material 3 Theme
- Tailwind CSS 與 Syncfusion 樣式無衝突
- 必填欄位顯示紅色星號 (*)
- 錯誤訊息顯示紅色文字在欄位下方
- 唯讀欄位顯示灰色背景且禁用
- 響應式設計正常運作（grid 在小螢幕切換為單欄）

### 程式碼品質
- 遵循 Feature-based 架構（所有檔案位於 `app/features/reservation/`）
- 遵循 Single Responsibility Principle（每個檔案職責明確）
- 所有檔案包含完整 TypeScript 型別標註，無 any 類型
- 遵循 Import 順序規範（External → Syncfusion → Internal → Types）
- 實作 Barrel Exports（可透過 `@/features/reservation` 統一 import）
- 所有 async 函數包含 try-catch-finally 錯誤處理
- 與 auth feature 架構模式一致

### 測試覆蓋
- Playwright MCP 視覺回歸測試完成（所有 Section 截圖）
- 所有表單欄位互動測試通過
- 表單驗證邏輯測試通過（必填、格式驗證）
- 儲存/取消/載入流程測試通過
- 網路請求監控驗證 API 呼叫正確

### 效能與優化
- Syncfusion 元件 tree-shaking 生效
- Bundle size 在合理範圍（透過 nuxi analyze 驗證）
- Lighthouse Performance 分數 > 80
- FCP < 2s, LCP < 3s

### 文檔與維護性
- 所有元件包含 JSDoc 註解（說明 Props, Emits, Purpose）
- README.md 包含 feature 使用說明與 API 文檔
- 錯誤處理邏輯完整且使用者友善
- 程式碼可讀性高，易於後續維護與擴展

---

**實作時注意事項**：
1. ⚠️ **Syncfusion API 驗證**：任務 13 必須在其他 UI 元件任務前完成，確保 API 使用正確
2. ⚠️ **Figma 欄位確認**：BasicInfo 的其他兩個欄位與 AdditionalInfo 的四個欄位標籤待確認，實作時可先使用 placeholder，後續與產品團隊確認後更新
3. ⚠️ **Backend API 整合**：目前 API endpoints 為預期設計，實作時需與後端團隊對接確認實際 API 格式
4. ⚠️ **依賴順序**：Phase 1 → Phase 2 → Phase 3 → Phase 4, 5, 6 可並行 → Phase 7
5. ⚠️ **測試環境**：Playwright MCP 測試需在 dev server 運行狀態下執行（npm run dev）
