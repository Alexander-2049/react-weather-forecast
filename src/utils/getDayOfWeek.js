const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]
const shortDays = [
    'U', 'M', 'T', 'W', 'R', 'F', 'S'
]

function getDayOfWeek(dayNumber, short = false) {
    if(dayNumber < 0 || dayNumber > 6) return dayNumber;
    if(short) return shortDays[dayNumber];
    return days[dayNumber];
}

export default getDayOfWeek;