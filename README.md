# Weather App 🌦️

A Vue 3 + Vite application that displays real-time weather conditions for selected cities.

## 📌 Project Overview

This project is part of the **FrontEnd Challenge ProjectMark**, aiming to build a weather application that provides the **current temperature, humidity, and pressure** for three cities:

- **Joinville, SC (Brazil)**
- **San Francisco, CA (USA)**
- **Urubici, SC (Brazil)**

### ✅ Features & Requirements

- **Temperature displayed in Celsius**
- **Humidity displayed as a percentage**
- **Pressure information included**
- **Temperature color coding:**
  - 🔵 **5°C or below → Blue**
  - 🟠 **Above 5°C and up to 25°C → Orange**
  - 🔴 **Above 25°C → Red**
- **Weather updates every 10 minutes**
- **Weather data fetched from [OpenWeatherMap](https://openweathermap.org/)**

---

## 🛠️ Project Setup

### 📋 Prerequisites

- **Node.js** installed
- **NPM or Yarn** as a package manager
- **Recommended IDE:** [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur)

### 🚀 Installation & Running the Project

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-repo/weather-app.git
cd weather-app
npm install
```

Start the development server:

```sh
npm run dev
```

### 🏰️ Build for Production

```sh
npm run build
```

### 🔍 Linting

```sh
npm run lint
```

---

## 🛠️ Environment Variables Setup

To run the application and fetch weather data from OpenWeatherMap, you need to set up an **environment variable** for your API key.

1. Create a `.env` file in the root of the project.
2. Add the following line, replacing `your_api_key_here` with your actual OpenWeatherMap API key:

```sh
VITE_API_KEY=your_api_key_here
```

3. Restart the development server to apply the changes:

```sh
npm run dev
```

---

## 📚 Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

---

Feel free to contribute and improve the project! 🚀🌎
