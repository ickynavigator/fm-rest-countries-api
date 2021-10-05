export interface typeCountry {
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
  alpha3Code: string;
}
/** code: "EUR", name: "Euro", symbol: "€" */
export interface typeCurrency {
  code: string;
  name: string;
  symbol: string;
}
export interface typeLanguage {
  // eslint-disable-next-line camelcase
  iso639_1: string;
  // eslint-disable-next-line camelcase
  iso639_2: string;
  name: string;
  nativeName: string;
}
export interface typeBorder {
  code: string;
  name: string;
}
