export type WeatherApiResponse = {
  coord: Coordinates;
  weather: WeatherCondition[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: SysInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type Coordinates = {
  lon: number;
  lat: number;
};

export type WeatherCondition = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export type Wind = {
  speed: number;
  deg: number;
};

export type Clouds = {
  all: number;
};

export type SysInfo = {
  type?: number;
  id?: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type WeatherGroupResponse = {
  cnt: number;
  list: CityWeather[];
};

export type CityWeather = {
  id: number;
  name: string;
  coord: Coordinates;
  main: MainWeather;
  weather: WeatherCondition[];
  wind: Wind;
  clouds: Clouds;
  dt: number;
};
