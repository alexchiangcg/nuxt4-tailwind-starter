// app/features/inquiry/mock/inquiry.mock.ts

import type { InquiryFormData, InquiryActivityDetail } from '../types/inquiry.types'

/**
 * Mock 表單資料（使用 Figma 設計稿的實際值）
 */
export const mockFormData: InquiryFormData = {
  basic: {
    inquiryOrderNo: '20240830001',
    status: 'A:待到店',
    inquireDate: '2025/08/22',
    inquireContactPerson: 'So1:顏平',
    relatedProject: '001:年度尾牙促銷',
    reservationNumber: '',
    manualNumber: '20240830120',
    leadSource: 'WEB:官方網站'
  },
  customer: {
    customerName: '',
    contactPerson: '陳秘書',
    phoneCountryCode: '+886',
    phoneNumber: '0912345678',
    email: 'athena@mail.com',
    city: '台北市',
    district: '中山區'
  },
  banquet: {
    category: '05:尾牙',
    banquetName: '陳府喜宴',
    budgetRange: '50,000–100,000',
    tourSalesPerson: 'S01:顏平',
    estimatedDateRange: ['2025/12/18', '2025/12/21'],
    tourDateTime: '2025/12/01 14:00'
  },
  supplement: {
    visitedCompetitorVenues: ['B01:東區歐式婚宴館', 'F01:凱西酒店'],
    venueDecisionFactors: ['A:交通便利', 'B:價格合理'],
    bookedCompetitorVenue: 'B01:東區歐式婚宴館',
    notBookingReasons: ['Z:價格超出預算', 'D:無場地'],
    contactNotes: '等待回覆'
  }
}

/**
 * Mock 活動明細資料
 */
export const mockActivityDetails: InquiryActivityDetail[] = [
  {
    id: '1',
    mainVenue: '大宴會廳',
    subVenue: 'A 廳',
    usageDate: '2025/02/01',
    startTime: '18:00',
    endTime: '21:00',
    activityCategory: '尾牙',
    activitySubject: '晚宴',
    tableLayout: '圓桌 10 人',
    equipmentNeeds: '投影機、音響',
    reservedTables: 20,
    reservedPeople: 200,
    remarks: '',
    modifiedBy: '王小明',
    modifiedDate: '2025/01/15',
    createdBy: '王小明',
    createdDate: '2025/01/15'
  }
]

// ==================== DropDownList 資料源 ====================

/**
 * 基本資料 - 初洽狀態
 */
export const mockInquiryStatus = [
  { code: 'A', name: 'A:待到店' },
  { code: 'B', name: 'B:已到店' },
  { code: 'C', name: 'C:已下訂' }
]

/**
 * 基本資料 - 業務人員
 */
export const mockSalesPersons = [
  { code: 'So1', name: 'So1:顏平' },
  { code: 'So2', name: 'So2:陳小明' },
  { code: 'So3', name: 'So3:李美麗' }
]

/**
 * 基本資料 - 配合專案
 */
export const mockProjects = [
  { code: '001', name: '001:年度尾牙促銷' },
  { code: '002', name: '002:春酒專案' },
  { code: '003', name: '003:婚宴優惠' }
]

/**
 * 基本資料 - 訂席來源
 */
export const mockLeadSources = [
  { code: 'WEB', name: 'WEB:官方網站' },
  { code: 'TEL', name: 'TEL:電話' },
  { code: 'FB', name: 'FB:臉書' },
  { code: 'REF', name: 'REF:轉介紹' }
]

/**
 * 客戶資料 - 國碼
 */
export const mockCountryCodes = [
  { code: '+886', label: '+886' },
  { code: '+86', label: '+86' },
  { code: '+1', label: '+1' }
]

/**
 * 客戶資料 - 城市
 */
export const mockCities = [
  { code: 'TPE', name: '台北市' },
  { code: 'TPH', name: '新北市' },
  { code: 'TXG', name: '台中市' }
]

/**
 * 客戶資料 - 區域
 */
export const mockDistricts = [
  { code: 'ZS', name: '中山區' },
  { code: 'DA', name: '大安區' },
  { code: 'XY', name: '信義區' }
]

/**
 * 宴會資料 - 宴會類別
 */
export const mockBanquetCategories = [
  { code: '01', name: '01:婚宴' },
  { code: '02', name: '02:謝師宴' },
  { code: '05', name: '05:尾牙' }
]

/**
 * 輔助資訊 - 同業場館
 */
export const mockCompetitorVenues = [
  { code: 'B01', name: 'B01:東區歐式婚宴館' },
  { code: 'F01', name: 'F01:凱西酒店' },
  { code: 'G01', name: 'G01:皇家宴會廳' }
]

/**
 * 輔助資訊 - 決定場地主因
 */
export const mockDecisionFactors = [
  { code: 'A', name: 'A:交通便利' },
  { code: 'B', name: 'B:價格合理' },
  { code: 'C', name: 'C:場地氣氛' },
  { code: 'D', name: 'D:服務品質' }
]

/**
 * 輔助資訊 - 未下定原因
 */
export const mockNotBookingReasons = [
  { code: 'Z', name: 'Z:價格超出預算' },
  { code: 'D', name: 'D:無場地' },
  { code: 'E', name: 'E:檔期不符' },
  { code: 'F', name: 'F:其他考量' }
]
