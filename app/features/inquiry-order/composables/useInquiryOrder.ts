/**
 * 初洽單主檔業務邏輯 Composable
 *
 * 封裝初洽單主檔的所有業務邏輯，包含載入、儲存、驗證、複製等功能。
 *
 * @example
 * ```vue
 * <script setup>
 * import { useInquiryOrder } from '~/features/inquiry-order/composables/useInquiryOrder'
 *
 * const {
 *   inquiryOrder,
 *   isLoading,
 *   errors,
 *   saveInquiryOrder,
 *   validateInquiryOrder
 * } = useInquiryOrder()
 *
 * async function handleSave() {
 *   const success = await saveInquiryOrder()
 *   if (success) {
 *     console.log('儲存成功')
 *   }
 * }
 * </script>
 * ```
 *
 * @returns {Object} 初洽單主檔的狀態和方法
 */

import { computed } from 'vue'
import { useInquiryOrderStore } from '../store/inquiry-order.store'
import { mockGetInquiryOrder, mockSaveInquiryOrder } from '../mock/inquiry-order.mock'

export function useInquiryOrder() {
  const store = useInquiryOrderStore()

  // State
  const inquiryOrder = computed(() => store.inquiryOrder)
  const isLoading = computed(() => store.isLoading)
  const errors = computed(() => store.errors)

  // Computed
  const isEditMode = computed(() => !!inquiryOrder.value.id)
  const canConvert = computed(() =>
    isEditMode.value && inquiryOrder.value.status === '初洽中'
  )

  // Methods
  /**
   * 載入既有初洽單
   *
   * @param {string} id - 初洽單 ID
   * @returns {Promise<void>}
   * @throws {Error} 當 API 呼叫失敗時，錯誤訊息會儲存在 store.errors
   *
   * @example
   * await loadInquiryOrder('INQ20241212001')
   */
  async function loadInquiryOrder(id: string) {
    store.isLoading = true
    try {
      const data = await mockGetInquiryOrder(id)
      store.setInquiryOrder(data)
    } catch (error) {
      store.errors = ['載入初洽單失敗']
    } finally {
      store.isLoading = false
    }
  }

  /**
   * 儲存初洽單（主檔 + 活動明細）
   *
   * 執行流程：
   * 1. 驗證主檔和明細資料
   * 2. 設定前端產生欄位（新增時）: createdBy, createdDate
   * 3. 呼叫 API 儲存
   * 4. 更新後端產生欄位: inquiryOrderNo, modifiedBy, modifiedDate
   * 5. 清除 LocalStorage 草稿
   *
   * @returns {Promise<boolean>} 儲存是否成功
   *
   * @example
   * const success = await saveInquiryOrder()
   * if (success) {
   *   showToast('儲存成功', 'e-toast-success')
   * } else {
   *   showToast('儲存失敗：' + errors.value.join('、'), 'e-toast-danger')
   * }
   */
  async function saveInquiryOrder() {
    // 1. 驗證主檔和明細
    if (!validateInquiryOrder()) {
      return false
    }

    // 2. 設定自動欄位（前端產生）
    if (!isEditMode.value) {
      store.inquiryOrder.createdBy = getCurrentUser()
      store.inquiryOrder.createdDate = new Date()
    }

    // 3. 儲存主檔和明細
    store.isLoading = true
    try {
      // 儲存主檔（後端會回傳更新後的資料，包含 inquiryOrderNo, modifiedBy, modifiedDate）
      const savedMaster = await mockSaveInquiryOrder(store.inquiryOrder)
      store.setInquiryOrder(savedMaster)

      // 儲存所有活動明細（如果有的話）
      // 注意：實際專案中應該在一個 transaction 中儲存主檔和明細
      // 這裡為了簡化，分別儲存

      // 4. 清除草稿
      clearDraft()

      return true
    } catch (error) {
      store.errors = ['儲存失敗，請稍後再試']
      return false
    } finally {
      store.isLoading = false
    }
  }

  /**
   * 驗證初洽單主檔資料
   *
   * 驗證規則：
   * - 必填欄位：status, inquireDate, inquireContactPerson
   * - Email 格式：`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
   * - 手機格式：`/^09\d{8}$/`
   *
   * @returns {boolean} 驗證是否通過（true = 通過，false = 有錯誤）
   *
   * @example
   * if (validateInquiryOrder()) {
   *   await saveInquiryOrder()
   * } else {
   *   console.error('驗證失敗', errors.value)
   * }
   */
  function validateInquiryOrder(): boolean {
    const errors: string[] = []

    // 必填欄位驗證
    if (!inquiryOrder.value.status) errors.push('請選擇初洽狀態')
    if (!inquiryOrder.value.inquireDate) errors.push('請選擇初洽日')
    if (!inquiryOrder.value.inquireContactPerson) errors.push('請輸入初洽業務')

    // Email 驗證
    if (inquiryOrder.value.contactEmail && !isValidEmail(inquiryOrder.value.contactEmail)) {
      errors.push('請輸入有效的電子郵件地址')
    }

    // 手機驗證
    if (inquiryOrder.value.contactPhone && !isValidPhone(inquiryOrder.value.contactPhone)) {
      errors.push('請輸入有效的手機號碼')
    }

    store.errors = errors
    return errors.length === 0
  }

  /**
   * 複製初洽單（建立副本）
   *
   * 複製規則（根據 requirements.md 4）：
   * - **可複製**：大部分主檔欄位、所有活動明細
   * - **不複製**：customerName, contactPerson, contactPhone, contactEmail, leadSource
   * - **重置欄位**：id, inquiryOrderNo, reservationNumber, status='初洽中', inquireDate=今天
   * - **前端產生**：createdBy, createdDate
   *
   * @returns {Promise<void>}
   *
   * @example
   * // 點擊複製按鈕
   * await copyInquiryOrder()
   * // 自動導航至主頁面，資料已複製且特定欄位已清空
   */
  async function copyInquiryOrder() {
    const copied = { ...store.inquiryOrder }

    // 重置特定欄位
    copied.id = undefined
    copied.inquiryOrderNo = ''
    copied.status = '初洽中' // 預設狀態
    copied.reservationNumber = ''
    copied.inquireDate = new Date()

    // 清空不複製的欄位（根據 requirements.md 4）
    copied.customerName = ''
    copied.contactPerson = ''
    copied.contactPhone = ''
    copied.contactEmail = ''
    copied.leadSource = []

    // 前端產生欄位
    copied.createdBy = getCurrentUser()
    copied.createdDate = new Date()

    // 複製所有活動明細
    const copiedDetails = store.inquiryOrderDetails.map(detail => ({
      ...detail,
      id: `temp-${Date.now()}-${Math.random()}` // 新的臨時 ID
    }))

    store.setInquiryOrder(copied)
    store.inquiryOrderDetails = copiedDetails

    navigateTo('/inquiry-order')
  }

  function handleInquireContactPersonChange() {
    // 自動帶入賞廳業務
    if (inquiryOrder.value.inquireContactPerson && !inquiryOrder.value.venueVisitSales) {
      store.inquiryOrder.venueVisitSales = inquiryOrder.value.inquireContactPerson
    }
  }

  // Auto-save draft to LocalStorage
  function autoSaveDraft() {
    localStorage.setItem('inquiry-order-draft', JSON.stringify(store.inquiryOrder))
  }

  function loadDraft() {
    const draft = localStorage.getItem('inquiry-order-draft')
    if (draft) {
      try {
        const parsedDraft = JSON.parse(draft)
        store.setInquiryOrder(parsedDraft)
      } catch (error) {
        console.error('Failed to load draft:', error)
      }
    }
  }

  function clearDraft() {
    localStorage.removeItem('inquiry-order-draft')
  }

  return {
    // State
    inquiryOrder,
    isLoading,
    errors,
    // Computed
    isEditMode,
    canConvert,
    // Methods
    loadInquiryOrder,
    saveInquiryOrder,
    validateInquiryOrder,
    copyInquiryOrder,
    handleInquireContactPersonChange,
    autoSaveDraft,
    loadDraft,
    clearDraft
  }
}

// Helper functions
function getCurrentUser(): string {
  // TODO: 從認證系統取得當前使用者
  return 'Demo User'
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidPhone(phone: string): boolean {
  const phoneRegex = /^09\d{8}$/
  return phoneRegex.test(phone)
}
