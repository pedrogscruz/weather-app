export const getWeatherIcon = (description: string) => {
  switch (description) {
    case "few clouds":
      return "🌤️";
    case "scattered clouds":
      return "⛅";
    case "broken clouds":
      return "🌥️";
    case "overcast clouds":
      return "☁️";
    case "clear sky":
      return "☀️";
    case "thunderstorm with light rain":
    case "thunderstorm with rain":
    case "thunderstorm with drizzle":
    case "thunderstorm with light drizzle":
      return "⛈️";
    case "thunderstorm with heavy rain":
      return "🌩️";
    case "light thunderstorm":
      return "⚡";
    case "thunderstorm":
      return "🌩️";
    case "heavy thunderstorm":
      return "🌩️⛈️";
    case "ragged thunderstorm":
      return "🌩️🌪️";
    case "thunderstorm with heavy drizzle":
      return "⛈️🌧️";
    case "light intensity drizzle":
    case "drizzle":
    case "shower rain and drizzle":
    case "shower drizzle":
      return "🌦️";
    case "heavy intensity drizzle":
    case "drizzle rain":
      return "🌧️";
    case "heavy intensity drizzle rain":
      return "🌧️🌨️";
    case "heavy shower rain and drizzle":
      return "🌦️🌧️";
    case "light rain":
    case "light intensity shower rain":
    case "shower rain":
      return "🌦️";
    case "moderate rain":
      return "🌧️";
    case "heavy intensity rain":
      return "🌧️🌨️";
    case "very heavy rain":
      return "🌧️🌊";
    case "extreme rain":
      return "🌧️🌊💀";
    case "freezing rain":
      return "❄️🌧️";
    case "heavy intensity shower rain":
      return "🌧️🌊";
    case "ragged shower rain":
      return "🌧️💨";
    case "light snow":
      return "🌨️";
    case "snow":
      return "❄️";
    case "heavy snow":
      return "🌨️❄️";
    case "sleet":
    case "light shower sleet":
    case "shower sleet":
      return "🌨️💦";
    case "light rain and snow":
      return "🌨️🌧️";
    case "rain and snow":
      return "🌧️❄️";
    case "light shower snow":
      return "🌨️";
    case "shower snow":
      return "🌨️❄️";
    case "heavy shower snow":
      return "🌨️❄️🌊";
    case "mist":
    case "haze":
    case "fog":
      return "🌫️";
    case "smoke":
      return "🚬💨";
    case "sand/dust whirls":
    case "dust":
      return "🌪️";
    case "sand":
      return "🏜️";
    case "volcanic ash":
      return "🌋🌫️";
    case "squalls":
      return "💨🌊";
    case "tornado":
      return "🌪️";
    default:
      return "❓";
  }
}
