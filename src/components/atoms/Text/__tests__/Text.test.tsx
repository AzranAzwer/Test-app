import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Text,TextProps } from '../index';

describe('atoms/Text tests', () => {
  const wrapper = shallow(<Text>Hello</Text>);

  it('should have give text value `Hello`', () => {
    expect(wrapper.text()).toEqual('Hello');
  });

  it('should have 1rem as the base font size', () => {
    expect(wrapper.get(0).props.fontSize).toEqual('1rem');
  });
});

