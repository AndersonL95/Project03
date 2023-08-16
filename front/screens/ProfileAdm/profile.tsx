import React, { useEffect, useState} from 'react'
import {ProfileContainer, TopSection, ImgUser, LogoutArea, UserName, UserEmail, ModalBottom, TextModal, ModalBtns, TopImg, TopText, UserCargo} from './styles'
import { useAuth } from '../../api/Auth'
import { useFocusEffect, useNavigation, useRoute, useIsFocused } from '@react-navigation/native'
import { ParamsData, stackTypes } from '../../stacks/mainStack'
import UserImg from '../../assets/conta.png';
import "@react-native-anywhere/polyfill-base64";
import { BottomSheet } from 'react-native-btr';
import { IconButton } from 'react-native-paper';
import { colors } from '../../components/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Profile = () => {
   

  const navigation = useNavigation<stackTypes>();
  const route = useRoute<ParamsData>();
  const id = route.params?.id as number;
  const name = route.params?.name as string;
  const email = route.params?.email as string;
  const cargo = route.params?.cargo as string;
  const verified = route.params?.verified as boolean;
  const password = route.params?.password as string;
  const [image, setImage] = useState()
  const {logOut} = useAuth();
  const [visible, setVisible] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
    
  };
  useEffect(()=>{
    async function getImage(){
      const picture:any = await AsyncStorage.getItem('profileImg')
      setImage(JSON.parse(picture))
    }
    getImage()
  },[])
  const handleLogout = async() =>{
   await logOut()
   navigation.reset({
    index: 1,
    routes: [
      { name: 'Login' },
    ],
  })
}

const handleUser = async() =>{
  
  navigation.push('EditUser',{
    id: id ,
    name: name,
    email: email,
    cargo: cargo,
    verified: verified,
    picture: image,
  
  })
  setVisible(false)
  
}
const handleUserPass = () =>{
  navigation.push('EditPass',{
    id:id,
    password: password
  })
  setVisible(false);
}

  return (
    <ProfileContainer>
      <TopSection>
        <LogoutArea>
        <TopText>Meu perfil</TopText>
          <IconButton
          onPress={toggleBottomNavigationView}
          icon='menu'
          size={40}
          iconColor={colors.white}
        />
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}
          
        >
          <ModalBottom>
            <ModalBtns
             onPress={handleUser}>
              <TextModal>Editar usuario</TextModal>
              <IconButton 
                onPress={handleLogout}
                icon='account-edit'
                size={35}
                iconColor={colors.primary}  
            />
          </ModalBtns>
          <ModalBtns
             onPress={handleUserPass}>
              <TextModal>Alterar senha</TextModal>
              <IconButton 
                onPress={handleLogout}
                icon='account-key'
                size={35}
                iconColor={colors.primary}  
            />
          </ModalBtns>
          <ModalBtns
           onPress={handleLogout}>
            <TextModal>Sair</TextModal>
            <IconButton 
              onPress={handleLogout}
              icon='exit-to-app'
              size={35}
              iconColor={colors.primary}  
            />
          </ModalBtns>
          
        </ModalBottom>
        </BottomSheet>
          </LogoutArea>
        </TopSection>
      <TopImg>
      <ImgUser source={{uri: `data:image/png;base64,${image}` }}/>

          <UserName>{name}</UserName>
          <UserCargo>{cargo}</UserCargo>
          <UserEmail>{email}</UserEmail>
          
      </TopImg>
      
    </ProfileContainer>
  )
}

export default Profile