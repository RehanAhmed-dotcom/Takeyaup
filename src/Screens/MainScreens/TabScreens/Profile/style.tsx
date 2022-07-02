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
    color: 'white',
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    // fontWeight: 'bold',
  },
  bold: {
    // fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
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
  second: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  img: {
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: 'white',
  },
  showImg: {
    height: '100%',
    width: '100%',
    borderRadius: 75,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    backgroundColor: '#FFECEA',
    height: 50,
    // alignItems: 'center',
    elevation: 4,
    justifyContent: 'center',
    marginLeft: 20,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  details: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFECEA',
    elevation: 4,
    marginTop: 20,
  },
  texts: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
  logout: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  data: {
    alignItems: 'center',
  },
  flat: {marginTop: 20},
  flatImg: {
    height: 100,
    width: 100,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  bottom: {
    marginBottom: 10,
  },
});
export default styles;
