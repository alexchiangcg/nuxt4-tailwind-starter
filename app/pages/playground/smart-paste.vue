<script setup lang="ts">
import { SmartPasteButtonComponent as EjsSmartpastebutton } from '@syncfusion/ej2-vue-buttons'
import { TextBoxComponent as EjsTextbox, TextAreaComponent as EjsTextarea } from '@syncfusion/ej2-vue-inputs'
import { DropDownListComponent as EjsDropdownlist } from '@syncfusion/ej2-vue-dropdowns'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Form data
const formData = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  jobTitle: '',
  company: '',
  department: '',
  comments: ''
})

// Dropdown data
const departments = ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations', 'Support']

// Event log
const eventLog = ref<string[]>([])

const addLog = (message: string) => {
  eventLog.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLog.value.length > 10) {
    eventLog.value.shift()
  }
}

// Mock AI Request Handler - simulates AI processing
// In production, this would connect to OpenAI/Azure OpenAI
const serverAIRequest = async (options: any) => {
  addLog('AI processing started...')

  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Mock response based on clipboard content
  // In real implementation, this would call OpenAI API
  const mockResponse = JSON.stringify({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1-555-123-4567',
    address: '123 Main Street, San Francisco, CA 94105',
    jobTitle: 'Senior Software Engineer',
    company: 'Tech Corp Inc.',
    department: 'Engineering',
    comments: 'Looking forward to joining the team!'
  })

  addLog('AI processing completed')
  return mockResponse
}

// Event handlers
const onCreated = () => {
  addLog('Smart Paste Button created')
}

const onClick = () => {
  addLog('Smart Paste Button clicked')
}

// Sample data to copy
const sampleData = `John Doe
Email: john.doe@example.com
Phone: +1-555-123-4567
Address: 123 Main Street, San Francisco, CA 94105
Position: Senior Software Engineer
Company: Tech Corp Inc.
Department: Engineering
Notes: Looking forward to joining the team!`

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(sampleData)
    addLog('Sample data copied to clipboard')
  } catch (err) {
    addLog('Failed to copy to clipboard')
  }
}

