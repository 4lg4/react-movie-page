import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MovieDetails from '../../../src/js/components/movie-details';
import movies from './movies-mock.json';

const movie = movies[0];

describe('MovieDetails - movie-details.js', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(
      <MovieDetails
        item={movie}
      />
    );
  });

  it('should render a div container', () => {
    expect(wrapper.find('.movie-details').length).to.eql(1);
    expect(wrapper.getElement().type).to.eql('div');
  });

  it('should render the given value of title', () => {
    expect(wrapper.find('.movie-details__title').text()).to.eql(movie.Title);
  });

  it('should render the given value of plot', () => {
    expect(wrapper.find('.movie-details__description-mobile').text()).to.eql(movie.Plot);
  });

  it('should render the given value of the entire metadata', () => {
    let metadata = '';
    Object.keys(movie).forEach((k)=>metadata += `${k}: ${movie[k]}`);
    expect(wrapper.find('.movie-details__description').text()).to.eql(metadata);
  });

  it('should render the given value of plot', () => {
    expect(wrapper.find('.movie-details__description-mobile').text()).to.eql(movie.Plot);
  });
});
