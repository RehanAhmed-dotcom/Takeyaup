import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFECEA',
  },
  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#FF4029',
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  flat: {
    marginHorizontal: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    // backgroundColor: '#FFECEA',
    alignItems: 'center',
    height: 70,
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 5,
    elevation: 2,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    // color: 'grey',
  },
  text3: {fontSize: 12, fontFamily: 'Nunito-Regular'},
  text1: {
    // color: 'grey',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    // fontWeight: 'bold',
  },
  rightone: {
    marginLeft: 10,
  },
  not: {
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    color: 'white',
  },
  leftone: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
