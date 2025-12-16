import { test as base, expect, type Page } from '@playwright/test'
import type { InquiryFormData } from '../../../app/features/inquiry/types/inquiry.types'

/**
 * Inquiry 測試環境設定
 * 提供共用的 fixtures 和 helper functions
 */

// 測試資料：與 mock 資料一致
export const testFormData: InquiryFormData = {
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
    customerName: '陳大明',
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
    estimatedDateRange: ['2025-12-18', '2025-12-21'],
    tourDateTime: '2025-12-01 14:00'
  },
  supplement: {
    visitedCompetitorVenues: ['台北萬豪酒店', '台北君悅酒店'],
    venueDecisionFactors: ['場地環境', '價格優惠'],
    bookedCompetitorVenue: '',
    notBookingReasons: [],
    contactNotes: '初次接洽，客戶對場地有興趣'
  }
}

// 測試用的活動明細資料
export const testActivityDetail = {
  mainVenue: '宴會廳A',
  subVenue: 'A1廳',
  usageDate: '2025/12/20',
  startTime: '18:00',
  endTime: '22:00',
  activityCategory: '尾牙',
  activitySubject: '年終尾牙晚宴',
  tableLayout: '圓桌10人座',
  equipmentNeeds: '投影機、音響',
  reservedTables: 20,
  reservedPeople: 200,
  remarks: '需要舞台',
  modifiedBy: '顏平',
  modifiedDate: '2025/08/22',
  createdBy: '顏平',
  createdDate: '2025/08/22'
}

/**
 * Extended Playwright Test with Inquiry Fixtures
 */
type InquiryFixtures = {
  inquiryPage: Page
  waitForInquiryPageLoad: () => Promise<void>
  fillBasicInfo: (data: typeof testFormData.basic) => Promise<void>
  fillCustomerInfo: (data: typeof testFormData.customer) => Promise<void>
  switchToActivityDetailsTab: () => Promise<void>
  getSyncfusionElement: (selector: string) => ReturnType<Page['locator']>
}

export const test = base.extend<InquiryFixtures>({
  /**
   * Fixture: inquiryPage
   * 自動導航到 inquiry 頁面並等待載入完成
   */
  inquiryPage: async ({ page }, use) => {
    await page.goto('http://localhost:3000/inquiry', { timeout: 60000 })
    await page.waitForLoadState('networkidle', { timeout: 60000 })
    // 等待 Syncfusion 組件初始化
    await page.waitForSelector('.inquiry-form-page', { timeout: 30000 })
    //  額外等待 Syncfusion 元件完全初始化
    await page.waitForTimeout(3000)
    await use(page)
  },

  /**
   * Fixture: waitForInquiryPageLoad
   * Helper function to wait for page load
   */
  waitForInquiryPageLoad: async ({ page }, use) => {
    const waitFn = async () => {
      await page.waitForSelector('.inquiry-form-page', { timeout: 10000 })
      await page.waitForLoadState('networkidle')
      // 等待 Syncfusion Tab 初始化
      await page.waitForSelector('.e-tab', { timeout: 5000 })
    }
    await use(waitFn)
  },

  /**
   * Fixture: fillBasicInfo
   * Helper function to fill basic info form
   */
  fillBasicInfo: async ({ page }, use) => {
    const fillFn = async (data: typeof testFormData.basic) => {
      // 初洽業務
      const contactPersonDropdown = page.locator('[data-field="inquireContactPerson"] .e-dropdownlist')
      if (await contactPersonDropdown.count() > 0) {
        await contactPersonDropdown.click()
        await page.waitForSelector('.e-list-item')
        await page.locator('.e-list-item', { hasText: data.inquireContactPerson }).click()
      }

      // 初洽配合專案
      const projectDropdown = page.locator('[data-field="relatedProject"] .e-dropdownlist')
      if (await projectDropdown.count() > 0) {
        await projectDropdown.click()
        await page.waitForSelector('.e-list-item')
        await page.locator('.e-list-item', { hasText: data.relatedProject }).click()
      }

      // 初洽訂席來源
      const leadSourceDropdown = page.locator('[data-field="leadSource"] .e-dropdownlist')
      if (await leadSourceDropdown.count() > 0) {
        await leadSourceDropdown.click()
        await page.waitForSelector('.e-list-item')
        await page.locator('.e-list-item', { hasText: data.leadSource }).click()
      }
    }
    await use(fillFn)
  },

  /**
   * Fixture: fillCustomerInfo
   * Helper function to fill customer info form
   */
  fillCustomerInfo: async ({ page }, use) => {
    const fillFn = async (data: typeof testFormData.customer) => {
      // 客戶姓名
      const nameInput = page.locator('[data-field="customerName"] input')
      if (await nameInput.count() > 0) {
        await nameInput.fill(data.customerName)
      }

      // 聯絡人
      const contactInput = page.locator('[data-field="contactPerson"] input')
      if (await contactInput.count() > 0) {
        await contactInput.fill(data.contactPerson)
      }

      // 聯絡手機
      const phoneInput = page.locator('[data-field="phoneNumber"] input')
      if (await phoneInput.count() > 0) {
        await phoneInput.fill(data.phoneNumber)
      }

      // 聯絡信箱
      const emailInput = page.locator('[data-field="email"] input')
      if (await emailInput.count() > 0) {
        await emailInput.fill(data.email)
      }
    }
    await use(fillFn)
  },

  /**
   * Fixture: switchToActivityDetailsTab
   * Helper function to switch to activity details tab
   */
  switchToActivityDetailsTab: async ({ page }, use) => {
    const switchFn = async () => {
      const activityTab = page.locator('.e-tab .e-toolbar-item', { hasText: '預計活動明細' })
      await activityTab.click()
      await page.waitForTimeout(300) // 等待 tab 切換動畫
      await page.waitForSelector('.inquiry-activity-details-grid', { timeout: 5000 })
    }
    await use(switchFn)
  },

  /**
   * Fixture: getSyncfusionElement
   * Helper function to get Syncfusion component elements with proper waiting
   */
  getSyncfusionElement: async ({ page }, use) => {
    const getFn = (selector: string) => {
      return page.locator(selector)
    }
    await use(getFn)
  }
})

