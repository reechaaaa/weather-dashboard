# Weather App

A modern, responsive React weather application that provides real-time weather information with a clean, intuitive interface and dark/light mode toggle.



## Features

- **Real-time Weather Data**: Displays current temperature, humidity, and wind speed
- **City Search**: Look up weather information for any city worldwide
- **Dark/Light Mode**: Toggle between themes for comfortable viewing in any environment
- **Responsive Design**: Works on desktop and mobile devices
- **Auto-refresh**: Update current weather data with a click

## Tech Stack

- **React**: Frontend library for building the user interface
- **CSS**: Custom styling with light/dark theme support
- **OpenWeatherMap API**: For fetching weather data
- **Vite**: Build tool and development server

## Setup Instructions

### Prerequisites

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository: git clone https://github.com/reechaaaa/weather-dashboard.git

2. Install dependencies:npm install

3. Start the development server: npm run dev

4. Open your browser and navigate to `http://localhost:5173`


## API Details

### OpenWeatherMap API

- **API Key**: The app uses the OpenWeatherMap API which requires an API key
- **Current API Key**: `66d2996df6e8d0081f4f0806f7537781` (Note: For security reasons, replace this with your own API key)
- **Free Tier Limits**: 60 calls/minute, 1,000,000 calls/month
- **Documentation**: [OpenWeatherMap API Docs](https://openweathermap.org/api)

### Endpoints Used

- Current Weather Data: `https://api.openweathermap.org/data/2.5/weather`
- Parameters:
  - `q`: City name
  - `units`: Metric (for Celsius)
  - `apikey`: API key

## Usage

1. **Search for a City**: Type a city name in the search box and click the search icon
2. **Toggle Theme**: Click the theme button in the top-right corner to switch between dark and light mode
3. **Refresh Data**: Click the refresh button to update the weather data for the current city

## Weather Icons

The app uses custom weather icons for different weather conditions:
- Clear sky
- Cloudy
- Drizzle
- Rain
- Snow

## Project Structure

```
weather-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── clear.png
│   │   ├── cloud.png
│   │   ├── drizzle.png
│   │   ├── humidity.png
│   │   ├── rain.png
│   │   ├── react.svg
│   │   ├── search.png
│   │   ├── snow.png
│   │   └── wind.png
│   ├── components/
│   │   ├── Weather.css
│   │   └── Weather.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```