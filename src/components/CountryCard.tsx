import { Button, Card, Col, Row } from "react-bootstrap";

const CountryCard = (country: typeCountry) => {
  let { flag, name, population, region, capital, alpha3Code } = country;
  flag = "";
  return (
    <Card style={{ width: "100%" }}>
      {/* <Button
        href={`/country/${alpha3Code}`}
        className="text-decoration-none  w-100"
        variant="light"
        key={alpha3Code}
      > */}
      <div>
        <div className="h-25">
          <Card.Img
            variant="top"
            src={flag}
            style={{ width: "100%", height: "160px" }}
          />
        </div>

        <div className="h-75">
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
        </div>
      </div>
      {/* </Button> */}
    </Card>
  );
};

export default CountryCard;
