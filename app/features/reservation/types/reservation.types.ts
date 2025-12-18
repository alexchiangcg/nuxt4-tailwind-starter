// Reservation Feature 型別定義

/**
 * 主表單資料介面
 * 包含所有區塊的資料結構
 */
export interface ReservationFormData {
  basicInfo: BasicInfoData
  customerInfo: CustomerInfoData
  banquetInfo: BanquetInfoData
  additionalInfo: AdditionalInfoData
}

/**
 * 基本資料區塊
 * 包含初洽單基礎資訊與訂席關聯
 */
export interface BasicInfoData {
  reservationNo: string           // 初洽單號（唯讀，自動產生）
  status: string                   // 初洽狀態（必填）
  reservationDate: Date | null     // 初洽日（必填）
  salesPerson: string              // 初洽業務（必填）
  project?: string                 // 初洽配合專案（選填）
  bookingNo?: string               // 訂席單號（唯讀，關聯欄位）
  field7?: string                  // 待確認欄位 7
  field8?: string                  // 待確認欄位 8
}

/**
 * 客戶資料區塊
 * 包含客戶基本資訊與聯絡方式
 */
export interface CustomerInfoData {
  customerId?: string              // 客戶 ID（如果是現有客戶）
  customerName: string             // 客戶姓名
  phoneAreaCode: string            // 電話區碼（例：02）
  phoneNumber: string              // 電話號碼
  email?: string                   // Email 或地址（待確認欄位用途）
  city?: string                    // 縣市
  district?: string                // 區域
}

/**
 * 宴會資料區塊
 * 包含宴會類型、規模與時間資訊
 */
export interface BanquetInfoData {
  banquetType: string              // 宴會類型（婚宴、尾牙等）
  estimatedTables: number          // 預計桌數
  estimatedGuests: number          // 預計人數
  session: string                  // 時段/場地
  dateRange: {
    startDate: Date | null
    endDate: Date | null
  }                                // 宴會日期範圍
  dateTime: Date | null            // 宴會時間（日期 + 時段）
}

/**
 * 輔助資訊區塊
 * 包含額外欄位與備註
 */
export interface AdditionalInfoData {
  field1?: string                  // 輔助欄位 1（待確認欄位用途）
  field2?: string                  // 輔助欄位 2
  field3?: string                  // 輔助欄位 3
  field4?: string                  // 輔助欄位 4
  notes?: string                   // 備註（多行文字）
}

/**
 * 表單驗證錯誤
 * 結構化儲存各區塊的錯誤訊息
 */
export interface ValidationErrors {
  basicInfo?: Record<string, string>
  customerInfo?: Record<string, string>
  banquetInfo?: Record<string, string>
  additionalInfo?: Record<string, string>
}

/**
 * Store 狀態
 * 管理當前初洽單、載入狀態與錯誤
 */
export interface ReservationState {
  currentReservation: ReservationFormData | null
  isLoading: boolean
  error: string | null
}

/**
 * API Request/Response Types
 */
export interface CreateReservationRequest {
  data: ReservationFormData
}

export interface UpdateReservationRequest {
  id: string
  data: ReservationFormData
}

export interface ReservationResponse {
  id: string
  data: ReservationFormData
  createdAt: string
  updatedAt: string
  createdBy: string
  updatedBy: string
}

/**
 * Dropdown Options Types
 * 用於 Syncfusion DropDownList 的選項資料
 */
export interface DropdownOption {
  label: string
  value: string
}

export interface StatusOption extends DropdownOption {
  // 初洽狀態選項（例：A:待到店）
}
