import React, {useState, useEffect} from 'react';

import {useSelector} from 'react-redux';
import {CreateBet} from '../../../../lib/api';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Modal,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/AntDesign';
const SendBet = ({navigation, route}) => {
  const {loser_task, receiver_bet, receiver_id, sender_bet, selected} =
    route.params;
  const name = route?.params?.name;
  const [showModal, setShowModal] = useState(false);
  const {userData} = useSelector(({USER}) => USER);
  console.log(
    'route',
    loser_task,
    receiver_bet,
    receiver_id,
    sender_bet,
    selected,
  );
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
          <ActivityIndicator size="large" color={'#50D240'} />
        </View>
      </View>
    </Modal>
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#191A19',
        paddingHorizontal: 15,
      }}>
      <Text
        style={{
          marginTop: 30,
          fontSize: 20,
          fontWeight: 'bold',
          color: '#50D240',
        }}>
        Create a Bet
      </Text>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#50D240',
          marginTop: 30,
        }}>
        Send your bet
      </Text>
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
            {/* <Text style={{color: '#50D240'}}>@</Text> */}
            <Text style={{color: '#50D240'}}>{userData.userdata.username}</Text>
          </View>
          {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon2 name="bullhorn" size={30} color={'#50D240'} />
            <Text style={{color: '#50D240', marginLeft: 10}}>24</Text>
          </View> */}
        </View>
        <Text style={{color: 'white', marginTop: 20}}>{sender_bet}</Text>
        {name ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 30,
                  alignItems: 'center',
                }}>
                {/* <Text style={{color: '#50D240'}}>@</Text> */}
                <Text style={{color: '#50D240'}}>{name}</Text>
              </View>
              {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon2 name="bullhorn" size={30} color={'#50D240'} />
            <Text style={{color: '#50D240', marginLeft: 10}}>23</Text>
          </View> */}
            </View>
            <Text style={{color: 'white', marginTop: 20}}>{receiver_bet}</Text>
          </>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 30,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 30,
                  alignItems: 'center',
                }}>
                {/* <Text style={{color: '#50D240'}}>@</Text> */}
                <Text style={{color: '#50D240'}}>OPEN</Text>
              </View>
              {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon2 name="bullhorn" size={30} color={'#50D240'} />
        <Text style={{color: '#50D240', marginLeft: 10}}>23</Text>
      </View> */}
            </View>
            <Text style={{color: 'white', marginTop: 20}}>{receiver_bet}</Text>
          </>
        )}

        <Text style={{color: '#50D240', marginTop: 50}}>The Stakes</Text>
        <Text style={{color: 'white', marginTop: 10}}>{loser_task}</Text>
        <TouchableOpacity
          onPress={
            () => {
              setShowModal(true);
              const data = new FormData();
              {
                receiver_id && data.append('receiver_id', receiver_id);
              }
              data.append('sender_bet', sender_bet);
              data.append('receiver_bet', receiver_bet);
              data.append('loser_task', loser_task);
              selected.forEach(item => {
                data.append('event_category[]', item);
              });
              CreateBet({Auth: userData.token}, data)
                .then(res => {
                  console.log('res', res);
                  setShowModal(false);
                  navigation.navigate('Home');
                })
                .catch(err => {
                  setShowModal(false);
                  console.log('err', err);
                  Alert.alert('Something went wrong');
                });
            }
            //
          }
          style={{alignItems: 'flex-end', marginTop: 50}}>
          <Icon4 name="arrowright" color={'#50D240'} size={30} />
        </TouchableOpacity>
      </View>
      {myModal3()}
    </View>
  );
};
export default SendBet;
