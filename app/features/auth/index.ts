// Auth Feature Barrel Exports

export { useAuth } from './composables/useAuth'
export { useAuthStore } from './store/auth.store'
export { authApi } from './api/auth.api'
export type * from './types/auth.types'

// Export pages for routing
export { default as LoginPage } from './pages/LoginPage.vue'
