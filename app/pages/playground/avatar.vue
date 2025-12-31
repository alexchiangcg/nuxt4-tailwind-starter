<script setup lang="ts">
definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Avatar Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-layouts</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Avatar Sizes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Avatar Sizes</h2>
        <p class="text-gray-600 mb-6">
          CSS classes: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-avatar-xsmall</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-avatar-small</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-avatar-large</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-avatar-xlarge</code>
        </p>
        <div class="flex items-end gap-4">
          <div class="text-center">
            <span class="e-avatar e-avatar-xsmall">XS</span>
            <p class="text-xs text-gray-500 mt-2">xsmall</p>
          </div>
          <div class="text-center">
            <span class="e-avatar e-avatar-small">SM</span>
            <p class="text-xs text-gray-500 mt-2">small</p>
          </div>
          <div class="text-center">
            <span class="e-avatar">MD</span>
            <p class="text-xs text-gray-500 mt-2">default</p>
          </div>
          <div class="text-center">
            <span class="e-avatar e-avatar-large">LG</span>
            <p class="text-xs text-gray-500 mt-2">large</p>
          </div>
          <div class="text-center">
            <span class="e-avatar e-avatar-xlarge">XL</span>
            <p class="text-xs text-gray-500 mt-2">xlarge</p>
          </div>
        </div>
      </section>

      <!-- 2. Circle Avatar -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Circle Avatar</h2>
        <p class="text-gray-600 mb-6">
          CSS class: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-avatar-circle</code>
        </p>
        <div class="flex items-end gap-4">
          <div class="text-center">
            <span class="e-avatar e-avatar-xsmall e-avatar-circle">XS</span>
            <p class="text-xs text-gray-500 mt-2">xsmall</p>
          </div>
          <div class="text-center">
            <span class="e-avatar e-avatar-small e-avatar-circle">SM</span>
            <p class="text-xs text-gray-500 mt-2">small</p>
          </div>
          <div class="text-center">
            <span class="e-avatar e-avatar-circle">MD</span>
            <p class="text-xs text-gray-500 mt-2">default</p>
          </div>
          <div class="text-center">
            <span class="e-avatar e-avatar-large e-avatar-circle">LG</span>
            <p class="text-xs text-gray-500 mt-2">large</p>
          </div>
          <div class="text-center">
            <span class="e-avatar e-avatar-xlarge e-avatar-circle">XL</span>
            <p class="text-xs text-gray-500 mt-2">xlarge</p>
          </div>
        </div>
      </section>

      <!-- 3. Avatar with Initials -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Avatar with Initials</h2>
        <p class="text-gray-600 mb-6">Display user initials inside avatar</p>
        <div class="flex items-center gap-4 flex-wrap">
          <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #4F46E5;">JD</span>
          <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #10B981;">AS</span>
          <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #F59E0B;">MK</span>
          <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #EF4444;">RW</span>
          <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #8B5CF6;">TL</span>
        </div>
      </section>

      <!-- 4. Avatar with Icons -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Avatar with Icons</h2>
        <p class="text-gray-600 mb-6">Use Syncfusion icons inside avatar</p>
        <div class="flex items-center gap-4 flex-wrap">
          <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #6366F1;">
            <span class="e-icons e-user" style="font-size: 24px;" />
          </span>
          <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #14B8A6;">
            <span class="e-icons e-people" style="font-size: 24px;" />
          </span>
          <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #F97316;">
            <span class="e-icons e-settings" style="font-size: 24px;" />
          </span>
          <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #EC4899;">
            <span class="e-icons e-home" style="font-size: 24px;" />
          </span>
        </div>
      </section>

      <!-- 5. Avatar with Images -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Avatar with Images</h2>
        <p class="text-gray-600 mb-6">Display profile images in avatar</p>
        <div class="flex items-end gap-4 flex-wrap">
          <div class="text-center">
            <div class="e-avatar e-avatar-xsmall e-avatar-circle" style="background-image: url('https://picsum.photos/seed/user1/100'); background-size: cover;" />
            <p class="text-xs text-gray-500 mt-2">xsmall</p>
          </div>
          <div class="text-center">
            <div class="e-avatar e-avatar-small e-avatar-circle" style="background-image: url('https://picsum.photos/seed/user2/100'); background-size: cover;" />
            <p class="text-xs text-gray-500 mt-2">small</p>
          </div>
          <div class="text-center">
            <div class="e-avatar e-avatar-circle" style="background-image: url('https://picsum.photos/seed/user3/100'); background-size: cover;" />
            <p class="text-xs text-gray-500 mt-2">default</p>
          </div>
          <div class="text-center">
            <div class="e-avatar e-avatar-large e-avatar-circle" style="background-image: url('https://picsum.photos/seed/user4/100'); background-size: cover;" />
            <p class="text-xs text-gray-500 mt-2">large</p>
          </div>
          <div class="text-center">
            <div class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-image: url('https://picsum.photos/seed/user5/100'); background-size: cover;" />
            <p class="text-xs text-gray-500 mt-2">xlarge</p>
          </div>
        </div>
      </section>

      <!-- 6. Avatar Group -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Avatar Group</h2>
        <p class="text-gray-600 mb-6">Stack multiple avatars together</p>
        <div class="flex items-center">
          <div class="flex -space-x-3">
            <span class="e-avatar e-avatar-large e-avatar-circle border-2 border-white" style="background-color: #4F46E5;">JD</span>
            <span class="e-avatar e-avatar-large e-avatar-circle border-2 border-white" style="background-color: #10B981;">AS</span>
            <span class="e-avatar e-avatar-large e-avatar-circle border-2 border-white" style="background-color: #F59E0B;">MK</span>
            <span class="e-avatar e-avatar-large e-avatar-circle border-2 border-white" style="background-color: #EF4444;">RW</span>
            <span class="e-avatar e-avatar-large e-avatar-circle border-2 border-white" style="background-color: #6B7280;">+5</span>
          </div>
        </div>
      </section>

      <!-- 7. Avatar with Badge -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Avatar with Status Badge</h2>
        <p class="text-gray-600 mb-6">Combine avatar with badge for status indicators</p>
        <div class="flex items-center gap-8 flex-wrap">
          <div class="relative inline-block">
            <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #4F46E5;">JD</span>
            <span class="e-badge e-badge-success e-badge-overlap e-badge-dot" style="position: absolute; bottom: 2px; right: 2px;" />
          </div>
          <div class="relative inline-block">
            <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #10B981;">AS</span>
            <span class="e-badge e-badge-warning e-badge-overlap e-badge-dot" style="position: absolute; bottom: 2px; right: 2px;" />
          </div>
          <div class="relative inline-block">
            <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #F59E0B;">MK</span>
            <span class="e-badge e-badge-danger e-badge-overlap e-badge-dot" style="position: absolute; bottom: 2px; right: 2px;" />
          </div>
          <div class="relative inline-block">
            <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #6B7280;">RW</span>
            <span class="e-badge e-badge-secondary e-badge-overlap e-badge-dot" style="position: absolute; bottom: 2px; right: 2px;" />
          </div>
        </div>
      </section>

      <!-- 8. Avatar with Notification -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Avatar with Notification Count</h2>
        <p class="text-gray-600 mb-6">Show notification count on avatar</p>
        <div class="flex items-center gap-8 flex-wrap">
          <div class="relative inline-block">
            <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #4F46E5;">
              <span class="e-icons e-comment-show" style="font-size: 24px;" />
            </span>
            <span class="e-badge e-badge-primary e-badge-overlap e-badge-notification" style="position: absolute; top: -5px; right: -5px;">3</span>
          </div>
          <div class="relative inline-block">
            <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #10B981;">
              <span class="e-icons e-mail" style="font-size: 24px;" />
            </span>
            <span class="e-badge e-badge-danger e-badge-overlap e-badge-notification" style="position: absolute; top: -5px; right: -5px;">12</span>
          </div>
          <div class="relative inline-block">
            <span class="e-avatar e-avatar-xlarge e-avatar-circle" style="background-color: #F59E0B;">
              <span class="e-icons e-bell" style="font-size: 24px;" />
            </span>
            <span class="e-badge e-badge-info e-badge-overlap e-badge-notification" style="position: absolute; top: -5px; right: -5px;">99+</span>
          </div>
        </div>
      </section>

      <!-- 9. Custom Colors -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. Custom Background Colors</h2>
        <p class="text-gray-600 mb-6">Apply custom background colors to avatars</p>
        <div class="flex items-center gap-4 flex-wrap">
          <span class="e-avatar e-avatar-large e-avatar-circle" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">AB</span>
          <span class="e-avatar e-avatar-large e-avatar-circle" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">CD</span>
          <span class="e-avatar e-avatar-large e-avatar-circle" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">EF</span>
          <span class="e-avatar e-avatar-large e-avatar-circle" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">GH</span>
          <span class="e-avatar e-avatar-large e-avatar-circle" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">IJ</span>
        </div>
      </section>

      <!-- 10. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">10. API Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">CSS Class</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-avatar</td>
                <td class="px-4 py-3 text-sm text-gray-600">Base avatar class (required)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-avatar-circle</td>
                <td class="px-4 py-3 text-sm text-gray-600">Circular avatar shape</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-avatar-xsmall</td>
                <td class="px-4 py-3 text-sm text-gray-600">Extra small size (16px)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-avatar-small</td>
                <td class="px-4 py-3 text-sm text-gray-600">Small size (24px)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-avatar-large</td>
                <td class="px-4 py-3 text-sm text-gray-600">Large size (40px)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-avatar-xlarge</td>
                <td class="px-4 py-3 text-sm text-gray-600">Extra large size (50px)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.e-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
