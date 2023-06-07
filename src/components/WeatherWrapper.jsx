import { useState } from 'react';
import { useQuery } from 'react-query';
import getWeather from '../api/getWeather';
import WeatherDaily from "./WeatherDaily"
import GetUserCoordinates from './GetUserCoordinates';

const Weather = () => {
    const [geoData, setGeoData] = useState({country: 'Canada', regionName: 'Quebec', city: 'Montreal', lat: 45.5075, lon: -73.5887})

    const {lat: latitude, lon: longitude} = geoData;

    const queryName = `${latitude} - ${longitude}`;

    async function fetchWeatherData() {
        const data = await getWeather(latitude, longitude);
        return data;
    }

    const { data: weatherData, /* isLoading, isError */ } = useQuery(queryName, fetchWeatherData);

    return (
        <>
            <GetUserCoordinates geoData={geoData} setGeoData={setGeoData}/>
            <WeatherDaily/>
            {/* <code>{JSON.stringify(geoData)}</code> */}
            {/* {weatherData ? <code>{JSON.stringify(weatherData)}</code> : ''} */}
        </>
    );
};

export default Weather;