import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LoadingContent from '../../../src/js/components/loading-content';

describe('LoadingContent - loading-content.js', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(<LoadingContent />);
  });

  it('should render the content', () => {
    expect(wrapper.find('.spinner').length).to.eql(1);
  });
});
