# Weather App 🌦️

A Vue 3 + Vite application that displays real-time weather conditions for selected cities.

## 📌 Project Overview

This application provides the **current temperature, humidity, and pressure** for three cities:

- **Joinville, SC (Brazil)**
- **San Francisco, CA (USA)**
- **Urubici, SC (Brazil)**

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

### ⚖️ Running Tests

Run unit tests:

```sh
npm run test:unit
```

Run end-to-end (E2E) tests:

```sh
npm run test:e2e
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
