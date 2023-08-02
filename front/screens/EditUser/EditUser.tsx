import { View, Text } from 'react-native'
import React from 'react'
import { EditContainer, ImgUser, TopArea, TopImg, TopSection, TopText } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ParamsData } from '../../stacks/mainStack'
import UserImg from '../../assets/conta.png';
import { IconButton } from 'react-native-paper'
import { colors } from '../../components/colors'


const EditUser = () => {
  const route = useRoute<ParamsData>();
  const navigation = useNavigation()
  const picture = route.params?.picture

  const handleBack = () =>{
    navigation.goBack()
  }
  return (
    <EditContainer>
      <TopSection>
        <TopArea>
        <IconButton
          icon='keyboard-backspace'
          onPress={handleBack}
          size={30}
          iconColor={colors.white}
          style={{marginTop:25}}
        />
          <TopText>
            Editar usuario
          </TopText>
          
        </TopArea>
      </TopSection>
      <TopImg>
        <ImgUser source={{uri: picture ? `data:image/png;base64,${picture}`: UserImg }}/>
      </TopImg>
    </EditContainer>
  )
}

export default EditUser