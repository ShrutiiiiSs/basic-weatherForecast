import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { InputName } from "./component/input";
import "./App.css";
import Card  from "./component/card";
import { fetchWeather } from "./service/weatherAPI";


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    console.log("city is ", city)
    const reponse = fetchWeather(city)
    setWeatherData()
  }, [city]);


  useEffect(() => {
    console.log("InputName component mounted");
    setCity("Delhi"); 
  }, []);

  



  const mouseClickk = (city)=>
    {
      setCity(city);
    console.log("event happeend again", city)
    }
  return (
    <>
      <h1> weather forecast app</h1>
      <InputName  city ={city}onClick = {mouseClickk}  />
      
      <div>
      {weatherData ? (
        <Card city={weatherData.city} temp={weatherData.temp} />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>

    </>    
  );
}

export default App;
