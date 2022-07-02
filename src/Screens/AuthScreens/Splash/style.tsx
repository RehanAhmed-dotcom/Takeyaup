import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FF4029',
  },
  upperView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flex: 1,
  },
  img: {
    height: 200,
    width: 200,
  },
  second: {
    flex: 1.5,
    paddingVertical: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  secondImg: {
    height: 150,
    width: 150,
  },
  text: {color: 'white', fontSize: 24, fontFamily: 'Nunito-SemiBold'},
  text1: {color: '#FF4029', fontSize: 18, fontFamily: 'Nunito-SemiBold'},
  center: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFECEA',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: '90%',
  },
});
export default styles;
