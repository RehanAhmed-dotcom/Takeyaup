import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import {useSelector} from 'react-redux';
import {showPosts, postLike, updateToken} from '../../../../lib/api';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
// import messaging from '@react-native-firebase/messaging';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const CompleteBet = ({navigation, route}) => {
  const {item} = route.params;
  console.log('item', item);
  return (
    <View
      style={{
        height: heightPercentageToDP(100),
        backgroundColor: '#191A19',
        paddingHorizontal: 15,
      }}>
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
          <Text style={{color: '#50D240'}}>{item?.sender?.username}</Text>
        </View>
        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon2 name="bullhorn" size={30} color={'#50D240'} />
          <Text style={{color: '#50D240', marginLeft: 10}}>24</Text>
        </View> */}
      </View>
      <Text style={{color: 'white', marginTop: 20}}>{item.sender_bet}</Text>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CompleteUpload', {
              id: item.id,
              winnerid: item.sender.id,
              stakes: item.loser_task,
            })
          }
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#50D240',
            marginTop: 30,
            height: 50,
            width: 170,
            marginLeft: 30,
            borderRadius: 30,
          }}>
          <Text style={{fontSize: 18}}>WINNER</Text>
        </TouchableOpacity>
      </View>
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
          <Text style={{color: '#50D240'}}>{item.receiver.username}</Text>
        </View>
        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon2 name="bullhorn" size={30} color={'#50D240'} />
          <Text style={{color: '#50D240', marginLeft: 10}}>23</Text>
        </View> */}
      </View>
      <Text style={{color: 'white', marginTop: 20}}>{item.receiver_bet}</Text>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CompleteUpload', {
              id: item.id,
              winnerid: item.sender.id,
              stakes: item.loser_task,
            })
          }
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#50D240',
            marginTop: 30,
            height: 50,
            width: 170,
            marginLeft: 30,
            borderRadius: 30,
          }}>
          <Text style={{fontSize: 18}}>WINNER</Text>
        </TouchableOpacity>
      </View>

      {/* <Text style={{color: '#50D240', marginTop: 50}}>The Stakes</Text>
      <Text style={{color: 'white', marginTop: 10}}>
        Loser bleaches their hair
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Consequences')}
        style={{alignItems: 'flex-end', marginTop: 50}}>
        <Icon4 name="arrowright" color={'#50D240'} size={30} />
      </TouchableOpacity> */}
    </View>
  );
};
export default CompleteBet;
