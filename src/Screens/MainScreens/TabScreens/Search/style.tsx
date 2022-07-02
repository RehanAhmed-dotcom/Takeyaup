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
    // elevation: 4,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: 'white',
  },
  second: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    elevation: 2,
    height: 50,
    backgroundColor: '#FFECEA',
    borderRadius: 30,
  },
  input: {
    color: 'black',
    flex: 1,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: 'black',
  },
  flatView: {
    backgroundColor: '#FFECEA',
    marginTop: 10,
    // elevation: 4,
    borderRadius: 10,
    flex: 1,
    marginBottom: 10,
  },
  Text: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    color: 'white',
  },
  touch: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flat: {
    // paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',

    paddingTop: 10,
  },
  rightone: {
    marginLeft: 10,
  },
  small: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imge: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  text: {
    fontSize: 14,
    color: 'black',

    fontFamily: 'Nunito-Regular',
  },
});
export default styles;
