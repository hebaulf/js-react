import React from 'react';
import { Card, Feed } from 'semantic-ui-react';
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

export default function WeatherCard (
	{temperature, humidity, city, sunrise, sunset, feelsLike, icon}) {
	
	let weatherIcons = null;

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
		<Card className="weather-card">
			<Card.Content className="weather-card__header">
				<Card.Header className="weather-card__child">{city}</Card.Header>
				<div className="icon-container">
					{weatherIcons}
				</div>
			</Card.Content>
			<Card.Content className="weather-card__body">
				<Feed>
					<Feed.Event>
						<Feed.Content>
							<h3 className="weather-card__body__child">Today</h3>
							<p>{moment().format('dddd')}, {(moment().format('MMMM Do, h:mm a'))}</p>
							<div className="weather-card">
								<div className="weather-card__body__child">
									<p>Temperature</p>
									<p>{Math.round(temperature)} °C</p>
								</div>
								<div className="weather-card__body__child">
									<p>Humidity</p>
									<p>{humidity} %</p>
								</div>
							</div>
							<div className="weather-card">
								<div className="weather-card__child">
									<p>Sunrise</p>
									<p>{new Date(sunrise * 1000).toLocaleTimeString('en-GB')}</p>
								</div>
								<div className="weather-card__child">
									<p>Sunset</p>
									<p>{new Date(sunset * 1000).toLocaleTimeString('en-GB')}</p>
								</div>
							</div>
							<div className="weather-card">
								<div className="weather-card__child">
									<p>Feels like:</p>
									<p>{Math.round(feelsLike)} °C</p>
								</div>
							</div>
						</Feed.Content>
					</Feed.Event>
				</Feed>
			</Card.Content>
		</Card> 
	)
}
