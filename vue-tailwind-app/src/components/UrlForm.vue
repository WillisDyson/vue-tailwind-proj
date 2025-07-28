<script setup>
import { ref } from 'vue'
import UrlInputField from './UrlInputField.vue'
import UrlFormSubmit from './UrlFormSubmit.vue'

const originalUrl = ref('')
const shortenedUrl = ref('')
const isLoading = ref(false)
const error = ref('')
import axios from 'axios'


const submitUrl = async () => {
  isLoading.value = true
  shortenedUrl.value = ''

  try {
    const params = new URLSearchParams()
    params.append('url', originalUrl.value)

    const response = await axios.post('http://localhost:3001/shorten', params)
    shortenedUrl.value = response.data.result_url || 'Error: No URL returned'
  } catch (error) {
    shortenedUrl.value = 'Error: ' + (error.response?.data?.error || error.message)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <form @submit.prevent="submitUrl" class="flex">
    <UrlInputField v-model="originalUrl" placeholder="Enter a URL to shorten" />
    <UrlFormSubmit />

    <div v-if="isLoading" class="mt-4 text-gray-500">Shortening...</div>
    <div v-if="shortenedUrl" class="mt-4 text-green-500">Short URL: <a :href="shortenedUrl" target="_blank">{{ shortenedUrl }}</a></div>
    <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
  </form>
</template>