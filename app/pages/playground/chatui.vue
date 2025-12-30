<script setup lang="ts">
import {
  ChatUIComponent as EjsChatui,
  MessagesDirective as EMessages,
  MessageDirective as EMessage
} from '@syncfusion/ej2-vue-interactive-chat'
import { ref, reactive } from 'vue'

definePageMeta({
  layout: 'playground'
})

const chatRef = ref<InstanceType<typeof EjsChatui> | null>(null)

// 使用者設定
const currentUser = {
  id: 'user1',
  user: 'You',
  avatarUrl: 'https://ej2.syncfusion.com/demos/src/chat-ui/images/bot.png'
}

const botUser = {
  id: 'bot1',
  user: 'Assistant',
  avatarUrl: 'https://ej2.syncfusion.com/demos/src/chat-ui/images/bot.png'
}

const otherUser = {
  id: 'user2',
  user: 'Alice Chen',
  avatarUrl: 'https://ej2.syncfusion.com/demos/src/chat-ui/images/andrew.png'
}

// 正在輸入的使用者
const typingUsers = ref<any[]>([])

// 訊息列表
const messages = reactive([
  { author: otherUser, text: 'Hi! Welcome to our team chat.' },
  { author: currentUser, text: 'Thanks! Glad to be here.' },
  { author: otherUser, text: 'How can I help you today?' }
])

// 模擬自動回覆
const autoReplies = [
  "That's interesting! Tell me more.",
  "I understand. Let me help you with that.",
  "Great question! Here's what I think...",
  "Thanks for sharing. Is there anything specific you need?",
  "I'm here to assist you. What else would you like to know?"
]

// 處理訊息發送
const onMessageSend = (args: any) => {
  console.log('Message sent:', args)

  // 模擬打字指示器
  typingUsers.value = [otherUser]

  // 模擬對方回覆
  setTimeout(() => {
    typingUsers.value = []

    const randomReply = autoReplies[Math.floor(Math.random() * autoReplies.length)]

    if (chatRef.value) {
      // 使用 API 新增訊息
      const newMessage = {
        author: otherUser,
        text: randomReply
      }
      messages.push(newMessage)
    }
  }, 2000)
}

// 事件處理
const onCreated = () => {
  console.log('Chat UI created')
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Chat UI Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-interactive-chat</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Chat UI -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">
          1. Interactive Chat Interface
        </h2>
        <p class="text-gray-600 mb-6">Real-time chat with typing indicators and message history</p>

        <div class="border rounded-lg overflow-hidden" style="height: 450px; max-width: 500px;">
          <ejs-chatui
            ref="chatRef"
            :user="currentUser"
            :typing-users="typingUsers"
            @message-send="onMessageSend"
            @created="onCreated"
          >
            <e-messages>
              <e-message
                v-for="(msg, index) in messages"
                :key="index"
                :author="msg.author"
                :text="msg.text"
              />
            </e-messages>
          </ejs-chatui>
        </div>
      </section>

      <!-- 2. Key Features -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          2. Key Features
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Messages</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Text messages</li>
              <li>• Rich content support</li>
              <li>• Message templates</li>
              <li>• Message status</li>
              <li>• Timestamps</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Users</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• User avatars</li>
              <li>• User names</li>
              <li>• Multiple participants</li>
              <li>• User identification</li>
              <li>• Custom user data</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Typing Indicator</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Show who's typing</li>
              <li>• Multiple typing users</li>
              <li>• Animated indicator</li>
              <li>• Dynamic updates</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Input Area</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Text input field</li>
              <li>• Send button</li>
              <li>• Emoji support</li>
              <li>• Attachment options</li>
              <li>• Placeholder text</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Customization</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Custom templates</li>
              <li>• Theme support</li>
              <li>• CSS styling</li>
              <li>• Header customization</li>
              <li>• Footer customization</li>
            </ul>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Events</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• Message sent</li>
              <li>• User typing</li>
              <li>• Scroll events</li>
              <li>• Created/destroyed</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 3. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          3. API Reference
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">user</td>
                <td class="px-4 py-3 text-sm text-gray-600">UserModel</td>
                <td class="px-4 py-3 text-sm text-gray-600">Current user configuration</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">messages</td>
                <td class="px-4 py-3 text-sm text-gray-600">MessageModel[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Array of messages</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">typingUsers</td>
                <td class="px-4 py-3 text-sm text-gray-600">UserModel[]</td>
                <td class="px-4 py-3 text-sm text-gray-600">Users currently typing</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showHeader</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show/hide chat header</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showFooter</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show/hide chat footer</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">showTimeBreak</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show time breaks between messages</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">placeholder</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Input placeholder text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 4. User Model -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          4. User Model
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">id</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Unique user identifier</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">user</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Display name of the user</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">avatarUrl</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">URL for user avatar image</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">avatarBgColor</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Background color for avatar</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">cssClass</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Custom CSS class for user</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 5. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          5. Events
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">messageSend</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when user sends a message</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">userTyping</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when user starts typing</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">created</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when component is created</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">destroyed</td>
                <td class="px-4 py-3 text-sm text-gray-600">Triggered when component is destroyed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 6. Usage Notes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          6. Usage Notes
        </h2>
        <div class="space-y-4 text-gray-600">
          <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 class="font-semibold text-blue-800 mb-2">Message Handling</h3>
            <p class="text-sm">Use the <code class="bg-blue-100 px-1 rounded">messageSend</code> event to capture user messages and send them to your backend. Add responses by updating the messages array or using the component API.</p>
          </div>
          <div class="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 class="font-semibold text-green-800 mb-2">Typing Indicators</h3>
            <p class="text-sm">Update the <code class="bg-green-100 px-1 rounded">typingUsers</code> array to show or hide typing indicators. This is useful for real-time chat applications using WebSocket connections.</p>
          </div>
          <div class="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <h3 class="font-semibold text-purple-800 mb-2">Use Cases</h3>
            <ul class="text-sm space-y-1">
              <li>• Customer support chat</li>
              <li>• Team collaboration</li>
              <li>• AI chatbot interfaces</li>
              <li>• In-app messaging</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@import '@syncfusion/ej2-base/styles/material.css';
@import '@syncfusion/ej2-inputs/styles/material.css';
@import '@syncfusion/ej2-navigations/styles/material.css';
@import '@syncfusion/ej2-buttons/styles/material.css';
@import '@syncfusion/ej2-popups/styles/material.css';
@import '@syncfusion/ej2-dropdowns/styles/material.css';
@import '@syncfusion/ej2-splitbuttons/styles/material.css';
@import '@syncfusion/ej2-interactive-chat/styles/material.css';
</style>
