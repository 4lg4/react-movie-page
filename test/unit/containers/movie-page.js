import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MoviePage from '../../../src/js/containers/movie-page';

describe('MoviePage - movie-page.js', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(<MoviePage />);
  });

  it('should render the content', () => {
    expect(wrapper.find('.movie-page').length).to.eql(1);
    expect(wrapper.text()).to.eql('<MovieDetails /><Dropdown /><Carousel />');
  });
});
