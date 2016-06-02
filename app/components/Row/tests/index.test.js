import Row from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Row />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <Row>
        {children}
      </Row>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
