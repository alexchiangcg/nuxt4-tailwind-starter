<script setup lang="ts">
import { useAuth } from '../composables/useAuth'

const { login, isLoading } = useAuth()

const email = ref('')
const password = ref('')
const error = ref('')

const handleSubmit = async () => {
  error.value = ''
  try {
    await login({
      email: email.value,
      password: password.value,
    })
    // 登入成功後的處理
    navigateTo('/')
  }
  catch (e) {
    error.value = '登入失敗，請檢查帳號密碼'
  }
}
</script>

<template>
  <form class="max-w-md mx-auto space-y-4" @submit.prevent="handleSubmit">
    <div>
      <label class="block text-sm font-medium mb-2">Email</label>
      <input
        v-model="email"
        type="email"
        required
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
      >
    </div>

    <div>
      <label class="block text-sm font-medium mb-2">密碼</label>
      <input
        v-model="password"
        type="password"
        required
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
      >
    </div>

    <div v-if="error" class="text-red-600 text-sm">
      {{ error }}
    </div>

    <button
      type="submit"
      :disabled="isLoading"
      class="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ isLoading ? '登入中...' : '登入' }}
    </button>
  </form>
</template>