/**
 * Helper Functions
 */

/**
 * 等待 Syncfusion 組件完全初始化
 */
export async function waitForSyncfusionComponent(page: Page, selector: string, timeout = 5000) {
  await page.waitForSelector(selector, { timeout })
  // 額外等待以確保 Syncfusion 內部初始化完成
  await page.waitForTimeout(200)
}

/**
 * 點擊 Syncfusion DropDownList 並選擇選項
 */
export async function selectDropdownOption(page: Page, dropdownSelector: string, optionText: string) {
  const dropdown = page.locator(dropdownSelector)
  await dropdown.click()
  await page.waitForSelector('.e-list-item', { timeout: 3000 })
  const option = page.locator('.e-list-item', { hasText: optionText })
  await option.click()
  await page.waitForTimeout(100) // 等待選擇完成
}

/**
 * 填寫 Syncfusion TextBox
 */
export async function fillTextBox(page: Page, textboxSelector: string, value: string) {
  const input = page.locator(`${textboxSelector} input`)
  await input.fill(value)
  await page.waitForTimeout(100)
}

/**
 * 點擊 Syncfusion Button
 */
export async function clickButton(page: Page, buttonSelector: string) {
  const button = page.locator(buttonSelector)
  await button.click()
  await page.waitForTimeout(100)
}

/**
 * 驗證 Syncfusion Grid 資料
 */
export async function verifyGridData(page: Page, gridSelector: string, expectedRowCount: number) {
  await page.waitForSelector(`${gridSelector} .e-grid`, { timeout: 10000 })
  await page.waitForSelector(`${gridSelector} .e-row`, { timeout: 10000 })
  const rows = page.locator(`${gridSelector} .e-row`)
  const actualCount = await rows.count()
  expect(actualCount).toBe(expectedRowCount)
}

/**
 * 取得 Syncfusion Grid 的第一筆資料
 */
export async function getFirstGridRow(page: Page, gridSelector: string) {
  await page.waitForSelector(`${gridSelector} .e-row`, { timeout: 10000 })
  const firstRow = page.locator(`${gridSelector} .e-row`).first()
  return await firstRow.textContent()
}

/**
 * 驗證表單欄位值
 */
export async function verifyFieldValue(page: Page, fieldSelector: string, expectedValue: string) {
  const field = page.locator(fieldSelector)
  await expect(field).toHaveValue(expectedValue)
}

/**
 * 等待並驗證 console.log 訊息
 */
export async function captureConsoleMessages(page: Page): Promise<string[]> {
  const messages: string[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'log') {
      messages.push(msg.text())
    }
  })
  return messages
}

export { expect }
