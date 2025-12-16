import { test, expect } from './setup'

/**
 * E2E 測試：InquiryToolbar 元件
 *
 * 測試目標：
 * 1. 驗證 Toolbar 5 個按鈕的可見性
 * 2. 驗證按鈕可點擊性
 * 3. 驗證檢視模式/編輯模式切換功能
 *
 * 依照 design.md Line 817-827 的測試案例
 */

test.describe('InquiryToolbar - 按鈕可見性與互動測試', () => {
  test('應該正確顯示 5 個按鈕', async ({ inquiryPage }) => {
    // 驗證「轉訂席單」按鈕
    const convertButton = inquiryPage.getByRole('button', { name: '轉訂席單' })
    await expect(convertButton).toBeVisible()

    // 驗證「檢視模式」按鈕（預設模式）
    const viewModeButton = inquiryPage.getByRole('button', { name: '檢視模式' })
    await expect(viewModeButton).toBeVisible()

    // 驗證「刪除」Icon 按鈕
    const deleteButton = inquiryPage.locator('button.e-icon-btn', {
      has: inquiryPage.locator('.iconify.material-symbols--delete-outline')
    }).first()
    await expect(deleteButton).toBeVisible()

    // 驗證「複製」Icon 按鈕
    const copyButton = inquiryPage.locator('button.e-icon-btn', {
      has: inquiryPage.locator('.iconify.material-symbols--content-copy')
    }).first()
    await expect(copyButton).toBeVisible()

    // 驗證「新增」Icon 按鈕
    const addButton = inquiryPage.locator('button.e-icon-btn', {
      has: inquiryPage.locator('.iconify.material-symbols--add')
    }).first()
    await expect(addButton).toBeVisible()
  })

  test('應該正確切換檢視模式與編輯模式', async ({ inquiryPage }) => {
    // 預設應顯示「檢視模式」
    const modeButton = inquiryPage.getByRole('button', { name: /檢視模式|編輯/ })
    await expect(modeButton).toBeVisible()

    // 驗證初始狀態
    await expect(modeButton).toHaveText('檢視模式')

    // 點擊切換到編輯模式
    await modeButton.click()
    await inquiryPage.waitForTimeout(200)

    // 驗證按鈕文字改變為「編輯」
    await expect(modeButton).toHaveText('編輯')

    // 再次點擊切換回檢視模式
    await modeButton.click()
    await inquiryPage.waitForTimeout(200)

    // 驗證按鈕文字改回「檢視模式」
    await expect(modeButton).toHaveText('檢視模式')
  })

  test('轉訂席單按鈕應該可以點擊', async ({ inquiryPage }) => {
    // 監聽 console.log
    const consoleMessages: string[] = []
    inquiryPage.on('console', (msg) => {
      if (msg.type() === 'log') {
        consoleMessages.push(msg.text())
      }
    })

    const convertButton = inquiryPage.getByRole('button', { name: '轉訂席單' })
    await convertButton.click()
    await inquiryPage.waitForTimeout(300)

    // 驗證 console.log 有被觸發
    const hasConvertLog = consoleMessages.some((msg) => msg.includes('Convert to Reservation'))
    expect(hasConvertLog).toBeTruthy()
  })

  test('刪除按鈕應該可以點擊', async ({ inquiryPage }) => {
    // 監聽 console.log
    const consoleMessages: string[] = []
    inquiryPage.on('console', (msg) => {
      if (msg.type() === 'log') {
        consoleMessages.push(msg.text())
      }
    })

    const deleteButton = inquiryPage.locator('button.e-icon-btn', {
      has: inquiryPage.locator('.iconify.material-symbols--delete-outline')
    }).first()
    await deleteButton.click()
    await inquiryPage.waitForTimeout(300)

    // 驗證 console.log 有被觸發
    const hasDeleteLog = consoleMessages.some((msg) => msg.includes('Delete'))
    expect(hasDeleteLog).toBeTruthy()
  })

  test('複製按鈕應該可以點擊', async ({ inquiryPage }) => {
    // 監聽 console.log
    const consoleMessages: string[] = []
    inquiryPage.on('console', (msg) => {
      if (msg.type() === 'log') {
        consoleMessages.push(msg.text())
      }
    })

    const copyButton = inquiryPage.locator('button.e-icon-btn', {
      has: inquiryPage.locator('.iconify.material-symbols--content-copy')
    }).first()
    await copyButton.click()
    await inquiryPage.waitForTimeout(300)

    // 驗證 console.log 有被觸發
    const hasCopyLog = consoleMessages.some((msg) => msg.includes('Copy'))
    expect(hasCopyLog).toBeTruthy()
  })

  test('新增按鈕應該可以點擊', async ({ inquiryPage }) => {
    // 監聽 console.log
    const consoleMessages: string[] = []
    inquiryPage.on('console', (msg) => {
      if (msg.type() === 'log') {
        consoleMessages.push(msg.text())
      }
    })

    const addButton = inquiryPage.locator('button.e-icon-btn', {
      has: inquiryPage.locator('.iconify.material-symbols--add')
    }).first()
    await addButton.click()
    await inquiryPage.waitForTimeout(300)

    // 驗證 console.log 有被觸發
    const hasAddLog = consoleMessages.some((msg) => msg.includes('Add'))
    expect(hasAddLog).toBeTruthy()
  })

  test('Toolbar 應該正確佈局（左右分佈）', async ({ inquiryPage }) => {
    // 驗證 Toolbar 容器存在
    const toolbar = inquiryPage.locator('.inquiry-toolbar')
    await expect(toolbar).toBeVisible()

    // 驗證左側區域包含「轉訂席單」按鈕
    const leftSection = toolbar.locator('.toolbar-left')
    await expect(leftSection).toBeVisible()
    const convertButton = leftSection.getByRole('button', { name: '轉訂席單' })
    await expect(convertButton).toBeVisible()

    // 驗證右側區域包含 4 個按鈕（檢視模式 + 3 個 icon 按鈕）
    const rightSection = toolbar.locator('.toolbar-right')
    await expect(rightSection).toBeVisible()

    const rightButtons = rightSection.locator('button')
    const rightButtonCount = await rightButtons.count()
    expect(rightButtonCount).toBe(4) // 檢視模式/編輯 + 刪除 + 複製 + 新增
  })
})

/**
 * Linus 式測試總結：
 *
 * 這些測試驗證了 Toolbar 的核心功能：
 * 1. 所有按鈕可見且可點擊（測試 1-7）
 * 2. 模式切換功能正常（測試 2）
 * 3. 佈局正確（測試 8）
 *
 * 如果這些測試通過，代表 Toolbar 達到基本要求：
 * - 沒有特殊情況（每個按鈕都以相同方式處理）
 * - 功能簡單明確（點擊觸發事件）
 * - UI 符合設計稿（左右佈局）
 */
