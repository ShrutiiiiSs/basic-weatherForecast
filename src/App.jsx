import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { InputName } from "./component/input";
import "./App.css";
import Card from "./component/card";
import { setCity, fetchWeatherData } from "./store/weatherSlice";

function App() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weather.city);
  const weatherData = useSelector((state) => state.weather.weatherData);
  const status = useSelector((state) => state.weather.status);

  useEffect(() => {
    console.log("inside in app.jsx", city);
    dispatch(fetchWeatherData(city));
  }, [city, dispatch]);

  const mouseClickk = (city) => {
    console.log("event happened again", city);
    dispatch(setCity(city));
  };

  return (
    <>
      <h1>Weather Forecast App</h1>
      <InputName city={city} onClick={mouseClickk} />
      <div>
        {status === 'loading' ? (
          <p>Loading weather data...</p>
        ) : weatherData && !weatherData.error ? (
          <Card response={weatherData} />
        ) : (
          <p>Error fetching weather data.</p>
        )}
      </div>
    </>
  );
}

export default App;
