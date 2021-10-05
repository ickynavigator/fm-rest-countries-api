import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import CountryCard from '../components/CountryCard';
import FilterSelect from '../components/FilterSelect';

import Loader from '../components/Loader';
import SearchBar from '../components/SearchBar';

import { AllCountryDetails } from '../functions/countryFunctions';

const HomeScreen: React.FC = () => {
  const [loading, setloading] = useState(true);
  const [countries, setcountries] = useState<typeCountry[]>([]);
  const [filter, setfilter] = useState('');
  const [search, setsearch] = useState('');
  const [errorMsg, seterrorMsg] = useState('');

  // const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const options = ['Africa', 'Americ', 'Asia', 'Europe', 'Oceania'];

  const filterHandler = (val: React.ChangeEvent<HTMLSelectElement>) => {
    setsearch('');
    setfilter(val.target.value);
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
          const size = 20;

          setcountries(Countries.slice(0, size));
        })
        .catch(err => {
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
      <Row className="py-5" sm={1} md={2}>
        <Col>
          <SearchBar setSearch={searchHandler} value={search} />
        </Col>
        <Col>
          <FilterSelect options={options} setFilter={filterHandler} />
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : errorMsg ? (
        <div>{errorMsg}</div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className={`g-5`}>
          {countries.map(country => {
            return (
              <Col className={`h-100 d-flex`} key={country.alpha3Code}>
                {CountryCard(country)}
              </Col>
            );
          })}
        </Row>
        // CountryCard(countries[0])
      )}
    </>
  );
};

export default HomeScreen;
