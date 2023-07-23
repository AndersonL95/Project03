import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import { MyTabBar } from '../components/BottomTab/CustomTabBar';
import News from '../screens/News/news';
import Students from '../screens/Students/students';
import Profile from '../screens/Profile/profile';


export interface AppParamList {
  Home: undefined;
  
}
const Tab = createBottomTabNavigator();


const MainTab = () => {
  return (
    <Tab.Navigator tabBar={props=><MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Student" component={Students} />
        <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  )
}

export default MainTab