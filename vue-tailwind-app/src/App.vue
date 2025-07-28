<script setup>
import UrlForm from './components/UrlForm.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen pb-[100px] px-4">
    <h1 class="mb-4 sm:text-[2.75rem] text-[1.8rem] text-[#00CF6E] font-[700]">URL shortener Vue.js/Tailwind app</h1>
    <p class="mb-20">A Vue.js practice app. The app uses Tailwind CSS for styling and Axios for making HTTP requests.</p>
    <UrlForm />
  </div>
</template>