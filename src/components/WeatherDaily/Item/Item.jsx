import styles from './item.styles.module.scss';
import PropTypes from 'prop-types';

const WeatherDays_Item = ({data}) => {
    return (
        <div className={styles.wrapper}>
            {data}
        </div>
    );
};

WeatherDays_Item.protoTypes = {
    data: PropTypes.object
}

export default WeatherDays_Item;