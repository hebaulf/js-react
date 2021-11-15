import axios from 'axios';
import React, { useEffect, useState } from "react";
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import './App.css';

const URL = `https://api.openweathermap.org/data/2.5/onecall`;
const API_KEY = `c44f77911579d2cbc82efc379374400c`;

export default function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [iconId, setIconId] = useState('');
  const [feelsLike, setFeelsLike] = useState(null);
  const [forecast, setForecast] = useState([]);
  

  // const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&APPID=${API_KEY}`)
      .then((weatherData) => {
        console.log(weatherData.data);
        setCity(weatherData.data.timezone);
        setTemperature(weatherData.data.current.temp);
        setHumidity(weatherData.data.current.humidity);
        setSunrise(weatherData.data.current.sunrise);
        setSunset(weatherData.data.current.sunset);
        setIconId(weatherData.data.current.weather[0].id);
        setFeelsLike(weatherData.data.current.feels_like);
        setForecast(weatherData.data.daily);
    });
    
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log('Latitude is: ', position.coords.latitude);
      console.log('Longitude is: ', position.coords.longitude);
    });

  }, [latitude, longitude])
  
  return (
    <>
      <Header />
      <main className="main">
        <WeatherCard 
          city={city}
          temperature={temperature}
          humidity={humidity}
          sunrise={sunrise}
          sunset={sunset}
          feelsLike={feelsLike}
          icon={iconId}
        />
        <Forecast 
          forecast={forecast} 
        />
      </main>
    </>
  );
}
