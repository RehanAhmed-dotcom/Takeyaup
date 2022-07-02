import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  TextInput,
  ImageBackground,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  showPosts,
  postLike,
  current,
  completed,
  PostLikes,
  open,
  rejected,
  mybet,
  accepted,
  acc,
  rej,
  updateToken,
} from '../../../../lib/api';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {TouchableOpacity as Touch} from 'react-native-gesture-handler';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
// import messaging from '@react-native-firebase/messaging';

const Search = ({navigation}) => {
  const flatListRef = React.useRef();

  const toTop = () => {
    // use current
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [proposed, setProposed] = useState([]);
  const [proposeds, setProposeds] = useState([]);

  const [sea, setSea] = useState('');
  const [change, setChange] = useState(false);
  const [selected, setSelected] = useState('Pending');
  const [pending, setPending] = useState([]);
  const [accepte, setAccepted] = useState([]);
  const [complete, setCompleted] = useState([]);
  const [rejecte, setRejected] = useState([]);
  const [pendings, setPendings] = useState([]);
  const [acceptes, setAccepteds] = useState([]);
  const [completes, setCompleteds] = useState([]);
  const [rejectes, setRejecteds] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [select, setSelect] = useState('Proposed Bets');
  const [imoge, setImoge] = useState('');
  console.log('pending', complete[0]);
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
        <View style={{height: '80%', width: '100%'}}>
          <Image
            source={{uri: imoge}}
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </View>
    </Modal>
  );
  const {userData} = useSelector(({USER}) => USER);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      current({Auth: userData.token})
        .then(res => {
          // console.log('res of pending', res);
          setPending(res.current_bets);
          setPendings(res.current_bets);
        })
        .catch(err => {
          console.log('err', err);
        });
      completed({Auth: userData.token})
        .then(res => {
          // console.log('res of completed', res);
          setCompleted(res.complete_bets);
          setCompleteds(res.complete_bets);
        })
        .catch(err => {
          console.log('err', err);
        });
      mybet({Auth: userData.token})
        .then(res => {
          // console.log('res of proposed', JSON.stringify(res));
          setProposed(res.my_bets);
          setProposeds(res.my_bets);
        })
        .catch(err => {
          console.log('err', err);
        });
      rejected({Auth: userData.token})
        .then(res => {
          // console.log('res of rejected', res);
          setRejected(res.rejected_bets);
          setRejecteds(res.rejected_bets);
        })
        .catch(err => {
          console.log('err', err);
        });
      accepted({Auth: userData.token})
        .then(res => {
          // console.log('res of accepted', JSON.stringify(res));
          setAccepted(res.accepted_bets);
          setAccepteds(res.accepted_bets);
        })
        .catch(err => {
          console.log('err', err);
        });
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    current({Auth: userData.token})
      .then(res => {
        // console.log('res of Pending', JSON.stringify(res));
        setPending(res.current_bets);
        setPendings(res.current_bets);
      })
      .catch(err => {
        console.log('err', err);
      });
    completed({Auth: userData.token})
      .then(res => {
        // console.log('res of completed', res);
        setCompleted(res.complete_bets);
        setCompleteds(res.complete_bets);
      })
      .catch(err => {
        console.log('err', err);
      });
    mybet({Auth: userData.token})
      .then(res => {
        // console.log('res of proposed', JSON.stringify(res));
        setProposed(res.my_bets);
        setProposeds(res.my_bets);
      })
      .catch(err => {
        console.log('err', err);
      });
    rejected({Auth: userData.token})
      .then(res => {
        // console.log('res of rejected', JSON.stringify(res));
        setRejected(res.rejected_bets);
        setRejecteds(res.rejected_bets);
      })
      .catch(err => {
        console.log('err', err);
      });
    accepted({Auth: userData.token})
      .then(res => {
        console.log('res of accepted', JSON.stringify(res));
        setAccepted(res.accepted_bets);
        setAccepteds(res.accepted_bets);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, [change]);

  const renderItems = ({item}) => (
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
      {selected == 'Pending' ? (
        <>
          <TouchableOpacity
            onPress={() => {
              // console.log('item', item);
              // setId(item.id);
              // setModalVisible(!modalVisible);
              acc({Auth: userData.token, bet_id: item.id})
                .then(res => {
                  // console.log('res', res);
                  setChange(!change);
                })
                .catch(err => {
                  // console.log('err', err);
                });
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
          <TouchableOpacity
            onPress={() => navigation.navigate('Chats', {item})}
            style={{
              // backgroundColor: 'red',
              width: '50%',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              paddingBottom: 5,
              height: '100%',
            }}>
            <View style={{height: hp(9)}}>
              <Text>{item?.sender_bet}</Text>
            </View>
            <View style={{height: hp(9)}}>
              <Text style={{marginTop: 10}}>Stakes: {item?.loser_task}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // setId(item.id);
              // setModalVisible(!modalVisible);
              rej({Auth: userData.token, bet_id: item.id})
                .then(res => {
                  // console.log('res', res);
                  setChange(!change);
                })
                .catch(err => {
                  // console.log('err', err);
                });
            }}
            style={{
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: 'blue',
              height: 70,
            }}>
            <Image
              source={require('../../../../Images/cross.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
        </>
      ) : selected == 'Proposed' ? (
        <>
          <TouchableOpacity
            onPress={() => {
              // setId(item.id);
              // setModalVisible(!modalVisible);
              rej({Auth: userData.token, bet_id: item.id})
                .then(res => {
                  // console.log('res', res);
                  setChange(!change);
                })
                .catch(err => {
                  // console.log('err', err);
                });
            }}
            style={{
              width: 70,
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: 'blue',
              height: 70,
            }}>
            <Image
              source={require('../../../../Images/cross.png')}
              style={{height: 60, width: 60}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chats', {item})}
            style={{
              // backgroundColor: 'red',
              width: '50%',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              // alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              height: '100%',
            }}>
            <View style={{height: hp(9)}}>
              <Text>{item?.sender_bet}</Text>
            </View>
            <View style={{height: hp(9)}}>
              <Text style={{marginTop: 10}}>Stakes: {item?.loser_task}</Text>
            </View>
          </TouchableOpacity>
          <View
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

                  height: 70,
                  // backgroundColor: 'red',
                  zIndex: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{item?.receiver?.username.charAt(0)}</Text>
              </View>
            )}
          </View>
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
                console.log('res', res);
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
            <View style={{height: hp(9)}}>
              <Text>{item?.sender_bet}</Text>
            </View>
            <View style={{height: hp(9)}}>
              <Text style={{marginTop: 10}}>Stakes: {item?.loser_task}</Text>
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
                console.log('res', res);
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
      ) : selected == 'Completed' ? (
        <>
          <TouchableOpacity
            onPress={() => {
              console.log('bet id', item.id);
              console.log('user id', item.sender.id);
              console.log('rec', userData.token);
              PostLikes({
                Auth: userData.token,
                betid: item.id,
                userid: item.sender.id,
              }).then(res => {
                setChange(!change);
                console.log('res', res);
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
                  ? {uri: item?.sender?.image}
                  : require('../../../../Images/place.jpg')
              }
              style={{width: 50, height: 50, borderRadius: 50}}
            />
            {!item?.sender?.image && (
              <View
                style={{
                  position: 'absolute',
                  width: 50,
                  bottom: 60,
                  height: 50,
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
              borderBottomWidth: 1,
              justifyContent: 'center',
              paddingBottom: 5,
              height: '100%',
            }}>
            <View style={{height: hp(9)}}>
              <Text>{item?.sender_bet}</Text>
            </View>
            <View style={{height: hp(9)}}>
              <Text style={{marginTop: 10}}>Stakes: {item?.loser_task}</Text>
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
                console.log('res', res);
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
                  bottom: 60,
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
              <Text style={{marginLeft: 5}}>{item.like_count_receiver}</Text>
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
                  // justifyContent: 'center',
                  height: 70,
                  // backgroundColor: 'red',
                  zIndex: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{item?.sender?.username.charAt(0)}</Text>
              </View>
            )}
          </View>
          <View
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
          </View>
          <View
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

                  height: 70,
                  // backgroundColor: 'red',
                  zIndex: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{item?.receiver?.username.charAt(0)}</Text>
              </View>
            )}
          </View>
        </>
      )}
    </View>
  );
  const searchTextRejected = e => {
    console.log('i came here');
    let filteredName = [];
    // if (e) {
    filteredName = rejecte.filter(item => {
      console.log('item in home', item);
      return (
        item?.loser_task?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender_bet?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender?.username.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.receiver?.username.toLowerCase().includes(`${e.toLowerCase()}`)
      );

      // item.location.toLowerCase().includes(`${e.toLowerCase()}`)
    });
    setRejecteds(filteredName);
    // filteredName = [];
    // }
  };
  const searchTextAccepted = e => {
    let filteredName = [];
    // if (e) {
    filteredName = accepte.filter(item => {
      console.log('item in home', item);
      return (
        item?.loser_task?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender_bet?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender?.username.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.receiver?.username.toLowerCase().includes(`${e.toLowerCase()}`)
      );

      // item.location.toLowerCase().includes(`${e.toLowerCase()}`)
    });
    setAccepteds(filteredName);
    // filteredName = [];
    // }
  };
  const searchTextCompleted = e => {
    let filteredName = [];
    // if (e) {
    filteredName = complete.filter(item => {
      console.log('item in home', item);
      return (
        item?.loser_task?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender_bet?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender?.username.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.receiver?.username.toLowerCase().includes(`${e.toLowerCase()}`)
      );

      // item.location.toLowerCase().includes(`${e.toLowerCase()}`)
    });
    setCompleteds(filteredName);
    // filteredName = [];
    // }
  };
  const searchTextProposed = e => {
    console.log('i came here');
    let filteredName = [];
    // if (e) {
    filteredName = proposed.filter(item => {
      console.log('item in home', item);
      return (
        item?.loser_task?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender_bet?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender?.username.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.receiver?.username.toLowerCase().includes(`${e.toLowerCase()}`)
      );

      // item.location.toLowerCase().includes(`${e.toLowerCase()}`)
    });
    setProposeds(filteredName);
    // filteredName = [];
    // }
  };
  const searchTextPending = e => {
    let filteredName = [];
    // if (e) {
    filteredName = pending.filter(item => {
      console.log('item in home', item);
      return (
        item?.loser_task?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender_bet?.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.sender?.username.toLowerCase().includes(`${e.toLowerCase()}`) ||
        item?.receiver?.username.toLowerCase().includes(`${e.toLowerCase()}`)
      );

      // item.location.toLowerCase().includes(`${e.toLowerCase()}`)
    });
    setPendings(filteredName);
    // filteredName = [];
    // }
  };
  // const arrrrr = [{name: 'abc'}, {name: 'def'}, {name: 'gih'}, {name: 'xyz'}];
  // console.log('arr', arrrrr.reverse());
  return (
    <SafeAreaView style={styles.main}>
      {/* <ImageBackground
      #50D240
        resizeMode="cover"
        source={require('../../../../Images/background.png')}
        style={styles.background}> */}
      {/* <Text
        onPress={() => setChange(!change)}
        style={{color: '#50D240', marginLeft: 15, marginTop: 20}}>
        My Bets
      </Text> */}
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
                selected == 'Proposed'
                  ? searchTextProposed(text)
                  : selected == 'Pending'
                  ? searchTextPending(text)
                  : selected == 'Accepted'
                  ? searchTextAccepted(text)
                  : selected == 'Completed'
                  ? searchTextCompleted(text)
                  : searchTextRejected(text);
              }}
            />
          </View>
        )}

        <View
          style={{
            width: 50,
          }}>
          <Icon
            onPress={() => setShowSearch(true)}
            name="search"
            size={25}
            color={'black'}
          />
        </View>

        <TouchableOpacity onPress={() => toTop()}>
          <Image
            source={require('../../../../Images/takeup.png')}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Setting')}
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            // backgroundColor: 'blue',
            justifyContent: 'center',
          }}>
          <Icon4 name="setting" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.second}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {['Pending', 'Proposed', 'Accepted', 'Completed', 'Rejected'].map(
            item => (
              <TouchableOpacity
                onPress={() => setSelected(item)}
                style={{
                  paddingBottom: 5,
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
            ),
          )}
        </View>

        <FlatList
          data={
            selected == 'Proposed'
              ? proposeds
              : selected == 'Pending'
              ? pendings
              : selected == 'Accepted'
              ? acceptes
              : selected == 'Completed'
              ? completes
              : rejectes
          }
          // data={['1', '2', '3', '4']}
          showsVerticalScrollIndicator={false}
          renderItem={renderItems}
          // snapToInterval={Dimensions.get('window').height - 110}
          // snapToAlignment={'start'}
          // decelerationRate="fast"
          // keyExtractor={item => item.id}
        />
      </View>
      {/* </ImageBackground> */}
      {myModal()}
    </SafeAreaView>
  );
};
export default Search;
