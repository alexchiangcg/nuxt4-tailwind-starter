<script setup lang="ts">
import BaseButton from '~/shared/components/form/BaseButton.vue'

definePageMeta({
  title: 'BaseButton Component Test',
  layout: false
})
</script>

<template>
  <div class="min-h-screen bg-[var(--background,#f4f7fe)] p-10">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold mb-8 text-[color:var(--on-surface,#0f172a)]">
        BaseButton Component Test
      </h1>

      <div class="space-y-8">
        <!-- Variants Test -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">1. Variants (Medium Size)</h2>
          <div class="flex flex-wrap gap-4">
            <BaseButton variant="primary">
              Primary Button
            </BaseButton>
            <BaseButton variant="secondary">
              Secondary Button
            </BaseButton>
            <BaseButton variant="outline">
              Outline Button
            </BaseButton>
            <BaseButton variant="ghost">
              Ghost Button
            </BaseButton>
          </div>
        </div>

        <!-- Sizes Test -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">2. Sizes (Primary Variant)</h2>
          <div class="flex flex-wrap items-center gap-4">
            <BaseButton variant="primary" size="sm">
              Small
            </BaseButton>
            <BaseButton variant="primary" size="md">
              Medium
            </BaseButton>
            <BaseButton variant="primary" size="lg">
              Large
            </BaseButton>
          </div>
        </div>

        <!-- Hover States (manual testing) -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">3. Hover States (hover to test)</h2>
          <div class="flex flex-wrap gap-4">
            <BaseButton variant="primary">
              Hover Primary
            </BaseButton>
            <BaseButton variant="secondary">
              Hover Secondary
            </BaseButton>
            <BaseButton variant="outline">
              Hover Outline
            </BaseButton>
          </div>
        </div>

        <!-- Active States (manual testing) -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">4. Active States (click to test)</h2>
          <div class="flex flex-wrap gap-4">
            <BaseButton variant="primary">
              Click Primary
            </BaseButton>
            <BaseButton variant="outline">
              Click Outline
            </BaseButton>
          </div>
        </div>

        <!-- Disabled State -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">5. Disabled State</h2>
          <div class="flex flex-wrap gap-4">
            <BaseButton variant="primary" :disabled="true">
              Disabled Primary
            </BaseButton>
            <BaseButton variant="outline" :disabled="true">
              Disabled Outline
            </BaseButton>
            <BaseButton variant="outline" :disabled="true">
              登記候補
            </BaseButton>
          </div>
        </div>

        <!-- Loading State -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">6. Loading State</h2>
          <div class="flex flex-wrap gap-4">
            <BaseButton variant="primary" :loading="true">
              Loading Primary
            </BaseButton>
            <BaseButton variant="outline" :loading="true">
              Loading Outline
            </BaseButton>
            <BaseButton variant="secondary" :loading="true">
              Loading Secondary
            </BaseButton>
          </div>
        </div>

        <!-- Figma Examples -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">7. Figma Examples</h2>
          <div class="flex flex-wrap gap-4">
            <BaseButton variant="outline">
              上一步
            </BaseButton>
            <BaseButton variant="primary" :disabled="true">
              登記候補
            </BaseButton>
          </div>
        </div>

        <!-- All Variant + Size Combinations -->
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-4">8. All Combinations</h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-sm font-medium mb-2">Primary</h3>
              <div class="flex gap-2">
                <BaseButton variant="primary" size="sm">Small</BaseButton>
                <BaseButton variant="primary" size="md">Medium</BaseButton>
                <BaseButton variant="primary" size="lg">Large</BaseButton>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium mb-2">Secondary</h3>
              <div class="flex gap-2">
                <BaseButton variant="secondary" size="sm">Small</BaseButton>
                <BaseButton variant="secondary" size="md">Medium</BaseButton>
                <BaseButton variant="secondary" size="lg">Large</BaseButton>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium mb-2">Outline</h3>
              <div class="flex gap-2">
                <BaseButton variant="outline" size="sm">Small</BaseButton>
                <BaseButton variant="outline" size="md">Medium</BaseButton>
                <BaseButton variant="outline" size="lg">Large</BaseButton>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium mb-2">Ghost</h3>
              <div class="flex gap-2">
                <BaseButton variant="ghost" size="sm">Small</BaseButton>
                <BaseButton variant="ghost" size="md">Medium</BaseButton>
                <BaseButton variant="ghost" size="lg">Large</BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
