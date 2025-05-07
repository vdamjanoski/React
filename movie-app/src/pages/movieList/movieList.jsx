import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../actions/movieActions";
import { PAGE_ONE } from "../../constants";
import HeroImage from "../../components/heroImage/heroImage";
import SearchBar from "../../components/searchBar/searchBar";
import Spinner from "../../spinner/spinner";
import MovieGrid from "../../components/movieGrid/movieGrid";
import ReactPaginate from "react-paginate"
import "./movieList.scss"
import { searchMovieDetails } from "../../actions/searchMovieActions";

const MovieList = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const loadingMovies = useSelector(
    (state) => state.moviesReducer.loadingMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(PAGE_ONE));
  }, [dispatch]);

  useEffect(() => {
    if(searchMovie){
      dispatch(searchMovieDetails(searchMovie))
    }
  }, [searchMovie,dispatch])

  const onSearchChange = (newSearchTerm) => {
    setSearchMovie(newSearchTerm) 
  };

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1
    dispatch(fetchMovies(currentPage))
  }

  return (
    <>
      <HeroImage />
      <SearchBar onSearchChange={onSearchChange}/>
      {loadingMovies ? <Spinner/> : <MovieGrid searchMovie={searchMovie}/>}
      {searchMovie ? null : (
        <ReactPaginate previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="pagination-container"
        pageClassName="page-item"
        activeClassName="active"
        previousLinkClassName="page-item"
        nextLinkClassName="page-item"
        />
      )}
    </>
  );
};

export default MovieList;