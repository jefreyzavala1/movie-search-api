import { useState, useEffect } from "react";
export default function MovieDescription({ movie }) {
  const apiKey = "308b11e2";
  const [item, setItem] = useState(movie);
  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
      );
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="movie-description">
      <ul>
        <span className="description">Plot:</span>
        <li>{item.Plot}</li>
        <span className="description">Director:</span>
        <li>{item.Director}</li>
        <span className="description">Actors:</span>
        <li>{item.Actors}</li>
        <span className="description">Rating:</span>
        <li>{item.imdbRating}</li>
      </ul>
    </div>
  );
}
