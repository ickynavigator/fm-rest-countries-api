import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import CountryCard from '../components/CountryCard';
import FilterSelect from '../components/FilterSelect';

import Loader from '../components/Loader';
import SearchBar from '../components/SearchBar';

import { AllCountryDetails } from '../functions/countryFunctions';
import { typeCountry } from '../myTypes';

const HomeScreen: React.FC = () => {
  const [loading, setloading] = useState(true);
  const [countries, setcountries] = useState<typeCountry[]>([]);
  const [filter, setfilter] = useState('');
  const [search, setsearch] = useState('');
  const [errorMsg, seterrorMsg] = useState('');

  // const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const options = ['Africa', 'Americ', 'Asia', 'Europe', 'Oceania'];

  const filterHandler = (val: React.FormEvent<HTMLSelectElement>) => {
    setsearch('');
    setfilter(val.currentTarget.value);
  };
  const searchHandler = (val: React.ChangeEvent<HTMLInputElement>) => {
    setfilter('');
    setsearch(val.target.value);
  };
  useEffect(() => {
    setloading(true);

    (async () => {
      await AllCountryDetails(filter, search)
        .then(res => {
          const Countries = res.data;
          const size =
            process.env.NODE_ENV !== 'production' ? 20 : Countries.length;

          setcountries(Countries.slice(0, size));
        })
        .catch(err => {
          // console.error(err.message);
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
      <Row className="pb-5 gy-5" xs={1} md={2}>
        <Col>
          <SearchBar setSearch={searchHandler} value={search} />
        </Col>
        <Col>
          <FilterSelect options={options} setFilter={filterHandler} />
        </Col>
      </Row>
      {loading && <Loader />}
      {errorMsg ? (
        <div>{errorMsg}</div>
      ) : (
        <div className="px-3 p-md-0">
          <Row xs={1} sm={2} md={3} lg={4} className="g-5 p-5 p-sm-0 pt-0">
            {countries.map(country => (
              <Col className="h-100 d-flex" key={country.alpha3Code}>
                {CountryCard({ country })}
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
