import Logo from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Logo />', () => {
  it('should render its text', () => {
    const children = 'Logo Text';
    const renderedComponent = shallow(
      <Logo>{children}</Logo>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
