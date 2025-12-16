import { test, expect } from './setup'

/**
 * E2E 測試：Tab 切換功能
 *
 * 測試目標：
 * 1. 驗證預設顯示主檔 tab
 * 2. 驗證點擊「預計活動明細」tab 後正確切換
 * 3. 驗證 Grid 元件正確顯示
 * 4. 驗證雙向切換功能
 *
 * 依照 design.md Line 848-862 的測試案例
 */

test.describe('Tab 切換與 DataGrid 顯示測試', () => {
  test('預設應該顯示主檔 tab', async ({ inquiryPage }) => {
    // 等待 Tab 元件初始化
    await inquiryPage.waitForSelector('.e-tab', { timeout: 5000 })

    // 驗證主檔 tab 是 active 狀態
    const masterTabItem = inquiryPage.locator('.e-tab-header .e-toolbar-item', { hasText: '主檔' })
    await expect(masterTabItem).toBeVisible()

    // 驗證主檔 tab 具有 active class
    const isActive = await masterTabItem.evaluate((el) => {
      return el.classList.contains('e-active') || el.parentElement?.classList.contains('e-active')
    })
    expect(isActive).toBeTruthy()

    // 驗證主檔 tab 的內容可見
    const basicInfoSection = inquiryPage.locator('.inquiry-basic-info')
    await expect(basicInfoSection).toBeVisible()

    const customerInfoSection = inquiryPage.locator('.inquiry-customer-info')
    await expect(customerInfoSection).toBeVisible()
  })

  test('點擊「預計活動明細」tab 應該正確切換', async ({ inquiryPage, switchToActivityDetailsTab }) => {
    // 切換到預計活動明細 tab
    await switchToActivityDetailsTab()

    // 驗證預計活動明細 tab 是 active 狀態
    const activityTabItem = inquiryPage.locator('.e-tab-header .e-toolbar-item', { hasText: '預計活動明細' })
    await expect(activityTabItem).toBeVisible()

    // 驗證預計活動明細 tab 具有 active class
    const isActive = await activityTabItem.evaluate((el) => {
      return el.classList.contains('e-active') || el.parentElement?.classList.contains('e-active')
    })
    expect(isActive).toBeTruthy()

    // 驗證 DataGrid 可見
    const gridContainer = inquiryPage.locator('.inquiry-activity-details-grid')
    await expect(gridContainer).toBeVisible()

    const grid = inquiryPage.locator('.e-grid')
    await expect(grid).toBeVisible()
  })

  test('切換到預計活動明細後，主檔內容應該隱藏', async ({ inquiryPage, switchToActivityDetailsTab }) => {
    // 切換到預計活動明細 tab
    await switchToActivityDetailsTab()

    // 驗證主檔內容不可見或隱藏
    // 注意：Syncfusion Tab 可能使用 display: none 或其他方式隱藏內容
    const basicInfoSection = inquiryPage.locator('.inquiry-basic-info')

    // 檢查元素是否存在但不可見
    const isHidden = await basicInfoSection.evaluate((el) => {
      const style = window.getComputedStyle(el)
      return style.display === 'none' || style.visibility === 'hidden' || !el.offsetParent
    })

    // 如果元素存在，應該被隱藏
    if (await basicInfoSection.count() > 0) {
      expect(isHidden).toBeTruthy()
    }
  })

  test('應該可以從預計活動明細切換回主檔', async ({ inquiryPage, switchToActivityDetailsTab }) => {
    // 先切換到預計活動明細
    await switchToActivityDetailsTab()

    // 驗證 Grid 可見
    const grid = inquiryPage.locator('.e-grid')
    await expect(grid).toBeVisible()

    // 點擊主檔 tab
    const masterTab = inquiryPage.locator('.e-tab-header .e-toolbar-item', { hasText: '主檔' })
    await masterTab.click()
    await inquiryPage.waitForTimeout(300)

    // 驗證主檔 tab 是 active 狀態
    const isActive = await masterTab.evaluate((el) => {
      return el.classList.contains('e-active') || el.parentElement?.classList.contains('e-active')
    })
    expect(isActive).toBeTruthy()

    // 驗證主檔內容可見
    const basicInfoSection = inquiryPage.locator('.inquiry-basic-info')
    await expect(basicInfoSection).toBeVisible()
  })

  test('Grid 應該正確渲染資料行', async ({ inquiryPage, switchToActivityDetailsTab }) => {
    // 切換到預計活動明細 tab
    await switchToActivityDetailsTab()

    // 等待 Grid 資料載入
    await inquiryPage.waitForSelector('.e-grid .e-row', { timeout: 10000 })

    // 驗證有資料行
    const rows = inquiryPage.locator('.e-grid .e-row')
    const rowCount = await rows.count()
    expect(rowCount).toBeGreaterThan(0)

    // 驗證第一筆資料
    const firstRow = rows.first()
    await expect(firstRow).toBeVisible()

    // 驗證 Grid 包含預期的資料欄位（如預計主場地）
    const firstRowText = await firstRow.textContent()
    expect(firstRowText).toBeTruthy()
  })

  test('Tab 切換應該保持表單資料', async ({ inquiryPage, switchToActivityDetailsTab }) => {
    // 記錄初洽單號的值
    const inquiryOrderNoInput = inquiryPage.locator('.inquiry-basic-info input').first()
    const initialValue = await inquiryOrderNoInput.inputValue()

    // 切換到預計活動明細
    await switchToActivityDetailsTab()

    // 切換回主檔
    const masterTab = inquiryPage.locator('.e-tab-header .e-toolbar-item', { hasText: '主檔' })
    await masterTab.click()
    await inquiryPage.waitForTimeout(300)

    // 驗證初洽單號的值沒有改變
    const currentValue = await inquiryOrderNoInput.inputValue()
    expect(currentValue).toBe(initialValue)
  })

  test('Tab header 應該正確顯示兩個 tab 項目', async ({ inquiryPage }) => {
    // 驗證 Tab header 存在
    const tabHeader = inquiryPage.locator('.e-tab-header')
    await expect(tabHeader).toBeVisible()

    // 驗證兩個 tab 項目都存在
    const masterTab = inquiryPage.locator('.e-tab-header .e-toolbar-item', { hasText: '主檔' })
    await expect(masterTab).toBeVisible()

    const activityTab = inquiryPage.locator('.e-tab-header .e-toolbar-item', { hasText: '預計活動明細' })
    await expect(activityTab).toBeVisible()

    // 驗證 tab 項目數量正確
    const tabItems = inquiryPage.locator('.e-tab-header .e-toolbar-item')
    const tabCount = await tabItems.count()
    expect(tabCount).toBe(2)
  })

  test('快速連續切換 tab 應該正常運作', async ({ inquiryPage, switchToActivityDetailsTab }) => {
    const masterTab = inquiryPage.locator('.e-tab-header .e-toolbar-item', { hasText: '主檔' })
    const activityTab = inquiryPage.locator('.e-tab-header .e-toolbar-item', { hasText: '預計活動明細' })

    // 連續切換 5 次
    for (let i = 0; i < 5; i++) {
      await activityTab.click()
      await inquiryPage.waitForTimeout(200)

      await masterTab.click()
      await inquiryPage.waitForTimeout(200)
    }

    // 驗證最終停留在主檔 tab
    const isActive = await masterTab.evaluate((el) => {
      return el.classList.contains('e-active') || el.parentElement?.classList.contains('e-active')
    })
    expect(isActive).toBeTruthy()

    // 驗證主檔內容可見
    const basicInfoSection = inquiryPage.locator('.inquiry-basic-info')
    await expect(basicInfoSection).toBeVisible()
  })
})

/**
 * Linus 式測試總結：
 *
 * 這些測試驗證了 Tab 切換的核心功能：
 * 1. 預設狀態正確（測試 1）
 * 2. Tab 切換功能正常（測試 2-4）
 * 3. Grid 正確顯示（測試 5）
 * 4. 狀態保持正確（測試 6）
 * 5. Tab 結構正確（測試 7）
 * 6. 連續切換穩定（測試 8）
 *
 * 如果這些測試通過，代表 Tab 實作符合要求：
 * - 沒有特殊情況（切換邏輯簡單一致）
 * - 狀態管理正確（資料不會遺失）
 * - UI 反應靈敏（切換流暢）
 */
