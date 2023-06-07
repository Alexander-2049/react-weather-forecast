import { Navigation, Pagination, A11y } from 'swiper';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Item from './Item/Item';
import { useRef } from 'react';

const WeatherDaily = ({weatherData}) => {

    const swiperRef = useRef(null);

    const handleSlideToIndex = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideTo(index);
        }
    };

    const arr = [1, 2, 3, 4, 5];

    return (
        <Swiper ref={swiperRef}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            {arr.map(e => <SwiperSlide key={e}><Item data={e}/></SwiperSlide>)}
        </Swiper>
    );
};

WeatherDaily.propTypes = {
    // weatherData: PropTypes.shape({
    //     latitude: PropTypes.number,
    //     longitude: PropTypes.number
    // })
    weatherData: PropTypes.object
}

export default WeatherDaily;