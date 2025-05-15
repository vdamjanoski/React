import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="react-movie-logo">
                    <Link to="/">
                        <img src="/images/movie-logo.svg" alt="" />
                    </Link>
                </li>
                <li className="tmdb-logo">
                    <img src="/images/tmdb-logo.svg" alt="" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar