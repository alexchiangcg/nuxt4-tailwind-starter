/**
 * Form Validation Composable
 *
 * Provides reusable validation functions for form fields
 */

export interface FormValidators {
  validateEmail: (email: string) => boolean
  validatePhone: (phone: string) => boolean
  validateRequired: (value: any) => boolean
  getEmailError: (email: string) => string
  getPhoneError: (phone: string) => string
  getRequiredError: (fieldName: string, value: any) => string
}

/**
 * Email validation pattern
 * Checks for basic email format: xxx@xxx.xxx
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Taiwan phone number pattern
 * Checks for 09 followed by 8 digits
 */
const TAIWAN_PHONE_PATTERN = /^09\d{8}$/

/**
 * Form validation composable
 * Returns validation helper functions
 */
export function useFormValidation(): FormValidators {
  /**
   * Validate email format
   */
  const validateEmail = (email: string): boolean => {
    if (!email || typeof email !== 'string') {
      return false
    }
    return EMAIL_PATTERN.test(email.trim())
  }

  /**
   * Validate Taiwan phone number format
   */
  const validatePhone = (phone: string): boolean => {
    if (!phone || typeof phone !== 'string') {
      return false
    }
    return TAIWAN_PHONE_PATTERN.test(phone.trim())
  }

  /**
   * Validate required field (not empty/null/undefined)
   */
  const validateRequired = (value: any): boolean => {
    // Handle null and undefined
    if (value === null || value === undefined) {
      return false
    }

    // Handle string (check for empty or whitespace-only)
    if (typeof value === 'string') {
      return value.trim().length > 0
    }

    // Handle number (0 is valid)
    if (typeof value === 'number') {
      return true
    }

    // Handle boolean
    if (typeof value === 'boolean') {
      return value
    }

    // Handle arrays
    if (Array.isArray(value)) {
      return value.length > 0
    }

    // Handle objects
    if (typeof value === 'object') {
      return Object.keys(value).length > 0
    }

    return false
  }

  /**
   * Get email validation error message
   */
  const getEmailError = (email: string): string => {
    if (!email || email.trim().length === 0) {
      return '請輸入信箱'
    }
    if (!validateEmail(email)) {
      return '請輸入有效的信箱格式'
    }
    return ''
  }

  /**
   * Get phone validation error message
   */
  const getPhoneError = (phone: string): string => {
    if (!phone || phone.trim().length === 0) {
      return '請輸入手機號碼'
    }
    if (!validatePhone(phone)) {
      return '請輸入有效的台灣手機號碼（09 開頭，共 10 碼）'
    }
    return ''
  }

  /**
   * Get required field validation error message
   */
  const getRequiredError = (fieldName: string, value: any): string => {
    if (!validateRequired(value)) {
      return `請輸入${fieldName}`
    }
    return ''
  }

  return {
    validateEmail,
    validatePhone,
    validateRequired,
    getEmailError,
    getPhoneError,
    getRequiredError
  }
}
