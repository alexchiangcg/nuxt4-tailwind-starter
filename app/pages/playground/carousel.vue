<template>
  <div class="playground-page">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Carousel</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Syncfusion Carousel 提供輪播功能，用於展示圖片、卡片或任何內容的滑動切換效果，支援自動播放、導航按鈕和指示器。
      </p>
    </div>

    <!-- Basic Carousel -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">基本輪播</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示基本的圖片輪播功能。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <div class="carousel-container">
          <ejs-carousel :autoPlay="true" :interval="3000" :showPlayButton="true">
            <e-carousel-items>
              <e-carousel-item v-for="(slide, index) in basicSlides" :key="index" :template="'slideTemplate' + index">
              </e-carousel-item>
            </e-carousel-items>
            <template v-for="(slide, index) in basicSlides" :key="'template' + index" v-slot:[`slideTemplate${index}`]>
              <div class="slide-content" :style="{ backgroundColor: slide.bgColor }">
                <div class="slide-inner">
                  <div class="slide-icon">{{ slide.icon }}</div>
                  <h3 class="slide-title">{{ slide.title }}</h3>
                  <p class="slide-desc">{{ slide.description }}</p>
                </div>
              </div>
            </template>
          </ejs-carousel>
        </div>
      </div>
    </section>

    <!-- Image Carousel -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">圖片輪播</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示自然風景圖片的輪播效果。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <div class="carousel-container">
          <ejs-carousel :autoPlay="true" :interval="4000" :buttonsVisibility="'Visible'">
            <e-carousel-items>
              <e-carousel-item v-for="(image, index) in imageSlides" :key="index" :template="'imageTemplate' + index">
              </e-carousel-item>
            </e-carousel-items>
            <template v-for="(image, index) in imageSlides" :key="'imgTemplate' + index" v-slot:[`imageTemplate${index}`]>
              <div class="image-slide">
                <img :src="image.url" :alt="image.alt" class="carousel-image" />
                <div class="image-caption">
                  <h4>{{ image.title }}</h4>
                  <p>{{ image.description }}</p>
                </div>
              </div>
            </template>
          </ejs-carousel>
        </div>
      </div>
    </section>

    <!-- Card Carousel -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">卡片輪播</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">展示產品卡片的輪播效果。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white p-4">
        <div class="carousel-container card-carousel">
          <ejs-carousel :autoPlay="false" :buttonsVisibility="'Visible'" :showIndicators="true">
            <e-carousel-items>
              <e-carousel-item v-for="(card, index) in cardSlides" :key="index" :template="'cardTemplate' + index">
              </e-carousel-item>
            </e-carousel-items>
            <template v-for="(card, index) in cardSlides" :key="'cardTpl' + index" v-slot:[`cardTemplate${index}`]>
              <div class="card-slide">
                <div class="product-card">
                  <div class="product-icon" :style="{ backgroundColor: card.color }">{{ card.icon }}</div>
                  <h4 class="product-name">{{ card.name }}</h4>
                  <p class="product-desc">{{ card.description }}</p>
                  <div class="product-price">NT$ {{ card.price.toLocaleString() }}</div>
                  <button class="product-btn">加入購物車</button>
                </div>
              </div>
            </template>
          </ejs-carousel>
        </div>
      </div>
    </section>

    <!-- Carousel Without Autoplay -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">手動控制輪播</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">停用自動播放，使用者手動切換。</p>
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white">
        <div class="carousel-container">
          <ejs-carousel :autoPlay="false" :buttonsVisibility="'Visible'" :showIndicators="true">
            <e-carousel-items>
              <e-carousel-item v-for="(step, index) in stepSlides" :key="index" :template="'stepTemplate' + index">
              </e-carousel-item>
            </e-carousel-items>
            <template v-for="(step, index) in stepSlides" :key="'stepTpl' + index" v-slot:[`stepTemplate${index}`]>
              <div class="step-slide" :style="{ backgroundColor: step.bgColor }">
                <div class="step-number">{{ index + 1 }}</div>
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-desc">{{ step.description }}</p>
              </div>
            </template>
          </ejs-carousel>
        </div>
      </div>
    </section>

    <!-- API Reference -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">API 參考</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">屬性</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">類型</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">說明</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">autoPlay</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">啟用自動播放</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">interval</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">number</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">自動播放間隔（毫秒）</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">showPlayButton</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">顯示播放/暫停按鈕</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">buttonsVisibility</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">CarouselButtonVisibility</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">導航按鈕可見性</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">showIndicators</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">顯示指示器</td></tr>
            <tr><td class="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">loop</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">boolean</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">啟用循環播放</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="mb-10">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">常見應用場景</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🖼️</div>
          <span class="text-sm font-medium">圖片展示</span>
        </div>
        <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">🛍️</div>
          <span class="text-sm font-medium">產品輪播</span>
        </div>
        <div class="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">📰</div>
          <span class="text-sm font-medium">新聞輪播</span>
        </div>
        <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-center">
          <div class="text-2xl mb-2">💬</div>
          <span class="text-sm font-medium">客戶評價</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  CarouselComponent as EjsCarousel,
  CarouselItemsDirective as ECarouselItems,
  CarouselItemDirective as ECarouselItem
} from '@syncfusion/ej2-vue-navigations'

