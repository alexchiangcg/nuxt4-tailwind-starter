<script setup lang="ts">
import { provide } from 'vue'
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Page, Sort, Filter, Toolbar } from '@syncfusion/ej2-vue-grids'
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons'
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns'
import { SwitchComponent as EjsSwitch } from '@syncfusion/ej2-vue-buttons'

definePageMeta({
  layout: 'docs',
})

provide('grid', [Page, Sort, Filter, Toolbar])

// 範例資料
const userData = [
  { id: 1, username: 'admin', name: '系統管理員', email: 'admin@example.com', role: '管理員', status: true },
  { id: 2, username: 'user1', name: '王小明', email: 'wang@example.com', role: '一般使用者', status: true },
  { id: 3, username: 'user2', name: '李小華', email: 'lee@example.com', role: '一般使用者', status: false },
]

const roleOptions = ['管理員', '一般使用者', '訪客']
</script>

<template>
  <div class="p-10 max-w-6xl mx-auto">
    <!-- 標題 -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">使用者管理模組</h1>
      <p class="text-gray-600">使用者 CRUD、角色權限、狀態管理</p>
    </div>

    <!-- 1. 功能概述 -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. 功能概述</h2>
      <ul class="list-disc list-inside text-gray-600 space-y-2">
        <li>使用者列表查詢與篩選</li>
        <li>新增/編輯/刪除使用者</li>
        <li>使用者角色權限管理</li>
        <li>使用者狀態管理（啟用/停用）</li>
      </ul>
    </section>

    <!-- 2. UI 規格 - 使用者列表 -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. UI 規格</h2>

      <div class="bg-white p-6 rounded-lg border border-gray-200 mb-6">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">2.1 使用者列表頁面</h3>
        <p class="text-gray-600 mb-4">
          使用 <NuxtLink to="/playground/grid" class="text-blue-600 hover:underline">Grid 資料表格</NuxtLink> 元件
        </p>

        <!-- 操作按鈕 -->
        <div class="mb-4 flex gap-2">
          <ejs-button cssClass="e-primary">新增使用者</ejs-button>
          <ejs-button cssClass="e-outline">批次匯出</ejs-button>
        </div>

        <!-- Grid 範例 -->
        <ejs-grid :dataSource="userData" :allowPaging="true" :allowSorting="true" :pageSettings="{ pageSize: 10 }">
          <e-columns>
            <e-column field="username" headerText="使用者名稱" width="120" />
            <e-column field="name" headerText="姓名" width="120" />
            <e-column field="email" headerText="Email" width="180" />
            <e-column field="role" headerText="角色" width="100" />
            <e-column field="status" headerText="狀態" width="80" :template="'statusTemplate'" />
          </e-columns>
          <template #statusTemplate="{ data }">
            <span
              :class="data.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
              class="px-2 py-1 rounded text-xs font-medium"
            >
              {{ data.status ? '啟用' : '停用' }}
            </span>
          </template>
        </ejs-grid>
      </div>

      <div class="bg-white p-6 rounded-lg border border-gray-200">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">2.2 使用者表單</h3>
        <p class="text-gray-600 mb-4">新增/編輯使用者的表單欄位</p>

        <div class="grid grid-cols-2 gap-6 max-w-2xl">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">角色選擇</label>
            <ejs-dropdownlist :dataSource="roleOptions" placeholder="請選擇角色" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">帳號狀態</label>
            <div class="mt-2">
              <ejs-switch :checked="true" />
              <span class="ml-2 text-sm text-gray-600">啟用</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. 資料欄位定義 -->
    <section class="mb-10">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. 資料欄位定義</h2>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">欄位</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">型別</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">必填</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3 text-sm font-mono text-gray-900 border-b">username</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">string</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">是</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">登入帳號，4-20 字元</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3 text-sm font-mono text-gray-900 border-b">name</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">string</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">是</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">使用者姓名</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-mono text-gray-900 border-b">email</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">string</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">是</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">電子郵件</td>
            </tr>
            <tr class="bg-gray-50">
              <td class="px-4 py-3 text-sm font-mono text-gray-900 border-b">role</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">enum</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">是</td>
              <td class="px-4 py-3 text-sm text-gray-600 border-b">角色：管理員/一般使用者/訪客</td>
            </tr>
            <tr>
              <td class="px-4 py-3 text-sm font-mono text-gray-900">status</td>
              <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
              <td class="px-4 py-3 text-sm text-gray-600">是</td>
              <td class="px-4 py-3 text-sm text-gray-600">帳號狀態</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 4. API 規格 -->
    <section>
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. API 規格</h2>

      <div class="space-y-4">
        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg">
          <p class="text-green-400 font-mono text-sm">GET /api/users</p>
          <p class="text-gray-400 text-sm mt-1">取得使用者列表（支援分頁、搜尋、篩選）</p>
        </div>

        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg">
          <p class="text-blue-400 font-mono text-sm">POST /api/users</p>
          <p class="text-gray-400 text-sm mt-1">新增使用者</p>
        </div>

        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg">
          <p class="text-yellow-400 font-mono text-sm">PUT /api/users/:id</p>
          <p class="text-gray-400 text-sm mt-1">更新使用者資料</p>
        </div>

        <div class="bg-gray-900 text-gray-100 p-4 rounded-lg">
          <p class="text-red-400 font-mono text-sm">DELETE /api/users/:id</p>
          <p class="text-gray-400 text-sm mt-1">刪除使用者</p>
        </div>
      </div>
    </section>
  </div>
</template>
