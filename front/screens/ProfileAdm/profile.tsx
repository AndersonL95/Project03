import React, { useEffect, useState } from 'react'
import {ProfileContainer, TopSection, LogoutBtn, ImgUser, LogoutArea, UserName, UserEmail} from './styles'
import { Text } from 'react-native'
import { MyButton } from '../../components/Buttons/MyButton'
import { useAuth } from '../../api/Auth'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ParamsData, stackTypes } from '../../stacks/mainStack'
import UserImg from '../../assets/conta.png';
import "@react-native-anywhere/polyfill-base64";
import { Buffer } from "buffer";


const Profile = () => {
  const navigation = useNavigation<stackTypes>();
  const route = useRoute<ParamsData>()
  const id = route.params?.id
  const email = route.params?.email
  const userName = route.params?.name
  const picture = route.params?.picture
  const [images,setImages] = useState()
  const {logOut} = useAuth();

  const handleLogout = async() =>{
   await logOut()
   navigation.reset({
    index: 1,
    routes: [
      { name: 'Login' },
    ],
  })
}

  return (
    <ProfileContainer>
      <TopSection>
        <LogoutArea>
          <LogoutBtn
            title="Sair"
            onPress={handleLogout}    
          />
        </LogoutArea>
         <ImgUser source={{uri: picture ? `data:image/png;base64,${picture}`: ImgUser }}
        />
        <UserName>{userName}</UserName>
        <UserEmail>{email}</UserEmail>

      </TopSection>
    </ProfileContainer>
  )
}

export default Profile