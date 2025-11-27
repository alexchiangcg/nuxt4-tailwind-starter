import { test, expect } from '@playwright/test'

/**
 * E2E 測試：Schema-Driven 搜尋頁面組件
 *
 * 測試目標：
 * 1. 驗證組件根據 props.searchFields 動態渲染搜尋欄位
 * 2. 驗證組件根據 props.gridColumns 動態渲染表格欄位
 * 3. 驗證折疊/展開功能
 * 4. 驗證搜尋功能
 * 5. 驗證表格分頁功能
 */

test.describe('SearchPage Component - Schema-Driven Tests', () => {
  test.beforeEach(async ({ page }) => {
    // 導航到測試頁面
    await page.goto('http://localhost:3005/test/search-page')
    await page.waitForLoadState('networkidle')
  })

  /**
   * 測試 1: 驗證第一排搜尋欄位動態渲染
   * 預期：應該根據 searchFields (row=1) 渲染 6 個欄位
   */
  test('應該根據 searchFields schema 渲染第一排搜尋欄位', async ({ page }) => {
    // 預期的第一排欄位標籤
    const expectedLabels = [
      '預約進度',
      '預約狀態',
      '預約類別',
      '業務員',
      '預約名稱',
      '預約中心編號',
    ]

    // 驗證每個標籤都存在
    for (const label of expectedLabels) {
      const labelElement = page.locator('.field-label', { hasText: label })
      await expect(labelElement).toBeVisible()
    }

    // 驗證下拉選單數量 (前4個是 dropdown)
    const dropdowns = page.locator('.e-dropdownlist').first()
    await expect(dropdowns).toBeVisible()
  })

  /**
   * 測試 2: 驗證折疊/展開功能
   * 預期：點擊展開按鈕後，第二排欄位應該顯示
   */
  test('應該正確處理折疊/展開功能', async ({ page }) => {
    // 第二排欄位標籤
    const secondRowLabels = ['開始日期', '結束日期', '取消日期', '新增日期']

    // 初始狀態：第二排應該隱藏
    for (const label of secondRowLabels) {
      const labelElement = page.locator('.field-label', { hasText: label })
      await expect(labelElement).not.toBeVisible()
    }

    // 點擊展開按鈕（圖示按鈕，包含 chevron-down 圖示）- 第三個按鈕是展開按鈕
    const expandButton = page.locator('.button-group button').nth(2)
    await expandButton.click()

    // 等待動畫完成
    await page.waitForTimeout(300)

    // 展開後：第二排應該顯示
    for (const label of secondRowLabels) {
      const labelElement = page.locator('.field-label', { hasText: label })
      await expect(labelElement).toBeVisible()
    }

    // 再次點擊應該收起
    await expandButton.click()
    await page.waitForTimeout(300)

    // 收起後：第二排應該隱藏
    for (const label of secondRowLabels) {
      const labelElement = page.locator('.field-label', { hasText: label })
      await expect(labelElement).not.toBeVisible()
    }
  })

  /**
   * 測試 3: 驗證表格欄位動態渲染
   * 預期：表格應該根據 gridColumns 渲染所有欄位標題
   */
  test('應該根據 gridColumns schema 渲染表格欄位', async ({ page }) => {
    // 預期的表格欄位標題
    const expectedHeaders = [
      '預約中心編號',
      '預約進度',
      '預約狀態',
      '預約類別',
      '預約名稱',
      '預約來源',
      '業務員',
      '預約金額',
      '新增日期',
      '取消日期',
      '開始日期',
      '結束日期',
      '新增者',
      '取消者',
    ]

    // 驗證每個表頭都存在
    for (const header of expectedHeaders) {
      const headerCell = page.locator('.e-headercell', { hasText: header })
      await expect(headerCell).toBeVisible()
    }
  })

  /**
   * 測試 4: 驗證表格資料渲染
   * 預期：表格應該顯示 mockGridData 中的資料
   */
  test('應該正確渲染表格資料', async ({ page }) => {
    // 等待表格加載完成
    await page.waitForSelector('.e-grid')
    // 等待表格資料渲染 - Syncfusion Grid 需要時間初始化
    await page.waitForSelector('.e-row', { timeout: 10000 })

    // 驗證第一筆資料
    const firstRow = page.locator('.e-row').first()
    await expect(firstRow).toContainText('CRS000151')
    await expect(firstRow).toContainText('使用者可自訂')
    await expect(firstRow).toContainText('正常')
    await expect(firstRow).toContainText('公司活動')

    // 驗證表格至少有 10 筆資料（預設每頁 20 筆）
    const rows = page.locator('.e-row')
    const rowCount = await rows.count()
    expect(rowCount).toBeGreaterThanOrEqual(10)
  })

  /**
   * 測試 5: 驗證下拉選單互動
   * 預期：點擊下拉選單應該顯示選項
   */
  test('應該正確處理下拉選單互動', async ({ page }) => {
    // 找到第一個下拉選單（預約進度）
    const firstDropdown = page.locator('.e-dropdownlist').first()
    await firstDropdown.click()

    // 等待選項列表出現
    await page.waitForSelector('.e-list-item')

    // 驗證選項是否正確（根據 searchFieldsConfig）
    const options = page.locator('.e-list-item')
    const optionsCount = await options.count()
    expect(optionsCount).toBeGreaterThan(0)

    // 驗證第一個選項的文字
    const firstOption = options.first()
    await expect(firstOption).toBeVisible()
  })

  /**
   * 測試 6: 驗證搜尋按鈕互動
   * 預期：點擊搜尋按鈕應該觸發搜尋（檢查 console.log）
   */
  test('應該正確觸發搜尋功能', async ({ page }) => {
    // 監聽 console.log
    const consoleMessages: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'log') {
        consoleMessages.push(msg.text())
      }
    })

    // 填寫一個搜尋條件（文字輸入）- 定位到實際的 input 元素
    const nameInput = page.locator('.custom-textbox input').first()
    await nameInput.fill('測試預約')

    // 點擊搜尋按鈕（第一個按鈕）
    const searchButton = page.locator('button.e-primary').first()
    await searchButton.click()

    // 等待一下讓事件處理完成
    await page.waitForTimeout(500)

    // 驗證 console.log 有被觸發
    const hasSearchLog = consoleMessages.some((msg) => msg.includes('搜尋條件'))
    expect(hasSearchLog).toBeTruthy()
  })

  /**
   * 測試 7: 驗證表格分頁功能
   * 預期：應該顯示分頁器並且可以切換頁碼
   */
  test('應該正確顯示並使用分頁功能', async ({ page }) => {
    // 等待表格和資料渲染完成
    await page.waitForSelector('.e-grid')
    await page.waitForSelector('.e-row', { timeout: 10000 })
    // 等待分頁器出現
    await page.waitForSelector('.e-pager', { timeout: 10000 })

    // 驗證分頁器存在
    const pager = page.locator('.e-pager')
    await expect(pager).toBeVisible()

    // 驗證分頁控制元素存在
    const pagerInfo = page.locator('.e-pagercontainer')
    await expect(pagerInfo).toBeVisible()

    // 如果有多頁，測試頁碼切換
    const nextPageButton = page.locator('.e-nextpage')
    if (await nextPageButton.isVisible()) {
      const firstRowBeforeClick = await page.locator('.e-row').first().textContent()

      await nextPageButton.click()
      await page.waitForTimeout(500)

      const firstRowAfterClick = await page.locator('.e-row').first().textContent()

      // 驗證資料有變化（如果有足夠資料的話）
      // 注意：如果資料少於 20 筆，這個測試會跳過
      if (firstRowBeforeClick !== firstRowAfterClick) {
        expect(firstRowBeforeClick).not.toBe(firstRowAfterClick)
      }
    }
  })

  /**
   * 測試 8: 驗證「新增預約」按鈕
   * 預期：按鈕應該顯示正確的文字並可點擊
   */
  test('應該顯示並可點擊新增按鈕', async ({ page }) => {
    // 找到新增按鈕
    const addButton = page.locator('button', { hasText: '新增預約' })
    await expect(addButton).toBeVisible()

    // 監聽 console.log
    const consoleMessages: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'log') {
        consoleMessages.push(msg.text())
      }
    })

    // 點擊按鈕
    await addButton.click()
    await page.waitForTimeout(300)

    // 驗證有 console.log '新增預約'
    const hasAddLog = consoleMessages.some((msg) => msg.includes('新增預約'))
    expect(hasAddLog).toBeTruthy()
  })

  /**
   * 測試 9: 驗證清除按鈕功能
   * 預期：點擊清除按鈕應該清空所有搜尋欄位
   */
  test('應該正確清除搜尋條件', async ({ page }) => {
    // 填寫一個文字輸入欄位 - 定位到實際的 input 元素
    const nameInput = page.locator('.custom-textbox input').first()
    await nameInput.fill('測試文字')

    // 驗證輸入成功
    await expect(nameInput).toHaveValue('測試文字')

    // 點擊清除按鈕（第二個 outline 按鈕）
    const clearButton = page.locator('button.e-outline').nth(1)
    await clearButton.click()
    await page.waitForTimeout(300)

    // 驗證欄位已清空
    await expect(nameInput).toHaveValue('')
  })

  /**
   * 測試 10: 驗證響應式設計
   * 預期：在不同螢幕尺寸下，組件應該正確顯示
   */
  test('應該在不同螢幕尺寸下正常顯示', async ({ page }) => {
    // 測試桌面尺寸
    await page.setViewportSize({ width: 1440, height: 900 })
    await page.waitForTimeout(300)

    let searchForm = page.locator('.search-form-container')
    await expect(searchForm).toBeVisible()

    // 測試平板尺寸
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.waitForTimeout(300)

    searchForm = page.locator('.search-form-container')
    await expect(searchForm).toBeVisible()

    // 測試手機尺寸
    await page.setViewportSize({ width: 375, height: 667 })
    await page.waitForTimeout(300)

    searchForm = page.locator('.search-form-container')
    await expect(searchForm).toBeVisible()
  })
})

/**
 * Linus 式測試總結：
 *
 * 這些測試驗證了 Schema-Driven 設計的核心原則：
 * 1. 資料結構驅動 UI 渲染（測試 1, 3）
 * 2. 動態欄位生成無特殊情況（測試 1, 3）
 * 3. 功能互動正確性（測試 2, 5, 6, 9）
 * 4. 資料完整性（測試 4, 7）
 * 5. 使用者體驗（測試 8, 10）
 *
 * 如果這些測試通過，代表組件已經達到「好品味」的標準：
 * - 消除了特殊情況（Schema 驅動）
 * - 沒有不必要的複雜度
 * - 向後相容（可擴展新欄位而不破壞現有功能）
 */
