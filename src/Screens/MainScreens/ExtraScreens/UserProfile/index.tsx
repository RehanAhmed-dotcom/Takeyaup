import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {userProfile, followUser} from '../../../../lib/api';
const UserProfile = ({navigation, route}) => {
  const data = [
    {
      id: '1',
      image: require('../../../../Images/girl.jpg'),
    },
    {
      id: '2',
      image: require('../../../../Images/girl.jpg'),
    },
    {
      id: '3',
      image: require('../../../../Images/girl.jpg'),
    },
    {
      id: '4',
      image: require('../../../../Images/girl.jpg'),
    },
    {
      id: '5',
      image: require('../../../../Images/girl.jpg'),
    },
    {
      id: '6',
      image: require('../../../../Images/girl.jpg'),
    },
    {
      id: '7',
      image: require('../../../../Images/girl.jpg'),
    },
    {
      id: '8',
      image: require('../../../../Images/girl.jpg'),
    },
    {
      id: '9',
      image: require('../../../../Images/girl.jpg'),
    },
  ];
  const {userData} = useSelector(({USER}) => USER);
  const {id} = route.params;
  const [profileData, setProfileData] = useState({});
  const [check, setCheck] = useState(false);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PostDetails', {id: item.post_id});
      }}
      style={styles.flatInnerView}>
      {item.Posts && (
        <Image
          source={{
            uri: item.Posts[0].image
              ? item.Posts[0].image
              : item.Posts[0].thumbnil,
          }}
          style={styles.img}
        />
      )}

      {/* <Text>{item.post_id}</Text> */}
    </TouchableOpacity>
  );
  useEffect(() => {
    userProfile({Auth: userData.token, id}).then(res => {
      console.log(res);
      setProfileData(res);
    });
  }, [check]);
  // console.log(profileData ? profileData.User_data : 'abc');
  // console.log('resfdfsf', profileData.User_data);

  return (
    <View style={styles.main}>
      {/* <ImageBackground
        source={require('../../../../Images/aa.png')}
        style={styles.background}> */}
      <View style={styles.header}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
          <Text style={styles.name}>
            {profileData.User_data ? profileData.User_data.firstname : 'ella'}{' '}
            {profileData.User_data
              ? profileData.User_data.last_name
              : '.travola'}
          </Text>
        </View>
      </View>
      {/* <ScrollView> */}
      <View style={styles.second}>
        <View style={styles.info}>
          <View style={styles.imageView}>
            <Image
              source={
                profileData.User_data
                  ? profileData.User_data.image
                    ? {uri: profileData.User_data.image}
                    : require('../../../../Images/holder.png')
                  : require('../../../../Images/holder.png')
              }
              style={styles.image}
            />
          </View>
          <View style={styles.from}>
            <Icon1 name="md-location-sharp" color="black" size={18} />
            <Text style={styles.city}>
              From{' '}
              {profileData.User_data
                ? profileData.User_data.location
                : 'Moscow'}
            </Text>
          </View>
          <View style={styles.details}>
            <View style={styles.center}>
              <Text style={styles.bold}>Posts</Text>
              <Text style={styles.regular}>
                {profileData.User_data ? profileData.user_posts : '0'}
              </Text>
            </View>
            <View style={styles.center}>
              <Text style={styles.bold}>Followers</Text>
              <Text style={styles.regular}>
                {profileData.User_data ? profileData.Followers : '0'}
              </Text>
            </View>
            <View style={styles.center}>
              <Text style={styles.bold}>Following</Text>
              <Text style={styles.regular}>
                {profileData.User_data ? profileData.Follow : '0'}
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <Text>
              {profileData.User_data
                ? profileData.User_data.about
                : 'information'}
            </Text>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => {
                followUser({
                  Auth: userData.token,
                  user_2: profileData.User_data.user_id,
                }).then(res => {
                  // console.log(res);
                  if (res.status == 'success') {
                    setCheck(!check);
                  }
                });
              }}
              style={styles.follow}>
              <Text style={styles.regular1}>
                {profileData.User_data
                  ? profileData.is_followed
                    ? 'Following'
                    : 'Follow'
                  : 'Follow'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // const data = ;
                navigation.navigate('Chat', {
                  email: profileData.User_data.user_email,
                  id: profileData.User_data.user_id,
                  image: profileData.User_data.image,
                  name: profileData.User_data.firstname,
                });
                // console.log(data);
              }}
              //
              style={styles.message}>
              <Text style={styles.messageText}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.flatOuterView}>
          <FlatList
            data={profileData.User_data ? profileData.posts : data}
            renderItem={renderItem}
            numColumns={3}
            key={3}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      {/* </ScrollView> */}
      {/* </ImageBackground> */}
    </View>
  );
};
export default UserProfile;
