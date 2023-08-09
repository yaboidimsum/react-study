import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

//1e6c1228

const API_URL = "http://omdbapi.com?apikey=1e6c1228";

const movie1 = {
  Title: "Star Wars: Episode VII - The Force Awakens",
  Year: "2015",
  imdbID: "tt2488496",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}}></img>
      </div>
      <div>
        <div className="container">
          <div className="movie">
            <div>
              <p>{movie1.Year}</p>
            </div>
            <div>
              <img
                src={
                  movie1.Poster !== "N/A"
                    ? movie1.Poster
                    : "https://via.placeholder.com/400"
                }
                alt={movie1.Title}
              />
            </div>
            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
