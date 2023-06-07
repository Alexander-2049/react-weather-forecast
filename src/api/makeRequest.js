import axios from 'axios';

async function makeRequest(url, method = 'GET', data = null) {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    // Handle error
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const errorMessage = error.response.data.error;

      // Display error in the UI
      displayError(errorMessage);
    } else if (error.request) {
      // The request was made but no response was received
      // Error occurred at the network level
      const errorMessage = 'Network Error';

      // Display error in the UI
      displayError(errorMessage);
    } else {
      // Something happened in setting up the request
      const errorMessage = 'Request Error';

      // Display error in the UI
      displayError(errorMessage);
    }

    throw error; // Rethrow the error to be caught by the caller
  }
}

function displayError(errorMessage) {
  // You can implement your logic to display the error message in the UI here
  console.error(errorMessage);
}

export default makeRequest;