import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  FlatList,
  Modal,
  SafeAreaView,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import {createThumbnail} from 'react-native-create-thumbnail';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/AntDesign';
// import
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import ImagePicker from 'react-native-image-crop-picker';
import styles from './style';
import {CreateBet, Search} from '../../../../lib/api';
// import Search from '../Search';
import {useSelector} from 'react-redux';
const NewPost = ({navigation, route}) => {
  console.log('route', route.params);
  const {loser_task, sender_bet} = route.params;
  console.log('abc', loser_task, sender_bet);
  const [img, setImg] = useState([]);
  const [show, setShow] = useState(false);
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [receiver_id, setreceiver_id] = useState('');
  const [showModal, setShowModal] = useState(false);
  const {userData} = useSelector(({USER}) => USER);
  const chosePic = type => {
    type == 'library'
      ? ImagePicker.openPicker({
          // multiple: true,
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          // images.push(image.path);
          setImg([...img, {image: image.path}]);
          console.log(image);
        })
      : type == 'camera'
      ? ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
        }).then(image => {
          setImg([...img, {image: image.path}]);
          // console.log(image);
        })
      : ImagePicker.openPicker({
          mediaType: 'video',
          // multiple: true,
        }).then(video => {
          // setImg([...img, video.path]);
          console.log(video);
          createThumbnail({
            url: video.path,
            timeStamp: 10000,
          })
            .then(responce => {
              setImg([...img, {video: video.path, thumbnil: responce.path}]);
              // console.log(setThumb(responce.path));
            })
            .catch(err => console.log({err}));
          console.log(video);
        });
  };
  const myModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setShow(!show);
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000088',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '40%',
            width: '90%',
            backgroundColor: '#FF4029',
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: 10,
              marginTop: 10,
            }}>
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Icon3 name="circle-with-cross" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              //   backgroundColor: 'blue',
              paddingHorizontal: 10,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                chosePic('library');
                setShow(!show);
              }}
              style={styles.modalButtons}>
              <Text style={styles.buttonText}>Picture</Text>
            </TouchableOpacity>

            {/* <Button
              title={'Video'}
              onPress={() => {
                choosePic('video');
                setModalVisible(!modalVisible);
                setCheck('video');
              }}
            /> */}
            <View style={{marginTop: 20}} />
            <TouchableOpacity
              onPress={() => {
                chosePic('video');
                setShow(!show);
              }}
              style={styles.modalButtons}>
              <Text style={styles.buttonText}>Video</Text>
            </TouchableOpacity>

            {/* <Button
              title={'Picture'}
              onPress={() => {
                choosePic('picture');
                setModalVisible(!modalVisible);
                setCheck('image');
              }}
            /> */}
          </View>
        </View>
      </View>
    </Modal>
  );
  const renderItem = ({item}) => (
    <TouchableOpacity
      //   style={{backgroundColor: 'blue'}}
      // onPress={() => setShow(!show)}
      style={styles.flat}>
      <Image
        source={{uri: item.image ? item.image : item.video}}
        style={{height: '100%', width: '100%', borderRadius: 10}}
      />
    </TouchableOpacity>
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
          <ActivityIndicator size="large" color={'black'} />
        </View>
      </View>
    </Modal>
  );
  console.log('img&video', img);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setImg([]);
    });
    return unsubscribe;
  }, [navigation]);
  const renderItems = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setName(item.username);
        setList([]);
        setreceiver_id(item.id);
        setShowModal(true);
        const data = new FormData();
        data.append('receiver_id', item.id);

        data.append('sender_bet', sender_bet);
        // data.append('receiver_bet', receiver_bet);
        data.append('loser_task', loser_task);
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
      }}
      style={{
        height: 50,
        justifyContent: 'center',
        paddingLeft: 15,
        width: '100%',
        // backgroundColor: 'red',
      }}>
      <Text style={{color: 'black'}}>{item.username}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.main}>
      <View style={{marginHorizontal: 15}}>
        <Text
          style={{
            color: 'black',
            marginTop: 30,
            // marginLeft: 15,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Create a Bet
        </Text>
        <View style={{marginTop: 50, alignItems: 'center'}}>
          <Text style={{color: 'black', fontSize: 18}}>
            Who are you sending your bet to?
          </Text>
          <Text
            style={{
              color: 'black',
              // marginTop: 30,
              // marginLeft: 15,
              fontSize: 18,
              // fontWeight: 'bold',
            }}>
            Search for a user
          </Text>
        </View>
        <View
          style={[
            {
              backgroundColor: 'white',
              elevation: 4,
              minHeight: 50,
              maxHeight: 250,
              width: '100%',
              marginTop: 20,
              borderRadius: 10,
            },
            {borderWidth: 5, borderColor: 'black'},
          ]}>
          <TextInput
            // placeholder={'Email'}
            placeholderTextColor="white"
            value={name}
            onChangeText={text => {
              setName(text);
              Search({name: text})
                .then(res => {
                  console.log('res', res);
                  setList(res.userlist);
                })
                .catch(err => {
                  setList([]);
                });
              // emailErr && setEmailErr('');
            }}
            style={{
              marginLeft: 15,
              fontFamily: 'Nunito-Regular',
              fontSize: 16,
              height: 50,
              color: 'black',
            }}
          />
          <FlatList data={list} renderItem={renderItems} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              marginTop: 20,
              color: 'black',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            OR
          </Text>
          <TouchableOpacity
            onPress={() => {
              setShowModal(true);
              const data = new FormData();
              // data.append('receiver_id', item.id);

              data.append('sender_bet', sender_bet);
              // data.append('receiver_bet', receiver_bet);
              data.append('loser_task', loser_task);
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
            }}>
            <Text
              style={{
                marginTop: 30,
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Leave bet open for
            </Text>
            <Text
              style={{
                // marginTop: 30,
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              anyone to accept
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => {
            //   setShowModal(true);
            //   const data = new FormData();
            //   // data.append('receiver_id', item.id);

            //   data.append('sender_bet', sender_bet);
            //   // data.append('receiver_bet', receiver_bet);
            //   data.append('loser_task', loser_task);
            //   CreateBet({Auth: userData.token}, data)
            //     .then(res => {
            //       console.log('res', res);
            //       setShowModal(false);
            //       navigation.navigate('Home');
            //     })
            //     .catch(err => {
            //       setShowModal(false);
            //       console.log('err', err);
            //       Alert.alert('Something went wrong');
            //     });
            // }}
            style={{
              // height: 50,
              // backgroundColor: '#50D240',
              // width: '60%',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
            }}>
            {/* <Text style={{fontWeight: 'bold', fontSize: 16}}>OR</Text> */}
            {/* <Icon3 name="lock-open" size={50} color={'black'} /> */}
          </TouchableOpacity>
          {/* <Text
          style={{
            color: 'black',
            fontSize: 16,
            marginTop: 20,
            fontWeight: 'bold',
          }}>
          Invite someone to join Takeyaup and accept your bet
        </Text>
        <Icon3 name="share" color={'black'} size={50} style={{marginTop: 20}} /> */}
        </View>
      </View>
      {/* <ImageBackground
        source={require('../../../../Images/aa.png')}
        style={styles.background}>*/}

      {/* // </ImageBackground> */}
      {myModal()}
      {myModal3()}
    </SafeAreaView>
  );
};
export default NewPost;
