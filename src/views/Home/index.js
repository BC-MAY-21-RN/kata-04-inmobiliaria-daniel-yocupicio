import React, {useState} from 'react';
import {View} from 'react-native';
import List from '../../components/ListComponent';
import ListRealState from '../../models/ListRealStates';
import styles from './styles';

export default function Home() {
  const [data, setData] = useState(new ListRealState());

  return (
    <View style={styles.container}>
      <List data={data.getListData()} />
    </View>
  );
}
