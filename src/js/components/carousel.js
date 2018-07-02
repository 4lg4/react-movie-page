import React from 'react';
import PropTypes from 'prop-types';
import MoviePoster from './movie-poster';
import '../../scss/components/carousel.scss';

const Carousel = ({items}) => {
  console.log(items);
  return (
    <div className="carousel">
      {items.map((item, i) =>
        <MoviePoster key={i} image={item.image} />
      )}
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Carousel;
