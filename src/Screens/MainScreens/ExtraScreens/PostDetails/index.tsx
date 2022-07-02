import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import styles from './style';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';
import {postDetails, postLike} from '../../../../lib/api';
const PostDetails = ({navigation, route}) => {
  const [show, setShow] = useState(false);
  const {userData} = useSelector(({USER}) => USER);
  const [data, setData] = useState([]);
  const [paused, setPaused] = useState(false);
  const [picVid, setPicVid] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const {id} = route.params;
  useEffect(() => {
    postDetails({Auth: userData.token, post_id: id}).then(res => {
      setData(res.data[0]);
    });
  }, [show]);
  console.log('ressa', data.posts);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        // console.log(item);
        setPicVid(item);
        item.image ? setShowModal(!showModal) : setShowModal1(!showModal1);
      }}
      style={styles.flatInnerView}>
      <Image
        source={{uri: item.image ? item.image : item.thumbnil}}
        style={styles.img}
      />
      {!item.image && (
        <View style={styles.video}>
          <View style={styles.videoSection}>
            <Icon name="play" size={15} color="white" />
            <View style={styles.line}></View>
            <Text style={styles.time}>5:00</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
  const myModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(!showModal);
        // setPaused(!paused);
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000088',
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Icon2
            onPress={() => {
              setShowModal(!showModal);
              // setPaused(!paused);
            }}
            name={'circle-with-cross'}
            // style={{top: 30, zIndex: 1}}
            size={20}
            color="white"
          />
        </View>
        <View style={{height: '50%', width: '90%'}}>
          <Image
            resizeMode="stretch"
            source={{uri: picVid.image}}
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </View>
    </Modal>
  );
  const myModal1 = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal1}
      onRequestClose={() => {
        setShowModal1(!showModal1);
        // setPaused(!paused);
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#00000088',
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <Icon2
            onPress={() => {
              setShowModal1(!showModal1);
              // setPaused(!paused);
            }}
            name={'circle-with-cross'}
            // style={{top: 30, zIndex: 1}}
            size={20}
            color="white"
          />
        </View>
        <View style={{height: hp(50), width: '90%'}}>
          <Video
            resizeMode="stretch"
            onEnd={() => setPaused(!paused)}
            poster={picVid.thumbnil}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
            // controls={true}
            paused={paused}
            source={{uri: picVid.video}}
          />
          <View
            style={{
              position: 'absolute',
              height: hp(50),
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {paused ? (
              <Icon2
                name={'controller-play'}
                onPress={() => setPaused(!paused)}
                size={40}
                color="white"
              />
            ) : (
              <Icon
                name={'pause'}
                onPress={() => setPaused(!paused)}
                size={40}
                color="white"
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={'arrowleft'} size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.name}>{data.location}</Text>
      </View>
      <ScrollView>
        <View style={styles.second}>
          <View style={styles.description}>
            <Text style={styles.text}>{data.description}</Text>
          </View>
          <View style={styles.flatOuterView}>
            <FlatList
              data={data.posts}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={3}
              key={3}
            />
          </View>
          <View style={styles.likesComments}>
            <TouchableOpacity
              onPress={() => {
                postLike({Auth: userData.token, post_id: data.id}).then(res => {
                  console.log(res);
                  setShow(!show);
                });
              }}
              style={styles.center}>
              <Icon name={data.is_like ? 'heart' : 'hearto'} size={20} />
              <Text style={styles.texts}>{data.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Comments', {Post_id: data.id})
              }
              style={styles.center}>
              <Icon1 name="comment" size={20} />
              <Text style={styles.texts}>{data.total_comments}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {myModal()}
      {myModal1()}
      {/* </ImageBackground> */}
    </View>
  );
};
export default PostDetails;
