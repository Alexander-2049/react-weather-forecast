import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import getWeather from '../api/getWeather';

const Weather = () => {
    const [coordinates, setCoordinates] = useState([34.05, -118.24]);

    const [latitude, longitude] = coordinates;

    const queryName = `${latitude} - ${longitude}`;

    async function fetchWeatherData() {
        const data = await getWeather(latitude, longitude);
        return data;
    }

    const { data, isLoading, isError } = useQuery(queryName, fetchWeatherData);

    return (
        <div>
            
        </div>
    );
};

export default Weather;