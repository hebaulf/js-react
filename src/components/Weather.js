import React from 'react';
// import moment from 'moment';
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
	{airTemp, humidity, city, country, sunrise, sunset, feelsLike, icon, windSpeed, windDeg}
) {
	const dateBuilder = (d) => {
		let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		let days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];

		let day = days[d.getDay()];
		let date = d.getDate();
		let month = months[d.getMonth()];
		let year = d.getFullYear();

		return `${day} ${date} ${month} ${year}`
	}
	
	let weatherIcons = null;

	if (icon >= 200 && icon <= 232) {
		weatherIcons = <FontAwesomeIcon icon={faBolt} size="lg" color="#fff" />
	} else if (icon >= 300 && icon <= 321) {
		weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#fff" />
	} else if (icon >= 500 && icon <= 504) {
		weatherIcons = <FontAwesomeIcon icon={faCloudShowersHeavy} size="lg" color="#fff" />
	} else if (icon === 511) {
		weatherIcons = <FontAwesomeIcon icon={faSnowflake} size="lg" color="#fff" />
	} else if (icon >= 520 && icon <= 531) {
		weatherIcons = <FontAwesomeIcon icon={faCloudRain} size="lg" color="#fff" />
	} else if (icon >= 600 && icon <= 622) {
		weatherIcons = <FontAwesomeIcon icon={faSnowflake} size="lg" color="#fff" />
	} else if (icon >= 701 && icon <= 781) {
		weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#fff" />
	} else if (icon === 800) {
		weatherIcons = <FontAwesomeIcon icon={faSun} size="lg" color="#fff" />
	} else if (icon === 801) {
		weatherIcons = <FontAwesomeIcon icon={faCloudSun} size="lg" color="#fff" />
	} else if (icon === 802) {
		weatherIcons = <FontAwesomeIcon icon={faCloud} size="lg" color="#fff" />
	} else if (icon >= 803 && icon <= 804) {
		weatherIcons = <FontAwesomeIcon icon={faCloud} size="lg" color="#fff" />
	}

	return (
		<div>
			<div className="location-box">
				<div className="location">
					{city}, {country}
				</div>
				<div className="date">
					{dateBuilder(new Date())}
				</div>
			</div>
			<div className="weather-box">
				<p>Feels Like</p>
				<div className="temp">  
					<div>{weatherIcons}</div>
					<div>{Math.round(feelsLike)}°C</div>
				</div>
				<div className="weather">
					<p>Air Temp: {Math.round(airTemp)}°C</p>
					<p>Humidity: {humidity}%</p>
					
					<div className="wind-speed">Wind speed: {Math.round(windSpeed)} m/s</div>
					<div className="wind-deg">Wind Degrees: {windDeg}°</div>
				</div>
			</div>
			<div className="sun-box">
				<div className="sun-rise">
					{new Date(sunrise * 1000).toLocaleTimeString('en-GB')}
				</div>
				<div className="sun-set">
					{new Date(sunset * 1000).toLocaleTimeString('en-GB')}
				</div>
			</div>
		</div>
	)
}