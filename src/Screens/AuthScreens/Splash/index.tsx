import React from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './style';

const Splash = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.upperView}>
        <Image
          source={require('../../../Images/logo.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.second}>
        <View style={styles.center}>
          <Text style={styles.text}>Welcome to Travelers</Text>
          <Text style={styles.text}>United</Text>
        </View>
        <Image
          source={require('../../../Images/travel.png')}
          style={styles.secondImg}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}>
          <Text style={styles.text1}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Splash;
