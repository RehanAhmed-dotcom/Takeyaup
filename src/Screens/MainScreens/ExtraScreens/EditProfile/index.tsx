import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  Modal,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import ImagePicker from 'react-native-image-crop-picker';
import {update} from '../../../../redux/actions';
import {editProfile} from '../../../../lib/api';
const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const {userData} = useSelector(({USER}) => USER);
  const [showModal, setShowModal] = useState(false);
  const [pic, setPic] = useState(userData.userdata.image);
  const [first, setFirst] = useState(userData.userdata.username);
  const [last, setLast] = useState('');
  const [about, setAbout] = useState(userData.userdata.email);
  const chosePic = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      // console.log(image);
      setPic(image.path);
    });
  };
  // useEffect(() => {
  //   setPic(userData.user.image);
  //   setFirst(userData.user.first_name);
  //   setLast(userData.user.last_name);
  //   setAbout(userData.user.about);
  // }, []);
  // console.log(userData);
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
  console.log('data', userData);
  return (
    <SafeAreaView style={styles.main}>
      {/* <ImageBackground
        source={require('../../../../Images/aa.png')}
        style={styles.background}> */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.firstText}>Edit Profile</Text>
      </View>
      <View style={styles.secondView}>
        <View style={styles.card}>
          <View style={styles.empty1}>
            <TouchableOpacity onPress={chosePic} style={styles.imageView}>
              <Image
                source={
                  pic ? {uri: pic} : require('../../../../Images/holder.png')
                }
                style={styles.image}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder={'Full name'}
              value={first}
              onChangeText={text => setFirst(text)}
              placeholderTextColor={'#B4B4B4'}
              style={styles.inputs}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              placeholder={'Email'}
              value={about}
              editable={false}
              onChangeText={text => setAbout(text)}
              placeholderTextColor={'#B4B4B4'}
              style={styles.inputs}
            />
          </View>
          <View style={styles.empty} />
          <TouchableOpacity
            onPress={() => {
              //
              setShowModal(true);
              const data1 = new FormData();

              data1.append('username', first);
              {
                pic &&
                  data1.append('image', {
                    uri: pic,
                    type: 'image/jpeg',
                    name: `image${new Date()}.jpg`,
                  });
              }
              // data1.append('last_name', last);
              // data1.append('email', about);
              editProfile(
                {
                  Auth: userData.token,
                },
                data1,
              ).then(res => {
                if (res) {
                  console.log('res', res);
                  if (res.status == 'success') {
                    setShowModal(false);
                    update(res)(dispatch);
                    navigation.navigate('Home');
                  }
                } else {
                  setShowModal(false);
                  Alert.alert('Something went wrong');
                }
              });
            }}
            style={styles.button}>
            <Text style={styles.update}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ImageBackground> */}
      {myModal3()}
    </SafeAreaView>
  );
};
export default EditProfile;
