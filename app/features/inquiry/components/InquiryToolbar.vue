<template>
  <div class="inquiry-toolbar">
    <!-- 左側：轉訂席單按鈕 -->
    <div class="toolbar-left">
      <ejs-button
        content="轉訂席單"
        cssClass="e-outline convert-button"
        @click="$emit('convert')"
      />
    </div>

    <!-- 右側：模式切換與操作按鈕 -->
    <div class="toolbar-right">
      <!-- 檢視模式狀態標籤 -->
      <div class="flex items-center justify-center gap-1 h-[27px] px-[2px] py-0 border border-[var(--color-view)] rounded-[48px] bg-[var(--color-success-opacity12)] text-[var(--color-view)] text-sm font-normal leading-[18px] tracking-[0.1px] w-[105px]">
        <IconVisibility class="w-[15px] h-[15px]" />
        <span class="font-['Roboto:Regular','Noto_Sans_JP:Regular',sans-serif]">檢視模式</span>
      </div>

      <!-- Icon 按鈕群 -->
      <ejs-button
        cssClass="e-icon-button e-delete-button"
        @click="$emit('delete')"
      >
        <IconDeleteOutline />
      </ejs-button>
      <ejs-button
        cssClass="e-icon-button"
        @click="$emit('copy')"
      >
        <IconContentCopy />
      </ejs-button>
    <ejs-button
        cssClass="e-icon-button"
        @click="$emit('add')"
      >
        <IconAdd />
    </ejs-button>

      <!-- 編輯按鈕 -->
      <ejs-button
        content="編輯"
        cssClass="e-primary-button edit-button"
        @click="toggleMode"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconVisibility from '~icons/material-symbols/visibility-outline'
import IconDeleteOutline from '~icons/material-symbols/delete-outline'
import IconContentCopy from '~icons/material-symbols/content-copy-outline-rounded'
import IconAdd from '~icons/material-symbols/add'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'

interface InquiryToolbarProps {
  mode?: 'view' | 'edit'  // 檢視模式或編輯模式
}

interface InquiryToolbarEmits {
  (e: 'mode-change', mode: 'view' | 'edit'): void  // 模式切換
  (e: 'delete'): void     // 刪除
  (e: 'copy'): void       // 複製
  (e: 'add'): void        // 新增
  (e: 'convert'): void    // 轉訂席單
}

const props = withDefaults(defineProps<InquiryToolbarProps>(), {
  mode: 'view'
})

const emit = defineEmits<InquiryToolbarEmits>()

const toggleMode = () => {
  const newMode = props.mode === 'view' ? 'edit' : 'view'
  emit('mode-change', newMode)
}
</script>

<style scoped>
.inquiry-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background: rgb(var(--color-sf-surface));
  height: auto;
  min-height: 40px;
}

.toolbar-left {
  display: flex;
  gap: 12px;
  align-items: center;
}

.toolbar-right {
  display: flex;
  gap: 12px;
  align-items: center;
}

</style>

<style scoped>
/* 轉訂席單按鈕 - 精確匹配 Figma 設計 */
:deep(.e-btn.e-outline.convert-button) {
  border-color: rgb(var(--color-sf-outline));
  background: transparent;
  color: rgb(var(--color-sf-on-surface));
  height: 40px;
  padding: 10px 16px;
}

:deep(.e-btn.e-outline.convert-button:hover),
:deep(.e-btn.e-outline.convert-button:focus) {
  background: rgba(15, 23, 42, 0.04);
}

/* Icon 按鈕 - 精確匹配 Figma 設計 */
:deep(.e-btn.e-icon-button) {
  width: 40px;
  height: 40px;
  border-color: rgb(var(--color-sf-primary));
  border-image: none;
  background: transparent;
  display: flex;
  align-items: center;
  box-shadow: none;
  padding: 0;
}

:deep(.e-btn.e-icon-button .e-btn-icon) {
  color: rgb(var(--color-sf-primary));
  width: 20px;
  height: 20px;
  padding: 3px 0;
}

:deep(.e-btn.e-icon-button svg) {
  width: 20px;
  height: 20px;
  color: rgb(var(--color-sf-primary));
  display: block;
}

/* 刪除��鈕特殊顏色 */
:deep(.e-btn.e-delete-button) {
  border-color: rgb(var(--color-sf-danger));
}

:deep(.e-btn.e-delete-button .e-btn-icon) {
  color: rgb(var(--color-sf-danger));
}

:deep(.e-btn.e-delete-button svg) {
  color: rgb(var(--color-sf-danger));
}

/* 編輯按鈕 - 精確匹配 Figma 設計 */
:deep(.e-btn.e-primary-button.edit-button) {
  background: rgb(var(--color-sf-primary));
  border-color: rgb(var(--color-sf-primary));
  color: rgb(var(--color-sf-on-primary));
  height: 40px;
  padding: 10px 16px;
}

/* :deep(.e-btn.e-primary-button.edit-button:hover),
:deep(.e-btn.e-primary-button.edit-button:focus) {
  background: var(--color-sf-primary-darken-opacity-5);
} */
</style>
