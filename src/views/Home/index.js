import React, {useState} from 'react';
import {View, Text} from 'react-native';
import List from '../../components/ListComponent';
import ListRealState from '../../models/ListRealStates';

export default function Home() {
  const [data, setData] = useState(new ListRealState());

  return (
    <View>
      <List data={data} />
    </View>
  );
}
