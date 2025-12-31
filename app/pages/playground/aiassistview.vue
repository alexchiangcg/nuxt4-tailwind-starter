<script setup lang="ts">
import {
  AIAssistViewComponent as EjsAiassistview
} from '@syncfusion/ej2-vue-interactive-chat'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const aiAssistRef = ref<InstanceType<typeof EjsAiassistview> | null>(null)

// 預設提示建議
const promptSuggestions = [
  'How do I prioritize my tasks?',
  'How can I improve my time management skills?',
  'What are the best practices for clean code?',
  'How to optimize code editor speed?'
]

// 模擬 AI 回應資料
const promptResponses: Record<string, string> = {
  'How do I prioritize my tasks?':
    'Prioritize tasks by urgency and impact: tackle high-impact tasks first, delegate when possible, and break large tasks into smaller steps. Use methods like the Eisenhower Matrix to categorize tasks into urgent/important quadrants.',
  'How can I improve my time management skills?':
    'To improve time management skills, try setting clear goals, using a planner or digital tools, prioritizing tasks, breaking tasks into smaller steps, and minimizing distractions. Regularly review and adjust your approach for better efficiency.',
  'What are the best practices for clean code?':
    'Use clear naming conventions, break code into small functions, avoid repetition (DRY principle), write tests, follow coding standards, and add meaningful comments. Keep your code readable and maintainable.',
  'How to optimize code editor speed?':
    'Install useful extensions, set up keyboard shortcuts, enable linting, customize settings for smoother development, and disable unnecessary features. Consider using a lightweight editor for faster performance.'
}

// 處理提示請求
const onPromptRequest = (args: any) => {
  setTimeout(() => {
    const response = promptResponses[args.prompt] ||
      'For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.'

    if (aiAssistRef.value) {
      aiAssistRef.value.ej2Instances.addPromptResponse(response)
    }
  }, 1500)
}

// 清除對話
const clearConversation = () => {
  if (aiAssistRef.value) {
    // 重新初始化元件
    aiAssistRef.value.ej2Instances.prompts = []
  }
}

// 事件處理
const onCreated = () => {
  console.log('AI AssistView created')
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">AI AssistView Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-interactive-chat</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic AI AssistView -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. AI AssistView with Prompt Suggestions
        </h2>
        <p class="text-gray-600 mb-6">Interactive AI assistant interface with suggested prompts</p>

        <div class="border rounded-lg overflow-hidden" style="height: 450px;">
          <ejs-aiassistview
            ref="aiAssistRef"
            prompt-suggestions-header="Suggested Prompts"
            :prompt-suggestions="promptSuggestions"
            :prompt-request="onPromptRequest"
            @created="onCreated"
          />
        </div>
      </section>

      <!-- 2. How It Works -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          2. How It Works
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-4 bg-blue-50 rounded-lg">
            <div class="text-3xl mb-2">1</div>
            <h3 class="font-semibold text-gray-800 mb-2">User Input</h3>
            <p class="text-sm text-gray-600">User types a prompt or selects from suggestions</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <div class="text-3xl mb-2">2</div>
            <h3 class="font-semibold text-gray-800 mb-2">Process Request</h3>
            <p class="text-sm text-gray-600">The <code class="bg-green-100 px-1 rounded">promptRequest</code> event is triggered for AI processing</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg">
            <div class="text-3xl mb-2">3</div>
            <h3 class="font-semibold text-gray-800 mb-2">Display Response</h3>
            <p class="text-sm text-gray-600">Use <code class="bg-purple-100 px-1 rounded">addPromptResponse()</code> to show the AI response</p>
          </div>
        </div>
      </section>

      <!-- 3. Key Features -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          3. Key Features
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Prompt Suggestions</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Predefined suggestions</li>
              <li>• Custom suggestion header</li>
              <li>• On-demand suggestions</li>
              <li>• Click to use suggestion</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Message Handling</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Send/receive messages</li>
              <li>• Loading indicators</li>
              <li>• Markdown support</li>
              <li>• Code highlighting</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">AI Integration</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• OpenAI compatible</li>
              <li>• Azure Cognitive Services</li>
              <li>• Custom AI backends</li>
              <li>• Streaming responses</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Customization</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Custom templates</li>
              <li>• Theme support</li>
              <li>• CSS customization</li>
              <li>• Banner content</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Toolbar</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Built-in toolbar</li>
              <li>• Custom toolbar items</li>
              <li>• Action buttons</li>
              <li>• Context menu</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Response Actions</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Copy response</li>
              <li>• Like/dislike</li>
              <li>• Regenerate</li>
              <li>• Custom actions</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 4. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          4. API Reference
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">promptSuggestions</td>
                <td class="px-4 py-3 text-sm text-gray-600">string[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Array of suggested prompts</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">promptSuggestionsHeader</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Header text for suggestions</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">prompts</td>
                <td class="px-4 py-3 text-sm text-gray-600">PromptModel[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Array of prompt-response pairs</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">width</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Width of the component</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">height</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Height of the component</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 5. Methods -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          5. Common Methods
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">addPromptResponse(response)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Add AI response to the current prompt</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">executePrompt(prompt)</td>
                <td class="px-4 py-3 text-sm text-gray-600">Programmatically execute a prompt</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">refresh()</td>
                <td class="px-4 py-3 text-sm text-gray-600">Refresh the component</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">destroy()</td>
                <td class="px-4 py-3 text-sm text-gray-600">Destroy the component</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 6. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          6. Events
        </h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">promptRequest</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when user submits a prompt</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">created</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when component is created</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">destroyed</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when component is destroyed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 7. Integration Example -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          7. AI Integration Example
        </h2>
        <div class="space-y-4">
          <div class="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">
            <pre class="text-sm"><code>const onPromptRequest = async (args) => {
  // Call your AI service
  const response = await fetch('/api/ai/chat', {
    method: 'POST',
    body: JSON.stringify({ prompt: args.prompt })
  })

  const data = await response.json()

  // Add the response to the UI
  aiAssistRef.value.ej2Instances.addPromptResponse(data.response)
}</code></pre>
          </div>
          <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 class="font-semibold text-blue-800 mb-2">Integration Tips</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Connect to OpenAI, Azure Cognitive Services, or custom AI backends</li>
              <li>• Handle loading states during API calls</li>
              <li>• Implement error handling for failed requests</li>
              <li>• Consider streaming responses for longer outputs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


