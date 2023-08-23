import { useEffect, useState } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import MovieList from "./components/MovieList";
import "./index.css";
import SearchForm from "./components/SearchForm";

export default function App() {
  const apiKey = "308b11e2";

  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovies = async (searchTerm, searchType) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&type=${searchType}&apikey=${apiKey}`
      );
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie("avengers");
  }, []);

  useEffect(() => {
    getMovies("batman", "movie");
  }, []);
  return (
    <div className="App">
      <h1 className="app-title">Cinematica</h1>
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
      <SearchForm getMovies={getMovies} />
      <MovieList movies={movies} />
    </div>
  );
}
