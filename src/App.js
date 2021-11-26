import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

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

  navigator.geolocation.getCurrentPosition(function(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log('Latitude is: ', position.coords.latitude);
    console.log('Longitude is: ', position.coords.longitude);
  });

  useEffect(() => {
    axios.get(`${process.env.API_URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&APPID=${process.env.API_KEY}`)
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
// eslint-disable-next-line
  }, [latitude, longitude]);
  
  return (
    <>
      <Header />
      <main className="main">
        <Weather 
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
