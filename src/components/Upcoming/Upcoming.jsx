import "../Upcoming/upcoming.css";
import { useEffect, useState } from "react";

const Upcoming = ({ movieProps }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // movies.length = 5;

  useEffect(() => {
    // fetchMovies();
    setLoading(true);
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=1f9dcb976de4518b5ee557ff8941713a"
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
    setLoading(false);
  }, []);

  return (
    <div className="container">
      <h2>Upcoming Movies </h2>
      {loading ? (
        <div className="loading_container">loading</div>
      ) : (
        <div className="upcoming_container">
          {movies.map((movie, i) => (
            <div key={i} className="upcoming_imgContainer">
              <img
                className="upcoming_img"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Upcoming;
