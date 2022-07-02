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
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 4,
    backgroundColor: '#FF4029',
  },
  image: {
    height: 35,
    width: 35,
    marginLeft: 20,
    // borderRadius: 15,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  round: {
    //
  },
  white: {
    marginLeft: 10,
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
  },
  restView: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  textInput: {
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 10,
    backgroundColor: '#FFECEA',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    flex: 1,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
  },
  //
});
export default styles;
