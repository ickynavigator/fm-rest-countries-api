import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import BorderButton from '../components/BorderButton';

import {
  CountryDetails,
  MultipleCountryDetails,
} from '../functions/countryFunctions';
import {
  typeBorder,
  typeCountry,
  typeCurrency,
  typeLanguage,
} from '../myTypes';

const CountryScreen: React.FC = () => {
  const history = useHistory();

  const { id } = useParams<{ id: string }>();
  const [flag, setflag] = useState('');

  const [name, setname] = useState('');
  const [nativeName, setnativeName] = useState('');
  const [population, setpopulation] = useState(0);
  const [region, setregion] = useState('');
  const [subRegion, setsubRegion] = useState('');
  const [capital, setcapital] = useState('');
  const [TLD, setTLD] = useState(['']); /**  Top Level Domain */
  const [currency, setcurrency] = useState<typeCurrency[]>([]);
  const [languages, setlanguages] = useState<typeLanguage[]>([]);
  const [borderNames, setborderNames] = useState<typeBorder[]>([]);

  const goBackBtn = () => {
    history.goBack();
  };

  useEffect(() => {
    const CD = async () => {
      await CountryDetails(id).then(async res => {
        setflag(res.data.flags.png);
        setname(res.data.name);
        setnativeName(res.data.nativeName);
        setpopulation(res.data.population);
        setregion(res.data.region);
        setsubRegion(res.data.subregion);
        setcapital(res.data.capital);
        setTLD(res.data.topLevelDomain);
        setcurrency(res.data.currencies);
        setlanguages(res.data.languages);

        if (res.data.borders) {
          await MultipleCountryDetails(res.data.borders).then(countries => {
            setborderNames(
              countries.data.map((curr: typeCountry) => ({
                code: curr.alpha3Code,
                name: curr.name,
              })),
            );
          });
          // .catch(err => console.error(err));
        }
      });
    };

    CD();
  }, [id]);

  return (
    <Container className="px-3">
      <Button
        onClick={goBackBtn}
        className="px-4 my-1 my-md-4 __my-button shadow border-0"
      >
        <FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} />
        <span className="ps-3">Back</span>
      </Button>
      <br />
      <Row className="pt-5">
        <Col xs={12} md={6} className="">
          <img src={flag} alt={name} className="__country-image" />
        </Col>
        <Col xs={12} md={6} className="ps-sm-5 pt-5 pt-sm-0 my-auto">
          <h3>{name}</h3>
          <Row className="pt-3 pb-5 countryRow">
            <Col xs={12} md={6}>
              <div>
                <span>Native Name: </span>
                <span>{nativeName}</span>
              </div>

              <div>
                <span>Population: </span>
                <span>{population.toLocaleString()}</span>
              </div>

              <div>
                <span>Region: </span>
                <span>{region}</span>
              </div>

              <div>
                <span>Sub Region: </span>
                <span>{subRegion}</span>
              </div>

              <div>
                <span>Capital: </span>
                <span>{capital}</span>
              </div>
            </Col>

            <Col xs={12} md={6} className="pt-5 pt-sm-0">
              <div>
                <span>Top Level Domain: </span>
                <span>{TLD.join(', ')}</span>
              </div>

              <div>
                <span>Currencies: </span>
                <span>{currency.map(e => e.name).join(', ')}</span>
              </div>

              <div>
                <span>Languages: </span>
                <span>{languages.map(e => e.name).join(', ')}</span>
              </div>
            </Col>
          </Row>

          {borderNames.length > 0 && (
            <Row className="pt-1">
              <Col sm={4} className="__title-span my-auto">
                Border Countries:
              </Col>
              <Col className="__body-span mx-0 px-0 my-auto">
                {borderNames.map(curr => BorderButton(curr))}
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CountryScreen;
