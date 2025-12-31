<script setup lang="ts">
import { AppBarComponent as EjsAppbar } from '@syncfusion/ej2-vue-navigations'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { DropDownButtonComponent as EjsDropdownbutton } from '@syncfusion/ej2-vue-splitbuttons'
import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs'

definePageMeta({
  layout: 'playground'
})

// 下拉選單項目
const profileItems = [
  { text: 'Profile' },
  { text: 'Settings' },
  { separator: true },
  { text: 'Sign Out' }
]

const moreItems = [
  { text: 'Help' },
  { text: 'About' },
  { text: 'Contact Us' }
]
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">AppBar Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-navigations</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Default AppBar -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Default AppBar
        </h2>
        <p class="text-gray-600 mb-6">Basic AppBar with navigation and actions</p>
        <div class="border rounded overflow-hidden">
          <ejs-appbar color-mode="Primary">
            <ejs-button css-class="e-inherit" icon-css="e-icons e-menu"></ejs-button>
            <span class="ml-3 font-semibold">Application</span>
            <div class="e-appbar-spacer"></div>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-search"></ejs-button>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-notification"></ejs-button>
            <ejs-dropdownbutton css-class="e-inherit" :items="profileItems" icon-css="e-icons e-user"></ejs-dropdownbutton>
          </ejs-appbar>
        </div>
      </section>

      <!-- 2. Regular Mode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Regular Mode
        </h2>
        <p class="text-gray-600 mb-6">Standard height AppBar (default)</p>
        <div class="border rounded overflow-hidden">
          <ejs-appbar color-mode="Primary" mode="Regular">
            <ejs-button css-class="e-inherit" icon-css="e-icons e-menu"></ejs-button>
            <span class="ml-3 font-semibold">Regular AppBar</span>
            <div class="e-appbar-spacer"></div>
            <ejs-button css-class="e-inherit">Home</ejs-button>
            <ejs-button css-class="e-inherit">Products</ejs-button>
            <ejs-button css-class="e-inherit">About</ejs-button>
          </ejs-appbar>
        </div>
      </section>

      <!-- 3. Dense Mode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Dense Mode
        </h2>
        <p class="text-gray-600 mb-6">Compact height AppBar for more screen space</p>
        <div class="border rounded overflow-hidden">
          <ejs-appbar color-mode="Primary" mode="Dense">
            <ejs-button css-class="e-inherit" icon-css="e-icons e-menu"></ejs-button>
            <span class="ml-3 font-semibold text-sm">Dense AppBar</span>
            <div class="e-appbar-spacer"></div>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-search"></ejs-button>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-settings"></ejs-button>
          </ejs-appbar>
        </div>
      </section>

      <!-- 4. Prominent Mode -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Prominent Mode
        </h2>
        <p class="text-gray-600 mb-6">Larger height AppBar for prominent branding</p>
        <div class="border rounded overflow-hidden">
          <ejs-appbar color-mode="Primary" mode="Prominent" css-class="prominent-appbar">
            <ejs-button css-class="e-inherit" icon-css="e-icons e-menu"></ejs-button>
            <div class="e-appbar-spacer"></div>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-search"></ejs-button>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-more-vertical"></ejs-button>
          </ejs-appbar>
          <div class="prominent-title">Prominent AppBar</div>
        </div>
      </section>

      <!-- 5. Color Modes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Color Modes
        </h2>
        <p class="text-gray-600 mb-6">Different color themes for AppBar</p>
        <div class="space-y-4">
          <!-- Light -->
          <div class="border rounded overflow-hidden">
            <ejs-appbar color-mode="Light">
              <ejs-button css-class="e-inherit" icon-css="e-icons e-menu"></ejs-button>
              <span class="ml-3 font-semibold">Light Mode</span>
              <div class="e-appbar-spacer"></div>
              <ejs-button css-class="e-inherit">Action</ejs-button>
            </ejs-appbar>
          </div>
          <!-- Dark -->
          <div class="border rounded overflow-hidden">
            <ejs-appbar color-mode="Dark">
              <ejs-button css-class="e-inherit" icon-css="e-icons e-menu"></ejs-button>
              <span class="ml-3 font-semibold">Dark Mode</span>
              <div class="e-appbar-spacer"></div>
              <ejs-button css-class="e-inherit">Action</ejs-button>
            </ejs-appbar>
          </div>
          <!-- Primary -->
          <div class="border rounded overflow-hidden">
            <ejs-appbar color-mode="Primary">
              <ejs-button css-class="e-inherit" icon-css="e-icons e-menu"></ejs-button>
              <span class="ml-3 font-semibold">Primary Mode</span>
              <div class="e-appbar-spacer"></div>
              <ejs-button css-class="e-inherit">Action</ejs-button>
            </ejs-appbar>
          </div>
          <!-- Inherit -->
          <div class="border rounded overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
            <ejs-appbar color-mode="Inherit">
              <ejs-button css-class="e-inherit" icon-css="e-icons e-menu"></ejs-button>
              <span class="ml-3 font-semibold text-white">Inherit Mode (Custom Background)</span>
              <div class="e-appbar-spacer"></div>
              <ejs-button css-class="e-inherit">Action</ejs-button>
            </ejs-appbar>
          </div>
        </div>
      </section>

      <!-- 6. With Search Box -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. With Search Box
        </h2>
        <p class="text-gray-600 mb-6">AppBar integrated with search functionality</p>
        <div class="border rounded overflow-hidden">
          <ejs-appbar color-mode="Primary">
            <ejs-button css-class="e-inherit" icon-css="e-icons e-menu"></ejs-button>
            <span class="ml-3 font-semibold">Search App</span>
            <div class="e-appbar-spacer"></div>
            <div class="search-container">
              <ejs-textbox
                placeholder="Search..."
                css-class="search-input"
              />
            </div>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-user"></ejs-button>
          </ejs-appbar>
        </div>
      </section>

      <!-- 7. Bottom AppBar -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Bottom AppBar Style
        </h2>
        <p class="text-gray-600 mb-6">AppBar designed for bottom navigation</p>
        <div class="border rounded overflow-hidden">
          <div class="bg-gray-100 h-40 flex items-center justify-center text-gray-500">
            Content Area
          </div>
          <ejs-appbar color-mode="Primary" mode="Dense">
            <ejs-button css-class="e-inherit" icon-css="e-icons e-home"></ejs-button>
            <div class="e-appbar-spacer"></div>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-search"></ejs-button>
            <div class="e-appbar-spacer"></div>
            <ejs-button css-class="e-inherit e-round fab-button" icon-css="e-icons e-plus"></ejs-button>
            <div class="e-appbar-spacer"></div>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-heart"></ejs-button>
            <div class="e-appbar-spacer"></div>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-user"></ejs-button>
          </ejs-appbar>
        </div>
      </section>

      <!-- 8. Sidebar Toggle AppBar -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. With Navigation Menu
        </h2>
        <p class="text-gray-600 mb-6">AppBar with horizontal navigation links</p>
        <div class="border rounded overflow-hidden">
          <ejs-appbar color-mode="Primary">
            <span class="font-bold text-lg">Brand</span>
            <div class="e-appbar-spacer"></div>
            <ejs-button css-class="e-inherit">Home</ejs-button>
            <ejs-button css-class="e-inherit">Features</ejs-button>
            <ejs-button css-class="e-inherit">Pricing</ejs-button>
            <ejs-button css-class="e-inherit">About</ejs-button>
            <div class="e-appbar-separator"></div>
            <ejs-button css-class="e-inherit" is-primary="true">Sign Up</ejs-button>
          </ejs-appbar>
        </div>
      </section>

      <!-- 9. Complex AppBar -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          9. Complex AppBar
        </h2>
        <p class="text-gray-600 mb-6">Full-featured AppBar with multiple elements</p>
        <div class="border rounded overflow-hidden">
          <ejs-appbar color-mode="Dark">
            <ejs-button css-class="e-inherit" icon-css="e-icons e-menu"></ejs-button>
            <div class="flex items-center ml-3">
              <span class="text-xl font-bold">MyApp</span>
              <span class="ml-2 text-xs bg-blue-500 px-2 py-0.5 rounded">Beta</span>
            </div>
            <div class="e-appbar-spacer"></div>
            <div class="hidden md:flex items-center gap-4">
              <ejs-button css-class="e-inherit">Dashboard</ejs-button>
              <ejs-button css-class="e-inherit">Projects</ejs-button>
              <ejs-button css-class="e-inherit">Team</ejs-button>
            </div>
            <div class="e-appbar-spacer"></div>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-search"></ejs-button>
            <ejs-button css-class="e-inherit" icon-css="e-icons e-notification"></ejs-button>
            <div class="e-appbar-separator"></div>
            <ejs-dropdownbutton css-class="e-inherit" :items="profileItems">
              <span class="flex items-center gap-2">
                <span class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">JD</span>
                <span class="hidden md:inline">John Doe</span>
              </span>
            </ejs-dropdownbutton>
          </ejs-appbar>
        </div>
      </section>

      <!-- 10. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          10. API Reference
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">mode</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Height mode (Regular, Dense, Prominent)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">colorMode</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Color theme (Light, Dark, Primary, Inherit)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">isSticky</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Sticky positioning on scroll</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom CSS class for styling</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-appbar-spacer</td>
                <td class="px-4 py-3 text-sm text-gray-600">class</td>
                <td class="px-4 py-3 text-sm text-gray-600">Flex spacer element to push content</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-appbar-separator</td>
                <td class="px-4 py-3 text-sm text-gray-600">class</td>
                <td class="px-4 py-3 text-sm text-gray-600">Vertical separator between elements</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 11. Mode Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          11. Available Modes
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Regular</span>
            <p class="text-xs text-gray-500 mt-1">Standard height</p>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Dense</span>
            <p class="text-xs text-gray-500 mt-1">Compact height</p>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Prominent</span>
            <p class="text-xs text-gray-500 mt-1">Large height</p>
          </div>
        </div>
        <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-4">Color Modes</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Light</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Dark</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Primary</span>
          </div>
          <div class="p-3 bg-gray-50 rounded text-center">
            <span class="font-mono text-sm">Inherit</span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>

.prominent-appbar {
  min-height: 80px;
}

.prominent-title {
  background: #1976d2;
  color: white;
  padding: 0 16px 16px;
  font-size: 24px;
  font-weight: 600;
}

.search-container {
  width: 200px;
  margin-right: 8px;
}

.search-input.e-textbox {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 4px;
}

.search-input.e-textbox input {
  color: white;
}

.search-input.e-textbox input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.fab-button.e-btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-top: -28px;
  background: #1976d2 !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.e-inherit.e-btn {
  color: inherit;
}
</style>
