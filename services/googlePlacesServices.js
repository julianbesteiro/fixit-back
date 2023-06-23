const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

findNearbyOfficeServices = async ({ lat, lng }) => {
  const input = process.env.INPUT_KEY_NEARBY_OFFICE;
  const fields = "formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry";
  const url = `${apiUrl}/place/findplacefromtext/json?fields=${fields}&input=${input}&inputtype=textquery&locationbias=rectangle:${lat},${lng}|${lat},${lng}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch places from Google Maps API");
  }
};

directionsAutocomplete = async (input) => {
  const types = "geocode";
  const params = new URLSearchParams({
    input: input,
    types: types,
    key: apiKey,
  });

  const autocompleteURL = `${apiUrl}/place/autocomplete/json?${params.toString()}`;

  try {
    const response = await axios.get(autocompleteURL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch places from Google Maps API");
  }
};

module.exports = {
  findNearbyOfficeServices,
  directionsAutocomplete,
};
