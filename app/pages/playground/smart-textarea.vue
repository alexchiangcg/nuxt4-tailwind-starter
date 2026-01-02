<script setup lang="ts">
import { SmartTextAreaComponent as EjsSmarttextarea } from '@syncfusion/ej2-vue-inputs'
import { ref, computed } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Text values for different demos
const basicText = ref('')
const customerServiceText = ref('')
const developerText = ref('')

// User role presets
const roles = {
  employee: 'Employee communicating with internal team members',
  customerService: 'Customer service representative responding to customer inquiries',
  developer: 'Software developer discussing technical topics',
  manager: 'Project manager coordinating with team members',
  sales: 'Sales representative engaging with potential customers'
}

const selectedRole = ref('employee')

// Phrase presets for different contexts
const employeePhrases = [
  'Please find the attached report.',
  "Let's schedule a meeting to discuss this further.",
  'Can you provide an update on this task?',
  'I appreciate your prompt response.',
  "Let's collaborate on this project to ensure timely delivery."
]

const customerServicePhrases = [
  'Thank you for contacting us.',
  'I understand your concern and will help you resolve it.',
  'Is there anything else I can assist you with today?',
  'We apologize for any inconvenience caused.',
  'Your satisfaction is our priority.'
]

const developerPhrases = [
  'I will review the pull request and provide feedback.',
  'Can we discuss the technical approach for this feature?',
  'I have identified the root cause of the issue.',
  "Let's refactor this code to improve performance.",
  'The unit tests are passing on my local environment.'
]

// Current phrases based on role
const currentPhrases = computed(() => {
  switch (selectedRole.value) {
    case 'customerService':
      return customerServicePhrases
    case 'developer':
      return developerPhrases
    default:
      return employeePhrases
  }
})

// Event log
const eventLog = ref<string[]>([])

const addLog = (message: string) => {
  eventLog.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLog.value.length > 10) {
    eventLog.value.shift()
  }
}

// Mock AI Request Handler - simulates AI autocomplete
// In production, this would connect to OpenAI/Azure OpenAI
const serverAIRequest = async (settings: any) => {
  addLog('AI suggestion requested...')

  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 500))

  // Generate mock suggestions based on input
  const input = settings?.text || ''
  let suggestion = ''

  // Simple mock suggestions based on common patterns
  if (input.toLowerCase().includes('thank')) {
    suggestion = ' you for your time and consideration. I look forward to hearing from you.'
  } else if (input.toLowerCase().includes('please')) {
    suggestion = ' let me know if you have any questions or need further clarification.'
  } else if (input.toLowerCase().includes('i would')) {
    suggestion = ' like to discuss this matter further at your earliest convenience.'
  } else if (input.toLowerCase().includes('regarding')) {
    suggestion = ' the recent updates, I wanted to provide you with a brief summary.'
  } else if (input.toLowerCase().includes('as per')) {
    suggestion = ' our previous discussion, I have completed the required tasks.'
  } else {
    suggestion = ' and I believe this approach will help us achieve our goals efficiently.'
  }

  addLog('AI suggestion generated')
  return suggestion
}

// Event handlers
const onCreated = () => {
  addLog('Smart TextArea created')
}

