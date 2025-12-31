<script setup lang="ts">
import { OtpInputComponent as EjsOtpinput } from '@syncfusion/ej2-vue-inputs'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const otpValue = ref('')
const inputLog = ref<string[]>([])

const onValueChanged = (args: any) => {
  otpValue.value = args.value
  inputLog.value.push(`OTP Complete: ${args.value}`)
  if (inputLog.value.length > 5) {
    inputLog.value.shift()
  }
}

const onInput = (args: any) => {
  inputLog.value.push(`Input: ${args.value}`)
  if (inputLog.value.length > 5) {
    inputLog.value.shift()
  }
}

const onFocus = () => {
  inputLog.value.push('Focus event triggered')
  if (inputLog.value.length > 5) {
    inputLog.value.shift()
  }
}

const onBlur = () => {
  inputLog.value.push('Blur event triggered')
  if (inputLog.value.length > 5) {
    inputLog.value.shift()
  }
}
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">OTP Input Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic OTP Input -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic OTP Input</h2>
        <p class="text-gray-600 mb-6">Default 4-digit OTP input field</p>
        <ejs-otpinput id="basic-otp" />
      </section>

      <!-- 2. Input Length -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Input Length</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">length</code>
        </p>
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">4 digits (default):</p>
            <ejs-otpinput id="length-4" :length="4" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">5 digits:</p>
            <ejs-otpinput id="length-5" :length="5" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">6 digits:</p>
            <ejs-otpinput id="length-6" :length="6" />
          </div>
        </div>
      </section>

      <!-- 3. Placeholder -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Placeholder</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">placeholder</code>
        </p>
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Single character placeholder (applies to all):</p>
            <ejs-otpinput id="placeholder-single" placeholder="X" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Multi-character placeholder:</p>
            <ejs-otpinput id="placeholder-multi" placeholder="ABCD" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Number placeholder:</p>
            <ejs-otpinput id="placeholder-num" placeholder="0" />
          </div>
        </div>
      </section>

      <!-- 4. Separator -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Separator</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">separator</code>
        </p>
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Dash separator:</p>
            <ejs-otpinput id="sep-dash" separator="-" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Slash separator:</p>
            <ejs-otpinput id="sep-slash" separator="/" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Dot separator:</p>
            <ejs-otpinput id="sep-dot" separator="•" />
          </div>
        </div>
      </section>

      <!-- 5. Styling Modes -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Styling Modes</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">stylingMode</code>
        </p>
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Outlined (default):</p>
            <ejs-otpinput id="style-outlined" styling-mode="outlined" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Filled:</p>
            <ejs-otpinput id="style-filled" styling-mode="filled" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Underlined:</p>
            <ejs-otpinput id="style-underlined" styling-mode="underlined" />
          </div>
        </div>
      </section>

      <!-- 6. Input Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Input Types</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">type</code>
        </p>
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Number (default) - only numeric input:</p>
            <ejs-otpinput id="type-number" type="number" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Text - allows alphanumeric:</p>
            <ejs-otpinput id="type-text" type="text" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Password - masked input:</p>
            <ejs-otpinput id="type-password" type="password" />
          </div>
        </div>
      </section>

      <!-- 7. Pre-filled Value -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Pre-filled Value</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">value</code>
        </p>
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Pre-filled with "1234":</p>
            <ejs-otpinput id="prefilled" value="1234" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Pre-filled 6-digit code:</p>
            <ejs-otpinput id="prefilled-6" :length="6" value="123456" />
          </div>
        </div>
      </section>

      <!-- 8. Disabled State -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">8. Disabled State</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">disabled</code>
        </p>
        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-500 mb-2">Disabled empty:</p>
            <ejs-otpinput id="disabled-empty" :disabled="true" />
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-2">Disabled with value:</p>
            <ejs-otpinput id="disabled-value" value="5678" :disabled="true" />
          </div>
        </div>
      </section>

      <!-- 9. Events -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">9. Events</h2>
        <p class="text-gray-600 mb-6">
          Events: <code class="text-sm bg-gray-100 px-2 py-1 rounded">valueChanged</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">input</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">focus</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">blur</code>
        </p>
        <ejs-otpinput
          id="event-otp"
          :valuechanged="onValueChanged"
          :input="onInput"
          :focus="onFocus"
          :blur="onBlur"
        />
        <div class="mt-4">
          <p class="text-sm text-gray-700">Completed OTP: <strong>{{ otpValue || '(enter all digits)' }}</strong></p>
          <div class="mt-2 p-3 bg-gray-100 rounded text-sm font-mono max-h-32 overflow-y-auto">
            <p v-for="(log, index) in inputLog" :key="index" class="text-gray-600">{{ log }}</p>
            <p v-if="inputLog.length === 0" class="text-gray-400">Event log will appear here...</p>
          </div>
        </div>
      </section>

      <!-- 10. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">10. API Reference</h2>
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
                <td class="px-4 py-3 text-sm font-mono text-gray-900">length</td>
                <td class="px-4 py-3 text-sm text-gray-600">number</td>
                <td class="px-4 py-3 text-sm text-gray-600">Number of input fields (default: 4)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">value</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Pre-filled OTP value</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">type</td>
                <td class="px-4 py-3 text-sm text-gray-600">'number' | 'text' | 'password'</td>
                <td class="px-4 py-3 text-sm text-gray-600">Input type for OTP fields</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">placeholder</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Placeholder text for input fields</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">separator</td>
                <td class="px-4 py-3 text-sm text-gray-600">string</td>
                <td class="px-4 py-3 text-sm text-gray-600">Character displayed between inputs</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">stylingMode</td>
                <td class="px-4 py-3 text-sm text-gray-600">'outlined' | 'filled' | 'underlined'</td>
                <td class="px-4 py-3 text-sm text-gray-600">Visual style of inputs</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">disabled</td>
                <td class="px-4 py-3 text-sm text-gray-600">boolean</td>
                <td class="px-4 py-3 text-sm text-gray-600">Disable the OTP input</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">valueChanged</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired when all digits are entered</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">input</td>
                <td class="px-4 py-3 text-sm text-gray-600">event</td>
                <td class="px-4 py-3 text-sm text-gray-600">Fired on each input change</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
