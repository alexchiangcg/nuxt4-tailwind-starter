// @ts-check
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  eslintPluginPrettierRecommended,
  {
    files: ['app/**/*.{js,mjs,ts,vue}'],
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js 內建模組
            'external', // npm 安裝的套件
            'internal', // 專案內部 import（別名）
            'parent', // `../` 相對路徑
            'sibling', // `./` 同層路徑
            'index', // `index.js`
            'object', // 解構 import
            'type' // TypeScript 類型 import
          ],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      'vue/no-multiple-template-root': 'off',
      'vue/one-component-per-file': 'off',
      'vue/no-v-html': 'off',
      'multiline-ternary': 'off'
    }
  },
  {
    files: ['app.vue', 'error.vue', 'app/pages/**/*.vue', 'app/layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['app.vue', 'layouts/**/*.vue'],
    rules: {
      'vue/no-multiple-template-root': 'error'
    }
  }
)
