import { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { CountryDetails, CountryName } from "../functions/countryFunctions";

const CountryScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flag, setflag] = useState("");

  const [name, setname] = useState("");
  const [nativeName, setnativeName] = useState("");
  const [population, setpopulation] = useState(0);
  const [region, setregion] = useState("");
  const [subRegion, setsubRegion] = useState("");
  const [capital, setcapital] = useState("");
  //   Top Level Domain
  const [TLD, setTLD] = useState([""]);
  const [currency, setcurrency] = useState<typeCurrency[]>([]);
  const [languages, setlanguages] = useState<typeLanguage[]>([]);
  const [borders, setborders] = useState([""]);

  const [borderBtns, setborderBtns] = useState("");

  const tldParser = (tld: string[]) => {
    const lt = tld.length - 1;
    return tld.reduce((acc, curr, ind) => {
      return `${acc} ${curr}${lt !== ind ? `,` : ``}`;
    }, "");
  };

  const languageParser = (languages: typeLanguage[]) => {
    const lt = languages.length - 1;
    return languages.reduce((acc, curr, ind) => {
      return `${acc} ${curr.name}${lt !== ind ? `,` : ``}`;
    }, "");
  };

  const currencyParser = (currencies: typeCurrency[]) => {
    const lt = currencies.length - 1;
    return currencies.reduce((acc, curr, ind) => {
      return `${acc} ${curr.name}${lt !== ind ? `,` : ``}`;
    }, "");
  };

  const borderParser = (borders: string[]) => {
    if (borders.length > 0 && borders[0] !== "") {
      borders.forEach(async (acc) => {
        let name = await CountryName(acc);
        console.log(name);
        const btn = `<button><a href="/country/${acc}">${name}</a></button>`;
        setborderBtns(borderBtns + btn);
      });
    }
  };

  const goBackBtn = () => {};

  useEffect(() => {
    const CD = async () => {
      await CountryDetails(id).then((res) => {
        console.log(res.data);

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
        setborders(res.data.borders);

        borderParser(borders);
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
              <span>{population}</span>
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
              <span>{tldParser(TLD)}</span>
            </div>

            <div>
              <span>Currencies: </span>
              <span>{currencyParser(currency)}</span>
            </div>

            <div>
              <span>Languages: </span>
              <span>{languageParser(languages)}</span>
            </div>
          </Row>

          <div>
            <span>Border Countries: </span>
            <span>{borderBtns}</span>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CountryScreen;
