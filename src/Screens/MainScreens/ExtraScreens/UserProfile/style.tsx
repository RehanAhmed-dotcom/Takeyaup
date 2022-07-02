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
  background: {
    height: '100%',
    width: '100%',
  },
  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#FF4029',
  },

  second: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 20,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    // fontWeight: 'bold',
  },
  info: {
    backgroundColor: '#FFECEA',
    marginTop: 40,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 2,
    // height: hp(38),
    flex: 1,
  },
  image: {
    height: '98%',
    width: '98%',
    borderRadius: 50,
  },
  imageView: {
    height: 70,
    width: 70,
    // borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 35,
    bottom: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  from: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 20,
  },
  city: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    marginLeft: 5,
  },
  details: {
    flexDirection: 'row',
    marginTop: 20,
    bottom: 20,
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor: 'red',
  },
  center: {
    alignItems: 'center',
  },
  bold: {
    // fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  regular: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
  description: {
    marginTop: 20,
    alignItems: 'center',
    fontFamily: 'Nunito-Regular',
    bottom: 30,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    bottom: 15,
    marginBottom: 10,
  },
  follow: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  regular1: {
    fontFamily: 'Nunito-SemiBold',
  },
  message: {
    backgroundColor: '#FF4029',
    width: 100,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',

    justifyContent: 'center',
    marginLeft: 15,
  },
  messageText: {
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
  flatOuterView: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#FFECEA',
    padding: 15,
    flex: 1.3,
    marginBottom: 10,
    // justifyContent: 'space-between',
    elevation: 4,
  },
  flatInnerView: {
    height: 100,
    width: '31%',
    marginRight: 10,
    // justifyContent: 'space-between',
    marginBottom: 10,
    // backgroundColor: 'red',
    // borderRadius: 10,
  },
  img: {
    height: '100%',
    width: '100%',
    // marginRight: 5,
    borderRadius: 10,
  },
});
export default styles;
