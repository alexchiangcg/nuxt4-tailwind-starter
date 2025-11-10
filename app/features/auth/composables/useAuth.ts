// Auth Composable
import { useAuthStore } from '../store/auth.store'
import type { LoginCredentials } from '../types/auth.types'

export function useAuth() {
  const authStore = useAuthStore()

  const login = async (credentials: LoginCredentials) => {
    await authStore.login(credentials)
  }

  const logout = async () => {
    await authStore.logout()
  }

  return {
    user: computed(() => authStore.user),
    isAuthenticated: computed(() => authStore.isAuthenticated),
    isLoading: computed(() => authStore.isLoading),
    login,
    logout,
  }
}