const onInput = (args: any) => {
  addLog(`Input: ${args.value?.substring(0, 30)}...`)
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Smart TextArea Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <!-- AI Integration Notice -->
    <div class="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div class="flex items-start gap-3">
        <span class="text-blue-600 text-xl">&#9432;</span>
        <div>
          <p class="font-medium text-blue-800">AI-Powered Component</p>
          <p class="text-sm text-blue-700 mt-1">
            Smart TextArea provides intelligent sentence autocomplete using AI.
            Type a partial sentence and press Tab to accept AI suggestions.
            This demo uses a mock AI handler. In production, connect to OpenAI or Azure OpenAI services.
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Smart TextArea -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Smart TextArea</h2>
        <p class="text-gray-600 mb-6">Start typing and the AI will suggest completions. Press Tab to accept.</p>
        <div class="flex flex-col items-center gap-4">
          <ejs-smarttextarea
            id="basic-smart-textarea"
            v-model="basicText"
            width="100%"
            placeholder="Start typing here... (try 'Thank you', 'Please', 'I would like')"
            floatLabelType="Auto"
            :rows="5"
            :userRole="roles.employee"
            :userPhrases="employeePhrases"
            :aiSuggestionHandler="serverAIRequest"
            @created="onCreated"
            class="w-full max-w-2xl"
          />
          <p class="text-sm text-gray-500">Tip: Press Tab to accept the AI suggestion</p>
        </div>
      </section>

      <!-- 2. Role-Based Suggestions -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Role-Based Suggestions</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">userRole</code> - Context for AI suggestions
        </p>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Select User Role:</label>
          <div class="flex flex-wrap gap-3">
            <button
              v-for="(label, key) in { employee: 'Employee', customerService: 'Customer Service', developer: 'Developer' }"
              :key="key"
              @click="selectedRole = key"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                selectedRole === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ label }}
            </button>
          </div>
        </div>

        <div class="p-4 bg-gray-50 rounded-lg mb-4">
          <p class="text-sm text-gray-600">
            <strong>Current Role:</strong> {{ roles[selectedRole as keyof typeof roles] }}
          </p>
          <p class="text-sm text-gray-600 mt-2">
            <strong>Suggested Phrases:</strong>
          </p>
          <ul class="text-sm text-gray-500 mt-1 ml-4 list-disc">
            <li v-for="phrase in currentPhrases.slice(0, 3)" :key="phrase">{{ phrase }}</li>
          </ul>
        </div>

        <ejs-smarttextarea
          id="role-smart-textarea"
          width="100%"
          placeholder="Type a message appropriate for your role..."
          floatLabelType="Auto"
          :rows="5"
          :userRole="roles[selectedRole as keyof typeof roles]"
          :userPhrases="currentPhrases"
          :aiSuggestionHandler="serverAIRequest"
          class="w-full max-w-2xl"
        />
      </section>

      <!-- 3. Customer Service Demo -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Customer Service Scenario</h2>
        <p class="text-gray-600 mb-6">Optimized for customer support responses</p>

        <div class="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-4">
          <p class="text-sm text-gray-600 mb-2">
            <strong>Scenario:</strong> A customer has reported a delayed shipment
          </p>
          <p class="text-sm text-gray-500">
            Try starting with: "Thank you for reaching out regarding your order..."
          </p>
        </div>

        <ejs-smarttextarea
          id="customer-service-textarea"
          v-model="customerServiceText"
          width="100%"
          placeholder="Dear Customer, Thank you for..."
          floatLabelType="Auto"
          :rows="6"
          :userRole="roles.customerService"
          :userPhrases="customerServicePhrases"
          :aiSuggestionHandler="serverAIRequest"
          class="w-full max-w-2xl"
        />
      </section>

      <!-- 4. Developer Communication Demo -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Developer Communication</h2>
        <p class="text-gray-600 mb-6">Technical context-aware suggestions</p>

        <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-4">
          <p class="text-sm text-gray-600 mb-2">
            <strong>Scenario:</strong> Code review feedback or technical discussion
          </p>
          <p class="text-sm text-gray-500">
            Try starting with: "I have reviewed the pull request and..."
          </p>
        </div>

        <ejs-smarttextarea
          id="developer-textarea"
          v-model="developerText"
          width="100%"
          placeholder="Regarding the implementation..."
          floatLabelType="Auto"
          :rows="6"
          :userRole="roles.developer"
          :userPhrases="developerPhrases"
          :aiSuggestionHandler="serverAIRequest"
          class="w-full max-w-2xl"
        />
      </section>

      <!-- 5. Event Log -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Event Log</h2>
        <div class="w-full p-3 bg-gray-100 rounded text-sm font-mono max-h-48 overflow-y-auto">
          <p v-for="(log, index) in eventLog" :key="index" class="text-gray-600">{{ log }}</p>
          <p v-if="eventLog.length === 0" class="text-gray-400">Events will appear here...</p>
        </div>
      </section>

      <!-- 6. How It Works -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-4 bg-indigo-50 rounded-lg text-center">
            <div class="text-3xl mb-2">1</div>
            <h3 class="font-semibold text-indigo-800 mb-2">Start Typing</h3>
            <p class="text-sm text-indigo-700">Begin writing your text naturally</p>
          </div>
          <div class="p-4 bg-violet-50 rounded-lg text-center">
            <div class="text-3xl mb-2">2</div>
            <h3 class="font-semibold text-violet-800 mb-2">AI Analyzes</h3>
            <p class="text-sm text-violet-700">AI considers context, role, and phrases</p>
          </div>
          <div class="p-4 bg-fuchsia-50 rounded-lg text-center">
            <div class="text-3xl mb-2">3</div>
            <h3 class="font-semibold text-fuchsia-800 mb-2">Accept Suggestion</h3>
            <p class="text-sm text-fuchsia-700">Press Tab to insert the completion</p>
          </div>
        </div>
      </section>

      <!-- 7. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">userRole</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Context description for AI suggestions</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">userPhrases</td>
                <td class="px-4 py-3 text-sm text-gray-600">string[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Array of predefined phrase suggestions</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">aiSuggestionHandler</td>
                <td class="px-4 py-3 text-sm text-gray-600">function</td>
                <td class="px-4 py-3 text-sm text-gray-600">Async callback for AI completions</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">placeholder</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Placeholder text when empty</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">rows</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Number of visible text rows</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">floatLabelType</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Label behavior ('Auto', 'Always', 'Never')</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">created</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when component is created</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 8. AI Integration Code -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. AI Integration Example</h2>
        <div class="p-4 bg-gray-900 rounded-lg overflow-x-auto">
          <pre class="text-sm text-gray-100"><code>// Production AI handler using Azure OpenAI
const serverAIRequest = async (settings: any) => {
  const response = await fetch('https://your-openai-endpoint/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'your-api-key'
    },
    body: JSON.stringify({
      messages: [
        { role: 'system', content: `You are helping ${settings.userRole}` },
        { role: 'user', content: `Complete this: ${settings.text}` }
      ],
      temperature: 0.7,
      max_tokens: 100
    })
  })

  const data = await response.json()
  return data.choices[0].message.content
}</code></pre>
        </div>
        <p class="text-sm text-gray-500 mt-4">
          Note: The <code>aiSuggestionHandler</code> receives the current text and context,
          and returns a completion suggestion string.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
:deep(.e-smart-textarea) {
  font-family: inherit;
}
</style>
