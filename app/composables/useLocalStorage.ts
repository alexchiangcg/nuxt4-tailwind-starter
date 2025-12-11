/**
 * localStorage Composable
 * 提供類型安全的 localStorage 操作
 */

import { ref, watch, type Ref } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T): Ref<T> {
  const data = ref<T>(defaultValue) as Ref<T>

  // 初始化：從 localStorage 讀取
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(key)
    if (stored) {
      try {
        data.value = JSON.parse(stored)
      } catch (e) {
        console.warn(`Failed to parse localStorage key "${key}":`, e)
        data.value = defaultValue
      }
    }
  }

  // 監聽變化並同步到 localStorage
  watch(
    data,
    (newValue) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    },
    { deep: true }
  )

  return data
}

/**
 * 直接操作 localStorage 的工具函數
 */
export const localStorageUtils = {
  get<T>(key: string, defaultValue: T): T {
    if (typeof window === 'undefined') return defaultValue
    const stored = localStorage.getItem(key)
    if (!stored) return defaultValue
    try {
      return JSON.parse(stored)
    } catch {
      return defaultValue
    }
  },

  set<T>(key: string, value: T): void {
    if (typeof window === 'undefined') return
    localStorage.setItem(key, JSON.stringify(value))
  },

  remove(key: string): void {
    if (typeof window === 'undefined') return
    localStorage.removeItem(key)
  },

  clear(): void {
    if (typeof window === 'undefined') return
    localStorage.clear()
  },
}
