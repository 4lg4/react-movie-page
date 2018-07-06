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
    this.movieContainerRail = React.createRef();
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleScrollTo = this.handleScrollTo.bind(this);
  }

  handleOnSelect(item) {
    this.props.onSelect(item);
  }

  componentWillReceiveProps(nextProps, a) {
    if (this.movieContainerRail.current && (this.props.items.join(',') !== nextProps.items.join(','))) {
      this.movieContainerRail.current.style.left = '0px';
    }
  }

  handleScrollTo(direction) {
    const movieContainer = this.movieContainer.current;
    const movieContainerRail = this.movieContainerRail.current;

    if (direction === 'R') {
      const left = (movieContainerRail.style.left) ? parseInt(movieContainerRail.style.left.replace('px', '')) : - 1;
      if ((Math.abs(left) + movieContainer.offsetWidth) >= movieContainerRail.offsetWidth) {
        return true;
      }

      movieContainerRail.style.left = `${left - movieContainer.offsetWidth}px`;
    } else {
      const left = (movieContainerRail.style.left) ? parseInt(movieContainerRail.style.left.replace('px', '')) : 0;
      if (!movieContainerRail.style.left || left >= 0) {
        return true;
      }

      movieContainerRail.style.left = `${left + movieContainer.offsetWidth}px`;
    }
  }

  render() {
    const {items} = this.props;

    if (!items || items.length === 0) {
      return <LoadingContent />;
    }

    return (
      <div className="carousel">
        <div className="carousel__nav-left" onClick={()=> this.handleScrollTo('L')}>L</div>
        <div className="carousel__container" ref={this.movieContainer}>
          <div className="carousel__container__rail" ref={this.movieContainerRail}>
            {items.map((item, i) =>
              <MoviePoster key={i} image={item.Poster} onClick={()=> this.handleOnSelect(item)} />
            )}
          </div>
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
