interface typeCountry {
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
interface typeCurrency {
  code: string;
  name: string;
  symbol: string;
}
interface typeLanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}
interface typeBorder {
  code: string;
  name: string;
}
