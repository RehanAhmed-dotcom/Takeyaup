import React from 'react';
import {View, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewPost from '../../Screens/MainScreens/TabScreens/NewPost';
import Search from '../../Screens/MainScreens/TabScreens/Search';
import Home from '../../Screens/MainScreens/TabScreens/Home';
import Setting from '../../Screens/MainScreens/TabScreens/Setting';
import Profile from '../../Screens/MainScreens/TabScreens/Profile';
import Icon from 'react-native-vector-icons/Entypo';
import MySideBet from '../../Screens/MainScreens/ExtraScreens/MySideBet';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Open from '../../Screens/MainScreens/TabScreens/Open';
import styles from './style';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          // position: 'absolute',
          height: 60,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.row}>
              <Icon
                name="home"
                size={20}
                color={focused ? 'black' : '#B4B4B4'}
              />
              {/* <Text
                style={[styles.text, {color: focused ? '#FF4029' : '#B4B4B4'}]}>
                Home
              </Text> */}
            </View>
          ),
          //   title: 'home',
          //   tabBarLabel: ({focused}) => (
          //     <Text style={{color: focused ? 'red' : 'blue'}}>abc</Text>
          //     // <View style={styles.row}>
          //     // <Icon
          //     //   name="home"
          //     //   size={20}
          //     //   color={focused ? '#FF4029' : '#B4B4B4'}
          //     // />
          //     // </View>
          //   ),
          // title:({})=>{

          // }
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.row}>
              <Icon3
                name="user-alt"
                size={20}
                color={focused ? 'black' : '#B4B4B4'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MySideBet"
        component={MySideBet}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.row}>
              <Icon
                name="plus"
                size={30}
                color={focused ? 'black' : '#B4B4B4'}
              />
              {/* <Text
                style={[styles.text, {color: focused ? '#FF4029' : '#B4B4B4'}]}>
                New
              </Text> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon2
                name="star"
                size={20}
                color={focused ? 'black' : '#B4B4B4'}
              />
              {/* <Text
                style={[styles.text, {color: focused ? '#FF4029' : '#B4B4B4'}]}>
                Profile
              </Text> */}
            </View>
          ),
          title: 'abc',
        }}
      />
      {/*  */}
    </Tab.Navigator>
  );
};
export default TabNavigator;
