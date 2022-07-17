import React, {useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const CreateConseq = ({navigation, route}) => {
  // const name = route?.params?.name;
  const {sender_bet} = route.params;
  const [loser_task, setloser_task] = useState('');
  const [loser, setLoser] = useState('');
  const Wrapper = Platform.OS == 'ios' ? KeyboardAvoidingView : View;
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
      <Wrapper behavior={'padding'}>
        <ScrollView>
          <View style={{marginHorizontal: 15, flex: 1}}>
            <Text
              style={{
                marginTop: 30,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Create a Bet
            </Text>
            <Text style={{marginTop: 30, fontSize: 18, color: 'black'}}>
              The Stakes
            </Text>
            <View
              style={[
                {
                  backgroundColor: 'white',
                  elevation: 4,
                  height: '15%',
                  width: '100%',
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
                placeholderTextColor="black"
                value={loser_task}
                onChangeText={text => {
                  setloser_task(text);
                  setLoser(text);
                  // emailErr && setEmailErr('');
                }}
                style={{
                  marginLeft: 15,
                  fontFamily: 'Nunito-Regular',
                  // backgroundColor: 'red',
                  height: 80,
                  fontSize: 16,
                  color: 'black',
                }}
              />
            </View>
            <Text style={{fontSize: 18, color: 'black', marginTop: 20}}>
              Suggested Stakes
            </Text>
            <TouchableOpacity
              onPress={() =>
                setloser_task(
                  'Loser must share their lost bet on their Instagram story.',
                )
              }
              style={{
                height: 90,
                borderWidth: 5,
                marginTop: 10,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: 'black',
              }}>
              <View style={{width: '80%'}}>
                <Text>
                  Loser must share their lost bet on their Instagram story.
                </Text>
              </View>
              <View>
                <Image
                  source={require('../../../../Images/instagrom.png')}
                  style={{height: 50, borderRadius: 5, width: 50}}
                />
                {/* <Text>20% off</Text> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setloser_task(`Tweet a message of respect for the winner.`)
              }
              style={{
                height: 90,
                borderWidth: 5,
                marginTop: 10,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: 'black',
              }}>
              <View style={{width: '80%'}}>
                <Text style={{fontSize: 14}}>
                  Tweet a message of respect for the winner.
                </Text>
              </View>

              <View>
                <Image
                  resizeMode="contain"
                  source={require('../../../../Images/twi.png')}
                  style={{height: 50, borderRadius: 5, width: 50}}
                />
                {/* <Text>20% off</Text> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setloser_task(
                  `Winner directs a TikTok for the loser to perform.`,
                )
              }
              style={{
                height: 90,
                borderWidth: 5,
                marginTop: 10,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: 'black',
              }}>
              <View style={{width: '80%'}}>
                <Text>Winner directs a TikTok for the loser to perform.</Text>
              </View>
              <View>
                <Image
                  resizeMode="contain"
                  source={require('../../../../Images/Toktok.png')}
                  style={{height: 50, borderRadius: 5, width: 50}}
                />
                {/* <Text>20% off</Text> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setloser_task(`Donate $5 to charity of winner's choice.`)
              }
              style={{
                height: 90,
                borderWidth: 5,
                marginTop: 10,
                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderColor: 'black',
              }}>
              <View style={{width: '80%'}}>
                <Text>Donate $5 to charity of winner's choice.</Text>
              </View>
              <View>
                <Image
                  resizeMode="contain"
                  source={require('../../../../Images/dont.png')}
                  style={{height: 50, borderRadius: 5, width: 50}}
                />
                {/* <Text>20% off</Text> */}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('NewPost', {
                  loser_task,
                  // receiver_bet,
                  // receiver_id,
                  sender_bet,
                  // name,
                })
              }
              style={{
                alignItems: 'flex-end',
                // position: 'absolute',
                marginBottom: 20,
                // bottom: 10,
                // backgroundColor: 'red',
                width: '100%',
              }}>
              <Icon name="arrowright" color={'black'} size={30} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Wrapper>
    </SafeAreaView>
  );
};
export default CreateConseq;
