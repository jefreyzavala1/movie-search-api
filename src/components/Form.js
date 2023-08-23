import { useState } from "react";

export default function Form({ getMovie }) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovie(formData.searchTerm);
    setFormData({ searchTerm: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">Search For a movie:</label>
      <input
        className="form-input"
        name="searchTerm"
        type="text"
        onChange={handleChange}
        value={formData.searchTerm}
        placeholder="Search"
      />
      <br />
      <input type="submit" className="form-submit" />
    </form>
  );
}
