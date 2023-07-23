import React from 'react'
import {ProfileContainer, TopSection, LogoutBtn} from './styles'
import { Text } from 'react-native'
import { MyButton } from '../../components/Buttons/MyButton'
import { useAuth } from '../../api/Auth'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ParamsData, stackTypes } from '../../stacks/mainStack'

const Profile = () => {
  const navigation = useNavigation<stackTypes>();
  const route = useRoute<ParamsData>()
  const id = route.params?.id
  const email = route.params?.email
  const userName = route.params?.name
  const {logOut} = useAuth();
  console.log(id)

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
        <Text>{id}</Text>
        <Text>{userName}</Text>
        <Text>{email}</Text>


      </TopSection>
    </ProfileContainer>
  )
}

export default Profile