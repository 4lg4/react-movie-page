import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Dropdown from '../../../src/js/components/dropdown';
import sinon from 'sinon';

describe('Dropdown - dropdown.js', () => {
  let wrapper;
  let callback;
  const items = [{id: 1, value: 1, text: 'One'}, {id: 2, value: 2, text: 'Two'}, {id: 3, value: 3, text: 'Three'}, {id: 4, value: 4, text: 'Four'}];

  before(() => {
    callback = sinon.spy();
    wrapper = shallow(
      <Dropdown
        placeholder="Alga.me Select"
        items={items}
        onSelect={callback}
      />
    );
    wrapper.find('select').simulate('change', {target: {value: 1}});
  });

  it('should render the options of the select', () => {
    const options = wrapper.find('.dropdown').props().children[1];
    options.forEach((item, i) => {
      expect(item.props.children).to.eql(items[i].text);
      expect(item.props.value).to.eql(items[i].value);
    });
  });

  it('should render a select element', () => {
    expect(wrapper.find('.dropdown').length).to.eql(1);
    expect(wrapper.getElement().type).to.eql('select');
  });

  it('should runs a given function via a onSelect prop', () => {
    expect(callback.called).to.eql(true);
  });
});
