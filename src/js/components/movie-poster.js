import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/components/movie-poster.scss';

const MoviePoster = ({image, onClick}) => {
  if (!image) {
    return true;
  }

  return (
    <img src={image} className="movie-poster" onClick={onClick} />
  );
};

MoviePoster.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MoviePoster;
