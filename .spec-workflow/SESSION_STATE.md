# 任務狀態記錄 - Reservation Edit Mode

**記錄時間**: 2025-12-17T06:51:00Z
**專案**: nuxt4-tailwind-starter
**Feature**: reservation-edit-mode（訂席系統初洽單編輯模式）
**當前狀態**: Phase 3 完成，準備進入 Phase 4 Implementation

---

## ✅ 已完成階段

### Phase 1: Requirements（需求分析）
- **文件**: `.spec-workflow/specs/reservation-edit-mode/requirements.md`
- **狀態**: ✅ 已批准
- **內容摘要**:
  - 8 個詳細需求定義
  - 完整對應 Figma 設計（Node ID: 6194:206567）
  - 包含所有表單區塊（基本資料、客戶資料、宴會資料、輔助資訊）
  - 定義必填欄位、驗證規則、Syncfusion 元件對應

### Phase 2: Design（技術設計）
- **文件**: `.spec-workflow/specs/reservation-edit-mode/design.md`
- **狀態**: ✅ 已批准
- **內容摘要**:
  - Feature-based 架構設計
  - 5 個主要 UI 元件定義（EditReservationPage + 4 個 Section 元件）
  - 完整 TypeScript 介面定義（ReservationFormData, BasicInfoData, CustomerInfoData, BanquetInfoData, AdditionalInfoData）
  - Figma → Syncfusion 元件對應表（涵蓋所有 30+ 表單欄位）
  - Pinia Store 設計（Options API 風格）
  - 2 個 Composables 設計（useReservationForm, useFormValidation）
  - 錯誤處理策略（7 個場景）
  - 測試策略（Unit, Integration, E2E with Playwright MCP）

### Phase 3: Tasks（任務分解）
- **文件**: `.spec-workflow/specs/reservation-edit-mode/tasks.md`
- **狀態**: ✅ 已批准
- **內容摘要**:
  - **25 個實作任務**，分為 7 個 Phases
  - 每個任務包含：Files, Description, Purpose, Leverage, Requirements, Prompt (Role | Task | Restrictions | Success)
  - Definition of Done 清單（功能完整性、視覺與設計、程式碼品質、測試覆蓋、效能、文檔）

---

## 📋 下一步：Phase 4 Implementation

### 任務總覽（25 tasks）

#### Phase 1: 基礎架構建立（5 tasks）
- [ ] Task 1: 建立 Feature 目錄結構
  - 建立 `app/features/reservation/` 及子目錄（pages/, components/, composables/, store/, api/, types/）

- [ ] Task 2: 定義 TypeScript 型別介面
  - 檔案: `app/features/reservation/types/reservation.types.ts`
  - 定義 7 個 interfaces（ReservationFormData, BasicInfoData, CustomerInfoData, BanquetInfoData, AdditionalInfoData, ValidationErrors, ReservationState）

- [ ] Task 3: 建立 Pinia Store
  - 檔案: `app/features/reservation/store/reservation.store.ts`
  - Options API 風格，包含 state, actions, getters

- [ ] Task 4: 建立 API 模組
  - 檔案: `app/features/reservation/api/reservation.api.ts`
  - 實作 get(id), save(data), update(id, data), delete(id)

- [ ] Task 5: 建立 Barrel Exports
  - 檔案: `app/features/reservation/index.ts`
  - 統一匯出 composables, store, api, types

#### Phase 2: Composables 開發（2 tasks）
- [ ] Task 6: 實作 useReservationForm
  - 檔案: `app/features/reservation/composables/useReservationForm.ts`
  - 封裝表單狀態管理、驗證、儲存/取消操作

- [ ] Task 7: 實作 useFormValidation
  - 檔案: `app/features/reservation/composables/useFormValidation.ts`
  - 實作 validateRequired, validateEmail, validatePhone, validateDate, validateForm

#### Phase 3: UI 元件開發（5 tasks）
- [ ] Task 8: BasicInfoSection.vue
  - 檔案: `app/features/reservation/components/BasicInfoSection.vue`
  - 8 個表單欄位（TextBox, DropDownList, DatePicker, Button）

- [ ] Task 9: CustomerInfoSection.vue
  - 檔案: `app/features/reservation/components/CustomerInfoSection.vue`
  - 7 個表單欄位，包含級聯下拉（縣市 → 區域）

- [ ] Task 10: BanquetInfoSection.vue
  - 檔案: `app/features/reservation/components/BanquetInfoSection.vue`
  - 6 個表單欄位（DateRangePicker, DateTimePicker, 數值輸入）

- [ ] Task 11: AdditionalInfoSection.vue
  - 檔案: `app/features/reservation/components/AdditionalInfoSection.vue`
  - 5 個表單欄位（4 個 DropDownList + 1 個 TextArea）

- [ ] Task 12: EditReservationPage.vue
  - 檔案: `app/features/reservation/pages/EditReservationPage.vue`
  - 主頁面，組合 Toolbar, Tabs, 4 個 Section 元件

#### Phase 4: Syncfusion 元件整合（3 tasks）
- [ ] Task 13: 透過 Syncfusion MCP 驗證元件 API
  - **⚠️ 關鍵任務**：必須在 UI 元件實作前完成
  - 使用 Syncfusion MCP 查詢所有元件的 Vue 3 API

