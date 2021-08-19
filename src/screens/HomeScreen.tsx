import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import FilterSelect from "../components/FilterSelect";

import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";

import { AllCountryDetails } from "../functions/countryFunctions";

const HomeScreen: React.FC = () => {
  const [loading, setloading] = useState(true);
  const [countries, setcountries] = useState<typeCountry[]>([]);
  const [filter, setfilter] = useState("");
  const [search, setsearch] = useState("");
  const [errorMsg, seterrorMsg] = useState("");

  // const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const options = ["Africa", "Americ", "Asia", "Europe", "Oceania"];

  const filterHandler = (val: React.ChangeEvent<HTMLSelectElement>) => {
    setsearch("");
    setfilter(val.target.value);
  };
  const searchHandler = (val: React.ChangeEvent<HTMLInputElement>) => {
    setfilter("");
    setsearch(val.target.value);
  };
  useEffect(() => {
    setloading(true);

    (async () => {
      await AllCountryDetails(filter, search)
        .then((res) => {
          setcountries(res.data);
        })
        .catch((err) => {
          console.error(err.message);
          if (err.message === `Network Error`) seterrorMsg(`Network Error`);
          if (/404/.test(err.message)) seterrorMsg(`No Countries Found`);
        })
        .finally(() => {
          setloading(false);
        });
    })();
  }, [search, filter]);

  return (
    <>
      <div>
        <SearchBar setSearch={searchHandler} value={search} />
        <FilterSelect options={options} setFilter={filterHandler} />
      </div>
      {loading ? (
        <Loader />
      ) : errorMsg ? (
        <div>{errorMsg}</div>
      ) : (
        // countries.map((country) => {
        //   return CountryCard(country);
        // })
        CountryCard(countries[0])
      )}
    </>
  );
};

export default HomeScreen;
