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
  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    // elevation: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: 'white',
  },
  firstText: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    marginLeft: 10,
    color: 'black',
  },
  secondView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    marginTop: 100,
  },
  enter: {
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    color: 'black',
  },
  empty: {
    height: 50,
  },
  inputView: {
    height: 50,
    elevation: 5,
    // color: 'black',
    borderRadius: 30,
    marginTop: 20,
    backgroundColor: 'white',
  },
  inputs: {
    paddingLeft: 15,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    color: 'black',
    height: '100%',
  },
  button: {
    backgroundColor: 'black',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  update: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
});
export default styles;
