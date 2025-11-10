/**
 * Reservation Data Types
 *
 * TypeScript interfaces and types for restaurant booking feature
 */

/**
 * Payment method options
 */
export type PaymentMethod = 'cash' | 'credit_card' | 'bank_transfer' | 'paypal'

/**
 * Guest count information
 */
export interface GuestCount {
  adults: number
  children: number
  infants: number
  seniors: number
}

/**
 * Booking details
 */
export interface BookingDetails {
  date: string
  time: string
  guests: GuestCount
}

/**
 * Restaurant information
 */
export interface RestaurantInfo {
  name: string
  address: string
  phone: string
  imageUrl?: string
}

/**
 * Complete booking information
 */
export interface BookingInfo {
  restaurant: RestaurantInfo
  booking: BookingDetails
}

/**
 * Complete reservation form data
 */
export interface ReservationData {
  // Personal information
  firstName: string
  lastName: string
  title: string | number | null
  gender: string | number | null
  birthday: string | null

  // Contact information
  countryCode: string | number | null
  phoneNumber: string
  email: string

  // Preferences
  saveInfo: boolean

  // Special requests
  purposes: string[]
  notes: string

  // Payment
  paymentMethod: PaymentMethod | null

  // Agreements
  agreePaymentTerms: boolean
  agreePrivacyPolicy: boolean
  agreeWaitlistTerms: boolean
}

/**
 * Validation errors for form fields
 */
export interface ValidationErrors {
  firstName?: string
  lastName?: string
  title?: string
  gender?: string
  birthday?: string
  countryCode?: string
  phoneNumber?: string
  email?: string
  purposes?: string
  notes?: string
  paymentMethod?: string
  agreePaymentTerms?: string
  agreePrivacyPolicy?: string
  agreeWaitlistTerms?: string
}
