import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../src/components/CardComponent';
import List from '../src/components/ListComponent';

describe('Components test', () => {
  it('Card component snapshot', () => {
    const renderCard = renderer
      .create(
        <Card
          item={{
            name: 'The Game',
            adress: '3517 The Best Game',
            rooms: 4,
            bathrooms: 2,
            size: 230,
            cost: 200,
            evaluation: 4.9,
            like: false,
          }}
          islast={false}
        />,
      )
      .toJSON();
    expect(renderCard).toMatchSnapshot();
  });
  it('List component snapshot', () => {
    const renderList = renderer.create(<List data={[]} />).toJSON();
    expect(renderList).toMatchSnapshot();
  });
});
