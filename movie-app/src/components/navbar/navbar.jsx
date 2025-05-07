import { Link } from "react-router-dom"
import MovieLogo from '/images/movie-logo.svg';
import TmdbLogo from '/images/tmdb-logo.svg';
import "./navbar.scss";


const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="react-movie-logo">
                    <Link to="/">
                        <img src={MovieLogo} alt="" />
                    </Link>
                </li>
                <li className="tmdg-logo">
                    <img src={TmdbLogo} alt="" />
                </li>
            </ul>
        </nav>
    )
}
export default Navbar