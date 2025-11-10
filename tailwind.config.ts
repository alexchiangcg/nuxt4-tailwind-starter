import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue}',
    './layouts/**/*.{js,ts,jsx,tsx,vue}',
    './pages/**/*.{js,ts,jsx,tsx,vue}',
    './plugins/**/*.{js,ts,jsx,tsx,vue}',
    './server/**/*.{js,ts,jsx,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        teal: {
          600: '#0d9488',
          700: '#0f766e',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
