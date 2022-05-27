import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../src/views/Home';

describe('Views test', () => {
  it('Home view snapshot', () => {
    const renderHome = renderer.create(<Home />).toJSON();
    expect(renderHome).toMatchSnapshot();
  });
});
