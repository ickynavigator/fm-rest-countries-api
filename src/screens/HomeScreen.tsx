import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

import Loader from "../components/Loader";

import { AllCountryDetails } from "../functions/countryFunctions";
const HomeScreen: React.FC = () => {
  const [loading, setloading] = useState(true);
  const [countries, setcountries] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      await AllCountryDetails()
        .then((res) => {
          setcountries(res.data);
          setloading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    })();
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading &&
        // countries.map((country) => {
        //   return CountryCard(country);
        // })
        CountryCard(countries[0])}
    </>
  );
};

export default HomeScreen;
