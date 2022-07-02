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
  background: {
    height: '100%',
    width: '100%',
  },
  empty: {
    width: 50,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  longArea: {
    width: 50,
    height: 50,
    alignItems: 'center',
    // backgroundColor: 'blue',
    justifyContent: 'center',
  },
  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    // elevation: 4,

    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: 'white',
  },
  second: {
    flex: 1,
    // paddingTop: 20,
    paddingHorizontal: 15,
  },
  headerFlat: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  rightone: {
    marginLeft: 10,
  },
  mainFlat: {
    paddingBottom: 10,
    paddingTop: 20,
    // backgroundColor: 'red',
  },
  texts: {
    color: 'black',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
  },
  detailImage: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  black: {borderWidth: 1, borderColor: 'black', borderRadius: 30},
  texts1: {
    color: 'black',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
  },
  images: {
    height: 250,
    // borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
    // backgroundColor: 'white',
  },
  description: {
    paddingTop: 10,
    // backgroundColor: 'white',
  },
  hash: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: '#FF4029',
  },
  descriptionText: {
    // fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
  },
  descriptionText1: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
  likesComments: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  textNumber: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
});
export default styles;
