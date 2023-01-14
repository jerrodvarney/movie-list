import React from 'react';

const MovieEntry = (props) => (
  <div className="entry">
    <h3>{props.movie.title}</h3>
  </div>
);

export default MovieEntry;