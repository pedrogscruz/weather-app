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

## 🔎 Evaluation Criteria

Your implementation will be evaluated based on:

- ✅ **Clear instructions** on how to run the project
- ✅ **100% implementation** of the specified requirements
- ✅ **Usability and user experience**
- ✅ **Code quality, maintainability, and reusability**
- ✅ **Bonus:** Automated tests (not required but appreciated!)

---

## 🛠️ Customization & Configuration

This project is built using **Vue 3 + Vite**. For additional configuration options, refer to the [Vite Documentation](https://vite.dev/config/).

---

## 📙 Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

---

Feel free to contribute and improve the project! 🚀🌎
