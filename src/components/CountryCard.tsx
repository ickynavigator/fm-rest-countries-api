import { Button, Card } from "react-bootstrap";

const CountryCard = (country: typeCountry) => {
  const { flag, name, population, region, capital, alpha3Code } = country;
  return (
    <>
      <Button
        href={`/country/${alpha3Code}`}
        className="text-decoration-none m-0 p-0"
        variant="light"
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={flag} />
          <Card.Body className="text-start">
            <h5>{name}</h5>

            <div>
              <span>Population: </span>
              <span>{population.toLocaleString()}</span>
            </div>

            <div>
              <span>Region: </span>
              <span>{region}</span>
            </div>

            <div>
              <span>Capital: </span>
              <span>{capital}</span>
            </div>
          </Card.Body>
        </Card>
      </Button>
    </>
  );
};

export default CountryCard;
