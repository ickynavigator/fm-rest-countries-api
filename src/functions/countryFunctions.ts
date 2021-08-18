import axios from "axios";
const countryApi = `https://restcountries.eu/rest/v2`;

export const AllCountryDetails = (fields?: string[]) => {
  return axios.get(
    `${countryApi}/all${fields ? `?fields=${fields.join(";")}` : ``}`
  );
};
export const CountryDetails = (id: string, fields?: string[]) => {
  return axios.get(
    `${countryApi}/alpha/${id}${fields ? `?fields=${fields.join(";")}` : ``}`
  );
};
export const MultipleCountryDetails = (codes: string[]) => {
  return axios.get(`${countryApi}/alpha${`/?codes=${codes.join(";")}`}`);
};
