<script setup>
import UrlForm from './components/UrlForm.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1 class="m-0 bg-yellow-200">Enter a URL below</h1>
    <small>(e.g. https://willisdyson.dev)</small>
    <UrlForm placeholder="Shorten a link here..."/>
  </div>
</template>