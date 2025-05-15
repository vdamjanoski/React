import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies } from "../../actions/movieActions"
import { PAGE_ONE } from "../../constants"
import "./movieList.scss"
import HeroImage from "../../components/heroImage/heroImage"
import SearchBar from "../../components/searchBar/searchBar"
import Spinner from "../../spinner/spinner"
const MovieList = () => {
    const [searchMovie, setSearchMovie] = useState("")
    const loadingMovies = useSelector(state => state.moviesReducer.loadingMovies)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovies(PAGE_ONE))
    },[dispatch])

    const onSearchChange = (newSearchTerm) => {
        setSearchMovie(newSearchTerm);
    }

    return(
        <>
            <HeroImage/>
            <SearchBar/>
            {loadingMovies ? <Spinner/> : <MovieGrid searchMovie={searchMovie} /> }
        </>
    )

}

export default MovieList