import makeRequest from "./makeRequest";

async function getUserGeoData() {
    const url = "http://ip-api.com/json";

    try {
        const data = await makeRequest(url);
        await new Promise(r => setTimeout(r, 300));
        return data;
      } catch (error) {
        // Handle error
        // You can choose to rethrow the error or handle it specifically for the weather request
        console.warn(error);
    }
}

export default getUserGeoData;