// Auth API 呼叫
import type { LoginCredentials, User } from '../types/auth.types'

export const authApi = {
  /**
   * 登入
   */
  async login(credentials: LoginCredentials): Promise<User> {
    // TODO: 實作實際的 API 呼叫
    // const response = await $fetch('/api/auth/login', {
    //   method: 'POST',
    //   body: credentials,
    // })
    // return response

    // 範例：模擬 API 回應
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          email: credentials.email,
          name: 'Demo User',
        })
      }, 1000)
    })
  },

  /**
   * 登出
   */
  async logout(): Promise<void> {
    // TODO: 實作實際的 API 呼叫
    return new Promise((resolve) => {
      setTimeout(resolve, 500)
    })
  },
}
