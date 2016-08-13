import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../../src/components/app';

function setup() {
  const wrapper = mount(<App />);

  return {
    wrapper,
  };
}

describe('App' , () => {
  const { wrapper } = setup();

  it('renders something', () => {
    expect(wrapper).to.exist;
  });
});
