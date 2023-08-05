import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './CustomHeaderCard.style'
import Ellipse from '../../assets/svg/Ellipse.svg'
interface Props {
    title: string;
  }
const CustomHeaderCard: React.FC<Props> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.orangeCircle}>
      <Ellipse />
      </View>
      <Text style={styles.startText}>{title}</Text>
    
    </View>
  );
};

export default CustomHeaderCard;