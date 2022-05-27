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
      <View style={styles.review}>
        <StarSVG width={15} height={15} />
        <Text style={styles.labelreview}>4.7</Text>
      </View>
    </View>
  );
};

const HeartButton = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 6,
        right: 10,
        backgroundColor: '#00B074',
        padding: 7,
        borderRadius: 50,
      }}>
      <HeartSVG width={16} height={16} />
    </View>
  );
};

const ListIcons = ({rooms, bathrooms, size}) => {
  const icons = [
    <BedSVG width={24} height={24} />,
    <Text style={styles.text1}>{rooms}</Text>,
    <BathroomSVG width={24} height={24} />,
    <Text style={styles.text1}>{bathrooms}</Text>,
    <SizeSVG width={24} height={24} />,
    <Text style={styles.text2}>{size} ft</Text>,
  ];

  return (
    <View style={styles.listiconcontainer}>{icons.map(item => item)}</View>
  );
};

const Info = () => {
  return (
    <View style={styles.infocontainer}>
      <Text style={styles.title}>The Willows</Text>
      <View style={styles.adresscontainer}>
        <LocationSVG width={19} height={19} />
        <Text style={styles.marginadress}>3517 W. Gray St. Utica</Text>
      </View>
      <ListIcons rooms={3} bathrooms={2} size={230} />
      <Text style={styles.cost}>$ 440/m</Text>
    </View>
  );
};

export default function Card({}) {
  return (
    <View style={styles.container}>
      <View style={styles.direction}>
        <Image />
        <Info />
      </View>
      <HeartButton />
    </View>
  );
}
