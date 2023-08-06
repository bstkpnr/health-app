import React from 'react';
import {View, Text} from 'react-native';
import styles from './Error.style';

const Error = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.alertIconContainer}>
        <Text style={styles.alertText}>!</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Payment failed</Text>
        <Text style={styles.subtitle}>
          Unfortunately payment was rejected. Use different payment method
        </Text>
      </View>
    </View>
  );
};

export default Error;
