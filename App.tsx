import React, {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {fcm} from './src/redux/actions';
import {Store, persistor} from './src/redux/store';
import Root from './src/Navigator/root';
// import PushNotification from 'react-native-push-notification';
// import {PersistGate} from 'redux-persist/integration/react';
// import messaging from '@react-native-firebase/messaging';
const App = () => {
  // useEffect(() => {
  //   getToken();
  //   getNotifications();
  //   _createChannel();
  // }, []);
  // useEffect(() => {
  //   // const {USER} = Store.getState();
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     // const newNotification = { id: "2", ...remoteMessage };
  //     console.log('A new FCM message', JSON.stringify(remoteMessage));
  //   });
  //   // console.log('userdat2', USER?.userData?.userdata.api_token);
  //   return unsubscribe;
  // }, []);
  // const getToken = async () => {
  //   // const {USER} = Store.getState();
  //   let fcmToken = await messaging().getToken();

  //   // updateToken({Auth: USER.userData.userdata.api_token, fcm_token: token});

  //   // fcmToken = await messaging().;
  //   console.log('fcmToken getting inside messaging', JSON.stringify(fcmToken));
  //   if (fcmToken) {
  //     try {
  //       Store.dispatch(fcm(fcmToken));
  //     } catch (e) {
  //       console.log('errRRR', e);
  //     }
  //     // await AsyncStorage.setItem('fcmToken', fcmToken);
  //   }
  //   // messaging().onTokenRefresh(token => {
  //   //   const {USER} = Store.getState();
  //   //   console.log('object', USER.userData.userdata.api_token);
  //   //   updateToken({Auth: USER.userData.userdata.api_token, fcm_token: token});
  //   //   // updateToken({fcm_token: token, Auth: USER.userData.userdata.api_token});
  //   //   console.log('onTokenRefresh', token);
  //   //   console.log('user', USER.userData.userdata.api_token);
  //   // });
  // };
  // const getNotifications = async () => {
  //   await messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //   });
  //   await messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //       }
  //     });
  // };
  // const _createChannel = () => {
  //   PushNotification.createChannel(
  //     {
  //       channelId: 'fcm_fallback_notification_channel', // (required)
  //       channelName: 'fcm_fallback_notification_channel', // (required)
  //       channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
  //       soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
  //       importance: 4, // (optional) default: 4. Int value of the Android notification importance
  //       vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  //     },
  //     created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  //   );
  // };

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};
export default App;
