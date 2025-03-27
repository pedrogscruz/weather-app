<script setup lang="ts">
import { format } from 'date-fns'
</script>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { CityWeather } from '@/types/OpenWeatherApi'

export default defineComponent({
  props: {
    city: {
      type: Object as PropType<CityWeather>,
    },
  },
})
</script>

<template>
  <div v-if="!city" class="city-link">
    <div>
      <div>
        <h2 class="city-name skeleton-loading" data-testid="skeleton-city-name">XXXXXXXXXXX</h2>
        <span class="skeleton-loading" data-testid="skeleton-city-time">XX:XX</span>
      </div>
      <div>
        <span class="city-temperature skeleton-loading" data-testid="skeleton-city-temperature"
          >XX°</span
        >
      </div>
    </div>
    <div>
      <div>
        <span class="skeleton-loading">XXXXX XXXXXX</span>
      </div>
      <div>
        <span
          class="city-max-min-temperature skeleton-loading"
          data-testid="skeleton-max-min-temperature"
          >Max: XX° Min: XX°</span
        >
      </div>
    </div>
  </div>
  <RouterLink
    v-else
    :to="'/city/' + city.id"
    :class="['city-link', city.weather[0].main.toLocaleLowerCase()].join(' ')"
    data-testid="city-link"
  >
    <div>
      <div>
        <h2 class="city-name" data-testid="city-name">{{ city.name }}</h2>
        <span data-testid="city-time">{{ format(city.dt * 1000, 'HH:mm') }}</span>
      </div>
      <div>
        <span class="city-temperature" data-testid="city-temperature"
          >{{ Math.round(city.main.temp) }}°</span
        >
      </div>
    </div>
    <div>
      <div>
        <span data-testid="city-weather-condition">{{
          $t('weatherCondition.' + city.weather[0].description.replace(/ /g, '_'))
        }}</span>
      </div>
      <div>
        <span class="city-max-min-temperature" data-testid="city-max-min-temperature">
          Max: {{ city.main.temp_max }}° Min: {{ city.main.temp_min }}°
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.city-link {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-size: 100% auto;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.3);
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }
}

.city-link:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 6px -3px rgba(255, 255, 255, 0.3);
}

.city-name {
  margin: 0;
  font-weight: 600;
}

.city-temperature {
  font-size: 45px;
  text-shadow: 1px 4px 6px rgba(0, 0, 0, 0.8);
}

.city-max-min-temperature {
  text-shadow: 1px 4px 6px rgba(0, 0, 0, 0.8);
}

.thunderstorm {
  background-image: url('/Thunderstorm.jpeg');
}

.drizzle {
  background-image: url('/Drizzle.jpeg');
}

.rain {
  background-image: url('/Rain.jpeg');
}

.snow {
  background-image: url('/Snow.jpeg');
}

.mist {
  background-image: url('/Mist.jpeg');
}

.smoke {
  background-image: url('/Smoke.jpeg');
}

.haze {
  background-image: url('/Haze.jpeg');
}

.dust {
  background-image: url('/Dust.jpeg');
}

.fog {
  background-image: url('/Fog.jpeg');
}

.sand {
  background-image: url('/Sand.jpeg');
}

.ash {
  background-image: url('/Dust.jpeg');
}

.squall {
  background-image: url('/Squall.jpeg');
}

.tornado {
  background-image: url('/Tornado.jpeg');
}

.clear {
  background-image: url('/Clear.jpeg');
}

.clouds {
  background-image: url('/Clouds.jpeg');
}

.skeleton-loading {
  position: relative;
  color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-shadow: none;
}

.skeleton-loading:before {
  position: absolute;
  content: ' ';
  z-index: 2;
  inset: 0;
  animation: skeletonAnimation 1s linear infinite alternate;
  border-radius: 3px;
}

@keyframes skeletonAnimation {
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
