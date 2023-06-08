import makeRequest from "./makeRequest";

async function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}`;
    const query = `hourly=temperature_2m,weathercode&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
  
    try {
      const data = await makeRequest(`${url}&${query}`);
      return data;
    } catch (error) {
      // Handle error
      // You can choose to rethrow the error or handle it specifically for the weather request
      // throw error;
      console.warn(error);
    }
  }

export default getWeather;