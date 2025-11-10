<script setup lang="ts">
import { ref } from 'vue'
import BaseInput from '~/shared/components/form/BaseInput.vue'
import BaseDropdown from '~/shared/components/form/BaseDropdown.vue'
import BaseRadioGroup from '~/shared/components/form/BaseRadioGroup.vue'
import BaseDatePicker from '~/shared/components/form/BaseDatePicker.vue'
import BaseCheckbox from '~/shared/components/form/BaseCheckbox.vue'

interface ReservationFormData {
  firstName: string
  lastName: string
  title: string | number | null
  gender: string | number | null
  birthday: string | null
  countryCode: string | number | null
  phoneNumber: string
  email: string
  saveInfo: boolean
}

const formData = ref<ReservationFormData>({
  firstName: '',
  lastName: '',
  title: null,
  gender: null,
  birthday: null,
  countryCode: '+886',
  phoneNumber: '',
  email: '',
  saveInfo: false
})

const titleOptions = [
  { label: '先生', value: 'mr' },
  { label: '女士', value: 'ms' },
  { label: '小姐', value: 'miss' }
]

const genderOptions = [
  { label: '男生', value: 'male' },
  { label: '女生', value: 'female' },
  { label: '多元性別', value: 'other' },
  { label: '保密', value: 'private' }
]

const countryCodeOptions = [
  { label: '+886', value: '+886' },
  { label: '+1', value: '+1' },
  { label: '+86', value: '+86' },
  { label: '+81', value: '+81' },
  { label: '+82', value: '+82' }
]

defineExpose({
  formData
})
</script>

<template>
  <div
    class="bg-[var(--surface,#ffffff)] box-border content-stretch flex flex-col gap-4 items-start overflow-clip p-6 relative rounded-[10px] w-full"
    data-name="ReservationForm"
  >
    <!-- Title -->
    <p class="font-['Noto_Sans_CJK_TC:Medium',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-2xl text-[color:var(--on-surface,#0f172a)] w-[min-content]">
      預訂人資料
    </p>

    <!-- First Name and Last Name -->
    <div class="content-stretch flex gap-6 items-start relative shrink-0 w-full">
      <BaseInput
        v-model="formData.lastName"
        label="姓"
        placeholder="請輸入"
        :required="true"
        class="basis-0 grow min-w-[150px]"
      />
      <BaseInput
        v-model="formData.firstName"
        label="名"
        placeholder="請輸入"
        :required="true"
        class="basis-0 grow min-w-[150px]"
      />
    </div>

    <!-- Title and Gender -->
    <div class="content-stretch flex gap-6 items-center relative shrink-0 w-full">
      <BaseDropdown
        v-model="formData.title"
        :options="titleOptions"
        label="稱謂"
        placeholder="請選擇"
        :required="true"
        class="basis-0 grow min-w-[150px]"
      />
      <div class="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <div class="basis-0 box-border content-center flex flex-wrap gap-6 grow h-full items-center min-h-px min-w-px pb-0 pt-5 px-0 relative shrink-0">
          <BaseRadioGroup
            v-model="formData.gender"
            :options="genderOptions"
            name="gender"
            orientation="horizontal"
          />
        </div>
      </div>
    </div>

    <!-- Birthday -->
    <BaseDatePicker
      v-model="formData.birthday"
      label="生日"
      placeholder="請選擇日期"
    />

    <!-- Phone Number -->
    <div class="content-stretch flex gap-4 items-start relative shrink-0 w-full">
      <div class="flex flex-row items-end self-stretch">
        <BaseDropdown
          v-model="formData.countryCode"
          :options="countryCodeOptions"
          label="手機號碼"
          :required="true"
          class="w-[159px] min-w-[150px]"
        />
      </div>
      <div class="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start min-h-px min-w-[150px] pb-0 pt-8 px-0 relative shrink-0">
        <BaseInput
          v-model="formData.phoneNumber"
          placeholder="請輸入常用手機號碼"
        />
      </div>
    </div>

    <!-- Email -->
    <BaseInput
      v-model="formData.email"
      label="信箱"
      placeholder="請輸入常用信箱"
      :required="true"
      class="min-w-[150px]"
    />

    <!-- Save Info Checkbox -->
    <BaseCheckbox
      v-model="formData.saveInfo"
      label="將訂位人資訊儲存在此瀏覽器"
    />
  </div>
</template>
