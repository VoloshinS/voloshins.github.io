import MenuButton from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<MenuButton />', () => {
  it('should adopt the className', () => {
    const renderedComponent = shallow(<MenuButton className="test" />);
    expect(renderedComponent.hasClass('test')).toEqual(true);
  });
});
