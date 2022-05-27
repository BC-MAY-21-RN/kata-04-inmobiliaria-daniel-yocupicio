import React from 'react';
import {ScrollView} from 'react-native';
import Card from '../CardComponent';

export default function List({data}) {
  return (
    <ScrollView>
      {data.map((item, i) => (
        <Card item={item} islast={i === data.length - 1} />
      ))}
    </ScrollView>
  );
}
