<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import CityLink from '@/components/CityLink.vue'
import SearchInput from '@/components/SearchInput.vue'
import type { WeatherGroupResponse } from '@/types/OpenWeatherApi'

const API_KEY = import.meta.env.VITE_API_KEY
const CITY_IDS = [3459712, 5391959, 3445709].join(',')

// Fetch weather data
const fetchWeather = async () => {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/group?id=${CITY_IDS}&units=metric&appid=${API_KEY}`,
  )
  if (!res.ok) throw new Error('Failed to fetch weather data')
  return res.json()
}

const { data, isLoading, error } = useQuery<WeatherGroupResponse>({
  queryKey: ['weatherGroup'],
  queryFn: fetchWeather,
  refetchInterval: 10 * 60 * 1000,
  retry: false,
})

const searchTerm = ref('')

// Filter cities based on search input
const filteredCities = computed(() => {
  if (!data.value) return []
  return data.value.list.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.value.toLowerCase()),
  )
})
</script>

<template>
  <div class="weather-container">
    <h1 class="title">{{ $t('common.weather') }}</h1>

    <SearchInput v-model="searchTerm" :placeholder="$t('homeView.searchPlaceholder')" />

    <div v-if="error" class="message" data-testid="error-message">
      ⚠️<br />
      Oops! No internet connection.<br />
      <span class="message-description">Please check your network and try again.</span>
    </div>

    <div v-else-if="isLoading" class="loading" data-testid="loading">
      <ul class="city-list">
        <li v-for="(_, index) in Array.from({ length: 3 })" :key="index">
          <CityLink />
        </li>
      </ul>
    </div>

    <div v-else-if="filteredCities.length === 0" class="message" data-testid="no-results">
      🌍🏙️<br />
      Oops! No results found.<br />
      <span class="message-description">Please check the city name and try again.</span>
    </div>

    <ul v-else class="city-list">
      <li v-for="city in filteredCities" :key="city.id">
        <CityLink :city="city" />
      </li>
    </ul>
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
  color: white;
}

.city-list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style: none;
  padding: 0;
}

.message {
  color: white;
  text-align: center;
}

.message-description {
  color: #717171;
  text-align: center;
  font-size: 14px;
}
</style>
