import { Link } from "react-router-dom"
import "./movieCard.scss"

const MovieCard = ({ image, movieId, title, releaseDate }) => {
    return(
        <div>
            <Link to={movieId}>
                <img src={image} alt="movie-img" className="movie-img"/>
            </Link>
            
        </div>
    )
}

export default MovieCard