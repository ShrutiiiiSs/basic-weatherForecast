// src/weatherapi.js

const API_KEY = '713bbf24eceb45ad92f192044250504'; // Removed trailing space

export async function fetchWeather(city) {
  try {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=713bbf24eceb45ad92f192044250504&q=${city}&aqi=no`


    );

    return response;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}
