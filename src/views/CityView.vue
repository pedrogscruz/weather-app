<script lang="ts">
import { computed } from 'vue'

import type { LocationQueryValue } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { format } from 'date-fns'
import type { WeatherApiResponse } from '@/types/OpenWeatherApi'
import { getWeatherIcon } from '@/utils/weather-icon'

export default {
  name: 'WeatherComponent',
  setup() {
    const cityId = location.pathname.split('/').slice(-1)[0]

    const fetchWeather = async (id: LocationQueryValue) => {
      const API_KEY = import.meta.env.VITE_API_KEY
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`,
      )
      if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }
      return response.json()
    }

    const {
      data: weatherData,
      isLoading,
      isError,
    } = useQuery<WeatherApiResponse>({
      queryKey: ['weather', cityId],
      queryFn: () => fetchWeather(cityId),
      refetchInterval: 10 * 60 * 1000,
      retry: false,
    })

    // Format the date
    const formattedDate = computed(() => {
      return format(new Date(), "iiii dd MMMM 'of' yyyy")
    })

    // Get weather icon based on description
    const iconUrl = computed(() => {
      if (!weatherData) return ''
      const iconCode = weatherData.value?.weather[0].icon
      return `http://openweathermap.org/img/wn/${iconCode}.png`
    })

    // Determine temperature color
    const temperatureColor = computed(() => {
      if (weatherData.value === undefined) return 'white'
      const temp = weatherData.value.main.temp
      if (temp <= 5) return '#90A19D' // Blue
      if (temp <= 25) return '#F0941F' // Orange
      return '#EF6024' // Red
    })

    return {
      weatherData,
      formattedDate,
      iconUrl,
      temperatureColor,
      isError,
      isLoading,
      getWeatherIcon,
    }
  },
}
</script>

<template>
  <div v-if="isError" class="weather-container" data-testid="error-message">
    <div class="error-message">
      <h2>❌ City Not Found</h2>
      <p>We couldn't find weather data for this city.</p>
      <router-link to="/" class="back-button">Go Back</router-link>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else-if="isLoading" class="weather-container" data-testid="loading">
    <div class="weather-header">
      <h1 :style="{ marginBottom: 0 }">
        <span class="skeleton-loading">XXXXXXXXXXX</span>
      </h1>
      <p :style="{ margin: 0 }">
        <span class="skeleton-loading">XXXXX XX XXXXX XX XXXX</span>
      </p>
    </div>

    <!-- Weather Icon and Temperature -->
    <div class="weather-info">
      <span class="weather-icon rotate">☀️</span>
      <p
        :style="{ fontSize: '4.5em', color: temperatureColor, margin: 0 }"
        class="skeleton-loading"
      >
        XX°
      </p>
    </div>

    <!-- Pressure and Humidity -->
    <div class="weather-details">
      <div>
        <span class="skeleton-loading">XXXX hPa</span>
        <label>Pressure</label>
      </div>
      <div>
        <span class="skeleton-loading">XX%</span>
        <label>Humidity</label>
      </div>
    </div>
  </div>

  <div v-else-if="weatherData" class="weather-container">
    <!-- City Name and Date -->
    <div class="weather-header">
      <h1 :style="{ marginBottom: 0 }">{{ weatherData.name }}</h1>
      <p :style="{ margin: 0 }">{{ formattedDate }}</p>
    </div>

    <!-- Weather Icon and Temperature -->
    <div class="weather-info">
      <span class="weather-icon">{{ getWeatherIcon(weatherData.weather[0].description) }}</span>
      <p :style="{ fontSize: '4.5em', color: temperatureColor, margin: 0 }">
        {{ Math.round(weatherData.main.temp) }}°
      </p>
    </div>

    <!-- Pressure and Humidity -->
    <div class="weather-details">
      <div>
        <span>{{ weatherData.main.pressure }} hPa</span>
        <label>Pressure</label>
      </div>
      <div>
        <span>{{ weatherData.main.humidity }}%</span>
        <label>Humidity</label>
      </div>
    </div>
  </div>
  <div v-else>Loading weather data...</div>
</template>

<style scoped>
.weather-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  color: white;
}

.weather-header {
  margin-bottom: 40px;
}

.weather-info {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.weather-icon {
  font-size: 200px;
  white-space: nowrap;
}

.weather-details {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  padding: 0 1rem;
}

.weather-details > div {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  font-size: 1.2em;
}

.weather-details > div > label {
  font-size: 1em;
  color: #717171;
}

.error-message {
  color: white;
}

.back-button {
  color: white;
  background-color: #717171;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  padding: 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #454545;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 10s linear infinite;
}
</style>
