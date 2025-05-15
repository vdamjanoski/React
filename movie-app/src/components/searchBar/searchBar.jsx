import "./searchBar.scss"

const SearchBar = ({onSearchChange, searchTerm}) => {
    const handleChange = (e) => {
        onSearchChange(e.target.value)
    }

    return(
        <div className="search-container">
            <div className="search">
                <img src="/images/search-icon.svg" alt="" className="search-icon"/>
                <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange} />
            </div>
        </div>
    )
}

export default SearchBar