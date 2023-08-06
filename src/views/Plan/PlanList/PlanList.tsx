import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import TextList from '../../../components/textList/TextList';
import styles from './PlanList.style';

const PlanList: React.FC = () => {
    
  const [showContent, setShowContent] = useState(false);

  const data = [
    {
      name: 'IoT Cihaz',
      value: 'Tansiyon Aleti Omron',
    },
    {
      name: '7/24 Danışma Hattı',
      icon: require('../../../assets/img/success-tick.png'),
    },
    {
      name: 'Online Uzman Dr. Görüşme',
      value: '6',
    },
    {
      name: 'Transfer hizmeti',
      value: '2',
    },
    {
      name: 'Ambulans Hizmeti 7/24',
      value: '32 Parametre',
    },
    {
      name: 'Anlaşmalı Hastane İndirimi',
      value: '%20',
    },
    {
      name: 'Evde Sağlık Hizmetlerinde İndirim',
      value: '%20',
    },
  ];
  // const toggleContent = () => {
  //     setShowContent(!showContent);
  //   };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{padding: 10}}>
        <Text style={{fontSize: 16, color: '#002855', fontWeight: '600'}}>
          Plan İçeriği
        </Text>
      </TouchableOpacity>
      <ScrollView>
        {data.map((item, index) => (
          <View key={index}>
            <TextList name={item.name} value={item.value} icon={item.icon} />
            {index < data.length - 1 && <View style={styles.line} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PlanList;
