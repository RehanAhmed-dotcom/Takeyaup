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
    // justifyContent: 'space-between',
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
  description: {
    backgroundColor: '#FFECEA',
    // height: 200,
    borderRadius: 10,
    elevation: 4,
    padding: 10,
  },
  video: {
    position: 'absolute',
    width: 100,
    height: 100,
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
  },
  videoSection: {
    width: '100%',
    height: '25%',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#00000088',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  hash: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: '#FF4029',
  },
  line: {borderWidth: 2, borderRadius: 10, borderColor: 'white', width: 40},
  time: {color: 'white', fontFamily: 'Nunito-Regular', fontSize: 8},
  text: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
  flatOuterView: {
    marginTop: 20,
  },
  flatInnerView: {
    height: 100,
    width: 100,
    marginRight: 15,
    // justifyContent: 'space-between',
    marginBottom: 15,
    borderRadius: 10,
  },
  img: {
    height: '100%',
    width: '100%',
    // marginRight: 5,
    borderRadius: 5,
  },
  likesComments: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts: {
    marginLeft: 5,
    fontFamily: 'Nunito-Regular',
  },
});
export default styles;
