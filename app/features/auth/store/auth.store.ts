// Auth Store (Pinia)
import { defineStore } from 'pinia'
import type { AuthState, LoginCredentials } from '../types/auth.types'
import { authApi } from '../api/auth.api'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  }),

  actions: {
    async login(credentials: LoginCredentials) {
      this.isLoading = true
      try {
        const user = await authApi.login(credentials)
        this.user = user
        this.isAuthenticated = true
      }
      catch (error) {
        console.error('Login failed:', error)
        throw error
      }
      finally {
        this.isLoading = false
      }
    },

    async logout() {
      this.isLoading = true
      try {
        await authApi.logout()
        this.user = null
        this.isAuthenticated = false
      }
      catch (error) {
        console.error('Logout failed:', error)
        throw error
      }
      finally {
        this.isLoading = false
      }
    },
  },
})
