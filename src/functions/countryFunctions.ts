import axios from "axios";
const countryApi = `https://restcountries.eu/rest/v2`;

export const CountryDetails = (id: string) => {
  return axios.get(`${countryApi}/alpha/${id}`);
};
export const CountryName = async (id: string) => {
  const res = await axios.get(`${countryApi}/alpha/${id}`);
  return res.data.name;
};
