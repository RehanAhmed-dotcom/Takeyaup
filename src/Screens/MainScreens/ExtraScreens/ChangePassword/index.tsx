import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {changePassword} from '../../../../lib/api';
import {useSelector} from 'react-redux';
const ChangePassword = ({navigation}) => {
  const {userData} = useSelector(({USER}) => USER);
  const [old, setOld] = useState('');
  const [oldErr, setOldErr] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newErr, setNewErr] = useState('');
  const [confrim, setConfirm] = useState('');
  const [confirmErr, setConfirmErr] = useState('');

  return (
    <SafeAreaView style={styles.main}>
      {/* <ImageBackground
        source={require('../../../../Images/aa.png')}
        style={styles.background}> */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.firstText}>Change Password</Text>
      </View>
      <View style={styles.secondView}>
        <View style={styles.card}>
          <Text style={styles.enter}>
            Please enter current and new password to update.
          </Text>
          <View style={styles.empty} />
          <View
            style={[
              styles.inputView,
              {borderWidth: 5, borderColor: oldErr ? '#FF4029' : 'black'},
            ]}>
            <TextInput
              placeholder={'Old Password'}
              placeholderTextColor={'#B4B4B4'}
              value={old}
              secureTextEntry
              onChangeText={text => {
                setOld(text);
                oldErr && setOldErr('');
              }}
              style={styles.inputs}
            />
          </View>
          <View
            style={[
              styles.inputView,
              {borderWidth: 5, borderColor: newErr ? '#FF4029' : 'black'},
            ]}>
            <TextInput
              placeholder={'New Password'}
              placeholderTextColor={'#B4B4B4'}
              style={styles.inputs}
              secureTextEntry
              value={newPassword}
              onChangeText={text => {
                setNewPassword(text);
                newErr && setNewErr('');
              }}
            />
          </View>
          <View
            style={[
              styles.inputView,
              {
                borderWidth: 5,
                borderColor: confirmErr ? '#FF4029' : 'black',
              },
            ]}>
            <TextInput
              placeholder={'Confirm New Password'}
              placeholderTextColor={'#B4B4B4'}
              style={styles.inputs}
              secureTextEntry
              value={confrim}
              onChangeText={text => {
                setConfirm(text);
                confirmErr && setConfirmErr('');
              }}
            />
          </View>
          <View style={styles.empty} />
          <TouchableOpacity
            onPress={() => {
              if (old && newPassword.length > 5 && confrim.length > 5) {
                if (newPassword != confrim) {
                  setNewErr('asd');
                  setConfirmErr('asd');
                } else {
                  changePassword({
                    Auth: userData.token,
                    old_password: old,
                    password: newPassword,
                    password_confirmation: confrim,
                  }).then(res => {
                    console.log('res', res);
                    if (res) {
                      if (res.status == 'success') {
                        navigation.navigate('Home');
                      } else {
                        Alert.alert("Old password doesn't matched");
                      }
                    } else {
                      Alert.alert('Something went wrong');
                    }
                  });
                }
              } else {
                if (!old && !newPassword && !confrim) {
                  setOldErr('asd');
                  setNewErr('asd');
                  setConfirmErr('asd');
                } else if (!old) {
                  setOldErr('asd');
                } else if (!newPassword) {
                  setNewErr('asd');
                } else if (!confrim) {
                  setConfirmErr('asd');
                } else if (newPassword != confrim) {
                  setNewErr('asd');
                  setConfirmErr('asd');
                }
              }
            }}
            style={styles.button}>
            <Text style={styles.update}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};
export default ChangePassword;
