import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './SmallCard.style';
interface CardProps {
  number: string;
  text: string;
  icon: any;
  iconBackgroundColor?: string;


}

const SmallCardComponent: React.FC<CardProps> = ({
  number,
  text,
  icon,
  iconBackgroundColor,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.numberStyle}>{number}</Text>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <View
        style={[styles.iconBackground, {backgroundColor: iconBackgroundColor}]}>
        <Image source={icon} style={styles.iconStyle} />
      </View>
    </View>
  );
};
export default SmallCardComponent;
