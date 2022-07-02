import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import styles from './style';

import {logoutuser} from '../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {PowerRaking} from '../../../../lib/api';
import Icon from 'react-native-vector-icons/AntDesign';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState({});
  const {userData} = useSelector(({USER}) => USER);
  const tabBarHeight = useBottomTabBarHeight();
  const [power, setPower] = useState([]);
  const arr = [
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
    {rk: 1, user: 'David', points: 16, win: 70},
  ];
  const data = [
    {location: 'moscow', image: require('../../../../Images/girl.jpg')},
    {location: 'London', image: require('../../../../Images/girl.jpg')},
    {location: 'Russia', image: require('../../../../Images/girl.jpg')},
    {location: 'China', image: require('../../../../Images/girl.jpg')},
    {location: 'Africa', image: require('../../../../Images/girl.jpg')},
    {location: 'Saudia', image: require('../../../../Images/girl.jpg')},
  ];
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PostDetails', {id: item.post_id})}
      style={styles.flat}>
      {item.Posts && (
        <>
          <Text style={styles.bold}>{item.post_location.substring(0, 10)}</Text>
          <Image
            source={{
              uri: item.Posts[0].image
                ? item.Posts[0].image
                : item.Posts[0].thumbnil,
            }}
            style={styles.flatImg}
          />
        </>
      )}
    </TouchableOpacity>
  );
  const renderItem1 = ({item, index}) => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 15,
      }}>
      <Text style={{fontSize: 16, color: 'black'}}>{index + 1}</Text>
      <Text numberOfLines={1} style={{fontSize: 16, color: 'black', width: 70}}>
        {item.username}
      </Text>
      <Text style={{fontSize: 16, color: 'black'}}>{item.win_count}</Text>
      <Text style={{fontSize: 16, color: 'black'}}>{item.winning_percent}</Text>
    </View>
  );
  useEffect(() => {
    PowerRaking({Auth: userData.token}).then(res => {
      console.log('res', res);
      setPower(res.power_ranks);
    });
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      {/* <ImageBackground
        source={require('../../../../Images/aa.png')}
        style={styles.background}> */}
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginTop: 30,
            color: 'black',
          }}>
          Power Rankings
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <Text style={{fontSize: 18, color: 'black'}}>RK</Text>
        <Text style={{fontSize: 18, color: 'black'}}>User</Text>
        <Text style={{fontSize: 18, color: 'black'}}>Points</Text>
        <Text style={{fontSize: 18, color: 'black'}}>Win%</Text>
      </View>
      <FlatList data={power} renderItem={renderItem1} />
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};
export default Profile;
