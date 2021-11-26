import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

export default function App() {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log('Latitude is: ', position.coords.latitude);
      console.log('Longitude is: ', position.coords.longitude);
    });

    getWeather(latitude, longitude)
    .then(weather => {
      setWeatherData(weather);
      setError(null);
    })
    .catch(err => {
      setError(err.message);
    });

    getForecast(latitude, longitude)
    .then(data => {
      setForecast(data);
      setError(null);
    })
    .catch(err => {
      setError(err.message);
    });
// eslint-disable-next-line
  }, [latitude, longitude, error]);

  function handleResponse(response) {
    if (response.ok) {
      return response.json();
      
    } else {
      throw new Error("Please Enable your Location in your browser!");
    }
  }

  function getWeather(latitude, longitude) {
    return fetch(
      `${process.env.API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env._API_KEY}`
    )
    .then(res => handleResponse(res))
    .then(weather => {
      if (Object.entries(weather).length) {
        const mappedData = mapDataToWeatherInterface(weather);
        console.log('Mapped Data: ', mappedData);
        return mappedData;
      }
    });
  }

  function getForecast(latitude, longitude) {
    return fetch(
      `${process.env.API_URL}/forecast/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.API_KEY}`
    )
      .then(res => handleResponse(res))
      .then(forecastData => {
        if (Object.entries(forecastData).length) {
          return forecastData.list
            .filter(forecast => forecast.dt_txt.match(/09:00:00/))
            .map(mapDataToWeatherInterface);
        }
      });
  }

  function mapDataToWeatherInterface(data) {
    const mapped = {
      date: data.dt * 1000, // convert from seconds to milliseconds
      description: data.weather[0].main,
      temperature: Math.round(data.main.temp),
    };
  
    // Add extra properties for the five day forecast: dt_txt, icon, min, max
    if (data.dt_txt) {
      mapped.dt_txt = data.dt_txt;
    }
  
    return mapped;
  }
  
  return (
    <>
      <Header />
        {(typeof weatherData.main != 'undefined') ? (
          <main className="main">
            <Weather weatherData={weatherData} />
            <Forecast forecast={forecast} weatherData={weatherData} />
          </main>
        
        ) : (

          <div>
            <div className="active visible">
              <div className="content">
                <div className="ui loader">Loading...</div>
              </div>
            </div>
            <img src="/images/wireframe/short-paragraph.png" className="ui image" alt=""/>
          </div>

        )}  
    </>
  );
}
