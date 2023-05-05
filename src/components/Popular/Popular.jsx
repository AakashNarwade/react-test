import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./popular.css";
import { useEffect, useState } from "react";

const Popular = ({ movieProps }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // fetchMovies();
    fetch(
      "   https://api.themoviedb.org/3/movie/popular?api_key=1f9dcb976de4518b5ee557ff8941713a&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <h2>Popular </h2>
      <div className="popular_container">
        {movies.map((movie, i) => (
          <img
            key={i}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        ))}
      </div>
    </>
  );
};

export default Popular;
