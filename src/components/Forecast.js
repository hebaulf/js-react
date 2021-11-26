import React from 'react';

export default function Forecast({forecast}) {
	return (
		<div>
			<div className="forecast-cards">
				{forecast.map((data) => {
					return (
						<div className="forecast-cards__item">
							<div className="forecast-cards__item__temp">
								<h2>{data.feelsLike}</h2>
								<div>High: {Math.round(data.temp.max)} °C</div> 
								<div>Low: {Math.round(data.temp.min)} °C</div>	
							</div>

							<div className="forecast-cards__item__humid">
								<div>{data.humidity} %</div>
							</div>

							<div className="forecast-cards__item__descr">
								{data.weather[0].description}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
