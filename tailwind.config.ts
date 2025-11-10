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
        // Figma Design Tokens - Noto Sans CJK TC for Chinese text
        'noto-sans-tc': ['Noto Sans CJK TC', 'sans-serif'],
      },
      colors: {
        teal: {
          600: '#0d9488',
          700: '#0f766e',
        },
        // Figma Design Tokens - Restaurant Booking Feature Colors
        'primary-darker': '#001d5a',
        primary: '#2877ee',
        secondary: '#6a6f7b',
        'tertiary-container': '#fff2c2',
        'tertiary-on-container': '#2d2000',
        background: '#f4f7fe',
        surface: '#ffffff',
        'on-surface': '#0f172a',
        'on-surface-variant': '#3c4a5b',
        'outline-variant': '#d7dae0',
        outline: '#7f8996',
        error: '#f4493e',
        disable: 'rgba(98, 91, 113, 0.16)',
      },
    },
  },
  plugins: [],
} satisfies Config
