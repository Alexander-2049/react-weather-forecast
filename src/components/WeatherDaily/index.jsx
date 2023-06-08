import { Navigation, Pagination, A11y } from 'swiper';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Item from './Item/Item';
import { useRef } from 'react';

const WeatherDaily = ({days, selectedDayIndex, setSelectedDayIndex}) => {

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

    // const arr = [1, 2, 3, 4, 5];

    if(!days) return;

    return (
        <Swiper ref={swiperRef}
        modules={[]}
        spaceBetween={16}
        slidesPerView={1}
        onSwiper={(/* swiper */) => handleSlideToIndex(selectedDayIndex)}
        onSlideChange={handleOnSlideChange}
        >
            {days.map(e => <SwiperSlide key={e.time}><Item data={e}/></SwiperSlide>)}
        </Swiper>
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