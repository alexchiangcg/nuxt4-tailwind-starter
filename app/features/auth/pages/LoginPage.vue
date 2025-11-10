<script setup lang="ts">
import LoginForm from '../components/LoginForm.vue'

definePageMeta({
  layout: 'default',
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        登入
      </h1>
      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <LoginForm />
      </div>
    </div>
  </div>
</template>