const clearForm = () => {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    address: '',
    jobTitle: '',
    company: '',
    department: '',
    comments: ''
  }
  addLog('Form cleared')
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Smart Paste Button Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-buttons</code>
      </p>
    </div>

    <!-- AI Integration Notice -->
    <div class="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div class="flex items-start gap-3">
        <span class="text-blue-600 text-xl">&#9432;</span>
        <div>
          <p class="font-medium text-blue-800">AI-Powered Component</p>
          <p class="text-sm text-blue-700 mt-1">
            Smart Paste uses AI to intelligently parse clipboard content and fill form fields automatically.
            This demo uses a mock AI handler. In production, connect to OpenAI or Azure OpenAI services.
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Smart Paste Demo -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Smart Paste Form Demo</h2>
        <p class="text-gray-600 mb-6">Copy the sample data, then click Smart Paste to auto-fill the form</p>

        <!-- Sample Data Section -->
        <div class="mb-6 p-4 bg-gray-50 rounded-lg">
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-medium text-gray-700">Sample Data (Copy this first)</h3>
            <button
              @click="copyToClipboard"
              class="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded transition-colors"
            >
              Copy to Clipboard
            </button>
          </div>
          <pre class="text-sm text-gray-600 whitespace-pre-wrap font-mono">{{ sampleData }}</pre>
        </div>

        <!-- Form with Smart Paste -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <ejs-textbox
              v-model="formData.name"
              placeholder="Enter your name"
              floatLabelType="Auto"
              data-smartpaste-description="Full name of the person"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <ejs-textbox
              v-model="formData.email"
              placeholder="Enter email address"
              floatLabelType="Auto"
              type="email"
              data-smartpaste-description="Email address"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <ejs-textbox
              v-model="formData.phone"
              placeholder="Enter phone number"
              floatLabelType="Auto"
              data-smartpaste-description="Phone number"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <ejs-textbox
              v-model="formData.address"
              placeholder="Enter address"
              floatLabelType="Auto"
              data-smartpaste-description="Street address"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
            <ejs-textbox
              v-model="formData.jobTitle"
              placeholder="Enter job title"
              floatLabelType="Auto"
              data-smartpaste-description="Job title or position"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <ejs-textbox
              v-model="formData.company"
              placeholder="Enter company name"
              floatLabelType="Auto"
              data-smartpaste-description="Company or organization name"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Department</label>
            <ejs-dropdownlist
              v-model="formData.department"
              :dataSource="departments"
              placeholder="Select department"
              data-smartpaste-description="Department name from options"
            />
          </div>
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-1">Comments</label>
            <ejs-textarea
              v-model="formData.comments"
              placeholder="Additional comments"
              :rows="3"
              data-smartpaste-description="Any additional notes or comments"
            />
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4 mt-6">
          <ejs-smartpastebutton
            id="smart-paste-btn"
            content="Smart Paste"
            iconCss="e-icons e-paste"
            cssClass="e-primary"
            :aiAssistHandler="serverAIRequest"
            @created="onCreated"
            @click="onClick"
          />
          <button
            @click="clearForm"
            class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded transition-colors"
          >
            Clear Form
          </button>
        </div>
      </section>

      <!-- 2. How It Works -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="p-4 bg-purple-50 rounded-lg text-center">
            <div class="text-3xl mb-2">1</div>
            <h3 class="font-semibold text-purple-800 mb-2">Copy Data</h3>
            <p class="text-sm text-purple-700">Copy unstructured text data to clipboard</p>
          </div>
          <div class="p-4 bg-blue-50 rounded-lg text-center">
            <div class="text-3xl mb-2">2</div>
            <h3 class="font-semibold text-blue-800 mb-2">Click Smart Paste</h3>
            <p class="text-sm text-blue-700">Button reads clipboard content</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg text-center">
            <div class="text-3xl mb-2">3</div>
            <h3 class="font-semibold text-green-800 mb-2">AI Processing</h3>
            <p class="text-sm text-green-700">AI parses and maps data to fields</p>
          </div>
          <div class="p-4 bg-orange-50 rounded-lg text-center">
            <div class="text-3xl mb-2">4</div>
            <h3 class="font-semibold text-orange-800 mb-2">Auto Fill</h3>
            <p class="text-sm text-orange-700">Form fields populated automatically</p>
          </div>
        </div>
      </section>

      <!-- 3. Event Log -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Event Log</h2>
        <div class="w-full p-3 bg-gray-100 rounded text-sm font-mono max-h-48 overflow-y-auto">
          <p v-for="(log, index) in eventLog" :key="index" class="text-gray-600">{{ log }}</p>
          <p v-if="eventLog.length === 0" class="text-gray-400">Events will appear here...</p>
        </div>
      </section>

      <!-- 4. Use Cases -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Common Use Cases</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Contact Form Filling</h3>
            <p class="text-sm text-gray-600">Quickly populate contact forms from business cards or email signatures.</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Data Entry</h3>
            <p class="text-sm text-gray-600">Efficiently enter data from documents, PDFs, or other sources.</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">CRM Updates</h3>
            <p class="text-sm text-gray-600">Update customer records by pasting information from various sources.</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Resume/CV Processing</h3>
            <p class="text-sm text-gray-600">Parse resume content into structured applicant data.</p>
          </div>
        </div>
      </section>

      <!-- 5. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. API Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property/Event</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">content</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Button display text</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">iconCss</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">CSS class for button icon</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">aiAssistHandler</td>
                <td class="px-4 py-3 text-sm text-gray-600">function</td>
                <td class="px-4 py-3 text-sm text-gray-600">Async callback for AI processing</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom CSS class for styling</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">created</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when component is created</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">click</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when button is clicked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 6. AI Integration Code -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. AI Integration Example</h2>
        <div class="p-4 bg-gray-900 rounded-lg overflow-x-auto">
          <pre class="text-sm text-gray-100"><code>// Production AI handler using Azure OpenAI
const serverAIRequest = async (options: ChatOptions) => {
  const response = await fetch('https://your-openai-endpoint/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'your-api-key'
    },
    body: JSON.stringify({
      messages: options.messages,
      temperature: 0.7,
      max_tokens: 1000
    })
  })

  const data = await response.json()
  return data.choices[0].message.content
}</code></pre>
        </div>
        <p class="text-sm text-gray-500 mt-4">
          Note: The <code>aiAssistHandler</code> receives clipboard content and form field metadata,
          then returns structured data that maps to form fields.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
:deep(.e-smart-paste-button) {
  font-family: inherit;
}
</style>
