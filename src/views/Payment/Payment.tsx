import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../components/headers/Header';
import CustomHeaderCard from '../../components/card/CustomHeaderCard';
import styles from './Payment.style';
import Card from '../../assets/svg/card.svg';
import MasterCard from '../../assets/svg/Mastercard.svg';
import Error from './Error/Error';
import CustomButton from '../../components/button/CustomButton';

const Payment: React.FC = () => {
  
  return (
    <ScrollView>
      <Header title="Payment" />
      <View style={{padding: 10, flex: 1}}>
        <CustomHeaderCard title="Starter" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Kronik Hastalık</Text>
          <Text style={styles.text}>Takip</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>

          <View style={styles.montTextContainer}>
            <Text style={styles.montText}>$12.50 /month</Text>
          </View>
        </View>
        <View style={{bottom: 180}}>
          <Text
            style={{
              margin: 5,
              color: '#002855',
              fontSize: 14,
              fontWeight: '600',
            }}>
            Credit Card Details
          </Text>
          <View style={styles.cardContainer}>
            <View style={styles.iconTextContainer}>
              <Card width={24} height={24} />
              <Text style={styles.cardText}>0000 0000 0000 0000</Text>
            </View>
            <View style={styles.masterCardIcon}>
              <MasterCard width={24} height={24} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              top: 10,
              justifyContent: 'space-between',
            }}>
            <View style={styles.excardContainer}>
              <Text style={styles.cardText}>Expiation date</Text>
            </View>
            <View style={styles.excardContainer}>
              <Text style={styles.cardText}>CVV</Text>
            </View>
          </View>
          <View style={styles.holderCard}>
            <Text style={styles.cardText}>Cardholder name</Text>
          </View>
        </View>
        <View style={{bottom: 130}}>
          <Error />
        </View>
        <CustomButton
          text="Buy"
          buttonStyle={{backgroundColor: '#002855', bottom: 90}}
        />
      </View>
    </ScrollView>
  );
};

export default Payment;
