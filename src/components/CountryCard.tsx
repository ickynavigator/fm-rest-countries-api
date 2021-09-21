import { Button, Card } from "react-bootstrap";

const CountryCard = (country: typeCountry) => {
  let { flag, name, population, region, capital, alpha3Code } = country;
  // console.log(flag);
  return (
    <Card
      className={`flex-fill`}
      // style={{ width: "100%", height: "100%" }}
    >
      <Button
        href={`/country/${alpha3Code}`}
        className="text-decoration-none  w-100"
        variant="light"
      >
        <div>
          <div className="h-25">
            <Card.Img
              variant="top"
              src={flag}
              className="card-svg h-100 w-100"
              as="svg"
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
      </Button>
    </Card>
  );
};

export default CountryCard;
