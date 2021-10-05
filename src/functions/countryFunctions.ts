import axios from 'axios';
const countryApi = `https://restcountries.com/v2`;

const fieldsHelper = (fields: string[] | undefined) => {
  return fields ? `?fields=${fields.join(';')}` : ``;
};

export const AllCountryDetails = (
  region: string,
  search: string,
  fields?: string[],
) => {
  let type = `all`;
  if (region) type = `region/${region}`;
  if (search) type = `name/${search}`;

  const url = `${countryApi}/${type}${fieldsHelper(fields)}`;
  return axios.get(url);
};

export const CountryDetails = (id: string, fields?: string[]) => {
  const url = `${countryApi}/alpha/${id}${fieldsHelper(fields)}`;
  return axios.get(url);
};
export const MultipleCountryDetails = (codes: string[]) => {
  const url = `${countryApi}/alpha${`/?codes=${codes.join(',')}`}`;
  return axios.get(url);
};
