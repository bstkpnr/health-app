import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/headers/Header';
import {data} from '../../data/data';
import styles from './HealthPlans.style';
import {useNavigation} from '@react-navigation/native';

import {NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Plan: undefined;
  Screen1: undefined;
  PlanDetails: undefined;
};

type Navigation = NavigationProp<RootStackParamList>;

interface DataItem {
  id: number;
  icon: any;
  name: string;
  arrowsIcon: any;
  route: string;
}

const RenderItem: React.FC<{item: DataItem}> = ({item}) => {
  const navigation = useNavigation<Navigation>();
  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <Image source={item.icon} width={24} height={24} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(item.route as keyof RootStackParamList)
        }>
        <View style={styles.arrowContainer}>
          <Image source={item.arrowsIcon} width={24} height={24} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const HealthPlan: React.FC = () => {
  return (
    <>
      <Header title="Sağlık Planları" />
      <FlatList
        data={data}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

export default HealthPlan;
