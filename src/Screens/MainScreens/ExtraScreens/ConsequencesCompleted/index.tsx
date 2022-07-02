import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';

import Icon4 from 'react-native-vector-icons/AntDesign';
const ConsequencesCompleted = ({navigation, route}) => {
  const {item} = route.params;
  console.log('item', item);
  return (
    <View style={{flex: 1, backgroundColor: '#191A19', paddingHorizontal: 15}}>
      {/* <Text style={{fontSize: 20, marginTop: 30, color: '#50D240'}}>
        Consequences
      </Text> */}

      <View style={{height: '20%', width: '100%', justifyContent: 'center'}}>
        {/* <Image
          source={require('../../../../Images/girl.jpg')}
          style={{height: '100%', width: '100%', marginTop: 30}}
        /> */}
        {/* <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#50D240',
            marginLeft: 20,
          }}>
          Pending...
        </Text> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('CompleteBet', {item})}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#50D240',
            marginTop: 30,
            height: 50,
            width: 200,
            marginLeft: 30,
            borderRadius: 30,
          }}>
          <Text style={{fontSize: 18}}>COMPLETE</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 30,
          color: '#50D240',
        }}>
        Comments
      </Text>
      <View
        style={[
          {
            backgroundColor: '#191A19',
            elevation: 4,
            height: 250,
            width: '90%',
            marginTop: 20,
            borderRadius: 10,
          },
          {borderWidth: 5, borderColor: 'grey'},
        ]}>
        <TextInput
          //   placeholder={'Email'}
          placeholderTextColor="white"
          //   value={email}
          //   onChangeText={text => {
          //     setEmail(text);
          //     emailErr && setEmailErr('');
          //   }}
          style={{
            marginLeft: 15,
            fontFamily: 'Nunito-Regular',
            fontSize: 16,
            color: 'white',
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{alignItems: 'flex-start', marginTop: 50}}>
        <Icon4 name="arrowleft" color={'#50D240'} size={30} />
      </TouchableOpacity>
    </View>
  );
};
export default ConsequencesCompleted;
