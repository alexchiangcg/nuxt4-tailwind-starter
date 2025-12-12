/**
 * 初洽單管理 - TypeScript 型別定義
 * 包含主檔、活動明細、下拉選單等介面定義
 */

/**
 * 初洽單主檔
 */
export interface InquiryOrder {
  // 基本資料
  id?: string
  inquiryOrderNo: string                    // 初洽單號（後端產生）
  status: string                            // 初洽狀態（必填）
  inquireDate: Date                         // 初洽日（必填，預設今天）
  inquireContactPerson: string              // 初洽業務（必填）
  relatedProject: string                    // 相關專案（唯讀）
  reservationNumber: string                 // 訂席單號（唯讀）
  manualNumber: string                      // 手動單號
  leadSource: string[]                      // 初洽訂席來源（多選）

  // 客戶資料
  customerName: string                      // 客戶姓名
  contactPerson: string                     // 聯絡人
  contactPhone: string                      // 聯絡手機
  contactEmail: string                      // 聯絡 E-mail
  city: string                              // 城市
  district: string                          // 鄉鎮市區

  // 宴會資料
  category: string                          // 類別
  banquetName: string                       // 宴名
  budgetRange: string                       // 預算範圍
  expectedBanquetDateStart: Date | null     // 預計宴客日期（起）
  expectedBanquetDateEnd: Date | null       // 預計宴客日期（迄）
  venueVisitDateTime: Date | null           // 賞廳日期時間
  venueVisitSales: string                   // 賞廳業務

  // 輔助資訊
  visitedCompetitorVenue: string[]          // 已看同業場館（多選）
  venueDecisionFactor: string[]             // 決定宴客場地主因（多選）
  bookedCompetitorVenue: string[]           // 下訂同業場館（多選）
  rejectionReason: string[]                 // 未下定原因（多選）
  contactNotes: string                      // 聯絡備註

  // 系統欄位
  createdBy: string                         // 新增者（前端產生）
  createdDate: Date | null                  // 新增日期（前端產生）
  modifiedBy: string                        // 修改者（後端產生）
  modifiedDate: Date | null                 // 修改日期（後端產生）
}

/**
 * 活動明細
 */
export interface InquiryOrderDetail {
  id: string
  inquiryOrderId?: string                   // 所屬初洽單 ID
  mainVenue: string                         // 預計主場地（必填）
  subVenue: string                          // 預計子場地
  usageDate: Date | null                    // 使用日期（必填）
  startTime: string                         // 開始時間（必填）
  endTime: string                           // 結束時間（必填）
  activityCategory: string                  // 活動類別
  activitySubject: string                   // 活動主旨
  tableLayout: string                       // 桌圖
  equipmentNeeds: string                    // 預計設備需求
  reservedTables: number                    // 預訂桌數
  reservedPeople: number                    // 預訂人數
  remarks: string                           // 備註

  // 系統欄位
  createdBy: string                         // 新增者（前端產生）
  createdDate: Date                         // 新增日期（前端產生）
  modifiedBy: string                        // 修改者（後端產生）
  modifiedDate: Date | null                 // 修改日期（後端產生）
}

/**
 * 下拉選單選項
 */
export interface DropdownOption {
  id: string | number
  name: string
}

/**
 * API 回應格式
 */
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  errors?: string[]
}

/**
 * 儲存初洽單請求
 */
export interface SaveInquiryOrderRequest {
  master: InquiryOrder
  details: InquiryOrderDetail[]
}

/**
 * 儲存初洽單回應
 */
export interface SaveInquiryOrderResponse {
  master: InquiryOrder                      // 包含後端產生的欄位
  details: InquiryOrderDetail[]
}
