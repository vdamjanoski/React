import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './countryCard.css'

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
      <div className="container">
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} width="200" className="flag"/>
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
    </div>
  );
}

export default CountryCard;