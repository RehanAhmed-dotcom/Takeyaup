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
    elevation: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#FF4029',
  },
  leftOne: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
  },
  secondView: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  inputView: {
    height: 50,
    backgroundColor: '#FFECEA',
    borderRadius: 30,
    elevation: 4,
    marginBottom: 20,
  },
  input: {
    color: 'black',
    paddingLeft: 20,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
  },
  button: {
    backgroundColor: '#FFECEA',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    elevation: 4,
    marginTop: 20,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    color: '#FF4029',
  },
});
export default styles;
