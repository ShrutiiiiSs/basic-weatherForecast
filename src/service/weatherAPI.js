// src/weatherapi.js

const API_KEY = '713bbf24eceb45ad92f192044250504'; // Removed trailing space

export async function fetchWeather(city) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      const data = await response.json(); // Correctly await json()
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  }
  
