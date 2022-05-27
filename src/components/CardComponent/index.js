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

const Image = ({evaluation}) => {
  return (
    <View>
      <ImageSVG width={120} height={120} />
      <View style={styles.review}>
        <StarSVG width={15} height={15} />
        <Text style={styles.labelreview}>{evaluation}</Text>
      </View>
    </View>
  );
};

const HeartButton = () => {
  return (
    <View style={styles.like}>
      <HeartSVG width={16} height={16} />
    </View>
  );
};

const ListIcons = ({rooms, bathrooms, size}) => {
  const icons = [
    <BedSVG key={1} width={24} height={24} />,
    <Text key={2} style={styles.text1}>
      {rooms}
    </Text>,
    <BathroomSVG key={3} width={24} height={24} />,
    <Text key={4} style={styles.text1}>
      {bathrooms}
    </Text>,
    <SizeSVG key={5} width={24} height={24} />,
    <Text key={6} style={styles.text2}>
      {size} ft
    </Text>,
  ];

  return (
    <View style={styles.listiconcontainer}>{icons.map(item => item)}</View>
  );
};

const Info = ({data}) => {
  return (
    <View style={styles.infocontainer}>
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.adresscontainer}>
        <LocationSVG width={19} height={19} />
        <Text style={styles.marginadress}>{data.adress}</Text>
      </View>
      <ListIcons
        rooms={data.rooms}
        bathrooms={data.bathrooms}
        size={data.size}
      />
      <Text style={styles.cost}>$ {data.cost}/m</Text>
    </View>
  );
};

export default function Card({item, islast}) {
  return (
    <View style={{...styles.container, ...(islast ? styles.bottom : null)}}>
      <View style={styles.direction}>
        <Image evaluation={item.evaluation} />
        <Info data={item} />
      </View>
      <HeartButton />
    </View>
  );
}
