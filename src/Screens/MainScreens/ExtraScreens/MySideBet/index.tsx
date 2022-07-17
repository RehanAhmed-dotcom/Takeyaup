import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const MySideBet = ({navigation, route}) => {
  // const {receiver_id} = route.params;
  // const name = route?.params?.name;

  const [sender_bet, setsender_bet] = useState('');
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {});
    setsender_bet('');
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{
          marginTop: 30,
          fontSize: 20,
          fontWeight: 'bold',
          marginLeft: 15,
          color: 'black',
        }}>
        Create a Bet
      </Text>
      <Text
        style={{marginTop: 30, marginLeft: 15, fontSize: 18, color: 'black'}}>
        Your side of the bet
      </Text>
      <View
        style={[
          {
            backgroundColor: 'white',
            elevation: 4,
            height: '30%',
            marginHorizontal: 15,
            width: '90%',
            marginTop: 20,
            borderRadius: 10,
          },
          {borderWidth: 5, borderColor: 'black'},
        ]}>
        <TextInput
          multiline={true}
          numberOfLines={5}
          textAlignVertical={'top'}
          //   placeholder={'Email'}
          placeholderTextColor="white"
          value={sender_bet}
          onChangeText={text => {
            setsender_bet(text);
            // emailErr && setEmailErr('');
          }}
          style={{
            marginLeft: 15,
            fontFamily: 'Nunito-Regular',
            // backgroundColor: 'red',
            height: 150,
            fontSize: 16,
            color: 'black',
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateConseq', {sender_bet})}
        style={{
          alignItems: 'flex-end',
          // position: 'absolute',
          width: '100%',
          right: 15,
          // bottom: 20,
        }}>
        <Icon name="arrowright" color={'black'} size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default MySideBet;
