import Container from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Container />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <Container>
        {children}
      </Container>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should adopt the className', () => {
    const renderedComponent = shallow(<Container className="test" />);
    expect(renderedComponent.hasClass('test')).toEqual(true);
  });
});