- [ ] Task 14: 配置 Syncfusion Material 3 Theme
  - 確認 nuxt.config.ts 中 CSS 引入正確

- [ ] Task 15: 整合 Tailwind CSS 與 Syncfusion 樣式
  - 透過 cssClass prop 添加 Tailwind utilities

#### Phase 5: 路由與頁面整合（2 tasks）
- [ ] Task 16: 建立 Nuxt 頁面路由檔案
  - `app/pages/reservations/[id]/edit.vue`
  - `app/pages/reservations/new.vue`

- [ ] Task 17: 配置動態路由與導航守衛（未來擴展）
  - 整合 auth middleware

#### Phase 6: 測試（4 tasks）
- [ ] Task 18: Playwright MCP 視覺回歸測試
  - 截圖比對 Figma 設計稿

- [ ] Task 19: 驗證所有表單欄位互動
  - 測試所有 Syncfusion 元件的雙向綁定

- [ ] Task 20: 驗證表單驗證邏輯
  - 測試必填欄位、Email/Phone 格式驗證

- [ ] Task 21: 驗證儲存/取消流程
  - 測試完整的使用者操作流程

#### Phase 7: 完善與優化（4 tasks）
- [ ] Task 22: 整合 Auth Feature（未來擴展）
- [ ] Task 23: 建立 Shared Utilities（未來擴展）
- [ ] Task 24: 效能優化
- [ ] Task 25: 錯誤處理完善

---

## 🔑 關鍵資訊

### 專案結構
```
/Users/athena/Downloads/nuxt4-tailwind-starter/
├── .spec-workflow/
│   ├── specs/reservation-edit-mode/
│   │   ├── requirements.md  ✅
│   │   ├── design.md        ✅
│   │   └── tasks.md         ✅
│   └── SESSION_STATE.md     📄 本檔案
├── app/
│   ├── features/
│   │   ├── auth/            ✅ 參考模式
│   │   └── reservation/     ⏳ 待建立
│   └── pages/               ⏳ 待建立路由
├── package.json             ✅ Syncfusion v30.0.0 已安裝
└── nuxt.config.ts           ✅ 已配置
```

### 技術棧
- **Framework**: Nuxt 4.2 + Vue 3.5 (Composition API)
- **State**: Pinia 3.0 (Options API 風格)
- **UI**: Syncfusion EJ2 Vue v30.0.0 (15 個套件已安裝)
- **Styling**: Tailwind CSS v4.0 + Syncfusion Material 3 Theme
- **TypeScript**: 5.9
- **Testing**: Playwright MCP

### Figma 設計
- **Frame**: 編輯模式
- **Node ID**: 6194:206567
- **對應表**: 完整的 Figma → Syncfusion 元件對應表在 design.md

### 重要規範
1. **Feature-based 架構**：所有代碼在 `app/features/reservation/`
2. **Single Responsibility Principle**：每個檔案只處理一個職責
3. **Syncfusion API 驗證**：必須透過 Syncfusion MCP 查詢，不可臆測
4. **Import 順序**：External → Syncfusion → Internal → Types
5. **Barrel Exports**：透過 `index.ts` 統一匯出

---

## 📝 實作建議順序

### 建議 1：完整執行（25 tasks）
按照 tasks.md 定義的順序，從 Task 1 執行到 Task 25。

**優點**：
- 完整實作整個 feature
- 所有測試與優化都完成
- 符合 spec-workflow 的完整流程

**預估時間**：需要大量時間（25 個任務）

### 建議 2：分階段執行
先執行 Phase 1-3（基礎架構 + Composables + UI 元件），共 12 個任務。

**優點**：
- 快速建立可運作的原型
- 可先驗證架構設計是否合理
- Phases 4-7 可後續優化

**預估時間**：適中（12 個任務）

### 建議 3：MVP 最小可行產品
只執行核心任務：Task 1-5 (基礎架構) + Task 8 (BasicInfoSection) + Task 12 (EditReservationPage 簡化版)。

**優點**：
- 最快速度驗證概念
- 可先確認 Syncfusion 整合是否順利
- 後續可漸進式添加其他 Section

**預估時間**：最短（約 7 個任務）

---

## 🎯 重開機後接手指令

當您重開機後，可以告訴我：

### 選項 A：繼續完整實作
```
請讀取 .spec-workflow/SESSION_STATE.md，開始執行 Phase 4 Implementation 的 25 個任務
```

### 選項 B：分階段實作
```
請讀取 SESSION_STATE.md，先執行 Phase 1-3（Tasks 1-12）
```

### 選項 C：MVP 快速驗證
```
請讀取 SESSION_STATE.md，執行 MVP 版本（基礎架構 + BasicInfoSection + EditReservationPage）
```

### 選項 D：檢視狀態
```
請讀取 SESSION_STATE.md，告訴我目前的狀態
```

---

## 🚨 注意事項

1. **Syncfusion MCP 驗證**（Task 13）必須在實作 UI 元件前完成
2. **Backend API 尚未實作**：reservation.api.ts 的 endpoints 為預期設計，需與後端對接
3. **部分欄位標籤待確認**：BasicInfo 的其他兩個欄位、AdditionalInfo 的四個下拉欄位
4. **Auth 整合為未來擴展**：Task 17, 22 可後續執行

---

**狀態記錄完成。準備重開機。**
