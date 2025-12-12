// Barrel exports for inquiry-order feature
// This file serves as the public API for the inquiry-order feature

// Export types
export type * from './types/inquiry-order.types'

// Export mock data
export * from './mock/inquiry-order.mock'

// Export store
export { useInquiryOrderStore } from './store/inquiry-order.store'

// Export composables
export { useInquiryOrder } from './composables/useInquiryOrder'

// Export pages
export { default as InquiryOrderFormPage } from './pages/InquiryOrderFormPage.vue'
export { default as InquiryOrderDetailEditPage } from './pages/InquiryOrderDetailEditPage.vue'

// Export components
export { default as InquiryBasicInfo } from './components/InquiryBasicInfo.vue'
export { default as InquiryCustomerInfo } from './components/InquiryCustomerInfo.vue'
export { default as InquiryBanquetInfo } from './components/InquiryBanquetInfo.vue'
export { default as InquirySupplementInfo } from './components/InquirySupplementInfo.vue'
export { default as InquiryOrderDetailsGrid } from './components/InquiryOrderDetailsGrid.vue'
