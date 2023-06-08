import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Item from './Item/Item';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const WeatherDaily = ({days, selectedDayIndex, setSelectedDayIndex}) => {

    const { t } = useTranslation();
    const swiperRef = useRef(null);

    const handleSlideToIndex = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideTo(index);
        }
    };

    const handleOnSlideChange = (e) => {
        // When we are swiping slides the whole weather component sees selected day changing
        setSelectedDayIndex(e.activeIndex);
    }

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideTo(selectedDayIndex);
        }
    }, [selectedDayIndex])

    if(!days) return;

    return (
        <div>
            <h2>{t('from')} {`${days[selectedDayIndex].temperature_2m_min}°C`} {t('to')} {`${days[selectedDayIndex].temperature_2m_max}°C`}</h2>
            <h3>{new Date(days[selectedDayIndex].time).toLocaleDateString()}</h3>
            <Swiper ref={swiperRef}
            modules={[]}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(/* swiper */) => handleSlideToIndex(selectedDayIndex)}
            onSlideChange={handleOnSlideChange}
            >
                {days.map(e => 
                    <SwiperSlide key={e.time}>
                        <Item data={e}/>
                    </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

WeatherDaily.propTypes = {
    // weatherData: PropTypes.shape({
    //     latitude: PropTypes.number,
    //     longitude: PropTypes.number
    // })
    days: PropTypes.array,
    selectedDayIndex: PropTypes.number,
    setSelectedDayIndex: PropTypes.func
}

export default WeatherDaily;