import MovieDescription from "./MovieDescription";
import { useState } from "react";
export default function MovieDisplay({ movie }) {
  const [desc, setDesc] = useState(false);

  function handleClick() {
    setDesc(!desc);
  }

  const loading = () => <>Currently Loading Movie...</>;

  const loaded = () => (
    <div onClick={handleClick} className="movie-display">
      <h2 className="movie-title">{movie.Title}</h2>
      <img className="movie-image" src={movie.Poster} alt={movie.Title} />
      {desc && (
        <div className="modal">
          <button className="modal-close" onClick={handleClick}>
            Close
          </button>
          <MovieDescription movie={movie} />
        </div>
      )}
    </div>
  );

  return movie && movie.Title ? loaded() : loading();
}
