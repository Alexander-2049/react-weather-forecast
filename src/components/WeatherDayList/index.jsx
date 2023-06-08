import { Button } from "@mui/material";
import { useTranslation } from 'react-i18next';
import getDayOfWeek from '../../utils/getDayOfWeek'
import styles from './styles.module.scss';

const WeatherDayList = ({days, selectedDayIndex, setSelectedDayIndex}) => {
    const { t } = useTranslation();
    if(!days || selectedDayIndex === undefined) return;

    return (
        <div className={styles.Wrapper}>
            {days.map((day, index) => 
                <Button
                variant={index === selectedDayIndex ? 'contained' : 'outlined'}
                onClick={() => { setSelectedDayIndex(index) }}
                key={day.time}>

                    {t(
                        getDayOfWeek(
                            new Date(day.time).getDay()
                            , true
                        )
                    )}
                    
                </Button>
            )}
        </div>
    );
};

export default WeatherDayList;