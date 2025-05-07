import SearchIcon from '/images/search-icon.svg';
import "./searchBar.scss"

const SearchBar = ({searchTerm, onSearchChange}) => {

    const handleChange = (e) => {
        onSearchChange(e.target.value)
    }
    
    return(
        <div className="search-container">
            <div className="search">
                <img src={SearchIcon} alt="" />
                <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
            </div>
        </div>
    )
}

export default SearchBar