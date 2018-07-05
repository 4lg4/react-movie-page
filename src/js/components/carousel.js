import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MoviePoster from './movie-poster';
import LoadingContent from './loading-content';

import '../../scss/components/carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.movieContainer = React.createRef();
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleScrollTo = this.handleScrollTo.bind(this);
  }

  handleOnSelect(item) {
    this.props.onSelect(item);
  }

  componentDidUpdate() {
    this.movieContainer.current.scrollLeft = 0;
  }

  handleScrollTo(direction) {
    const movieContainer = this.movieContainer.current;

    if (direction === 'R') {
      movieContainer.scrollLeft += movieContainer.offsetWidth;
    } else {
      movieContainer.scrollLeft -= movieContainer.offsetWidth;
    }
  }

  render() {
    const {items} = this.props;

    if (!items) {
      return <LoadingContent />;
    }

    return (
      <div className="carousel">
        <div className="carousel__nav-left" onClick={()=> this.handleScrollTo('L')}>L</div>
        <div className="carousel__content" ref={this.movieContainer}>
          {items.map((item, i) =>
            <MoviePoster key={i} image={item.Poster} onClick={()=> this.handleOnSelect(item)} />
          )}
        </div>
        <div className="carousel__nav-right" onClick={()=> this.handleScrollTo('R')}>R</div>
      </div>
    );
  }
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
};

export default Carousel;
