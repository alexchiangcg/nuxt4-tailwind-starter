<script setup lang="ts">
import { ref } from 'vue'
import BaseCheckbox from '~/shared/components/form/BaseCheckbox.vue'

interface Props {
  modelValue: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'linkClick'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleCheckboxChange = (value: boolean) => {
  emit('update:modelValue', value)
}

const handleLinkClick = (event: Event) => {
  event.preventDefault()
  emit('linkClick')
}

defineExpose({
  modelValue: props.modelValue
})
</script>

<template>
  <div
    class="bg-[var(--surface,#ffffff)] box-border content-stretch flex flex-col gap-4 items-start overflow-clip p-6 relative rounded-[10px] w-full"
    data-name="PaymentTermsAgreement"
  >
    <!-- Title -->
    <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-2xl text-[color:var(--on-surface,#0f172a)] w-[min-content]">
      付款規範
    </p>

    <!-- Scrollable Terms Content Box -->
    <div class="bg-[var(--background,#f4f7fe)] border-2 border-[var(--outline-variant,#d7dae0)] border-solid h-[250px] relative rounded-lg shrink-0 w-full overflow-hidden">
      <div class="box-border content-stretch flex gap-1 h-[250px] items-start overflow-y-auto p-4 relative rounded-[inherit] w-full custom-scrollbar">
        <!-- Terms Text Content -->
        <div class="basis-0 font-['Noto_Sans_CJK_TC:Regular',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-base text-black pr-3">
          <p class="mb-0">
            １. 本網站上所公佈的價格，依各促銷專案的差異，價格可能有所不同，您在網頁上所看到的價格，皆為該房型的定價，只有在線上訂房系統中確認付款階段的價格，才是實際售價。
          </p>
          <p class="mb-0">&nbsp;</p>
          <p class="mb-0">
            ２. 為維護您信用卡交易安全，本飯店規範線上訂房者應與辦理住宿（check in）者資料相符，並於辦理住宿的同時提供與信用卡相同之身分證（或護照），本飯店將爲您做身分查核與登記。
          </p>
          <p class="mb-0">&nbsp;</p>
          <p class="mb-0">
            3. 使用本線上訂房系統完成訂房者，即同意支付該項產品總金額，並於網站上完成之信用卡付款，將立即由您提供之信用卡帳號扣款。請在確認付款前查看清楚。若對訂定之價格有所疑問，請致電詢問相關細節後再行訂房。取消網路訂單所衍生的扣款手續費，須由訂房者自行負擔。
          </p>
          <p class="mb-0">&nbsp;</p>
          <p class="mb-0">
            4. 本飯店線上訂房訂金之收取，依照觀光局頒佈《定型化契約》規定，收取「本筆訂單房價總額的30%」做為訂金。並依法令規定比率進行取消訂房之扣款：
          </p>
          <p class="mb-0">&nbsp;</p>
          <p class="mb-0">★旅客住宿日當日取消訂房扣預付訂金金額100% 。</p>
          <p class="mb-0">★旅客於住宿日前1日內取消訂房扣房價預付訂金金額80%。</p>
          <p class="mb-0">★旅客於住宿日前2-3日內取消訂房扣房價預付訂金金額70%。</p>
          <p class="mb-0">★旅客於住宿日前4-6日內取消訂房扣房價預付訂金金額60%。</p>
          <p class="mb-0">★旅客於住宿日前7-9日內取消訂房扣房價預付訂金金額50%。</p>
          <p class="mb-0">★旅客於住宿日前10-13日內取消訂房扣房價預付訂金金額30%。</p>
          <p class="mb-0">★旅客於住宿日前14日前(含14日)取消訂房扣房價預付訂金金額0%。</p>
          <p>★本飯店若有限時、限量訂房，房價及內容將依飯店專案的不同而有所調整，實際訂金扣款比例依專案內容公佈為準。</p>
        </div>
      </div>
    </div>

    <!-- Agreement Checkbox -->
    <div class="content-stretch flex gap-2 items-center relative shrink-0">
      <BaseCheckbox
        :model-value="modelValue"
        @update:model-value="handleCheckboxChange"
      />
      <div class="content-stretch flex gap-1 items-center justify-center relative shrink-0">
        <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-normal not-italic relative shrink-0 text-base text-[color:var(--secondary-secondary,#6a6f7b)] text-nowrap whitespace-pre">
          我同意付款規範及<a
            href="#"
            class="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#2877ee] underline cursor-pointer hover:text-[#1e5bb8]"
            @click="handleLinkClick"
          >個人資料蒐集政策</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom Scrollbar Styling */
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
  border-left: 1px solid var(--disable, rgba(98, 91, 113, 0.16));
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--outline-variant, #d7dae0);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #b8bcc4;
}

/* Firefox scrollbar */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: var(--outline-variant, #d7dae0) transparent;
}
</style>
