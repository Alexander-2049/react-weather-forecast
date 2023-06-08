const formatDate = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'UTC',
    };
  
    return date.toLocaleString('en-US', options);
};
  

function dateToFormatHM(date) {
    date = new Date(date);
    return formatDate(date);
}

export default dateToFormatHM;