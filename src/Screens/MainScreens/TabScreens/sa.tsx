import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  // Platform,
  FlatList,
  Image,
  Modal,
  TextInput,
  BackHandler,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import Styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import SplashScreen from 'react-native-splash-screen';
import {
  updateFcmToken,
  JobListAccordingToSkill,
  UpdateLocation,
  WorkerFilter,
} from '../../../../lib/api';

// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
// import messaging from '@react-native-firebase/messaging';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {logged, dist} from '../../../../redux/actions';
import Slider from '@react-native-community/slider';
import {WaveIndicator} from 'react-native-indicators';
import GetLocation from 'react-native-get-location';
import Arrow from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';
import {parse} from '@babel/core';
const Index = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState('');
  const [list, setList] = useState([]);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([
    {label: '1 star', value: '1'},
    {label: '2 star', value: '2'},
    {label: '3 star', value: '3'},
    {label: '4 star', value: '4'},
    {label: '5 star', value: '5'},
  ]);
  const [open1, setOpen1] = useState(false);
  const [radius, setRadius] = useState('');
  const [items1, setItems1] = useState([
    {label: '', value: ''},
    {label: '10', value: '10'},
    {label: '20', value: '20'},
    {label: '30', value: '30'},
  ]);
  const disptch = useDispatch();
  const [Categories, setCategories] = useState([]);
  const [experience, setExperience] = useState('');
  const {userData} = useSelector(({USER}) => USER);
  const {distance} = useSelector(({USER}) => USER);
  const [showModal, setShowModal] = useState(false);
  console.log('distance', distance);
  // const {bottom, top} = useSafeAreaInsets();
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  useEffect(() => {
    SplashScreen.hide();
    // getToken();
  }, []);
  const {bottom, top} = useSafeAreaInsets();
  const WorkFilterApi = () => {
    setShowModal(true);
    if (!experience && !slideStartingValue && !rating) {
      setShowFilterModal(false);
      setShowModal(false);
    } else {
      const data = new FormData();
      experience && data.append('experience', experience);
      slideStartingValue && data.append('radius', distance);
      rating && data.append('rating', rating);

      WorkerFilter({Auth: userData.token}, data).then(res => {
        if (res) {
          if (res.status == 'success') {
            // console.log('Filter Api Response', res);
            setCategories(res.data);
            setList(res.data);
            setShowFilterModal(false);
            setShowModal(false);
            GetLocation.getCurrentPosition({
              enableHighAccuracy: true,
              timeout: 15000,
            })
              .then(location => {
                // LocationUpdate({
                //   latitude: location.latitude,
                //   longitude: location.longitude,
                // });
              })
              .catch(error => {
                const {code, message} = error;
                // console.warn(code, message);
              });
          } else {
            setShowFilterModal(false);
            Alert.alert('Something went wrong');
            setShowModal(false);
          }
        } else {
          setShowModal(false);
          setShowFilterModal(false);
          Alert.alert('Something went wrong');
        }
      });
    }
  };
  console.log('list', list);
  const searchText = e => {
    let filteredName = [];
    // if (e) {
    filteredName = Categories.filter(item => {
      // console.log(item);
      return item.category_name.toLowerCase().includes(`${e.toLowerCase()}`);
      // item.location.toLowerCase().includes(`${e.toLowerCase()}`)
    });
    setList(filteredName);
    // filteredName = [];
    // }
  };
  const LocationUpdate = location => {
    UpdateLocation({
      Auth: userData.token,
      latitude: location.latitude,
      longitude: location.longitude,
    }).then(res => {
      if (res.status == 'success') {
        logged(res)(disptch);
      }
    });
  };
  useEffect(() => {}, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // WorkerHomeApi();
      WorkFilterApi();
    });
    return unsubscribe;
  }, [navigation, distance]);
  // const getToken = async () => {
  //   let fcmToken = await messaging().getToken();
  //   // console.log(('token', fcmToken));
  //   updateFcmToken({Auth: userData.token, fcm_token: fcmToken});
  //   messaging().onTokenRefresh(token => {
  //     updateFcmToken({Auth: userData.token, fcm_token: token}).then(
  //       response => {},
  //     );
  //   });
  // };

  const myModal = () => (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000088',
        }}>
        <WaveIndicator color="#5B77D0" size={150} />
      </View>
    </Modal>
  );
  // console.log('userData', userData);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [slideStartingValue, setslideStartingValue] = useState(distance);
  const [slideStartingCount, setslideStartingCount] = useState(10);
  const FilterModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showFilterModal}
      onRequestClose={() => setShowFilterModal(false)}>
      <ImageBackground
        source={require('../../../../Assets/bg.png')}
        style={{
          flex: 1,
          height: '45%',
          paddingTop: Platform.OS == 'ios' ? top - 10 : 0,
          paddingBottom: Platform.OS == 'ios' ? bottom : 0,
          backgroundColor: '#F4F4FA',
        }}>
        <View style={Styles.HeaderTopView}>
          <TouchableOpacity onPress={() => setShowFilterModal(false)}>
            <Arrow name="left" size={20} color="#fff" style={{left: 20}} />
          </TouchableOpacity>
          <Image
            source={require('../../../../Assets/LogoWhite.png')}
            style={Styles.smallLogo}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            alignItems: 'center',
          }}>
          <Text></Text>
          <Text style={Styles.BigText}>Filters</Text>
          <Image
            source={require('../../../../Assets/filter2.png')}
            style={{height: 20, width: 20}}
            resizeMode="contain"
          />
        </View>
        <ScrollView>
          <View style={Styles.InputsView}>
            <Text style={Styles.HeadinOnly}>Score</Text>
            <DropDownPicker
              open={open}
              value={rating}
              items={items}
              setOpen={setOpen}
              setValue={setRating}
              setItems={setItems}
              placeholder="Select Score"
              searchPlaceholderTextColor="lightgray"
              style={{
                marginTop: 10,
                marginBottom: open ? 200 : 10,
                borderWidth: 1,
                borderColor: '#15096F',
              }}
              arrowIconStyle={{tintColor: '#15096F'}}
            />

            <Text style={Styles.HeadinOnly}>Distance (radius)</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Slider
                style={{width: '90%', height: 40}}
                minimumValue={1}
                maximumValue={50}
                minimumTrackTintColor="#15096F"
                maximumTrackTintColor="#15096F"
                thumbTintColor="#15096F"
                value={slideStartingValue}
                // thumbImage={require('../../../../Assets/dp.png')

                // }

                // value={slideStartingCount}

                onSlidingStart={value => {
                  // console.log("value of slider", value)
                  setslideStartingValue(value);
                  dist(value)(disptch);
                  // setslideStartingCount(slideStartingValue + 0.5);
                }}
                onSlidingComplete={value => {
                  // console.log("value of slider", value)
                  setslideStartingValue(value);
                  dist(value)(disptch);
                  // setslideStartingCount(slideStartingValue + 0.5);
                }}
              />
              <Text>{parseInt(slideStartingValue)}</Text>
            </View>

            <Text style={Styles.HeadinOnly}>Experience</Text>

            <TextInput
              style={Styles.Input}
              placeholder="Enter Experience in years"
              value={experience}
              onChangeText={text => setExperience(text)}
              keyboardType={'number-pad'}
              maxLength={2}
            />
            <TouchableOpacity style={Styles.ModalBtn} onPress={WorkFilterApi}>
              <Image
                source={require('../../../../Assets/tick.png')}
                style={{height: 15, width: 15, top: 3, tintColor: 'white'}}
              />
              <Text style={Styles.ModalBtnTxt}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Styles.ModalBtn, {marginTop: 10}]}
              onPress={() => {
                setRating(''),
                  setRadius(''),
                  setExperience(''),
                  setslideStartingCount(1);
                setslideStartingValue(1);
                dist(10)(disptch);
                setShowFilterModal(false);
              }}>
              <Text style={Styles.ModalBtnTxt}>Remove Filters</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </Modal>
  );
  // console.log('distance of slider', slideStartingValue);
  const WorkerHomeApi = () => {
    setShowModal(true);
    JobListAccordingToSkill({Auth: userData.token}).then(res => {
      // console.log('response of Job According to skills ', res);
      if (res) {
        if (res.status == 'success') {
          setCategories(res.WorkerRelatedJobs);
          setShowModal(false);
        } else {
          setShowModal(false);
          Alert.alert('Something went wrong please try again !');
        }
      } else {
        setShowModal(false);
        Alert.alert('Something went wrong please try again !');
      }
    });
  };
  const SwipableRender = ({item}) => (
    <TouchableOpacity
      style={[Styles.ActiveCardView, {backgroundColor: '#fff'}]}
      onPress={() => navigation.navigate('WorkerJobDetails', item)}>
      <View style={Styles.BlueDot}></View>
      <Text style={Styles.CardName}>
        {item.category_name} in {item.location}
      </Text>
      <Text></Text>
    </TouchableOpacity>
  );
  const Wrapper = Platform.OS == 'ios' ? KeyboardAvoidingView : View;
  return (
    <>
      <ImageBackground
        source={require('../../../../Assets/bg.png')}
        style={Styles.bg}>
        {/* <View> */}
        <View style={Styles.HeaderTopView}>
          <Text></Text>
          <Image
            source={require('../../../../Assets/LogoWhite.png')}
            style={[
              Styles.smallLogo,
              {top: Platform.OS == 'ios' ? heightPercentageToDP(5) : 0},
            ]}
            resizeMode="contain"
          />
        </View>

        <Text style={Styles.BigText}>Search Offers</Text>
        <TextInput
          style={{
            height: hp(8),
            width: wp(85),
            alignSelf: 'center',
            borderRadius: 10,
            color: 'white',
            backgroundColor: '#5B77D0',
            paddingHorizontal: 12,
            marginTop: 10,
            borderWidth: 1,
            borderColor: '#fff',
          }}
          placeholder="Search"
          value={search}
          onChangeText={text => {
            setSearch(text);
            searchText(text);
          }}
          placeholderTextColor="#98A9E1"
        />

        <Wrapper
          behavior="padding"
          style={{
            marginTop: heightPercentageToDP(
              Platform.OS === 'ios'
                ? keyboardStatus == 'Keyboard Shown'
                  ? 5
                  : 25
                : keyboardStatus == 'Keyboard Shown'
                ? 5
                : 20,
            ),
            flex: 1,
            backgroundColor: '#F4F4FA',
          }}>
          <TouchableOpacity onPress={() => setShowFilterModal(true)}>
            <Image
              source={require('../../../../Assets/filter.png')}
              style={{
                height: 25,
                width: 25,
                alignSelf: 'flex-end',
                right: 20,
                bottom: 30,
                tintColor: '#15096F',
              }}
            />
          </TouchableOpacity>
          {Categories.length > 0 ? (
            <FlatList
              data={list}
              renderItem={SwipableRender}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text style={styles.Empty}>
              No job related to your categories found {'\n'} please try again
              latter
            </Text>
          )}
        </Wrapper>
        {/* </View> */}
        {myModal()}
        {FilterModal()}
      </ImageBackground>
    </>
  );
};

export default Index;
