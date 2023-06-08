import styles from './item.styles.module.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import TemperatureChart from '../../TemperatureChart';
import dateToFormatHM from '../../../utils/dateToFormatHM';

const WeatherDays_Item = ({data}) => {
    const { t } = useTranslation();
    
    const chartData = [];
    for(let i = 0; i < data.hourly.time.length; i++) {
        chartData.push({time: dateToFormatHM(data.hourly.time[i]), temperature: data.hourly.temperature_2m[i]});
    }

    return (
        <div className={styles.wrapper}>
            <h2>{t('from')} {`${data.temperature_2m_min}°C`} {t('to')} {`${data.temperature_2m_max}°C`}</h2>
            <h3>{new Date(data.time).toLocaleDateString()}</h3>
            <TemperatureChart chartData={chartData}/>
        </div>
    );
};

WeatherDays_Item.protoTypes = {
    data: PropTypes.object
}

export default WeatherDays_Item;