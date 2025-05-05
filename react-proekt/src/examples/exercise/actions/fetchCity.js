export const FETCH_CITY = "FETCH_CITY"
export const FETCH_CITY_SUCCESS = "FETCH_CITY_SUCCESS"
export const FETCH_CITY_FAILURE = "FETCH_CITY_FAILURE"

export const fetchCityRequest = () => ({
    type: FETCH_CITY
})

export const fetchCitySuccess = (cities) => ({
    type: FETCH_CITY_SUCCESS,
    payload: cities
})

export const fetchCityFailure = (error) => ({
    type: FETCH_CITY_FAILURE,
    payload: error
})

export const fetchCity = () => {
    return (dispatch) => {
        dispatch(fetchCityRequest())

        fetch("https://api.openweathermap.org/data/2.5/weather?q=Skopje&appid=faac19de1f77b9f80295e9042a868b93&units=metric")
        .then(res => res.json())
        .then(data => {         
            console.log(data);
              
            dispatch(fetchCitySuccess(data))
        })
        .catch((error) => {
            dispatch(fetchCityFailure(error.message))
        })
    }
}