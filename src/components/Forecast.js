import React from 'react';
import { Card } from 'semantic-ui-react';

export default function Forecast({forecast}) {
	return (
		<div>
			<Card.Group>
				{forecast.map((data) => {
					return (
						<Card>
							<Card.Content>
								<Card.Header>
									<div>High: {Math.round(data.temp.max)} °C</div> 
									<div>Low: {Math.round(data.temp.min)} °C</div>	
								</Card.Header>
								<Card.Meta>{data.humidity} %</Card.Meta>
								<Card.Description className="temp-desc">
									{data.weather[0].description}
								</Card.Description>
							</Card.Content>
						</Card>
					)
				})}
			</Card.Group>
		</div>
	)
}
