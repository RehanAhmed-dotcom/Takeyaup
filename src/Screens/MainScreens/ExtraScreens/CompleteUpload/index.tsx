import React, {useState} from 'react';
import {completeBetApi} from '../../../../lib/api';
import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
const CompleteUpload = ({navigation, route}) => {
  const {id, winnerid, stakes} = route.params;
  const {userData} = useSelector(({USER}) => USER);
  const [image, setImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const picker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      co(image);
    });
  };
  const co = image => {
    setShowModal(true);
    const data = new FormData();
    data.append('bet_id', id);
    data.append('winner_id', winnerid);
    data.append('bet_video', {
      uri: image.path,
      type: 'image/jpeg',
      name: 'image' + new Date() + '.jpg',
    });

    completeBetApi({Auth: userData.token}, data)
      .then(res => {
        console.log('res of completee api', res);
        setShowModal(false);
        navigation.navigate('Search');
      })
      .catch(err => {
        console.log('err', err);
        setShowModal(false);
      });
  };
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
    <View style={{flex: 1, backgroundColor: '#191A19', paddingHorizontal: 15}}>
      <Text
        style={{
          marginTop: 30,
          color: '#50D240',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        Complete Bet
      </Text>
      <Text style={{marginTop: 30, color: '#50D240', fontSize: 18}}>
        The Stakes
      </Text>
      <Text style={{color: 'white', fontSize: 16, marginTop: 30}}>
        Loser bleaches their hair
      </Text>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <Text
          style={{
            color: '#50D240',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 30,
          }}>
          Upload Image or
        </Text>
        <Text
          style={{
            color: '#50D240',
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          Video
        </Text>
        <TouchableOpacity
          onPress={() => picker()}
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
          <Text style={{fontSize: 18}}>NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
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
          <Text style={{fontSize: 18}}>LATER</Text>
        </TouchableOpacity>
      </View>
      {myModal3()}
    </View>
  );
};
export default CompleteUpload;
