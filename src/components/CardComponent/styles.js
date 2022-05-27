import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 40,
    height: 140,
    backgroundColor: '#f5fdff',
    borderRadius: 20.05,
    marginTop: 15,
  },
  direction: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  cost: {fontSize: 16, fontWeight: '600', color: '#000'},
  adresscontainer: {
    flex: 1,
    flexDirection: 'row',
    height: 21,
    alignItems: 'center',
  },
  title: {fontSize: 19, color: '#151525'},
  marginadress: {marginLeft: 5},
  infocontainer: {height: 120, marginLeft: 6},
  listiconcontainer: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  text1: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 6,
    color: '#151525',
  },
  text2: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#151525',
  },
  review: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fbedb7',
    bottom: 5.7,
    paddingHorizontal: 11,
    borderRadius: 24,
    paddingVertical: 4,
    alignSelf: 'center',
    alignItems: 'center',
  },
  labelreview: {color: '#7a6229', marginLeft: 3},
});

export default styles;
