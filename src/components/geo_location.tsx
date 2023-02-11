import React, { useState, useEffect } from 'react';
function GeoLocation (){


    // Building API String
    var latlong = [51.5072, 0.1267]
    var string1 = 'https://api.openweathermap.org/data/2.5/weather?lat='
    var string2 = '&lon=' 
    var string3 = '&appid='
    var apiKey = '184f57ba41848e91f08939cf49fada3d'
    var metric = '&units=metric'
    var apiCall = string1 + latlong[0] + string2 + latlong[1] + string3 + apiKey + metric;

    //Calling the API
    const callAPI = async () =>{
        try {
            const res = await fetch(apiCall);
            const data = await res.json();
            console.log(data);

            //Grab info from data value
            console.log(data.weather[0].main)
            console.log(data.weather[0].description)
            console.log(data.main.temp)
            console.log(data.main.temp_min)
            console.log(data.main.temp_max)

        } catch (err) {
            console.log(err);
        }
    };

    // Return JSX 
    return(
        <div>
            <button onClick={callAPI} className='btn'>callApi</button>
        </div>
    );
}

export default GeoLocation;