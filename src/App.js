import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';

export default function App() {
  const [query, setQuery] = useState('');
	const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [feelsLike, setFeelsLike] = useState(null);
  const [airTemp, setAirTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [iconId, setIconId] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [windDeg, setWindDeg] = useState(null);

	const apiUrl = process.env.REACT_APP_API_URL;
	const apiKey = process.env.REACT_APP_API_KEY;

  const weatherApiUrl = `${apiUrl}/weather?q=${query}&units=metric&APPID=${apiKey}`;

  const search = evt => {
    if (evt.key === "Enter") {
    fetch(weatherApiUrl)
      .then(res =>  res.json())
      .then(weatherData => {
        console.log(weatherData);
        setWeather(weatherData);
        setCity(weatherData.name);
        setCountry(weatherData.sys.country);
        setFeelsLike(weatherData.main.feels_like);
        setAirTemp(weatherData.main.temp);
        setHumidity(weatherData.main.humidity);
        setSunrise(weatherData.sys.sunrise);
        setSunset(weatherData.sys.sunset);
        setIconId(weatherData.weather[0].id);
        setWindSpeed(weatherData.wind.speed);
        setWindDeg(weatherData.wind.deg);
      })
      .catch((error) => console.log(error));
    }
  }
  
  return (
    <>
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
        <main className="main">
          <Header
            text="What the weather"
          />
          <div className="search-box">
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Search city..." 
              onChange={e => setQuery(e.target.value)} 
              value={query} 
              onKeyPress={search} 
            />
          </div>

          {(typeof weather.main != "undefined") ? (
            <Weather 
              city={city}
              country={country}
              feelsLike={feelsLike}
              airTemp={airTemp}
              humidity={humidity}
              sunrise={sunrise}
              sunset={sunset}
              icon={iconId}
              windSpeed={windSpeed}
              windDeg={windDeg}
            />
          ) : ('')}
        </main>
      </div>
    </>
  );
}
