import { pwa } from './app/config/pwa'
import { appDescription } from './app/constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxt/eslint',
  ],

  css: [
    '~/assets/css/tailwind.css',
    // Syncfusion EJ2 Material Theme
    '@syncfusion/ej2-base/styles/material.css',
    '@syncfusion/ej2-icons/styles/material.css',
    '@syncfusion/ej2-buttons/styles/material.css',
    '@syncfusion/ej2-inputs/styles/material.css',
    '@syncfusion/ej2-dropdowns/styles/material.css',
    '@syncfusion/ej2-splitbuttons/styles/material.css',
    '@syncfusion/ej2-calendars/styles/material.css',
    '@syncfusion/ej2-layouts/styles/material.css',
    '@syncfusion/ej2-popups/styles/material.css',
    '@syncfusion/ej2-lists/styles/material.css',
    '@syncfusion/ej2-navigations/styles/material.css',
    '@syncfusion/ej2-notifications/styles/material.css',
    '@syncfusion/ej2-grids/styles/material.css',
    '@syncfusion/ej2-treegrid/styles/material.css',
    '@syncfusion/ej2-pivotview/styles/material.css',
    '@syncfusion/ej2-kanban/styles/material.css',
    '@syncfusion/ej2-spreadsheet/styles/material.css',
    '@syncfusion/ej2-schedule/styles/material.css',
    '@syncfusion/ej2-gantt/styles/material.css',
    '@syncfusion/ej2-richtexteditor/styles/material.css',
    '@syncfusion/ej2-documenteditor/styles/material.css',
    '@syncfusion/ej2-image-editor/styles/material.css',
    '@syncfusion/ej2-inplace-editor/styles/material.css',
    '@syncfusion/ej2-filemanager/styles/material.css',
    '@syncfusion/ej2-pdfviewer/styles/material.css',
    '@syncfusion/ej2-diagrams/styles/material.css',
    '@syncfusion/ej2-interactive-chat/styles/material.css',
    '@syncfusion/ej2-ribbon/styles/material.css',
  ],

  vite: {
    css: {
      postcss: {
        plugins: [
          require('@tailwindcss/postcss'),
        ],
      },
    },
  },

  devtools: {
    enabled: true,
  },

  devServer: {
    port: 4567,
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  pwa,
})
