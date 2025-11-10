<script setup lang="ts">
import { ref } from 'vue'
import BookingDetailCard from '~/features/reservation/components/BookingDetailCard.vue'
import type { BookingInfo } from '~/features/reservation/types/reservation.types'

const bookingInfo1: BookingInfo = {
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
}

const bookingInfo2: BookingInfo = {
  restaurant: {
    name: '楓雨餐廳',
    address: '台北市中山區林森北路372號2樓台北市中山區林森北路372號2樓',
    phone: '070 1011 8888',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500'
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
}

const bookingInfo3: BookingInfo = {
  restaurant: {
    name: '楓雨餐廳',
    address: '台北市中山區林森北路372號2樓',
    phone: '070 1011 8888',
    imageUrl: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=500'
  },
  booking: {
    date: '2025/05/19',
    time: '18:00',
    guests: {
      adults: 2,
      children: 0,
      infants: 0,
      seniors: 0
    }
  }
}

const handleBack = () => {
  console.log('Back button clicked')
}

const handleWaitlist = () => {
  console.log('Waitlist button clicked')
}

definePageMeta({
  title: 'BookingDetailCard Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        BookingDetailCard Component Test
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- State 1: Default with Sample Data -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">1. Default State</h2>
          <p class="text-sm text-gray-600">標準預訂詳情卡片</p>
          <div class="w-[459px]">
            <BookingDetailCard
              :booking-info="bookingInfo1"
              @back="handleBack"
              @waitlist="handleWaitlist"
            />
          </div>
        </div>

        <!-- State 2: Long Address (Text Wrapping) -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">2. Long Address</h2>
          <p class="text-sm text-gray-600">地址較長時的文字換行</p>
          <div class="w-[459px]">
            <BookingDetailCard
              :booking-info="bookingInfo2"
              @back="handleBack"
              @waitlist="handleWaitlist"
            />
          </div>
        </div>

        <!-- State 3: Different Guest Count -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold">3. Different Guest Count</h2>
          <p class="text-sm text-gray-600">不同的訂位人數（2大人）</p>
          <div class="w-[459px]">
            <BookingDetailCard
              :booking-info="bookingInfo3"
              @back="handleBack"
              @waitlist="handleWaitlist"
            />
          </div>
        </div>
      </div>

      <!-- Full Width Test -->
      <div class="mt-12 space-y-4">
        <h2 class="text-xl font-semibold">4. Interactive Test (Fixed Width 459px)</h2>
        <p class="text-sm text-gray-600">測試按鈕點擊功能（打開 console 查看）</p>
        <div class="w-[459px]">
          <BookingDetailCard
            :booking-info="bookingInfo1"
            @back="handleBack"
            @waitlist="handleWaitlist"
          />
        </div>
        <div class="p-4 bg-gray-50 rounded">
          <p class="font-medium">Instructions:</p>
          <ul class="text-sm list-disc list-inside space-y-1">
            <li>點擊「上一步」按鈕（應該有 console log）</li>
            <li>「登記候補」按鈕為 disabled 狀態（無法點擊）</li>
            <li>檢查卡片寬度是否為 459px</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
