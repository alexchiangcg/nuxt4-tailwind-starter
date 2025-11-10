/**
 * Reservation Form Composable
 *
 * Centralized state management for reservation form
 */

import { ref } from 'vue'
import type { Ref } from 'vue'
import type { ReservationData, ValidationErrors } from '../types/reservation.types'
import { useFormValidation } from './useFormValidation'

export interface UseReservationFormReturn {
  formData: Ref<ReservationData>
  errors: Ref<ValidationErrors>
  validate: () => ValidationErrors
  reset: () => void
  isValid: () => boolean
}

/**
 * Initial empty form data
 */
const getInitialFormData = (): ReservationData => ({
  // Personal information
  firstName: '',
  lastName: '',
  title: null,
  gender: null,
  birthday: null,

  // Contact information
  countryCode: '+886',
  phoneNumber: '',
  email: '',

  // Preferences
  saveInfo: false,

  // Special requests
  purposes: [],
  notes: '',

  // Payment
  paymentMethod: null,

  // Agreements
  agreePaymentTerms: false,
  agreePrivacyPolicy: false,
  agreeWaitlistTerms: false
})

/**
 * Reservation form state management composable
 */
export function useReservationForm(): UseReservationFormReturn {
  const formData = ref<ReservationData>(getInitialFormData())
  const errors = ref<ValidationErrors>({})
  const validators = useFormValidation()

  /**
   * Validate all form fields
   * Returns validation errors object
   */
  const validate = (): ValidationErrors => {
    const newErrors: ValidationErrors = {}

    // Validate personal information (required fields)
    if (!validators.validateRequired(formData.value.firstName)) {
      newErrors.firstName = validators.getRequiredError('名', formData.value.firstName)
    }

    if (!validators.validateRequired(formData.value.lastName)) {
      newErrors.lastName = validators.getRequiredError('姓', formData.value.lastName)
    }

    if (!validators.validateRequired(formData.value.title)) {
      newErrors.title = validators.getRequiredError('稱謂', formData.value.title)
    }

    // Email validation
    const emailError = validators.getEmailError(formData.value.email)
    if (emailError) {
      newErrors.email = emailError
    }

    // Phone validation
    const phoneError = validators.getPhoneError(formData.value.phoneNumber)
    if (phoneError) {
      newErrors.phoneNumber = phoneError
    }

    // Payment method validation
    if (!validators.validateRequired(formData.value.paymentMethod)) {
      newErrors.paymentMethod = '請選擇付款方式'
    }

    // Agreement validations (all required)
    if (!formData.value.agreePaymentTerms) {
      newErrors.agreePaymentTerms = '請同意付款規範及個人資料蒐集政策'
    }

    if (!formData.value.agreePrivacyPolicy) {
      newErrors.agreePrivacyPolicy = '請同意訂位注意事項和隱私權政策'
    }

    if (!formData.value.agreeWaitlistTerms) {
      newErrors.agreeWaitlistTerms = '請同意候補注意事項'
    }

    // Update errors ref
    errors.value = newErrors

    return newErrors
  }

  /**
   * Check if form is valid (no errors)
   */
  const isValid = (): boolean => {
    const validationErrors = validate()
    return Object.keys(validationErrors).length === 0
  }

  /**
   * Reset form data and errors to initial state
   */
  const reset = (): void => {
    formData.value = getInitialFormData()
    errors.value = {}
  }

  return {
    formData,
    errors,
    validate,
    reset,
    isValid
  }
}
