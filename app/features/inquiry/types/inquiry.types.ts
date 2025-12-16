// app/features/inquiry/types/inquiry.types.ts

/**
 * 初洽單基本資料
 */
export interface InquiryBasicInfo {
  inquiryOrderNo: string        // 初洽單號
  status: string                // 初洽狀態
  inquireDate: string           // 初洽日
  inquireContactPerson: string  // 初洽業務
  relatedProject: string        // 初洽配合專案
  reservationNumber: string     // 訂席單號
  manualNumber: string          // 人工單號
  leadSource: string            // 初洽訂席來源（單選）
}

/**
 * 客戶資料
 */
export interface InquiryCustomerInfo {
  customerName: string      // 客戶姓名
  contactPerson: string     // 聯絡人
  phoneCountryCode: string  // 聯絡手機-國碼
  phoneNumber: string       // 聯絡手機-號碼
  email: string             // 聯絡信箱
  city: string              // 居住地-城市
  district: string          // 居住地-區域
}

/**
 * 宴會資料
 */
export interface InquiryBanquetInfo {
  category: string              // 類別
  banquetName: string           // 宴會名稱
  budgetRange: string           // 預算範圍
  tourSalesPerson: string       // 賞廳業務
  estimatedDateRange: [string, string] // 預計宴客日期區間
  tourDateTime: string          // 預約賞廳時間
}

/**
 * 輔助資訊
 */
export interface InquirySupplementInfo {
  visitedCompetitorVenues: string[]   // 已看同業場館（多選）
  venueDecisionFactors: string[]      // 決定宴客場地主因（多選）
  bookedCompetitorVenue: string       // 下訂同業場館（單選）
  notBookingReasons: string[]         // 未下定原因（多選）
  contactNotes: string                // 接洽紀錄（多行文字）
}

/**
 * 初洽單主檔表單資料（整合所有區塊）
 */
export interface InquiryFormData {
  basic: InquiryBasicInfo
  customer: InquiryCustomerInfo
  banquet: InquiryBanquetInfo
  supplement: InquirySupplementInfo
}

/**
 * 預計活動明細資料
 */
export interface InquiryActivityDetail {
  id: string
  mainVenue: string
  subVenue: string
  usageDate: string
  startTime: string
  endTime: string
  activityCategory: string
  activitySubject: string
  tableLayout: string
  equipmentNeeds: string
  reservedTables: number
  reservedPeople: number
  remarks: string
  modifiedBy: string
  modifiedDate: string
  createdBy: string
  createdDate: string
}
