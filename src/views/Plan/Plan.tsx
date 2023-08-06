import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/headers/Header';
import CustomHeaderCard from '../../components/card/CustomHeaderCard';
import styles from './Plan.style';
import PlanList from './PlanList/PlanList';
import {Checkbox} from 'react-native-paper';
import CustomButton from '../../components/button/CustomButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type RootStackParamList = {
  Plan: undefined;
  Screen1: undefined;
  Payment: undefined;
};
type Navigation = NavigationProp<RootStackParamList>;

const Plan: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation<Navigation>();

  return (
    <>
      <ScrollView>
      <Header title={["Kronik Hastalık Takibi", "Başlangıç Paketi"]} />
        <View style={{ padding: 10,flex:1}}>
          <CustomHeaderCard title="Başlangıç" />
          <View style={styles.textContainer}>
            <View style={styles.yearTextContainer}>
              <Text style={styles.yearText}>$15000.00 /year</Text>
            </View>
            <View style={styles.montTextContainer}>
              <Text style={styles.montText}>$12.50 /month</Text>
            </View>
          </View>
        </View>
        <View style={{padding: 10}}>
          <View style={styles.smallCard}>
            <Text style={styles.smalCardTitle}>Plan Özeti</Text>
            <Text style={styles.desc}>
              Pro account gives you freedom with uploading HD videos and can
              also meet all your business needs apasih kamu
            </Text>
          </View>
          <View style={{bottom: 120}}>
            <PlanList />
          </View>
          <View style={styles.termMainContainer}>
            <View style={styles.termContainer}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text
                style={{
                  color: '#6B7280',
                  fontSize: 14,
                  fontStyle: 'normal',
                  fontWeight: '600',
                }}>
                I agree to the company
                <Text
                  style={{
                    color: '#3CDBC0',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '600',
                  }}>
                  Term of Service
                </Text>
                and
                <Text
                  style={{
                    color: '#3CDBC0',
                    fontSize: 14,
                    fontStyle: 'normal',
                    fontWeight: '600',
                  }}>
                  Privacy Policy
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              text="Hemen Al "
              buttonStyle={{backgroundColor: '#002855', top: 5}}
              onPress={() => navigation.navigate('Payment')}
            />
            <CustomButton
              text="Hediye Et"
              buttonStyle={{
                borderColor: '#3CDBC0',
                borderWidth: 1,
                backgroundColor: '#fff',
                top: 15,
              }}
              textStyle={{color: '#3CDBC0'}}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Plan;
