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

  componentDidUpdate() {
    this.movieContainer.current.scrollLeft = 0;

    const movieContainer = this.movieContainer.current;
    const movieContainerRail = this.movieContainerRail.current;
    console.log('componentDidUpdate ', movieContainer.offsetWidth, movieContainerRail.style.left, movieContainerRail.offsetWidth);
  }

  componentDidMount() {
    const movieContainer = this.movieContainer.current;
    const movieContainerRail = this.movieContainerRail.current;
    console.log('componentDidMount ', movieContainer.offsetWidth, movieContainerRail.style.left, movieContainerRail.offsetWidth);
  }

  handleScrollTo(direction) {
    const movieContainer = this.movieContainer.current;
    const movieContainerRail = this.movieContainerRail.current;

    // console.log(this.movieContainerRail);
    // console.log(movieContainerRail);
    console.log(movieContainer.offsetWidth, movieContainerRail.style.left, movieContainerRail.offsetWidth);
    // console.log(movieContainerRail.style.left += movieContainer.offsetWidth);
    const left = (movieContainerRail.style.left) ? parseInt(movieContainerRail.style.left.replace('px', '')) : 0;
    if (direction === 'R') {
      // console.log(left + movieContainer.offsetWidth);
      // console.log(movieContainerRail.offsetWidth, left - movieContainer.offsetWidth, (Math.abs(left - movieContainer.offsetWidth) >= (movieContainerRail.offsetWidth - movieContainer.offsetWidth)));
      if (Math.abs(left - movieContainer.offsetWidth) >= (movieContainerRail.offsetWidth - movieContainer.offsetWidth)) {
        movieContainerRail.style.left = `auto`;
        movieContainerRail.style.right = `0px`;
      } else {
        movieContainerRail.style.right = `auto`;
        movieContainerRail.style.right = `${left - movieContainer.offsetWidth}px`;
      }
      console.log('scroll R', scroll);
      movieContainerRail.style.left = `${scroll}px`;
      // movieContainer.scrollLeft += movieContainer.offsetWidth;
    } else {
      console.log(left + movieContainer.offsetWidth, (Math.abs(left + movieContainer.offsetWidth) >= movieContainerRail.offsetWidth));
      const scroll = (Math.abs(left + movieContainer.offsetWidth) >= movieContainerRail.offsetWidth) ? movieContainerRail.offsetWidth : (left + movieContainer.offsetWidth);
      movieContainerRail.style.left = `${scroll}px`;
      // movieContainer.scrollLeft -= movieContainer.offsetWidth;
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
