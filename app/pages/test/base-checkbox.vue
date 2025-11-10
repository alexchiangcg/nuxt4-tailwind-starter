<script setup lang="ts">
import { ref } from 'vue'
import BaseCheckbox from '~/shared/components/form/BaseCheckbox.vue'

const unchecked = ref(false)
const checked = ref(true)
const disabledUnchecked = ref(false)
const disabledChecked = ref(true)
const agreement1 = ref(false)
const agreement2 = ref(false)

definePageMeta({
  title: 'BaseCheckbox Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        BaseCheckbox Component Test
      </h1>

      <div class="space-y-8">
        <!-- State 1: Unchecked -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">1. Unchecked</h2>
          <BaseCheckbox
            v-model="unchecked"
            label="未勾選的核取方塊"
          />
        </div>

        <!-- State 2: Checked -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">2. Checked</h2>
          <BaseCheckbox
            v-model="checked"
            label="已勾選的核取方塊"
          />
        </div>

        <!-- State 3: Disabled Unchecked -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">3. Disabled Unchecked</h2>
          <BaseCheckbox
            v-model="disabledUnchecked"
            label="停用且未勾選"
            :disabled="true"
          />
        </div>

        <!-- State 4: Disabled Checked -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">4. Disabled Checked</h2>
          <BaseCheckbox
            v-model="disabledChecked"
            label="停用但已勾選"
            :disabled="true"
          />
        </div>

        <!-- Without label -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">5. Without Label</h2>
          <BaseCheckbox v-model="checked" />
        </div>

        <!-- Real-world example: Agreements -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">6. Real-world Example (Agreements)</h2>
          <div class="space-y-3">
            <BaseCheckbox
              v-model="agreement1"
              label="我同意付款規範及個人資料蒐集政策"
            />
            <BaseCheckbox
              v-model="agreement2"
              label="我已閱讀並同意訂位注意事項和隱私權政策"
            />
          </div>
          <div class="mt-4 text-sm text-gray-600">
            Agreement 1: {{ agreement1 ? '已同意' : '未同意' }}<br>
            Agreement 2: {{ agreement2 ? '已同意' : '未同意' }}
          </div>
        </div>

        <!-- Interactive test -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">7. Interactive Test (Click to toggle)</h2>
          <div class="space-y-3">
            <BaseCheckbox
              v-model="unchecked"
              label="點擊我來切換狀態"
            />
            <p class="text-sm text-gray-600">
              當前狀態: {{ unchecked ? '✅ 已勾選' : '⬜ 未勾選' }}
            </p>
          </div>
        </div>

        <!-- Keyboard navigation test -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">8. Keyboard Navigation (Tab + Space)</h2>
          <div class="space-y-3">
            <BaseCheckbox
              v-model="checked"
              label="使用 Tab 鍵聚焦，Space 鍵切換"
            />
            <p class="text-sm text-gray-500">
              測試鍵盤無障礙功能：按 Tab 鍵聚焦此核取方塊，然後按 Space 鍵切換狀態
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
