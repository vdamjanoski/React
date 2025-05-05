import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchCity } from "../actions/fetchCity";

const WeatherApp = () => {
    const {loading, weatherData, error} = useSelector((state) => state)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCity())
    }, [dispatch]);



    return (
        <>
            <h1>Weather App</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <h2>main</h2>
                </div>
            )}
        </>
    )
}

export default WeatherApp