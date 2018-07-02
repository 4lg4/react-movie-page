import React from 'react';
import PropTypes from 'prop-types';
import MoviePoster from 'movie-poster';
import '../../scss/components/movie-poster.scss';

const MovieDetails = ({movie}) => {
  return (
    <div className="movie-details">
      <MoviePoster image={movie.image} />
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieDetails;
