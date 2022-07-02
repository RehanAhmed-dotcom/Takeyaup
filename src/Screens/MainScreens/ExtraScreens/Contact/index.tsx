import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Linking,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

const contact = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 15}}>
        <Icon
          name="arrowleft"
          size={20}
          onPress={() => navigation.goBack()}
          color={'black'}
          style={{marginTop: 20}}
        />
        <Text
          style={{
            marginTop: 30,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Contact Us
        </Text>
        {/* <Text style={{marginTop: 30, fontSize: 18, color: 'black'}}>
        Your side of the bet
      </Text> */}
        <View style={{marginTop: 20}}>
          <Text style={{marginTop: 0, fontSize: 16, fontWeight: 'bold'}}>
            Social Media:
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL('@takeyaup')}>
            <Text>@takeyaup</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{marginTop: 0, fontSize: 16, fontWeight: 'bold'}}>
            Questions:
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('info@takeyaup.com')}>
            <Text>info@takeyaup.com</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{marginTop: 0, fontSize: 16, fontWeight: 'bold'}}>
            Report Wrongdoing:
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('courthouse@takeyaup.com')}>
            <Text>courthouse@takeyaup.com</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default contact;
