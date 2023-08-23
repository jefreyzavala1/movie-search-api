import { useState } from "react";

export default function Form({ getMovies }) {
  const [formData, setFormData] = useState({
    searchTerm: "",
    searchType: "series",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getMovies(formData.searchTerm, formData.searchType);

    setFormData({ searchTerm: "", searchType: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">Search List:</label>
      <input
        className="form-input"
        name="searchTerm"
        type="text"
        onChange={handleChange}
        value={formData.searchTerm}
        placeholder="Search movies or series"
      />
      <br />
      <label className="form-label">Select Type:</label>
      <select
        name="searchType"
        onChange={handleChange}
        value={formData.searchType}
      >
        <option value="series">Series</option>
        <option value="movie">Movies</option>
      </select>
      <br />

      <input type="submit" className="form-submit" />
    </form>
  );
}
