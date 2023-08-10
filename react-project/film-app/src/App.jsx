import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Card from "./components/Card";

//1e6c1228

const API_URL = "http://omdbapi.com?apikey=1e6c1228";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Star Wars");
  }, []);

  return (
    <div className="app">
      <h1>BrownyMoviey</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>
      <div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <Card key={movie} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>Films not found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
