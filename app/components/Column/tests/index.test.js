import Column from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Column />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <Column>
        {children}
      </Column>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
