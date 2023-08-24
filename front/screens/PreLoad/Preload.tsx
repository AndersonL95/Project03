import React, {useState, useEffect} from 'react'
import { Container, BackgroundImage, ImageGif, LoadingIcon} from './style.js';
import Background from '../../assets/background.png'
import Animation1 from '../../assets/animation1.gif';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { stackTypes } from '../../stacks/mainStack.js';
import { InforData } from '../../api/ServiceApi'
import { useAuth } from '../../api/Auth';



export default function Preload() {
  const navigation = useNavigation<stackTypes>();
  const[load, setLoad] = useState(false);
  const {refreshToken} = useAuth();

  useEffect(() =>{
    const checkToken = async() =>{
      const cargo:any = await AsyncStorage.getItem('role');
      console.log(cargo);

      const token = await AsyncStorage.getItem('projectToken');
      if(token) {
            if(cargo === 'admin'){
              navigation.reset({
                  index: 1,
                  routes: [
                    {
                      name: 'AdminTab'
                    }
                  ]
                })
            }else{
                navigation.reset({
                    index: 1,
                    routes: [
                      {
                        name: 'MainTab', 
            
                      },
                    ],
                  }) 
            }
        
        
        /*setTimeout(() => {
          setLoad(true);
          navigation.navigate('Login')
        }, 3000);*/
        
        
      
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