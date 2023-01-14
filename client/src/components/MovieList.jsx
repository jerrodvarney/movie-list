import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const MovieList = (props) => (
  <div className="movie-list">
    {
      props.movies.map((movie) => (
        <MovieEntry movie={movie} />
      ))
    }
  </div>

);


export default MovieList;