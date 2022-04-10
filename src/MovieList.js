const MovieList = ({ movie }) => {
  return (
    <li className="movie-info" key={movie.id}>
      <img src={movie.poster} alt={movie.title} height="300px" />
      <p>
        {movie.title} is director by {movie.director} and publish in{" "}
        {movie.year}.
      </p>
      <h3>Rating :- {movie.rating}</h3>
    </li>
  );
};

export default MovieList;
