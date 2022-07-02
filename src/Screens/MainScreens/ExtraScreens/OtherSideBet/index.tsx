import React, {useState} from 'react';

import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const OtherSideBet = ({navigation, route}) => {
  const {receiver_id, sender_bet} = route.params;
  const name = route?.params?.name;
  const [receiver_bet, setreceiver_bet] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#191A19', paddingHorizontal: 15}}>
      <Text
        style={{
          marginTop: 30,
          fontSize: 20,
          fontWeight: 'bold',
          color: '#50D240',
        }}>
        Create a Bet
      </Text>
      <Text style={{marginTop: 30, fontSize: 18, color: '#50D240'}}>
        Their side of the bet
      </Text>
      <View
        style={[
          {
            backgroundColor: '#191A19',
            elevation: 4,
            height: '70%',
            width: '100%',
            marginTop: 20,
            borderRadius: 10,
          },
          {borderWidth: 5, borderColor: 'grey'},
        ]}>
        <TextInput
          multiline={true}
          numberOfLines={5}
          textAlignVertical={'top'}
          //   placeholder={'Email'}
          placeholderTextColor="white"
          value={receiver_bet}
          onChangeText={text => {
            setreceiver_bet(text);
            // emailErr && setEmailErr('');
          }}
          style={{
            marginLeft: 15,
            fontFamily: 'Nunito-Regular',
            fontSize: 16,
            color: 'white',
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CreateConseq', {
            receiver_bet,
            name,
            receiver_id,
            sender_bet,
          })
        }
        style={{
          alignItems: 'flex-end',
          position: 'absolute',
          width: '100%',
          bottom: 20,
        }}>
        <Icon name="arrowright" color={'#50D240'} size={30} />
      </TouchableOpacity>
    </View>
  );
};
export default OtherSideBet;
