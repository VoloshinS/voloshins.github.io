import Projects, { Project } from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Projects />', () => {
  it('should render projects', () => {
    const renderedComponent = shallow(
      <Projects />
    );
    expect(renderedComponent.find(Project).first().props().title).toEqual('Orchestrated');
  });
});
