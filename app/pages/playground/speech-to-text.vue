<script setup lang="ts">
import { SpeechToTextComponent as EjsSpeechtotext, TextAreaComponent as EjsTextarea } from '@syncfusion/ej2-vue-inputs'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

// Transcript values for different demos
const basicTranscript = ref('')
const languageTranscript = ref('')
const eventTranscript = ref('')

// Event log
const eventLog = ref<string[]>([])

const addLog = (message: string) => {
  eventLog.value.push(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLog.value.length > 8) {
    eventLog.value.shift()
  }
}

// Basic transcript handler
const onBasicTranscriptChange = (args: any) => {
  basicTranscript.value = args.transcript
}

// Language demo transcript handler
const onLanguageTranscriptChange = (args: any) => {
  languageTranscript.value = args.transcript
}

// Event demo handlers
const onEventTranscriptChange = (args: any) => {
  eventTranscript.value = args.transcript
  addLog(`Transcript: "${args.transcript.substring(0, 30)}..."`)
}

const onStart = () => {
  addLog('Recording started')
}

const onStop = () => {
  addLog('Recording stopped')
}

const onError = (args: any) => {
  addLog(`Error: ${args.error || 'Unknown error'}`)
}

// Listening state
const isListening = ref(false)

const onListeningStateChange = (args: any) => {
  isListening.value = args.isListening
  addLog(`Listening: ${args.isListening}`)
}

// Available languages
const languages = [
  { code: 'en-US', name: 'English (US)' },
  { code: 'en-GB', name: 'English (UK)' },
  { code: 'zh-TW', name: '中文 (繁體)' },
  { code: 'zh-CN', name: '中文 (简体)' },
  { code: 'ja-JP', name: '日本語' },
  { code: 'ko-KR', name: '한국어' },
  { code: 'fr-FR', name: 'Français' },
  { code: 'de-DE', name: 'Deutsch' },
  { code: 'es-ES', name: 'Español' }
]

const selectedLanguage = ref('en-US')
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Speech to Text Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <!-- Browser Support Notice -->
    <div class="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <div class="flex items-start gap-3">
        <span class="text-yellow-600 text-xl">&#9888;</span>
        <div>
          <p class="font-medium text-yellow-800">Browser Compatibility</p>
          <p class="text-sm text-yellow-700 mt-1">
            Speech recognition requires a modern browser with Web Speech API support (Chrome, Edge, Safari).
            Microphone permission is required.
          </p>
        </div>
      </div>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Speech to Text -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Speech to Text</h2>
        <p class="text-gray-600 mb-6">Click the button and start speaking</p>
        <div class="flex flex-col items-center gap-4">
          <ejs-speechtotext
            id="basic-stt"
            @transcript-changed="onBasicTranscriptChange"
          />
          <ejs-textarea
            v-model="basicTranscript"
            :rows="4"
            :cols="50"
            resize-mode="None"
            placeholder="Transcribed text will appear here..."
            class="w-full max-w-lg"
          />
        </div>
      </section>

      <!-- 2. Language Selection -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Language Selection</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">lang</code> - Set recognition language
        </p>
        <div class="flex flex-col items-center gap-4">
          <div class="flex items-center gap-4 mb-4">
            <label class="text-sm text-gray-600">Select Language:</label>
            <select
              v-model="selectedLanguage"
              class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option v-for="lang in languages" :key="lang.code" :value="lang.code">
                {{ lang.name }}
              </option>
            </select>
          </div>
          <ejs-speechtotext
            id="language-stt"
            :lang="selectedLanguage"
            @transcript-changed="onLanguageTranscriptChange"
          />
          <ejs-textarea
            v-model="languageTranscript"
            :rows="4"
            :cols="50"
            resize-mode="None"
            :placeholder="`Speak in ${languages.find(l => l.code === selectedLanguage)?.name}...`"
            class="w-full max-w-lg"
          />
        </div>
      </section>

      <!-- 3. Supported Languages -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Supported Languages</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div
            v-for="lang in languages"
            :key="lang.code"
            class="p-3 bg-gray-50 rounded-lg"
          >
            <p class="font-mono text-sm text-gray-900">{{ lang.code }}</p>
            <p class="text-xs text-gray-500">{{ lang.name }}</p>
          </div>
        </div>
        <p class="text-sm text-gray-500 mt-4">
          Language support depends on browser implementation of Web Speech API.
        </p>
      </section>

      <!-- 4. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Events</h2>
        <p class="text-gray-600 mb-6">
          Events: <code class="text-sm bg-gray-100 px-2 py-1 rounded">transcriptChanged</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">onStart</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">onStop</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">onError</code>
        </p>
        <div class="flex flex-col items-center gap-4">
          <div class="flex items-center gap-4">
            <ejs-speechtotext
              id="event-stt"
              @transcript-changed="onEventTranscriptChange"
              @start="onStart"
              @stop="onStop"
              @error="onError"
            />
            <span
              :class="[
                'px-3 py-1 rounded-full text-sm font-medium',
                isListening ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
              ]"
            >
              {{ isListening ? 'Listening...' : 'Not listening' }}
            </span>
          </div>
          <ejs-textarea
            v-model="eventTranscript"
            :rows="3"
            :cols="50"
            resize-mode="None"
            placeholder="Transcribed text..."
            class="w-full max-w-lg"
          />
          <div class="w-full max-w-lg p-3 bg-gray-100 rounded text-sm font-mono max-h-40 overflow-y-auto">
            <p v-for="(log, index) in eventLog" :key="index" class="text-gray-600">{{ log }}</p>
            <p v-if="eventLog.length === 0" class="text-gray-400">Event log will appear here...</p>
          </div>
        </div>
      </section>

      <!-- 5. How It Works -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. How It Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-4 bg-blue-50 rounded-lg text-center">
            <div class="text-3xl mb-2">1</div>
            <h3 class="font-semibold text-blue-800 mb-2">Click Button</h3>
            <p class="text-sm text-blue-700">Click the microphone button to start recording</p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg text-center">
            <div class="text-3xl mb-2">2</div>
            <h3 class="font-semibold text-green-800 mb-2">Speak</h3>
            <p class="text-sm text-green-700">Speak clearly into your microphone</p>
          </div>
          <div class="p-4 bg-purple-50 rounded-lg text-center">
            <div class="text-3xl mb-2">3</div>
            <h3 class="font-semibold text-purple-800 mb-2">Get Text</h3>
            <p class="text-sm text-purple-700">Speech is converted to text in real-time</p>
          </div>
        </div>
      </section>

      <!-- 6. Use Cases -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Common Use Cases</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Voice Search</h3>
            <p class="text-sm text-gray-600">Enable voice-based search functionality in your application.</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Dictation</h3>
            <p class="text-sm text-gray-600">Allow users to dictate notes, emails, or documents.</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Accessibility</h3>
            <p class="text-sm text-gray-600">Improve accessibility for users who prefer voice input.</p>
          </div>
          <div class="p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold text-gray-800 mb-2">Chat Applications</h3>
            <p class="text-sm text-gray-600">Enable voice messages in chat and messaging apps.</p>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">lang</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Language code (e.g., 'en-US', 'zh-TW')</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">transcriptChanged</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when speech is transcribed</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">start</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when recording starts</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">stop</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when recording stops</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">error</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired on recognition error</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">continuous</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Enable continuous recognition</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">interimResults</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Show interim results while speaking</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
:deep(.e-speech-to-text) {
  font-family: inherit;
}
</style>
