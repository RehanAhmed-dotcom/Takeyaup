import React, {useState, useRef, useEffect} from 'react';
import {useScrollToTop} from '@react-navigation/native';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Modal,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {useSelector} from 'react-redux';

import {
  showPosts,
  postLike,
  open,
  acceptedAll,
  PostLikes,
  completedAll,
  homeApi,
  updateToken,
  rej,
  acc,
} from '../../../../lib/api';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/AntDesign';
import styles from './style';
import SenderCount from '../../../../Components/SenderCount';
import {TouchableOpacity as Touch} from 'react-native-gesture-handler';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
// import messaging from '@react-native-firebase/messaging';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
const Home = ({navigation}) => {
  const flatListRef = React.useRef();

  const toTop = () => {
    // use current
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showfilter, setShowFilter] = useState(false);
  const [bet, setBet] = useState('All Bets');
  const [selected, setSelected] = useState('Open');
  const [sea, setSea] = useState('');
  const [Id, setId] = useState({});
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [dob, setDob] = useState('');
  const [openarr, setOpenarr] = useState([]);
  const [openarrSearch, setOpenarrSearch] = useState([]);
  const [change, setChange] = useState(false);
  const [accepte, setAccepte] = useState([]);
  const [accepteSearch, setAccepteSearch] = useState([]);
  const [complete, setComplete] = useState([]);
  const [completeSearch, setCompleteSearch] = useState([]);
  const [bet1, setBet1] = useState([]);
  const [home, setHome] = useState([]);
  const [homeSearch, setHomeSearch] = useState([]);
  const [imoge, setImoge] = useState('');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  // console.log('open', openarrSearch);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  // console.log('open', openarr);
  const handleConfirm = date => {
    // console.warn("A date has been picked: ", date);
    setDate(moment(date).format('YYYY-MM-DD'));
    setDob(moment(date).format('YYYY-MM-DD'));
    hideDatePicker();
  };
  console.log('data', completeSearch[0]);
  const render = ({item}) => (
    <>
      <View
        style={{
          flexDirection: 'row',
          // height: 150,

          height: hp(18),
          marginTop: 10,
          // backgroundColor: 'red',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {selected == 'Completed' ? (
          <>
            <TouchableOpacity
              onPress={() => {
                PostLikes({
                  Auth: userData.token,
                  betid: item.id,
                  userid: item.sender.id,
                }).then(res => {
                  setChange(!change);
                  // console.log('res', res);
                  // if (res.is_like == 'true') {
                  //   // setCount(count + 1);
                  //
                  // }
                });
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: 70,
                // borderRadius: 50,
                backgroundColor:
                  item.winner_id == item.sender.id ? 'green' : 'red',
              }}>
              <Image
                source={
                  item?.sender?.image
                    ? {uri: item.sender.image}
                    : require('../../../../Images/place.jpg')
                }
                style={{width: 50, height: 50, borderRadius: 50}}
              />
              {!item?.sender?.image && (
                <View
                  style={{
                    position: 'absolute',
                    width: 70,
                    bottom: 60,
                    height: 70,
                    // backgroundColor: 'blue',
                    zIndex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item?.sender?.username.charAt(0)}</Text>
                </View>
              )}
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image
                  source={require('../../../../Images/Capture.png')}
                  style={{width: 20, height: 20}}
                />
                <Text style={{marginLeft: 5}}>{item.like_count_sender}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectCategory', {item})}
              style={{
                // backgroundColor: 'red',
                width: '50%',
                borderBottomColor: 'black',
                // borderBottomWidth: 1,
                paddingBottom: 5,
                height: '100%',
              }}>
              <View style={{height: hp(9)}}>
                {/* <Text>
                  slkdfjslkjdflksdjflkjsdklfjskldjflksjfkjsdlkfjsdlkjfksdjlkfjdslkfjsdlkjflksdjflkjsdlkfjsdklfjksldjlksdjfkljskldjfa;sdjflaskjflkjlkdjflksjfljaskfjlksjdflkjsadkf
                </Text> */}
                <Text>{item?.sender_bet}</Text>
              </View>
              <View style={{height: hp(9)}}>
                {/* <Text>
                  slkdfjsldkfjlskdjflksjflksdjfkljsdkfjskjfskldjfksdjfkjfkskdfjskdjfksdjflkdsjflkjskfjskljfksjfkjsdflkdsjf;ksdjflsdjfklsjlkfjdslkfjskdjfksdjflsdfjsdlfksjlfkjsdlfkjsdlfjskldjflsdjflkdsjflksjdfks;fjsdkfjsldkfjsdlkfjlsajfljalfjalsdjfjdslkfjalkfjslkfjsalkdjflsakdjf
                </Text> */}
                <Text style={{marginTop: 10}}>Stakes: {item.loser_task}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                PostLikes({
                  Auth: userData.token,
                  betid: item.id,
                  userid: item.receiver.id,
                }).then(res => {
                  setChange(!change);
                  // console.log('res', res);
                  // if (res.is_like == 'true') {
                  //   // setCount(count + 1);
                  //
                  // }
                });
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: 70,
                // borderRadius: 50,
                backgroundColor:
                  item.winner_id == item.receiver.id ? 'green' : 'red',
              }}>
              <Image
                source={
                  item?.receiver?.image
                    ? {uri: item.receiver.image}
                    : require('../../../../Images/place.jpg')
                }
                style={{width: 50, height: 50, borderRadius: 50}}
              />
              {!item?.receiver?.image && (
                <View
                  style={{
                    position: 'absolute',
                    width: 70,
                    bottom: 60,
                    height: 70,
                    // backgroundColor: 'red',
                    zIndex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item.receiver.username.charAt(0)}</Text>
                </View>
              )}
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image
                  source={require('../../../../Images/Capture.png')}
                  style={{width: 20, height: 20}}
                />
                <Text style={{marginLeft: 5}}>{item.like_count_receiver}</Text>
              </View>
            </TouchableOpacity>
          </>
        ) : selected == 'Accepted' ? (
          <>
            <TouchableOpacity
              onPress={() => {
                PostLikes({
                  Auth: userData.token,
                  betid: item.id,
                  userid: item.sender.id,
                }).then(res => {
                  setChange(!change);
                  // console.log('res', res);
                  // if (res.is_like == 'true') {
                  //   // setCount(count + 1);
                  //
                  // }
                });
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 70,
                width: 70,
                borderRadius: 50,
                // backgroundColor: 'pink',
              }}>
              <Image
                source={
                  item?.sender?.image
                    ? {uri: item?.sender?.image}
                    : require('../../../../Images/place.jpg')
                }
                style={{width: 50, height: 50, borderRadius: 50}}
              />
              {!item?.sender?.image && (
                <View
                  style={{
                    position: 'absolute',
                    width: 70,
                    bottom: 20,
                    height: 70,
                    // backgroundColor: 'red',
                    zIndex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item?.sender?.username.charAt(0)}</Text>
                </View>
              )}
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image
                  source={require('../../../../Images/Capture.png')}
                  style={{width: 20, height: 20}}
                />
                <Text style={{marginLeft: 5}}>{item?.like_count_sender}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chat', {item});
              }}
              style={{
                // backgroundColor: 'red',
                width: '50%',
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                justifyContent: 'center',
                paddingBottom: 5,
                height: '100%',
              }}>
              <Text>{item.sender_bet}</Text>
              <Text style={{marginTop: 10}}>Stakes: {item.loser_task}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                PostLikes({
                  Auth: userData.token,
                  betid: item.id,
                  userid: item.receiver.id,
                }).then(res => {
                  setChange(!change);
                  // console.log('res', res);
                  // if (res.is_like == 'true') {
                  //   // setCount(count + 1);
                  //
                  // }
                });
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 70,
                width: 70,
                borderRadius: 50,
                // backgroundColor: 'pink',
              }}>
              <Image
                source={
                  item?.receiver?.image
                    ? {uri: item?.receiver?.image}
                    : require('../../../../Images/place.jpg')
                }
                style={{width: 50, height: 50, borderRadius: 50}}
              />
              {!item?.receiver?.image && (
                <View
                  style={{
                    position: 'absolute',
                    width: 70,
                    bottom: 20,
                    height: 70,
                    // backgroundColor: 'red',
                    zIndex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item?.receiver?.username.charAt(0)}</Text>
                </View>
              )}
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Image
                  source={require('../../../../Images/Capture.png')}
                  style={{width: 20, height: 20}}
                />
                <Text style={{marginLeft: 5}}>{item?.like_count_receiver}</Text>
              </View>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 70,
                width: 70,
                borderRadius: 50,
                backgroundColor: 'pink',
              }}>
              {item.sender.image ? (
                <Image
                  source={{uri: item.sender.image}}
                  style={{width: 70, height: 70, borderRadius: 50}}
                />
              ) : (
                <Text>{item?.sender?.username.charAt(0)}</Text>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chats', {item});
              }}
              style={{
                // backgroundColor: 'red',
                width: '50%',
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                paddingBottom: 5,
                height: '100%',
              }}>
              <View style={{height: hp(9)}}>
                <Text>{item.sender_bet}</Text>
              </View>
              <View style={{height: hp(9)}}>
                <Text style={{marginTop: 10}}>Stakes: {item.loser_task}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (item.sender.id != userData.userdata.id) {
                  setId(item);
                  setModalVisible(!modalVisible);
                }
                // acc({Auth: userData.token, bet_id: item.id})
                //   .then(res => {
                //     // console.log('res', res);
                //     setChange(!change);
                //   })
                //   .catch(err => {
                //     // console.log('err', err);
                //   });
              }}
              style={{
                width: 70,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'blue',
                height: 70,
              }}>
              <Image
                source={require('../../../../Images/handShake.png')}
                style={{height: 70, width: 70}}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
  const myModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '50%',
            backgroundColor: 'white',
            borderWidth: 5,
            paddingHorizontal: 10,
            borderColor: 'black',
            width: '90%',
          }}>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>
              Are you sure that you want to accept this bet?
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text>{Id.sender_bet}</Text>

            <Text style={{marginTop: 30}}>Stakes: {Id.loser_task}</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 50,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                rej({Auth: userData.token, bet_id: Id.id})
                  .then(res => {
                    // console.log('res', res);
                    setChange(!change);
                  })
                  .catch(err => {
                    console.log('err', err);
                  });
                setModalVisible(!modalVisible);
              }}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../../../Images/cross.png')}
                style={{height: 50, width: 50}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                acc({Auth: userData.token, bet_id: Id.id})
                  .then(res => {
                    // console.log('res', res);
                    setModalVisible(!modalVisible);
                    setChange(!change);
                  })
                  .catch(err => {
                    // console.log('err', err);
                    setModalVisible(!modalVisible);
                  });
              }}
              style={{marginLeft: 30}}>
              <Image
                source={require('../../../../Images/tick.png')}
                style={{height: 60, width: 60}}
              />
            </TouchableOpacity>
          </View>
          {/* <Image
            source={{uri: imoge}}
            style={{height: '100%', width: '100%'}}
          /> */}
        </View>
      </View>
    </Modal>
  );
  // console.log('bet', bet);

  const {userData} = useSelector(({USER}) => USER);
  // console.log('userData', userData);
  // const arr = ['1', '2', '3'];
  // console.log('arr', arr.reverse());
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // const data = new FormData();
      // {
      //   bet1.length &&
      //     bet1.forEach(element => {
      //       data.append('event_category[]', element);
      //     });
      // }
      // homeApi({Auth: userData.token}, data).then(res => {
      //   console.log('res of home', JSON.stringify(res));
      //   setHome(res.bets.reverse());
      //   setHomeSearch(res.bets.reverse());
      // });
      open({Auth: userData.token}).then(res => {
        // console.log('res of open', JSON.stringify(res));
        setOpenarr(res.open_bets);
        setOpenarrSearch(res.open_bets);
      });
      acceptedAll({Auth: userData.token}).then(res => {
        // console.log('res of accepted', JSON.stringify(res));
        setAccepte(res.bets);
        setAccepteSearch(res.bets);
      });

      completedAll({Auth: userData.token}).then(res => {
        // console.log('res of completed', JSON.stringify(res));
        setComplete(res.bets);
        setCompleteSearch(res.bets);
      });
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    // const data = new FormData();
    // {
    //   bet1.length &&
    //     bet1.forEach(element => {
    //       data.append('event_category[]', element);
    //     });
    // }
    // homeApi({Auth: userData.token}, bet1.length && data).then(res => {
    //   // console.log('res of home', JSON.stringify(res));
    //   setHome(res.bets.reverse());
    //   setHomeSearch(res.bets.reverse());
    // });
    open({Auth: userData.token}).then(res => {
      // console.log('res of open', JSON.stringify(res));
      setOpenarr(res.open_bets);
      setOpenarrSearch(res.open_bets);
    });
    acceptedAll({Auth: userData.token}).then(res => {
      // console.log('res of accepted', JSON.stringify(res));
      setAccepte(res.bets);
      setAccepteSearch(res.bets);
    });

    completedAll({Auth: userData.token}).then(res => {
      // console.log('res of completed', JSON.stringify(res));
      setComplete(res.bets);
      setCompleteSearch(res.bets);
    });
  }, [showfilter, change]);

  const searchTextOpen = e => {
    // console.log('i came here');
    let filteredName = [];
    // if (e) {
    filteredName = openarr.filter(item => {
      // console.log('item in home', item);
      return (
        item?.loser_task?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender_bet?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender?.username.toLowerCase().includes(`${e.toLowerCase()}`)
      );

      // item.location.toLowerCase().includes(`${e.toLowerCase()}`)
    });
    setOpenarrSearch(filteredName);
    // filteredName = [];
    // }
  };
  const searchTextAccepted = e => {
    let filteredName = [];
    // if (e) {
    filteredName = accepte.filter(item => {
      // console.log('item in home', item);
      return (
        item?.loser_task?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender_bet?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender?.username.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.receiver?.username.toLowerCase().includes(`${e.toLowerCase()}`)
      );

      // item.location.toLowerCase().includes(`${e.toLowerCase()}`)
    });
    setAccepteSearch(filteredName);
    // filteredName = [];
    // }
  };
  const searchTextCompleted = e => {
    let filteredName = [];
    // if (e) {
    filteredName = complete.filter(item => {
      // console.log('item in home', item);
      return (
        item?.loser_task?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender_bet?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender?.username.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.receiver?.username.toLowerCase().includes(`${e.toLowerCase()}`)
      );

      // item.location.toLowerCase().includes(`${e.toLowerCase()}`)
    });
    setCompleteSearch(filteredName);
    // filteredName = [];
    // }
  };
  return (
    <SafeAreaView style={styles.main}>
      {/* <ImageBackground
      #50D240
        resizeMode="cover"
        source={require('../../../../Images/background.png')}
        style={styles.background}> */}
      <View style={styles.header}>
        {showSearch && (
          <View
            style={{
              height: 50,
              width: '100%',
              position: 'absolute',
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 5,
              backgroundColor: 'white',
              zIndex: 3,
              flexDirection: 'row',
              left: 15,
              alignItems: 'center',
            }}>
            <Icon
              onPress={() => setShowSearch(false)}
              name="search"
              size={25}
              color={'black'}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={'grey'}
              style={{width: '80%', color: 'black'}}
              value={sea}
              onChangeText={text => {
                setSea(text);
                selected == 'Open'
                  ? searchTextOpen(text)
                  : selected == 'Accepted'
                  ? searchTextAccepted(text)
                  : searchTextCompleted(text);
              }}
            />
          </View>
        )}

        <View style={styles.empty}>
          <Icon
            onPress={() => setShowSearch(true)}
            name="search"
            size={25}
            color={'black'}
          />
        </View>
        {/* <Icon1
          name="arrow-up"
          onPress={() => toTop()}
          size={20}
          color="#50D240"
        /> */}
        <TouchableOpacity onPress={() => toTop()}>
          <Image
            source={require('../../../../Images/takeup.png')}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Setting')}
          style={styles.longArea}>
          <Icon4 name="setting" size={20} />
          {/* <Icon3 name="filter" size={25} color={'#50D240'} /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.second}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {['Open', 'Accepted', 'Completed'].map(item => (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={{
                paddingBottom: 5,
                width: 80,
                alignItems: 'center',
                // backgroundColor: 'red',
                borderBottomWidth: selected == item ? 1 : 0,
                borderBottomColor: 'black',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: selected == item ? 'black' : 'grey',
                }}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <FlatList
          data={
            selected == 'Completed'
              ? completeSearch
              : selected == 'Accepted'
              ? accepteSearch
              : openarrSearch
          }
          showsVerticalScrollIndicator={false}
          renderItem={render}
          ref={flatListRef}
          // snapToInterval={Dimensions.get('window').height - 110}
          // snapToAlignment={'start'}
          // decelerationRate="fast"
          // keyExtractor={item => item.id}
        />
      </View>
      {/* </ImageBackground> */}
      {myModal()}
      {/* {myModal1()} */}
    </SafeAreaView>
  );
};
export default Home;
