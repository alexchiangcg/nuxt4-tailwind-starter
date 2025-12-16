import { test, expect } from '@playwright/test'

test('inquiry page loads successfully', async ({ page }) => {
  await page.goto('http://localhost:3000/inquiry', { timeout: 60000 })

  // 等待頁面載入
  await page.waitForSelector('.inquiry-form-page', { timeout: 30000 })

  // 檢查頁面標題
  const pageElement = page.locator('.inquiry-form-page')
  await expect(pageElement).toBeVisible()

  console.log('Page loaded successfully!')
})

test('check page HTML structure', async ({ page }) => {
  await page.goto('http://localhost:3000/inquiry', { timeout: 60000 })

  // 取得頁面 HTML
  const html = await page.content()

  // 檢查是否包含關鍵元素
  expect(html).toContain('inquiry-form-page')
  expect(html).toContain('inquiry-toolbar')

  console.log('HTML structure check passed!')
})
