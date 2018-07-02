import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MoviePoster from './js/components/movie-poster';
import Dropdown from './js/components/dropdown';
import Carousel from './js/components/carousel';

const items = [
  {id: 1, value: 'one', text: 'the one'},
  {id: 2, value: 'two', text: 'the two'},
  {id: 3, value: 'three', text: 'the three'},
];

const carouselItems = [
  {id: 1, image: 'http://via.placeholder.com/300x500?text=MoviePosterOne'},
  {id: 2, image: 'http://via.placeholder.com/300x500?text=MoviePosterTwo'},
  {id: 3, image: 'http://via.placeholder.com/300x500?text=MoviePosterThree'},
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MoviePoster image="http://via.placeholder.com/300x500?text=MoviePoster" />
        <Dropdown items={items} />
        <Carousel items={carouselItems} />
      </div>
    );
  }
}

export default App;
