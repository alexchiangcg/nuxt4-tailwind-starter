<template>
  <div class="inquiry-toolbar">
    <!-- 左側：轉訂席單按鈕 -->
    <div class="toolbar-left">
      <ejs-button
        content="轉訂席單"
        cssClass="e-outline"
        @click="$emit('convert')"
      />
    </div>

    <!-- 右側：模式切換與操作按鈕 -->
    <div class="toolbar-right">
      <!-- 檢視模式狀態標籤 -->
      <div class="mode-indicator">
        <span class="iconify material-symbols--visibility-outline"></span>
        <span>檢視模式</span>
      </div>

      <!-- Icon 按鈕群 -->
      <ejs-button
        iconCss="iconify material-symbols--delete-outline"
        cssClass="e-icon-btn e-delete-btn"
        @click="$emit('delete')"
      />
      <ejs-button
        iconCss="iconify material-symbols--content-copy"
        cssClass="e-icon-btn"
        @click="$emit('copy')"
      />
      <ejs-button
        iconCss="iconify material-symbols--add"
        cssClass="e-icon-btn"
        @click="$emit('add')"
      />

      <!-- 編輯按鈕 -->
      <ejs-button
        content="編輯"
        :isPrimary="true"
        @click="toggleMode"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
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

/* 按鈕基礎樣式 - 精確匹配 Figma */
:deep(.e-btn) {
  height: 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.24px;
  padding: 10px 16px;
}

/* Outline 按鈕 */
:deep(.e-outline) {
  border: 1px solid rgb(var(--color-sf-outline));
  background: transparent;
  color: rgb(var(--color-sf-on-surface));
}

/* Primary 按鈕 */
:deep(.e-primary) {
  background: rgb(var(--color-sf-primary));
  border: 1px solid rgb(var(--color-sf-primary));
  color: rgb(var(--color-sf-on-primary));
}

/* Icon 按鈕 */
:deep(.e-icon-btn) {
  width: 40px;
  height: 40px;
  min-width: 40px;
  padding: 10px;
  border: 1px solid rgb(var(--color-sf-primary));
  border-radius: 4px;
  background: transparent;
}

:deep(.e-icon-btn .e-btn-icon) {
  font-size: 20px;
  color: rgb(var(--color-sf-primary));
  margin: 0;
}

/* 模式指示器樣式 */
.mode-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 10px 16px;
  border: 1px solid rgb(var(--color-sf-success));
  border-radius: 4px;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.24px;
  color: rgb(var(--color-sf-success));
}

.mode-indicator .iconify {
  font-size: 20px;
}

/* 刪除按鈕特殊樣式 */
:deep(.e-delete-btn) {
  border-color: rgb(var(--color-sf-danger)) !important;
}

:deep(.e-delete-btn .e-btn-icon) {
  color: rgb(var(--color-sf-danger)) !important;
}
</style>
