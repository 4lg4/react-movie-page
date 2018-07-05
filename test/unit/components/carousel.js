import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Carousel from '../../../src/js/components/carousel';
import sinon from 'sinon';
import movies from './movies-mock.json';

describe('Carousel - carousel.js', () => {
  let wrapper;
  let callback;

  before(() => {
    callback = sinon.spy();
    wrapper = shallow(
      <Carousel
        placeholder="Alga.me Select"
        items={movies}
        onClick={callback}
      />
    );
    wrapper.simulate('click');
  });

  it('should render the content', () => {
    expect(wrapper.find('.carousel').length).to.eql(1);
    expect(wrapper.getElement().type).to.eql('div');
  });

  it('should render the content children', () => {
    wrapper.find('.carousel__content').props().children.forEach((movie, i) =>
      expect(movie.props.image).to.eql(movies[i].Poster)
    );
  });
});
