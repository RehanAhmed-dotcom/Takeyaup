import React, {useState} from 'react';
import {
  View,
  Image,
  Modal,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  Text,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {login, enterEmail, otp, newPassword} from '../../../lib/api';
import {logged} from '../../../redux/actions';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {useDispatch} from 'react-redux';
import inputField from '../../../Components/inputField';
const height = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [username, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [emailErr, setEmailErr] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [forgotMail, setForgotMail] = useState('');
  const [forgotMailErr, setForgotMailErr] = useState('');
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [codeErr, setCodeErr] = useState('');
  const [forgotPass, setForgotPass] = useState('');
  const [forgotPassErr, setForgotPassErr] = useState('');
  const [confirm, setConfirm] = useState('');
  const [confirmErr, setConfirmErr] = useState('');
  const validateEmail = emailC => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      emailC.replace(/\s/g, ''),
    );
  };
  // console.log('length', value.length);
  const Wrapper = Platform.OS == 'ios' ? KeyboardAvoidingView : View;
  const myModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        //    Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}>
      <Wrapper behavior={'padding'} style={styles.modalView}>
        <View style={[styles.forgotView, {}]}>
          <View style={styles.topView}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Icon name="arrowleft" size={20} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.left}>Forget Password</Text>
          </View>
          <Text style={styles.normalText}>
            Enter your email for the verification process. We will send 4 digits
            code to your email.
          </Text>
          <View style={styles.enterMail}>
            <View
              style={[
                styles.mail,
                {
                  borderWidth: 5,
                  borderColor: forgotMailErr ? 'red' : 'black',
                },
              ]}>
              <TextInput
                placeholder={'Enter Mail'}
                placeholderTextColor="black"
                value={forgotMail}
                onChangeText={text => {
                  setForgotMail(text);
                  forgotMailErr && setForgotMailErr('');
                }}
                // placeholderTextColor={'grey'}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                if (validateEmail(forgotMail)) {
                  setShowModal(true);
                  enterEmail({email: forgotMail}).then(res => {
                    console.log('r', res);
                    if (res) {
                      if (res.status == 'success') {
                        setShowModal(false);
                        setModalVisible(!modalVisible);
                        setModalVisible1(!modalVisible1);
                      }
                    } else {
                      setShowModal(false);
                      setForgotMailErr('asd');
                    }
                  });
                } else {
                  setForgotMailErr('asd');
                }
              }}
              style={styles.sendEmail}>
              <Text style={styles.white}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Wrapper>
    </Modal>
  );
  const myModal1 = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible1}
      onRequestClose={() => {
        //    Alert.alert("Modal has been closed.");
        setModalVisible1(!modalVisible1);
      }}>
      <Wrapper behavior="padding" style={styles.modalView}>
        <View style={styles.forgotView}>
          <View style={styles.topView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible1(!modalVisible1);
                setModalVisible(!modalVisible);
              }}>
              <Icon name="arrowleft" color="black" size={20} />
            </TouchableOpacity>
            <Text style={styles.left}>Enter 4 digits code</Text>
          </View>
          <Text style={styles.normalText}>
            Enter 4 digits code that you received on your emial.
          </Text>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={text => {
              setValue(text);
              codeErr && setCodeErr('');
            }}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[
                  styles.cell,
                  {
                    borderWidth: 3,
                    borderColor: codeErr ? 'red' : 'black',
                  },
                  isFocused && styles.focusCell,
                ]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <View></View>
          <TouchableOpacity
            onPress={() => {
              if (value.length == 4) {
                setShowModal(true);
                otp({token: value}).then(res => {
                  console.log('res', res);
                  if (res) {
                    if (res.status == 'success') {
                      setShowModal(false);
                      setModalVisible1(!modalVisible1);
                      setModalVisible2(!modalVisible2);
                    }
                  } else {
                    setShowModal(false);
                    setCodeErr('asd');
                    // setShowModal(false);
                    // setModalVisible1(!modalVisible1);
                    // setModalVisible2(!modalVisible2);
                  }
                });
              } else {
                setCodeErr('asd');
              }
            }}
            style={styles.sendEmail1}>
            <Text style={styles.white}>Send</Text>
          </TouchableOpacity>
        </View>
      </Wrapper>
    </Modal>
  );
  const myModal2 = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible2}
      onRequestClose={() => {
        //    Alert.alert("Modal has been closed.");
        setModalVisible2(!modalVisible2);
      }}>
      <Wrapper behavior="padding" style={styles.modalView}>
        <View style={styles.forgotView}>
          <View style={styles.topView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible2(!modalVisible2);
                setModalVisible1(!modalVisible1);
              }}>
              <Icon name="arrowleft" color="black" size={20} />
            </TouchableOpacity>
            <Text style={styles.left}>Forget Password</Text>
          </View>
          <Text style={styles.normalText}>Please enter your new password</Text>
          <View style={styles.enterMail}>
            <View
              style={[
                styles.mail,
                {
                  borderWidth: 5,
                  borderColor: forgotPassErr ? 'red' : 'grey',
                },
              ]}>
              <TextInput
                placeholder={'New Password'}
                value={forgotPass}
                secureTextEntry
                onChangeText={text => {
                  setForgotPass(text);
                  forgotPassErr && setForgotPassErr('');
                }}
                placeholderTextColor={'black'}
                style={styles.input}
              />
            </View>
            <View style={styles.empty} />
            <View
              style={[
                styles.mail,
                {
                  borderWidth: 5,
                  borderColor: confirmErr ? 'red' : 'grey',
                },
              ]}>
              <TextInput
                placeholder={'Confirm New Password'}
                value={confirm}
                secureTextEntry
                onChangeText={text => {
                  setConfirm(text);
                  confirmErr && setConfirmErr('');
                }}
                placeholderTextColor={'black'}
                style={styles.input}
              />
            </View>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                if (forgotPass.length > 5 && confirm.length > 5) {
                  if (forgotPass != confirm) {
                    setForgotPassErr('asd');
                    setConfirmErr('asd');
                  } else {
                    setShowModal(true);
                    newPassword({
                      email: forgotMail,
                      password: forgotPass,
                      confirm_password: confirm,
                      token: value,
                    }).then(res => {
                      if (res) {
                        if (res.status == 'success') {
                          setShowModal(false);
                          setModalVisible2(!modalVisible2);
                        }
                      } else {
                        setShowModal(false);
                        Alert.alert('Some thing went wrong');
                      }
                    });
                    //
                  }
                } else {
                  if (!forgotPass && !confirm) {
                    setForgotPassErr('asd');
                    setConfirmErr('asd');
                  } else if (forgotPass != confirm) {
                    setForgotPassErr('asd');
                    setConfirmErr('asd');
                  } else if (!forgotPass) {
                    setForgotPassErr('asd');
                  } else if (!confirm) {
                    setConfirmErr('asd');
                  }
                }
              }}
              style={styles.sendEmail}>
              <Text style={styles.white}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Wrapper>
    </Modal>
  );
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
    <SafeAreaView style={styles.mainView}>
      {/* <ImageBackground
        source={require('../../../Images/aa.png')}
        style={{height: '100%', width: '100%'}}> */}
      <View style={styles.secondView}>
        <Image
          source={require('../../../Images/takeup.png')}
          style={styles.image}
        />
        {/* <Text style={styles.red0}>Hi, Have a Nice Day!</Text> */}
      </View>
      <View style={styles.thirdView}>
        <Text style={styles.login}>Log In</Text>
        {/* <inputField placeholder={'Email'} /> */}
        <View style={styles.bottom}>
          <View
            style={[
              styles.inputView,
              {borderWidth: 5, borderColor: emailErr ? 'red' : 'black'},
            ]}>
            <TextInput
              placeholder={'Username'}
              placeholderTextColor="black"
              value={username}
              onChangeText={text => {
                setEmail(text);
                emailErr && setEmailErr('');
              }}
              style={styles.placeholder}
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
              style={styles.placeholder}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.forgot}>
          <Text style={styles.red1}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => navigation.navigate('TabNavigator')}
          onPress={() => {
            //
            if (username && password) {
              setShowModal(true);
              login({username, password}).then(res => {
                console.log(res);
                if (res) {
                  if (res.status == 'success') {
                    setShowModal(false);
                    logged(res)(dispatch);
                  } else {
                    setShowModal(false);
                    Alert.alert(res.message[0]);
                  }
                } else {
                  setShowModal(false);
                  Alert.alert("Credentials doesn't match");
                }
              });
              // navigation.navigate('TabNavigator');
            } else {
              if (!username && !password) {
                setEmailErr('asd');
                setPasswordErr('asd');
              } else if (!username) {
                setEmailErr('asd');
              } else if (!password) {
                setPasswordErr('asd');
              }
            }
          }}
          style={styles.loginButton}>
          <Text style={styles.white}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.signUpView}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontFamily: 'Nunito-Regular',
            }}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.red}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      {myModal()}
      {myModal1()}
      {myModal2()}
      {myModal3()}
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};
export default Login;
