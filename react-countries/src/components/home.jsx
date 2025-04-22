import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './country.css'

function Home(){
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")
    const searchCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    function handleSearch(e) {
        setSearch(e.target.value);
      }
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => setCountries(data))
    },[])

    return(
        <div>
            <input type="text" placeholder="Search..." onChange={handleSearch} value={search} className="search-input"/>
            <div className="countries">
            {searchCountries.length > 0 && searchCountries.map((country, index) => {
                return <div className="country" key={index}>
                    <h1>{country.name.common}</h1>
                    <p>Capital city: <b>{country.capital}</b></p>
                    <Link to={`/country/${country.name.common}`}><img src={country.flags.png} alt="" /></Link>
                    <br />
                    <Link to={country.maps.googleMaps} target="_blank" className="maps-link">Google maps link</Link>
                </div>
            })}
         </div>
        </div>
    )

}
export default Home