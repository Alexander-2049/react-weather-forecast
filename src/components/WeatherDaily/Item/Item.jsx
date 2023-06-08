import PropTypes from 'prop-types';
import TemperatureChart from '../../TemperatureChart';
import dateToFormatHM from '../../../utils/dateToFormatHM';
import { useMemo } from 'react';

function buildChartData(data) {
    const chartData = [];
    for(let i = 0; i < data.hourly.time.length; i++) {
        chartData.push({time: dateToFormatHM(data.hourly.time[i]), temperature: data.hourly.temperature_2m[i]});
    }
    return chartData;
}

const WeatherDays_Item = ({data}) => {
    
    const chartData = useMemo(() => buildChartData(data), [data]);

    return (
        <TemperatureChart chartData={chartData}/>
    );
};

WeatherDays_Item.protoTypes = {
    data: PropTypes.object
}

export default WeatherDays_Item;