import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'

definePageMeta({ layout: 'playground' })

// Basic slides data
const basicSlides = [
  { icon: '🚀', title: '快速啟動', description: '簡單設定，立即開始使用', bgColor: '#4472C4' },
  { icon: '🎨', title: '自訂樣式', description: '完全自訂外觀與風格', bgColor: '#70AD47' },
  { icon: '⚡', title: '高效能', description: '流暢的動畫效果', bgColor: '#ED7D31' },
  { icon: '📱', title: '響應式', description: '適應各種螢幕尺寸', bgColor: '#9E480E' }
]

// Image slides data
const imageSlides = [
  { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop', alt: 'Mountains', title: '高山美景', description: '壯麗的阿爾卑斯山脈' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop', alt: 'Beach', title: '海灘風光', description: '陽光沙灘與蔚藍海洋' },
  { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop', alt: 'Forest', title: '森林秘境', description: '寧靜的原始森林' },
  { url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop', alt: 'Nature', title: '自然風光', description: '大自然的鬼斧神工' }
]

// Card slides data
const cardSlides = [
  { icon: '💻', name: 'MacBook Pro', description: 'M3 Max 晶片，16吋顯示器', price: 89900, color: '#1a1a1a' },
  { icon: '📱', name: 'iPhone 15 Pro', description: 'A17 Pro 晶片，鈦金屬設計', price: 36900, color: '#5856D6' },
  { icon: '⌚', name: 'Apple Watch', description: 'Series 9，健康監測功能', price: 12900, color: '#FF2D55' },
  { icon: '🎧', name: 'AirPods Pro', description: '主動式降噪，空間音訊', price: 7490, color: '#34C759' }
]

// Step slides data
const stepSlides = [
  { title: '註冊帳號', description: '填寫基本資料，建立您的帳號', bgColor: '#E3F2FD' },
  { title: '選擇方案', description: '根據需求選擇適合的服務方案', bgColor: '#E8F5E9' },
  { title: '付款結帳', description: '安全的線上付款流程', bgColor: '#FFF3E0' },
  { title: '開始使用', description: '完成設定，享受完整服務', bgColor: '#F3E5F5' }
]
</script>

<style scoped>
.playground-page { padding: 1.5rem; max-width: 100%; }

.carousel-container {
  height: 350px;
  width: 100%;
}

.card-carousel {
  height: 400px;
}

/* Basic slides */
.slide-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.slide-inner {
  text-align: center;
  padding: 2rem;
}

.slide-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.slide-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.slide-desc {
  font-size: 1rem;
  opacity: 0.9;
}

/* Image slides */
.image-slide {
  height: 100%;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
  padding: 2rem 1rem 1rem;
}

.image-caption h4 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.image-caption p {
  font-size: 0.875rem;
  opacity: 0.9;
}

/* Card slides */
.card-slide {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.product-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 300px;
}

.product-icon {
  font-size: 3rem;
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.product-name {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.product-desc {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4472C4;
  margin-bottom: 1rem;
}

.product-btn {
  background: #4472C4;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
}

.product-btn:hover {
  background: #3661B3;
}

/* Step slides */
.step-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #4472C4;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.step-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.step-desc {
  font-size: 1rem;
  color: #666;
}
</style>
