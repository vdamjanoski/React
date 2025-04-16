import { Link,NavLink } from "react-router-dom"

function Navbar(){
    const linkStyle = {textDecoration: "none", linkStyle: "none"}
    const ulStyle={backgroundColor: "#f9f9f9", width: "100vw", height: "50px", display: "flex", alignItems: "center", position: "absolute", left: "0", top: "0"}
    
    return(
        <nav style={ulStyle}>
            <ul style={{display: "flex", gap: "20px", listStyle: "none"}}>
                <li>
                    <NavLink to="/" style={linkStyle}>Home</NavLink>
                </li>
                <li>
                    <Link to="/about" style={linkStyle}>About</Link>
                </li>
                <li>
                    <Link to="/contact" style={linkStyle}>Contact</Link>
                </li>
                <li>
                    <Link to="/auth" style={linkStyle}>Authentication</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar