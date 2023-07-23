import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeAdm/Home';
import News from '../screens/NewsAdm/news';
import Students from '../screens/StudentsAdm/students';
import Profile from '../screens/ProfileAdm/profile';
import { MyTabBar } from '../components/BottomTab/CustomTabBarAdmin';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'; 
import { ParamsData, stackTypes } from './mainStack';
import { dataInfo } from '../api/ApiService';

export type AppParamList ={
  Home: undefined;
  //Profile:{id:number,name:string,email:string,cargo:string,verified:boolean,password:string}
  
}

const Tab = createBottomTabNavigator();
const MainAdmTab = () => {
  const route = useRoute<ParamsData>()
  const id = route.params?.id
  const name = route.params?.name
  const email = route.params?.email
  const cargo = route.params?.cargo
  const verified = route.params?.verified
  return (
    <Tab.Navigator tabBar={props=><MyTabBar {...props} />}>
        <Tab.Screen name="HomeAdmin" component={Home} />
        <Tab.Screen name="NewsAdmin" component={News} />
        <Tab.Screen name="StudentAdmin" component={Students} />
        <Tab.Screen name="ProfileAdmin" component={Profile} initialParams={{id,name,email,cargo,verified}}/>

    </Tab.Navigator>
  )
}

export default MainAdmTab