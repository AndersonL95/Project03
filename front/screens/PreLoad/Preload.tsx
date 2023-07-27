import React, {useState, useEffect} from 'react'
import { Container, BackgroundImage, ImageGif, LoadingIcon} from './style.js';
import Background from '../../assets/background.png'
import Animation1 from '../../assets/animation1.gif';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { stackTypes } from '../../stacks/mainStack.js';
import { InforData } from '../../api/ServiceApi'



export default function Preload() {
  const navigation = useNavigation<stackTypes>();
  const[load, setLoad] = useState(false);

  useEffect(() =>{
    const checkToken = async() =>{
      const token = await AsyncStorage.getItem('projectToken');
      if(token) {

      /*  await InforData()
        .then((data)=>{
            //console.log("MEUS DADOS: ",data.user.cargo)
            if(data.user.cargo === 'admin'){
                
                navigation.push('AdminTab',{
                    id: data.user._id ,
                    name: data.user.name,
                    email: data.user.email,
                    cargo: data.user.cargo,
                    verified: data.user.verified,
                    password: data.user.password,
                    picture: data.user.picture
                })
            }else{
                navigation.reset({
                    index: 1,
                    routes: [
                      {
                        name: 'MainTab', 
                        params:{
                            id: data.user._id,
                            name:data.user.name,
                            email:data.user.email,
                            cargo: data.user.cargo,
                            verified: data.user.verified,
                            password: data.user.password

                         } 
                      },
                    ],
                  }) 
            }
        })
        */
        setTimeout(() => {
          setLoad(true);
          navigation.navigate('Login')
        }, 3000);
        
        
      
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