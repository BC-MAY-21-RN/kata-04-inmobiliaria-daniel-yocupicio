import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 40,
    height: 120,
    backgroundColor: '#f5fdff',
    borderRadius: 20.05,
    marginTop: 15,
  },
});

export default styles;
