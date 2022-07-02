import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import {sendMessage, showComment} from '../../../../lib/api';
import {useDispatch, useSelector} from 'react-redux';
import Icon4 from 'react-native-vector-icons/AntDesign';
const Consequences = ({navigation, route}) => {
  const id = route?.params?.id;
  const {userData} = useSelector(({USER}) => USER);
  const [comment, setComment] = useState('');
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState([]);
  const [keyboardStatus, setKeyboardStatus] = useState('');
  console.log('id', keyboardStatus);
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
    showComment({Auth: userData.token, id}).then(res => {
      console.log('resi', res);
      setShow(res.comments);
    });
  }, [check]);
  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>{item.user_name}:</Text>
      <Text style={{color: 'white'}}>{item.message}</Text>
    </View>
  );
  return (
    <View style={{flex: 1, backgroundColor: '#191A19', paddingHorizontal: 15}}>
      {/* <Text style={{fontSize: 20, marginTop: 30, color: '#50D240'}}>
        Consequence
      </Text>
      <View style={{height: '40%', width: '100%', justifyContent: 'center'}}>
        <Image
          source={require('../../../../Images/girl.jpg')}
          style={{height: '100%', width: '100%', marginTop: 30}}
        />
      </View> */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 30,
          color: '#50D240',
        }}>
        Comments
      </Text>
      <View
        style={[
          {
            backgroundColor: '#191A19',
            elevation: 4,
            height: '70%',
            width: '90%',
            marginTop: 20,
            borderRadius: 10,
          },
          {borderWidth: 5, borderColor: 'grey'},
        ]}>
        <FlatList data={show} renderItem={renderItem} />
        {/* */}
        {/* <TextInput /> */}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          // backgroundColor: 'red',
        }}>
        <TextInput
          placeholder={'Comment'}
          placeholderTextColor="white"
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
            color: 'white',
            width: '70%',
            marginTop: 20,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setComment('');
            if (comment) {
              sendMessage({
                Auth: userData.token,
                message: comment,
                bet_id: id,
              }).then(res => {
                setCheck(!check);
                console.log('res', res);
              });
            }
          }}
          style={{
            height: 50,
            borderRadius: 5,
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#50D240',
            width: 70,
          }}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
      {keyboardStatus != 'Keyboard Shown' && (
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            alignItems: 'flex-start',
            position: 'absolute',
            bottom: 20,
            left: 10,
          }}>
          <Icon4 name="arrowleft" color={'#50D240'} size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Consequences;
