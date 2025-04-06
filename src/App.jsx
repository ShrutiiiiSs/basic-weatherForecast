import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { InputName } from "./component/input";
import "./App.css";
import Card  from "./component/card";
import { fetchWeather } from "./service/weatherAPI";
import {React} from 'react';

function App() {
  
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Delhi");
  const [response,setResponse] = useState("");

useEffect(() => {
  console.log("inside in app.jsx ", city);
  const fetchData = async () => {
    const response = await fetchWeather(city);
    setWeatherData(response); 
  };

  fetchData(); // Call the async function
}, [city]);


  const mouseClickk = (city)=>
    {
      setCity(city);
    console.log("event happeend again", city)
    }

    
  return (
    <>

      <h1> weather forecast app</h1>
      <InputName  city ={city} onClick = {mouseClickk}  />
      
      <div>
      {weatherData  && ! weatherData.error ? (
        <Card response ={weatherData} />
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>


    </>    
  );
}

export default App;
