import React, {useState, useEffect, useRef} from 'react';
import styles from './style';
import {
  View,
  TextInput,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  Text,
} from 'react-native';
import {open, rej, acc} from '../../../../lib/api';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
const Open = ({navigation}) => {
  const flatListRef = React.useRef();

  const toTop = () => {
    // use current
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [Id, setId] = useState({});
  const [sea, setSea] = useState('');

  const [openarr, setOpenarr] = useState([]);
  const [openarrSearch, setOpenarrSearch] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      open({Auth: userData.token}).then(res => {
        console.log('res of open', JSON.stringify(res));
        setOpenarr(res.open_bets);
        setOpenarrSearch(res.open_bets);
      });
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    open({Auth: userData.token}).then(res => {
      console.log('res of open', JSON.stringify(res));
      setOpenarr(res.open_bets);
      setOpenarrSearch(res.open_bets);
    });
  }, [change]);
  // const ar = ['1', '1', '1', '1', '1', '1', '1', '1'];
  const {userData} = useSelector(({USER}) => USER);
  const render = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        // height: 150,
        height: hp(20),
        marginTop: 10,
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
          width: 70,
          borderRadius: 50,
          backgroundColor: 'pink',
        }}>
        <Text>{item?.sender?.username.charAt(0)}</Text>
      </View>
      <View
        style={{
          // backgroundColor: 'red',
          width: '50%',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          paddingBottom: 5,
          height: '100%',
        }}>
        <Text>{item.sender_bet}</Text>
        <Text style={{marginTop: 10}}>Stakes: {item.loser_task}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setId(item);
          setModalVisible(!modalVisible);
          // acc({Auth: userData.token, bet_id: item.id})
          //   .then(res => {
          //     // console.log('res', res);
          //     setChange(!change);
          //   })
          //   .catch(err => {
          //     // console.log('err', err);
          //   });
        }}
        style={{
          width: 70,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'blue',
          height: 70,
        }}>
        <Icon1 name="handshake" size={30} />
      </TouchableOpacity>
    </View>
  );
  const myModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: '50%',
            backgroundColor: 'white',
            borderWidth: 5,
            paddingHorizontal: 10,
            borderColor: 'black',
            width: '90%',
          }}>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>
              Are you sure that you want to accept this Bet?
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text>{Id.sender_bet}</Text>

            <Text style={{marginTop: 30}}>Stakes: {Id.loser_task}</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 50,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                rej({Auth: userData.token, bet_id: Id.id})
                  .then(res => {
                    console.log('res', res);
                    setChange(!change);
                  })
                  .catch(err => {
                    console.log('err', err);
                  });
                setModalVisible(!modalVisible);
              }}
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../../../Images/cross.png')}
                style={{height: 50, width: 50}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                acc({Auth: userData.token, bet_id: Id.id})
                  .then(res => {
                    // console.log('res', res);
                    setModalVisible(!modalVisible);
                    setChange(!change);
                  })
                  .catch(err => {
                    // console.log('err', err);
                    setModalVisible(!modalVisible);
                  });
              }}
              style={{marginLeft: 30}}>
              <Image
                source={require('../../../../Images/tick.png')}
                style={{height: 60, width: 60}}
              />
            </TouchableOpacity>
          </View>
          {/* <Image
            source={{uri: imoge}}
            style={{height: '100%', width: '100%'}}
          /> */}
        </View>
      </View>
    </Modal>
  );
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        {showSearch && (
          <View
            style={{
              height: 50,
              width: '100%',
              position: 'absolute',
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 5,
              backgroundColor: 'white',
              zIndex: 3,
              flexDirection: 'row',
              left: 15,
              alignItems: 'center',
            }}>
            <Icon
              onPress={() => setShowSearch(false)}
              name="search"
              size={25}
              color={'black'}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={'grey'}
              style={{width: '80%', color: 'black'}}
              value={sea}
              //   onChangeText={text => {
              //     setSea(text);
              //     bet == 'All Bets'
              //       ? searchTextHome(text)
              //       : bet == 'Open Bets'
              //       ? searchTextOpen(text)
              //       : bet == 'Accepted Bets'
              //       ? searchTextAccepted(text)
              //       : searchTextCompleted(text);
              //   }}
            />
          </View>
        )}

        <View style={styles.empty}>
          <Icon
            onPress={() => setShowSearch(true)}
            name="search"
            size={25}
            color={'black'}
          />
        </View>
        {/* <Icon1
          name="arrow-up"
          onPress={() => toTop()}
          size={20}
          color="#50D240"
        /> */}
        <TouchableOpacity onPress={() => toTop()}>
          <Image
            source={require('../../../../Images/takeup.png')}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Setting')}
          style={styles.longArea}>
          <Icon2 name="player-settings" size={20} />
          {/* <Icon3 name="filter" size={25} color={'#50D240'} /> */}
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 15,
          flex: 1,
          // backgroundColor: 'green',
          marginTop: 10,
        }}>
        <FlatList ref={flatListRef} data={openarrSearch} renderItem={render} />
      </View>
      {myModal()}
    </View>
  );
};
export default Open;
