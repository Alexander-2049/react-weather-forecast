import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import getUserGeoData from '../../api/getUserGeoData';
import PropTypes from "prop-types";

const GetUserCoordinates = ({geoData, setGeoData}) => {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);

    async function getData() {
        setIsLoading(true);
        try {
            const data = await getUserGeoData();
            if(data.status !== 'success') throw new Error('Something went wrong');
            const {country, regionName, city, lat, lon} = data;
            const result = {country, regionName, city, lat, lon};

            if(JSON.stringify(result) !== JSON.stringify(geoData)) setGeoData(result);
        } catch (error) {
            console.warn(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <LoadingButton loading={isLoading} style={{minWidth: 220}} variant={'contained'} onClick={getData}>
            {isLoading ? `${t('Loading')}...` : t("Weather in my city")}
        </LoadingButton>
    );
};

GetUserCoordinates.propTypes = {
    geoData: PropTypes.object,
    setGeoData: PropTypes.func,
}

export default GetUserCoordinates;