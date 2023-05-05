import "../Trending/trending.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";

const Trending = ({ movieProps }) => {
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

  const slideLeft = () => {
    console.log("click");

    var trendingImgContainer = document.getElementById("t");
    trendingImgContainer.scrollLeft -= 500;
    // var trendingContainer =
    //   document.getElementsByClassName("trending_container");
    // console.log(trendingContainer);
    // trendingContainer.scrollLeft = trendingContainer.scrollLeft - 500;
  };

  const slideRight = () => {
    console.log("right click");

    var trendingImgContainer = document.getElementById("t");
    trendingImgContainer.scrollLeft += 500;
    // var trendingContainer = document.getElementsByClassName(
    //   "trending_imgContainer"
    // );
    // console.log(trendingContainer);
    // trendingContainer.scrollLeft = Number(trendingContainer.scrollLeft) + 500;
  };

  return (
    <div className="container">
      <h2>Trending </h2>
      {loading ? (
        <div className="loading_container">loading</div>
      ) : (
        <div className="trending_container">
          <div onClick={slideLeft} className="leftArrow">
            <FiArrowLeft />
          </div>
          {movies.map((movie, i) => (
            <div key={i} id="t" className="trending_imgContainer">
              <img
                className="trending_img"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </div>
          ))}
          <div onClick={slideRight} className="rightArrow">
            <FiArrowRight />
          </div>
        </div>

        // <div className="trendingContainer">
        //   <div className="leftArrow" onClick={slideLeft}>
        //     <FiArrowLeft />
        //   </div>
        //   <div className="trendingCard">
        //     {movies.map((movie, i) => (
        //       <div className="imgCard">
        //         <img
        //           src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        //         />
        //       </div>
        //     ))}
        //   </div>
        //   <div className="rightArrow" onClick={slideRight}>
        //     <FiArrowRight />
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default Trending;
