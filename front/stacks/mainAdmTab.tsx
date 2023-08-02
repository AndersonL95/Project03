import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeAdm/Home';
import News from '../screens/NewsAdm/news';
import Students from '../screens/StudentsAdm/students';
import Profile from '../screens/ProfileAdm/profile';
import { MyTabBar } from '../components/BottomTab/CustomTabBarAdmin';
import {useRoute} from '@react-navigation/native'; 
import { ParamsData } from './mainStack';
import { Buffer } from "buffer";


export type AppParamList ={
  Home: undefined;
  //Profile:{id:number,name:string,email:string,cargo:string,verified:boolean,password:string}
  
}

const Tab = createBottomTabNavigator();
const MainAdmTab = () => {
  
  const route = useRoute<ParamsData>()
  const {id,name,email,cargo,verified} = route.params
  const[picture,setPicture] = useState(route.params?.picture)
  useEffect(()=>{
    var buffer = Buffer.from(picture.data).toString('base64'); 
    setPicture(buffer)
  },[])
  return (
    <Tab.Navigator
      tabBar={props=><MyTabBar {...props}/>}
      screenOptions={{ headerShown:false}}
    >
        <Tab.Screen name="HomeAdmin" component={Home} />
        <Tab.Screen name="NewsAdmin" component={News} />
        <Tab.Screen name="StudentAdmin" component={Students} />
        <Tab.Screen name="ProfileAdmin" component={Profile} initialParams={{id,name,email,cargo,verified,picture}}/>

    </Tab.Navigator>
  )
}

export default MainAdmTab