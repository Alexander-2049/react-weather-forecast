import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import getWeather from '../api/getWeather';
import WeatherDaily from "./WeatherDaily"
import GetUserCoordinates from './GetUserCoordinates';
import { Box } from '@mui/material';
import WeatherPosition from './WeatherPosition';
import WeatherDayList from './WeatherDayList';
// import getDescriptionByCode from '../utils/getDescriptionByCode';

const Weather = () => {
    const [geoData, setGeoData] = useState({country: 'Canada', regionName: 'Quebec', city: 'Montreal', lat: 45.5075, lon: -73.5887})
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);

    const {lat: latitude, lon: longitude} = geoData;

    const queryName = `${latitude} - ${longitude}`;

    async function fetchWeatherData() {
        const data = await getWeather(latitude, longitude);
        return data;
    }

    const { data: weatherData, isLoading, /* isError */ } = useQuery(queryName, fetchWeatherData, { refetchOnWindowFocus: false });

    const [days, setDays] = useState(null);

    // When weatherData updates we are building days state where each day gonna store 24h data
    useEffect(() => {
        if (!weatherData || isLoading) return;
      
        const result = [];
        for (let i = 0; i < weatherData.daily.time.length; i++) {
          const data = {
            time: weatherData.daily.time[i],
            temperature_2m_max: weatherData.daily.temperature_2m_max[i],
            temperature_2m_min: weatherData.daily.temperature_2m_min[i],
            hourly: {},
          };
      
          // Asked ChatGPT to take and use keys dynamically
          Object.keys(weatherData.hourly).forEach((key) => {
            data.hourly[key] = weatherData.hourly[key].slice(24 * i, 24 * (i + 1));
          });
      
          result.push(data);
        }
        setDays(result);
      }, [weatherData]);

      useEffect(() => {
        setSelectedDayIndex(0);
      }, [weatherData])

    return (
        <>
            <Box sx={{marginY: 2}}><GetUserCoordinates geoData={geoData} setGeoData={setGeoData}/></Box>
            <Box sx={{marginY: 2}}><WeatherPosition geoData={geoData}/></Box>
            <WeatherDaily days={days} selectedDayIndex={selectedDayIndex} setSelectedDayIndex={setSelectedDayIndex}/>
            <WeatherDayList days={days} selectedDayIndex={selectedDayIndex} setSelectedDayIndex={setSelectedDayIndex}/>
        </>
    );
};

export default Weather;