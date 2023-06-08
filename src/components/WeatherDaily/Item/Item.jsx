import styles from './item.styles.module.scss';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const WeatherDays_Item = ({data}) => {
    const { t } = useTranslation();

    return (
        <div className={styles.wrapper}>
            {t('from')} {`${data.temperature_2m_min}°C`} {t('to')} {`${data.temperature_2m_max}°C`}
        </div>
    );
};

WeatherDays_Item.protoTypes = {
    data: PropTypes.object
}

export default WeatherDays_Item;