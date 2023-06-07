import makeRequest from "./makeRequest";

async function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,precipitation,rain,snowfall,weathercode,cloudcover,windspeed_10m,winddirection_10m`;
  
    try {
      const data = await makeRequest(url);
      return data;
    } catch (error) {
      // Handle error
      // You can choose to rethrow the error or handle it specifically for the weather request
      throw error;
    }
  }

export default getWeather;