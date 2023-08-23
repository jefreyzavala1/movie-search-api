import MovieDisplay from "./MovieDisplay";
import { useState } from "react";
export default function MovieList({ movies }) {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3;

  const loading = () => <>Input a movie/series title above</>;
  const loaded = () => {
    const totalmovies = movies.Search.length;
    const totalPages = Math.ceil(totalmovies / moviesPerPage);
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToDisplay = movies.Search.slice(startIndex, endIndex);

    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    return (
      <>
        <ul className="carousel">
          {moviesToDisplay.map((movie) => (
            <li className="carousel-item" key={movie.imdbID}>
              <MovieDisplay movie={movie} />
            </li>
          ))}
        </ul>
        <div className="pages">
          <button onClick={handlePrevPage} disabled={currentPage <= 1}>
            Previous Page
          </button>
          <button onClick={handleNextPage} disabled={currentPage >= totalPages}>
            Next Page
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      {!movies || !movies.Search || movies.length === 0 ? loading() : loaded()}
    </>
  );
}
