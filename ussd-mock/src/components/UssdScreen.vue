<template>
  <!-- Phone Number Input Container -->
  <div class="w-full max-w-md mx-auto mt-6">
      <div class="mb-6">
        <label for="phoneNumber" class="block text-sm font-medium text-gray-700 mb-2 text-center">Phone Number</label>
        <input
          id="phoneNumber"
          ref="phoneInput"
          type="tel"
          v-model="phoneNumber"
          placeholder="Enter phone number (e.g., +67578303104)"
          class="w-full px-4 py-2 text-lg text-center text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-150 ease-in-out"
          @blur="keepPhoneFocus"
        />
      </div>
    </div>
    <div class="flex justify-center my-10">
      <div class="flex justify-center phone-wrapper relative">
        <img src="@/assets/phone_outline.png" class="absolute w-full bottom-0 z-0" alt="Phone Outline">
        <div class="screen relative overflow-hidden">
          <div class="h-full relative">
            <div class="h-10 w-full px-4 absolute z-50 flex flex-row justify-between items-center text-gray-900 bg-white">
              <span class="text-sm">USSD Simulator</span>
              <div class="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 fill-current">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M2 22h20V2z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 fill-current ml-2">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path>
                </svg>
              </div>
            </div>
            <div class="h-full relative pt-10 bg-white flex flex-col">
              <div class="flex flex-col flex-grow justify-end">
                <div class="phone h-16 over shadow-inner">
                  <input
                    ref="ussdInput"
                    type="text"
                    v-model="ussdCode"
                    class="h-full w-full outline-none text-2xl px-4 text-center text-gray-800"
                    @blur="keepFocus"
                  />
                </div>
                <div class="grid grid-cols-3 border-t border-gray-400 bg-white row-gap-3 grid-rows-3 py-4">
                  <!-- Number buttons -->
                  <div v-for="key in keys" :key="key.value" class="flex justify-center items-center">
                    <div
                      class="flex flex-col justify-center items-center h-12 w-12 rounded-full py-3 cursor-pointer"
                      @click="appendToUssdCode(key.value)"
                    >
                      <span :class="key.class">{{ key.value }}</span>
                      <span class="text-xs text-gray-500 uppercase">{{ key.label }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-span-3 py-3 flex justify-center items-center">
                  <div
                    @click="sendUssdCode"
                    class="h-12 w-12 rounded-full shadow-md justify-center items-center bg-green-600 flex text-white cursor-pointer hover:bg-green-500 transition duration-150 ease-in-out"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 pointer-events-none fill-current">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="h-10 flex flex-row justify-center items-center border-t border-gray-300 mt-auto">
                <span class="cursor-pointer text-gray-600 hover:text-gray-700 transition duration-150 ease-in-out" @click="$router.push('/')">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 fill-current pointer-events-none">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div v-if="loading" class="absolute h-full w-full top-0 z-50 px-3 flex flex-col justify-center items-center">
            <div class="absolute h-full w-full top-0 bg-black opacity-50 z-30"></div>
            <div class="relative bg-white rounded-md shadow-lg p-3 w-full z-40">
              <div class="flex flex-row justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" class="loader h-10">
                  <g fill="none">
                    <circle cx="22" cy="22" r="20" stroke-opacity="0.5" stroke-width="4"></circle>
                    <circle cx="22" cy="22" r="20" stroke="#3498db" stroke-width="4" stroke-linecap="round">
                    </circle>
                  </g>
                </svg>
                <span class="text ml-3 text-gray-600">USSD code running...</span>
              </div>
            </div>
          </div>
          <div v-if="responseMessage" class="absolute h-full w-full top-0 z-50 px-3 flex flex-row justify-center items-center">
            <div class="absolute h-full w-full top-0 bg-black opacity-50 z-30"></div>
            <div class="relative bg-white rounded-md shadow-lg p-4 w-full z-40 max-w-md">
              <div class="flex flex-col">
                <div class="text-md text-gray-800 leading-relaxed" v-html="formattedResponseMessage"></div>
                <div v-if="msgType === 'CON'" class="mt-4">
                  <input
                    ref="ussdInput"
                    type="text"
                    v-model="ussdCode"
                    class="h-full w-full outline-none text-2xl px-4 text-center text-gray-800"
                    @blur="keepFocus"
                    @keyup.enter="sendUssdCode"
                  />
                </div>

                <div class="mt-4 flex justify-between">
                  <div v-if="msgType === 'CON'" class="flex items-center">
                    <button @click="sendUssdCode" class="text-orange-500 hover:text-orange-600 font-semibold uppercase transition duration-150 ease-in-out">SEND</button>
                  </div>
                  <div class="flex items-center">
                    <button @click="clearMessage" class="text-orange-500 hover:text-orange-600 font-semibold uppercase transition duration-150 ease-in-out">CANCEL</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>



<script>
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

export default {
  name: "UssdScreen",
  data() {
    return {
      ussdCode: "*123#",
      phoneNumber: '+67570001111',
      sessionId: "",
      keys: [
        { value: "1", label: "~", class: "text-2xl text-blue-600" },
        { value: "2", label: "abc", class: "text-2xl text-blue-600" },
        { value: "3", label: "def", class: "text-2xl text-blue-600" },
        { value: "4", label: "ghi", class: "text-2xl text-blue-600" },
        { value: "5", label: "jkl", class: "text-2xl text-blue-600" },
        { value: "6", label: "mno", class: "text-2xl text-blue-600" },
        { value: "7", label: "pqrs", class: "text-2xl text-blue-600" },
        { value: "8", label: "tuv", class: "text-2xl text-blue-600" },
        { value: "9", label: "wxyz", class: "text-2xl text-blue-600" },
        { value: "*", label: "", class: "text-2xl text-gray-600" },
        { value: "0", label: "+", class: "text-2xl text-blue-600" },
        { value: "#", label: "", class: "text-2xl text-gray-600" },
      ],
      loading: false,
      responseMessage: "",
      msgType: false,
      initialDial: true
    };
  },
  methods: {
    appendToUssdCode(value) {
      this.ussdCode += value;
      this.keepFocus();
    },
    keepFocus() {
      if (this.$refs.ussdInput) {
        this.$refs.ussdInput.focus();
      }
    },
    logPhoneInput(event) {
      console.log('Phone input changed:', event.target.value, 'v-model:', this.phoneNumber);
    },
    async sendUssdCode() {
      // Validation: Check phone number
      if (!this.isValidPhoneNumber(this.phoneNumber)) {
        this.responseMessage = 'Please enter a valid phone number (e.g., +67578303104)';
        return;
      }
      // Validation: Check if the input is empty or not in USSD format
      if (this.ussdCode === "") {
        return; // Do nothing if input is empty
      }

      // For initial dial, check if the input is a valid USSD code
      if (this.initialDial && !this.isValidUssdCode(this.ussdCode)) {
        return; // Do nothing if invalid USSD code format
      }

      // // For subsequent inputs, check if the input is numeric
      // if (!this.initialDial && !/^\d+$/.test(this.ussdCode)) {
      //   return; // Do nothing if subsequent input is not numeric
      // }

      this.loading = true;

      const userData = {
        // "USERID": "Userid",
        "phoneNumber": this.phoneNumber,
        "MSG": this.ussdCode,
        "MSGTYPE": this.initialDial,
        "serviceCode": this.ussdCode,
        "network": "DIGICEL",
        "sessionId": this.sessionId
      };

      try {
        const response = await axios.post('http://127.0.0.1:8000/dental_ussd/dental_ussd_gw/', userData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token 41209692c1c8862776d2d578e7d6e7c0b49595ef'
          }
        });
        console.log('Response:', response.data);

        if (response.data && response.data.MSG) {
          this.responseMessage = response.data.MSG.replace(/\n/g, '<br>');
          this.msgType = response.data.MSGTYPE;
          // Generate new sessionId if MSGTYPE is END
          if (response.data.MSGTYPE === 'END') {
            this.sessionId = uuidv4();
            console.log('New Session ID:', this.sessionId);
          }
        } else {
          console.warn('Unexpected response format:', response.data);
        }

        this.ussdCode = '';
        this.initialDial = false;
      } catch (error) {
          console.error('Error details:', {
              message: error.message,
              response: error.response ? {
                  status: error.response.status,
                  data: error.response.data,
                  headers: error.response.headers
              } : null,
              request: error.request
          });
      } finally {
        this.loading = false;
      }
    },
    isValidUssdCode(code) {
      // Simple USSD format validation (adjust regex according to your needs)
      const ussdPattern = /^\*[\d*#]+#$/;
      return ussdPattern.test(code);
    },
    isValidPhoneNumber(phone) {
      const phonePattern = /^\+\d{10,15}$/;
      return phonePattern.test(phone);
    },
    clearMessage() {
      this.responseMessage = "";
      this.ussdCode = "";
      this.msgType = false;
      this.initialDial = true; // Reset for new USSD session
      this.keepFocus();
    }
  },
  computed: {
    formattedResponseMessage() {
      return this.responseMessage.replace(/\n/g, '<br>');
    }
  },
  mounted() {
    this.sessionId = uuidv4();
    console.log('Session ID:', this.sessionId);
    // this.keepFocus();
    this.$nextTick(() => {
      if (this.$refs.phoneInput) {
        this.$refs.phoneInput.focus();
      }
    });
  },
  beforeUnmount() {
    this.$refs.ussdInput && this.$refs.ussdInput.removeEventListener('blur', this.keepFocus);
  }
};
</script>

<style scoped>
/* Loader animation */
.loader {
  border-top-color: #3498db;
  animation: spin 1s linear infinite;
  height: 24px;
  width: 24px;
  margin-right: 10 px; 
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

<style scoped src="@/assets/ussd.css"></style>
  
