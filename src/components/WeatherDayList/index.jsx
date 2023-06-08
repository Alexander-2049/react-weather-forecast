import { Button } from "@mui/material";

const WeatherDayList = ({days, selectedDayIndex, setSelectedDayIndex}) => {
    if(!days || selectedDayIndex === undefined) return;

    return (
        <div>
            {days.map((day, index) => <Button variant={index === selectedDayIndex ? 'contained' : 'outlined'} onClick={() => { setSelectedDayIndex(index) }} key={day.time}>{day.time}</Button>)}
        </div>
    );
};

export default WeatherDayList;