import React from 'react';
import PropTypes from 'prop-types';
import MoviePoster from './movie-poster';
import '../../scss/components/movie-details.scss';

const MovieDetails = ({item}) => {
  if (!item.Title) {
    return true;
  }

  return (
    <div className="movie-details">
      <div className="movie-details__title-mobile">{item.Title}</div>
      <div className="movie-details__description-mobile">{item.Plot}</div>
      <div className="movie-details__main">
        <div className="movie-details__main__poster">
          <MoviePoster image={item.Poster} />
        </div>

        <div className="movie-details__main__metadata">
          <div className="movie-details__title">{item.Title}</div>
          <div className="movie-details__description">
            <ul>
              {Object.keys(item).map((k)=>
                <li key={k}><strong>{k}:</strong> {item[k]}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  'item': PropTypes.object.isRequired,
};

export default MovieDetails;
