import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import PushNotification from 'react-native-push-notification';
// import messaging from '@react-native-firebase/messaging';
// import PushNotificationConfig from './src/config/PushNotificationConfig';
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the background! inside index', remoteMessage);
//   PushNotification.localNotification(remoteMessage);
// });
// PushNotificationConfig.congigurations();
AppRegistry.registerComponent(appName, () => App);
