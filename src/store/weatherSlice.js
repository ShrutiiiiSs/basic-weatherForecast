import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather } from '../service/weatherAPI';

// Async thunk for fetching weather
export const fetchWeatherData = createAsyncThunk(
  'weather/',
  async (city) => {
    const response = await fetchWeather(city);
    return response;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: 'Delhi',
    weatherData: null,
    status: 'idle',
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weatherData = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state) => {
        state.status = 'failed';
        state.weatherData = { error: 'Failed to fetch data' };
      });
  }
});

export const { setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
