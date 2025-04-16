import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './country.css'

function Home(){
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => setCountries(data))
    },[])

    return(
        <div className="countries">
            {countries.length > 0 && countries.map((country, index) => {
                return <div className="country" key={index}>
                    <h1>{country.name.common}</h1>
                    <p>Capital city: <b>{country.capital}</b></p>
                    <Link to={`/country/${country.name.common}`}><img src={country.flags.png} alt="" /></Link>
                    <p>Region: {country.region}</p>
                    <p>Timezones: {country.timezones}</p>
                    {country.currencies && (
            <div>
                <h4>Currencies:</h4>
                {Object.values(country.currencies).map((currency, index) => (
                    <h4 key={index}>{currency.name} ({currency.symbol})</h4>
                ))}
            </div>
                    )}
                    <Link to={country.maps.googleMaps} target="_blank" className="maps-link">Google maps link</Link>
                </div>
            })}
        </div>
    )

}
export default Home