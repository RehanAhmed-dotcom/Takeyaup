import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstView: {
    height: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondView: {
    flex: 2.5,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  imageView: {
    height: 80,
    width: 80,
    borderRadius: 50,
    // backgroundColor: 'red',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  signUpText: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Nunito-Bold',
  },
  bottom: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  inputView: {
    backgroundColor: 'white',
    elevation: 4,
    height: 50,
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
  },
  inputView1: {
    backgroundColor: '#FFECEA',
    elevation: 4,
    // height: 150,
    width: '90%',
    marginTop: 20,
    borderRadius: 30,
  },
  placeholder: {
    marginLeft: 15,
    fontSize: 16,
    color: 'black',
    height: '100%',
    fontFamily: 'Nunito-Regular',
  },
  smallImg: {width: 10, height: 10},
  flex: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    // backgroundColor: 'red',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  red: {color: 'black', fontSize: 16, fontFamily: 'Nunito-Bold'},
  agreeText: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'Nunito-Regular',
    color: '#FF4029',
  },
  seprate: {
    fontFamily: 'Nunito-Bold',
  },
  loginButton: {
    height: 50,
    backgroundColor: 'black',
    width: '90%',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  white: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
  },
  already: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Nunito-Regular',
  },
  signUpView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  empty: {
    height: 10,
  },
});
export default styles;
