import React, { useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faBolt, 
	faSun, 
	faCloud, 
	faCloudSun, 
	faCloudRain, 
	faCloudShowersHeavy, 
	faSnowflake, 
	faSmog  
} from '@fortawesome/free-solid-svg-icons';

export default function Weather (
	{weatherData}
) {

	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState(null);
	const [humidity, setHumidity] = useState(null);
	const [sunrise, setSunrise] = useState(null);
	const [sunset, setSunset] = useState(null);
	const [iconId, setIconId] = useState('');
	const [feelsLike, setFeelsLike] = useState(null);

	console.log(weatherData.data);
    setCity(weatherData.data.timezone);
    setTemperature(weatherData.data.current.temp);
    setHumidity(weatherData.data.current.humidity);
    setSunrise(weatherData.data.current.sunrise);
    setSunset(weatherData.data.current.sunset);
    setIconId(weatherData.data.current.weather[0].id);
    setFeelsLike(weatherData.data.current.feels_like);
	
	let weatherIcons = null;
	const icon = iconId;

	if (icon >= 200 && icon <= 232) {
		weatherIcons = <FontAwesomeIcon icon={faBolt} size="lg" color="#212121" />
	} else if (icon >= 300 && icon <= 321) {
		weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#212121" />
	} else if (icon >= 500 && icon <= 504) {
		weatherIcons = <FontAwesomeIcon icon={faCloudShowersHeavy} size="lg" color="#212121" />
	} else if (icon === 511) {
		weatherIcons = <FontAwesomeIcon icon={faSnowflake} size="lg" color="#212121" />
	} else if (icon >= 520 && icon <= 531) {
		weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#212121" />
	} else if (icon >= 600 && icon <= 622) {
		weatherIcons = <FontAwesomeIcon icon={faSnowflake} size="lg" color="#212121" />
	} else if (icon >= 701 && icon <= 781) {
		weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#212121" />
	} else if (icon === 800) {
		weatherIcons = <FontAwesomeIcon icon={faSun} size="lg" color="#212121" />
	} else if (icon === 801) {
		weatherIcons = <FontAwesomeIcon icon={faCloudSun} size="lg" color="#212121" />
	} else if (icon === 802) {
		weatherIcons = <FontAwesomeIcon icon={faCloud} size="lg" color="#212121" />
	} else if (icon >= 803 && icon <= 804) {
		weatherIcons = <FontAwesomeIcon icon={faCloud} size="lg" color="#212121" />
	}

	return (
		<div className="weather-card">

			<div className="weather-card__header">
				<h2>{city}</h2>
				<span className="icon-container">{weatherIcons}</span>
			</div>

			<div className="weather-card__body">
				<div className="weather-card__body__header">
					<h3>Today</h3>
				</div>

				<div className="weather-card__body__date">
					<p>{moment().format('dddd')}</p>
					<p>{moment().format('MMM Do')}</p>
					<p>{moment().format('HH:mm')}</p>
				</div>

				<div className="weather-card__body__info">
					<div className="weather-card__body__info--temp">
						<p>Temperature</p>
						<p>{Math.round(temperature)} °C</p>
					</div>
					
					<div className="weather-card__body__info--humid">
						<p>Humidity</p>
						<p>{humidity} %</p>
					</div>
				</div>
				
				<div className="weather-card__body__info">
					<div className="weather-card__body__info--sunrise">
						<p>Sunrise</p>
						<p>{new Date(sunrise * 1000).toLocaleTimeString('en-GB')}</p>
					</div>
					<div className="weather-card__body__info--sunset">
						<p>Sunset</p>
						<p>{new Date(sunset * 1000).toLocaleTimeString('en-GB')}</p>
					</div>
				</div>

				<div className="weather-card__body__info">
					<div className="weather-card__body__info--air-temp">
						<p>Feels like:</p>
						<p>{Math.round(feelsLike)} °C</p>
					</div>
				</div>
			</div>
		</div> 
	)
}
