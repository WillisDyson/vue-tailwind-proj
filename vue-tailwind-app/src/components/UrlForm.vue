<script setup>
import { ref, computed } from 'vue'
import UrlInputField from './UrlInputField.vue'
import UrlFormSubmit from './UrlFormSubmit.vue'

const originalUrl = ref('')
const shortenedUrl = ref('')
const isLoading = ref(false)
const error = ref('')
import axios from 'axios'

const isValidShortUrl = computed(() =>
  shortenedUrl.value &&
  !shortenedUrl.value.startsWith('Error')
)

const submitUrl = async () => {
  isLoading.value = true
  shortenedUrl.value = ''
  error.value = ''

  try {
    const params = new URLSearchParams()
    params.append('url', originalUrl.value)

    const response = await axios.post('http://localhost:3001/shorten', params)
    if (response.data.result_url) {
      shortenedUrl.value = response.data.result_url
    } else {
      error.value = 'Is the URL incorrect?'
    }
  } catch (err) {
    error.value = (err.response?.data?.error || err.message)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <small class="mb-4 text-[1rem]">(e.g. https://willisdyson.dev)</small>
  <form @submit.prevent="submitUrl" class="flex w-full max-w-[800px] sm:flex-row flex-col">
    <UrlInputField v-model="originalUrl" placeholder="Enter a valid URL" />
    <UrlFormSubmit />
  </form>
  <div class="flex items-center">
    <div v-if="isLoading" class="mt-4 text-gray-500">Shortening...</div>
    <div v-if="isValidShortUrl" class="mt-4">
      <span class="text-green-500">Short URL: </span>
      <a class="underline" :href="shortenedUrl" target="_blank">{{ shortenedUrl }}</a>
    </div>
    <div v-if="error" class="mt-4">
      <span class="text-red-400">Error: </span>
      <span>{{ error }}</span>
    </div>
  </div>
</template>