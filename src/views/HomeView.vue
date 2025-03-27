<script setup lang="ts">
import { ref, computed } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import CityLink from '@/components/CityLink.vue'
import SearchInput from '@/components/SearchInput.vue'
import type { WeatherGroupResponse } from '@/types/OpenWeatherApi'

const API_KEY = ''
const CITY_IDS = [123456, 5391959, 987654].join(',')

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
  staleTime: 10 * 60 * 1000,
  initialData: {
    cnt: 3,
    list: [
      {
        id: 123456,
        name: 'Joinville',
        coord: { lon: -48.84, lat: -26.3 },
        main: {
          temp: 22.5,
          feels_like: 21.8,
          temp_min: 21.0,
          temp_max: 24.0,
          pressure: 1012,
          humidity: 60,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        wind: { speed: 3.1, deg: 150 },
        clouds: { all: 0 },
        dt: 1711516800,
      },
      {
        id: 5391959,
        name: 'San Francisco',
        coord: { lon: -122.42, lat: 37.77 },
        main: {
          temp: 18.2,
          feels_like: 17.5,
          temp_min: 16.0,
          temp_max: 20.0,
          pressure: 1015,
          humidity: 72,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d',
          },
        ],
        wind: { speed: 4.6, deg: 210 },
        clouds: { all: 40 },
        dt: 1711516900,
      },
      {
        id: 987654,
        name: 'Urubici',
        coord: { lon: -49.59, lat: -28.01 },
        main: {
          temp: 10.0,
          feels_like: 8.5,
          temp_min: 9.0,
          temp_max: 11.0,
          pressure: 1020,
          humidity: 80,
        },
        weather: [
          {
            id: 741,
            main: 'Fog',
            description: 'mist',
            icon: '50d',
          },
        ],
        wind: { speed: 2.1, deg: 180 },
        clouds: { all: 90 },
        dt: 1711517000,
      },
    ],
  },
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

    <div v-if="isLoading" class="loading">
      <ul class="city-list">
        <li v-for="(_, index) in Array.from({ length: 3 })" :key="index">
          <CityLink />
        </li>
      </ul>
    </div>
    <div v-else-if="error" class="message">
      ⚠️<br />
      Oops! No internet connection.<br />
      <span class="message-description">Please check your network and try again.</span>
    </div>
    <div v-else-if="filteredCities.length === 0" class="message">
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
