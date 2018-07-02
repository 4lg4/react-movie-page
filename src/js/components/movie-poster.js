import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/components/movie-poster.scss';

const MoviePoster = ({image}) => {
  return (
    <img src={image} className="movie-poster" />
  );
};

MoviePoster.propTypes = {
  image: PropTypes.string.isRequired,
};

export default MoviePoster;
