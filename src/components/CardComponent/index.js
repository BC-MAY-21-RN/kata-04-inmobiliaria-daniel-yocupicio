import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ImageSVG from '../../assets/icons/image.svg';
import BedSVG from '../../assets/icons/bed.svg';
import HeartSVG from '../../assets/icons/heart.svg';
import BathroomSVG from '../../assets/icons/bathroom.svg';
import LocationSVG from '../../assets/icons/Location.svg';
import SizeSVG from '../../assets/icons/size.svg';
import StarSVG from '../../assets/icons/star.svg';

const Image = () => {
  return (
    <View>
      <ImageSVG width={120} height={120} />
      <View
        style={{
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
        }}>
        <StarSVG width={15} height={15} />
        <Text style={{color: '#7a6229', marginLeft: 3}}>4.7</Text>
      </View>
    </View>
  );
};

const HeartButton = () => {
  return (
    <View style={{position: 'absolute', bottom: 6, right: 7, backgroundColor: '#00B074', padding: 7, borderRadius: 50}}>
      <HeartSVG width={16} height={16} />
    </View>
  );
};

const Info = () => {
  return (
    <View>
      <Text>The Willows</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <LocationSVG width={20} height={20} />
        <Text>3517 W. Gray St. Utica</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <BedSVG width={24} height={24} />
        <BathroomSVG width={24} height={24} />
        <SizeSVG width={24} height={24} />
      </View>
      <Text>$ 440/m</Text>
      <HeartButton />
    </View>
  );
};

export default function Card({}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Image />
        <Info />
      </View>
    </View>
  );
}
