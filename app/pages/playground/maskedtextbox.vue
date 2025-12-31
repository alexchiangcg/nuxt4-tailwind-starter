<script setup lang="ts">
import { MaskedTextBoxComponent as EjsMaskedtextbox } from '@syncfusion/ej2-vue-inputs'
import { ref } from 'vue'

definePageMeta({
  layout: 'playground'
})

const phoneValue = ref('')
const dateValue = ref('')
const ssnValue = ref('')
const creditCardValue = ref('')
const timeValue = ref('')
const ipValue = ref('')
</script>

<template>
  <div class="p-10 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">MaskedTextBox Component</h1>
      <p class="text-gray-600">
        Package: <code class="text-sm bg-gray-100 px-2 py-1 rounded">@syncfusion/ej2-vue-inputs</code>
      </p>
    </div>

    <div class="space-y-10">
      <!-- 1. Basic Masks -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">1. Basic Mask Patterns</h2>
        <p class="text-gray-600 mb-6">Common mask patterns for different input types</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number (000-000-0000)</label>
            <ejs-maskedtextbox
              id="phone-mask"
              v-model="phoneValue"
              mask="000-000-0000"
              placeholder="Enter phone number"
              float-label-type="Auto"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Date (00/00/0000)</label>
            <ejs-maskedtextbox
              id="date-mask"
              v-model="dateValue"
              mask="00/00/0000"
              placeholder="MM/DD/YYYY"
              float-label-type="Auto"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">SSN (000-00-0000)</label>
            <ejs-maskedtextbox
              id="ssn-mask"
              v-model="ssnValue"
              mask="000-00-0000"
              placeholder="Enter SSN"
              float-label-type="Auto"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Credit Card (0000-0000-0000-0000)</label>
            <ejs-maskedtextbox
              id="credit-card-mask"
              v-model="creditCardValue"
              mask="0000-0000-0000-0000"
              placeholder="Enter card number"
              float-label-type="Auto"
            />
          </div>
        </div>
      </section>

      <!-- 2. Mask Elements -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">2. Mask Elements Reference</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">mask</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">0 - Digit (0-9)</label>
            <ejs-maskedtextbox id="digit-mask" mask="00000" placeholder="Digits only" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">9 - Digit or space</label>
            <ejs-maskedtextbox id="digit-space-mask" mask="99999" placeholder="Digits or spaces" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2"># - Digit, space, +/-</label>
            <ejs-maskedtextbox id="signed-mask" mask="#####" placeholder="Signed numbers" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">L - Letter (A-Z, a-z)</label>
            <ejs-maskedtextbox id="letter-mask" mask="LLLLL" placeholder="Letters only" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">? - Letter or space</label>
            <ejs-maskedtextbox id="letter-space-mask" mask="?????" placeholder="Letters or spaces" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">A - Alphanumeric</label>
            <ejs-maskedtextbox id="alphanum-mask" mask="AAAAA" placeholder="Alphanumeric" />
          </div>
        </div>
      </section>

      <!-- 3. Time and IP Format -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Time and Network Formats</h2>
        <p class="text-gray-600 mb-6">Specialized masks for time and IP addresses</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Time (00:00)</label>
            <ejs-maskedtextbox
              id="time-mask"
              v-model="timeValue"
              mask="00:00"
              placeholder="HH:MM"
              float-label-type="Auto"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">IP Address</label>
            <ejs-maskedtextbox
              id="ip-mask"
              v-model="ipValue"
              mask="000.000.000.000"
              placeholder="xxx.xxx.xxx.xxx"
              float-label-type="Auto"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Time with Seconds (00:00:00)</label>
            <ejs-maskedtextbox
              id="time-seconds-mask"
              mask="00:00:00"
              placeholder="HH:MM:SS"
              float-label-type="Auto"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">MAC Address</label>
            <ejs-maskedtextbox
              id="mac-mask"
              mask="AA:AA:AA:AA:AA:AA"
              placeholder="XX:XX:XX:XX:XX:XX"
              float-label-type="Auto"
            />
          </div>
        </div>
      </section>

      <!-- 4. Prompt Character -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Prompt Character</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">promptChar</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Default (_)</label>
            <ejs-maskedtextbox id="prompt-default" mask="000-000-0000" placeholder="Phone" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Hash (#)</label>
            <ejs-maskedtextbox id="prompt-hash" mask="000-000-0000" prompt-char="#" placeholder="Phone" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Asterisk (*)</label>
            <ejs-maskedtextbox id="prompt-asterisk" mask="000-000-0000" prompt-char="*" placeholder="Phone" />
          </div>
        </div>
      </section>

      <!-- 5. Float Label Types -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Float Label Types</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">floatLabelType</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Never</label>
            <ejs-maskedtextbox
              id="float-never"
              mask="000-000-0000"
              placeholder="Phone Number"
              float-label-type="Never"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Always</label>
            <ejs-maskedtextbox
              id="float-always"
              mask="000-000-0000"
              placeholder="Phone Number"
              float-label-type="Always"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Auto</label>
            <ejs-maskedtextbox
              id="float-auto"
              mask="000-000-0000"
              placeholder="Phone Number"
              float-label-type="Auto"
            />
          </div>
        </div>
      </section>

      <!-- 6. Custom Characters -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Custom Characters</h2>
        <p class="text-gray-600 mb-6">
          Property: <code class="text-sm bg-gray-100 px-2 py-1 rounded">customCharacters</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Hex Color (#HHHHHH)</label>
            <ejs-maskedtextbox
              id="hex-mask"
              mask="#PPPPPP"
              placeholder="#RRGGBB"
              :custom-characters="{ P: '0123456789ABCDEFabcdef' }"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Binary (8-bit)</label>
            <ejs-maskedtextbox
              id="binary-mask"
              mask="BBBBBBBB"
              placeholder="Binary"
              :custom-characters="{ B: '01' }"
            />
          </div>
        </div>
      </section>

      <!-- 7. Disabled and ReadOnly -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">7. Disabled and Read Only</h2>
        <p class="text-gray-600 mb-6">
          Properties: <code class="text-sm bg-gray-100 px-2 py-1 rounded">enabled</code>,
          <code class="text-sm bg-gray-100 px-2 py-1 rounded">readonly</code>
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Disabled</label>
            <ejs-maskedtextbox
              id="disabled-mask"
              mask="000-000-0000"
              value="123-456-7890"
              :enabled="false"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Read Only</label>
            <ejs-maskedtextbox
              id="readonly-mask"
              mask="000-000-0000"
              value="123-456-7890"
              :readonly="true"
            />
          </div>
        </div>
      </section>

      <!-- 8. API Reference -->
      <section class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">8. API Reference</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mask Element</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">0</td>
                <td class="px-4 py-3 text-sm text-gray-600">Digit required (0-9)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">9</td>
                <td class="px-4 py-3 text-sm text-gray-600">Digit or space (optional)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">#</td>
                <td class="px-4 py-3 text-sm text-gray-600">Digit, space, or sign (+/-)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">L</td>
                <td class="px-4 py-3 text-sm text-gray-600">Letter required (A-Z, a-z)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">?</td>
                <td class="px-4 py-3 text-sm text-gray-600">Letter or space (optional)</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">A</td>
                <td class="px-4 py-3 text-sm text-gray-600">Alphanumeric (letter or digit)</td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm font-mono text-gray-900">&amp;</td>
                <td class="px-4 py-3 text-sm text-gray-600">Any character required</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 text-sm font-mono text-gray-900">C</td>
                <td class="px-4 py-3 text-sm text-gray-600">Any character or space</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>
