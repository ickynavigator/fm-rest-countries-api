import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { typeCountry } from '../myTypes';

interface T {
  country: typeCountry;
}
const CountryCard: React.FC<T> = props => {
  const { country } = props;
  const { flags, name, population, region, capital, alpha3Code } = country;

  return (
    <Card className="flex-fill shadow-sm">
      <Button
        href={`/country/${alpha3Code}`}
        className="text-decoration-none p-0 w-100"
        variant="light"
      >
        <div>
          <div className="h-25">
            <Card.Img
              variant="top"
              className="w-100 __home-card-img"
              src={flags.png}
              alt={name}
              width="100%"
              // height="195"
              // alt={name}
            />
            {/* <svg
              className="w-100 __home-card-img"
              // width="375px"
              // height="195"
              // alt={name}
            >
              <img src={flags.svg} alt={name} className="w-100 h-100" />
            </svg> */}
          </div>

          <div className="h-75 countryRow">
            <Card.Body className="text-start">
              <h5>{name}</h5>

              <div>
                <span>Population: </span>
                <span className="__no-opacity">
                  {population.toLocaleString()}
                </span>
              </div>

              <div>
                <span>Region: </span>
                <span className="__no-opacity">{region}</span>
              </div>

              <div>
                <span>Capital: </span>
                <span className="__no-opacity">{capital}</span>
              </div>
            </Card.Body>
          </div>
        </div>
      </Button>
    </Card>
  );
};

export default CountryCard;
