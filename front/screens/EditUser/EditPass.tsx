import React, { useState } from 'react';
import { Button_save, EditContainer, InputArea, InputAreaPass, PassInput, PasswordArea, TopArea, TopSection, TopText } from './styles';
import { IconButton } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors } from '../../components/colors';
import { Alert, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTogglePasswordVisibility } from '../../components/useTogglePasswordVisibility';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UpdatePass } from '../../api/ServiceApi';
import { ParamsData } from '../../stacks/mainStack';

const EditPass = () => {
    const route = useRoute<ParamsData>();
    const navigation = useNavigation();
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const id = route.params?.id as number;
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const handleBack = () =>{
        navigation.goBack();
}
const handleSubmite = async() =>{
    const token = await AsyncStorage.getItem('refreshToken')
    const res:any = await UpdatePass(id, password, newPassword, token)
    if(password.length != 0 && newPassword.length != 0){
        if(res){
            
            Alert.alert("Senha alterada com sucesso.")
            navigation.goBack();
        }
    }else {
     Alert.alert('Senha atual invalida.')
    }
    
}
//console.log("SENHA: ",password.length,"NOVA: ", newPassword.length)
  return (
    <EditContainer>
        <TopSection>
            <TopArea>
            <IconButton
          icon='keyboard-backspace'
          onPress={handleBack}
          size={30}
          iconColor={colors.white}
          style={{marginTop:35}}
        />
                <TopText>Editar senha</TopText>
            </TopArea>
        </TopSection>
        <InputAreaPass>
            <PasswordArea>
                <PassInput
                    placeholder="Senha atual"
                    secureTextEntry={passwordVisibility}
                    value={password}
                    onChangeText={setPassword}
                />
                 <Pressable
                    onPress={handlePasswordVisibility}
                >
                    <MaterialCommunityIcons
                        name={rightIcon} 
                        size={22} 
                        color="#232323"  
                        style={{position:'absolute',right:10, marginTop:20}}    
                    />
                </Pressable>
            </PasswordArea>
            <PasswordArea>
                <PassInput
                    placeholder="Nova senha"
                    secureTextEntry={passwordVisibility}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
                 <Pressable
                    onPress={handlePasswordVisibility}
                >
                    <MaterialCommunityIcons
                        name={rightIcon} 
                        size={22} 
                        color="#232323"  
                        style={{position:'absolute',right:10, marginTop:20}}    
                    />
                </Pressable>
            </PasswordArea>
        </InputAreaPass>
        <Button_save
            onPress={handleSubmite}
        >
            <IconButton 
            icon='content-save-edit'
            size={55}
            iconColor={colors.white}
            />
        </Button_save>
    </EditContainer>
  )
}

export default EditPass