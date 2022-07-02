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
    paddingHorizontal: 15,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#FF4029',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginRight: 10,
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  mainText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    // fontWeight: 'bold',
  },
  absolute: {
    position: 'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    elevation: 4,
    zIndex: 2,
    right: 15,
    borderRadius: 30,
  },
  second: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  imageView: {
    height: 200,
    width: '100%',
    backgroundColor: '#FFECEA',
    elevation: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  round: {
    height: 40,
    width: 40,
    borderRadius: 20,
    elevation: 4,
    backgroundColor: '#FFECEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 100,
    borderRadius: 10,
  },
  roll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#FFECEA',
    borderRadius: 10,
    // paddingHorizontal: 15,
    height: 70,
    marginTop: 0,

    // elevation: 4,
  },
  right: {
    marginRight: 5,
  },
  flatOuterView: {
    backgroundColor: '#FFECEA',
    borderRadius: 10,
    padding: 15,
    elevation: 4,
    marginTop: 10,
  },
  flatInnerView: {
    height: 100,
    width: 90,
    marginRight: 15,
    // justifyContent: 'space-between',
    marginBottom: 15,
    borderRadius: 10,
  },
  img: {
    height: '50%',
    width: '50%',
    // marginRight: 5,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  modalButtons: {
    backgroundColor: '#FFECEA',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  flat: {
    width: wp(90),
    marginRight: 10,
    height: 200,
    // backgroundColor: 'blue',
  },
});
export default styles;
