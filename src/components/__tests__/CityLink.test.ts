import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import CityLink from '@/components/CityLink.vue';
import { createI18n } from 'vue-i18n';
import { format } from 'date-fns';
import router from "@/router"

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      weatherCondition: {
        clear_sky: 'Clear Sky',
      },
    },
  },
});

const cityExample = {
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
};

describe('CityLink', () => {
  it('renders city weather details correctly', async () => {
    const wrapper = mount(CityLink, {
      props: { city: cityExample },
      global: { plugins: [i18n, router] },
    });

    expect(wrapper.find('[data-testid="city-name"]').text()).toBe('Joinville');
    expect(wrapper.find('[data-testid="city-time"]').text()).toBe(format(cityExample.dt * 1000, 'HH:mm'));
    expect(wrapper.find('[data-testid="city-temperature"]').text()).toBe('23°');
    expect(wrapper.find('[data-testid="city-weather-condition"]').text()).toBe('Clear Sky');
    expect(wrapper.find('[data-testid="city-max-min-temperature"]').text()).toBe('Max: 24° Min: 21°');
  });

  it('renders skeleton loading when no city is provided', async () => {
    const wrapper = mount(CityLink, {
      props: {},
      global: { plugins: [i18n, router] },
    });

    expect(wrapper.find('[data-testid="skeleton-city-name"]').text()).toBe('XXXXXXXXXXX');
    expect(wrapper.find('[data-testid="skeleton-city-time"]').text()).toBe('XX:XX');
    expect(wrapper.find('[data-testid="skeleton-city-temperature"]').text()).toBe('XX°');
    expect(wrapper.find('[data-testid="skeleton-max-min-temperature"]').text()).toBe('Max: XX° Min: XX°');
  });
});
