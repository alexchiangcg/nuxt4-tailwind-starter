<script setup lang="ts">
import { UploaderComponent as EjsUploader } from '@syncfusion/ej2-vue-inputs'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Demo save/remove URLs (using Syncfusion's demo server)
const asyncSettings = {
  saveUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Save',
  removeUrl: 'https://services.syncfusion.com/vue/production/api/FileUploader/Remove'
}

const uploadedFiles = ref<string[]>([])

const onSuccess = (args: any) => {
  if (args.operation === 'upload') {
    uploadedFiles.value.push(args.file.name)
  }
}

const onRemove = (args: any) => {
  uploadedFiles.value = uploadedFiles.value.filter(f => f !== args.file.name)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">File Upload Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Upload -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Upload</h2>
        <p class="text-gray-600 mb-6">Click or drag files to upload</p>
        <ejs-uploader
          id="basic-upload"
          :async-settings="asyncSettings"
        />
      </section>

      <!-- 2. Auto Upload -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Auto Upload</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">autoUpload</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Auto Upload: Off (default)</h3>
            <ejs-uploader
              id="manual-upload"
              :async-settings="asyncSettings"
              :auto-upload="false"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Auto Upload: On</h3>
            <ejs-uploader
              id="auto-upload"
              :async-settings="asyncSettings"
              :auto-upload="true"
            />
          </div>
        </div>
      </section>

      <!-- 3. File Type Restrictions -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. File Type Restrictions</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">allowedExtensions</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Images Only (.png, .jpg, .jpeg)</h3>
            <ejs-uploader
              id="image-upload"
              :async-settings="asyncSettings"
              allowed-extensions=".png,.jpg,.jpeg,.gif"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Documents Only (.pdf, .doc, .docx)</h3>
            <ejs-uploader
              id="doc-upload"
              :async-settings="asyncSettings"
              allowed-extensions=".pdf,.doc,.docx,.txt"
            />
          </div>
        </div>
      </section>

      <!-- 4. File Size Limits -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. File Size Limits</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">minFileSize</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">maxFileSize</code>
        </p>
        <div>
          <p class="text-sm text-gray-500 mb-3">Min: 10KB, Max: 4MB</p>
          <ejs-uploader
            id="size-limit-upload"
            :async-settings="asyncSettings"
            :min-file-size="10000"
            :max-file-size="4000000"
          />
        </div>
      </section>

      <!-- 5. Single vs Multiple -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Single vs Multiple Files</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">multiple</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Single File Only</h3>
            <ejs-uploader
              id="single-upload"
              :async-settings="asyncSettings"
              :multiple="false"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-700 mb-3">Multiple Files (default)</h3>
            <ejs-uploader
              id="multiple-upload"
              :async-settings="asyncSettings"
              :multiple="true"
            />
          </div>
        </div>
      </section>

      <!-- 6. Drop Area -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Custom Drop Area</h2>
        <p class="text-gray-600 mb-6">Drag and drop files into the designated area</p>
        <div id="droparea" class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 mb-4">
          <div class="text-gray-500 mb-4">
            <svg class="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="mt-2">Drag files here or click to browse</p>
          </div>
          <ejs-uploader
            id="drop-upload"
            :async-settings="asyncSettings"
            drop-area="#droparea"
          />
        </div>
      </section>

      <!-- 7. Sequential Upload -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Sequential Upload</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">sequentialUpload</code>
        </p>
        <ejs-uploader
          id="sequential-upload"
          :async-settings="asyncSettings"
          :sequential-upload="true"
        />
      </section>

      <!-- 8. Disabled State -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Disabled State</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>
        </p>
        <ejs-uploader
          id="disabled-upload"
          :async-settings="asyncSettings"
          :enabled="false"
        />
      </section>

      <!-- 9. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">9. API Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">asyncSettings</td>
                <td class="px-4 py-3 text-sm text-gray-600">object</td>
                <td class="px-4 py-3 text-sm text-gray-600">Save and remove URL configuration</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">autoUpload</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Upload files immediately on selection</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">allowedExtensions</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Allowed file types (e.g., ".jpg,.png")</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">minFileSize</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Minimum file size in bytes</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">maxFileSize</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Maximum file size in bytes</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">multiple</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Allow multiple file selection</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">dropArea</td>
                <td class="px-4 py-3 text-sm text-gray-600">string | HTMLElement</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom drop zone selector</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">sequentialUpload</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Upload files one by one</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
