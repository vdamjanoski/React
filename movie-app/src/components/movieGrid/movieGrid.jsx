import { useSelector } from "react-redux"
import noResults from "../../../images/no-results.png"

const MovieGrid = (searchMovie) => {
    const movies = useSelector(state => state.moviesReducer.movies)
    const searchResults = useSelector(state => state.searchMoviesReducer.searchResults)

    return (
        <div className="movies-container">
            {searchMovie ? (
                <>
                    <h1>Search Results</h1>
                    <div className="movies">
                        {searchResults?.length === 0 ? (
                            <div className="no-results">
                                <img src={noResults} alt="No Results" className="no-results-image"/>
                                <h2 className="no-results-title">No Results Found</h2>
                                <p className="no-results-message">We couldn't find what you are looking for. Try searching again</p>
                            </div>
                        ) : (
                            searchResults.map(movie => {
                                
                            })
                        )}
                    </div>
                </>
            ): das}
        </div>   
    )
}

export default MovieGrid