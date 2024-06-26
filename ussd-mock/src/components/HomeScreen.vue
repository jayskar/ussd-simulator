<template>
  <div class="flex justify-center my-10">
    <div class="flex justify-center phone-wrapper relative">
      <!-- Phone Outline Image -->
      <img src="@/assets/phone_outline.png" class="absolute w-full bottom-0 z-0" alt="Phone Outline">
      
      <!-- Screen Content -->
      <div class="screen relative overflow-hidden">
        <div class="h-full relative">
          <!-- Status Bar -->
          <div class="h-10 w-full px-4 absolute z-50 flex flex-row justify-between items-center text-white bg-transparent">
            <span class="text-sm">Ussd Simulator</span>
            <div class="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 fill-current">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M2 22h20V2z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 fill-current ml-2">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"></path>
              </svg>
            </div>
          </div>
  
          <!-- Home Screen -->
          <div class="homeScreen relative h-full pt-10">
            <div class="absolute z-0 top-0 h-full w-full bg-black opacity-50"></div>
            <div class="relative z-10 h-full flex flex-col">
              <div class="text-white text-2xl text-center mt-16">{{ currentDate }}</div>
              <div class="text-white text-xl text-center mt-4">Anthony Sackey</div>
              <div class="text-white text-sm text-center mt-16"></div>
              <div class="flex flex-row justify-center mt-auto mb-12">
                <!-- Phone Button -->
                <div class="h-12 w-12 rounded-lg shadow-lg bg-white flex justify-center items-center cursor-pointer" @click="goToUssdScreen">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 pointer-events-none">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                  </svg>
                </div>
                <!-- Menu Button -->
                <div class="h-12 w-12 ml-12 rounded-lg shadow-lg bg-white flex justify-center items-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 pointer-events-none">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path>
                  </svg>
                </div>
                <!-- Other Button -->
                <!-- <div class="h-12 w-12 ml-12 rounded-lg shadow-lg bg-white flex justify-center items-center cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-8 pointer-events-none">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"></path>
                  </svg>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "HomeScreen",
    data() {
      return {
        currentDate: ''
      };
    },
    mounted() {
      this.setCurrentDate();
    },
    methods: {
      goToUssdScreen() {
        this.$router.push('/ussd');
      },
      setCurrentDate() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
        const date = new Date();
        const dayName = days[date.getDay()];
        const monthName = months[date.getMonth()];
        const day = date.getDate();
  
        this.currentDate = `${dayName}, ${monthName} ${day}`;
      }
    }
  };
  </script>
  
  <style scoped src="@/assets/styles.css"></style>
  