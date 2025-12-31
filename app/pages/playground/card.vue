<script setup lang="ts">
definePageMeta({
  layout: 'playground'
})
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Card Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-layouts</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Card -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Card</h2>
        <p class="text-gray-600 mb-6">Simple card with content only</p>
        <div class="e-card" style="width: 300px;">
          <div class="e-card-content">
            This is a basic card with simple text content. Cards are flexible containers that can hold various types of content.
          </div>
        </div>
      </section>

      <!-- 2. Card with Header -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Card with Header</h2>
        <p class="text-gray-600 mb-6">
          CSS classes: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-card-header</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-card-header-title</code>
        </p>
        <div class="e-card" style="width: 300px;">
          <div class="e-card-header">
            <div class="e-card-header-caption">
              <div class="e-card-header-title">Card Title</div>
              <div class="e-card-sub-title">Subtitle here</div>
            </div>
          </div>
          <div class="e-card-content">
            Card content goes here. You can add any text or HTML elements inside this section.
          </div>
        </div>
      </section>

      <!-- 3. Card with Image -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Card with Image</h2>
        <p class="text-gray-600 mb-6">
          CSS class: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-card-image</code>
        </p>
        <div class="flex gap-4 flex-wrap">
          <div class="e-card" style="width: 300px;">
            <div class="e-card-image" style="height: 180px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);" />
            <div class="e-card-header">
              <div class="e-card-header-caption">
                <div class="e-card-header-title">Gradient Background</div>
              </div>
            </div>
            <div class="e-card-content">
              Beautiful gradient image placeholder for your card.
            </div>
          </div>
          <div class="e-card" style="width: 300px;">
            <div class="e-card-image" style="height: 180px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);" />
            <div class="e-card-header">
              <div class="e-card-header-caption">
                <div class="e-card-header-title">Pink Gradient</div>
              </div>
            </div>
            <div class="e-card-content">
              Another example with different gradient colors.
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Card with Header Image -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Card with Avatar</h2>
        <p class="text-gray-600 mb-6">
          CSS class: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-card-header-image</code>
        </p>
        <div class="flex gap-4 flex-wrap">
          <div class="e-card" style="width: 300px;">
            <div class="e-card-header">
              <div class="e-card-header-image e-card-corner" style="background: #4F46E5; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                JD
              </div>
              <div class="e-card-header-caption">
                <div class="e-card-header-title">John Doe</div>
                <div class="e-card-sub-title">Software Engineer</div>
              </div>
            </div>
            <div class="e-card-content">
              John is a full-stack developer with expertise in Vue.js and Node.js.
            </div>
          </div>
          <div class="e-card" style="width: 300px;">
            <div class="e-card-header">
              <div class="e-card-header-image e-card-corner" style="background: #10B981; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                AS
              </div>
              <div class="e-card-header-caption">
                <div class="e-card-header-title">Alice Smith</div>
                <div class="e-card-sub-title">Product Manager</div>
              </div>
            </div>
            <div class="e-card-content">
              Alice leads product strategy and works closely with engineering teams.
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Card with Actions -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Card with Actions</h2>
        <p class="text-gray-600 mb-6">
          CSS class: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-card-actions</code>
        </p>
        <div class="flex gap-4 flex-wrap">
          <div class="e-card" style="width: 300px;">
            <div class="e-card-header">
              <div class="e-card-header-caption">
                <div class="e-card-header-title">Action Card</div>
              </div>
            </div>
            <div class="e-card-content">
              This card has action buttons at the bottom.
            </div>
            <div class="e-card-actions">
              <button class="e-btn e-flat e-primary">Accept</button>
              <button class="e-btn e-flat">Decline</button>
            </div>
          </div>
          <div class="e-card" style="width: 300px;">
            <div class="e-card-header">
              <div class="e-card-header-caption">
                <div class="e-card-header-title">Icon Actions</div>
              </div>
            </div>
            <div class="e-card-content">
              Actions can also be icons.
            </div>
            <div class="e-card-actions e-card-vertical">
              <button class="e-btn e-flat e-icon-btn">
                <span class="e-btn-icon e-icons e-like" />
              </button>
              <button class="e-btn e-flat e-icon-btn">
                <span class="e-btn-icon e-icons e-share" />
              </button>
              <button class="e-btn e-flat e-icon-btn">
                <span class="e-btn-icon e-icons e-bookmark" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Horizontal Card -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Horizontal Card</h2>
        <p class="text-gray-600 mb-6">
          CSS class: <code class="text-sm bg-gray-100 px-2 py-1 rounded">e-card-horizontal</code>
        </p>
        <div class="e-card e-card-horizontal" style="width: 500px;">
          <div class="e-card-stacked">
            <div class="e-card-header">
              <div class="e-card-header-caption">
                <div class="e-card-header-title">Horizontal Layout</div>
                <div class="e-card-sub-title">Image on the side</div>
              </div>
            </div>
            <div class="e-card-content">
              This card uses a horizontal layout where the image appears beside the content rather than above it.
            </div>
            <div class="e-card-actions">
              <button class="e-btn e-flat e-primary">Learn More</button>
            </div>
          </div>
          <div style="width: 150px; min-height: 150px; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);" />
        </div>
      </section>

      <!-- 7. Card Styles -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Card Styles</h2>
        <p class="text-gray-600 mb-6">Different card appearances</p>
        <div class="flex gap-4 flex-wrap">
          <div class="e-card" style="width: 250px;">
            <div class="e-card-header" style="background: #4F46E5; color: white;">
              <div class="e-card-header-caption">
                <div class="e-card-header-title" style="color: white;">Primary Card</div>
              </div>
            </div>
            <div class="e-card-content">
              Card with colored header.
            </div>
          </div>
          <div class="e-card" style="width: 250px; border-left: 4px solid #10B981;">
            <div class="e-card-header">
              <div class="e-card-header-caption">
                <div class="e-card-header-title">Success Accent</div>
              </div>
            </div>
            <div class="e-card-content">
              Card with left border accent.
            </div>
          </div>
          <div class="e-card" style="width: 250px; background: #FEF3C7;">
            <div class="e-card-header">
              <div class="e-card-header-caption">
                <div class="e-card-header-title">Warning Background</div>
              </div>
            </div>
            <div class="e-card-content">
              Card with background color.
            </div>
          </div>
        </div>
      </section>

      <!-- 8. Card Grid -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Card Grid Layout</h2>
        <p class="text-gray-600 mb-6">Multiple cards in a grid</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="i in 6" :key="i" class="e-card">
            <div class="e-card-image" :style="{ height: '120px', background: `hsl(${i * 50}, 70%, 60%)` }" />
            <div class="e-card-header">
              <div class="e-card-header-caption">
                <div class="e-card-header-title">Card {{ i }}</div>
              </div>
            </div>
            <div class="e-card-content">
              This is card number {{ i }} in the grid layout.
            </div>
          </div>
        </div>
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-card</td>
                <td class="px-4 py-3 text-sm text-gray-600">Root card container</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-card-header</td>
                <td class="px-4 py-3 text-sm text-gray-600">Card header section</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-card-header-caption</td>
                <td class="px-4 py-3 text-sm text-gray-600">Header text container</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-card-header-title</td>
                <td class="px-4 py-3 text-sm text-gray-600">Card title text</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-card-sub-title</td>
                <td class="px-4 py-3 text-sm text-gray-600">Card subtitle text</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-card-header-image</td>
                <td class="px-4 py-3 text-sm text-gray-600">Avatar/icon in header</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-card-content</td>
                <td class="px-4 py-3 text-sm text-gray-600">Main card content</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-card-image</td>
                <td class="px-4 py-3 text-sm text-gray-600">Full-width image section</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-card-actions</td>
                <td class="px-4 py-3 text-sm text-gray-600">Action buttons container</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">e-card-horizontal</td>
                <td class="px-4 py-3 text-sm text-gray-600">Horizontal card layout</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.e-card {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}
</style>
