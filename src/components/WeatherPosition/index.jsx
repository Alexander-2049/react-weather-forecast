import PropTypes from "prop-types";

const WeatherPosition = ({geoData}) => {
    return (
        <div>
            {geoData.country}, ({geoData.regionName}) {geoData.city}, {geoData.lat} {geoData.lon}
        </div>
    );
};

WeatherPosition.propTypes = {
    geoData: PropTypes.shape({
        country: PropTypes.string,
        regionName: PropTypes.string,
        city: PropTypes.string,
        lat: PropTypes.number,
        lon: PropTypes.number,
    })
}

export default WeatherPosition;