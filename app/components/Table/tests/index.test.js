import Table from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Table />', () => {
  it('should render items', () => {
    const renderedComponent = shallow(<Table items={[{}]} />);
    expect(renderedComponent.text()).toContain('Title');
  });
});
