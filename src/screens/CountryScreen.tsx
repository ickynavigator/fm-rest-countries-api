import { useEffect, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

import BorderButton from '../components/BorderButton';

import {
  CountryDetails,
  MultipleCountryDetails,
} from '../functions/countryFunctions';

const CountryScreen: React.FC = () => {
  let history = useHistory();

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
        setflag(res.data.flag);
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
          await MultipleCountryDetails(res.data.borders)
            .then(res => {
              setborderNames(
                res.data.map((curr: typeCountry) => {
                  return { code: curr.alpha3Code, name: curr.name };
                }),
              );
            })
            .catch(err => console.error(err));
        }
      });
    };

    CD();
  }, [id]);

  return (
    <>
      <Button onClick={goBackBtn}>Back</Button>
      <br />
      <Row>
        <Col xs={12} md={6}>
          <img src={flag} alt={name} />
        </Col>
        <Col xs={12} md={6}>
          <h3>{name}</h3>
          <Row>
            <Col></Col>
            <Col></Col>
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
          </Row>

          {borderNames.length > 0 && (
            <div>
              <span>Border Countries: </span>
              <span>{borderNames.map(curr => BorderButton(curr))}</span>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default CountryScreen;
