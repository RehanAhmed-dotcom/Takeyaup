import React, {useState} from 'react';
import styles from './style';
import ImagePicker from 'react-native-image-crop-picker';
import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  Modal,
  ActivityIndicator,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {register} from '../../../lib/api';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {logged} from '../../../redux/actions';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [pic, setPic] = useState('');
  const [select, setSelect] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [checkErr, setCheckErr] = useState('');
  const [firstname, setFirstname] = useState('');
  const [firstnameErr, setFirstnameErr] = useState('');
  const [lastname, setLastname] = useState('');
  const [lastnameErr, setLastnameErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [dateErr, setDateErr] = useState('');
  const [confirm, setConfirm] = useState('');
  const [confirmErr, setConfirmErr] = useState('');
  const [location, setLocation] = useState('');
  const [locationErr, setLocationErr] = useState('');
  const [about, setAbout] = useState('');
  const USER = useSelector(({USER}) => USER);
  const {fcmtoken: fcm_token} = USER;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [dob, setDob] = useState('');
  console.log('fcm', pic);
  // const [terms,setTerms ] = useState('');
  const validateEmail = emailC => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      emailC.replace(/\s/g, ''),
    );
  };
  const Wrapper = Platform.OS === 'ios' ? KeyboardAvoidingView : View;
  const chosePic = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setPic(image.path);
      //   console.log(image);
    });
  };
  const myModal = () => (
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
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  function isOverEighteen(year, month, day) {
    var now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ''));
    var dob = year * 10000 + month * 100 + day * 1; // Coerces strings to integers

    return now - dob > 180000;
  }
  const handleConfirm = date => {
    // console.warn("A date has been picked: ", date);
    setDate(moment(date).format('YYYY-MM-DD'));
    setDob(moment(date).format('YYYY-MM-DD'));
    setDateErr('');
    // console.log('abc', isOverEighteen());
    hideDatePicker();
  };
  // console.log(
  //   'abc',
  //   isOverEighteen(
  //     dob.substring(0, 4),
  //     dob.substring(5, 7),
  //     dob.substring(7, 9),
  //   ),
  // );
  // console.log('dob', dob.substring(5, 7));
  return (
    <Wrapper behavior="padding" style={styles.main}>
      <View style={styles.firstView}></View>
      <ScrollView>
        <View style={styles.secondView}>
          <Text style={styles.signUpText}>Sign Up</Text>
          <TouchableOpacity onPress={chosePic} style={styles.imageView}>
            <Image
              source={pic ? {uri: pic} : require('../../../Images/user.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <View style={styles.bottom}>
            <View
              style={[
                styles.inputView,
                {
                  borderWidth: 5,
                  borderColor: firstnameErr ? 'red' : 'black',
                },
              ]}>
              <TextInput
                value={firstname}
                onChangeText={text => {
                  setFirstname(text);
                  firstnameErr && setFirstnameErr('');
                }}
                placeholder={'Username'}
                placeholderTextColor="black"
                style={[styles.placeholder]}
              />
            </View>

            <View
              style={[
                styles.inputView,
                {
                  borderWidth: 5,
                  borderColor: emailErr ? 'red' : 'black',
                },
              ]}>
              <TextInput
                value={email}
                onChangeText={text => {
                  setEmail(text);
                  emailErr && setEmailErr('');
                }}
                placeholder={'Email'}
                placeholderTextColor="black"
                style={[styles.placeholder]}
              />
            </View>
            <View
              style={[
                styles.inputView,
                {
                  borderWidth: 5,
                  borderColor: passwordErr ? 'red' : 'black',
                },
              ]}>
              <TextInput
                placeholder={'Password'}
                placeholderTextColor="black"
                secureTextEntry
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  passwordErr && setPasswordErr('');
                }}
                style={[styles.placeholder]}
              />
            </View>
            <View
              style={[
                styles.inputView,
                {
                  borderWidth: 5,
                  borderColor: confirmErr ? 'red' : 'black',
                },
              ]}>
              <TextInput
                secureTextEntry
                value={confirm}
                onChangeText={text => {
                  setConfirm(text);
                  confirmErr && setConfirmErr('');
                }}
                placeholder={'Confirm Password'}
                placeholderTextColor="black"
                style={[styles.placeholder]}
              />
            </View>
            <TouchableOpacity
              onPress={() => showDatePicker()}
              style={{
                height: 50,
                borderWidth: 5,
                borderColor: dateErr ? 'red' : 'black',
                width: '90%',
                paddingHorizontal: 10,
                // color: 'black',
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: 10,
              }}>
              <Text>{date ? date : 'Enter Date of birth'}</Text>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => navigation.navigate('TabNavigator')}
              onPress={() => {
                if (
                  firstname &&
                  // lastname &&
                  validateEmail(email) &&
                  password.length >= 6 &&
                  confirm.length >= 6 &&
                  isOverEighteen(
                    dob.substring(0, 4),
                    dob.substring(5, 7),
                    dob.substring(7, 9),
                  )
                  // select &&
                  // location
                ) {
                  if (password != confirm) {
                    setPasswordErr('asd');
                    setConfirmErr('asd');
                  } else {
                    setShowModal(true);
                    const data = new FormData();
                    data.append('username', firstname);
                    // data.append('last_name', lastname);
                    data.append('email', email);
                    data.append('password', password);
                    data.append('password_confirmation', confirm);
                    // data.append('location', location);
                    // data.append('about', about);
                    // data.append('device_token', fcm_token);
                    data.append('dob', date);
                    {
                      pic &&
                        data.append('image', {
                          uri: pic,
                          type: 'image/jpeg',
                          name: `image${new Date()}.jpg`,
                        });
                    }
                    register(data).then(res => {
                      console.log(res);
                      if (res) {
                        if (res.status == 'success') {
                          setShowModal(false);
                          logged(res)(dispatch);
                        } else {
                          // Alert.alert(res.message);
                          if (
                            res.message.email[0] ==
                            'The email has already been taken.'
                          ) {
                            setShowModal(false);
                            Alert.alert('Email not avalible');
                          }
                        }
                      } else {
                        setShowModal(false);
                        Alert.alert('Something went wrong');
                      }
                    });
                    // navigation.navigate('TabNavigator');
                  }
                } else {
                  if (
                    !firstname &&
                    // !lastname &&
                    !validateEmail(email) &&
                    !password &&
                    !confirm &&
                    !date
                    // !select &&
                    // !location
                  ) {
                    setFirstnameErr('asd');
                    // setLastnameErr('asd');
                    setEmailErr('asd');
                    setDateErr('asd');
                    setPasswordErr('asd');
                    setConfirmErr('asd');
                    // setCheckErr('asd');
                    // setLocationErr('asd');
                  } else if (password != confirm) {
                    setPasswordErr('asd');
                    setConfirmErr('asd');
                  } else if (!firstname) {
                    setFirstnameErr('asd');
                  }
                  // else if (!lastname) {
                  //   setLastnameErr('asd');
                  // }
                  else if (!validateEmail(email)) {
                    setEmailErr('asd');
                  } else if (!password) {
                    setPasswordErr('asd');
                  } else if (!confirm) {
                    setEmailErr('asd');
                  } else if (!date) {
                    setDateErr('asd');
                  } else if (
                    !isOverEighteen(
                      dob.substring(0, 4),
                      dob.substring(5, 7),
                      dob.substring(7, 9),
                    )
                  ) {
                    Alert.alert('User should be 18+ to register');
                  }
                  // else if (!location) {
                  //   setLocationErr('asd');
                  // }
                  else if (password.length < 6) {
                    setPasswordErr('asd');
                  } else if (confirm.length < 6) {
                    setConfirmErr('asd');
                  }
                }
              }}
              style={styles.loginButton}>
              <Text style={styles.white}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signUpView}>
              <Text style={styles.already}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.red}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.empty} />
          </View>
        </View>
      </ScrollView>
      {myModal()}
    </Wrapper>
  );
};

export default SignUp;
