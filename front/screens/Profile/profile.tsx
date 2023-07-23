import React from 'react'
import {ProfileContainer, TopSection, LogoutBtn} from './styles'
import { Text } from 'react-native'
import { MyButton } from '../../components/Buttons/MyButton'
import { useAuth } from '../../api/Auth'
import { useNavigation } from '@react-navigation/native'
import { stackTypes } from '../../stacks/mainStack'

const Profile = () => {
  const navigation = useNavigation<stackTypes>();

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
        <LogoutBtn
          title="Sair"
          onPress={handleLogout}    
        />
      </TopSection>
    </ProfileContainer>
  )
}

export default Profile