import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Keyboard,
  Image,
  View,
  FlatList,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Fontisto';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {
  sendMessage,
  PostLikes,
  betCount,
  completeBetApi,
  CreateBet,
  showComment,
} from '../../../../lib/api';
import Icon4 from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';

// import { FlatList } from 'react-native-gesture-handler';
const SelectCategory = ({navigation, route}) => {
  const {item} = route.params;
  const [check, setCheck] = useState(false);
  const [comment, setComment] = useState('');

  const {userData} = useSelector(({USER}) => USER);
  const [img, setimg] = useState('');
  const [show, setShow] = useState([]);
  const [keyboardStatus, setKeyboardStatus] = useState('');
  const [selected, setSelected] = useState([]);
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

  // const name = route?.params?.name;
  const handleRemove = i => {
    const arr = selected.filter(item => item !== i);
    setSelected(arr);
  };
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
  console.log('item', item);
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
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
      <View style={{paddingHorizontal: 15, marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{fontWeight: 'bold'}}>{item.sender.username} </Text>
          <Text style={{fontWeight: 'bold'}}>vs </Text>
          <Text style={{fontWeight: 'bold'}}>{item.receiver.username}</Text>
        </View>
        {keyboardStatus != 'Keyboard Shown' && (
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
                    <Text style={{marginLeft: 5}}>
                      {senderCount ? senderCount : item.like_count_sender}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SelectCategory', {item})}
                  style={{
                    // backgroundColor: 'red',
                    width: '50%',
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    paddingBottom: 5,
                    height: '100%',
                  }}>
                  <Text>{item?.sender_bet}</Text>
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
                    <Text style={{marginLeft: 5}}>
                      {receiverCount ? receiverCount : item.like_count_receiver}
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            </View>
            <Text style={{marginTop: 20, marginLeft: 0, fontWeight: 'bold'}}>
              Consequence
            </Text>
            {!item.bet_video && !img && (
              <TouchableOpacity
                style={{alignItems: 'center'}}
                onPress={() =>
                  ImagePicker.openPicker({
                    width: 300,
                    height: 400,
                    cropping: true,
                  }).then(image => {
                    const data = new FormData();
                    data.append('bet_id', item.id);
                    data.append('winner_id', item.winner_id);
                    data.append('bet_video', {
                      uri: image.path,
                      type: 'image/jpeg',
                      name: 'image' + new Date() + '.jpg',
                    });
                    completeBetApi({Auth: userData.token}, data)
                      .then(res => {
                        console.log('res', res);
                        navigation.goBack();
                      })
                      .then(err => {
                        console.log('err', err);
                      });
                    // setimg(image.path);
                  })
                }>
                <Text>Upload</Text>
              </TouchableOpacity>
            )}
            <Image
              source={{uri: item.bet_video ? item.bet_video : img}}
              style={{width: 150, height: 150}}
            />
          </>
        )}

        <Text style={{fontWeight: 'bold'}}>Comments</Text>
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
      </View>
      {/* <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      /> */}
    </SafeAreaView>
  );
};

export default SelectCategory;
