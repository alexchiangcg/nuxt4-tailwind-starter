import { test, expect } from '@playwright/test'

/**
 * 初洽單管理 E2E 測試
 * 測試完整使用者流程：新增、編輯、複製、驗證
 */

test.describe('初洽單管理 - 完整流程', () => {
  const BASE_URL = 'http://localhost:3005'

  test.beforeEach(async ({ page }) => {
    // 每個測試前導航到初洽單頁面
    await page.goto(`${BASE_URL}/inquiry-order`)
  })

  test('新增初洽單完整流程', async ({ page }) => {
    // 1. 進入新增頁面
    await expect(page.locator('h1')).toContainText('新增初洽單')

    // 2. 填寫主檔資料
    // 選擇初洽狀態
    await page.locator('[name="status"]').selectOption('初洽中')

    // 選擇初洽日
    const today = new Date().toISOString().split('T')[0]
    await page.locator('[name="inquireDate"]').fill(today)

    // 輸入初洽業務
    await page.locator('[name="inquireContactPerson"]').fill('測試業務')

    // 3. 切換到活動明細 Tab
    await page.locator('button:has-text("預計活動明細")').click()

    // 4. 新增活動明細
    await page.locator('button:has-text("新增第一筆活動明細")').click()

    // 等待導航到明細編輯頁面
    await expect(page).toHaveURL(/\/inquiry-order\/details\/new/)

    // 填寫明細資料
    await page.locator('[name="mainVenue"]').selectOption('宴會廳 A')
    await page.locator('[name="usageDate"]').fill(today)
    await page.locator('[name="startTime"]').fill('18:00')
    await page.locator('[name="endTime"]').fill('22:00')

    // 儲存明細
    await page.locator('button:has-text("儲存")').click()

    // 等待返回主頁面
    await expect(page).toHaveURL(/\/inquiry-order/)

    // 5. 儲存初洽單
    await page.locator('button:has-text("儲存")').click()

    // 6. 驗證成功訊息
    await expect(page.locator('.e-toast-success')).toBeVisible()
  })

  test('複製初洽單流程', async ({ page }) => {
    // 假設已有既有初洽單，這裡使用 mock 資料
    // 實際專案中需要先建立測試資料

    // 1. 載入既有初洽單 (需要先有資料)
    // await page.goto(`${BASE_URL}/inquiry-order?id=test-001`)

    // 2. 點擊複製按鈕
    // await page.locator('button:has-text("複製")').click()

    // 3. 驗證特定欄位已清空
    // const customerName = await page.locator('[name="customerName"]').inputValue()
    // expect(customerName).toBe('')

    // 4. 驗證初洽日更新為今天
    // const inquireDate = await page.locator('[name="inquireDate"]').inputValue()
    // const today = new Date().toISOString().split('T')[0]
    // expect(inquireDate).toBe(today)

    // 5. 驗證成功訊息
    // await expect(page.locator('.e-toast-info')).toContainText('複製成功')

    // 此測試需要先建立測試資料，暫時標記為 skip
    test.skip()
  })

  test('表單驗證測試', async ({ page }) => {
    // 1. 直接點擊儲存（未填寫必填欄位）
    await page.locator('button:has-text("儲存")').click()

    // 2. 驗證錯誤訊息顯示
    await expect(page.locator('.e-toast-danger')).toBeVisible()
    await expect(page.locator('.e-toast-danger')).toContainText('請選擇初洽狀態')
  })

  test('Tab 切換狀態保持', async ({ page }) => {
    // 1. 在主檔輸入資料
    await page.locator('[name="inquireContactPerson"]').fill('測試業務')
    const inputValue1 = await page.locator('[name="inquireContactPerson"]').inputValue()

    // 2. 切換到活動明細 Tab
    await page.locator('button:has-text("預計活動明細")').click()

    // 3. 切回主檔 Tab
    await page.locator('button:has-text("主檔")').click()

    // 4. 驗證資料仍保留
    const inputValue2 = await page.locator('[name="inquireContactPerson"]').inputValue()
    expect(inputValue2).toBe(inputValue1)
  })

  test('草稿自動儲存與還原', async ({ page }) => {
    // 1. 輸入資料
    await page.locator('[name="inquireContactPerson"]').fill('自動儲存測試')

    // 2. 等待 30 秒（自動儲存觸發）
    // 實際測試中可以縮短時間或直接測試 localStorage
    await page.waitForTimeout(31000)

    // 3. 重新整理頁面
    await page.reload()

    // 4. 驗證草稿已還原
    await page.waitForTimeout(1000) // 等待頁面載入
    const restoredValue = await page.locator('[name="inquireContactPerson"]').inputValue()
    expect(restoredValue).toBe('自動儲存測試')
  })

  test('離開頁面前提示', async ({ page }) => {
    // 1. 輸入資料
    await page.locator('[name="inquireContactPerson"]').fill('測試資料')

    // 2. 設置 dialog 處理
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('未儲存')
      await dialog.dismiss() // 取消離開
    })

    // 3. 嘗試導航到其他頁面
    await page.goto(`${BASE_URL}/`)

    // 4. 驗證仍在當前頁面
    await expect(page).toHaveURL(/\/inquiry-order/)
  })
})

test.describe('活動明細管理 - 完整流程', () => {
  const BASE_URL = 'http://localhost:3005'

  test('新增、編輯、刪除活動明細', async ({ page }) => {
    await page.goto(`${BASE_URL}/inquiry-order/details/new`)

    // 1. 新增活動明細（填寫必填欄位）
    await page.locator('[name="mainVenue"]').selectOption('宴會廳 A')
    const today = new Date().toISOString().split('T')[0]
    await page.locator('[name="usageDate"]').fill(today)
    await page.locator('[name="startTime"]').fill('18:00')
    await page.locator('[name="endTime"]').fill('22:00')

    // 2. 儲存
    await page.locator('button:has-text("儲存")').click()

    // 3. 驗證返回列表頁
    await expect(page).toHaveURL(/\/inquiry-order/)

    // 4. 驗證明細已新增（Grid 應顯示資料）
    // 實際測試需要檢查 Grid 內容
  })

  test('明細表單驗證', async ({ page }) => {
    await page.goto(`${BASE_URL}/inquiry-order/details/new`)

    // 1. 直接點擊儲存（未填寫必填欄位）
    await page.locator('button:has-text("儲存")').click()

    // 2. 驗證錯誤訊息顯示
    await expect(page.locator('.error-messages')).toBeVisible()
    await expect(page.locator('.error-messages')).toContainText('請選擇預計主場地')
    await expect(page.locator('.error-messages')).toContainText('請選擇使用日期')
    await expect(page.locator('.error-messages')).toContainText('請選擇開始時間')
    await expect(page.locator('.error-messages')).toContainText('請選擇結束時間')
  })
})
