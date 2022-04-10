import { movies } from "./data/Movie";
import MovieList from "./MovieList";

const fetchMovieData = () => {
  return movies;
};

const MovieComponent = () => {
  const movieData = fetchMovieData();
  return (
    <div className="container">
      <h1>
        <span className="mainHeading"> Movies..</span>
      </h1>
      <ul className="Movies-list">
        {movies.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieComponent;
