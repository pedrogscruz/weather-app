<script setup lang="ts">
import { ref } from 'vue'

const searchTerm = ref('')
</script>

<template>
  <div class="weather-container">
    <h1 class="title">Weather</h1>
    <input v-model="searchTerm" type="text" placeholder="Search city" class="search-bar" />
  </div>
</template>

<style scoped>
.weather-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}

.title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.search-bar {
  width: -webkit-fill-available;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
