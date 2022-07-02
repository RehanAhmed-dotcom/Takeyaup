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
    elevation: 4,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#FF4029',
  },
  comment: {
    marginLeft: 10,
    color: 'white',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
  },
  secondView: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#FFECEA',
    elevation: 3,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  input: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    flex: 1,
  },
  flatView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#D5D5D5',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  rightone: {
    marginLeft: 10,
    //   flexDirection: 'row',
    //   alignItems: 'center',
  },
  name: {
    // fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    //   marginLeft:10,
  },
  message: {
    // fontWeight: 'normal',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    // left: 10,
  },
  time: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
  },
});
export default styles;
