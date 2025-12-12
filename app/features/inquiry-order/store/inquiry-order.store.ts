/**
 * 初洽單管理 - Pinia Store
 * 集中管理初洽單主檔和活動明細的狀態
 */

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { InquiryOrder, InquiryOrderDetail } from '../types/inquiry-order.types'

export const useInquiryOrderStore = defineStore('inquiry-order', () => {
  // State
  const inquiryOrder = ref<InquiryOrder>({
    id: undefined,
    inquiryOrderNo: '',
    status: '',
    inquireDate: new Date(),
    inquireContactPerson: '',
    relatedProject: '',
    reservationNumber: '',
    manualNumber: '',
    leadSource: [],
    customerName: '',
    contactPerson: '',
    contactPhone: '',
    contactEmail: '',
    city: '',
    district: '',
    category: '',
    banquetName: '',
    budgetRange: '',
    expectedBanquetDateStart: null,
    expectedBanquetDateEnd: null,
    venueVisitDateTime: null,
    venueVisitSales: '',
    visitedCompetitorVenue: [],
    venueDecisionFactor: [],
    bookedCompetitorVenue: [],
    rejectionReason: [],
    contactNotes: '',
    createdBy: '',
    createdDate: null,
    modifiedBy: '',
    modifiedDate: null
  })

  const inquiryOrderDetails = ref<InquiryOrderDetail[]>([])
  const currentDetail = ref<InquiryOrderDetail | null>(null)
  const isLoading = ref(false)
  const errors = ref<string[]>([])

  // Getters
  const hasDetails = computed(() => inquiryOrderDetails.value.length > 0)
  const isValid = computed(() => errors.value.length === 0)

  // Actions
  function setInquiryOrder(data: InquiryOrder) {
    inquiryOrder.value = data
  }

  function setInquiryOrderDetails(data: InquiryOrderDetail[]) {
    inquiryOrderDetails.value = data
  }

  function setCurrentDetail(data: InquiryOrderDetail | null) {
    currentDetail.value = data
  }

  function addDetail(detail: InquiryOrderDetail) {
    inquiryOrderDetails.value.push(detail)
  }

  function updateDetail(detail: InquiryOrderDetail) {
    const index = inquiryOrderDetails.value.findIndex(d => d.id === detail.id)
    if (index !== -1) {
      inquiryOrderDetails.value[index] = detail
    }
  }

  function deleteDetail(id: string) {
    inquiryOrderDetails.value = inquiryOrderDetails.value.filter(d => d.id !== id)
  }

  function resetStore() {
    inquiryOrder.value = {
      id: undefined,
      inquiryOrderNo: '',
      status: '',
      inquireDate: new Date(),
      inquireContactPerson: '',
      relatedProject: '',
      reservationNumber: '',
      manualNumber: '',
      leadSource: [],
      customerName: '',
      contactPerson: '',
      contactPhone: '',
      contactEmail: '',
      city: '',
      district: '',
      category: '',
      banquetName: '',
      budgetRange: '',
      expectedBanquetDateStart: null,
      expectedBanquetDateEnd: null,
      venueVisitDateTime: null,
      venueVisitSales: '',
      visitedCompetitorVenue: [],
      venueDecisionFactor: [],
      bookedCompetitorVenue: [],
      rejectionReason: [],
      contactNotes: '',
      createdBy: '',
      createdDate: null,
      modifiedBy: '',
      modifiedDate: null
    }
    inquiryOrderDetails.value = []
    currentDetail.value = null
    errors.value = []
  }

  return {
    // State
    inquiryOrder,
    inquiryOrderDetails,
    currentDetail,
    isLoading,
    errors,
    // Getters
    hasDetails,
    isValid,
    // Actions
    setInquiryOrder,
    setInquiryOrderDetails,
    setCurrentDetail,
    addDetail,
    updateDetail,
    deleteDetail,
    resetStore
  }
})
