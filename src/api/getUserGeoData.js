import makeRequest from "./makeRequest";

async function getUserGeoData() {
    const url = "http://ip-api.com/json";

    try {
        // const data = await makeRequest(url);
        const data = JSON.parse(`{"status":"success","country":"Latvia","countryCode":"LV","region":"RIX","regionName":"Riga","city":"Riga","zip":"LV-1063","lat":56.9496,"lon":24.0978,"timezone":"Europe/Riga","isp":"BALTICOM-BIX","org":"","as":"AS24651 JSC BALTICOM","query":"185.75.236.85"}`);
        await new Promise(r => setTimeout(r, 2000));
        return data;
      } catch (error) {
        // Handle error
        // You can choose to rethrow the error or handle it specifically for the weather request
        console.warn(error);
    }
}

export default getUserGeoData;