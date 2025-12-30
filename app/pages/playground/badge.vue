<script setup lang="ts">
definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Badge Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-notifications</code>
      </p>
      <p class="text-gray-500 text-sm mt-2">
        Note: Badge is a CSS-only component, no JavaScript required
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Badges -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Basic Badges
        </h2>
        <p class="text-gray-600 mb-6">Simple badge with text content</p>
        <div class="flex flex-wrap gap-4 items-center">
          <span class="e-badge">Default</span>
          <span class="e-badge e-badge-primary">Primary</span>
          <span class="e-badge e-badge-secondary">Secondary</span>
          <span class="e-badge e-badge-success">Success</span>
          <span class="e-badge e-badge-danger">Danger</span>
          <span class="e-badge e-badge-warning">Warning</span>
          <span class="e-badge e-badge-info">Info</span>
          <span class="e-badge e-badge-light">Light</span>
          <span class="e-badge e-badge-dark">Dark</span>
        </div>
      </section>

      <!-- 2. Pill Badges -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          2. Pill Badges
        </h2>
        <p class="text-gray-600 mb-6">
          Class: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-badge-pill</code>
        </p>
        <div class="flex flex-wrap gap-4 items-center">
          <span class="e-badge e-badge-primary e-badge-pill">Primary</span>
          <span class="e-badge e-badge-secondary e-badge-pill">Secondary</span>
          <span class="e-badge e-badge-success e-badge-pill">Success</span>
          <span class="e-badge e-badge-danger e-badge-pill">Danger</span>
          <span class="e-badge e-badge-warning e-badge-pill">Warning</span>
          <span class="e-badge e-badge-info e-badge-pill">Info</span>
        </div>
      </section>

      <!-- 3. Notification Badges -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          3. Notification Badges
        </h2>
        <p class="text-gray-600 mb-6">
          Class: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-badge-notification</code>
        </p>
        <div class="flex flex-wrap gap-8 items-center">
          <div class="relative inline-flex">
            <button class="e-btn">Inbox</button>
            <span class="e-badge e-badge-primary e-badge-notification">8</span>
          </div>
          <div class="relative inline-flex">
            <button class="e-btn">Messages</button>
            <span class="e-badge e-badge-danger e-badge-notification">99+</span>
          </div>
          <div class="relative inline-flex">
            <button class="e-btn e-primary">Notifications</button>
            <span class="e-badge e-badge-warning e-badge-notification">5</span>
          </div>
        </div>
      </section>

      <!-- 4. Dot Badges -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          4. Dot Badges
        </h2>
        <p class="text-gray-600 mb-6">
          Class: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-badge-dot</code>
        </p>
        <div class="flex flex-wrap gap-8 items-center">
          <div class="relative inline-flex">
            <button class="e-btn">Updates</button>
            <span class="e-badge e-badge-primary e-badge-dot"></span>
          </div>
          <div class="relative inline-flex">
            <button class="e-btn">Alerts</button>
            <span class="e-badge e-badge-danger e-badge-dot"></span>
          </div>
          <div class="relative inline-flex">
            <span class="text-lg">Settings</span>
            <span class="e-badge e-badge-success e-badge-dot"></span>
          </div>
        </div>
      </section>

      <!-- 5. Badge with Icons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          5. Badge with Icons
        </h2>
        <p class="text-gray-600 mb-6">Combine badges with icon elements</p>
        <div class="flex flex-wrap gap-8 items-center">
          <div class="relative inline-flex">
            <span class="e-icons e-bell text-2xl"></span>
            <span class="e-badge e-badge-danger e-badge-notification">3</span>
          </div>
          <div class="relative inline-flex">
            <span class="e-icons e-comment-show text-2xl"></span>
            <span class="e-badge e-badge-primary e-badge-notification">12</span>
          </div>
          <div class="relative inline-flex">
            <span class="e-icons e-people text-2xl"></span>
            <span class="e-badge e-badge-success e-badge-dot"></span>
          </div>
        </div>
      </section>

      <!-- 6. Overlap Badges -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          6. Overlap Badges
        </h2>
        <p class="text-gray-600 mb-6">
          Class: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-badge-overlap</code>
        </p>
        <div class="flex flex-wrap gap-8 items-center">
          <div class="relative inline-flex">
            <div class="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span class="e-icons e-image text-xl"></span>
            </div>
            <span class="e-badge e-badge-danger e-badge-overlap e-badge-notification">NEW</span>
          </div>
          <div class="relative inline-flex">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span class="text-blue-600 font-semibold">JD</span>
            </div>
            <span class="e-badge e-badge-success e-badge-overlap e-badge-dot"></span>
          </div>
        </div>
      </section>

      <!-- 7. Badge inside List -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          7. Badge inside List
        </h2>
        <p class="text-gray-600 mb-6">Common usage pattern with list items</p>
        <ul class="max-w-md divide-y divide-gray-200">
          <li class="flex justify-between items-center py-3 px-4 hover:bg-gray-50">
            <span>Inbox</span>
            <span class="e-badge e-badge-primary e-badge-pill">42</span>
          </li>
          <li class="flex justify-between items-center py-3 px-4 hover:bg-gray-50">
            <span>Starred</span>
            <span class="e-badge e-badge-warning e-badge-pill">12</span>
          </li>
          <li class="flex justify-between items-center py-3 px-4 hover:bg-gray-50">
            <span>Sent</span>
            <span class="e-badge e-badge-info e-badge-pill">8</span>
          </li>
          <li class="flex justify-between items-center py-3 px-4 hover:bg-gray-50">
            <span>Drafts</span>
            <span class="e-badge e-badge-secondary e-badge-pill">3</span>
          </li>
          <li class="flex justify-between items-center py-3 px-4 hover:bg-gray-50">
            <span>Spam</span>
            <span class="e-badge e-badge-danger e-badge-pill">99+</span>
          </li>
        </ul>
      </section>

      <!-- 8. Badge Positions -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          8. Custom Badge Positions
        </h2>
        <p class="text-gray-600 mb-6">Position badges using CSS</p>
        <div class="flex flex-wrap gap-12 items-center py-4">
          <div class="relative inline-flex">
            <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
              <span class="e-icons e-folder text-2xl"></span>
            </div>
            <span class="e-badge e-badge-primary" style="position: absolute; top: -8px; right: -8px;">5</span>
          </div>
          <div class="relative inline-flex">
            <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
              <span class="e-icons e-folder text-2xl"></span>
            </div>
            <span class="e-badge e-badge-danger" style="position: absolute; bottom: -8px; right: -8px;">3</span>
          </div>
          <div class="relative inline-flex">
            <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
              <span class="e-icons e-folder text-2xl"></span>
            </div>
            <span class="e-badge e-badge-success" style="position: absolute; top: -8px; left: -8px;">NEW</span>
          </div>
        </div>
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          9. CSS Classes Reference
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Example
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge</td>
                <td class="px-4 py-3 text-sm text-gray-600">Base badge class (required)</td>
                <td class="px-4 py-3"><span class="e-badge">Badge</span></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-primary</td>
                <td class="px-4 py-3 text-sm text-gray-600">Primary color variant</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-primary">Primary</span></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-pill</td>
                <td class="px-4 py-3 text-sm text-gray-600">Rounded pill shape</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-primary e-badge-pill">Pill</span></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-notification</td>
                <td class="px-4 py-3 text-sm text-gray-600">Notification badge style</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-danger e-badge-notification">9</span></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-dot</td>
                <td class="px-4 py-3 text-sm text-gray-600">Small dot indicator</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-success e-badge-dot"></span></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-overlap</td>
                <td class="px-4 py-3 text-sm text-gray-600">Position badge to overlap parent</td>
                <td class="px-4 py-3 text-sm text-gray-600">Used with notification/dot</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 10. Color Variants -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          10. Color Variants
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Preview
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-primary</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-primary">Primary</span></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-secondary</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-secondary">Secondary</span></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-success</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-success">Success</span></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-danger</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-danger">Danger</span></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-warning</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-warning">Warning</span></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-info</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-info">Info</span></td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-light</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-light">Light</span></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-badge-dark</td>
                <td class="px-4 py-3"><span class="e-badge e-badge-dark">Dark</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-vue-notifications/styles/material.css';

/* Badge positioning helper */
.relative {
  position: relative;
}
</style>
