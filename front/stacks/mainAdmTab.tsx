import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeAdm/Home';
import News from '../screens/NewsAdm/news';
import Students from '../screens/StudentsAdm/students';
import Profile from '../screens/ProfileAdm/profile';
import { MyTabBar } from '../components/BottomTab/CustomTabBarAdmin';
import {RouteProp, useRoute} from '@react-navigation/native'; 
import { ParamsData } from './mainStack';
import { Buffer } from "buffer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { InforData } from '../api/ServiceApi';


 type AppParamList ={
  HomeAdmin: undefined;
  ProfileAdmin: undefined,
  NewsAdmin: undefined,
  StudentAdmin: undefined

  //Profile:{id:number,name:string,email:string,cargo:string,verified:boolean,password:string}
  
}
export type stackTypes = StackNavigationProp<AppParamList>
const Tab = createBottomTabNavigator();
const MainAdmTab = () => {
  const [id, setId] = useState<number>();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [cargo,setCargo] = useState('');
  const [picture, setPicture] = useState<any>();
  const route = useRoute<ParamsData>()
  //const {id,name,email,cargo,verified} = route.params
  useEffect(()=>{
     const getData = async () =>{
      await InforData()
      .then((res)=>{
        setId(res.user._id);
        setName(res.user.name);
        setEmail(res.user.email);
        setCargo(res.user.cargo);
        setPicture(res.user.picture);
        var buffer = Buffer.from(res.user.picture.data).toString('base64'); 
        setPicture(buffer)
        AsyncStorage.setItem('profileImg', JSON.stringify(buffer))
      })
    }
    getData();
  },[])
  return (
    <Tab.Navigator
      tabBar={props=><MyTabBar {...props}/>}
      screenOptions={{ headerShown:false}}
    >
        <Tab.Screen name="HomeAdmin" component={Home} />
        <Tab.Screen name="NewsAdmin" component={News} />
        <Tab.Screen name="StudentAdmin" component={Students} />
        <Tab.Screen name="ProfileAdmin" component={Profile} initialParams={{id,name,email,cargo}} />

    </Tab.Navigator>
  )
}

export default MainAdmTab