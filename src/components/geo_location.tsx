import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

function GeoLocation (){


    // Building API String
    var latlong = [51.5072, 0.1267];
    var string1 = 'https://api.openweathermap.org/data/2.5/weather?lat=';
    var string2 = '&lon=';
    var string3 = '&appid=';
    var apiKey = '184f57ba41848e91f08939cf49fada3d';
    var metric = '&units=metric';
    var apiCall = string1 + latlong[0] + string2 + latlong[1] + string3 + apiKey + metric;


    // Set state
    const [weatherData, setWeatherData] = useState(null)

    // API Call
    const callAPI = async () => {
		try {
			const res = await fetch(apiCall);
            const data = (await res.json());
            setWeatherData(data);
		} catch (err) {
			console.log(err);
		}
	};

    //Set null:
    if (weatherData){
        return(
            <div className='flex flex-col items-center'>

                <div className=''>
                    <div className='flex flex-col'>
                        <p className='text-7xl text-center font-bold'>{weatherData.weather[0].main}</p>
                        <p className='text-2xl text-center font-medium'>{weatherData.weather[0].description}</p>
                    </div>
                </div>

                <div className='pt-9'>
                    <p>{weatherData.main.temp}</p>
                    <p>{weatherData.main.temp_min}</p>
                    <p>{weatherData.main.temp_max}</p>
                </div>

            </div>
        );
    }
    return(
        <div>
            <button onClick={callAPI} className='btn'>callApi</button>
        </div>
    );
}

export default GeoLocation;