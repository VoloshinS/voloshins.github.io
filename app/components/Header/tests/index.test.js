import Header from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header />', () => {
  it('should render the logo', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find('Logo').length).toEqual(1);
  });

  it('should render menu Button', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.find('MenuButton').length).toEqual(1);
  });
});
