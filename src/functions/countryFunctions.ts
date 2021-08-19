import axios from "axios";
const countryApi = `https://restcountries.eu/rest/v2`;

const fieldsHelper = (fields: string[] | undefined) => {
  return fields ? `?fields=${fields.join(";")}` : ``;
};

export const AllCountryDetails = (
  region: string,
  search: string,
  fields?: string[]
) => {
  let type = `all`;
  if (region) type = `region/${region}`;
  if (search) type = `name/${search}`;

  const url = `${countryApi}/${type}${fieldsHelper(fields)}`;

  console.log(url);
  return axios.get(url);
};

export const CountryDetails = (id: string, fields?: string[]) => {
  return axios.get(`${countryApi}/alpha/${id}${fieldsHelper(fields)}`);
};
export const MultipleCountryDetails = (codes: string[]) => {
  return axios.get(`${countryApi}/alpha${`/?codes=${codes.join(";")}`}`);
};
