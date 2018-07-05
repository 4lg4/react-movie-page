
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import MovieDetails from '../components/movie-details';
import Dropdown from '../components/dropdown';
import Carousel from '../components/carousel';

import '../../scss/containers/movie-page.scss';

// const items = [
//   {id: 1, value: 'one', text: 'the one'},
//   {id: 2, value: 'two', text: 'the two'},
//   {id: 3, value: 'three', text: 'the three'},
// ];

// const carouselItems = [
//   {id: 1, image: 'http://via.placeholder.com/300x500?text=MoviePosterOne', title: 'One title', description: 'One description'},
//   {id: 2, image: 'http://via.placeholder.com/300x500?text=MoviePosterTwo', title: 'Two title', description: 'Two description'},
//   {id: 3, image: 'http://via.placeholder.com/300x500?text=MoviePosterThree', title: 'Three title', description: 'Three description'},
//   {id: 4, image: 'http://via.placeholder.com/300x500?text=MoviePosterOne4', title: 'One title', description: 'One description'},
//   {id: 5, image: 'http://via.placeholder.com/300x500?text=MoviePosterTwo5', title: 'Two title', description: 'Two description'},
//   {id: 6, image: 'http://via.placeholder.com/300x500?text=MoviePosterThree6', title: 'Three title', description: 'Three description'},
//   {id: 7, image: 'http://via.placeholder.com/300x500?text=MoviePosterOne7', title: 'One title', description: 'One description'},
//   {id: 8, image: 'http://via.placeholder.com/300x500?text=MoviePosterTwo8', title: 'Two title', description: 'Two description'},
//   {id: 9, image: 'http://via.placeholder.com/300x500?text=MoviePosterThree9', title: 'Three title', description: 'Three description'},
// ];

class MoviePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      dropdownPlaceholder: 'Genre',
      moviesFullList: [],
      movies: [],
      moviesByGenre: {},
      loading: false,
      errors: [],
      genre: [],
    };

    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleGenreOnSelect = this.handleGenreOnSelect.bind(this);

    this.getMovies();
  }

  handleOnSelect(movie) {
    this.setState({movie});
  }

  handleGenreOnSelect(genre) {
    this.filterMoviesByGenre(genre);
  }

  filterMoviesByGenre(genre) {
    if (genre === 'all') {
      this.setState({
        movies: this.state.moviesFullList,
      });
      return true;
    }

    this.setState({
      movies: this.state.moviesFullList.filter((movie)=> !!(movie.Genre.match(genre))),
    });
  }

  generateGenreList() {
    let genre = [];
    for (const item of this.state.moviesFullList) {
      item.Genre.split(', ').forEach((g) => {
        if (genre.indexOf(g) === -1) {
          genre.push(g);
        }
      });
    }

    genre = genre
      .sort((g1, g2) => (g1 > g2) ? 1 : -1)
      .map((g)=>({
        id: g,
        value: g,
        text: g,
      }));

    genre.unshift({
      id: 0,
      value: 'all',
      text: 'All',
    });

    this.setState({genre});
  }

  async getMovies() {
    // event.preventDefault();
    // const EMAIL_SEPARATOR = ',';
    // this.setState({errors: [], success: ''});

    // const message = {
    //   from: this.state.from.trim(),
    //   to: toArray(this.state.to, EMAIL_SEPARATOR),
    //   cc: toArray(this.state.cc, EMAIL_SEPARATOR),
    //   bcc: toArray(this.state.bcc, EMAIL_SEPARATOR),
    //   subject: this.state.subject.trim(),
    //   text: this.state.text.trim(),
    // };

    // const {valid, errors} = this.isAValidForm(message);

    // if (!valid) {
    //   this.setState({errors});
    //   setTimeout(() => this.setState({errors: []}), 5000);
    //   return;
    // }

    // this.setState({loading: true});

    try {
      const GET_SUCCESSFUL = 200;
      const response = await fetch(`${this.props.apiUrl}`);
      const json = await response.json();
      if (response.status !== GET_SUCCESSFUL) {
        throw new Error(json.message);
      }
      // console.log('###### ', json);

      this.setState({
        loading: true,
        movies: json,
        moviesFullList: json,
      });
      this.generateGenreList();
    } catch (error) {
      console.error(error);
      this.setState({
        errors: [{key: 'apiError', message: error.message}],
        loading: true,
      });
    }
    setTimeout(() => this.setState({errors: [], success: ''}), 5000);
  }

  render() {
    const {genre, movie, dropdownPlaceholder, movies} = this.state;

    return (
      <div className="movie-page">
        <MovieDetails item={movie} />
        <Dropdown items={genre} placeholder={dropdownPlaceholder} onSelect={this.handleGenreOnSelect} />
        <Carousel items={movies} onSelect={this.handleOnSelect} />
      </div>
    );
  }
};

MoviePage.propTypes = {
  apiUrl: PropTypes.string.isRequired,
};
MoviePage.defaultProps = {
  apiUrl: 'http://www.mocky.io/v2/5af935ab320000221d86afe6',
};
export default MoviePage;
