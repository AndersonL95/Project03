import { View, Text, ImageBackground } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Container, BackgroundImage, ImageGif, LoadingIcon} from './style.js';
import Background from '../../assets/background.png'
import Animation1 from '../../assets/animation1.gif';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { stackTypes } from '../../stacks/mainStack.js';


export default function Preload() {

  const navigation = useNavigation<stackTypes>();
  const[load, setLoad] = useState(false);

  useEffect(() =>{
    const checkToken = async() =>{
      const token = await AsyncStorage.getItem('checkToken');
      if(token) {

        
      }else {
        setTimeout(() => {
          setLoad(true);
          navigation.navigate('Login')
        }, 3000);
        
        
      }
    }
    checkToken()
  },[setTimeout])
  return (
    <Container>
        <BackgroundImage source={Background}>
            <ImageGif source={Animation1}/>
            <LoadingIcon size="large" color="#FF0000"/>
        </BackgroundImage>
        
        
    </Container>
  )
}