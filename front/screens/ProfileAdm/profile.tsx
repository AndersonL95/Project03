import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react'
import {ProfileContainer, TopSection, LogoutBtn, ImgUser, LogoutArea, UserName, UserEmail, ModalBottom, TextModal} from './styles'
import { Button, StyleSheet, Text, View } from 'react-native'
import { MyButton } from '../../components/Buttons/MyButton'
import { useAuth } from '../../api/Auth'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ParamsData, stackTypes } from '../../stacks/mainStack'
import UserImg from '../../assets/conta.png';
import "@react-native-anywhere/polyfill-base64";
import { BottomSheet } from 'react-native-btr';
import { IconButton } from 'react-native-paper';
import { colors } from '../../components/colors'


const Profile = () => {
   

  const navigation = useNavigation<stackTypes>();
  const route = useRoute<ParamsData>()
  const id = route.params?.id
  const email = route.params?.email
  const userName = route.params?.name
  const picture = route.params?.picture
  const [images,setImages] = useState()
  const {logOut} = useAuth();
  const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  };


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
        <IconButton
          onPress={toggleBottomNavigationView}
          icon='menu'
          size={45}
          iconColor={colors.primary}
        />
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
        >
          <ModalBottom>
          <LogoutBtn
           onPress={handleLogout}>
            <TextModal>Sair</TextModal>
            <IconButton 
              onPress={handleLogout}
              icon='exit-to-app'
              size={35}
              iconColor={colors.primary}  
            />
          </LogoutBtn>
          </ModalBottom>
        </BottomSheet>
          
        </LogoutArea>
         <ImgUser source={{uri: picture ? `data:image/png;base64,${picture}`: UserImg }}
        />
        <UserName>{userName}</UserName>
        <UserEmail>{email}</UserEmail>
        
      </TopSection>
      
    </ProfileContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Profile