import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  // TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {
  sendMessage,
  showComment,
  PostLikes,
  betCount,
} from '../../../../lib/api';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
// import {senderMsg, recieverMsg} from '../../../../lib/messageUtilis';
// import database from '@react-native-firebase/database';
// import {GiftedChat} from 'react-native-gifted-chat';
// import styles from './style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';

// import {ScrollView} from 'react-native-gesture-handler';
const PostDescription = ({navigation, route}) => {
  const {userData} = useSelector(({USER}) => USER);
  const [messages, setMessages] = useState([]);
  const [comment, setComment] = useState('');
  const [show, setShow] = useState([]);
  const [check, setCheck] = useState(false);
  const [text, setText] = useState('');
  const [change, setChange] = useState(false);
  const [senderCount, setSenderCount] = useState('');
  const [receiverCount, setReceiverCount] = useState('');
  useEffect(() => {
    betCount({Auth: userData.token, id: item.id}).then(res => {
      console.log('res', res);
      setReceiverCount(res.receiver_like);
      setSenderCount(res.sender_like);
    });
  }, [change]);
  const checkForUpdate = useRef(null);
  const {item, id} = route.params;
  console.log('route', id, item);
  console.log('item', item);
  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}>{item.user_name}:</Text>
      <Text style={{color: 'black'}}>{item.message}</Text>
    </View>
  );
  useEffect(() => {
    showComment({Auth: userData.token, id: item.id}).then(res => {
      console.log('resip', res);
      setShow(res.comments);
    });
  }, [check]);
  // const emailToUniqueString = email => email.replace(/[^a-zA-Z0-9 ]/g, '');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 58,
          flexDirection: 'row',
          alignItems: 'center',
          // elevation: 4,
          justifyContent: 'center',
          paddingHorizontal: 15,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../../../Images/takeup.png')}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            // flexDirection: 'row',
            // height: 150,
            height: hp(20),
            backgroundColor: 'white',
            // elevation: 3,
            // borderWidth: 1,
            // borderColor: 'black',
            marginHorizontal: 5,
            marginTop: 10,
            // backgroundColor: 'red',
            // justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text style={{fontWeight: 'bold'}}>{item.sender.username} </Text>
              <Text style={{fontWeight: 'bold'}}>vs </Text>
              <Text style={{fontWeight: 'bold'}}>{item.receiver.username}</Text>
            </View>

            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
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
                  <Text style={{marginLeft: 5}}>
                    {senderCount ? senderCount : item?.like_count_sender}
                  </Text>
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
                  // borderBottomWidth: 1,
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
                  <Text style={{marginLeft: 5}}>
                    {receiverCount ? receiverCount : item?.like_count_receiver}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        </View>
        <View style={{paddingHorizontal: 15, marginTop: 10}}>
          <Text style={{fontWeight: 'bold'}}>Comments</Text>
        </View>
        <View style={{height: '30%'}}>
          <FlatList data={show} renderItem={renderItem} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // marginBottom: 20,
            // backgroundColor: 'red',
          }}>
          <TextInput
            placeholder={'Comment'}
            placeholderTextColor="grey"
            value={comment}
            onChangeText={text => {
              setComment(text);
              // emailErr && setEmailErr('');
            }}
            style={{
              marginLeft: 15,
              // backgroundColor: 'red',
              height: 50,
              fontFamily: 'Nunito-Regular',
              fontSize: 16,
              // marginBottom: 20,
              borderWidth: 3,
              borderColor: 'grey',
              paddingLeft: 10,
              color: 'black',
              width: '70%',
              // marginTop: 20,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setComment('');
              if (comment) {
                sendMessage({
                  Auth: userData.token,
                  message: comment,
                  bet_id: item.id,
                }).then(res => {
                  console.log('res', res);
                  setCheck(!check);
                });
              }
            }}
            style={{
              height: 50,
              borderRadius: 5,
              marginTop: 0,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'black',
              width: 70,
            }}>
            <Text style={{color: 'white'}}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10, paddingHorizontal: 25}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>Who won?</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 70,
                width: 70,
                // borderRadius: 50,
                backgroundColor: id == item.sender.id ? 'green' : 'red',
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
                    // bottom: 20,
                    height: 50,
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
                alignItems: 'center',
                justifyContent: 'center',
                height: 70,
                width: 70,
                // borderRadius: 50,
                backgroundColor: id == item.receiver.id ? 'green' : 'red',
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
                    width: 50,
                    // bottom: 20,
                    height: 50,
                    // backgroundColor: 'red',
                    zIndex: 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>{item?.receiver?.username.charAt(0)}</Text>
                </View>
              )}
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text>
              Are you sure that you want to declare{' '}
              {id == item.sender.id
                ? item.sender.username
                : item.receiver.username}
            </Text>
            <Text>the winner of the bet</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../../../Images/cross.png')}
                style={{height: 50, width: 50}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notifications', {item, id});
              }}
              style={{marginLeft: 30}}>
              <Image
                source={require('../../../../Images/tick.png')}
                style={{height: 60, width: 60}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default PostDescription;
