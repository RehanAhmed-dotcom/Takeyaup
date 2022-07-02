import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
// import {senderMsg, recieverMsg} from '../../../../lib/messageUtilis';
// import database from '@react-native-firebase/database';
// import {GiftedChat} from 'react-native-gifted-chat';
// import styles from './style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {completeBetApi} from '../../../../lib/api';
import {useSelector} from 'react-redux';
const Notifications = ({navigation, route}) => {
  const {userData} = useSelector(({USER}) => USER);
  console.log('userData.token', userData.token);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const checkForUpdate = useRef(null);
  const {item, id} = route.params;
  console.log('item', item, id);
  const picker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      co(image);
    });
  };
  const co = image => {
    setShowModal(true);
    const data = new FormData();
    data.append('bet_id', item.id);
    data.append('winner', id);
    data.append('bet_video', {
      uri: image.path,
      type: 'image/jpeg',
      name: 'image' + new Date() + '.jpg',
    });

    completeBetApi({Auth: userData.token}, data)
      .then(res => {
        console.log('res of completee api', res);
        setShowModal(false);
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log('err', err);
        setShowModal(false);
      });
  };
  const cos = () => {
    setShowModal(true);
    const data = new FormData();
    data.append('bet_id', item.id);
    data.append('winner', id);
    // data.append('bet_video', {
    //   uri: image.path,
    //   type: 'image/jpeg',
    //   name: 'image' + new Date() + '.jpg',
    // });

    completeBetApi({Auth: userData.token}, data)
      .then(res => {
        console.log('res of completee api', res);
        setShowModal(false);
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log('err', err);
        setShowModal(false);
      });
  };
  // const emailToUniqueString = email => email.replace(/[^a-zA-Z0-9 ]/g, '');
  const myModal3 = () => (
    <Modal animationType="slide" transparent={true} visible={showModal}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000088',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 100,
            width: 100,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color={'black'} />
        </View>
      </View>
    </Modal>
  );
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
          </View>
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
          </View>
        </>
      </View>
      <View style={{paddingHorizontal: 15, marginTop: 10}}>
        <Text style={{fontWeight: 'bold'}}>Comments</Text>
      </View>
      <View style={{marginTop: 100, paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
            Upload Image or Video
          </Text>
          <TouchableOpacity onPress={() => picker()}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
              NOW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => cos()}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
              LATER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => cos()}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>
              NO UPLOAD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {myModal3()}
    </SafeAreaView>
  );
};
export default Notifications;
