import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CountryCard() {
  const { name } = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => response.json())
      .then((data) => {setCountry(data[0]);
      })
  }, [name]);

  if (country) return (
    <div>
        <Link to={"/"}>Home</Link>
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} width="200" />
      <p>Capital: {country.capital?.[0]}</p>
      <p>Region: {country.region}</p>
      <p>Population: {country.population}</p>
      {country.currencies && (
            <div>
                {Object.values(country.currencies).map((currency, index) => (
                  <div>
                    Currencies: <span key={index}><b>{currency.name} ({currency.symbol})</b></span>
                  </div>
                ))}
            </div>
                    )}
      <p>Timezones: {country.timezones}</p>
    </div>
  );
}

export default CountryCard;