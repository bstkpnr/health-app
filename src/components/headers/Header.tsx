import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import Group from '../../assets/svg/Group.svg';
import styles from './Header.style';
import { useNavigation } from '@react-navigation/native';
interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
  const navigation = useNavigation();
  const titleElements = Array.isArray(title) ? title : [title];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.iconContainer}>

        <Group />
      </View>
        </TouchableOpacity>
        {titleElements.map((titleElement, index) => (
        <Text key={index} style={[styles.text, {flexWrap: 'wrap'}]} numberOfLines={2}>
          {titleElement}
        </Text>
      ))}
    </View>
  );
};

export default Header;
