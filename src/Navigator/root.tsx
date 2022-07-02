import 'react-native-gesture-handler';
import React, {useRef} from 'react';

import {View, Text} from 'react-native';

import Login from '../Screens/AuthScreens/Login';
import SignUp from '../Screens/AuthScreens/SignUp';
import Chat from '../Screens/MainScreens/ExtraScreens/Chat';

import Chats from '../Screens/MainScreens/ExtraScreens/Chats';
import ChangePassword from '../Screens/MainScreens/ExtraScreens/ChangePassword';
import Comments from '../Screens/MainScreens/ExtraScreens/Comments';
import EditProfile from '../Screens/MainScreens/ExtraScreens/EditProfile';
import Notifications from '../Screens/MainScreens/ExtraScreens/Notifications';
import PostDescription from '../Screens/MainScreens/ExtraScreens/PostDescription';
import UserProfile from '../Screens/MainScreens/ExtraScreens/UserProfile';
import PostDetails from '../Screens/MainScreens/ExtraScreens/PostDetails';
import Splash from '../Screens/AuthScreens/Splash';
import TabNavigator from '../Stacks/TabStack';
import MySideBet from '../Screens/MainScreens/ExtraScreens/MySideBet';
import Consequences from '../Screens/MainScreens/ExtraScreens/Consequences';
import {useSelector} from 'react-redux';
import pdf from '../Screens/MainScreens/ExtraScreens/pdf';
import {navigationRef} from '../config/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CreateConseq from '../Screens/MainScreens/ExtraScreens/CreateConseq';
import OtherSideBet from '../Screens/MainScreens/ExtraScreens/OtherSideBet';
const Stack = createStackNavigator();
import SelectCategory from '../Screens/MainScreens/ExtraScreens/SelectCategory';
import SendBet from '../Screens/MainScreens/ExtraScreens/SendBet';
import ConsequencesPending from '../Screens/MainScreens/ExtraScreens/ConsequencesPending';
import ConsequencesCompleted from '../Screens/MainScreens/ExtraScreens/ConsequencesCompleted';
import CompleteBet from '../Screens/MainScreens/ExtraScreens/CompleteBet';
import CompleteUpload from '../Screens/MainScreens/ExtraScreens/CompleteUpload';
import NewPost from '../Screens/MainScreens/TabScreens/NewPost';
import contact from '../Screens/MainScreens/ExtraScreens/Contact';
import Setting from '../Screens/MainScreens/TabScreens/Setting';
const Root = () => {
  const {isLoggedIn} = useSelector(({USER}) => USER);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Chats" component={Chats} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="NewPost" component={NewPost} />
            <Stack.Screen name="SendBet" component={SendBet} />
            <Stack.Screen name="pdf" component={pdf} />
            <Stack.Screen name="contact" component={contact} />
            <Stack.Screen name="SelectCategory" component={SelectCategory} />
            <Stack.Screen name="OtherSideBet" component={OtherSideBet} />
            <Stack.Screen name="CreateConseq" component={CreateConseq} />
            {/* <Stack.Screen name="MySideBet" component={MySideBet} /> */}
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Comments" component={Comments} />
            <Stack.Screen name="Consequences" component={Consequences} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="PostDescription" component={PostDescription} />
            <Stack.Screen
              name="ConsequencesPending"
              component={ConsequencesPending}
            />
            <Stack.Screen name="CompleteBet" component={CompleteBet} />
            <Stack.Screen
              name="ConsequencesCompleted"
              component={ConsequencesCompleted}
            />
            <Stack.Screen name="CompleteUpload" component={CompleteUpload} />
            {/* <Stack.Screen name="Search" component={Search} /> */}
            {/* <Stack.Screen name="Profile" component={Profile} /> */}
            {/* <Stack.Screen name="Home" component={Home} /> */}
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Splash" component={Splash} />

            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}

        {/* <Stack.Screen name="NewPost" component={NewPost} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Root;
