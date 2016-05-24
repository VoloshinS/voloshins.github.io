import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Footer from '../index';
import A from 'components/A';

describe('<Footer />', () => {
  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(
      <p>Made with love by <A href="https://github.com/VoloshinS">Voloshin Sergey</A>.</p>
    )).toEqual(true);
  });
});
