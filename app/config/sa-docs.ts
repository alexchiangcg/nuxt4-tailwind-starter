export interface SADoc {
  title: string
  route: string
  category?: string
  description?: string
}

export const saDocs: SADoc[] = [
  // 範例文件 - 之後用 Claude CLI 新增更多
  {
    title: '使用者管理模組',
    route: '/docs/user-management',
    category: '核心模組',
    description: '使用者 CRUD、角色權限、狀態管理',
  },
]

export const saCategories = [
  '核心模組',
  '業務模組',
  '系統設定',
]
