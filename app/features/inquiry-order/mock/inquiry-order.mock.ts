/**
 * 初洽單管理 - Mock Data
 * 提供 UI 原型階段的測試資料
 */

import type { DropdownOption, InquiryOrder, InquiryOrderDetail } from '../types/inquiry-order.types'

/**
 * 初洽狀態選項
 */
export const MOCK_INQUIRY_STATUS: DropdownOption[] = [
  { id: 1, name: '初洽中' },
  { id: 2, name: '已轉訂' },
  { id: 3, name: '已取消' },
  { id: 4, name: '未成交' }
]

/**
 * 初洽訂席來源選項
 */
export const MOCK_LEAD_SOURCE: DropdownOption[] = [
  { id: 1, name: '電話洽詢' },
  { id: 2, name: '網路預約' },
  { id: 3, name: '現場洽詢' },
  { id: 4, name: '轉介紹' },
  { id: 5, name: '展覽' },
  { id: 6, name: '廣告' }
]

/**
 * 類別選項
 */
export const MOCK_CATEGORY: DropdownOption[] = [
  { id: 1, name: '婚宴' },
  { id: 2, name: '尾牙' },
  { id: 3, name: '春酒' },
  { id: 4, name: '會議' },
  { id: 5, name: '活動' }
]

/**
 * 已看同業場館選項
 */
export const MOCK_COMPETITOR_VENUES: DropdownOption[] = [
  { id: 1, name: 'A 飯店' },
  { id: 2, name: 'B 餐廳' },
  { id: 3, name: 'C 會館' },
  { id: 4, name: 'D 宴會廳' }
]

/**
 * 決定宴客場地主因選項
 */
export const MOCK_DECISION_FACTORS: DropdownOption[] = [
  { id: 1, name: '價格' },
  { id: 2, name: '地點' },
  { id: 3, name: '服務' },
  { id: 4, name: '菜色' },
  { id: 5, name: '場地' }
]

/**
 * 下訂同業場館選項
 */
export const MOCK_BOOKED_VENUES: DropdownOption[] = [
  { id: 1, name: 'A 飯店' },
  { id: 2, name: 'B 餐廳' },
  { id: 3, name: 'C 會館' }
]

/**
 * 未下定原因選項
 */
export const MOCK_REJECTION_REASONS: DropdownOption[] = [
  { id: 1, name: '價格太高' },
  { id: 2, name: '日期不合' },
  { id: 3, name: '場地不合' },
  { id: 4, name: '菜色不合' },
  { id: 5, name: '其他' }
]

/**
 * 預計主場地選項
 */
export const MOCK_MAIN_VENUES: DropdownOption[] = [
  { id: 1, name: '一樓宴會廳' },
  { id: 2, name: '二樓宴會廳' },
  { id: 3, name: '三樓宴會廳' }
]

/**
 * 預計子場地選項
 */
export const MOCK_SUB_VENUES: DropdownOption[] = [
  { id: 1, name: 'A 廳' },
  { id: 2, name: 'B 廳' },
  { id: 3, name: 'C 廳' }
]

/**
 * 活動類別選項
 */
export const MOCK_ACTIVITY_CATEGORIES: DropdownOption[] = [
  { id: 1, name: '文定' },
  { id: 2, name: '迎娶' },
  { id: 3, name: '宴客' },
  { id: 4, name: '會議' }
]

/**
 * 桌圖選項
 */
export const MOCK_TABLE_LAYOUTS: DropdownOption[] = [
  { id: 1, name: '圓桌 10 人' },
  { id: 2, name: '圓桌 12 人' },
  { id: 3, name: '方桌 8 人' }
]

/**
 * Mock API - 取得初洽單
 */
export async function mockGetInquiryOrder(id: string): Promise<InquiryOrder> {
  // 模擬 API 延遲
  await new Promise(resolve => setTimeout(resolve, 500))

  return {
    id,
    inquiryOrderNo: 'INQ20250101001',
    status: '初洽中',
    inquireDate: new Date('2025-01-01'),
    inquireContactPerson: 'Demo User',
    relatedProject: '',
    reservationNumber: '',
    manualNumber: '',
    leadSource: ['電話洽詢', '網路預約'],
    customerName: '王小明',
    contactPerson: '王小明',
    contactPhone: '0912345678',
    contactEmail: 'test@example.com',
    city: '台北市',
    district: '中正區',
    category: '婚宴',
    banquetName: '世紀婚禮',
    budgetRange: '100-150 萬',
    expectedBanquetDateStart: new Date('2025-06-01'),
    expectedBanquetDateEnd: new Date('2025-06-30'),
    venueVisitDateTime: new Date('2025-01-15T14:00:00'),
    venueVisitSales: 'Demo User',
    visitedCompetitorVenue: ['A 飯店'],
    venueDecisionFactor: ['價格', '地點'],
    bookedCompetitorVenue: [],
    rejectionReason: [],
    contactNotes: '客戶希望場地寬敞明亮',
    createdBy: 'Demo User',
    createdDate: new Date('2025-01-01'),
    modifiedBy: 'System',
    modifiedDate: new Date('2025-01-02')
  }
}

/**
 * Mock API - 取得活動明細列表
 */
export async function mockGetInquiryOrderDetails(inquiryOrderId: string): Promise<InquiryOrderDetail[]> {
  await new Promise(resolve => setTimeout(resolve, 300))

  return [
    {
      id: '1',
      inquiryOrderId,
      mainVenue: '一樓宴會廳',
      subVenue: 'A 廳',
      usageDate: new Date('2025-06-15'),
      startTime: '18:00',
      endTime: '22:00',
      activityCategory: '宴客',
      activitySubject: '晚宴',
      tableLayout: '圓桌 10 人',
      equipmentNeeds: '投影機、音響',
      reservedTables: 30,
      reservedPeople: 300,
      remarks: '',
      createdBy: 'Demo User',
      createdDate: new Date('2025-01-01'),
      modifiedBy: 'System',
      modifiedDate: new Date('2025-01-02')
    }
  ]
}

/**
 * Mock API - 儲存初洽單
 */
export async function mockSaveInquiryOrder(data: InquiryOrder): Promise<InquiryOrder> {
  await new Promise(resolve => setTimeout(resolve, 800))

  // 模擬後端產生欄位
  if (!data.id) {
    data.id = `temp-${Date.now()}`
    data.inquiryOrderNo = `INQ${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${Math.floor(Math.random() * 1000)}`
  }

  data.modifiedBy = 'System'
  data.modifiedDate = new Date()

  return data
}

/**
 * Mock API - 儲存活動明細
 */
export async function mockSaveInquiryOrderDetail(data: InquiryOrderDetail): Promise<InquiryOrderDetail> {
  await new Promise(resolve => setTimeout(resolve, 600))

  // 模擬後端產生欄位
  if (!data.id.startsWith('temp-')) {
    data.id = `temp-${Date.now()}`
  }

  data.modifiedBy = 'System'
  data.modifiedDate = new Date()

  return data
}

/**
 * Mock API - 刪除活動明細
 */
export async function mockDeleteInquiryOrderDetail(id: string): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 400))
  // 模擬刪除成功
}
