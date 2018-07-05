import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import MoviePoster from '../../../src/js/components/movie-poster';
import sinon from 'sinon';

describe('MoviePoster - movie-poster.js', () => {
  let wrapper;
  let callback;

  before(() => {
    callback = sinon.spy();
    wrapper = shallow(
      <MoviePoster image="https://www.alga.me/logo.png" onClick={callback} />
    );
    wrapper.simulate('click');
  });

  it('should render an image', () => {
    expect(wrapper.find('.movie-poster').length).to.eql(1);
    expect(wrapper.getElement().type).to.eql('img');
  });

  it('should runs a given function via a onClick prop', () => {
    expect(callback.called).to.eql(true);
  });
});
