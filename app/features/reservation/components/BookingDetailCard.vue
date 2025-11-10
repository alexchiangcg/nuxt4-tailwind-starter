<script setup lang="ts">
import BaseButton from '~/shared/components/form/BaseButton.vue'
import type { BookingInfo } from '../types/reservation.types'

interface Props {
  bookingInfo: BookingInfo
}

interface Emits {
  (e: 'back'): void
  (e: 'waitlist'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Format guest count string
const formatGuestCount = () => {
  const { adults, children, infants, seniors } = props.bookingInfo.booking.guests
  return `${adults + children + infants + seniors}位 ( ${adults}大人, ${children}小孩, ${infants}嬰兒, ${seniors}樂齡 )`
}

const handleBack = () => {
  emit('back')
}

const handleWaitlist = () => {
  emit('waitlist')
}
</script>

<template>
  <div
    class="bg-[var(--surface,#ffffff)] border border-[rgba(0,0,0,0.1)] border-solid relative rounded-[10px] w-full"
    data-name="BookingDetailCard"
  >
    <div class="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
      <!-- Restaurant Image -->
      <div class="h-[180px] relative shrink-0 w-full">
        <div class="absolute inset-0 bg-[#d9d9d9]">
          <img
            v-if="bookingInfo.restaurant.imageUrl"
            :src="bookingInfo.restaurant.imageUrl"
            :alt="bookingInfo.restaurant.name"
            class="absolute max-w-none object-center object-cover size-full"
          />
        </div>
      </div>

      <!-- Text Content -->
      <div class="box-border content-stretch flex flex-col gap-6 items-start p-4 relative shrink-0 w-full">
        <!-- Restaurant Info Section -->
        <div class="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
          <!-- Restaurant Details -->
          <div class="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
            <!-- Restaurant Name -->
            <div class="content-stretch flex items-center relative shrink-0 w-full">
              <p class="basis-0 font-['Noto_Sans_CJK_TC:Medium',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-2xl text-[color:var(--on-surface,#0f172a)]">
                {{ bookingInfo.restaurant.name }}
              </p>
            </div>

            <!-- Address -->
            <div class="content-stretch flex gap-2 items-start relative shrink-0 w-full">
              <!-- Location Icon -->
              <div class="box-border content-stretch flex gap-[10px] items-center justify-center px-1 py-[2px] relative shrink-0 size-6">
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.54785 0.75C3.67785 0.75 0.547852 3.88 0.547852 7.75C0.547852 12.688 7.54785 18.75 7.54785 18.75C7.54785 18.75 14.5479 12.688 14.5479 7.75C14.5479 3.88 11.4179 0.75 7.54785 0.75ZM7.54785 10C6.30285 10 5.29785 8.995 5.29785 7.75C5.29785 6.505 6.30285 5.5 7.54785 5.5C8.79285 5.5 9.79785 6.505 9.79785 7.75C9.79785 8.995 8.79285 10 7.54785 10Z" fill="#0F172A"/>
                </svg>
              </div>
              <p class="[text-decoration-skip-ink:none] [text-underline-position:from-font] basis-0 decoration-solid font-['Noto_Sans_CJK_TC:Medium',sans-serif] grow leading-6 min-h-px min-w-px not-italic relative shrink-0 text-base text-[color:var(--on-surface-variant,#3c4a5b)] underline">
                {{ bookingInfo.restaurant.address }}
              </p>
            </div>

            <!-- Phone -->
            <div class="content-stretch flex gap-2 items-center relative shrink-0 w-full">
              <!-- Phone Icon -->
              <div class="box-border content-stretch flex gap-[10px] items-center justify-center p-[3px] relative shrink-0 size-6">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.41585 7.26501C4.74085 9.87001 6.87585 12.005 9.48085 13.33L11.5158 11.295C11.7558 11.055 12.1058 10.97 12.4158 11.07C13.4058 11.385 14.4658 11.555 15.5459 11.555C15.9609 11.555 16.2959 11.89 16.2959 12.305V15.805C16.2959 16.22 15.9609 16.555 15.5459 16.555C7.26085 16.555 0.545849 9.84001 0.545849 1.55501C0.545849 1.14001 0.880849 0.805008 1.29585 0.805008H4.79585C5.21085 0.805008 5.54585 1.14001 5.54585 1.55501C5.54585 2.64001 5.71585 3.69501 6.03085 4.68501C6.12585 4.99501 6.04585 5.34001 5.79585 5.58501L3.41585 7.26501Z" fill="#0F172A"/>
                </svg>
              </div>
              <p class="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-6 not-italic relative shrink-0 text-base text-[color:var(--on-surface-variant,#3c4a5b)] text-nowrap underline whitespace-pre">
                {{ bookingInfo.restaurant.phone }}
              </p>
            </div>
          </div>

          <!-- Divider Line -->
          <div class="h-0 relative shrink-0 w-full border-t border-[var(--outline-variant,#d7dae0)]" />

          <!-- Booking Info -->
          <div class="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
            <!-- Date -->
            <div class="content-stretch flex gap-2 items-center relative shrink-0 w-full">
              <!-- Calendar Icon -->
              <div class="box-border content-stretch flex gap-[10px] items-center justify-center px-[3px] py-[2px] relative shrink-0 size-6">
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7979 2.11499H13.9229V0.364990H12.1729V2.11499H4.67285V0.364990H2.92285V2.11499H2.04785C1.08535 2.11499 0.306348 2.90249 0.306348 3.86499L0.297852 17.615C0.297852 18.5775 1.08535 19.365 2.04785 19.365H14.7979C15.7604 19.365 16.5479 18.5775 16.5479 17.615V3.86499C16.5479 2.90249 15.7604 2.11499 14.7979 2.11499ZM14.7979 17.615H2.04785V7.36499H14.7979V17.615ZM3.79785 9.11499H8.42285V13.74H3.79785V9.11499Z" fill="#3C4A5B"/>
                </svg>
              </div>
              <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-normal not-italic relative shrink-0 text-base text-[color:var(--on-surface-variant,#3c4a5b)] text-nowrap whitespace-pre">
                {{ bookingInfo.booking.date }}
              </p>
            </div>

            <!-- Time -->
            <div class="content-stretch flex gap-2 items-center relative shrink-0 w-full">
              <!-- Clock Icon -->
              <div class="box-border content-stretch flex gap-[10px] items-center justify-center p-[2px] relative shrink-0 size-6">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.54785 0.75C4.57785 0.75 0.547852 4.79 0.547852 9.75C0.547852 14.71 4.57785 18.75 9.54785 18.75C14.5279 18.75 18.5479 14.71 18.5479 9.75C18.5479 4.79 14.5279 0.75 9.54785 0.75ZM9.54785 16.875C5.61285 16.875 2.42285 13.685 2.42285 9.75C2.42285 5.815 5.61285 2.625 9.54785 2.625C13.4829 2.625 16.6729 5.815 16.6729 9.75C16.6729 13.685 13.4829 16.875 9.54785 16.875Z" fill="#3C4A5B"/>
                  <path d="M10.0479 5.5H8.92285V10.5L13.2979 13.1625L13.9229 12.2125L10.0479 9.96875V5.5Z" fill="#3C4A5B"/>
                </svg>
              </div>
              <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-normal not-italic relative shrink-0 text-base text-[color:var(--on-surface-variant,#3c4a5b)] text-nowrap whitespace-pre">
                {{ bookingInfo.booking.time }}
              </p>
            </div>

            <!-- Guests -->
            <div class="content-stretch flex gap-2 items-center relative shrink-0 w-full">
              <!-- Person Icon -->
              <div class="box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[5px] relative shrink-0 size-6">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.54785 0.866699C5.39285 0.866699 3.64785 2.6117 3.64785 4.7667C3.64785 6.9217 5.39285 8.6667 7.54785 8.6667C9.70285 8.6667 11.4479 6.9217 11.4479 4.7667C11.4479 2.6117 9.70285 0.866699 7.54785 0.866699ZM7.54785 11.2667C4.84285 11.2667 0.0478516 12.6267 0.0478516 15.3317V17.9317H15.0479V15.3317C15.0479 12.6267 10.2529 11.2667 7.54785 11.2667Z" fill="#3C4A5B"/>
                </svg>
              </div>
              <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-normal not-italic relative shrink-0 text-base text-[color:var(--on-surface-variant,#3c4a5b)] text-nowrap whitespace-pre">
                {{ formatGuestCount() }}
              </p>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="content-stretch flex gap-4 items-start relative shrink-0 w-full">
          <BaseButton
            variant="secondary"
            class="h-[50px] w-[100px]"
            @click="handleBack"
          >
            上一步
          </BaseButton>
          <BaseButton
            variant="secondary"
            :disabled="true"
            class="flex-1 h-[50px] bg-[var(--disable,rgba(98,91,113,0.16))] text-[color:var(--outline,#7f8996)]"
          >
            登記候補
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
