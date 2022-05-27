import React from 'react';
import {View} from 'react-native';
import Card from '../CardComponent';
import styles from './styles';

export default function List({data}) {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}
