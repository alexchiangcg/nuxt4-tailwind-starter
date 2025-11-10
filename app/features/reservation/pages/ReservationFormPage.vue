<script setup lang="ts">
import { ref } from 'vue'
import ReservationForm from '../components/ReservationForm.vue'
import SpecialRequestsForm from '../components/SpecialRequestsForm.vue'
import PaymentMethodSelector from '../components/PaymentMethodSelector.vue'
import PaymentTermsAgreement from '../components/PaymentTermsAgreement.vue'
import BookingDetailCard from '../components/BookingDetailCard.vue'
import BaseCheckbox from '~/shared/components/form/BaseCheckbox.vue'
import type { BookingInfo, PaymentMethod } from '../types/reservation.types'

// Booking info for the detail card
const bookingInfo = ref<BookingInfo>({
  restaurant: {
    name: '楓雨餐廳',
    address: '台北市中山區林森北路372號2樓',
    phone: '070 1011 8888',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500'
  },
  booking: {
    date: '2025/05/19',
    time: '18:00',
    guests: {
      adults: 4,
      children: 2,
      infants: 1,
      seniors: 1
    }
  }
})

// Payment and agreements
const selectedPaymentMethod = ref<PaymentMethod | null>(null)
const agreePaymentTerms = ref(false)
const agreePrivacyPolicy = ref(false)
const agreeWaitlistTerms = ref(false)

const handleBack = () => {
  console.log('Navigate back')
  // TODO: Implement navigation
}

const handleWaitlist = () => {
  console.log('Submit waitlist registration')
  // TODO: Implement waitlist registration
}

const handlePrivacyPolicyClick = () => {
  console.log('Open privacy policy')
  // TODO: Open privacy policy modal/page
}
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)]">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-[#001d5a] text-white h-20">
      <div class="container mx-auto px-5 h-full flex items-center justify-between">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-1 text-sm">
          <span>德安大酒店</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
          </svg>
          <span>中餐廳</span>
        </div>

        <!-- Navigation -->
        <nav class="flex gap-6 text-sm">
          <a href="#" class="hover:opacity-80">預訂</a>
          <a href="#" class="hover:opacity-80">更多服務</a>
          <a href="#" class="hover:opacity-80">須知管理</a>
          <a href="#" class="hover:opacity-80">繁中</a>
          <a href="#" class="hover:opacity-80">TWD</a>
          <a href="#" class="hover:opacity-80">我的帳戶</a>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-60 py-10">
      <!-- Page Title and Alert -->
      <div class="mb-10">
        <div class="flex items-center gap-2 mb-4">
          <!-- Back Icon -->
          <button class="hover:opacity-80" @click="handleBack">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <h1 class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] text-4xl text-[color:var(--on-surface,#0f172a)]">
            登記候補
          </h1>
        </div>

        <!-- Alert -->
        <div class="bg-[var(--tertiary-container,#fff2c2)] p-2 rounded-lg">
          <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] text-sm text-[color:var(--on-tertiary-container,#2d2000)]">
            若有空位釋出，將依候補順序通知；未候補上者將不另行通知，感謝您的理解。
          </p>
        </div>
      </div>

      <!-- Two Column Layout -->
      <div class="flex gap-8">
        <!-- Left Column: Forms (949px) -->
        <div class="w-[949px] space-y-4">
          <!-- Reservation Form -->
          <ReservationForm />

          <!-- Special Requests Form -->
          <SpecialRequestsForm />

          <!-- Payment Method Selector -->
          <PaymentMethodSelector v-model="selectedPaymentMethod" />

          <!-- Payment Terms Agreement -->
          <PaymentTermsAgreement
            v-model="agreePaymentTerms"
            @link-click="handlePrivacyPolicyClick"
          />

          <!-- Additional Agreement Checkboxes -->
          <div class="space-y-4 px-6">
            <BaseCheckbox
              v-model="agreePrivacyPolicy"
              label="我已閱讀並同意訂位注意事項和隱私權政策"
            />
            <BaseCheckbox
              v-model="agreeWaitlistTerms"
              label="我已閱讀候補注意事項"
            />
          </div>
        </div>

        <!-- Right Column: Booking Detail Card (459px) -->
        <div class="w-[459px]">
          <BookingDetailCard
            :booking-info="bookingInfo"
            @back="handleBack"
            @waitlist="handleWaitlist"
          />
        </div>
      </div>
    </main>
  </div>
</template>
